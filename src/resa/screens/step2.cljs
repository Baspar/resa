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
        {:keys [pax time name phone email]} data]
    [:div {:style {:display "flex" :flex-direction "column"}}
     (small-header store)
     ;; Title
     [:div {:style {:display "flex" :align-items "center"}}
      (ant/select {:default-value "Mr." :on-change #(swap! store assoc-in [:data :title] %)}
                  (ant/select-option {:value "Mr."} "Mr.")
                  (ant/select-option {:value "Mrs."} "Mrs.")
                  (ant/select-option {:value "Ms."} "Ms."))
      (ant/input {:placeholder "Your name"
                  :type "text"
                  :auto-focus true
                  :value (or name "")
                  :on-change #(swap! store assoc-in [:data :name]
                                     (.. % -target -value))})]
     ;; Phone number
     (ant/input {:placeholder "Your phone number"
                 :type "tel"
                 :value (or phone "")
                 :on-change #(swap! store assoc-in [:data :phone]
                                    (.. % -target -value))})
     ;; Email
     (ant/input {:placeholder "Your e-mail"
                 :type "email"
                 :value (or email "")
                 :on-change #(swap! store assoc-in [:data :email]
                                    (.. % -target -value))})
     ;; Number pax
     (ant/input {:type "number"
                 :placeholder "Number of guests"
                 :min 1
                 :value (or pax "")
                 :on-change #(swap! store assoc-in [:data :pax]
                                    (.. % -target -value))})
     (ant/button {:style {:width "100%"}
                  :on-click #(dispatch! store :h-back-to-step1)}
                 "< Back")
     (ant/button {:style {:width "100%"}
                  :on-click #(dispatch! store :h-book)}
                 "Book!")]))
