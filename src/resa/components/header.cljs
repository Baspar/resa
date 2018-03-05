(ns resa.components.header
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(def restaurant-info
  {:name "FANCY RESTAURANT NAME"
   :ratings "4.89 (488)"
   :location "SINGAPORE CBD"})

(defn- header-s
  [store back-button?]
  [:div {:style {:background-color "#EEEEEE"
                 :display "flex"
                 :flex-direction "column"
                 :border "solid grey 1px"
                 :padding 10}}
   [:div {:style {:display "flex"
                  :flex-direction "row"
                  :justify-content (if back-button? "space-between" "flex-end")}}
    (when back-button?
      (ant/button {:size "large"
                   :on-click #(dispatch! store :go-back)}
                  "<<"))
    [:div {:style {:font-size "0.7em"}}
     "PHOOD"]]
   [:div {:style {:color "grey"
                  :font-size "1.2em"
                  :margin-top "5px"
                  :line-height "1em"
                  :font-weight "bold"}}
    "MAKE A BOOKING"]
   [:div {:style {:font-size "1.2em"
                  :font-weight "bold"}}
    (:name restaurant-info)]
   [:div {:style {:font-size "0.7em"}} (:ratings restaurant-info)]
   [:div {:style {:font-size "0.7em"}} (:location restaurant-info)]])
(defc small-header
  [store]
  (header-s store true))
(defc small-header-no-back
  [store]
  (header-s store false))

(defc big-header
  [store]
  [:div {:style {:background-color "#EEEEEE"
                 :display "flex"
                 :flex-direction "column"
                 :border "solid grey 1px"
                 :padding 10}}
   [:div {:style {:display "flex"
                  :flex-direction "row"
                  :justify-content "flex-end"}}
    [:div {:style {:font-size "0.7em"}}
     "PHOOD"]]
   [:div {:style {:font-size "2em"
                  :font-weight "bold"}}
    (:name restaurant-info)]
   [:div {:style {:font-size "0.7em"}} (:ratings restaurant-info)]
   [:div {:style {:font-size "0.7em"}} (:location restaurant-info)]])
