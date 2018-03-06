// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.actions.step2');
goog.require('cljs.core');
goog.require('reaction.core');
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"step2--set-title","step2--set-title",947001303)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m","value"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),4,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step2"], null));
}));

resa.actions.step2.G__39157 = (function resa$actions$step2$G__39157(parent_id,m,value){
var reaction__$1 = resa.actions.step2.G__39157;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39158__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39158 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39159__i = 0, G__39159__a = new Array(arguments.length -  0);
while (G__39159__i < G__39159__a.length) {G__39159__a[G__39159__i] = arguments[G__39159__i + 0]; ++G__39159__i;}
  _ = new cljs.core.IndexedSeq(G__39159__a,0,null);
} 
return G__39158__delegate.call(this,_);};
G__39158.cljs$lang$maxFixedArity = 0;
G__39158.cljs$lang$applyTo = (function (arglist__39160){
var _ = cljs.core.seq(arglist__39160);
return G__39158__delegate(_);
});
G__39158.cljs$core$IFn$_invoke$arity$variadic = G__39158__delegate;
return G__39158;
})()
;})(reaction__$1))
;
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"title","title",636505583)], null),value);
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"step2--set-title","step2--set-title",947001303),(function() { 
var G__39161__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step2.G__39157,action_id,state,params);
};
var G__39161 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39162__i = 0, G__39162__a = new Array(arguments.length -  4);
while (G__39162__i < G__39162__a.length) {G__39162__a[G__39162__i] = arguments[G__39162__i + 4]; ++G__39162__i;}
  params = new cljs.core.IndexedSeq(G__39162__a,0,null);
} 
return G__39161__delegate.call(this,parent_id,action_id,state,_,params);};
G__39161.cljs$lang$maxFixedArity = 4;
G__39161.cljs$lang$applyTo = (function (arglist__39163){
var parent_id = cljs.core.first(arglist__39163);
arglist__39163 = cljs.core.next(arglist__39163);
var action_id = cljs.core.first(arglist__39163);
arglist__39163 = cljs.core.next(arglist__39163);
var state = cljs.core.first(arglist__39163);
arglist__39163 = cljs.core.next(arglist__39163);
var _ = cljs.core.first(arglist__39163);
var params = cljs.core.rest(arglist__39163);
return G__39161__delegate(parent_id,action_id,state,_,params);
});
G__39161.cljs$core$IFn$_invoke$arity$variadic = G__39161__delegate;
return G__39161;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"step2--set-name","step2--set-name",-643986766)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m","event"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step2"], null));
}));

resa.actions.step2.G__39164 = (function resa$actions$step2$G__39164(parent_id,m,event){
var reaction__$1 = resa.actions.step2.G__39164;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39165__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39165 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39166__i = 0, G__39166__a = new Array(arguments.length -  0);
while (G__39166__i < G__39166__a.length) {G__39166__a[G__39166__i] = arguments[G__39166__i + 0]; ++G__39166__i;}
  _ = new cljs.core.IndexedSeq(G__39166__a,0,null);
} 
return G__39165__delegate.call(this,_);};
G__39165.cljs$lang$maxFixedArity = 0;
G__39165.cljs$lang$applyTo = (function (arglist__39167){
var _ = cljs.core.seq(arglist__39167);
return G__39165__delegate(_);
});
G__39165.cljs$core$IFn$_invoke$arity$variadic = G__39165__delegate;
return G__39165;
})()
;})(reaction__$1))
;
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null),event.target.value);
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"step2--set-name","step2--set-name",-643986766),(function() { 
var G__39168__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step2.G__39164,action_id,state,params);
};
var G__39168 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39169__i = 0, G__39169__a = new Array(arguments.length -  4);
while (G__39169__i < G__39169__a.length) {G__39169__a[G__39169__i] = arguments[G__39169__i + 4]; ++G__39169__i;}
  params = new cljs.core.IndexedSeq(G__39169__a,0,null);
} 
return G__39168__delegate.call(this,parent_id,action_id,state,_,params);};
G__39168.cljs$lang$maxFixedArity = 4;
G__39168.cljs$lang$applyTo = (function (arglist__39170){
var parent_id = cljs.core.first(arglist__39170);
arglist__39170 = cljs.core.next(arglist__39170);
var action_id = cljs.core.first(arglist__39170);
arglist__39170 = cljs.core.next(arglist__39170);
var state = cljs.core.first(arglist__39170);
arglist__39170 = cljs.core.next(arglist__39170);
var _ = cljs.core.first(arglist__39170);
var params = cljs.core.rest(arglist__39170);
return G__39168__delegate(parent_id,action_id,state,_,params);
});
G__39168.cljs$core$IFn$_invoke$arity$variadic = G__39168__delegate;
return G__39168;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"step2--set-phone","step2--set-phone",-876060655)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m","event"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step2"], null));
}));

