(ns resa.db)

(defn day-gen
  [d]
  (let [today (.. js/window moment) ]
    (.. today
      (add d "day")
      (format "YYYY-MM-DD"))))

(defn x
  [a]

  (->> (range 60)
       (take-nth 15)
       (filterv  #(> (rand) prob))
       (assoc {} a )))

(defn slot-gen
  []
  (let [morning (->> (range 11 15)
                     (map x )
                     (into {}))
        evening (->> (range 19 23)
                     (map x )
                     (into {}))
        days (->> (range 200)
                  (map (fn[x] {(day-gen x) (merge morning evening)}))
                  (apply merge))]
        days))

(def avaliable-slot
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
     (day-in 18){}
     (day-in 3) {20 [0 30]
                 13 [15 30]}
     (day-in 5) {20 [0 30]
                 13 [15 30]}}))
