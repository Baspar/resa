// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.actions.step1');
goog.require('cljs.core');
goog.require('reaction.core');
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"h-next","h-next",1475646917)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),4,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step1"], null));
}));

resa.actions.step1.G__39148 = (function resa$actions$step1$G__39148(parent_id,m){
var reaction__$1 = resa.actions.step1.G__39148;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39149__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39149 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39150__i = 0, G__39150__a = new Array(arguments.length -  0);
while (G__39150__i < G__39150__a.length) {G__39150__a[G__39150__i] = arguments[G__39150__i + 0]; ++G__39150__i;}
  _ = new cljs.core.IndexedSeq(G__39150__a,0,null);
} 
return G__39149__delegate.call(this,_);};
G__39149.cljs$lang$maxFixedArity = 0;
G__39149.cljs$lang$applyTo = (function (arglist__39151){
var _ = cljs.core.seq(arglist__39151);
return G__39149__delegate(_);
});
G__39149.cljs$core$IFn$_invoke$arity$variadic = G__39149__delegate;
return G__39149;
})()
;})(reaction__$1))
;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"step2","step2",-695249369));
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"h-next","h-next",1475646917),(function() { 
var G__39152__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step1.G__39148,action_id,state,params);
};
var G__39152 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39153__i = 0, G__39153__a = new Array(arguments.length -  4);
while (G__39153__i < G__39153__a.length) {G__39153__a[G__39153__i] = arguments[G__39153__i + 4]; ++G__39153__i;}
  params = new cljs.core.IndexedSeq(G__39153__a,0,null);
} 
return G__39152__delegate.call(this,parent_id,action_id,state,_,params);};
G__39152.cljs$lang$maxFixedArity = 4;
G__39152.cljs$lang$applyTo = (function (arglist__39154){
var parent_id = cljs.core.first(arglist__39154);
arglist__39154 = cljs.core.next(arglist__39154);
var action_id = cljs.core.first(arglist__39154);
arglist__39154 = cljs.core.next(arglist__39154);
var state = cljs.core.first(arglist__39154);
arglist__39154 = cljs.core.next(arglist__39154);
var _ = cljs.core.first(arglist__39154);
var params = cljs.core.rest(arglist__39154);
return G__39152__delegate(parent_id,action_id,state,_,params);
});
G__39152.cljs$core$IFn$_invoke$arity$variadic = G__39152__delegate;
return G__39152;
})()
);

//# sourceMappingURL=step1.js.map?rel=1520306978523
