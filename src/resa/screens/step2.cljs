(ns resa.screens.step2
  (:require [rum.core :refer-macros [defc]]
           [reaction.core :refer-macros [dispatch!]
            [antizer.rum :as ant]
            [rum.core :as rum]]))

(defc screen2
  [state]
  (let [{:keys [pax time name phone email]} (:data @store)]
    [:div
     [:br]
     (ant/input
       {:placeholder "Your name"
        :type "text"
        :auto-focus true
        :value (or name "")
        :style {:margin 5}
        :on-change #(swap! store assoc-in [:data :name]
                           (-> % .-target .-value))})
     [:br]
     (ant/input
       {:placeholder "Your phone number"
        :type "tel"
        :value (or phone "")
        :style {:margin 5}
        :on-change #(swap! store assoc-in [:data :phone]
                           (-> % .-target .-value))})
     [:br]
     (ant/input
       {:placeholder "Your e-mail"
        :type "email"
        :value (or email "")
        :style {:margin 5}
        :on-change #(swap! store assoc-in [:data :email]
                           (-> % .-target .-value))})

     [:br]
     (ant/button {:style {:width "100%" :margin 5} :on-click #(dispatch! :h-back-to-step1 store)} "< Back")
     (ant/button {:style {:width "100%" :margin 5} :on-click #(dispatch! :h-book store)} "Book!")
     [:br]]))
