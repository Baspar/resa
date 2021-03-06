(ns resa.screens.step3
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [resa.components.low-lib :refer [mode small-header navigation button]]
            [antizer.rum :as ant]
            [rum.core :as rum]))

(defc screen3
  [store]
  (let [data (:data @store)
        {:keys [pax title date minutes hour name phone email]} data]
    [:div {:style {:display "flex"
                   :flex-direction "column"
                   :flex 1
                   :color (when (= mode "hi") "white")}}
     (small-header store)
     [:br]
     [:div {:style {:background-color (when (= mode "hi") "rgba(0, 0, 0, 0.8)")
                    :padding 20
                    :font-weight "bold"
                    :flex 1}}
      [:div "Please check if booking details are correct"]
      [:br]
      [:ul
       [:li (or title "Mr.") (or name "")]
       [:li "Mobile: " (or phone "")]
       [:li "E-mail: " (or email "")]
       [:li "Date/time: "
        (or date "")
        " "
        (or hour "")
        ":"
        (or minutes "")]
       [:li "For: " (or pax "")]]]]))

(defc nav
  [state]
 (navigation state))

(defc next-button
  [store]
  (button {:style {:height "4em"}
           :on-click #(dispatch! store :go-forward)
           :type "primary"
           :size "large"}
          "SUBMIT"))
