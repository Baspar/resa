// Compiled by ClojureScript 1.9.946 {}
goog.provide('reaction.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reaction.sidecar');
goog.require('cljs.analyzer.api');
goog.require('reaction.style');
goog.require('rum.core');
if(typeof reaction.core.actions_list !== 'undefined'){
} else {
reaction.core.actions_list = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions-history","actions-history",362113919),cljs.core.PersistentVector.EMPTY], null));
}
if(typeof reaction.core.actions_id !== 'undefined'){
} else {
reaction.core.actions_id = cljs.core.atom.call(null,(0));
}
reaction.core.set_key_down_document_BANG_ = (function reaction$core$set_key_down_document_BANG_(state){
var old_fn = document.onkeydown;
return document.onkeydown = ((function (old_fn){
return (function (p1__38981_SHARP_){
if(cljs.core.truth_(old_fn)){

} else {
}

if(cljs.core.truth_((function (){var and__30911__auto__ = cljs.core._EQ_.call(null,p1__38981_SHARP_.which,(65));
if(and__30911__auto__){
var and__30911__auto____$1 = p1__38981_SHARP_.ctrlKey;
if(cljs.core.truth_(and__30911__auto____$1)){
return p1__38981_SHARP_.shiftKey;
} else {
return and__30911__auto____$1;
}
} else {
return and__30911__auto__;
}
})())){
var visible_keyword = new cljs.core.Keyword(null,"actions-visibles","actions-visibles",-1581485174);
var visible_QMARK_ = cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),visible_keyword,false));
var input_dom_node = document.getElementById("pit-plugin--actions-card--input");
cljs.core.swap_BANG_.call(null,state,cljs.core.update,visible_keyword,cljs.core.not);

return window.setTimeout(((function (visible_keyword,visible_QMARK_,input_dom_node,old_fn){
return (function (){
if(visible_QMARK_){
return input_dom_node.focus();
} else {
return input_dom_node.blur();
}
});})(visible_keyword,visible_QMARK_,input_dom_node,old_fn))
,(100));
} else {
return null;
}
});})(old_fn))
;
});
reaction.core.render_actions_list = (function reaction$core$render_actions_list(node){
return rum.core.mount.call(null,reaction.sidecar.actions_component.call(null,reaction.core.actions_list),node);
});
reaction.core.bind_actions_list = (function reaction$core$bind_actions_list(){
var node = document.getElementById("pit--plugin--action--bar");
if(cljs.core.truth_(node)){
return null;
} else {
var js_node = document.createElement("div");
var css_node = document.createElement("style");
reaction.core.set_key_down_document_BANG_.call(null,reaction.core.actions_list);

(css_node["innerHTML"] = reaction.style.style);

(js_node["id"] = "pit--plugin--action--bar");

document.body.appendChild(js_node);

document.head.appendChild(css_node);

cljs.core.add_watch.call(null,reaction.core.actions_list,new cljs.core.Keyword(null,"actions-list-watch","actions-list-watch",-1218599922),((function (js_node,css_node,node){
return (function (_,___$1,old_state,new_state){
return reaction.core.render_actions_list.call(null,js_node);
});})(js_node,css_node,node))
);

return reaction.core.render_actions_list.call(null,js_node);
}
});
reaction.core.atom_QMARK_ = (function reaction$core$atom_QMARK_(x){
return cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,x));
});
reaction.core.pop_actions_list = (function reaction$core$pop_actions_list(action_name,params,parent_id,action_id){
var date = (new Date());
var h = date.getHours();
var h__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((h < (10)))?(0):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('');
var m = date.getMinutes();
var m__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((m < (10)))?(0):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
var s = date.getSeconds();
var s__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s < (10)))?(0):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var infos = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"time","time",1385887882),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)].join(''),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name.call(null,action_name),new cljs.core.Keyword(null,"action-id","action-id",-1727958578),action_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"params","params",710516235),params], null);
return cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.update,new cljs.core.Keyword(null,"actions-history","actions-history",362113919),((function (date,h,h__$1,m,m__$1,s,s__$1,infos){
return (function (p1__38982_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,(50),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [infos], null),p1__38982_SHARP_)));
});})(date,h,h__$1,m,m__$1,s,s__$1,infos))
);
});
if(typeof reaction.core.apply_action !== 'undefined'){
} else {
reaction.core.apply_action = (function (){var method_table__31978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31982__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reaction.core","apply-action"),((function (method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__,hierarchy__31982__auto__){
return (function() { 
var G__38983__delegate = function (parent_id,action_id,_,action_name,params){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,reaction.core.actions_list),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),action_name,new cljs.core.Keyword(null,"silent","silent",-1142977785)], null)))){
} else {
reaction.core.pop_actions_list.call(null,action_name,params,parent_id,action_id);
}

