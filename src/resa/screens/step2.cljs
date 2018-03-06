(ns resa.screens.step2
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [resa.components.header :refer [small-header]]
            [resa.components.hi-lib :refer [custom-icon input select date-picker time-picker button]]
            [antizer.rum :as ant]
            [rum.core :as rum]
            [resa.db :refer [available-slot]]))

(defn disabledDate
  [current]
  (let [data (if current (get available-slot  (.format current "YYYY-MM-DD") nil))]
    (empty? data)))

(defc screen2
  [store]
  (let [m @store
        data (get m :data {})
        {:keys [pax hour minutes name phone email date]} data
        {:keys [pax-invalid? name-invalid? phone-invalid? email-invalid? date-invalid? hour-invalid? minutes-invalid?]} data
        disabled? (or pax-invalid?
                      name-invalid?
                      date-invalid?
                      hour-invalid?
                      minutes-invalid?
                      phone-invalid?
                      email-invalid?)
        form-item-param (fn form-item-param
                          ([error?] (form-item-param error? 1))
                          ([error? flex] (cond-> {:style {:flex flex}}
                                           error? (-> (assoc :help error?)
                                                      (assoc :validate-status "error")))))
        submit-fn (fn [e] (do
                            (.stopPropagation e)
                            (.preventDefault e)
                            (when (not disabled?) (dispatch! store :step2--submit))))
        disabledHours (fn [] (if date
                               (let [totalHours (into #{} (range 1 23))
                                     hours (->> (get available-slot date)
                                                (keep (fn [[k v]]
                                                        (when (not (empty? v))
                                                          k)))
                                                (into #{}))]
                                 (vec (clojure.set/difference totalHours hours)))
                               []))
        disabledMinutes (fn [] (let [totalMinute (into #{} (take-nth 15 (range 60)))
                                     minutesAv (into #{} (if hour
                                                           (get-in available-slot [date hour])
                                                           []))]
                                 (vec (clojure.set/difference totalMinute minutesAv))))]

    [:form {:on-submit submit-fn}
     [:div {:style {:display "flex"
                    :flex-direction "column"
                    :background-color "rgba(25,29,9,0.8)"}}
      ;; Header
      (small-header store)
      ;; Title
      [:br]
      [:div {:style {:font-size 9
                     :color "white"
                     :font-weight "bold"}}
       "INFORMATION REQUIRED"]
      [:br][:br]
      (input name-invalid?
             {:placeholder "Your name"
              :type "text"
              :auto-focus true
              :value (or name "")
              :on-change #(dispatch! store [:step2--set-name %])}
             (select store))
      ;; Phone number
      (input phone-invalid?
             {:placeholder "Your phone number"
              :type "tel"
              :value (or phone "")
              :on-change #(dispatch! store [:step2--set-phone %])}
             (custom-icon "phone"))
      ;; Email
      (input email-invalid?
             {:placeholder "Your e-mail"
              :type "email"
              :value (or email "")
              :on-change #(dispatch! store [:step2--set-email %])}
             (custom-icon "mail"))
      ;; Calendar
      [:div {:style {:display "flex" :align-items "center"}}
       (date-picker date-invalid?
                    {:on-change #(dispatch! store [:step2--set-date %])
                     :style {:width "100%"}
                     :value (when date (js/moment date))
                     :disabledDate disabledDate}
                    (custom-icon "calendar"))

       (time-picker minutes-invalid?
                    {:on-change #(dispatch! store [:step2--set-time %])
                     :style {:width "100%"}
                     :format "HH:mm"
                     :minute-step 15
                     :disabledHours disabledHours
                     :disabledMinutes disabledMinutes
                     :disabled (not date)
                     ;; :value (when hour (.. js/window moment (set "hour" hour)))
                     :value (when (and hour minutes)
                              (.. js/window moment (set "hour" hour) (set "minutes" minutes)))}
                    (custom-icon "clock-circle-o"))]
      ;; Number pax
      (input pax-invalid?
             {:type "number"
              :placeholder "Number of guests"
              :min 1
              :value (or pax "")
              :on-change #(dispatch! store [:step2--set-pax %])}
             (custom-icon "user"))
      ;; Submit button
      [:br]
      (button {:htmlType "submit"
               :style {:height "4em"}
               :on-click submit-fn
               :disabled disabled?
               :type "primary"
               :size "large"}
              "REVIEW")]]))

(defc navigation
  [state]
  [:div])

(defc next-button
  [state]
  [:div "ta mere"])
