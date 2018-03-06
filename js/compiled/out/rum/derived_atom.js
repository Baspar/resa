// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__33187 = arguments.length;
switch (G__33187) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__33188 = opts;
var map__33188__$1 = ((((!((map__33188 == null)))?((((map__33188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33188):map__33188);
var ref = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__33190 = cljs.core.count.call(null,refs);
switch (G__33190) {
case (1):
var vec__33191 = refs;
var a = cljs.core.nth.call(null,vec__33191,(0),null);
return ((function (vec__33191,a,G__33190,map__33188,map__33188__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__33191,a,G__33190,map__33188,map__33188__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__33194 = refs;
var a = cljs.core.nth.call(null,vec__33194,(0),null);
var b = cljs.core.nth.call(null,vec__33194,(1),null);
return ((function (vec__33194,a,b,G__33190,map__33188,map__33188__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__33194,a,b,G__33190,map__33188,map__33188__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__33197 = refs;
var a = cljs.core.nth.call(null,vec__33197,(0),null);
var b = cljs.core.nth.call(null,vec__33197,(1),null);
var c = cljs.core.nth.call(null,vec__33197,(2),null);
return ((function (vec__33197,a,b,c,G__33190,map__33188,map__33188__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__33197,a,b,c,G__33190,map__33188,map__33188__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__33190,map__33188,map__33188__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__33190,map__33188,map__33188__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__33200 = ref;
cljs.core.reset_BANG_.call(null,G__33200,recalc.call(null));

return G__33200;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__33188,map__33188__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__33188,map__33188__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__33188,map__33188__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__33188,map__33188__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__33201_33207 = cljs.core.seq.call(null,refs);
var chunk__33202_33208 = null;
var count__33203_33209 = (0);
var i__33204_33210 = (0);
while(true){
if((i__33204_33210 < count__33203_33209)){
var ref_33211__$1 = cljs.core._nth.call(null,chunk__33202_33208,i__33204_33210);
cljs.core.add_watch.call(null,ref_33211__$1,key,watch);

var G__33212 = seq__33201_33207;
var G__33213 = chunk__33202_33208;
var G__33214 = count__33203_33209;
var G__33215 = (i__33204_33210 + (1));
seq__33201_33207 = G__33212;
chunk__33202_33208 = G__33213;
count__33203_33209 = G__33214;
i__33204_33210 = G__33215;
continue;
} else {
var temp__5457__auto___33216 = cljs.core.seq.call(null,seq__33201_33207);
if(temp__5457__auto___33216){
var seq__33201_33217__$1 = temp__5457__auto___33216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33201_33217__$1)){
var c__31854__auto___33218 = cljs.core.chunk_first.call(null,seq__33201_33217__$1);
var G__33219 = cljs.core.chunk_rest.call(null,seq__33201_33217__$1);
var G__33220 = c__31854__auto___33218;
var G__33221 = cljs.core.count.call(null,c__31854__auto___33218);
var G__33222 = (0);
seq__33201_33207 = G__33219;
chunk__33202_33208 = G__33220;
count__33203_33209 = G__33221;
i__33204_33210 = G__33222;
continue;
} else {
var ref_33223__$1 = cljs.core.first.call(null,seq__33201_33217__$1);
cljs.core.add_watch.call(null,ref_33223__$1,key,watch);

var G__33224 = cljs.core.next.call(null,seq__33201_33217__$1);
var G__33225 = null;
var G__33226 = (0);
var G__33227 = (0);
seq__33201_33207 = G__33224;
chunk__33202_33208 = G__33225;
count__33203_33209 = G__33226;
i__33204_33210 = G__33227;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1520306971423
