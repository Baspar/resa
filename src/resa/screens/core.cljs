(ns resa.screens.core
  (:require
    [resa.screens.step1 :as screen1]
    [resa.screens.step2 :as screen2]
    [resa.screens.step3 :as screen3]
    [resa.screens.step4 :as screen4]
    [antizer.rum :as ant]
    [rum.core :refer-macros [defc]]
    [reaction.core :refer-macros [dispatch!]]))

(defc ui-wrap
  [store screen nav next-button]
  (let [node (.getElementById js/document "main-app-area")]
    [:div {:style (cond-> {:display "flex"
                           :flex-direction "column"}
                    node (assoc :height "100vh"))}
     (nav store)
     ;; [:div {:style {:flex 1
     ;;                :overflow-y "auto"}}
     ;;  (screen store)]
     (next-button store)]))

(defmulti ui-screen
  (fn [store] (get @store :screen :step1)))

;; step1
(defmethod ui-screen :step1
  [store]
  (ui-wrap store
           screen1/nav
           screen1/screen1
           screen1/next-button))

;;; step2
(defmethod ui-screen :step2
  [store]
  (ui-wrap store
           screen2/nav
           screen2/screen2
           screen2/next-button))

;;; step3
(defmethod ui-screen :step3
  [store]
  (ui-wrap store
           screen3/nav
           screen3/screen3
           screen3/next-button))

;;; step4
(defmethod ui-screen :step4
  [store]
  (ui-wrap store
           screen4/nav
           screen4/screen4
           screen4/next-button))