return action_name;
};
var G__38983 = function (parent_id,action_id,_,action_name,var_args){
var params = null;
if (arguments.length > 4) {
var G__38984__i = 0, G__38984__a = new Array(arguments.length -  4);
while (G__38984__i < G__38984__a.length) {G__38984__a[G__38984__i] = arguments[G__38984__i + 4]; ++G__38984__i;}
  params = new cljs.core.IndexedSeq(G__38984__a,0,null);
} 
return G__38983__delegate.call(this,parent_id,action_id,_,action_name,params);};
G__38983.cljs$lang$maxFixedArity = 4;
G__38983.cljs$lang$applyTo = (function (arglist__38985){
var parent_id = cljs.core.first(arglist__38985);
arglist__38985 = cljs.core.next(arglist__38985);
var action_id = cljs.core.first(arglist__38985);
arglist__38985 = cljs.core.next(arglist__38985);
var _ = cljs.core.first(arglist__38985);
arglist__38985 = cljs.core.next(arglist__38985);
var action_name = cljs.core.first(arglist__38985);
var params = cljs.core.rest(arglist__38985);
return G__38983__delegate(parent_id,action_id,_,action_name,params);
});
G__38983.cljs$core$IFn$_invoke$arity$variadic = G__38983__delegate;
return G__38983;
})()
;})(method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__,hierarchy__31982__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31982__auto__,method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__));
})();
}
cljs.core._add_method.call(null,reaction.core.apply_action,null,(function() { 
var G__38986__delegate = function (_,___$1,m,___$2){
return m;
};
var G__38986 = function (_,___$1,m,var_args){
var ___$2 = null;
if (arguments.length > 3) {
var G__38987__i = 0, G__38987__a = new Array(arguments.length -  3);
while (G__38987__i < G__38987__a.length) {G__38987__a[G__38987__i] = arguments[G__38987__i + 3]; ++G__38987__i;}
  ___$2 = new cljs.core.IndexedSeq(G__38987__a,0,null);
} 
return G__38986__delegate.call(this,_,___$1,m,___$2);};
G__38986.cljs$lang$maxFixedArity = 3;
G__38986.cljs$lang$applyTo = (function (arglist__38988){
var _ = cljs.core.first(arglist__38988);
arglist__38988 = cljs.core.next(arglist__38988);
var ___$1 = cljs.core.first(arglist__38988);
arglist__38988 = cljs.core.next(arglist__38988);
var m = cljs.core.first(arglist__38988);
var ___$2 = cljs.core.rest(arglist__38988);
return G__38986__delegate(_,___$1,m,___$2);
});
G__38986.cljs$core$IFn$_invoke$arity$variadic = G__38986__delegate;
return G__38986;
})()
);
cljs.core._add_method.call(null,reaction.core.apply_action,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__38989__delegate = function (_,___$1,m,action_name,body){
cljs.core.println.call(null,"/!\\ Cannot find action \"",action_name,"\"\nYou can define it with the function (defaction",action_name,"[m] (...))");

return m;
};
var G__38989 = function (_,___$1,m,action_name,var_args){
var body = null;
if (arguments.length > 4) {
var G__38990__i = 0, G__38990__a = new Array(arguments.length -  4);
while (G__38990__i < G__38990__a.length) {G__38990__a[G__38990__i] = arguments[G__38990__i + 4]; ++G__38990__i;}
  body = new cljs.core.IndexedSeq(G__38990__a,0,null);
} 
return G__38989__delegate.call(this,_,___$1,m,action_name,body);};
G__38989.cljs$lang$maxFixedArity = 4;
G__38989.cljs$lang$applyTo = (function (arglist__38991){
var _ = cljs.core.first(arglist__38991);
arglist__38991 = cljs.core.next(arglist__38991);
var ___$1 = cljs.core.first(arglist__38991);
arglist__38991 = cljs.core.next(arglist__38991);
var m = cljs.core.first(arglist__38991);
arglist__38991 = cljs.core.next(arglist__38991);
var action_name = cljs.core.first(arglist__38991);
var body = cljs.core.rest(arglist__38991);
return G__38989__delegate(_,___$1,m,action_name,body);
});
G__38989.cljs$core$IFn$_invoke$arity$variadic = G__38989__delegate;
return G__38989;
})()
);
if(typeof reaction.core.apply_action_BANG_ !== 'undefined'){
} else {
reaction.core.apply_action_BANG_ = (function (){var method_table__31978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31982__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reaction.core","apply-action!"),((function (method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__,hierarchy__31982__auto__){
return (function() { 
var G__38992__delegate = function (parent_id,action_id,_,action_name,params){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,reaction.core.actions_list),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,action_name))," !"].join('')),new cljs.core.Keyword(null,"silent","silent",-1142977785)], null)))){
} else {
reaction.core.pop_actions_list.call(null,cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,action_name))," !"].join('')),params,parent_id,action_id);
}

