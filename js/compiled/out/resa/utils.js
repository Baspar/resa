// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.utils');
goog.require('cljs.core');
goog.require('antizer.rum');
resa.utils.wrap_en = (function resa$utils$wrap_en(var_args){
var args__32209__auto__ = [];
var len__32202__auto___39608 = arguments.length;
var i__32203__auto___39609 = (0);
while(true){
if((i__32203__auto___39609 < len__32202__auto___39608)){
args__32209__auto__.push((arguments[i__32203__auto___39609]));

var G__39610 = (i__32203__auto___39609 + (1));
i__32203__auto___39609 = G__39610;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((0) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((0)),(0),null)):null);
return resa.utils.wrap_en.cljs$core$IFn$_invoke$arity$variadic(argseq__32210__auto__);
});

resa.utils.wrap_en.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.apply.call(null,antizer.rum.locale_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locale","locale",-2115712697),antizer.rum.locales.call(null,"en_US")], null),children);
});

resa.utils.wrap_en.cljs$lang$maxFixedArity = (0);

resa.utils.wrap_en.cljs$lang$applyTo = (function (seq39607){
return resa.utils.wrap_en.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39607));
});


//# sourceMappingURL=utils.js.map?rel=1520306978904
