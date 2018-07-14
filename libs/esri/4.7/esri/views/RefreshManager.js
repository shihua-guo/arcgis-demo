// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/Handles ../core/accessorSupport/decorators".split(" "),function(n,p,h,f,k,l,e){return function(g){function b(){var a=null!==g&&g.apply(this,arguments)||this;a._handles=new l;a._currentTick=0;return a}h(b,g);b.prototype.initialize=function(){var a=this;this.view.allLayerViews.on("after-changes",function(){a.notifyChange("tickInterval");a._handles.remove("layerViewsUpdating");a._handles.add(a._getLayerViewHandles(),
"layerViewsUpdating")});this.watch("tickInterval",function(){return a._restartTicking()});this.watch("view.ready",function(){return a._restartTicking()});this._restartTicking()};b.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._intervalID&&clearInterval(this._intervalID),this._currentTick=0)};Object.defineProperty(b.prototype,"tickInterval",{get:function(){var a=this.view.allLayerViews.filter(function(a){return!!a.refresh});return this._getCommonInterval(a)},
enumerable:!0,configurable:!0});b.prototype._restartTicking=function(){var a=this;this._currentTick=0;this._intervalID&&clearInterval(this._intervalID);this.get("view.ready")&&this.tickInterval&&(this._intervalID=setInterval(function(){var b=Date.now();a._currentTick+=a.tickInterval;a.view.allLayerViews.forEach(function(d){if(d.refresh){var c=Math.round(6E4*d.refreshInterval),m=0===a._currentTick%c,e=6E3>b-d.refreshTimestamp;c&&m&&!e&&d.refresh(b)}})},this.tickInterval))};b.prototype._getLayerViewHandles=
function(){var a=this,b=[];this.view.allLayerViews.forEach(function(d){if(d.refresh){var c=d.watch("refreshInterval",function(){return a.notifyChange("tickInterval")});b.push(c);d.layer&&(c=d.layer.on("refresh",function(){var a=Date.now();6E3>a-d.refreshTimestamp||d.refresh(a)}),b.push(c))}});return b};b.prototype._getCommonInterval=function(a){var b=function(a,c){return isNaN(a)||isNaN(c)?0:0>=c?a:b(c,a%c)};return a.toArray().reduce(function(a,c){return b(Math.round(6E4*c.refreshInterval),a)},0)};
f([e.property()],b.prototype,"view",void 0);f([e.property({readOnly:!0})],b.prototype,"tickInterval",null);return b=f([e.subclass("esri.views.RefreshManager")],b)}(e.declared(k))});