(ns resa.cards.core
  (:require
    resa.cards.app
    [resa.utils :refer [wrap-en]]
    [resa.screens.step1 :refer [screen1]]
    [resa.screens.step2 :refer [screen2]]
    [resa.screens.step3 :refer [screen3]]
    [resa.screens.step4 :refer [screen4]])
  (:require-macros
    [devcards.core :as dc :refer [defcard]]))

(defcard screen1
  (fn [store]
    (screen1 store))
  {}
  {:inspect-data true})

(defcard screen2
  (fn [store]
    (screen2 store))
  {}
  {:inspect-data true})

(defcard screen3
  (fn [store]
    (screen3 store))
  {}
  {:inspect-data true})

(defcard screen4
  (fn [store]
    (screen4 store))
  {}
  {:inspect-data true})
