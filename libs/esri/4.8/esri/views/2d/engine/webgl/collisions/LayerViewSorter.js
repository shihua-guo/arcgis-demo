// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/shim/Map"],function(g,h,l){function k(e){return"esri.views.2d.layers.FeatureLayerView2D"===e.declaredClass}Object.defineProperty(h,"__esModule",{value:!0});g=function(){function e(a,c,b){void 0===b&&(b=null);this.registerLayer=a;this.unregisterLayer=c;this.onLabelsVisible=b;this._layerViewState=new l.default;this._priorityCounter=4294967295}e.prototype.update=function(a){for(var c=a.removed,b=0,d=a.added;b<d.length;b++){a=d[b];var f;if(f=k(a))a:switch(a.get("layer.renderer.type")){case "class-breaks":case "simple":case "unique-value":f=
!0;break a;default:f=!1}f&&!this._layerViewState.has(a)&&this._createState(a)}for(b=0;b<c.length;b++)a=c[b],k(a)&&this._layerViewState.has(a)&&this._deleteState(a);this._recomputeOrder()};e.prototype.destroy=function(){var a=this;this._layerViewState.forEach(function(c,b){return a._deleteState(b)})};e.prototype._createState=function(a){var c=this,b={enabled:a.labelsVisible,priority:this._priorityCounter--,order:null,handle:null};b.handle=a.watch("labelsVisible",function(a){b.enabled=a;c._recomputeOrder();
c.onLabelsVisible&&c._layerViewState.forEach(function(a,b){return c.onLabelsVisible(b)})});this._layerViewState.set(a,b);return b};e.prototype._deleteState=function(a){var c=this._layerViewState.get(a);c.handle.remove();c.enabled&&this.unregisterLayer(a);this._layerViewState.delete(a)};e.prototype._recomputeOrder=function(){var a=[];this._layerViewState.forEach(function(b,c){a.push({layerView:c,state:b})});a.sort(function(a,b){return a.state.priority-b.state.priority});for(var c=0,b=0;b<a.length;b++){var d=
a[b];d.state.order!==c&&(d.state.order=c,this.unregisterLayer(d.layerView));d.state.enabled?this.registerLayer(d.layerView,c):this.unregisterLayer(d.layerView);++c}};return e}();h.default=g});