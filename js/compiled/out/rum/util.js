// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__32209__auto__ = [];
var len__32202__auto___35247 = arguments.length;
var i__32203__auto___35248 = (0);
while(true){
if((i__32203__auto___35248 < len__32202__auto___35247)){
args__32209__auto__.push((arguments[i__32203__auto___35248]));

var G__35249 = (i__32203__auto___35248 + (1));
i__32203__auto___35248 = G__35249;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((2) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32210__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq35244){
var G__35245 = cljs.core.first.call(null,seq35244);
var seq35244__$1 = cljs.core.next.call(null,seq35244);
var G__35246 = cljs.core.first.call(null,seq35244__$1);
var seq35244__$2 = cljs.core.next.call(null,seq35244__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__35245,G__35246,seq35244__$2);
});


//# sourceMappingURL=util.js.map?rel=1520306973038
