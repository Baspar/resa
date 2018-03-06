(ns resa.actions.step2
  (:require [reaction.core :refer-macros [defaction defaction!]]))

(defaction step2--set-title
  [m value]
  (assoc-in m [:data :title] value))

(defaction step2--set-name
  [m event]
  (assoc-in m [:data :name] (.. event -target -value)))

(defaction step2--set-phone
  [m event]
  (let [raw-value (.. event -target -value)
        treated-value (-> raw-value
                          (clojure.string/replace #"\D" ""))]
    (assoc-in m [:data :phone] treated-value)))

(defaction step2--set-email
  [m event]
  (assoc-in m [:data :email] (.. event -target -value)))

(defaction step2--set-pax
  [m event]
  (assoc-in m [:data :pax] (.. event -target -value)))

(defaction step2--set-date
  [m value]
  (if value
    (let [date (.format value "YYYY-MM-DD")]
      (-> m
          (assoc-in [:data :date] date)
          (update :data dissoc :hour :minutes)))
    m))

(defaction step2--set-time
  [m value]
  (if value
    (let [old-hour (get-in m [:data :hour])
          old-min (get-in m [:data :minutes])
          new-hour (-> value (.format "HH") (js/parseInt))
          new-min (-> value (.format "mm") (js/parseInt))]
      (cond
        (not= old-hour new-hour) (-> m
                                     (assoc-in [:data :hour] new-hour)
                                     (update :data dissoc :minutes))
        (not= old-min new-min) (assoc-in m [:data :minutes] new-min)
        :else m))
    m))

(defaction step2--set-minute
  [m value]
  (if value
    (let [minutes (-> value (.format "mm") (js/parseInt))]
      (assoc-in m [:data :minutes] minutes))
    m))