resa.actions.step2.G__39171 = (function resa$actions$step2$G__39171(parent_id,m,event){
var reaction__$1 = resa.actions.step2.G__39171;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39172__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39172 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39173__i = 0, G__39173__a = new Array(arguments.length -  0);
while (G__39173__i < G__39173__a.length) {G__39173__a[G__39173__i] = arguments[G__39173__i + 0]; ++G__39173__i;}
  _ = new cljs.core.IndexedSeq(G__39173__a,0,null);
} 
return G__39172__delegate.call(this,_);};
G__39172.cljs$lang$maxFixedArity = 0;
G__39172.cljs$lang$applyTo = (function (arglist__39174){
var _ = cljs.core.seq(arglist__39174);
return G__39172__delegate(_);
});
G__39172.cljs$core$IFn$_invoke$arity$variadic = G__39172__delegate;
return G__39172;
})()
;})(reaction__$1))
;
var raw_value = event.target.value;
var treated_value = clojure.string.replace.call(null,raw_value,/\D/,"");
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"phone","phone",-763596057)], null),treated_value);
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"step2--set-phone","step2--set-phone",-876060655),(function() { 
var G__39175__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step2.G__39171,action_id,state,params);
};
var G__39175 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39176__i = 0, G__39176__a = new Array(arguments.length -  4);
while (G__39176__i < G__39176__a.length) {G__39176__a[G__39176__i] = arguments[G__39176__i + 4]; ++G__39176__i;}
  params = new cljs.core.IndexedSeq(G__39176__a,0,null);
} 
return G__39175__delegate.call(this,parent_id,action_id,state,_,params);};
G__39175.cljs$lang$maxFixedArity = 4;
G__39175.cljs$lang$applyTo = (function (arglist__39177){
var parent_id = cljs.core.first(arglist__39177);
arglist__39177 = cljs.core.next(arglist__39177);
var action_id = cljs.core.first(arglist__39177);
arglist__39177 = cljs.core.next(arglist__39177);
var state = cljs.core.first(arglist__39177);
arglist__39177 = cljs.core.next(arglist__39177);
var _ = cljs.core.first(arglist__39177);
var params = cljs.core.rest(arglist__39177);
return G__39175__delegate(parent_id,action_id,state,_,params);
});
G__39175.cljs$core$IFn$_invoke$arity$variadic = G__39175__delegate;
return G__39175;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"step2--set-email","step2--set-email",-1571954604)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m","event"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step2"], null));
}));

