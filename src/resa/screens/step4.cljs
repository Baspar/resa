(ns resa.screens.step4
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [antizer.rum :as ant]
            [rum.core :as rum]
            [resa.components.hi-lib :refer [mode small-header navigation]]))

(defc screen4
  [store]
  (let [{:keys [pax time name phone email]} (:data @store)]
    [:div {:style {:flex 1
                   :display "flex"
                   :flex-direction "column"}}
     (small-header store)
     [:br]
     [:div {:style {:background-color (when (= mode "hi") "rgba(0, 0, 0, 0.8)")
                    :padding 20
                    :color (when (= mode "hi") "white")
                    :font-weight "bold"
                    :flex 1}}
      [:p "Booking request is successful."]

      [:p "A representative from Fancy Restaurant Name will call you to confirm your reservation a day before  your reservation date"]
      [:p "A confirmation e-mail has been sent to: " (or email "")]]]))

(defc nav
  [state]
  (navigation state))

(defc next-button
  [state])
