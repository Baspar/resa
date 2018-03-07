(ns resa.screens.step1
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [antizer.rum :as ant]
            [rum.core :as rum]
            [resa.components.low-lib :refer [big-header navigation button text-home]]))

(defc screen1
  [store]
  (let [m @store
        format "HH:mm"
        disabled? false]
    [:div {:style {:display "flex"
                   :flex-direction "column"}}
     (big-header store)
     [:br]
     (text-home store)
     (text-home store)
     (text-home store)
     ]))

(defc nav
  [state]
  (navigation state))

(defc next-button
  [store]
  (button {:style {:height "4em"}
           :type "primary"
           :size "large"
           :on-click #(dispatch! store :go-forward)}
          "MAKE A BOOKING"))
