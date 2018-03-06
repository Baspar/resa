(ns resa.components.low-lib
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(defc custom-icon
  [icon-name]
  [:div {:style {:display "flex" :justify-content "center" :align-items "center"
                 :width "6rem"}}
   (str
     "["
     (clojure.string/upper-case (first icon-name))
     "]")])


(defc select
  [store]
  [:select {:on-change #(dispatch! store [:step2--set-title %])
            :default-value "Mr." }
   [:option {:value "Mr."} "Mr."]
   [:option {:value "Ms."} "Ms."]
   [:option {:value "Mrs."} "Mrs"]])
