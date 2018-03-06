// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.actions.step3');
goog.require('cljs.core');
goog.require('reaction.core');
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"h-start-again","h-start-again",1915514638)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),4,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step3"], null));
}));

resa.actions.step3.G__39217 = (function resa$actions$step3$G__39217(parent_id,m){
var reaction__$1 = resa.actions.step3.G__39217;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39218__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39218 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39219__i = 0, G__39219__a = new Array(arguments.length -  0);
while (G__39219__i < G__39219__a.length) {G__39219__a[G__39219__i] = arguments[G__39219__i + 0]; ++G__39219__i;}
  _ = new cljs.core.IndexedSeq(G__39219__a,0,null);
} 
return G__39218__delegate.call(this,_);};
G__39218.cljs$lang$maxFixedArity = 0;
G__39218.cljs$lang$applyTo = (function (arglist__39220){
var _ = cljs.core.seq(arglist__39220);
return G__39218__delegate(_);
});
G__39218.cljs$core$IFn$_invoke$arity$variadic = G__39218__delegate;
return G__39218;
})()
;})(reaction__$1))
;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"step1","step1",474664537));
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"h-start-again","h-start-again",1915514638),(function() { 
var G__39221__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step3.G__39217,action_id,state,params);
};
var G__39221 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39222__i = 0, G__39222__a = new Array(arguments.length -  4);
while (G__39222__i < G__39222__a.length) {G__39222__a[G__39222__i] = arguments[G__39222__i + 4]; ++G__39222__i;}
  params = new cljs.core.IndexedSeq(G__39222__a,0,null);
} 
return G__39221__delegate.call(this,parent_id,action_id,state,_,params);};
G__39221.cljs$lang$maxFixedArity = 4;
G__39221.cljs$lang$applyTo = (function (arglist__39223){
var parent_id = cljs.core.first(arglist__39223);
arglist__39223 = cljs.core.next(arglist__39223);
var action_id = cljs.core.first(arglist__39223);
arglist__39223 = cljs.core.next(arglist__39223);
var state = cljs.core.first(arglist__39223);
arglist__39223 = cljs.core.next(arglist__39223);
var _ = cljs.core.first(arglist__39223);
var params = cljs.core.rest(arglist__39223);
return G__39221__delegate(parent_id,action_id,state,_,params);
});
G__39221.cljs$core$IFn$_invoke$arity$variadic = G__39221__delegate;
return G__39221;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"h-back-to-step2","h-back-to-step2",-2088034425)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step3"], null));
}));

resa.actions.step3.G__39224 = (function resa$actions$step3$G__39224(parent_id,m){
var reaction__$1 = resa.actions.step3.G__39224;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39225__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39225 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39226__i = 0, G__39226__a = new Array(arguments.length -  0);
while (G__39226__i < G__39226__a.length) {G__39226__a[G__39226__i] = arguments[G__39226__i + 0]; ++G__39226__i;}
  _ = new cljs.core.IndexedSeq(G__39226__a,0,null);
} 
return G__39225__delegate.call(this,_);};
G__39225.cljs$lang$maxFixedArity = 0;
G__39225.cljs$lang$applyTo = (function (arglist__39227){
var _ = cljs.core.seq(arglist__39227);
return G__39225__delegate(_);
});
G__39225.cljs$core$IFn$_invoke$arity$variadic = G__39225__delegate;
return G__39225;
})()
;})(reaction__$1))
;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"step2","step2",-695249369));
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"h-back-to-step2","h-back-to-step2",-2088034425),(function() { 
var G__39228__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step3.G__39224,action_id,state,params);
};
var G__39228 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39229__i = 0, G__39229__a = new Array(arguments.length -  4);
while (G__39229__i < G__39229__a.length) {G__39229__a[G__39229__i] = arguments[G__39229__i + 4]; ++G__39229__i;}
  params = new cljs.core.IndexedSeq(G__39229__a,0,null);
} 
return G__39228__delegate.call(this,parent_id,action_id,state,_,params);};
G__39228.cljs$lang$maxFixedArity = 4;
G__39228.cljs$lang$applyTo = (function (arglist__39230){
var parent_id = cljs.core.first(arglist__39230);
arglist__39230 = cljs.core.next(arglist__39230);
var action_id = cljs.core.first(arglist__39230);
arglist__39230 = cljs.core.next(arglist__39230);
var state = cljs.core.first(arglist__39230);
arglist__39230 = cljs.core.next(arglist__39230);
var _ = cljs.core.first(arglist__39230);
var params = cljs.core.rest(arglist__39230);
return G__39228__delegate(parent_id,action_id,state,_,params);
});
G__39228.cljs$core$IFn$_invoke$arity$variadic = G__39228__delegate;
return G__39228;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"h-confirm","h-confirm",745506399)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step3"], null));
}));

resa.actions.step3.G__39231 = (function resa$actions$step3$G__39231(parent_id,m){
var reaction__$1 = resa.actions.step3.G__39231;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39232__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39232 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39233__i = 0, G__39233__a = new Array(arguments.length -  0);
while (G__39233__i < G__39233__a.length) {G__39233__a[G__39233__i] = arguments[G__39233__i + 0]; ++G__39233__i;}
  _ = new cljs.core.IndexedSeq(G__39233__a,0,null);
} 
return G__39232__delegate.call(this,_);};
G__39232.cljs$lang$maxFixedArity = 0;
G__39232.cljs$lang$applyTo = (function (arglist__39234){
var _ = cljs.core.seq(arglist__39234);
return G__39232__delegate(_);
});
G__39232.cljs$core$IFn$_invoke$arity$variadic = G__39232__delegate;
return G__39232;
})()
;})(reaction__$1))
;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"step4","step4",-943984344));
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"h-confirm","h-confirm",745506399),(function() { 
var G__39235__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step3.G__39231,action_id,state,params);
};
var G__39235 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39236__i = 0, G__39236__a = new Array(arguments.length -  4);
while (G__39236__i < G__39236__a.length) {G__39236__a[G__39236__i] = arguments[G__39236__i + 4]; ++G__39236__i;}
  params = new cljs.core.IndexedSeq(G__39236__a,0,null);
} 
return G__39235__delegate.call(this,parent_id,action_id,state,_,params);};
G__39235.cljs$lang$maxFixedArity = 4;
G__39235.cljs$lang$applyTo = (function (arglist__39237){
var parent_id = cljs.core.first(arglist__39237);
arglist__39237 = cljs.core.next(arglist__39237);
var action_id = cljs.core.first(arglist__39237);
arglist__39237 = cljs.core.next(arglist__39237);
var state = cljs.core.first(arglist__39237);
arglist__39237 = cljs.core.next(arglist__39237);
var _ = cljs.core.first(arglist__39237);
var params = cljs.core.rest(arglist__39237);
return G__39235__delegate(parent_id,action_id,state,_,params);
});
G__39235.cljs$core$IFn$_invoke$arity$variadic = G__39235__delegate;
return G__39235;
})()
);

//# sourceMappingURL=step3.js.map?rel=1520306978628
