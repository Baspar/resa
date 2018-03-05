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
  (let [m @store
        format "HH:mm"
        disabled? false]
    [:div
     ;; Header
     (big-header store)
     ;; Buttons
     [:div {:style {:display "flex"}}
      (ant/button {:style {:flex 1 :padding 5}} "Info")
      (ant/button {:style {:flex 1 :padding 5}} "Menu")
      (ant/button {:style {:flex 1 :padding 5}} "Review")]
     ;; Text
     [:div {:style {:padding 10}} "An eclectic and authentic Northern French cuisine. Superb ambiance, suitable for romantic and business dinner. Lorem ipsum  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."]
     ;; Button
     (ant/button {:style {:width "100%" :margin 5}
                  :type "primary"
                  :size "large"
                  :disabled disabled?
                  :on-click #(dispatch! store :go-forward)}
                 "BOOK")]))
