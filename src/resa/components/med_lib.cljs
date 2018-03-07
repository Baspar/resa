(ns resa.components.med-lib
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(defc custom-icon
  ([icon]
   (custom-icon icon {}))
  ([icon-name params]
   (ant/icon (merge params
                    {:type icon-name :style {:width "6rem" :margin-bottom 24}}))))

(defn- form-item-param
  ([error?]
   (form-item-param error? 1))
  ([error? flex]
   (cond-> {:style {:flex flex}}
     error? (-> (assoc :help error?)
                (assoc :validate-status "error")))))

(defc input
  ([error? params]
   (input error? params nil))
  ([error? params left-item]
   [:div {:style {:display "flex" :align-items "center" :flex 1}}
    left-item
    (ant/form-item (form-item-param error?)
                   (ant/input params))]))

(defc select
  [store]
  (ant/form-item {}
                 (ant/select {:default-value "Mr."
                              :style {:width "6rem"}
                              :on-change #(dispatch! store [:step2--set-title %])}
                             (ant/select-option {:value "Mr."} "Mr.")
                             (ant/select-option {:value "Mrs."} "Mrs.")
                             (ant/select-option {:value "Ms."} "Ms."))))

(defc date-picker
  [error? params left-item]
   [:div {:style {:display "flex" :align-items "center"}}
    left-item
    (ant/form-item (form-item-param error?)
                   (ant/date-picker params))])

(defc button
  [params text]
  (ant/button params text))

(defc time-picker
  [error? params left-item]
  [:div {:style {:display "flex" :align-items "center"}}
   left-item
   (ant/form-item (form-item-param error?)
                  (ant/time-picker params))])

(defc navigation
  [store])

;;Headers
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
      (ant/button {:style {:height "4em"}
                   :on-click #(dispatch! store :go-back)}
                  (ant/icon {:type "double-left"})))
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
   [:div {:style {:font-size "0.7em"}}
    (ant/icon {:type "star"})
    (:ratings restaurant-info)]
   [:div {:style {:font-size "0.7em"}}
    (ant/icon {:type "environment"})
    (:location restaurant-info)]])
(defc small-header
  [store]
  (header-s store true))
(defc small-header-no-back
  [store]
  (header-s store false))
(defc big-header
  [store]
  [:div
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
    [:div {:style {:font-size "0.7em"}}
     (ant/icon {:type "star"})
     (:ratings restaurant-info)]
    [:div {:style {:font-size "0.7em"}}
     (ant/icon {:type "environment"})
     (:location restaurant-info)]]
   (ant/button {:style {:flex 1 :height "4em"}} "Info")
   (ant/button {:style {:flex 1 :height "4em"}} "Menu")
   (ant/button {:style {:flex 1 :height "4em"}} "Review")])

;; text home

(defc text-home
  [_]
  [:div {:style {:padding 10}} "An eclectic and authentic Northern French cuisine. Superb ambiance, suitable for romantic and business dinner. Lorem ipsum  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."])

(def mode "med")
