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
