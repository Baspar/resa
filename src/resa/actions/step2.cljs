(ns resa.actions.step2
  (:require-macros [reaction.core :refer [defaction defaction!]]))


(defaction h-book
  [m]
  (assoc m :screen :step3))

(defaction h-back-to-step1
  [m]
  (assoc m :screen :step1))
