(ns resa.utils)

(defn wrap-en
  [& children]
  (apply ant/locale-provider
         {:locale (ant/locales "en_US")}
         children))
