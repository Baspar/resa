(ns resa.components.low-lib
  (:require [reaction.core :refer-macros [dispatch!]]
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
