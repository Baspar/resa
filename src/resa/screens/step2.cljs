(ns resa.screens.step2
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [resa.components.header :refer [small-header]]
            [antizer.rum :as ant]
            [rum.core :as rum]))

(defc screen2
  [store]
  (let [m @store
        data (get m :data {})
        {:keys [pax time name phone email]} data
        disabled? false]
    [:div {:style {:display "flex" :flex-direction "column"}}
     (small-header store)
     ;; Title
     [:br]
     [:div {:style {:display "flex" :align-items "center"}}
      (ant/select {:default-value "Mr." :on-change #(dispatch! store [:step2--set-title %])}
                  (ant/select-option {:value "Mr."} "Mr.")
                  (ant/select-option {:value "Mrs."} "Mrs.")
                  (ant/select-option {:value "Ms."} "Ms."))
      (ant/input {:placeholder "Your name"
                  :type "text"
                  :auto-focus true
                  :value (or name "")
                  :on-change #(dispatch! store [:step2--set-name %])})]
     ;; Phone number
     (ant/input {:placeholder "Your phone number"
                 :type "tel"
                 :value (or phone "")
                 :on-change #(dispatch! store [:step2--set-phone %])})
     ;; Email
     (ant/input {:placeholder "Your e-mail"
                 :type "email"
                 :value (or email "")
                 :on-change #(dispatch! store [:step2--set-email %])})
     ;; Number pax
     (ant/input {:type "number"
                 :placeholder "Number of guests"
                 :min 1
                 :value (or pax "")
                 :on-change #(dispatch! store [:step2--set-pax %])})
     [:br]
     (ant/button {:style {:height "4em"}
                  :on-click #(dispatch! store :go-forward)
                  :type "primary"
                  :size "large"}
                 "REVIEW")]))
