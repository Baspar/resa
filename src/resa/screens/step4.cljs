(ns resa.screens.step4
  (:require [rum.core :refer-macros [defc]]
   [reaction.core :refer-macros [dispatch!]
    [antizer.rum :as ant]
    [rum.core :as rum]]))

(defc screen4
  [store]
  [:div
   [:br]
   [:p "Dear MM. " (or name "")]
   [:p "Thank you for your reservation!"]
   [:p "A confirmation e-mail has been sent to: " (or email "")]
   [:button
    {:class "btn btn-default btn-block"
     :auto-focus true
     :on-click #(dispatch! :h-start-again store)}
    "<< Start again"]
   [:br]])
