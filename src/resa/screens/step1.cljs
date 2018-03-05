(ns resa.screens.step1
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [antizer.rum :as ant]
            [rum.core :as rum]
            [resa.components.header :refer [big-header]]
            [resa.db :refer [avaliable-slot]]))

(defn disabledDate
  [current]
  (let [data (if current (get avaliable-slot (.format current "YYYY-MM-DD") nil))]
       (empty? data)))

(defc screen1
  [store]
  (let [{:keys [pax time name phone email]} (:data @store)
        format "HH:mm"]
    [:div
     (big-header store)
     [:br]
     (ant/input
       {:type "number"
        :placeholder "Number of guests"
        :min 1
        :style {:margin 5}
        :auto-focus true
        :value (or pax "")
        :on-change #(swap! store assoc-in [:data :pax]
                           (-> % .-target .-value))})
     [:br]
     (ant/date-picker {:style {:margin 5} :disabledDate disabledDate})

     (ant/time-picker {:format format :minute-step 15})

     (ant/input
       {:type "datetime-local"
        :value (or time "")
        :style {:margin 5}
        :on-change #(swap! store assoc-in [:data :time]
                           (-> % .-target .-value))})
     [:br]
     (ant/button {:style {:width "100%" :margin 5} :on-click #(dispatch! store :h-next)} "Next...")
     [:br]]))
