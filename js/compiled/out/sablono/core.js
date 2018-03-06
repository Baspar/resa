// Compiled by ClojureScript 1.9.946 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__35077__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35074 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__35075 = cljs.core.seq.call(null,vec__35074);
var first__35076 = cljs.core.first.call(null,seq__35075);
var seq__35075__$1 = cljs.core.next.call(null,seq__35075);
var tag = first__35076;
var body = seq__35075__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35078__i = 0, G__35078__a = new Array(arguments.length -  0);
while (G__35078__i < G__35078__a.length) {G__35078__a[G__35078__i] = arguments[G__35078__i + 0]; ++G__35078__i;}
  args = new cljs.core.IndexedSeq(G__35078__a,0,null);
} 
return G__35077__delegate.call(this,args);};
G__35077.cljs$lang$maxFixedArity = 0;
G__35077.cljs$lang$applyTo = (function (arglist__35079){
var args = cljs.core.seq(arglist__35079);
return G__35077__delegate(args);
});
G__35077.cljs$core$IFn$_invoke$arity$variadic = G__35077__delegate;
return G__35077;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__31805__auto__ = (function sablono$core$update_arglists_$_iter__35080(s__35081){
return (new cljs.core.LazySeq(null,(function (){
var s__35081__$1 = s__35081;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35081__$1);
if(temp__5457__auto__){
var s__35081__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35081__$2)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,s__35081__$2);
var size__31804__auto__ = cljs.core.count.call(null,c__31803__auto__);
var b__35083 = cljs.core.chunk_buffer.call(null,size__31804__auto__);
if((function (){var i__35082 = (0);
while(true){
if((i__35082 < size__31804__auto__)){
var args = cljs.core._nth.call(null,c__31803__auto__,i__35082);
cljs.core.chunk_append.call(null,b__35083,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35084 = (i__35082 + (1));
i__35082 = G__35084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35083),sablono$core$update_arglists_$_iter__35080.call(null,cljs.core.chunk_rest.call(null,s__35081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35083),null);
}
} else {
var args = cljs.core.first.call(null,s__35081__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__35080.call(null,cljs.core.rest.call(null,s__35081__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31805__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__32209__auto__ = [];
var len__32202__auto___35090 = arguments.length;
var i__32203__auto___35091 = (0);
while(true){
if((i__32203__auto___35091 < len__32202__auto___35090)){
args__32209__auto__.push((arguments[i__32203__auto___35091]));

var G__35092 = (i__32203__auto___35091 + (1));
i__32203__auto___35091 = G__35092;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((0) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__32210__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__31805__auto__ = (function sablono$core$iter__35086(s__35087){
return (new cljs.core.LazySeq(null,(function (){
var s__35087__$1 = s__35087;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35087__$1);
if(temp__5457__auto__){
var s__35087__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35087__$2)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,s__35087__$2);
var size__31804__auto__ = cljs.core.count.call(null,c__31803__auto__);
var b__35089 = cljs.core.chunk_buffer.call(null,size__31804__auto__);
if((function (){var i__35088 = (0);
while(true){
if((i__35088 < size__31804__auto__)){
var style = cljs.core._nth.call(null,c__31803__auto__,i__35088);
cljs.core.chunk_append.call(null,b__35089,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35093 = (i__35088 + (1));
i__35088 = G__35093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35089),sablono$core$iter__35086.call(null,cljs.core.chunk_rest.call(null,s__35087__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35089),null);
}
} else {
var style = cljs.core.first.call(null,s__35087__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__35086.call(null,cljs.core.rest.call(null,s__35087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31805__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq35085){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35085));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to35094 = (function sablono$core$link_to35094(var_args){
var args__32209__auto__ = [];
var len__32202__auto___35097 = arguments.length;
var i__32203__auto___35098 = (0);
while(true){
if((i__32203__auto___35098 < len__32202__auto___35097)){
args__32209__auto__.push((arguments[i__32203__auto___35098]));

var G__35099 = (i__32203__auto___35098 + (1));
i__32203__auto___35098 = G__35099;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((1) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35094.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32210__auto__);
});

sablono.core.link_to35094.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to35094.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35094.cljs$lang$applyTo = (function (seq35095){
var G__35096 = cljs.core.first.call(null,seq35095);
var seq35095__$1 = cljs.core.next.call(null,seq35095);
return sablono.core.link_to35094.cljs$core$IFn$_invoke$arity$variadic(G__35096,seq35095__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35094);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35100 = (function sablono$core$mail_to35100(var_args){
var args__32209__auto__ = [];
var len__32202__auto___35107 = arguments.length;
var i__32203__auto___35108 = (0);
while(true){
if((i__32203__auto___35108 < len__32202__auto___35107)){
args__32209__auto__.push((arguments[i__32203__auto___35108]));

var G__35109 = (i__32203__auto___35108 + (1));
i__32203__auto___35108 = G__35109;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((1) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35100.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32210__auto__);
});

sablono.core.mail_to35100.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35103){
var vec__35104 = p__35103;
var content = cljs.core.nth.call(null,vec__35104,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__30923__auto__ = content;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35100.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35100.cljs$lang$applyTo = (function (seq35101){
var G__35102 = cljs.core.first.call(null,seq35101);
var seq35101__$1 = cljs.core.next.call(null,seq35101);
return sablono.core.mail_to35100.cljs$core$IFn$_invoke$arity$variadic(G__35102,seq35101__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35100);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35110 = (function sablono$core$unordered_list35110(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__31805__auto__ = (function sablono$core$unordered_list35110_$_iter__35111(s__35112){
return (new cljs.core.LazySeq(null,(function (){
var s__35112__$1 = s__35112;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35112__$1);
if(temp__5457__auto__){
var s__35112__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35112__$2)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,s__35112__$2);
var size__31804__auto__ = cljs.core.count.call(null,c__31803__auto__);
var b__35114 = cljs.core.chunk_buffer.call(null,size__31804__auto__);
if((function (){var i__35113 = (0);
while(true){
if((i__35113 < size__31804__auto__)){
var x = cljs.core._nth.call(null,c__31803__auto__,i__35113);
cljs.core.chunk_append.call(null,b__35114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35115 = (i__35113 + (1));
i__35113 = G__35115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35114),sablono$core$unordered_list35110_$_iter__35111.call(null,cljs.core.chunk_rest.call(null,s__35112__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35114),null);
}
} else {
var x = cljs.core.first.call(null,s__35112__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list35110_$_iter__35111.call(null,cljs.core.rest.call(null,s__35112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31805__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35110);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35116 = (function sablono$core$ordered_list35116(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__31805__auto__ = (function sablono$core$ordered_list35116_$_iter__35117(s__35118){
return (new cljs.core.LazySeq(null,(function (){
var s__35118__$1 = s__35118;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35118__$1);
if(temp__5457__auto__){
var s__35118__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35118__$2)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,s__35118__$2);
var size__31804__auto__ = cljs.core.count.call(null,c__31803__auto__);
var b__35120 = cljs.core.chunk_buffer.call(null,size__31804__auto__);
if((function (){var i__35119 = (0);
while(true){
if((i__35119 < size__31804__auto__)){
var x = cljs.core._nth.call(null,c__31803__auto__,i__35119);
cljs.core.chunk_append.call(null,b__35120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35121 = (i__35119 + (1));
i__35119 = G__35121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35120),sablono$core$ordered_list35116_$_iter__35117.call(null,cljs.core.chunk_rest.call(null,s__35118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35120),null);
}
} else {
var x = cljs.core.first.call(null,s__35118__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list35116_$_iter__35117.call(null,cljs.core.rest.call(null,s__35118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31805__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35116);
/**
 * Create an image element.
 */
sablono.core.image35122 = (function sablono$core$image35122(var_args){
var G__35124 = arguments.length;
switch (G__35124) {
case 1:
return sablono.core.image35122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image35122.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image35122.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image35122.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35122);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__35126_SHARP_,p2__35127_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35126_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35127_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__35128_SHARP_,p2__35129_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35128_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35129_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__35131 = arguments.length;
switch (G__35131) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30923__auto__ = value;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field35133 = (function sablono$core$color_field35133(var_args){
var G__35135 = arguments.length;
switch (G__35135) {
case 1:
return sablono.core.color_field35133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field35133.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__35064__auto__);
});

sablono.core.color_field35133.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.color_field35133.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field35133);

/**
 * Creates a date input field.
 */
sablono.core.date_field35136 = (function sablono$core$date_field35136(var_args){
var G__35138 = arguments.length;
switch (G__35138) {
case 1:
return sablono.core.date_field35136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field35136.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__35064__auto__);
});

sablono.core.date_field35136.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.date_field35136.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field35136);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35139 = (function sablono$core$datetime_field35139(var_args){
var G__35141 = arguments.length;
switch (G__35141) {
case 1:
return sablono.core.datetime_field35139.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35139.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field35139.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__35064__auto__);
});

sablono.core.datetime_field35139.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.datetime_field35139.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field35139);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35142 = (function sablono$core$datetime_local_field35142(var_args){
var G__35144 = arguments.length;
switch (G__35144) {
case 1:
return sablono.core.datetime_local_field35142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field35142.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__35064__auto__);
});

sablono.core.datetime_local_field35142.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.datetime_local_field35142.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field35142);

/**
 * Creates a email input field.
 */
sablono.core.email_field35145 = (function sablono$core$email_field35145(var_args){
var G__35147 = arguments.length;
switch (G__35147) {
case 1:
return sablono.core.email_field35145.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field35145.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__35064__auto__);
});

sablono.core.email_field35145.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.email_field35145.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35145);

/**
 * Creates a file input field.
 */
sablono.core.file_field35148 = (function sablono$core$file_field35148(var_args){
var G__35150 = arguments.length;
switch (G__35150) {
case 1:
return sablono.core.file_field35148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field35148.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__35064__auto__);
});

sablono.core.file_field35148.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.file_field35148.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field35148);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35151 = (function sablono$core$hidden_field35151(var_args){
var G__35153 = arguments.length;
switch (G__35153) {
case 1:
return sablono.core.hidden_field35151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field35151.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__35064__auto__);
});

sablono.core.hidden_field35151.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.hidden_field35151.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35151);

/**
 * Creates a month input field.
 */
sablono.core.month_field35154 = (function sablono$core$month_field35154(var_args){
var G__35156 = arguments.length;
switch (G__35156) {
case 1:
return sablono.core.month_field35154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field35154.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__35064__auto__);
});

sablono.core.month_field35154.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.month_field35154.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field35154);

/**
 * Creates a number input field.
 */
sablono.core.number_field35157 = (function sablono$core$number_field35157(var_args){
var G__35159 = arguments.length;
switch (G__35159) {
case 1:
return sablono.core.number_field35157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field35157.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__35064__auto__);
});

sablono.core.number_field35157.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.number_field35157.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field35157);

/**
 * Creates a password input field.
 */
sablono.core.password_field35160 = (function sablono$core$password_field35160(var_args){
var G__35162 = arguments.length;
switch (G__35162) {
case 1:
return sablono.core.password_field35160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field35160.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__35064__auto__);
});

sablono.core.password_field35160.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.password_field35160.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35160);

/**
 * Creates a range input field.
 */
sablono.core.range_field35163 = (function sablono$core$range_field35163(var_args){
var G__35165 = arguments.length;
switch (G__35165) {
case 1:
return sablono.core.range_field35163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field35163.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__35064__auto__);
});

sablono.core.range_field35163.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.range_field35163.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field35163);

/**
 * Creates a search input field.
 */
sablono.core.search_field35166 = (function sablono$core$search_field35166(var_args){
var G__35168 = arguments.length;
switch (G__35168) {
case 1:
return sablono.core.search_field35166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field35166.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__35064__auto__);
});

sablono.core.search_field35166.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.search_field35166.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field35166);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35169 = (function sablono$core$tel_field35169(var_args){
var G__35171 = arguments.length;
switch (G__35171) {
case 1:
return sablono.core.tel_field35169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field35169.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__35064__auto__);
});

sablono.core.tel_field35169.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.tel_field35169.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field35169);

/**
 * Creates a text input field.
 */
sablono.core.text_field35172 = (function sablono$core$text_field35172(var_args){
var G__35174 = arguments.length;
switch (G__35174) {
case 1:
return sablono.core.text_field35172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field35172.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__35064__auto__);
});

sablono.core.text_field35172.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.text_field35172.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35172);

/**
 * Creates a time input field.
 */
sablono.core.time_field35175 = (function sablono$core$time_field35175(var_args){
var G__35177 = arguments.length;
switch (G__35177) {
case 1:
return sablono.core.time_field35175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field35175.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__35064__auto__);
});

sablono.core.time_field35175.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.time_field35175.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field35175);

/**
 * Creates a url input field.
 */
sablono.core.url_field35178 = (function sablono$core$url_field35178(var_args){
var G__35180 = arguments.length;
switch (G__35180) {
case 1:
return sablono.core.url_field35178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field35178.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__35064__auto__);
});

sablono.core.url_field35178.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.url_field35178.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field35178);

/**
 * Creates a week input field.
 */
sablono.core.week_field35181 = (function sablono$core$week_field35181(var_args){
var G__35183 = arguments.length;
switch (G__35183) {
case 1:
return sablono.core.week_field35181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field35181.cljs$core$IFn$_invoke$arity$1 = (function (name__35064__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__35064__auto__);
});

sablono.core.week_field35181.cljs$core$IFn$_invoke$arity$2 = (function (name__35064__auto__,value__35065__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__35064__auto__,value__35065__auto__);
});

sablono.core.week_field35181.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field35181);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35201 = (function sablono$core$check_box35201(var_args){
var G__35203 = arguments.length;
switch (G__35203) {
case 1:
return sablono.core.check_box35201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35201.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box35201.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box35201.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35201.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35201.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35201);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35205 = (function sablono$core$radio_button35205(var_args){
var G__35207 = arguments.length;
switch (G__35207) {
case 1:
return sablono.core.radio_button35205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35205.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button35205.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button35205.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35205.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35205.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35205);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35209 = (function sablono$core$select_options35209(coll){
var iter__31805__auto__ = (function sablono$core$select_options35209_$_iter__35210(s__35211){
return (new cljs.core.LazySeq(null,(function (){
var s__35211__$1 = s__35211;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35211__$1);
if(temp__5457__auto__){
var s__35211__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35211__$2)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,s__35211__$2);
var size__31804__auto__ = cljs.core.count.call(null,c__31803__auto__);
var b__35213 = cljs.core.chunk_buffer.call(null,size__31804__auto__);
if((function (){var i__35212 = (0);
while(true){
if((i__35212 < size__31804__auto__)){
var x = cljs.core._nth.call(null,c__31803__auto__,i__35212);
cljs.core.chunk_append.call(null,b__35213,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35214 = x;
var text = cljs.core.nth.call(null,vec__35214,(0),null);
var val = cljs.core.nth.call(null,vec__35214,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35214,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options35209.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__35220 = (i__35212 + (1));
i__35212 = G__35220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35213),sablono$core$select_options35209_$_iter__35210.call(null,cljs.core.chunk_rest.call(null,s__35211__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35213),null);
}
} else {
var x = cljs.core.first.call(null,s__35211__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35217 = x;
var text = cljs.core.nth.call(null,vec__35217,(0),null);
var val = cljs.core.nth.call(null,vec__35217,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35217,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options35209.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options35209_$_iter__35210.call(null,cljs.core.rest.call(null,s__35211__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31805__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35209);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35221 = (function sablono$core$drop_down35221(var_args){
var G__35223 = arguments.length;
switch (G__35223) {
case 2:
return sablono.core.drop_down35221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35221.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down35221.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35221.call(null,name,options,null);
});

sablono.core.drop_down35221.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down35221.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35221);
/**
 * Creates a text area element.
 */
sablono.core.text_area35225 = (function sablono$core$text_area35225(var_args){
var G__35227 = arguments.length;
switch (G__35227) {
case 1:
return sablono.core.text_area35225.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35225.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area35225.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area35225.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30923__auto__ = value;
if(cljs.core.truth_(or__30923__auto__)){
return or__30923__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area35225.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35225);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35229 = (function sablono$core$label35229(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35229);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35230 = (function sablono$core$submit_button35230(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35230);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35231 = (function sablono$core$reset_button35231(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35231);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35232 = (function sablono$core$form_to35232(var_args){
var args__32209__auto__ = [];
var len__32202__auto___35239 = arguments.length;
var i__32203__auto___35240 = (0);
while(true){
if((i__32203__auto___35240 < len__32202__auto___35239)){
args__32209__auto__.push((arguments[i__32203__auto___35240]));

var G__35241 = (i__32203__auto___35240 + (1));
i__32203__auto___35240 = G__35241;
continue;
} else {
}
break;
}

var argseq__32210__auto__ = ((((1) < args__32209__auto__.length))?(new cljs.core.IndexedSeq(args__32209__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to35232.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32210__auto__);
});

sablono.core.form_to35232.cljs$core$IFn$_invoke$arity$variadic = (function (p__35235,body){
var vec__35236 = p__35235;
var method = cljs.core.nth.call(null,vec__35236,(0),null);
var action = cljs.core.nth.call(null,vec__35236,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to35232.cljs$lang$maxFixedArity = (1);

sablono.core.form_to35232.cljs$lang$applyTo = (function (seq35233){
var G__35234 = cljs.core.first.call(null,seq35233);
var seq35233__$1 = cljs.core.next.call(null,seq35233);
return sablono.core.form_to35232.cljs$core$IFn$_invoke$arity$variadic(G__35234,seq35233__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35232);

//# sourceMappingURL=core.js.map?rel=1520306972973
