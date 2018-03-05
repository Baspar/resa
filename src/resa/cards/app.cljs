(ns resa.cards.app
  (:require
    [resa.utils :refer [wrap-en]]
    [resa.screens.core :refer [ui-screen]])
  (:require-macros
    [devcards.core :as dc :refer [defcard]]))

(defcard app
  (fn [store]
    (ui-screen store))
  {}
  {:inspect-data true})
