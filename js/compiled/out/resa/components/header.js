// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.components.header');
goog.require('cljs.core');
goog.require('antizer.rum');
goog.require('reaction.core');
goog.require('rum.core');
resa.components.header.restaurant_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"FANCY RESTAURANT NAME",new cljs.core.Keyword(null,"ratings","ratings",2118542621),"4.89 (488)",new cljs.core.Keyword(null,"location","location",1815599388),"SINGAPORE CBD"], null);
resa.components.header.header_s = (function resa$components$header$header_s(store,back_button_QMARK_){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EEEEEE",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"border","border",1444987323),"solid grey 1px",new cljs.core.Keyword(null,"padding","padding",1660304693),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),(cljs.core.truth_(back_button_QMARK_)?"space-between":"flex-end")], null)], null),(cljs.core.truth_(back_button_QMARK_)?antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"4em"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.Keyword(null,"go-back","go-back",1642157803));
})], null),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"double-left"], null))):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em"], null)], null),"PHOOD"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"grey",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),"MAKE A BOOKING"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(resa.components.header.restaurant_info)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em"], null)], null),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"star"], null)),new cljs.core.Keyword(null,"ratings","ratings",2118542621).cljs$core$IFn$_invoke$arity$1(resa.components.header.restaurant_info)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em"], null)], null),antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"environment"], null)),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(resa.components.header.restaurant_info)], null)], null);
});
resa.components.header.small_header = rum.core.build_defc.call(null,(function (store){
return sablono.interpreter.interpret.call(null,resa.components.header.header_s.call(null,store,true));
}),null,"small-header");
resa.components.header.small_header_no_back = rum.core.build_defc.call(null,(function (store){
return sablono.interpreter.interpret.call(null,resa.components.header.header_s.call(null,store,false));
}),null,"small-header-no-back");
resa.components.header.big_header = rum.core.build_defc.call(null,(function (store){
return React.createElement("div",({"style": ({"backgroundColor": "#EEEEEE", "display": "flex", "flexDirection": "column", "border": "solid grey 1px", "padding": (10)})}),React.createElement("div",({"style": ({"display": "flex", "flexDirection": "row", "justifyContent": "flex-end"})}),React.createElement("div",({"style": ({"fontSize": "0.7em"})}),"PHOOD")),React.createElement("div",({"style": ({"fontSize": "2em", "fontWeight": "bold"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(resa.components.header.restaurant_info))),React.createElement("div",({"style": ({"fontSize": "0.7em"})}),sablono.interpreter.interpret.call(null,antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"star"], null))),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"ratings","ratings",2118542621).cljs$core$IFn$_invoke$arity$1(resa.components.header.restaurant_info))),React.createElement("div",({"style": ({"fontSize": "0.7em"})}),sablono.interpreter.interpret.call(null,antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"environment"], null))),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(resa.components.header.restaurant_info))));
}),null,"big-header");

//# sourceMappingURL=header.js.map?rel=1520306978480
