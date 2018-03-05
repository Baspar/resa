(ns resa.actions.core
  (:require
    [reaction.core :refer-macros [defaction]]
    resa.actions.step1
    resa.actions.step2
    resa.actions.step3
    resa.actions.step4))

(defaction go-back
  [m]
  (update m :screen #(case (or % :step1)
                       :step1 :step1
                       :step2 :step1
                       :step3 :step2
                       :step4 :step3)))

(defaction go-forward
  [m]
  (update m :screen #(case (or % :step1)
                       :step1 :step2
                       :step2 :step3
                       :step3 :step4
                       :step4 :step4)))
