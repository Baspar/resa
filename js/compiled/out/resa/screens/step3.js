// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.screens.step3');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('reaction.core');
goog.require('resa.components.header');
goog.require('antizer.rum');
resa.screens.step3.screen3 = rum.core.build_defc.call(null,(function (store){
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store));
var map__39613 = data;
var map__39613__$1 = ((((!((map__39613 == null)))?((((map__39613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39613):map__39613);
var pax = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"pax","pax",-93526346));
var time = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var name = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var phone = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
var email = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var disabled_QMARK_ = false;
return React.createElement("div",({"style": ({"display": "flex", "flexDirection": "column"})}),sablono.interpreter.interpret.call(null,resa.components.header.small_header.call(null,store)),React.createElement("br",null),React.createElement("ul",null,React.createElement("li",null,"Name: ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = name;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})())),React.createElement("li",null,"Phone: ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = phone;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})())),React.createElement("li",null,"E-mail: ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = email;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})())),React.createElement("li",null,"Date/time: ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = time;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})())),React.createElement("li",null,"N. of guests: ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = pax;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})()))),React.createElement("br",null),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"4em"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (data,map__39613,map__39613__$1,pax,time,name,phone,email,disabled_QMARK_){
return (function (){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.Keyword(null,"go-forward","go-forward",666578902));
});})(data,map__39613,map__39613__$1,pax,time,name,phone,email,disabled_QMARK_))
,new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"size","size",1098693007),"large",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null),"SUBMIT")));
}),null,"screen3");

//# sourceMappingURL=step3.js.map?rel=1520306978948
