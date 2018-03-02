(ns resa.core
  (:require cljsjs.react
            cljsjs.react.dom
            resa.actions.core
            resa.cards.core
            [resa.store :refer [app-store]]
            [resa.app :refer [ui-app]]
            [reaction.core :refer [bind-actions-list]]))

(enable-console-print!)

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (do
      (add-watch app-store :render
                 (fn [k a o n] (.render js/ReactDOM (ui-app a) node)))
      (.render js/ReactDOM (ui-app app-store) node))))

(main)

(bind-actions-list)
