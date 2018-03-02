(ns resa.screens.step4
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [antizer.rum :as ant]
            [rum.core :as rum]))

(defc screen4
  [store]
  (let [{:keys [pax time name phone email]} (:data @store)]
    [:div
     [:br]
     [:p "Dear MM. " (or name "")]
     [:p "Thank you for your reservation!"]
     [:p "A confirmation e-mail has been sent to: " (or email "")]
     [:button
      {:class "btn btn-default btn-block"
       :auto-focus true
       :on-click #(dispatch! store :h-start-again)}
      "<< Start again"]
     [:br]]))
