(ns resa.screens.core
  (:require
    [resa.screens.step1 :refer [screen1]]
    [resa.screens.step2 :refer [screen2]]
    [resa.screens.step3 :refer [screen3]]
    [antizer.rum :as ant]
    [rum.core :as rum]
    [resa.screens.step4 :refer [screen4]]
    [reaction.core :refer-macros [dispatch!]]))

(defmulti ui-screen
  (fn [store] (:screen @store)))

(defmethod ui-screen :step1
  [store]
  (resa.screens.core.screen1 store))

;;; step2
(defmethod ui-screen :step2
  [store]
  (resa.screens.core.screen2 store))

;;; step3
(defmethod ui-screen :step3
  [store]
  (resa.screens.core.screen3 store))

;;; step4
(defmethod ui-screen :step4
  [store]
  (resa.screens.core.screen4 store))
  ;; (let [{:keys [pax time name phone email]} (:data @store)]
  ;;   (html [:div
  ;;          [:br]
  ;;          [:p "Dear MM. " (or name "")]
  ;;          [:p "Thank you for your reservation!"]
  ;;          [:p "A confirmation e-mail has been sent to: " (or email "")]
  ;;          [:button
  ;;           {:class "btn btn-default btn-block"
  ;;            :auto-focus true
  ;;            :on-click #(dispatch! :h-start-again store)}
  ;;           "<< Start again"]
  ;;          [:br]])))
