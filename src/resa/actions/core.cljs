(ns resa.actions.core
  (:require
    [reaction.core :refer-macros [defaction]]
    resa.actions.step1
    resa.actions.step2
    resa.actions.step3
    resa.actions.step4))

(defaction header--go-back
  [m]
  (update m :screen #(case %
                       :step1 :step1
                       :step2 :step1
                       :step3 :step2
                       :step4 :step3)))
