// Compiled by ClojureScript 1.9.946 {}
goog.provide('antizer.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('goog.object');
goog.require('cljsjs.antd');
antizer.core.antd_module = antd;
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
antizer.core.kebab_case__GT_camel_case = (function antizer$core$kebab_case__GT_camel_case(input){
var words = clojure.string.split.call(null,input,/-/);
var capitalize = cljs.core.map.call(null,((function (words){
return (function (p1__33329_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,clojure.string.upper_case.call(null,cljs.core.first.call(null,p1__33329_SHARP_)),cljs.core.rest.call(null,p1__33329_SHARP_));
});})(words))
,cljs.core.rest.call(null,words));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,words),capitalize);
});
/**
 * Stringifys all the keys of a cljs hashmap and converts them
 * from kebab case to camel case. If :html-props option is specified, 
 * then rename the html properties values to their dom equivalent
 * before conversion
 */
antizer.core.map_keys__GT_camel_case = (function antizer$core$map_keys__GT_camel_case(var_args){
var args__32209__auto__ = [];
var len__32202__auto___33339 = arguments.length;
var i__32203__auto___33340 = (0);
while(true){
if((i__32203__auto___33340 < len__32202__auto___33339)){
args__32209__auto__.push((arguments[i__32203__auto___33340]));

var G__33341 = (i__32203__auto___33340 + (1));
i__32203__auto___33340 = G__33341;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((1) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((1)),(0),null)):null);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32210__auto__);
});

antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__33332){
var map__33333 = p__33332;
var map__33333__$1 = ((((!((map__33333 == null)))?((((map__33333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33333):map__33333);
var html_props = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"html-props","html-props",-455448229));
var convert_to_camel = ((function (map__33333,map__33333__$1,html_props){
return (function (p__33335){
var vec__33336 = p__33335;
var key = cljs.core.nth.call(null,vec__33336,(0),null);
var value = cljs.core.nth.call(null,vec__33336,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.core.kebab_case__GT_camel_case.call(null,cljs.core.name.call(null,key)),value], null);
});})(map__33333,map__33333__$1,html_props))
;
return clojure.walk.postwalk.call(null,((function (convert_to_camel,map__33333,map__33333__$1,html_props){
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys.call(null,x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null)):x);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,convert_to_camel,new_map));
} else {
return x;
}
});})(convert_to_camel,map__33333,map__33333__$1,html_props))
,data);
});

antizer.core.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1);

antizer.core.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq33330){
var G__33331 = cljs.core.first.call(null,seq33330);
var seq33330__$1 = cljs.core.next.call(null,seq33330);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic(G__33331,seq33330__$1);
});

antizer.core.get_module_path = (function antizer$core$get_module_path(module_name){
return clojure.string.split.call(null,module_name,/\./);
});
/**
 * Retreives the value of the module's property
 */
antizer.core.get_prop = (function antizer$core$get_prop(module_name,prop){
if(cljs.core.truth_(prop)){
return cljs.core.apply.call(null,goog.object.getValueByKeys,antizer.core.antd_module,cljs.core.conj.call(null,antizer.core.get_module_path.call(null,module_name),cljs.core.name.call(null,prop)));
} else {
return null;
}
});
/**
 * Calls a javascript function, converting the keys for any arguments 
 * that are hashmaps from kebab case to camel case
 * 
 * * func - the native javascript to be called
 */
antizer.core.call_js_func = (function antizer$core$call_js_func(var_args){
var args__32209__auto__ = [];
var len__32202__auto___33344 = arguments.length;
var i__32203__auto___33345 = (0);
while(true){
if((i__32203__auto___33345 < len__32202__auto___33344)){
args__32209__auto__.push((arguments[i__32203__auto___33345]));

var G__33346 = (i__32203__auto___33345 + (1));
i__32203__auto___33345 = G__33346;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((1) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((1)),(0),null)):null);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32210__auto__);
});

antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic = (function (func,args){
return cljs.core.apply.call(null,func,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,antizer.core.map_keys__GT_camel_case,args)));
});

antizer.core.call_js_func.cljs$lang$maxFixedArity = (1);

antizer.core.call_js_func.cljs$lang$applyTo = (function (seq33342){
var G__33343 = cljs.core.first.call(null,seq33342);
var seq33342__$1 = cljs.core.next.call(null,seq33342);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic(G__33343,seq33342__$1);
});

/**
 * Calls the ant module function
 */
antizer.core.call_func = (function antizer$core$call_func(var_args){
var args__32209__auto__ = [];
var len__32202__auto___33349 = arguments.length;
var i__32203__auto___33350 = (0);
while(true){
if((i__32203__auto___33350 < len__32202__auto___33349)){
args__32209__auto__.push((arguments[i__32203__auto___33350]));

var G__33351 = (i__32203__auto___33350 + (1));
i__32203__auto___33350 = G__33351;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((1) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((1)),(0),null)):null);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32210__auto__);
});

antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic = (function (module_name,args){
var path = antizer.core.get_module_path.call(null,module_name);
var func = cljs.core.apply.call(null,goog.object.getValueByKeys,antizer.core.antd_module,path);
return cljs.core.apply.call(null,antizer.core.call_js_func,func,args);
});

antizer.core.call_func.cljs$lang$maxFixedArity = (1);

antizer.core.call_func.cljs$lang$applyTo = (function (seq33347){
var G__33348 = cljs.core.first.call(null,seq33347);
var seq33347__$1 = cljs.core.next.call(null,seq33347);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic(G__33348,seq33347__$1);
});


//# sourceMappingURL=core.js.map?rel=1520306971678
