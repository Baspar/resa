(ns resa.screens.step1
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [resa.components.hi-lib :refer [button]]
            [antizer.rum :as ant]
            [rum.core :as rum]
            [resa.components.header :refer [big-header]]
            [resa.components.hi-header :refer [header big-title]]))

(defc screen1
  [store]
  (let [m @store
        format "HH:mm"]
    [:div {:style {:display "flex"
                   :flex-direction "column"}}

     ;; Header hi
     (header store)
     (big-title)

     ;; low/mid
     ;; (big-header store)
     ;;  (ant/button {:style {:flex 1 :height "4em"}} "Info")
     ;;  (ant/button {:style {:flex 1 :height "4em"}} "Menu")
     ;;  (ant/button {:style {:flex 1 :height "4em"}} "Review")]
     ;; Text
     [:br]
     [:div {:style {:padding 10}} "An eclectic and authentic Northern French cuisine. Superb ambiance, suitable for romantic and business dinner. Lorem ipsum  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."]]))

(defc navigation
  [state]
  [:div])

(defc next-button
  [state]
  (button {:style {:height "4em"}
           :type "primary"
           :size "large"
           :on-click #(dispatch! store :go-forward)}
          "MAKE A BOOKING"))
