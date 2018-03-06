(ns resa.screens.step1
  (:require [rum.core :refer-macros [defc]]
            [reaction.core :refer-macros [dispatch!]]
            [antizer.rum :as ant]
            [rum.core :as rum]
            [resa.components.hi-lib :refer [big-header navigation]]))

(defc screen1
  [store]
  (let [m @store
        format "HH:mm"
        disabled? false]
    [:div {:style {:display "flex"
                   :flex-direction "column"}}
     (big-header store)
     [:br]
     [:div {:style {:padding 10}} "An eclectic and authentic Northern French cuisine. Superb ambiance, suitable for romantic and business dinner. Lorem ipsum  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."]]))

(defc navigation
  [state]
  (navigation state))

(defc next-button
  [state]
  [button])