resa.actions.step2.G__39178 = (function resa$actions$step2$G__39178(parent_id,m,event){
var reaction__$1 = resa.actions.step2.G__39178;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39179__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39179 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39180__i = 0, G__39180__a = new Array(arguments.length -  0);
while (G__39180__i < G__39180__a.length) {G__39180__a[G__39180__i] = arguments[G__39180__i + 0]; ++G__39180__i;}
  _ = new cljs.core.IndexedSeq(G__39180__a,0,null);
} 
return G__39179__delegate.call(this,_);};
G__39179.cljs$lang$maxFixedArity = 0;
G__39179.cljs$lang$applyTo = (function (arglist__39181){
var _ = cljs.core.seq(arglist__39181);
return G__39179__delegate(_);
});
G__39179.cljs$core$IFn$_invoke$arity$variadic = G__39179__delegate;
return G__39179;
})()
;})(reaction__$1))
;
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"email","email",1415816706)], null),event.target.value);
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"step2--set-email","step2--set-email",-1571954604),(function() { 
var G__39182__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step2.G__39178,action_id,state,params);
};
var G__39182 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39183__i = 0, G__39183__a = new Array(arguments.length -  4);
while (G__39183__i < G__39183__a.length) {G__39183__a[G__39183__i] = arguments[G__39183__i + 4]; ++G__39183__i;}
  params = new cljs.core.IndexedSeq(G__39183__a,0,null);
} 
return G__39182__delegate.call(this,parent_id,action_id,state,_,params);};
G__39182.cljs$lang$maxFixedArity = 4;
G__39182.cljs$lang$applyTo = (function (arglist__39184){
var parent_id = cljs.core.first(arglist__39184);
arglist__39184 = cljs.core.next(arglist__39184);
var action_id = cljs.core.first(arglist__39184);
arglist__39184 = cljs.core.next(arglist__39184);
var state = cljs.core.first(arglist__39184);
arglist__39184 = cljs.core.next(arglist__39184);
var _ = cljs.core.first(arglist__39184);
var params = cljs.core.rest(arglist__39184);
return G__39182__delegate(parent_id,action_id,state,_,params);
});
G__39182.cljs$core$IFn$_invoke$arity$variadic = G__39182__delegate;
return G__39182;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"step2--set-pax","step2--set-pax",1343969502)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m","event"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step2"], null));
}));

resa.actions.step2.G__39185 = (function resa$actions$step2$G__39185(parent_id,m,event){
var reaction__$1 = resa.actions.step2.G__39185;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39186__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39186 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39187__i = 0, G__39187__a = new Array(arguments.length -  0);
while (G__39187__i < G__39187__a.length) {G__39187__a[G__39187__i] = arguments[G__39187__i + 0]; ++G__39187__i;}
  _ = new cljs.core.IndexedSeq(G__39187__a,0,null);
} 
return G__39186__delegate.call(this,_);};
G__39186.cljs$lang$maxFixedArity = 0;
G__39186.cljs$lang$applyTo = (function (arglist__39188){
var _ = cljs.core.seq(arglist__39188);
return G__39186__delegate(_);
});
G__39186.cljs$core$IFn$_invoke$arity$variadic = G__39186__delegate;
return G__39186;
})()
;})(reaction__$1))
;
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pax","pax",-93526346)], null),event.target.value);
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"step2--set-pax","step2--set-pax",1343969502),(function() { 
var G__39189__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step2.G__39185,action_id,state,params);
};
var G__39189 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39190__i = 0, G__39190__a = new Array(arguments.length -  4);
while (G__39190__i < G__39190__a.length) {G__39190__a[G__39190__i] = arguments[G__39190__i + 4]; ++G__39190__i;}
  params = new cljs.core.IndexedSeq(G__39190__a,0,null);
} 
return G__39189__delegate.call(this,parent_id,action_id,state,_,params);};
G__39189.cljs$lang$maxFixedArity = 4;
G__39189.cljs$lang$applyTo = (function (arglist__39191){
var parent_id = cljs.core.first(arglist__39191);
arglist__39191 = cljs.core.next(arglist__39191);
var action_id = cljs.core.first(arglist__39191);
arglist__39191 = cljs.core.next(arglist__39191);
var state = cljs.core.first(arglist__39191);
arglist__39191 = cljs.core.next(arglist__39191);
var _ = cljs.core.first(arglist__39191);
var params = cljs.core.rest(arglist__39191);
return G__39189__delegate(parent_id,action_id,state,_,params);
});
G__39189.cljs$core$IFn$_invoke$arity$variadic = G__39189__delegate;
return G__39189;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"step2--set-date","step2--set-date",1437764608)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m","value"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),27,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step2"], null));
}));

