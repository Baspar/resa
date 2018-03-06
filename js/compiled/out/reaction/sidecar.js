// Compiled by ClojureScript 1.9.946 {}
goog.provide('reaction.sidecar');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('rum.core');
reaction.sidecar.scroll_into_view_if_needed = (function reaction$sidecar$scroll_into_view_if_needed(node){
var parent = (document.getElementsByClassName("pit-plugin--actions-list")[(0)]);
var parentComputedStyle = window.getComputedStyle(parent,null);
var parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue("border-top-width"));
var parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue("border-left-width"));
var overTop_QMARK_ = ((node.offsetTop - parent.offsetTop) < parent.scrollTop);
var overBottom_QMARK_ = ((((node.offsetTop + node.clientHeight) - parent.offsetTop) - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight));
if(overTop_QMARK_){
return (parent["scrollTop"] = ((node.offsetTop - parent.offsetTop) - parentBorderTopWidth));
} else {
if(overBottom_QMARK_){
return (parent["scrollTop"] = ((((node.offsetTop + node.clientHeight) - parent.offsetTop) - parentBorderTopWidth) - parent.clientHeight));
} else {
return null;
}
}
});
reaction.sidecar.fuzzy_search = cljs.core.memoize.call(null,(function() {
var G__37474 = null;
var G__37474__2 = (function (word,pattern){
return reaction.sidecar.fuzzy_search.call(null,(0),word,pattern);
});
var G__37474__3 = (function (i,word,pattern){
if(((cljs.core.count.call(null,pattern) === (0))) && ((cljs.core.count.call(null,word) === (0)))){
return cljs.core.PersistentVector.EMPTY;
} else {
if((cljs.core.count.call(null,word) > (0))){
var first_equal_QMARK_ = cljs.core._EQ_.call(null,cljs.core.first.call(null,word),cljs.core.first.call(null,pattern));
if(first_equal_QMARK_){
var temp__5457__auto__ = reaction.sidecar.fuzzy_search.call(null,(i + (1)),cljs.core.rest.call(null,word),cljs.core.rest.call(null,pattern));
if(cljs.core.truth_(temp__5457__auto__)){
var out = temp__5457__auto__;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),out);
} else {
return null;
}
} else {
var temp__5457__auto__ = reaction.sidecar.fuzzy_search.call(null,(i + (1)),cljs.core.rest.call(null,word),pattern);
if(cljs.core.truth_(temp__5457__auto__)){
var out = temp__5457__auto__;
return out;
} else {
return null;
}
}
} else {
return null;
}
}
});
G__37474 = function(i,word,pattern){
switch(arguments.length){
case 2:
return G__37474__2.call(this,i,word);
case 3:
return G__37474__3.call(this,i,word,pattern);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37474.cljs$core$IFn$_invoke$arity$2 = G__37474__2;
G__37474.cljs$core$IFn$_invoke$arity$3 = G__37474__3;
return G__37474;
})()
);
reaction.sidecar.input_fn = (function reaction$sidecar$input_fn(state,input_value){
return cljs.core.swap_BANG_.call(null,state,(function (m){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (buf,k){
return cljs.core.assoc_in.call(null,buf,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),k,new cljs.core.Keyword(null,"matches?","matches?",-1409299473)], null),reaction.sidecar.fuzzy_search.call(null,cljs.core.name.call(null,k),input_value));
}),m,cljs.core.keys.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(m))),new cljs.core.Keyword(null,"input-value","input-value",-1719954369),input_value),new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044)),new cljs.core.Keyword(null,"selected-action","selected-action",2048509630));
}));
});
reaction.sidecar.select_action_fn = (function reaction$sidecar$select_action_fn(state,id,flat_visible_actions){
if(((0) < cljs.core.count.call(null,flat_visible_actions))){
var valid_id = (function (){var x__31275__auto__ = (0);
var y__31276__auto__ = (function (){var x__31282__auto__ = (cljs.core.count.call(null,flat_visible_actions) - (1));
var y__31283__auto__ = id;
return ((x__31282__auto__ < y__31283__auto__) ? x__31282__auto__ : y__31283__auto__);
})();
return ((x__31275__auto__ > y__31276__auto__) ? x__31275__auto__ : y__31276__auto__);
})();
var new_action = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,flat_visible_actions,valid_id));
reaction.sidecar.scroll_into_view_if_needed.call(null,(document.getElementsByClassName("pit-plugin--action")[valid_id]));

return cljs.core.swap_BANG_.call(null,state,((function (valid_id,new_action){
return (function (p1__37475_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__37475_SHARP_,new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),valid_id),new cljs.core.Keyword(null,"selected-action","selected-action",2048509630),new_action);
});})(valid_id,new_action))
);
} else {
return null;
}
});
reaction.sidecar.select_relative_action_fn = (function reaction$sidecar$select_relative_action_fn(state,delta,flat_visible_actions){
var old_id = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"selected-id","selected-id",-1028389044),(-1));
var new_id = (old_id + delta);
return reaction.sidecar.select_action_fn.call(null,state,new_id,flat_visible_actions);
});
reaction.sidecar.close_actions_fn = (function reaction$sidecar$close_actions_fn(state){
var input_node = document.getElementById("pit-plugin--actions-card--input");
if(cljs.core.truth_(input_node)){
input_node.blur();
} else {
}

return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"actions-visibles","actions-visibles",-1581485174));
});
reaction.sidecar.action_list = rum.core.build_defc.call(null,(function (state){
var card_visible_QMARK_ = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"actions-visibles","actions-visibles",-1581485174));
var input_value = (function (){var or__30923__auto__ = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"input-value","input-value",-1719954369));
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})();
var input_value__$1 = (function (){var or__30923__auto__ = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"input-value","input-value",-1719954369));
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})();
var actions = cljs.core.map.call(null,((function (card_visible_QMARK_,input_value,input_value__$1){
return (function (p__37479){
var vec__37480 = p__37479;
var a = cljs.core.nth.call(null,vec__37480,(0),null);
var b = cljs.core.nth.call(null,vec__37480,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),b], null)], null);
});})(card_visible_QMARK_,input_value,input_value__$1))
,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (card_visible_QMARK_,input_value,input_value__$1){
return (function (p__37483){
var vec__37484 = p__37483;
var action_name = cljs.core.nth.call(null,vec__37484,(0),null);
var m = cljs.core.nth.call(null,vec__37484,(1),null);
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"name","name",1843675177),action_name);
});})(card_visible_QMARK_,input_value,input_value__$1))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))));
var flat_actions = cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (card_visible_QMARK_,input_value,input_value__$1,actions){
return (function (p__37487){
var vec__37488 = p__37487;
var _ = cljs.core.nth.call(null,vec__37488,(0),null);
var map__37491 = cljs.core.nth.call(null,vec__37488,(1),null);
var map__37491__$1 = ((((!((map__37491 == null)))?((((map__37491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37491):map__37491);
var actions__$1 = cljs.core.get.call(null,map__37491__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return actions__$1;
});})(card_visible_QMARK_,input_value,input_value__$1,actions))
,actions));
var flat_visible_actions = cljs.core.filterv.call(null,((function (card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions){
return (function (p1__37476_SHARP_){
return cljs.core.get.call(null,p1__37476_SHARP_,new cljs.core.Keyword(null,"matches?","matches?",-1409299473),true);
});})(card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions))
,flat_actions);
var selected_action = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"selected-action","selected-action",2048509630));
return React.createElement("div",({"className": "pit-plugin--column"}),React.createElement("div",({"className": "pit-plugin--actions-card--title"}),"ACTION LIST"),React.createElement("div",({"className": "pit-plugin--input--container"}),sablono.interpreter.create_element.call(null,"input",({"id": "pit-plugin--actions-card--input", "placeholder": "Search", "value": input_value__$1, "disabled": cljs.core.not.call(null,card_visible_QMARK_), "onKeyDown": ((function (card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (e){
var keycode = e.which;
var G__37495 = keycode;
switch (G__37495) {
case (27):
if(cljs.core.not_EQ_.call(null,"",input_value__$1)){
return reaction.sidecar.input_fn.call(null,state,"");
} else {
return reaction.sidecar.close_actions_fn.call(null,state);
}

break;
case (38):
return reaction.sidecar.select_relative_action_fn.call(null,state,(-1),flat_visible_actions);

break;
case (40):
return reaction.sidecar.select_relative_action_fn.call(null,state,(1),flat_visible_actions);

break;
default:
return "";

}
});})(card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
, "onChange": ((function (card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (p1__37477_SHARP_){
var input_value__$2 = p1__37477_SHARP_.target.value;
return reaction.sidecar.input_fn.call(null,state,input_value__$2);
});})(card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
})),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__30911__auto__ = input_value__$1;
if(cljs.core.truth_(and__30911__auto__)){
return cljs.core.not_EQ_.call(null,"",input_value__$1);
} else {
return and__30911__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--input--cross","div.pit-plugin--input--cross",775939563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (){
return reaction.sidecar.input_fn.call(null,state,"");
});})(card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(20),new cljs.core.Keyword(null,"y1","y1",589123466),(20),new cljs.core.Keyword(null,"x2","x2",-1362513475),(80),new cljs.core.Keyword(null,"y2","y2",-718691301),(80),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(20),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(20),new cljs.core.Keyword(null,"y1","y1",589123466),(80),new cljs.core.Keyword(null,"x2","x2",-1362513475),(80),new cljs.core.Keyword(null,"y2","y2",-718691301),(20),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(20),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey"], null)], null)], null)], null):null))),(cljs.core.truth_(cljs.core.some.call(null,((function (card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (p__37499){
var vec__37500 = p__37499;
var actions_namespace = cljs.core.nth.call(null,vec__37500,(0),null);
var map__37503 = cljs.core.nth.call(null,vec__37500,(1),null);
var map__37503__$1 = ((((!((map__37503 == null)))?((((map__37503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37503):map__37503);
var actions__$1 = cljs.core.get.call(null,map__37503__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.some.call(null,((function (vec__37500,actions_namespace,map__37503,map__37503__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (action){
return action.call(null,new cljs.core.Keyword(null,"matches?","matches?",-1409299473),true);
});})(vec__37500,actions_namespace,map__37503,map__37503__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
,actions__$1);
});})(card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
,actions))?(function (){var attrs37496 = cljs.core.mapv.call(null,((function (card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (p__37505){
var vec__37506 = p__37505;
var actions_namespace = cljs.core.nth.call(null,vec__37506,(0),null);
var map__37509 = cljs.core.nth.call(null,vec__37506,(1),null);
var map__37509__$1 = ((((!((map__37509 == null)))?((((map__37509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37509):map__37509);
var actions__$1 = cljs.core.get.call(null,map__37509__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (action){
return action.call(null,new cljs.core.Keyword(null,"matches?","matches?",-1409299473),true);
});})(vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
,actions__$1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--namespace","div.pit-plugin--namespace",556825823),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--namespace-name","div.pit-plugin--namespace-name",381403215),actions_namespace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--actions","div.pit-plugin--actions",1650248535),cljs.core.map.call(null,((function (vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (action){
var action_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(action);
var action_matches = action.call(null,new cljs.core.Keyword(null,"matches?","matches?",-1409299473),cljs.core.PersistentVector.EMPTY);
var set_matches = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,action_matches);
var action_bang = cljs.core.re_matches.call(null,/.* !$/,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(action)));
var action_string = (function (){var n = cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(action));
if(cljs.core.truth_(action_bang)){
return clojure.string.replace.call(null,n,/ !$/,"");
} else {
return n;
}
})();
var action_arity = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(action);
var action_doc = action.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999));
var action_line = [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5455__auto__ = action.call(null,new cljs.core.Keyword(null,"line","line",212345235));
if(cljs.core.truth_(temp__5455__auto__)){
var line = temp__5455__auto__;
return line;
} else {
return "???";
}
})())].join('');
var action_visible_QMARK_ = (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,flat_visible_actions))) || (cljs.core._EQ_.call(null,action_name,selected_action));
if(cljs.core.truth_(action_matches)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action","div.pit-plugin--action",-58958162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (action_name,action_matches,set_matches,action_bang,action_string,action_arity,action_doc,action_line,action_visible_QMARK_,vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (){
var my_id = cljs.core.first.call(null,cljs.core.keep.call(null,((function (action_name,action_matches,set_matches,action_bang,action_string,action_arity,action_doc,action_line,action_visible_QMARK_,vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (p__37511){
var vec__37512 = p__37511;
var id = cljs.core.nth.call(null,vec__37512,(0),null);
var action__$1 = cljs.core.nth.call(null,vec__37512,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(action__$1),action_name)){
return id;
} else {
return null;
}
});})(action_name,action_matches,set_matches,action_bang,action_string,action_arity,action_doc,action_line,action_visible_QMARK_,vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
,cljs.core.map_indexed.call(null,cljs.core.vector,flat_visible_actions)));
return reaction.sidecar.select_action_fn.call(null,state,my_id,flat_visible_actions);
});})(action_name,action_matches,set_matches,action_bang,action_string,action_arity,action_doc,action_line,action_visible_QMARK_,vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action-name--container","div.pit-plugin--action-name--container",-1679159860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((action_visible_QMARK_)?"visible":"hidden")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action-bang","div.pit-plugin--action-bang",1551904058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(action_bang)?"enabled":null)], null),(cljs.core.truth_(action_bang)?"!":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action-name","div.pit-plugin--action-name",727781345),cljs.core.map_indexed.call(null,((function (action_name,action_matches,set_matches,action_bang,action_string,action_arity,action_doc,action_line,action_visible_QMARK_,vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (i,letter){
if(cljs.core.truth_(set_matches.call(null,i))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),letter], null);
} else {
return letter;
}
});})(action_name,action_matches,set_matches,action_bang,action_string,action_arity,action_doc,action_line,action_visible_QMARK_,vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
,action_string)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u.pit-plugin--line-number","u.pit-plugin--line-number",-519502057),action_line], null),(cljs.core.truth_(action_doc)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--no-documentation","div.pit-plugin--no-documentation",248688551),"No documentation!"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--drawer","div.pit-plugin--drawer",568147317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--params","div.pit-plugin--params",1036916096),clojure.string.join.call(null," ",cljs.core.map.call(null,((function (action_name,action_matches,set_matches,action_bang,action_string,action_arity,action_doc,action_line,action_visible_QMARK_,vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action){
return (function (p1__37478_SHARP_){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",p1__37478_SHARP_)),"]"].join('');
});})(action_name,action_matches,set_matches,action_bang,action_string,action_arity,action_doc,action_line,action_visible_QMARK_,vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
,action_arity))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--documentation","div.pit-plugin--documentation",-744350968),(function (){var or__30923__auto__ = action_doc;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "No documentation!";
}
})()], null)], null)], null);
} else {
return null;
}
});})(vec__37506,actions_namespace,map__37509,map__37509__$1,actions__$1,card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
,actions__$1)], null)], null);
} else {
return null;
}
});})(card_visible_QMARK_,input_value,input_value__$1,actions,flat_actions,flat_visible_actions,selected_action))
,actions);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37496))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pit-plugin--actions-list"], null)], null),attrs37496)):({"className": "pit-plugin--actions-list"})),((cljs.core.map_QMARK_.call(null,attrs37496))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37496)], null)));
})():React.createElement("div",({"className": "pit-plugin--no-result--placeholder"}),"No action found")));
}),null,"action-list");
reaction.sidecar.action_history = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"className": "pit-plugin--column"}),React.createElement("div",({"className": "pit-plugin--actions-card--title"}),"ACTION HISTORY"),React.createElement("div",({"className": "pit-plugin--actions-card--sub-title"}),"50 latest actions"),(function (){var attrs37520 = cljs.core.map_indexed.call(null,(function (index,action){
var action_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(action);
var action_time = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(action);
var action_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(action);
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(action);
var action_id = new cljs.core.Keyword(null,"action-id","action-id",-1727958578).cljs$core$IFn$_invoke$arity$1(action);
var expanded_QMARK_ = cljs.core.get.call(null,action,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--pointer","div.pit-plugin--pointer",611814958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (action_name,action_time,action_params,parent_id,action_id,expanded_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions-history","actions-history",362113919),index,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),cljs.core.not);
});})(action_name,action_time,action_params,parent_id,action_id,expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action-history-element","div.pit-plugin--action-history-element",-1757708351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action-history-action-id","div.pit-plugin--action-history-action-id",1834950201),action_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action-history-time","div.pit-plugin--action-history-time",69951186),action_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),action_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action-history-params","div.pit-plugin--action-history-params",1654913606),"[",cljs.core.count.call(null,action_params),"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pit-plugin--action-history-parent-id","div.pit-plugin--action-history-parent-id",1482887656),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,parent_id))?"orphan":null)], null),parent_id], null)], null),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.empty_QMARK_.call(null,action_params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No parameters to this action"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,((function (action_name,action_time,action_params,parent_id,action_id,expanded_QMARK_){
return (function (param){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join('')], null);
});})(action_name,action_time,action_params,parent_id,action_id,expanded_QMARK_))
,action_params)], null))], null):null)], null);
}),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"actions-history","actions-history",362113919),cljs.core.PersistentVector.EMPTY));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37520))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pit-plugin--action-history--container"], null)], null),attrs37520)):({"className": "pit-plugin--action-history--container"})),((cljs.core.map_QMARK_.call(null,attrs37520))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37520)], null)));
})());
}),null,"action-history");
reaction.sidecar.actions_component = rum.core.build_defc.call(null,(function (state){
var card_visible_QMARK_ = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"actions-visibles","actions-visibles",-1581485174));
return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pit-plugin--actions-card",(cljs.core.truth_(card_visible_QMARK_)?"visible":null)], null))}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pit-plugin--actions-card--left",(cljs.core.truth_(card_visible_QMARK_)?"visible":null)], null))}),React.createElement("div",({"onClick": ((function (card_visible_QMARK_){
return (function (){
return reaction.sidecar.close_actions_fn.call(null,state);
});})(card_visible_QMARK_))
, "className": "pit-plugin--close-button"}),React.createElement("svg",({"height": "2em", "width": "2em", "viewBox": "0 0 100 100"}),React.createElement("line",({"x1": (20), "y1": (20), "x2": (80), "y2": (80), "strokeWidth": (20), "stroke": "grey"})),React.createElement("line",({"x1": (20), "y1": (80), "x2": (80), "y2": (20), "strokeWidth": (20), "stroke": "grey"})))),sablono.interpreter.interpret.call(null,reaction.sidecar.action_list.call(null,state))),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pit-plugin--actions-card--right",(cljs.core.truth_(card_visible_QMARK_)?"visible":null)], null))}),React.createElement("div",({"onClick": ((function (card_visible_QMARK_){
return (function (){
return reaction.sidecar.close_actions_fn.call(null,state);
});})(card_visible_QMARK_))
, "className": "pit-plugin--close-button"}),React.createElement("svg",({"height": "2em", "width": "2em", "viewBox": "0 0 100 100"}),React.createElement("line",({"x1": (20), "y1": (20), "x2": (80), "y2": (80), "strokeWidth": (20), "stroke": "grey"})),React.createElement("line",({"x1": (20), "y1": (80), "x2": (80), "y2": (20), "strokeWidth": (20), "stroke": "grey"})))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(card_visible_QMARK_)?reaction.sidecar.action_history.call(null,state):null))));
}),null,"actions-component");

//# sourceMappingURL=sidecar.js.map?rel=1520306975667
