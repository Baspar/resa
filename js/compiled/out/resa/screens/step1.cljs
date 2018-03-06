(ns resa.screens.step1
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [antizer.rum :as ant]
            [rum.core :as rum]
            [resa.components.header :refer [big-header]]))

(defc screen1
  [store]
  (let [m @store
        format "HH:mm"
        disabled? false]
    [:div {:style {:display "flex"
                   :flex-direction "column"}}
     ;; Header
     (big-header store)
     ;; Buttons
     [:div {:style {:display "flex"}}
      (ant/button {:style {:flex 1 :height "4em"}} "Info")
      (ant/button {:style {:flex 1 :height "4em"}} "Menu")
      (ant/button {:style {:flex 1 :height "4em"}} "Review")]
     ;; Text
     [:br]
     [:div {:style {:padding 10}} "An eclectic and authentic Northern French cuisine. Superb ambiance, suitable for romantic and business dinner. Lorem ipsum  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."]
     ;; Button
     [:br]
     (ant/button {:style {:height "4em"}
                  :type "primary"
                  :size "large"
                  :disabled disabled?
                  :on-click #(dispatch! store :go-forward)}
                 "MAKE A BOOKING")]))