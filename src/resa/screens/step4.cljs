(ns resa.screens.step4
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [resa.components.header :refer [small-header-no-back]]
            [antizer.rum :as ant]
            [rum.core :as rum]))

(defc screen4
  [store]
  (let [{:keys [pax time name phone email]} (:data @store)]
    [:div
     (small-header-no-back store)
     [:br]
     [:p "Dear MM. " (or name "")]
     [:p "Thank you for your reservation!"]
     [:p "A confirmation e-mail has been sent to: " (or email "")]]))

(defc navigation
  [state]
  [:div])

(defc next-button
  [state])
