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