resa.actions.step2.G__39192 = (function resa$actions$step2$G__39192(parent_id,m,value){
var reaction__$1 = resa.actions.step2.G__39192;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39193__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39193 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39194__i = 0, G__39194__a = new Array(arguments.length -  0);
while (G__39194__i < G__39194__a.length) {G__39194__a[G__39194__i] = arguments[G__39194__i + 0]; ++G__39194__i;}
  _ = new cljs.core.IndexedSeq(G__39194__a,0,null);
} 
return G__39193__delegate.call(this,_);};
G__39193.cljs$lang$maxFixedArity = 0;
G__39193.cljs$lang$applyTo = (function (arglist__39195){
var _ = cljs.core.seq(arglist__39195);
return G__39193__delegate(_);
});
G__39193.cljs$core$IFn$_invoke$arity$variadic = G__39193__delegate;
return G__39193;
})()
;})(reaction__$1))
;
if(cljs.core.truth_(value)){
var date = value.format("YYYY-MM-DD");
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"date","date",-1463434462)], null),date),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc,new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"minutes","minutes",1319166394));
} else {
return m;
}
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"step2--set-date","step2--set-date",1437764608),(function() { 
var G__39196__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step2.G__39192,action_id,state,params);
};
var G__39196 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39197__i = 0, G__39197__a = new Array(arguments.length -  4);
while (G__39197__i < G__39197__a.length) {G__39197__a[G__39197__i] = arguments[G__39197__i + 4]; ++G__39197__i;}
  params = new cljs.core.IndexedSeq(G__39197__a,0,null);
} 
return G__39196__delegate.call(this,parent_id,action_id,state,_,params);};
G__39196.cljs$lang$maxFixedArity = 4;
G__39196.cljs$lang$applyTo = (function (arglist__39198){
var parent_id = cljs.core.first(arglist__39198);
arglist__39198 = cljs.core.next(arglist__39198);
var action_id = cljs.core.first(arglist__39198);
arglist__39198 = cljs.core.next(arglist__39198);
var state = cljs.core.first(arglist__39198);
arglist__39198 = cljs.core.next(arglist__39198);
var _ = cljs.core.first(arglist__39198);
var params = cljs.core.rest(arglist__39198);
return G__39196__delegate(parent_id,action_id,state,_,params);
});
G__39196.cljs$core$IFn$_invoke$arity$variadic = G__39196__delegate;
return G__39196;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"step2--set-time","step2--set-time",1171261259)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m","value"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step2"], null));
}));

resa.actions.step2.G__39199 = (function resa$actions$step2$G__39199(parent_id,m,value){
var reaction__$1 = resa.actions.step2.G__39199;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39200__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39200 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39201__i = 0, G__39201__a = new Array(arguments.length -  0);
while (G__39201__i < G__39201__a.length) {G__39201__a[G__39201__i] = arguments[G__39201__i + 0]; ++G__39201__i;}
  _ = new cljs.core.IndexedSeq(G__39201__a,0,null);
} 
return G__39200__delegate.call(this,_);};
G__39200.cljs$lang$maxFixedArity = 0;
G__39200.cljs$lang$applyTo = (function (arglist__39202){
var _ = cljs.core.seq(arglist__39202);
return G__39200__delegate(_);
});
G__39200.cljs$core$IFn$_invoke$arity$variadic = G__39200__delegate;
return G__39200;
})()
;})(reaction__$1))
;
if(cljs.core.truth_(value)){
var old_hour = cljs.core.get_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hour","hour",-555989214)], null));
var old_min = cljs.core.get_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"minutes","minutes",1319166394)], null));
var new_hour = parseInt(value.format("HH"));
var new_min = parseInt(value.format("mm"));
cljs.core.println.call(null,"OK");