return action_name;
};
var G__38992 = function (parent_id,action_id,_,action_name,var_args){
var params = null;
if (arguments.length > 4) {
var G__38993__i = 0, G__38993__a = new Array(arguments.length -  4);
while (G__38993__i < G__38993__a.length) {G__38993__a[G__38993__i] = arguments[G__38993__i + 4]; ++G__38993__i;}
  params = new cljs.core.IndexedSeq(G__38993__a,0,null);
} 
return G__38992__delegate.call(this,parent_id,action_id,_,action_name,params);};
G__38992.cljs$lang$maxFixedArity = 4;
G__38992.cljs$lang$applyTo = (function (arglist__38994){
var parent_id = cljs.core.first(arglist__38994);
arglist__38994 = cljs.core.next(arglist__38994);
var action_id = cljs.core.first(arglist__38994);
arglist__38994 = cljs.core.next(arglist__38994);
var _ = cljs.core.first(arglist__38994);
arglist__38994 = cljs.core.next(arglist__38994);
var action_name = cljs.core.first(arglist__38994);
var params = cljs.core.rest(arglist__38994);
return G__38992__delegate(parent_id,action_id,_,action_name,params);
});
G__38992.cljs$core$IFn$_invoke$arity$variadic = G__38992__delegate;
return G__38992;
})()
;})(method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__,hierarchy__31982__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31982__auto__,method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__));
})();
}
cljs.core._add_method.call(null,reaction.core.apply_action_BANG_,null,(function() { 
var G__38995__delegate = function (_){
return null;
};
var G__38995 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__38996__i = 0, G__38996__a = new Array(arguments.length -  0);
while (G__38996__i < G__38996__a.length) {G__38996__a[G__38996__i] = arguments[G__38996__i + 0]; ++G__38996__i;}
  _ = new cljs.core.IndexedSeq(G__38996__a,0,null);
} 
return G__38995__delegate.call(this,_);};
G__38995.cljs$lang$maxFixedArity = 0;
G__38995.cljs$lang$applyTo = (function (arglist__38997){
var _ = cljs.core.seq(arglist__38997);
return G__38995__delegate(_);
});
G__38995.cljs$core$IFn$_invoke$arity$variadic = G__38995__delegate;
return G__38995;
})()
);
cljs.core._add_method.call(null,reaction.core.apply_action_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__38998__delegate = function (_,___$1,___$2,action_name,___$3){
return cljs.core.println.call(null,"/!\\ Cannot find side-effect action \"",action_name,"\"\nYou can define it with the function (defaction!",action_name,"[m] (...))");
};
var G__38998 = function (_,___$1,___$2,action_name,var_args){
var ___$3 = null;
if (arguments.length > 4) {
var G__38999__i = 0, G__38999__a = new Array(arguments.length -  4);
while (G__38999__i < G__38999__a.length) {G__38999__a[G__38999__i] = arguments[G__38999__i + 4]; ++G__38999__i;}
  ___$3 = new cljs.core.IndexedSeq(G__38999__a,0,null);
} 
return G__38998__delegate.call(this,_,___$1,___$2,action_name,___$3);};
G__38998.cljs$lang$maxFixedArity = 4;
G__38998.cljs$lang$applyTo = (function (arglist__39000){
var _ = cljs.core.first(arglist__39000);
arglist__39000 = cljs.core.next(arglist__39000);
var ___$1 = cljs.core.first(arglist__39000);
arglist__39000 = cljs.core.next(arglist__39000);
var ___$2 = cljs.core.first(arglist__39000);
arglist__39000 = cljs.core.next(arglist__39000);
var action_name = cljs.core.first(arglist__39000);
var ___$3 = cljs.core.rest(arglist__39000);
return G__38998__delegate(_,___$1,___$2,action_name,___$3);
});
G__38998.cljs$core$IFn$_invoke$arity$variadic = G__38998__delegate;
return G__38998;
})()
);
reaction.core._dispatch_BANG_ = (function reaction$core$_dispatch_BANG_(var_args){
var args__32209__auto__ = [];
var len__32202__auto___39021 = arguments.length;
var i__32203__auto___39022 = (0);
while(true){
if((i__32203__auto___39022 < len__32202__auto___39021)){
args__32209__auto__.push((arguments[i__32203__auto___39022]));

var G__39023 = (i__32203__auto___39022 + (1));
i__32203__auto___39022 = G__39023;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((2) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((2)),(0),null)):null);
return reaction.core._dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32210__auto__);
});

