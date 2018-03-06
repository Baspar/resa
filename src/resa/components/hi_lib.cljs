(ns resa.components.hi-lib
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(defc custom-icon
  ([icon]
   (custom-icon icon {}))
  ([icon-name params]
   (ant/icon (-> params
                 (merge {:type icon-name :style {:color "white"
                                                 :width "4rem"}})))))

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
   [:div {:style {:display "flex" :flex 1}}
    [:div {:class "ant-input-group-addon"
           :style {:height "4rem"
                   :width "6rem"
                   :display "flex"
                   :justify-content "center"
                   :align-items "center"}}
     left-item]
    (ant/form-item (form-item-param error?)
                   (ant/input (-> params
                                  (assoc-in [:style :width] "100%")
                                  (assoc-in [:style :color] "#6b6b6b")
                                  (assoc-in [:style :font-size] "16px"))))]))

(defc select
  [store]
  (ant/select {:default-value "Mr."
               :style {:width "6rem"
                       :color "white"}
               :on-change #(dispatch! store [:step2--set-title %])}
              (ant/select-option {:value "Mr."} "Mr.")
              (ant/select-option {:value "Mrs."} "Mrs.")
              (ant/select-option {:value "Ms."} "Ms.")))

(defc date-picker
  ([error? params left-item]
   [:div {:style {:display "flex" :flex 1}}
    [:div {:class "ant-input-group-addon"
           :style {:height "4rem"
                   :width "6rem"
                   :display "flex"
                   :justify-content "center"
                   :align-items "center"}}
     left-item]
    (ant/form-item (form-item-param error?)
                   (ant/date-picker params))]))

(defc button
  [params text]
  (let [type (get params :type)]
    (ant/button (-> params
                    (assoc-in [:style :backgroundColor] "#908247")
                    (assoc-in [:style :border] "none")
                    (assoc-in [:style :font-weight] "bold")
                    (assoc-in [:style :height] "45px")
                    (assoc :type "primary")
                    (assoc :htmlType type))
                text)))

(defc time-picker
  [error? params left-item]
  [:div {:style {:display "flex" :flex 1 :margin-left 20}}
   [:div {:class "ant-input-group-addon"
          :style {:height "4rem"
                  :width "6rem"
                  :display "flex"
                  :justify-content "center"
                  :align-items "center"}}
    left-item]
   (ant/form-item (form-item-param error?)
                  (ant/time-picker params))])
(defc navigation
  [store]
    (let [m @store
          screen (get m :screen :step1)]
    [:div {:style {:display "flex"
                   :padding 25
                   :background-color "#000000"
                   :justify-content "space-between"
                   :color "#d6cda0"}}
     (ant/icon {:on-click #(dispatch! store :go-back)
                :type "arrow-left"
                :style {:font-size 20
                        :transition "opacity .3s"
                        :opacity (if (= screen :step1) 0 1)}})
     [:img {:src "/images/logo-phood.svg"}]]))

;; Header
(def big-title-text-style {:color "#ffffff"
                           :background-color "#cdbb66"
                           :font-size 36
                           :padding "6px 20px"
                           :font-weight "600"
                           :line-height "1.19em"})
(def button-style {:font-size 9
                   :border-radius 0
                   :margin 1
                   :border "none"
                   :text-align "left"
                   :padding-right 25
                   :background-color "rgba(109, 90, 0, 0.7)"
                   :color "#ffffff"
                   :letter-spacing "2.4px"})
(def title-text-style {:color "#ffffff"
                       :background-color "#cdbb66"
                       :font-size 24
                       :padding "6px 20px"
                       :font-weight "500"
                       :line-height "1.3em"})
(def data
  {:name "FANCY RESTAURANT NAME"
   :ratings "4.89 (488)"
   :location "51B Circular Road, 049406 "})
(defc buttons
  []
  [:div {:style {:display "flex"}}
   [:div {:style {:flex 7}}
    [:div
     (ant/button-group {:style {:margin "40px 0px 40px 20px"}
                        :type "star"}
                       (ant/button {:style button-style :class "button-fake"} "INFO")
                       (ant/button {:style button-style} "MENU")
                       (ant/button {:style button-style} "REVIEW"))]]
   [:div {:style {:flex 3}}]])
(defc restaurant-info
  []

  [:div {:style {:display "flex"}}
  [:div {:style {:flex 5
                 :background-color "rgba(84, 80, 64, 0.8)"
                 :color "#ffffff"
                 :font-size 14
                 :margin "10px 0px 5px 0px"
                 :padding "10px 5px 10px 20px"
                 :font-weight "200"}}
   [:div
    (ant/icon {:style {:margin 5} :type "star"})
    (:ratings data)]
   [:div
    (ant/icon {:style {:margin 5} :type "environment"})
    (:location data)]]
   [:div {:style {:flex 3}}]])
(defc big-header
  [_]
  [:div
    [:div {:style { :margin "10px 0px"
                   :flex-direction "column"}}
      [:span {:style big-title-text-style} "FANCY"] [:br]
      [:span {:style big-title-text-style} "RESTAURANT"] [:br]
      [:span {:style big-title-text-style} "NAME"] [:br]]
      (restaurant-info)
      (buttons)])
(defc small-header
  [_]
  [:div
    [:div {:style { :margin "10px 0px"
                   :flex-direction "column"}}
      [:span {:style title-text-style} "FANCY"] [:br]
      [:span {:style title-text-style} "RESTAURANT"] [:br]
      [:span {:style title-text-style} "NAME"] [:br]]
    (restaurant-info)])