if(cljs.core.not_EQ_.call(null,old_hour,new_hour)){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hour","hour",-555989214)], null),new_hour),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
} else {
if(cljs.core.not_EQ_.call(null,old_min,new_min)){
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"minutes","minutes",1319166394)], null),new_min);
} else {
return m;

}
}
} else {
return m;
}
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"step2--set-time","step2--set-time",1171261259),(function() { 
var G__39203__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step2.G__39199,action_id,state,params);
};
var G__39203 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39204__i = 0, G__39204__a = new Array(arguments.length -  4);
while (G__39204__i < G__39204__a.length) {G__39204__a[G__39204__i] = arguments[G__39204__i + 4]; ++G__39204__i;}
  params = new cljs.core.IndexedSeq(G__39204__a,0,null);
} 
return G__39203__delegate.call(this,parent_id,action_id,state,_,params);};
G__39203.cljs$lang$maxFixedArity = 4;
G__39203.cljs$lang$applyTo = (function (arglist__39205){
var parent_id = cljs.core.first(arglist__39205);
arglist__39205 = cljs.core.next(arglist__39205);
var action_id = cljs.core.first(arglist__39205);
arglist__39205 = cljs.core.next(arglist__39205);
var state = cljs.core.first(arglist__39205);
arglist__39205 = cljs.core.next(arglist__39205);
var _ = cljs.core.first(arglist__39205);
var params = cljs.core.rest(arglist__39205);
return G__39203__delegate(parent_id,action_id,state,_,params);
});
G__39203.cljs$core$IFn$_invoke$arity$variadic = G__39203__delegate;
return G__39203;
})()
);
cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"step2--set-minute","step2--set-minute",836995935)], null),(function (p1__39106__39107__auto__){
return cljs.core.merge.call(null,p1__39106__39107__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"silent","silent",-1142977785),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parent-id","m","value"], null)], null),new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"namespace","namespace",-377510372),"resa.actions.step2"], null));
}));

resa.actions.step2.G__39206 = (function resa$actions$step2$G__39206(parent_id,m,value){
var reaction__$1 = resa.actions.step2.G__39206;
var dispatch_BANG_ = ((function (reaction__$1){
return (function() { 
var G__39207__delegate = function (_){
throw "Cannot use a dispatch! on an action, please use an action!";
};
var G__39207 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__39208__i = 0, G__39208__a = new Array(arguments.length -  0);
while (G__39208__i < G__39208__a.length) {G__39208__a[G__39208__i] = arguments[G__39208__i + 0]; ++G__39208__i;}
  _ = new cljs.core.IndexedSeq(G__39208__a,0,null);
} 
return G__39207__delegate.call(this,_);};
G__39207.cljs$lang$maxFixedArity = 0;
G__39207.cljs$lang$applyTo = (function (arglist__39209){
var _ = cljs.core.seq(arglist__39209);
return G__39207__delegate(_);
});
G__39207.cljs$core$IFn$_invoke$arity$variadic = G__39207__delegate;
return G__39207;
})()
;})(reaction__$1))
;
if(cljs.core.truth_(value)){
var minutes = parseInt(value.format("mm"));
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"minutes","minutes",1319166394)], null),minutes);
} else {
return m;
}
});

cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"step2--set-minute","step2--set-minute",836995935),(function() { 
var G__39210__delegate = function (parent_id,action_id,state,_,params){
return cljs.core.apply.call(null,resa.actions.step2.G__39206,action_id,state,params);
};
var G__39210 = function (parent_id,action_id,state,_,var_args){
var params = null;
if (arguments.length > 4) {
var G__39211__i = 0, G__39211__a = new Array(arguments.length -  4);
while (G__39211__i < G__39211__a.length) {G__39211__a[G__39211__i] = arguments[G__39211__i + 4]; ++G__39211__i;}
  params = new cljs.core.IndexedSeq(G__39211__a,0,null);
} 
return G__39210__delegate.call(this,parent_id,action_id,state,_,params);};
G__39210.cljs$lang$maxFixedArity = 4;
G__39210.cljs$lang$applyTo = (function (arglist__39212){
var parent_id = cljs.core.first(arglist__39212);
arglist__39212 = cljs.core.next(arglist__39212);
var action_id = cljs.core.first(arglist__39212);
arglist__39212 = cljs.core.next(arglist__39212);
var state = cljs.core.first(arglist__39212);
arglist__39212 = cljs.core.next(arglist__39212);
var _ = cljs.core.first(arglist__39212);
var params = cljs.core.rest(arglist__39212);
return G__39210__delegate(parent_id,action_id,state,_,params);
});
G__39210.cljs$core$IFn$_invoke$arity$variadic = G__39210__delegate;
return G__39210;
})()
);

//# sourceMappingURL=step2.js.map?rel=1520306978591
