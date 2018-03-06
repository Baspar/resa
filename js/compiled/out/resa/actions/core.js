// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.actions.core');
goog.require('cljs.core');
goog.require('reaction.core');
goog.require('resa.actions.step1');
goog.require('resa.actions.step2');
goog.require('resa.actions.step3');
goog.require('resa.actions.step4');
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"go-back","go-back",1642157803)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.core"], null));
}));

resa.actions.core.G__39555 = (function resa$actions$core$G__39555(parent_id,m){
var reaction__$1 = resa.actions.core.G__39555;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39557__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39557 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39558__i = 0, G__39558__a = new Array(arguments.length -  0);
while (G__39558__i < G__39558__a.length) {G__39558__a[G__39558__i] = arguments[G__39558__i + 0]; ++G__39558__i;}
  _ = new cljs.core.IndexedSeq(G__39558__a,0,null);
} 
return G__39557__delegate.call(this,_);};
G__39557.cljs$lang$maxFixedArity = 0;
G__39557.cljs$lang$applyTo = (function (arglist__39559){
var _ = cljs.core.seq(arglist__39559);
return G__39557__delegate(_);
});
G__39557.cljs$core$IFn$_invoke$arity$variadic = G__39557__delegate;
return G__39557;
})()
;})(reaction__$1))
;
return cljs.core.update.call(null,m,new cljs.core.Keyword(null,"screen","screen",1990059748),((function (reaction__$1,dispatch_BANG_){
return (function (p1__39554_SHARP_){
var G__39556 = (function (){var or__30923__auto__ = p1__39554_SHARP_;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return new cljs.core.Keyword(null,"step1","step1",474664537);
}
})();
var G__39556__$1 = (((G__39556 instanceof cljs.core.Keyword))?G__39556.fqn:null);
switch (G__39556__$1) {
case "step1":
return new cljs.core.Keyword(null,"step1","step1",474664537);

break;
case "step2":
return new cljs.core.Keyword(null,"step1","step1",474664537);

break;
case "step3":
return new cljs.core.Keyword(null,"step2","step2",-695249369);

break;
case "step4":
return new cljs.core.Keyword(null,"step3","step3",-947794149);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39556__$1)].join('')));

}
});})(reaction__$1,dispatch_BANG_))
);
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"go-back","go-back",1642157803),(function() { 
var G__39561__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.core.G__39555,action_id,state,params);
};
var G__39561 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39562__i = 0, G__39562__a = new Array(arguments.length -  4);
while (G__39562__i < G__39562__a.length) {G__39562__a[G__39562__i] = arguments[G__39562__i + 4]; ++G__39562__i;}
  params = new cljs.core.IndexedSeq(G__39562__a,0,null);
} 
return G__39561__delegate.call(this,parent_id,action_id,state,_,params);};
G__39561.cljs$lang$maxFixedArity = 4;
G__39561.cljs$lang$applyTo = (function (arglist__39563){
var parent_id = cljs.core.first(arglist__39563);
arglist__39563 = cljs.core.next(arglist__39563);
var action_id = cljs.core.first(arglist__39563);
arglist__39563 = cljs.core.next(arglist__39563);
var state = cljs.core.first(arglist__39563);
arglist__39563 = cljs.core.next(arglist__39563);
var _ = cljs.core.first(arglist__39563);
var params = cljs.core.rest(arglist__39563);
return G__39561__delegate(parent_id,action_id,state,_,params);
});
G__39561.cljs$core$IFn$_invoke$arity$variadic = G__39561__delegate;
return G__39561;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"go-forward","go-forward",666578902)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.core"], null));
}));

resa.actions.core.G__39565 = (function resa$actions$core$G__39565(parent_id,m){
var reaction__$1 = resa.actions.core.G__39565;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39567__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39567 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39568__i = 0, G__39568__a = new Array(arguments.length -  0);
while (G__39568__i < G__39568__a.length) {G__39568__a[G__39568__i] = arguments[G__39568__i + 0]; ++G__39568__i;}
  _ = new cljs.core.IndexedSeq(G__39568__a,0,null);
} 
return G__39567__delegate.call(this,_);};
G__39567.cljs$lang$maxFixedArity = 0;
G__39567.cljs$lang$applyTo = (function (arglist__39569){
var _ = cljs.core.seq(arglist__39569);
return G__39567__delegate(_);
});
G__39567.cljs$core$IFn$_invoke$arity$variadic = G__39567__delegate;
return G__39567;
})()
;})(reaction__$1))
;
return cljs.core.update.call(null,m,new cljs.core.Keyword(null,"screen","screen",1990059748),((function (reaction__$1,dispatch_BANG_){
return (function (p1__39564_SHARP_){
var G__39566 = (function (){var or__30923__auto__ = p1__39564_SHARP_;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return new cljs.core.Keyword(null,"step1","step1",474664537);
}
})();
var G__39566__$1 = (((G__39566 instanceof cljs.core.Keyword))?G__39566.fqn:null);
switch (G__39566__$1) {
case "step1":
return new cljs.core.Keyword(null,"step2","step2",-695249369);

break;
case "step2":
return new cljs.core.Keyword(null,"step3","step3",-947794149);

break;
case "step3":
return new cljs.core.Keyword(null,"step4","step4",-943984344);

break;
case "step4":
return new cljs.core.Keyword(null,"step4","step4",-943984344);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39566__$1)].join('')));

}
});})(reaction__$1,dispatch_BANG_))
);
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),(function() { 
var G__39571__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.core.G__39565,action_id,state,params);
};
var G__39571 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39572__i = 0, G__39572__a = new Array(arguments.length -  4);
while (G__39572__i < G__39572__a.length) {G__39572__a[G__39572__i] = arguments[G__39572__i + 4]; ++G__39572__i;}
  params = new cljs.core.IndexedSeq(G__39572__a,0,null);
} 
return G__39571__delegate.call(this,parent_id,action_id,state,_,params);};
G__39571.cljs$lang$maxFixedArity = 4;
G__39571.cljs$lang$applyTo = (function (arglist__39573){
var parent_id = cljs.core.first(arglist__39573);
arglist__39573 = cljs.core.next(arglist__39573);
var action_id = cljs.core.first(arglist__39573);
arglist__39573 = cljs.core.next(arglist__39573);
var state = cljs.core.first(arglist__39573);
arglist__39573 = cljs.core.next(arglist__39573);
var _ = cljs.core.first(arglist__39573);
var params = cljs.core.rest(arglist__39573);
return G__39571__delegate(parent_id,action_id,state,_,params);
});
G__39571.cljs$core$IFn$_invoke$arity$variadic = G__39571__delegate;
return G__39571;
})()
);

//# sourceMappingURL=core.js.map?rel=1520306978786
