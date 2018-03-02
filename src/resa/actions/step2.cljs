(ns resa.actions.step2
  (:require [reaction.core :refer-macros [defaction defaction!]]))


(defaction h-book
  [m]
  (assoc m :screen :step3))

(defaction h-back-to-step1
  [m]
  (assoc m :screen :step1))
