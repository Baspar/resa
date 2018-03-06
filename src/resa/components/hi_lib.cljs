(ns resa.components.hi-lib
  (:require [antizer.rum :as ant]
            [reaction.core :refer-macros [dispatch!]]
            [rum.core :refer-macros [defc]]))

(defc custom-icon
  [icon-name]
  (ant/icon {:type icon-name :style {:width "6rem" :margin-bottom 24}}))

(defc input
  []
  )
