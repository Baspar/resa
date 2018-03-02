(ns resa.actions.step1
  (:require [reaction.core :refer-macros [defaction defaction!]]))

(defaction h-next
  [m]
  (assoc m :screen :step2))
