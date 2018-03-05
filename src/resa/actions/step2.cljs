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
  (assoc-in m [:data :phone] (.. event -target -value)))

(defaction step2--set-email
  [m event]
  (assoc-in m [:data :email] (.. event -target -value)))

(defaction step2--set-pax
  [m event]
  (assoc-in m [:data :pax] (.. event -target -value)))

(defaction step2--set-date
  [m value]
  (assoc-in m [:data :date] value))

;; (defaction step2--set-
;;   [m event]
;;   m)
