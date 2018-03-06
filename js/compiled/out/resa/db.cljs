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

(def available-slot
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
