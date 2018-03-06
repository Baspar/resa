(ns resa.screens.step2
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [resa.components.header :refer [small-header]]
            [antizer.rum :as ant]
            [rum.core :as rum]
            [resa.db :refer [available-slot ]]))

(defn disabledDate
  [current]
  (let [data (if current (get available-slot  (.format current "YYYY-MM-DD") nil))]
    (empty? data)))

(defc custom-icon
  [icon-name]
  (ant/icon {:type icon-name :style {:width "6rem" :margin-bottom 24}}))

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
     [:div {:style {:display "flex" :flex-direction "column"}}
      ;; Header
      (small-header store)
      ;; Title
      [:br]
      [:div {:style {:display "flex" :align-items "center" }}
       (ant/form-item {}
                      (ant/select {:default-value "Mr."
                                   :style {:width "6rem"}
                                   :on-change #(dispatch! store [:step2--set-title %])}
                                  (ant/select-option {:value "Mr."} "Mr.")
                                  (ant/select-option {:value "Mrs."} "Mrs.")
                                  (ant/select-option {:value "Ms."} "Ms.")))
       (ant/form-item (form-item-param name-invalid?)
                      (ant/input {:placeholder "Your name"
                                  :type "text"
                                  :auto-focus true
                                  :value (or name "")
                                  :on-change #(dispatch! store [:step2--set-name %])}))]
      ;; Phone number
      [:div {:style {:display "flex" :align-items "center" }}
       (custom-icon "phone")
       (ant/form-item (form-item-param phone-invalid?)
                      (ant/input {:placeholder "Your phone number"
                                  :type "tel"
                                  :style {:flex 1}
                                  :value (or phone "")
                                  :on-change #(dispatch! store [:step2--set-phone %])}))]
      ;; Email
      [:div {:style {:display "flex" :align-items "center" }}
       (custom-icon "mail")
       (ant/form-item (form-item-param email-invalid?)
                      (ant/input {:placeholder "Your e-mail"
                                  :type "email"
                                  :value (or email "")
                                  :style {:flex 1}
                                  :on-change #(dispatch! store [:step2--set-email %])}))]
      ;; Calendar
      [:div {:style {:display "flex" :align-items "center" }}
       (custom-icon "calendar")
       (ant/form-item (form-item-param date-invalid? 2)
                      (ant/date-picker {:on-change #(dispatch! store [:step2--set-date %])
                                        :style {:width "100%"}
                                        :value (when date (js/moment date))
                                        :disabledDate disabledDate}))
       (ant/form-item (form-item-param minutes-invalid?)
                      (ant/time-picker {:on-change #(dispatch! store [:step2--set-time %])
                                        :style {:width "100%"}
                                        :format "HH:mm"
                                        :minute-step 15
                                        :disabledHours disabledHours
                                        :disabledMinutes disabledMinutes
                                        :disabled (not date)
                                        ;; :value (when hour (.. js/window moment (set "hour" hour)))
                                        :value (when (and hour minutes)
                                                 (.. js/window moment (set "hour" hour) (set "minutes" minutes)))}))]
      ;; Number pax
      [:div {:style {:display "flex" :align-items "center" }}
       (custom-icon "user")
       (ant/form-item (form-item-param pax-invalid?)
                      (ant/input {:type "number"
                                  :placeholder "Number of guests"
                                  :min 1
                                  :style {:flex 1}
                                  :value (or pax "")
                                  :on-change #(dispatch! store [:step2--set-pax %])}))]
      ;; Submit button
      [:br]
      (ant/button {:htmlType "submit"
                   :style {:height "4em"}
                   :on-click submit-fn
                   :disabled disabled?
                   :type "primary"
                   :size "large"}
                  "REVIEW")]]))
