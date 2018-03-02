(ns resa.screens.step3
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [antizer.rum :as ant]
            [rum.core :as rum]))

(defc screen3
  [store]
  (let [data (:data @store)
        {:keys [pax time name phone email]} data]
    [:div
     [:br]
     [:ul
      [:li "Name: " (or name "")]
      [:li "Phone: " (or phone "")]
      [:li "E-mail: " (or email "")]
      [:li "Date/time: " (or time "")]
      [:li "N. of guests: " (or pax "")]]
     (ant/button
      {:style {:width "100%" :margin 5}
       :on-click #(dispatch! store :h-start-again)}
      "<< Start again")
     (ant/button
      {:style {:width "100%" :margin 5}
       :on-click #(dispatch! store :h-back-to-step2)}
      "< Back")
     (ant/button
      {:style {:width "100%" :margin 5}
       :on-click #(dispatch! store :h-confirm)
       :auto-focus true}
      "Confirm booking!")
     [:br]]))
