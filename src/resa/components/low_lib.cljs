(ns resa.components.low-lib
  (:require [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(defc custom-icon
  [icon-name]
  [:div {:style {:display "flex" :justify-content "center" :align-items "center"
                 :width "6rem"}}
   (str
     "["
     (clojure.string/upper-case (first icon-name))
     "]")])

(defc input
  ([error? params]
   (input error? params nil))
  ([error? params left-item]
   [:div {:style {:display "flex" :align-items "center" :flex 1}}
    left-item
    [:input (-> params
                (assoc-in [:style :flex] 1))]]))

(defc select
  [store]
  [:select {:on-change #(dispatch! store [:step2--set-title %])
            :default-value "Mr." }
   [:option {:value "Mr."} "Mr."]
   [:option {:value "Ms."} "Ms."]
   [:option {:value "Mrs."} "Mrs"]])

(defc date-picker
  [error? params left-item]
  [:input (-> params
              (update :on-change (fn [on-change]
                                   (fn [js-date]
                                     (let [moment-date (js/moment (.-value (.-target js-date)))]
                                       (on-change moment-date)))))
              (assoc :type "date"))])
