(ns resa.components.low-lib
  (:require [reaction.core :refer-macros [dispatch!]]
            [antizer.rum :as ant]
            [rum.core :refer-macros [defc]]))

(defc custom-icon
  [icon-name]
  [:div {:style {:display "flex" :justify-content "center" :align-items "center"
                 :width "6rem"}}
   (str
     "["
     (clojure.string/upper-case (first icon-name))
     "]")])

(defc input
  ([error? params]
   (input error? params nil))
  ([error? params left-item]
   [:div {:style {:display "flex" :align-items "center" :flex 1}}
    left-item
    [:input (-> params
                (assoc-in [:style :flex] 1))]]))

(defc button
  [params text]
  [:button params text])

(defc navigation
  [store])

(defc select
  [store]
  [:select {:on-change #(dispatch! store [:step2--set-title %])
            :default-value "Mr." }
   [:option {:value "Mr."} "Mr."]
   [:option {:value "Ms."} "Ms."]
   [:option {:value "Mrs."} "Mrs"]])

(defc date-picker
  [error? params left-item]
  [:div {:style {:display "flex" :flex 1}}
   left-item
   [:input (-> params
               (update :on-change (fn [on-change]
                                    (fn [js-date]
                                      (let [moment-date (js/moment (.-value (.-target js-date)))]
                                        (on-change moment-date)))))
               (assoc :type "date"))]])

(defc time-picker
  [error? params left-item store]
  [:display {:style {:display "flex" :flex 1}}
   left-item
   [:select
    (->> (range 24)
         (map #(-> [:option %])))]
   [:select
    (->> [0 15 30 45]
         (map #(-> [:option %])))]])

(defc text-home
  [_]
  [:div {:style {:padding 11}} "An eclectic and authentic Northern French cuisine. Superb ambiance, suitable for romantic and business dinner. Lorem ipsum  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."])
(def restaurant-info
  {:name "FANCY RESTAURANT NAME"
   :ratings "4.89 (488)"
   :location "SINGAPORE CBD"})
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
(defc small-header [_])

(def mode "low")
