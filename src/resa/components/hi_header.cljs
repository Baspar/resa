(ns resa.components.hi-header
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(def big-title-text-style {:color "#ffffff"
                       :background-color "#cdbb66"
                       :font-size 36
                       :padding "6px 20px"
                       :font-weight "600"
                       :line-height "1.19em"})

(def title-text-style {:color "#ffffff"
                       :background-color "#cdbb66"
                       :font-size 24
                       :padding "6px 20px"
                       :font-weight "500"
                       :line-height "1.19em"})
(def data
  {:name "FANCY RESTAURANT NAME"
   :ratings "4.89 (488)"
   :location "51B Circular Road, 049406 "})
(defc header
  [store]
    (let [m @store
          screen (get m :screen :step1)]
    [:div {:style {:display "flex"
                   :padding 25
                   :background-color "#000000"
                   :justify-content "space-between"
                   :color "#d6cda0"}}
     (ant/icon {:type "arrow-left"
                :style {:font-size 20
                        :transition "opacity .3s"
                        :opacity (if (= screen :step1) 0 1)}})
     [:img {:src "/images/logo-phood.svg"}]]))

(defc restaurant-info
  []

  [:div {:style {:display "flex"}}
  [:div {:style {:flex 5
                 :background-color "rgba(84, 80, 64, 0.8)"
                 :color "#ffffff"
                 :font-size 14
                 :padding "10px 5px 10px 20px"
                 :font-weight "200"}}
   [:div
    (ant/icon {:style {:margin 5} :type "star"})
    (:ratings data)]
   [:div
    (ant/icon {:style {:margin 5} :type "environment"})
    (:location data)]]
   [:div {:style {:flex 3}}]])

(defc big-title
  []
  [:div
    [:div {:style { :margin "10px 0px"
                   :flex-direction "column"
                   :border "solid grey 1px"}}
      [:span {:style big-title-text-style} "FANCY"] [:br]
      [:span {:style big-title-text-style} "RESTAURANT"] [:br]
      [:span {:style big-title-text-style} "NAME"] [:br]]
      (restaurant-info)])

(defc title
  []
  [:div
    [:div {:style { :margin "10px 0px"
                   :flex-direction "column"
                   :border "solid grey 1px"}}
      [:span {:style title-text-style} "FANCY"] [:br]
      [:span {:style title-text-style} "RESTAURANT"] [:br]
      [:span {:style title-text-style} "NAME"] [:br]]
    (restaurant-info)])

