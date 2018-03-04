(ns resa.cards.core
  (:require
    [resa.utils :refer [wrap-en]]
    [resa.screens.step1 :refer [screen1]]
    [resa.screens.step2 :refer [screen2]]
    [resa.screens.step3 :refer [screen3]]
    [resa.screens.step4 :refer [screen4]])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

;;; cards
(defcard step1
  (fn [store _]
    (wrap-en (screen1 store)))
  {:screen :step1}
  {:inspect-data true})
(defcard step2
  (fn [store _]
    (wrap-en (screen2 store)))
  {:screen :step2}
  {:inspect-data true})
(defcard step3
  (fn [store _]
    (wrap-en (screen3 store)))
  {:screen :step3}
  {:inspect-data true})
(defcard step4
  (fn [store _]
    (wrap-en (screen4 store)))
  {:screen :step4}
  {:inspect-data true})

