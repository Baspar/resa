// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.screens.step4');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('reaction.core');
goog.require('resa.components.header');
goog.require('antizer.rum');
resa.screens.step4.screen4 = rum.core.build_defc.call(null,(function (store){
var map__39142 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store));
var map__39142__$1 = ((((!((map__39142 == null)))?((((map__39142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39142):map__39142);
var pax = cljs.core.get.call(null,map__39142__$1,new cljs.core.Keyword(null,"pax","pax",-93526346));
var time = cljs.core.get.call(null,map__39142__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var name = cljs.core.get.call(null,map__39142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var phone = cljs.core.get.call(null,map__39142__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
var email = cljs.core.get.call(null,map__39142__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var attrs39133 = resa.components.header.small_header_no_back.call(null,store);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39133))?sablono.interpreter.attributes.call(null,attrs39133):null),((cljs.core.map_QMARK_.call(null,attrs39133))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("br",null),React.createElement("p",null,"Dear MM. ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = name;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})())),React.createElement("p",null,"Thank you for your reservation!"),React.createElement("p",null,"A confirmation e-mail has been sent to: ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = email;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})()))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39133),React.createElement("br",null),React.createElement("p",null,"Dear MM. ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = name;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})())),React.createElement("p",null,"Thank you for your reservation!"),React.createElement("p",null,"A confirmation e-mail has been sent to: ",sablono.interpreter.interpret.call(null,(function (){var or__30923__auto__ = email;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})()))], null)));
}),null,"screen4");

//# sourceMappingURL=step4.js.map?rel=1520306978501
