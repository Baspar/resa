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
        pax-valid? (and (not (empty? pax))
                        (re-matches #"\d{1,2}" pax))
        time-valid? true ;; REMOVE
        name-valid? (and (not (empty? name))
                         (< 3 (count name)))
        phone-valid? (and (not (empty? phone))
                          (re-matches #"\+?\d{7,}" phone))
        email-valid? (and (not (empty? email))
                          (re-matches #"[a-zA-Z0-9_.-]{2,}@[a-zA-Z0-9_-]{2,}\.[a-z]{2,5}" email))
        disabled? (not (and pax-valid?
                            time-valid?
                            name-valid?
                            phone-valid?
                            email-valid?))]
    (println email-valid?)
    [:div {:style {:display "flex" :flex-direction "column"}}
     (small-header store)
     ;; Title
     [:br]
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/select {:default-value "Mr."
                   :style {:width "6rem"}
                   :on-change #(dispatch! store [:step2--set-title %])}
                  (ant/select-option {:value "Mr."} "Mr.")
                  (ant/select-option {:value "Mrs."} "Mrs.")
                  (ant/select-option {:value "Ms."} "Ms."))
      (ant/input {:placeholder "Your name"
                  :type "text"
                  :auto-focus true
                  :value (or name "")
                  :on-change #(dispatch! store [:step2--set-name %])})]
     ;; Phone number
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/icon {:type "phone" :style {:width "6rem"}})
      (ant/input {:placeholder "Your phone number"
                  :type "tel"
                  :value (or phone "")
                  :on-change #(dispatch! store [:step2--set-phone %])})]
     ;; Email
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/icon {:type "mail" :style {:width "6rem"}})
      (ant/input {:placeholder "Your e-mail"
                  :type "email"
                  :value (or email "")
                  :on-change #(dispatch! store [:step2--set-email %])})]
     ;; Number pax
     [:div {:style {:display "flex" :align-items "center" :margin 5}}
      (ant/icon {:type "user" :style {:width "6rem"}})
      (ant/input {:type "number"
                  :placeholder "Number of guests"
                  :min 1
                  :value (or pax "")
                  :on-change #(dispatch! store [:step2--set-pax %])})]
     [:br]
     ;; Submit button
     (ant/button {:style {:height "4em"}
                  :on-click #(dispatch! store :go-forward)
                  :disabled disabled?
                  :type "primary"
                  :size "large"}
                 "REVIEW")]))
