(ns resa.db)

(defn day-gen
  [d]
  (let [today (.. js/window moment) ]
    (.. today
      (add d "day")
      (format "YYYY-MM-DD"))))

(defn x
  [a prob]

  (->> (range 60)
       (take-nth 15)
       (filterv  #(< (rand) (/ 1 (+ 1 (.exp js/Math (/ prob -3))))))
       (assoc {} a )))

(defn slot-gen
  []
  (let [morning (fn [day]
                  (->> (range 11 15)
                       (map #(x % day))
                       (into {})))
        evening (fn [day]
                  (->> (range 19 23)
                       (map #(x % day))
                       (into {})))
        days (->> (range 200)
                  (map (fn[x] {(day-gen x) (merge (morning x) (evening x))}))
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
