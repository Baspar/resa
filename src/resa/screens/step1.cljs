(ns resa.screens.step1
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]
             [antizer.rum :as ant]
             [rum.core :as rum]]))

(defc screen1
  [store]
  (let [{:keys [pax time name phone email]} (:data @store)]
    [:div
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

     (ant/input
       {:type "datetime-local"
        :value (or time "")
        :style {:margin 5}
        :on-change #(swap! store assoc-in [:data :time]
                           (-> % .-target .-value))})
     [:br]
     (ant/button {:style {:width "100%" :margin 5} :on-click #(dispatch! :h-next store)} "Next...")
     [:br]]))
