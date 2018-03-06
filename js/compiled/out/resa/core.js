// Compiled by ClojureScript 1.9.946 {}
goog.provide('resa.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('resa.actions.core');
goog.require('resa.cards.core');
goog.require('resa.store');
goog.require('resa.app');
goog.require('reaction.core');
cljs.core.enable_console_print_BANG_.call(null);
resa.core.main = (function resa$core$main(){
var temp__5455__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__5455__auto__)){
var node = temp__5455__auto__;
cljs.core.add_watch.call(null,resa.store.app_store,new cljs.core.Keyword(null,"render","render",-1408033454),((function (node,temp__5455__auto__){
return (function (k,a,o,n){
return ReactDOM.render(resa.app.ui_app.call(null,a),node);
});})(node,temp__5455__auto__))
);

return ReactDOM.render(resa.app.ui_app.call(null,resa.store.app_store),node);
} else {
return null;
}
});
resa.core.main.call(null);
reaction.core.bind_actions_list.call(null);

//# sourceMappingURL=core.js.map?rel=1520306979165
