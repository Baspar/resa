(ns resa.components.hi-header
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(defc header
  [store]
    (let [m @store
          screen (get m :screen :step1)]
    [:div {:style {:display "flex"
                   :padding 25
                   :background-color "#000000"
                   :justify-content "space-between"
                   :color "#d6cda0"}}
     (ant/icon {:type "arrow-left"
                :style {:font-size 20
                        :transition "opacity .3s"
                        :opacity (if (= screen :step1) 0 1)}})
     [:img {:src "/images/logo-phood.svg"}]]))
