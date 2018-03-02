(ns resa.app
  (:require [resa.screens.core :refer [ui-screen]]
            [resa.utils :refer [wrap-en]]))

;;; app
(defn ui-app
  [store]
  (wrap-en (ui-screen store)))
