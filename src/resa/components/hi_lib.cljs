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
   (ant/form-item (form-item-param error?)
                  (ant/input (-> params
                                 (assoc :addon-before left-item)
                                 (assoc-in [:style :width] "100%")
                                 (assoc-in [:style :color] "#6b6b6b")
                                 (assoc-in [:style :font-size] "16px"))))))

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
  ([error? params]
   (ant/form-item (form-item-param error?)
                  (ant/date-picker params))))

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
  [error? params]
  (ant/form-item (-> (form-item-param error?)
                     (assoc-in [:style :margin-left] 20))
                 (ant/time-picker params)))
