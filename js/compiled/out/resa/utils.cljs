(ns resa.utils
  (:require [antizer.rum :as ant]))

(defn wrap-en
  [& children]
  (apply ant/locale-provider
         {:locale (ant/locales "en_US")}
         children))
