// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.screens.step2');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('reaction.core');
goog.require('resa.components.header');
goog.require('antizer.rum');
goog.require('resa.db');
resa.screens.step2.disabledDate = (function resa$screens$step2$disabledDate(current){
var data = (cljs.core.truth_(current)?cljs.core.get.call(null,resa.db.available_slot,current.format("YYYY-MM-DD"),null):null);
return cljs.core.empty_QMARK_.call(null,data);
});
resa.screens.step2.screen2 = rum.core.build_defc.call(null,(function (store){
var m = cljs.core.deref.call(null,store);
var data = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY);
var map__39595 = data;
var map__39595__$1 = ((((!((map__39595 == null)))?((((map__39595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39595):map__39595);
var pax = cljs.core.get.call(null,map__39595__$1,new cljs.core.Keyword(null,"pax","pax",-93526346));
var hour = cljs.core.get.call(null,map__39595__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minutes = cljs.core.get.call(null,map__39595__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var name = cljs.core.get.call(null,map__39595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var phone = cljs.core.get.call(null,map__39595__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
var email = cljs.core.get.call(null,map__39595__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var date = cljs.core.get.call(null,map__39595__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var pax_valid_QMARK_ = (function (){var and__30911__auto__ = !(cljs.core.empty_QMARK_.call(null,pax));
if(and__30911__auto__){
return cljs.core.re_matches.call(null,/\d{1,2}/,pax);
} else {
return and__30911__auto__;
}
})();
var name_valid_QMARK_ = (!(cljs.core.empty_QMARK_.call(null,name))) && (((3) < cljs.core.count.call(null,name)));
var phone_valid_QMARK_ = (function (){var and__30911__auto__ = !(cljs.core.empty_QMARK_.call(null,phone));
if(and__30911__auto__){
return cljs.core.re_matches.call(null,/\+?\d{7,}/,phone);
} else {
return and__30911__auto__;
}
})();
var email_valid_QMARK_ = (function (){var and__30911__auto__ = !(cljs.core.empty_QMARK_.call(null,email));
if(and__30911__auto__){
return cljs.core.re_matches.call(null,/[a-zA-Z0-9_.-]{2,}@[a-zA-Z0-9_-]{2,}\.[a-z]{2,5}/,email);
} else {
return and__30911__auto__;
}
})();
var time_valid_QMARK_ = !((date == null));
var hour_valid_QMARK_ = !((hour == null));
var minutes_valid_QMARK_ = !((minutes == null));
var disabled_QMARK_ = cljs.core.not.call(null,(function (){var and__30911__auto__ = pax_valid_QMARK_;
if(cljs.core.truth_(and__30911__auto__)){
var and__30911__auto____$1 = name_valid_QMARK_;
if(and__30911__auto____$1){
var and__30911__auto____$2 = time_valid_QMARK_;
if(and__30911__auto____$2){
var and__30911__auto____$3 = hour_valid_QMARK_;
if(and__30911__auto____$3){
var and__30911__auto____$4 = minutes_valid_QMARK_;
if(and__30911__auto____$4){
var and__30911__auto____$5 = phone_valid_QMARK_;
if(cljs.core.truth_(and__30911__auto____$5)){
return email_valid_QMARK_;
} else {
return and__30911__auto____$5;
}
} else {
return and__30911__auto____$4;
}
} else {
return and__30911__auto____$3;
}
} else {
return and__30911__auto____$2;
}
} else {
return and__30911__auto____$1;
}
} else {
return and__30911__auto__;
}
})());
var disabledHours = ((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_){
return (function (){
if(cljs.core.truth_(date)){
var totalHours = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.range.call(null,(1),(23)));
var hours = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.call(null,((function (totalHours,m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_){
return (function (p__39597){
var vec__39598 = p__39597;
var k = cljs.core.nth.call(null,vec__39598,(0),null);
var v = cljs.core.nth.call(null,vec__39598,(1),null);
if(!(cljs.core.empty_QMARK_.call(null,v))){
return k;
} else {
return null;
}
});})(totalHours,m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_))
,cljs.core.get.call(null,resa.db.available_slot,date)));
return cljs.core.vec.call(null,clojure.set.difference.call(null,totalHours,hours));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_))
;
var disabledMinutes = ((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours){
return (function (){
var totalMinute = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take_nth.call(null,(15),cljs.core.range.call(null,(60))));
var minutesAv = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,(cljs.core.truth_(hour)?cljs.core.get_in.call(null,resa.db.available_slot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,hour], null)):cljs.core.PersistentVector.EMPTY));
return cljs.core.vec.call(null,clojure.set.difference.call(null,totalMinute,minutesAv));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours))
;
return React.createElement("div",({"style": ({"display": "flex", "flexDirection": "column"})}),sablono.interpreter.interpret.call(null,resa.components.header.small_header.call(null,store)),React.createElement("br",null),React.createElement("div",({"style": ({"display": "flex", "alignItems": "center", "margin": (5)})}),sablono.interpreter.interpret.call(null,antizer.rum.select.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"Mr.",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"6rem"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes){
return (function (p1__39588_SHARP_){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step2--set-title","step2--set-title",947001303),p1__39588_SHARP_], null));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes))
], null),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Mr."], null),"Mr."),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Mrs."], null),"Mrs."),antizer.rum.select_option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Ms."], null),"Ms."))),sablono.interpreter.interpret.call(null,antizer.rum.input.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30923__auto__ = name;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes){
return (function (p1__39589_SHARP_){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step2--set-name","step2--set-name",-643986766),p1__39589_SHARP_], null));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes))
], null)))),React.createElement("div",({"style": ({"display": "flex", "alignItems": "center", "margin": (5)})}),sablono.interpreter.interpret.call(null,antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"phone",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"6rem"], null)], null))),sablono.interpreter.interpret.call(null,antizer.rum.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your phone number",new cljs.core.Keyword(null,"type","type",1174270348),"tel",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30923__auto__ = phone;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes){
return (function (p1__39590_SHARP_){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step2--set-phone","step2--set-phone",-876060655),p1__39590_SHARP_], null));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes))
], null)))),React.createElement("div",({"style": ({"display": "flex", "alignItems": "center", "margin": (5)})}),sablono.interpreter.interpret.call(null,antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"mail",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"6rem"], null)], null))),sablono.interpreter.interpret.call(null,antizer.rum.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your e-mail",new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30923__auto__ = email;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes){
return (function (p1__39591_SHARP_){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step2--set-email","step2--set-email",-1571954604),p1__39591_SHARP_], null));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes))
], null)))),React.createElement("div",({"style": ({"display": "flex", "alignItems": "center", "margin": (5)})}),sablono.interpreter.interpret.call(null,antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"calendar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"6rem"], null)], null))),sablono.interpreter.interpret.call(null,antizer.rum.date_picker.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes){
return (function (p1__39592_SHARP_){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step2--set-date","step2--set-date",1437764608),p1__39592_SHARP_], null));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes))
,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(date)?moment(date):null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(2)], null),new cljs.core.Keyword(null,"disabledDate","disabledDate",-660820650),resa.screens.step2.disabledDate], null))),sablono.interpreter.interpret.call(null,antizer.rum.time_picker.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes){
return (function (p1__39593_SHARP_){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step2--set-time","step2--set-time",1171261259),p1__39593_SHARP_], null));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes))
,new cljs.core.Keyword(null,"format","format",-1306924766),"HH:mm",new cljs.core.Keyword(null,"minute-step","minute-step",699210344),(15),new cljs.core.Keyword(null,"disabledHours","disabledHours",1057474450),disabledHours,new cljs.core.Keyword(null,"disabledMinutes","disabledMinutes",1933723757),disabledMinutes,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),!(time_valid_QMARK_),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_((function (){var and__30911__auto__ = hour;
if(cljs.core.truth_(and__30911__auto__)){
return minutes;
} else {
return and__30911__auto__;
}
})())?window.moment().set("hour",hour).set("minutes",minutes):null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)))),React.createElement("div",({"style": ({"display": "flex", "alignItems": "center", "margin": (5)})}),sablono.interpreter.interpret.call(null,antizer.rum.icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"user",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"6rem"], null)], null))),sablono.interpreter.interpret.call(null,antizer.rum.input.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Number of guests",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30923__auto__ = pax;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes){
return (function (p1__39594_SHARP_){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step2--set-pax","step2--set-pax",1343969502),p1__39594_SHARP_], null));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes))
], null)))),React.createElement("br",null),sablono.interpreter.interpret.call(null,antizer.rum.button.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"4em"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes){
return (function (){
return reaction.core._dispatch_BANG_.call(null,store,new cljs.core.Keyword(null,"go-forward","go-forward",666578902));
});})(m,data,map__39595,map__39595__$1,pax,hour,minutes,name,phone,email,date,pax_valid_QMARK_,name_valid_QMARK_,phone_valid_QMARK_,email_valid_QMARK_,time_valid_QMARK_,hour_valid_QMARK_,minutes_valid_QMARK_,disabled_QMARK_,disabledHours,disabledMinutes))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"primary",new cljs.core.Keyword(null,"size","size",1098693007),"large"], null),"REVIEW")));
}),null,"screen2");

//# sourceMappingURL=step2.js.map?rel=1520306978887
