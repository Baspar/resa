(ns resa.components.header
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

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
                   :on-click #(dispatch! store :header--go-back)}
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
    "FANCY RESTAURANT NAME"]
   [:div {:style {:font-size "0.7em"}} "4.89 (488)"]
   [:div {:style {:font-size "0.7em"}} "SINGAPORE CBD"]])
(defc small-header
  [store]
  (header-s store true))
(defc small-header-no-back
  [store]
  (header-s store false))
