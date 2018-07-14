// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(k,l,g,h){var f;(function(c){c[c.BEFORE=0]="BEFORE";c[c.ATTACHING=1]="ATTACHING";c[c.DETACHING=2]="DETACHING";c[c.RENDERING=3]="RENDERING";c[c.AFTER=4]="AFTER";c[c.DONE=5]="DONE"})(f||(f={}));return function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a._childrenSet=new Set;a._childrenToAttach=[];a._childrenToDetach=[];a._renderPhase=f.DONE;a.children=[];return a}g(b,c);Object.defineProperty(b.prototype,
"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0});b.prototype.detach=function(a){var d=this.children.concat(this._childrenToDetach);a=this.prepareChildrenRenderParameters(a);for(var b=0;b<d.length;b++){var e=d[b];e.attached&&(this.detachChild(e,a),e.attached=!1,e.parent=null)}};b.prototype.doRender=function(a){var d=this.prepareChildrenRenderParameters(a);this._renderPhase=f.BEFORE;this.beforeRenderChildren(a,d);this._renderPhase=f.ATTACHING;this.attachChildren(d);
this._renderPhase=f.DETACHING;for(var b=this._childrenToDetach;0<b.length;){var e=b.shift();this.detachChild(e,d);e.attached=!1;e.parent=null}this._renderPhase=f.RENDERING;this.renderChildren(d);this._renderPhase=f.AFTER;this.afterRenderChildren(a,d);this._renderPhase=f.DONE};b.prototype.addChild=function(a){return this.addChildAt(a,this.children.length)};b.prototype.addChildAt=function(a,d){void 0===d&&(d=this.numChildren);if(!a||this.contains(a))return a;var b=a.parent;b&&b!==this&&b.removeChild(a);
d>=this.numChildren?this.children.push(a):this.children.splice(d,0,a);this._childrenSet.add(a);d=this._childrenToDetach.indexOf(a);-1<d&&this._childrenToDetach.splice(d,1);this._childrenToAttach.push(a);this._renderPhase>=f.RENDERING&&this.requestRender();return a};b.prototype.contains=function(a){return this._childrenSet.has(a)};b.prototype.getChildIndex=function(a){return this.children.indexOf(a)};b.prototype.getChildAt=function(a){return 0>a||a>this.children.length?null:this.children[a]};b.prototype.removeAllChildren=
function(){for(var a=this.numChildren;a--;)this.removeChildAt(0)};b.prototype.removeChild=function(a){return this.contains(a)?this.removeChildAt(this.getChildIndex(a)):a};b.prototype.removeChildAt=function(a){if(0>a||a>=this.children.length)return null;a=this.children.splice(a,1)[0];this._childrenSet["delete"](a);if(a.attached)this._childrenToDetach.push(a),this._renderPhase>=f.RENDERING&&this.requestRender();else{var d=this._childrenToAttach.indexOf(a);-1<d&&this._childrenToAttach.splice(d,1)}return a};
b.prototype.requestChildRender=function(a){a&&a.parent===this&&this._renderPhase>=f.RENDERING&&this.requestRender()};b.prototype.setChildIndex=function(a,d){var b=this.getChildIndex(a);-1<b&&(this.children.splice(b,1),this.children.splice(d,0,a),this._renderPhase>=f.RENDERING&&this.requestRender())};b.prototype.sortChildren=function(a){this._renderPhase>f.RENDERING&&this.requestRender();return this.children.sort(a)};b.prototype.attachChildren=function(a){var b=this._childrenToAttach;if(0!==b.length)for(var c=
0,e=!1;!e;)e=b[c],this.attachChild(e,a)?(e.attached=!0,e.parent=this,b.splice(c,1)):++c,e=b.length===c};b.prototype.renderChildren=function(a){for(var b=this.children,c=b.length,e=0;e<c;e++){var f=b[e];f.attached&&this.renderChild(f,a)}};b.prototype.beforeRenderChildren=function(a,b){};b.prototype.attachChild=function(a,b){return a.attach(b)};b.prototype.detachChild=function(a,b){a.detach(b)};b.prototype.renderChild=function(a,b){a.processRender(b)};b.prototype.afterRenderChildren=function(a,b){};
return b}(h)});