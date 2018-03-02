(ns resa.actions.step1
  (:require-macros [reaction.core :refer [defaction defaction!]]))


(defaction h-next
  [m]
  (assoc m :screen :step2))