reaction.core._dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent_id,state,params){
if(cljs.core.truth_(reaction.core.atom_QMARK_.call(null,parent_id))){
return cljs.core.apply.call(null,reaction.core._dispatch_BANG_,null,parent_id,state,params);
} else {
var indexed_params = cljs.core.map_indexed.call(null,cljs.core.vector,params);
var partitioning = ((function (indexed_params){
return (function (p__39005){
var vec__39006 = p__39005;
var index = cljs.core.nth.call(null,vec__39006,(0),null);
var item = cljs.core.nth.call(null,vec__39006,(1),null);
if(((item instanceof cljs.core.Keyword)) || ((cljs.core.coll_QMARK_.call(null,item)) && (cljs.core.not_EQ_.call(null,cljs.core.keyword.call(null,"   !"),cljs.core.first.call(null,item))))){
return (-1);
} else {
return index;
}
});})(indexed_params))
;
var partitioned_params = cljs.core.partition_by.call(null,partitioning,indexed_params);
var mapped_params = cljs.core.map.call(null,((function (indexed_params,partitioning,partitioned_params){
return (function (x){
var remove_index = cljs.core.map.call(null,cljs.core.second,x);
var remove_bang = cljs.core.map.call(null,((function (remove_index,indexed_params,partitioning,partitioned_params){
return (function (y){
if(((y instanceof cljs.core.Keyword)) || (cljs.core.not_EQ_.call(null,cljs.core.keyword.call(null,"   !"),cljs.core.first.call(null,y)))){
return y;
} else {
return cljs.core.vec.call(null,cljs.core.rest.call(null,y));
}
});})(remove_index,indexed_params,partitioning,partitioned_params))
,remove_index);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,(-1),partitioning.call(null,cljs.core.first.call(null,x))))?new cljs.core.Keyword(null,"normal","normal",-1519123858):new cljs.core.Keyword(null,"side-effect","side-effect",-949778885))], null),cljs.core.map.call(null,cljs.core.second,x)));
});})(indexed_params,partitioning,partitioned_params))
,partitioned_params);
var instructions = cljs.core.map.call(null,((function (indexed_params,partitioning,partitioned_params,mapped_params){
return (function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"side-effect","side-effect",-949778885),cljs.core.first.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"side-effect","side-effect",-949778885),cljs.core.vec.call(null,cljs.core.rest.call(null,cljs.core.second.call(null,x)))], null);
} else {
return x;
}
});})(indexed_params,partitioning,partitioned_params,mapped_params))
,mapped_params);
var reducer = ((function (indexed_params,partitioning,partitioned_params,mapped_params,instructions){
return (function (m,actions){
return cljs.core.reduce.call(null,((function (indexed_params,partitioning,partitioned_params,mapped_params,instructions){
return (function (local_state,action){
var action_id = cljs.core.swap_BANG_.call(null,reaction.core.actions_id,cljs.core.inc);
if(cljs.core.coll_QMARK_.call(null,action)){
return cljs.core.apply.call(null,reaction.core.apply_action,parent_id,action_id,local_state,action);
} else {
return reaction.core.apply_action.call(null,parent_id,action_id,local_state,action);
}
});})(indexed_params,partitioning,partitioned_params,mapped_params,instructions))
,m,actions);
});})(indexed_params,partitioning,partitioned_params,mapped_params,instructions))
;
var seq__39009 = cljs.core.seq.call(null,instructions);
var chunk__39010 = null;
var count__39011 = (0);
var i__39012 = (0);
while(true){
if((i__39012 < count__39011)){
var instruction = cljs.core._nth.call(null,chunk__39010,i__39012);
var type_action_39024 = cljs.core.first.call(null,instruction);
var actions_39025 = cljs.core.rest.call(null,instruction);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),type_action_39024)){
cljs.core.swap_BANG_.call(null,state,((function (seq__39009,chunk__39010,count__39011,i__39012,type_action_39024,actions_39025,instruction,indexed_params,partitioning,partitioned_params,mapped_params,instructions,reducer){
return (function (p1__39001_SHARP_){
return reducer.call(null,p1__39001_SHARP_,actions_39025);
});})(seq__39009,chunk__39010,count__39011,i__39012,type_action_39024,actions_39025,instruction,indexed_params,partitioning,partitioned_params,mapped_params,instructions,reducer))
);
} else {
var seq__39013_39026 = cljs.core.seq.call(null,actions_39025);
var chunk__39014_39027 = null;
var count__39015_39028 = (0);
var i__39016_39029 = (0);
while(true){
if((i__39016_39029 < count__39015_39028)){
var action_39030 = cljs.core._nth.call(null,chunk__39014_39027,i__39016_39029);
var action_id_39031 = cljs.core.swap_BANG_.call(null,reaction.core.actions_id,cljs.core.inc);
if(cljs.core.coll_QMARK_.call(null,action_39030)){
cljs.core.apply.call(null,reaction.core.apply_action_BANG_,parent_id,action_id_39031,state,action_39030);
} else {
reaction.core.apply_action_BANG_.call(null,parent_id,action_id_39031,state,action_39030);
}

var G__39032 = seq__39013_39026;
var G__39033 = chunk__39014_39027;
var G__39034 = count__39015_39028;
var G__39035 = (i__39016_39029 + (1));
seq__39013_39026 = G__39032;
chunk__39014_39027 = G__39033;
count__39015_39028 = G__39034;
i__39016_39029 = G__39035;
continue;
} else {
var temp__5457__auto___39036 = cljs.core.seq.call(null,seq__39013_39026);
if(temp__5457__auto___39036){
var seq__39013_39037__$1 = temp__5457__auto___39036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39013_39037__$1)){
var c__31854__auto___39038 = cljs.core.chunk_first.call(null,seq__39013_39037__$1);
var G__39039 = cljs.core.chunk_rest.call(null,seq__39013_39037__$1);
var G__39040 = c__31854__auto___39038;
var G__39041 = cljs.core.count.call(null,c__31854__auto___39038);
var G__39042 = (0);
seq__39013_39026 = G__39039;
chunk__39014_39027 = G__39040;
count__39015_39028 = G__39041;
i__39016_39029 = G__39042;
continue;
} else {
var action_39043 = cljs.core.first.call(null,seq__39013_39037__$1);
var action_id_39044 = cljs.core.swap_BANG_.call(null,reaction.core.actions_id,cljs.core.inc);
if(cljs.core.coll_QMARK_.call(null,action_39043)){
cljs.core.apply.call(null,reaction.core.apply_action_BANG_,parent_id,action_id_39044,state,action_39043);
} else {
reaction.core.apply_action_BANG_.call(null,parent_id,action_id_39044,state,action_39043);
}

var G__39045 = cljs.core.next.call(null,seq__39013_39037__$1);
var G__39046 = null;
var G__39047 = (0);
var G__39048 = (0);
seq__39013_39026 = G__39045;
chunk__39014_39027 = G__39046;
count__39015_39028 = G__39047;
i__39016_39029 = G__39048;
continue;
}
} else {
}
}
break;
}
}

