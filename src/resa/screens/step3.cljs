(ns resa.screens.step3
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [resa.components.header :refer [small-header]]
            [resa.components.med-lib :refer [button]]
            [antizer.rum :as ant]
            [rum.core :as rum]))

(defc screen3
  [store]
  (let [data (:data @store)
        {:keys [pax time name phone email]} data
        disabled? false]
    [:div {:style {:display "flex"
                   :flex-direction "column"}}
     (small-header store)
     [:br]
     [:ul
      [:li "Name: " (or name "")]
      [:li "Phone: " (or phone "")]
      [:li "E-mail: " (or email "")]
      [:li "Date/time: " (or time "")]
      [:li "N. of guests: " (or pax "")]]
     [:br]
     (button {:style {:height "4em"}
              :on-click #(dispatch! store :go-forward)
              :type "primary"
              :size "large"
              :disabled disabled?}
             "SUBMIT")]))
