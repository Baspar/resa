// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__35645 = cljs.core.seq.call(null,props);
var chunk__35647 = null;
var count__35648 = (0);
var i__35649 = (0);
while(true){
if((i__35649 < count__35648)){
var vec__35651 = cljs.core._nth.call(null,chunk__35647,i__35649);
var k = cljs.core.nth.call(null,vec__35651,(0),null);
var v = cljs.core.nth.call(null,vec__35651,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__35657 = seq__35645;
var G__35658 = chunk__35647;
var G__35659 = count__35648;
var G__35660 = (i__35649 + (1));
seq__35645 = G__35657;
chunk__35647 = G__35658;
count__35648 = G__35659;
i__35649 = G__35660;
continue;
} else {
var G__35661 = seq__35645;
var G__35662 = chunk__35647;
var G__35663 = count__35648;
var G__35664 = (i__35649 + (1));
seq__35645 = G__35661;
chunk__35647 = G__35662;
count__35648 = G__35663;
i__35649 = G__35664;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35645);
if(temp__5457__auto__){
var seq__35645__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35645__$1)){
var c__31854__auto__ = cljs.core.chunk_first.call(null,seq__35645__$1);
var G__35665 = cljs.core.chunk_rest.call(null,seq__35645__$1);
var G__35666 = c__31854__auto__;
var G__35667 = cljs.core.count.call(null,c__31854__auto__);
var G__35668 = (0);
seq__35645 = G__35665;
chunk__35647 = G__35666;
count__35648 = G__35667;
i__35649 = G__35668;
continue;
} else {
var vec__35654 = cljs.core.first.call(null,seq__35645__$1);
var k = cljs.core.nth.call(null,vec__35654,(0),null);
var v = cljs.core.nth.call(null,vec__35654,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__35669 = cljs.core.next.call(null,seq__35645__$1);
var G__35670 = null;
var G__35671 = (0);
var G__35672 = (0);
seq__35645 = G__35669;
chunk__35647 = G__35670;
count__35648 = G__35671;
i__35649 = G__35672;
continue;
} else {
var G__35673 = cljs.core.next.call(null,seq__35645__$1);
var G__35674 = null;
var G__35675 = (0);
var G__35676 = (0);
seq__35645 = G__35673;
chunk__35647 = G__35674;
count__35648 = G__35675;
i__35649 = G__35676;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__35678_SHARP_,p2__35677_SHARP_){
return p2__35677_SHARP_.call(null,p1__35678_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__35680_SHARP_,p2__35679_SHARP_){
return p2__35679_SHARP_.call(null,old_state,p1__35680_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__30923__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__35681_SHARP_){
return p1__35681_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__35683 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__35683,(0),null);
var next_state = cljs.core.nth.call(null,vec__35683,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__35682_SHARP_){
return p1__35682_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__35686__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__35686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35687__i = 0, G__35687__a = new Array(arguments.length -  0);
while (G__35687__i < G__35687__a.length) {G__35687__a[G__35687__i] = arguments[G__35687__i + 0]; ++G__35687__i;}
  args = new cljs.core.IndexedSeq(G__35687__a,0,null);
} 
return G__35686__delegate.call(this,args);};
G__35686.cljs$lang$maxFixedArity = 0;
G__35686.cljs$lang$applyTo = (function (arglist__35688){
var args = cljs.core.seq(arglist__35688);
return G__35686__delegate(args);
});
G__35686.cljs$core$IFn$_invoke$arity$variadic = G__35686__delegate;
return G__35686;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__35689__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__35689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35690__i = 0, G__35690__a = new Array(arguments.length -  0);
while (G__35690__i < G__35690__a.length) {G__35690__a[G__35690__i] = arguments[G__35690__i + 0]; ++G__35690__i;}
  args = new cljs.core.IndexedSeq(G__35690__a,0,null);
} 
return G__35689__delegate.call(this,args);};
G__35689.cljs$lang$maxFixedArity = 0;
G__35689.cljs$lang$applyTo = (function (arglist__35691){
var args = cljs.core.seq(arglist__35691);
return G__35689__delegate(args);
});
G__35689.cljs$core$IFn$_invoke$arity$variadic = G__35689__delegate;
return G__35689;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__35692__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__35692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35693__i = 0, G__35693__a = new Array(arguments.length -  0);
while (G__35693__i < G__35693__a.length) {G__35693__a[G__35693__i] = arguments[G__35693__i + 0]; ++G__35693__i;}
  args = new cljs.core.IndexedSeq(G__35693__a,0,null);
} 
return G__35692__delegate.call(this,args);};
G__35692.cljs$lang$maxFixedArity = 0;
G__35692.cljs$lang$applyTo = (function (arglist__35694){
var args = cljs.core.seq(arglist__35694);
return G__35692__delegate(args);
});
G__35692.cljs$core$IFn$_invoke$arity$variadic = G__35692__delegate;
return G__35692;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__30923__auto__ = (function (){var and__30911__auto__ = typeof window !== 'undefined';
if(and__30911__auto__){
var or__30923__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
var or__30923__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__30923__auto____$1)){
return or__30923__auto____$1;
} else {
var or__30923__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__30923__auto____$2)){
return or__30923__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__30911__auto__;
}
})();
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return ((function (or__30923__auto__){
return (function (p1__35695_SHARP_){
return setTimeout(p1__35695_SHARP_,(16));
});
;})(or__30923__auto__))
}
})();
rum.core.batch = (function (){var or__30923__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
var or__30923__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__30923__auto____$1)){
return or__30923__auto____$1;
} else {
return ((function (or__30923__auto____$1,or__30923__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__30923__auto____$1,or__30923__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__35696 = cljs.core.seq.call(null,queue);
var chunk__35698 = null;
var count__35699 = (0);
var i__35700 = (0);
while(true){
if((i__35700 < count__35699)){
var comp = cljs.core._nth.call(null,chunk__35698,i__35700);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__35702 = seq__35696;
var G__35703 = chunk__35698;
var G__35704 = count__35699;
var G__35705 = (i__35700 + (1));
seq__35696 = G__35702;
chunk__35698 = G__35703;
count__35699 = G__35704;
i__35700 = G__35705;
continue;
} else {
var G__35706 = seq__35696;
var G__35707 = chunk__35698;
var G__35708 = count__35699;
var G__35709 = (i__35700 + (1));
seq__35696 = G__35706;
chunk__35698 = G__35707;
count__35699 = G__35708;
i__35700 = G__35709;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35696);
if(temp__5457__auto__){
var seq__35696__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35696__$1)){
var c__31854__auto__ = cljs.core.chunk_first.call(null,seq__35696__$1);
var G__35710 = cljs.core.chunk_rest.call(null,seq__35696__$1);
var G__35711 = c__31854__auto__;
var G__35712 = cljs.core.count.call(null,c__31854__auto__);
var G__35713 = (0);
seq__35696 = G__35710;
chunk__35698 = G__35711;
count__35699 = G__35712;
i__35700 = G__35713;
continue;
} else {
var comp = cljs.core.first.call(null,seq__35696__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__35714 = cljs.core.next.call(null,seq__35696__$1);
var G__35715 = null;
var G__35716 = (0);
var G__35717 = (0);
seq__35696 = G__35714;
chunk__35698 = G__35715;
count__35699 = G__35716;
i__35700 = G__35717;
continue;
} else {
var G__35718 = cljs.core.next.call(null,seq__35696__$1);
var G__35719 = null;
var G__35720 = (0);
var G__35721 = (0);
seq__35696 = G__35718;
chunk__35698 = G__35719;
count__35699 = G__35720;
i__35700 = G__35721;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__35723 = arguments.length;
switch (G__35723) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_35725 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__35726 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__35726,(0),null);
var next_state = cljs.core.nth.call(null,vec__35726,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__35729_35741 = cljs.core.seq.call(null,old_reactions);
var chunk__35730_35742 = null;
var count__35731_35743 = (0);
var i__35732_35744 = (0);
while(true){
if((i__35732_35744 < count__35731_35743)){
var ref_35745 = cljs.core._nth.call(null,chunk__35730_35742,i__35732_35744);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_35745)){
} else {
cljs.core.remove_watch.call(null,ref_35745,key);
}

var G__35746 = seq__35729_35741;
var G__35747 = chunk__35730_35742;
var G__35748 = count__35731_35743;
var G__35749 = (i__35732_35744 + (1));
seq__35729_35741 = G__35746;
chunk__35730_35742 = G__35747;
count__35731_35743 = G__35748;
i__35732_35744 = G__35749;
continue;
} else {
var temp__5457__auto___35750 = cljs.core.seq.call(null,seq__35729_35741);
if(temp__5457__auto___35750){
var seq__35729_35751__$1 = temp__5457__auto___35750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35729_35751__$1)){
var c__31854__auto___35752 = cljs.core.chunk_first.call(null,seq__35729_35751__$1);
var G__35753 = cljs.core.chunk_rest.call(null,seq__35729_35751__$1);
var G__35754 = c__31854__auto___35752;
var G__35755 = cljs.core.count.call(null,c__31854__auto___35752);
var G__35756 = (0);
seq__35729_35741 = G__35753;
chunk__35730_35742 = G__35754;
count__35731_35743 = G__35755;
i__35732_35744 = G__35756;
continue;
} else {
var ref_35757 = cljs.core.first.call(null,seq__35729_35751__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_35757)){
} else {
cljs.core.remove_watch.call(null,ref_35757,key);
}

var G__35758 = cljs.core.next.call(null,seq__35729_35751__$1);
var G__35759 = null;
var G__35760 = (0);
var G__35761 = (0);
seq__35729_35741 = G__35758;
chunk__35730_35742 = G__35759;
count__35731_35743 = G__35760;
i__35732_35744 = G__35761;
continue;
}
} else {
}
}
break;
}

var seq__35733_35762 = cljs.core.seq.call(null,new_reactions);
var chunk__35734_35763 = null;
var count__35735_35764 = (0);
var i__35736_35765 = (0);
while(true){
if((i__35736_35765 < count__35735_35764)){
var ref_35766 = cljs.core._nth.call(null,chunk__35734_35763,i__35736_35765);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_35766)){
} else {
cljs.core.add_watch.call(null,ref_35766,key,((function (seq__35733_35762,chunk__35734_35763,count__35735_35764,i__35736_35765,ref_35766,comp,old_reactions,vec__35726,dom,next_state,new_reactions,key,_STAR_reactions_STAR_35725){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__35733_35762,chunk__35734_35763,count__35735_35764,i__35736_35765,ref_35766,comp,old_reactions,vec__35726,dom,next_state,new_reactions,key,_STAR_reactions_STAR_35725))
);
}

var G__35767 = seq__35733_35762;
var G__35768 = chunk__35734_35763;
var G__35769 = count__35735_35764;
var G__35770 = (i__35736_35765 + (1));
seq__35733_35762 = G__35767;
chunk__35734_35763 = G__35768;
count__35735_35764 = G__35769;
i__35736_35765 = G__35770;
continue;
} else {
var temp__5457__auto___35771 = cljs.core.seq.call(null,seq__35733_35762);
if(temp__5457__auto___35771){
var seq__35733_35772__$1 = temp__5457__auto___35771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35733_35772__$1)){
var c__31854__auto___35773 = cljs.core.chunk_first.call(null,seq__35733_35772__$1);
var G__35774 = cljs.core.chunk_rest.call(null,seq__35733_35772__$1);
var G__35775 = c__31854__auto___35773;
var G__35776 = cljs.core.count.call(null,c__31854__auto___35773);
var G__35777 = (0);
seq__35733_35762 = G__35774;
chunk__35734_35763 = G__35775;
count__35735_35764 = G__35776;
i__35736_35765 = G__35777;
continue;
} else {
var ref_35778 = cljs.core.first.call(null,seq__35733_35772__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_35778)){
} else {
cljs.core.add_watch.call(null,ref_35778,key,((function (seq__35733_35762,chunk__35734_35763,count__35735_35764,i__35736_35765,ref_35778,seq__35733_35772__$1,temp__5457__auto___35771,comp,old_reactions,vec__35726,dom,next_state,new_reactions,key,_STAR_reactions_STAR_35725){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__35733_35762,chunk__35734_35763,count__35735_35764,i__35736_35765,ref_35778,seq__35733_35772__$1,temp__5457__auto___35771,comp,old_reactions,vec__35726,dom,next_state,new_reactions,key,_STAR_reactions_STAR_35725))
);
}

var G__35779 = cljs.core.next.call(null,seq__35733_35772__$1);
var G__35780 = null;
var G__35781 = (0);
var G__35782 = (0);
seq__35733_35762 = G__35779;
chunk__35734_35763 = G__35780;
count__35735_35764 = G__35781;
i__35736_35765 = G__35782;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_35725;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_35783 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__35737_35784 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__35738_35785 = null;
var count__35739_35786 = (0);
var i__35740_35787 = (0);
while(true){
if((i__35740_35787 < count__35739_35786)){
var ref_35788 = cljs.core._nth.call(null,chunk__35738_35785,i__35740_35787);
cljs.core.remove_watch.call(null,ref_35788,key_35783);

var G__35789 = seq__35737_35784;
var G__35790 = chunk__35738_35785;
var G__35791 = count__35739_35786;
var G__35792 = (i__35740_35787 + (1));
seq__35737_35784 = G__35789;
chunk__35738_35785 = G__35790;
count__35739_35786 = G__35791;
i__35740_35787 = G__35792;
continue;
} else {
var temp__5457__auto___35793 = cljs.core.seq.call(null,seq__35737_35784);
if(temp__5457__auto___35793){
var seq__35737_35794__$1 = temp__5457__auto___35793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35737_35794__$1)){
var c__31854__auto___35795 = cljs.core.chunk_first.call(null,seq__35737_35794__$1);
var G__35796 = cljs.core.chunk_rest.call(null,seq__35737_35794__$1);
var G__35797 = c__31854__auto___35795;
var G__35798 = cljs.core.count.call(null,c__31854__auto___35795);
var G__35799 = (0);
seq__35737_35784 = G__35796;
chunk__35738_35785 = G__35797;
count__35739_35786 = G__35798;
i__35740_35787 = G__35799;
continue;
} else {
var ref_35800 = cljs.core.first.call(null,seq__35737_35794__$1);
cljs.core.remove_watch.call(null,ref_35800,key_35783);

var G__35801 = cljs.core.next.call(null,seq__35737_35794__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35737_35784 = G__35801;
chunk__35738_35785 = G__35802;
count__35739_35786 = G__35803;
i__35740_35787 = G__35804;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__32209__auto__ = [];
var len__32202__auto___35811 = arguments.length;
var i__32203__auto___35812 = (0);
while(true){
if((i__32203__auto___35812 < len__32202__auto___35811)){
args__32209__auto__.push((arguments[i__32203__auto___35812]));

var G__35813 = (i__32203__auto___35812 + (1));
i__32203__auto___35812 = G__35813;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((2) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32210__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__35808){
var map__35809 = p__35808;
var map__35809__$1 = ((((!((map__35809 == null)))?((((map__35809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35809):map__35809);
var options = map__35809__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq35805){
var G__35806 = cljs.core.first.call(null,seq35805);
var seq35805__$1 = cljs.core.next.call(null,seq35805);
var G__35807 = cljs.core.first.call(null,seq35805__$1);
var seq35805__$2 = cljs.core.next.call(null,seq35805__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__35806,G__35807,seq35805__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__32209__auto__ = [];
var len__32202__auto___35817 = arguments.length;
var i__32203__auto___35818 = (0);
while(true){
if((i__32203__auto___35818 < len__32202__auto___35817)){
args__32209__auto__.push((arguments[i__32203__auto___35818]));

var G__35819 = (i__32203__auto___35818 + (1));
i__32203__auto___35818 = G__35819;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((2) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32210__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq35814){
var G__35815 = cljs.core.first.call(null,seq35814);
var seq35814__$1 = cljs.core.next.call(null,seq35814);
var G__35816 = cljs.core.first.call(null,seq35814__$1);
var seq35814__$2 = cljs.core.next.call(null,seq35814__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__35815,G__35816,seq35814__$2);
});


//# sourceMappingURL=core.js.map?rel=1520306973320
