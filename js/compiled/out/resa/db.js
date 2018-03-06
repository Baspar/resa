// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.db');
goog.require('cljs.core');
resa.db.day_gen = (function resa$db$day_gen(d){
var today = window.moment();
return today.add(d,"day").format("YYYY-MM-DD");
});
resa.db.x = (function resa$db$x(a,prob){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,a,cljs.core.filterv.call(null,(function (){
return (cljs.core.rand.call(null) < ((1) / ((1) + Math.exp((prob / (-3))))));
}),cljs.core.take_nth.call(null,(15),cljs.core.range.call(null,(60)))));
});
resa.db.available_slot = (function (){var morning = (function (day){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__39584_SHARP_){
return resa.db.x.call(null,p1__39584_SHARP_,day);
}),cljs.core.range.call(null,(11),(15))));
});
var evening = ((function (morning){
return (function (day){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (morning){
return (function (p1__39585_SHARP_){
return resa.db.x.call(null,p1__39585_SHARP_,day);
});})(morning))
,cljs.core.range.call(null,(19),(23))));
});})(morning))
;
var days = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (morning,evening){
return (function (x){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([resa.db.day_gen.call(null,x),cljs.core.merge.call(null,morning.call(null,x),evening.call(null,x))]);
});})(morning,evening))
,cljs.core.range.call(null,(200))));
return days;
})();

//# sourceMappingURL=db.js.map?rel=1520306978819
