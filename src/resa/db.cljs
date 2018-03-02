(ns resa.db)

(def booked-slot
  (let [today (.. js/window moment)
        day-in (fn [d]
                 (.. today
                     (add d "day")
                     (format "YYYY-MM-DD")))]
    ;; Format YYYY-MM-DD
    {(day-in 0) {12 [0 15 30 45]
                 13 [0 15 45]
                 20 [0 30 45]}
     (day-in 2) {20 [0 30]
                 13 [15 30]}
     (day-in 3) {20 [0 30]
                 13 [15 30]}
     (day-in 5) {20 [0 30]
                 13 [15 30]}}))
