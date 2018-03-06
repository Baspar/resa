(ns resa.components.med-lib
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(defc custom-icon
  [icon-name]
  (ant/icon {:type icon-name :style {:width "6rem" :margin-bottom 24}}))

(defn- form-item-param
  ([error?] (form-item-param error? 1))
  ([error? flex] (cond-> {:style {:flex flex}}
                   error? (-> (assoc :help error?)
                              (assoc :validate-status "error")))))
(defc input
  [error? params]
  (ant/form-item (form-item-param error?)
                 (ant/input params)))

(defc select
  [store]
  (ant/form-item {}
                 (ant/select {:default-value "Mr."
                              :style {:width "6rem"}
                              :on-change #(dispatch! store [:step2--set-title %])}
                             (ant/select-option {:value "Mr."} "Mr.")
                             (ant/select-option {:value "Mrs."} "Mrs.")
                             (ant/select-option {:value "Ms."} "Ms."))))
