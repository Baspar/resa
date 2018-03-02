(ns resa.screens.step3
  (:require [rum.core :refer-macros [defc]]))

(defc screen3
  [state]
  (let [data (:data @store)
        {:keys [pax time name phone email]} data]
    (html [:div
           [:br]
           [:ul
            [:li "Name: " (or name "")]
            [:li "Phone: " (or phone "")]
            [:li "E-mail: " (or email "")]
            [:li "Date/time: " (or time "")]
            [:li "N. of guests: " (or pax "")]]
           [:button
            {:class "btn btn-default btn-block"
             :on-click #(dispatch! :h-start-again store)}
            "<< Start again"]
           [:button
            {:class "btn btn-default btn-block"
             :on-click #(dispatch! :h-back-to-step2 store)}
            "< Back"]
           [:button
            {:class "btn btn-primary btn-block"
             :on-click #(dispatch! :h-confirm store)
             :auto-focus true}
            "Confirm booking!"]
           [:br]])))