var G__39049 = seq__39009;
var G__39050 = chunk__39010;
var G__39051 = count__39011;
var G__39052 = (i__39012 + (1));
seq__39009 = G__39049;
chunk__39010 = G__39050;
count__39011 = G__39051;
i__39012 = G__39052;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39009);
if(temp__5457__auto__){
var seq__39009__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39009__$1)){
var c__31854__auto__ = cljs.core.chunk_first.call(null,seq__39009__$1);
var G__39053 = cljs.core.chunk_rest.call(null,seq__39009__$1);
var G__39054 = c__31854__auto__;
var G__39055 = cljs.core.count.call(null,c__31854__auto__);
var G__39056 = (0);
seq__39009 = G__39053;
chunk__39010 = G__39054;
count__39011 = G__39055;
i__39012 = G__39056;
continue;
} else {
var instruction = cljs.core.first.call(null,seq__39009__$1);
var type_action_39057 = cljs.core.first.call(null,instruction);
var actions_39058 = cljs.core.rest.call(null,instruction);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),type_action_39057)){
cljs.core.swap_BANG_.call(null,state,((function (seq__39009,chunk__39010,count__39011,i__39012,type_action_39057,actions_39058,instruction,seq__39009__$1,temp__5457__auto__,indexed_params,partitioning,partitioned_params,mapped_params,instructions,reducer){
return (function (p1__39001_SHARP_){
return reducer.call(null,p1__39001_SHARP_,actions_39058);
});})(seq__39009,chunk__39010,count__39011,i__39012,type_action_39057,actions_39058,instruction,seq__39009__$1,temp__5457__auto__,indexed_params,partitioning,partitioned_params,mapped_params,instructions,reducer))
);
} else {
var seq__39017_39059 = cljs.core.seq.call(null,actions_39058);
var chunk__39018_39060 = null;
var count__39019_39061 = (0);
var i__39020_39062 = (0);
while(true){
if((i__39020_39062 < count__39019_39061)){
var action_39063 = cljs.core._nth.call(null,chunk__39018_39060,i__39020_39062);
var action_id_39064 = cljs.core.swap_BANG_.call(null,reaction.core.actions_id,cljs.core.inc);
if(cljs.core.coll_QMARK_.call(null,action_39063)){
cljs.core.apply.call(null,reaction.core.apply_action_BANG_,parent_id,action_id_39064,state,action_39063);
} else {
reaction.core.apply_action_BANG_.call(null,parent_id,action_id_39064,state,action_39063);
}

var G__39065 = seq__39017_39059;
var G__39066 = chunk__39018_39060;
var G__39067 = count__39019_39061;
var G__39068 = (i__39020_39062 + (1));
seq__39017_39059 = G__39065;
chunk__39018_39060 = G__39066;
count__39019_39061 = G__39067;
i__39020_39062 = G__39068;
continue;
} else {
var temp__5457__auto___39069__$1 = cljs.core.seq.call(null,seq__39017_39059);
if(temp__5457__auto___39069__$1){
var seq__39017_39070__$1 = temp__5457__auto___39069__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39017_39070__$1)){
var c__31854__auto___39071 = cljs.core.chunk_first.call(null,seq__39017_39070__$1);
var G__39072 = cljs.core.chunk_rest.call(null,seq__39017_39070__$1);
var G__39073 = c__31854__auto___39071;
var G__39074 = cljs.core.count.call(null,c__31854__auto___39071);
var G__39075 = (0);
seq__39017_39059 = G__39072;
chunk__39018_39060 = G__39073;
count__39019_39061 = G__39074;
i__39020_39062 = G__39075;
continue;
} else {
var action_39076 = cljs.core.first.call(null,seq__39017_39070__$1);
var action_id_39077 = cljs.core.swap_BANG_.call(null,reaction.core.actions_id,cljs.core.inc);
if(cljs.core.coll_QMARK_.call(null,action_39076)){
cljs.core.apply.call(null,reaction.core.apply_action_BANG_,parent_id,action_id_39077,state,action_39076);
} else {
reaction.core.apply_action_BANG_.call(null,parent_id,action_id_39077,state,action_39076);
}

var G__39078 = cljs.core.next.call(null,seq__39017_39070__$1);
var G__39079 = null;
var G__39080 = (0);
var G__39081 = (0);
seq__39017_39059 = G__39078;
chunk__39018_39060 = G__39079;
count__39019_39061 = G__39080;
i__39020_39062 = G__39081;
continue;
}
} else {
}
}
break;
}
}

