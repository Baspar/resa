(ns resa.components.hi-lib
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
   [:div {:style {:display "flex" :align-items "center"}}
    left-item
    (ant/form-item (form-item-param error?)
                   (ant/input params))]))