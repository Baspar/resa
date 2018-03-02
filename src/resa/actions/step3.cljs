(ns resa.actions.step3
  (:require-macros [reaction.core :refer [defaction defaction!]]))

(defaction h-start-again
  [m]
  (assoc m :screen :step1))

(defaction h-back-to-step2
  [m]
  (assoc m :screen :step2))

(defaction h-confirm
  [m]
  (assoc m :screen :step4))