var G__39082 = cljs.core.next.call(null,seq__39009__$1);
var G__39083 = null;
var G__39084 = (0);
var G__39085 = (0);
seq__39009 = G__39082;
chunk__39010 = G__39083;
count__39011 = G__39084;
i__39012 = G__39085;
continue;
}
} else {
return null;
}
}
break;
}
}
});

reaction.core._dispatch_BANG_.cljs$lang$maxFixedArity = (2);

reaction.core._dispatch_BANG_.cljs$lang$applyTo = (function (seq39002){
var G__39003 = cljs.core.first.call(null,seq39002);
var seq39002__$1 = cljs.core.next.call(null,seq39002);
var G__39004 = cljs.core.first.call(null,seq39002__$1);
var seq39002__$2 = cljs.core.next.call(null,seq39002__$1);
return reaction.core._dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39003,G__39004,seq39002__$2);
});

reaction.core.remove_action = (function reaction$core$remove_action(action_name){
if((action_name instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ","The action name has to be a keyword","\n","(keyword? action-name)"].join('')));
}

cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.dissoc,action_name);

return cljs.core.remove_method.call(null,reaction.core.apply_action,action_name);
});
reaction.core.remove_action_BANG_ = (function reaction$core$remove_action_BANG_(action_name){
if((action_name instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ","The action name has to be a keyword","\n","(keyword? action-name)"].join('')));
}

cljs.core.swap_BANG_.call(null,reaction.core.actions_list,cljs.core.dissoc,action_name);

return cljs.core.remove_method.call(null,reaction.core.apply_action_BANG_,action_name);
});

//# sourceMappingURL=core.js.map?rel=1520306978427
