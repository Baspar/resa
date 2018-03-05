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

(defc screen2
  [store]
  (let [m @store
        data (get m :data {})
        format "HH:mm"
        {:keys [pax hour minutes name phone email date]} data
        pax-valid? (and (not (empty? pax))
                        (re-matches #"\d{1,2}" pax))
        name-valid? (and (not (empty? name))
                         (< 3 (count name)))
        phone-valid? (and (not (empty? phone))
                          (re-matches #"\+?\d{7,}" phone))
        email-valid? (and (not (empty? email))
                          (re-matches #"[a-zA-Z0-9_.-]{2,}@[a-zA-Z0-9_-]{2,}\.[a-z]{2,5}" email))
        time-valid? (not (nil? date))
        hour-valid? (not (nil? hour))
        minutes-valid? (not (nil? minutes))
        disabled? (not (and pax-valid?
                            name-valid?
                            time-valid?
                            hour-valid?
                            minutes-valid?
                            phone-valid?
                            email-valid?))
        disabledHours (fn [] (if date
                               (let [totalHours (into #{} (range 1 23))
                                     hours (->> (get available-slot (.format date "YYYY-MM-DD"))
                                                (keep (fn [[k v]]
                                                        (when (not (empty? v))
                                                          k)))
                                                (into #{}))]
                                 (vec (clojure.set/difference totalHours hours)))
                               []))
        disabledMinutes (fn [] (if hour
                                 (let [totalMinute (into #{} (take-nth 15 (range 60)))
                                       minutesAv (into #{} (get-in available-slot [(.format date "YYYY-MM-DD") (.hour hour)]))]
                                   (vec (clojure.set/difference totalMinute minutesAv)))
                                 []))]

    [:div {:style {:display "flex" :flex-direction "column"}}
     ;; Header
     (small-header store)
     ;; Title
     [:br]
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/select {:default-value "Mr."
                   :style {:width "6rem"}
                   :on-change #(dispatch! store [:step2--set-title %])}
                  (ant/select-option {:value "Mr."} "Mr.")
                  (ant/select-option {:value "Mrs."} "Mrs.")
                  (ant/select-option {:value "Ms."} "Ms."))
      (ant/input {:placeholder "Your name"
                  :type "text"
                  :style {:flex 1}
                  :auto-focus true
                  :value (or name "")
                  :on-change #(dispatch! store [:step2--set-name %])})]
     ;; Phone number
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/icon {:type "phone" :style {:width "6rem"}})
      (ant/input {:placeholder "Your phone number"
                  :type "tel"
                  :style {:flex 1}
                  :value (or phone "")
                  :on-change #(dispatch! store [:step2--set-phone %])})]
     ;; Email
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/icon {:type "mail" :style {:width "6rem"}})
      (ant/input {:placeholder "Your e-mail"
                  :type "email"
                  :value (or email "")
                  :style {:flex 1}
                  :on-change #(dispatch! store [:step2--set-email %])})]
     ;; Calendar
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/icon {:type "calendar" :style {:width "6rem"}})
      (ant/date-picker {:on-change #(dispatch! store [:step2--set-date %])
                        :value date
                        :style {:flex 1}
                        :disabledDate disabledDate})
      (ant/time-picker {:on-change #(dispatch! store [:step2--set-hour %])
                        :format "HH"
                        :disabledHours disabledHours
                        :disabled (not time-valid?)
                        :style {:flex 1}
                        :hideDisabledOptions true})
      (ant/time-picker {:on-change #(.log js/console %)
                        :format "mm"
                        :minute-step 15
                        :style {:flex 1}
                        :disabledMinutes disabledMinutes
                        :disabled (and (not hour-valid?)
                                       (not time-valid?))})]
     ;; Number pax
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/icon {:type "user" :style {:width "6rem"}})
      (ant/input {:type "number"
                  :placeholder "Number of guests"
                  :min 1
                  :style {:flex 1}
                  :value (or pax "")
                  :on-change #(dispatch! store [:step2--set-pax %])})]
     ;; Submit button
     [:br]
     (ant/button {:style {:height "4em"}
                  :on-click #(dispatch! store :go-forward)
                  :disabled disabled?
                  :type "primary"
                  :size "large"}
                 "REVIEW")]))
