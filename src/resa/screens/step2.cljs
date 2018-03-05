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
        disabled? false
        time-valid? (not (nil? date))
        hour-valid? (not (nil? hour))
        disabledHours (fn [] (if date
                               (let [ totalHours (into #{} (range 1 23))
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
     (small-header store)
     ;; Title
     [:br]
     [:div {:style {:display "flex" :align-items "center"}}
      (ant/select {:default-value "Mr." :on-change #(dispatch! store [:step2--set-title %])}
                  (ant/select-option {:value "Mr."} "Mr.")
                  (ant/select-option {:value "Mrs."} "Mrs.")
                  (ant/select-option {:value "Ms."} "Ms."))
      (ant/input {:placeholder "Your name"
                  :type "text"
                  :auto-focus true
                  :value (or name "")
                  :on-change #(dispatch! store [:step2--set-name %])})]
     ;; Phone number
     (ant/input {:placeholder "Your phone number"
                 :type "tel"
                 :value (or phone "")
                 :on-change #(dispatch! store [:step2--set-phone %])})
     ;; Email
     (ant/input {:placeholder "Your e-mail"
                 :type "email"
                 :value (or email "")
                 :on-change #(dispatch! store [:step2--set-email %])})

     (ant/date-picker { :on-change #(dispatch! store [:step2--set-date %])  :value date :disabledDate disabledDate})

     (ant/time-picker {:on-change #(dispatch! store [:step2--set-hour %] ) :format "HH" :disabledHours disabledHours :disabled (not time-valid?) :hideDisabledOptions true})
     (ant/time-picker {:on-change #(.log js/console %) :format "mm" :minute-step 15 :disabledMinutes disabledMinutes :disabled (and (not hour-valid?) (not time-valid?)) })
     ;; Number pax
     (ant/input {:type "number"
                 :placeholder "Number of guests"
                 :min 1
                 :value (or pax "")
                 :on-change #(dispatch! store [:step2--set-pax %])})
     [:br]
     (ant/button {:style {:height "4em"}
                  :on-click #(dispatch! store :go-forward)
                  :type "primary"
                  :size "large"}
                 "REVIEW")]))
