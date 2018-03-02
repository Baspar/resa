(ns resa.cards.core
  (:require
    [resa.utils :refer [wrap-en]]
    [resa.screens.core :refer [ui-screen]])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

;;; cards
(defcard step1
  (fn [store _]
    (wrap-en (ui-screen store)))
  {:screen :step1}
  {:inspect-data true})
(defcard step2
  (fn [store _]
    (wrap-en (ui-screen store)))
  {:screen :step2}
  {:inspect-data true})
(defcard step3
  (fn [store _]
    (wrap-en (ui-screen store)))
  {:screen :step3}
  {:inspect-data true})
(defcard step4
  (fn [store _]
    (wrap-en (ui-screen store)))
  {:screen :step4}
  {:inspect-data true})

