// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.store');
goog.require('cljs.core');
resa.store.inital_store = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"step1","step1",474664537)], null);
if(typeof resa.store.app_store !== 'undefined'){
} else {
resa.store.app_store = cljs.core.atom.call(null,resa.store.inital_store);
}

//# sourceMappingURL=store.js.map?rel=1520306978507
