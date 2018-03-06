// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.screens.step1');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('reaction.core');
goog.require('antizer.rum');
goog.require('resa.components.header');
resa.screens.step1.screen1 = rum.core.build_defc.call(null,(function (store){
var m = cljs.core.deref.call(null,store);
var format = "HH:mm";
var disabled_QMARK_ = false;
return React.createElement("div",({"style": ({"display": "flex", "flexDirection": "column"})}),sablono.interpreter.interpret.call(null,resa.components.header.big_header.call(null,store)),React.createElement("div",({"style": ({"display": "flex"})}),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"height","height",1025178622),"4em"], null)], null),"Info")),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"height","height",1025178622),"4em"], null)], null),"Menu")),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"height","height",1025178622),"4em"], null)], null),"Review"))),React.createElement("br",null),React.createElement("div",({"style": ({"padding": (10)})}),"An eclectic and authentic Northern French cuisine. Superb ambiance, suitable for romantic and business dinner. Lorem ipsum  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),React.createElement("br",null),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"4em"], null),new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (m,format,disabled_QMARK_){
return (function (){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.Keyword(null,"go-forward","go-forward",666578902));
});})(m,format,disabled_QMARK_))
], null),"MAKE A BOOKING")));
}),null,"screen1");

//# sourceMappingURL=step1.js.map?rel=1520306978807
