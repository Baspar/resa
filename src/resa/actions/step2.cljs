(ns resa.actions.step2
  (:require [reaction.core :refer-macros [defaction defaction!]]))

(defaction step2--set-title
  [m value]
  (-> m
      (assoc-in [:data :title] value)
      (update :data dissoc :title-invalid?)))

(defaction step2--set-name
  [m event]
  (-> m
      (assoc-in [:data :name] (.. event -target -value))
      (update :data dissoc :name-invalid?)))

(defaction step2--set-phone
  [m event]
  (let [raw-value (.. event -target -value)
        treated-value (-> raw-value
                          (clojure.string/replace #"\D" ""))]
    (-> m
        (assoc-in [:data :phone] treated-value)
        (update :data dissoc :phone-invalid?))))

(defaction step2--set-email
  [m event]
  (-> m
      (assoc-in [:data :email] (.. event -target -value))
      (update :data dissoc :email-invalid?)))

(defaction step2--set-pax
  [m event]
  (-> m
      (assoc-in [:data :pax] (.. event -target -value))
      (update :data dissoc :pax-invalid?)))

(defaction step2--set-date
  [m value]
  (if value
    (let [date (.format value "YYYY-MM-DD")]
      (-> m
          (assoc-in [:data :date] date)
          (update :data dissoc :hour :minutes :date-invalid? :hour-invalid? :minutes-invalid?)))
    m))

(defaction step2--set-time
  [m value]
  (if value
    (let [old-hour (get-in m [:data :hour])
          old-min (get-in m [:data :minutes])
          new-hour (-> value (.format "HH") (js/parseInt))
          new-min (-> value (.format "mm") (js/parseInt))]
      (cond
        (not= old-hour new-hour) (-> m
                                     (assoc-in [:data :hour] new-hour)
                                     (update :data dissoc :minutes :hour-invalid? :minutes-invalid?))
        (not= old-min new-min) (-> m
                                   (assoc-in [:data :minutes] new-min)
                                   (update :data dissoc :minutes-invalid?))
        :else m))
    m))

(defaction step2--submit
  [m]
  (let [data (get m :data {})
        {:keys [pax hour minutes name phone email date]} data
        pax-invalid? (cond
                       (empty? pax) "Type a number of person"
                       (not (re-matches #"\d{1,2}" pax)) "Number of person has to be a number")
        name-invalid? (cond
                        (empty? name) "Type a name"
                        (> 3 (count name)) "Name has to contains 3+ letters")
        phone-invalid? (cond
                         (empty? phone) "Type a phone number"
                         (not (re-matches #"\+?\d{7,}" phone)) "Phone number has to be 7+ numbers")
        email-invalid? (cond
                         (empty? email) "Type an email"
                         (not (re-matches #"[a-zA-Z0-9_.-]{2,}@[a-zA-Z0-9_-]{2,}\.[a-z]{2,5}" email)) "Email has to be in a correct format")
        date-invalid? (cond
                        (nil? date) "Select a date")
        hour-invalid? (cond
                        (nil? hour) "Select an hour")
        minutes-invalid? (cond
                           (nil? minutes) "Select a minute")
        valid? (not (or pax-invalid?
                        name-invalid?
                        date-invalid?
                        hour-invalid?
                        minutes-invalid?
                        phone-invalid?
                        email-invalid?))]
    (cond-> m
      pax-invalid? (assoc-in [:data :pax-invalid?] pax-invalid?)
      name-invalid? (assoc-in [:data :name-invalid?] name-invalid?)
      phone-invalid? (assoc-in [:data :phone-invalid?] phone-invalid?)
      email-invalid? (assoc-in [:data :email-invalid?] email-invalid?)
      date-invalid? (assoc-in [:data :date-invalid?] date-invalid?)
      hour-invalid? (assoc-in [:data :hour-invalid?] hour-invalid?)
      minutes-invalid? (assoc-in [:data :minutes-invalid?] minutes-invalid?)
      valid? (assoc :screen :step3))))
