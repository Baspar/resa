// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.screens.core');
goog.require('cljs.core');
goog.require('resa.screens.step1');
goog.require('resa.screens.step2');
goog.require('resa.screens.step3');
goog.require('antizer.rum');
goog.require('rum.core');
goog.require('resa.screens.step4');
goog.require('reaction.core');
if(typeof resa.screens.core.ui_screen !== 'undefined'){
} else {
resa.screens.core.ui_screen = (function (){var method_table__31978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31982__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"resa.screens.core","ui-screen"),((function (method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__,hierarchy__31982__auto__){
return (function (store){
return cljs.core.get.call(null,cljs.core.deref.call(null,store),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"step1","step1",474664537));
});})(method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__,hierarchy__31982__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31982__auto__,method_table__31978__auto__,prefer_table__31979__auto__,method_cache__31980__auto__,cached_hierarchy__31981__auto__));
})();
}
cljs.core._add_method.call(null,resa.screens.core.ui_screen,new cljs.core.Keyword(null,"step1","step1",474664537),(function (store){
return resa.screens.step1.screen1.call(null,store);
}));
cljs.core._add_method.call(null,resa.screens.core.ui_screen,new cljs.core.Keyword(null,"step2","step2",-695249369),(function (store){
return resa.screens.step2.screen2.call(null,store);
}));
cljs.core._add_method.call(null,resa.screens.core.ui_screen,new cljs.core.Keyword(null,"step3","step3",-947794149),(function (store){
return resa.screens.step3.screen3.call(null,store);
}));
cljs.core._add_method.call(null,resa.screens.core.ui_screen,new cljs.core.Keyword(null,"step4","step4",-943984344),(function (store){
return resa.screens.step4.screen4.call(null,store);
}));

//# sourceMappingURL=core.js.map?rel=1520306978966
