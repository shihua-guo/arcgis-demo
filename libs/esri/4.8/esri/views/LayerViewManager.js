// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/Error ../core/Handles ../core/promiseUtils ../core/scheduling ../core/watchUtils ../core/accessorSupport/decorators ./LayerViewFactory".split(" "),function(v,w,m,h,n,k,p,q,r,t,f,u){return function(l){function b(){var a=l.call(this)||this;a._promisesMap=new Map;a._layerViewsMap=new Map;a._handles=new p;a.factory=new u;a.ready=!1;a.layersToLayerViews=function(){var a=new Map;a.set("view.map.basemap.baseLayers",
"view.basemapView.baseLayerViews");a.set("view.map.ground.layers","view.groundView.layerViews");a.set("view.map.layers","view.layerViews");a.set("view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews");return a}();a._doWork=a._doWork.bind(a);a.refresh=a.refresh.bind(a);a._handles.add(t.init(a,"view.ready",function(c){return a.ready=c}));a._handles.add(a.watch(["view.map.basemap","view.map.ground","view.map.layers","ready"],a.refresh),"watcher");return a}m(b,l);b.prototype.destroy=
function(){this._handles&&(this.clear(),this.view=null,this.factory.destroy(),this.factory=null,this._handles.destroy(),this._map=this._layerViewsMap=this._promisesMap=this._handles=null)};b.prototype.clear=function(){this.destroyed||(this._layerViewsMap.forEach(this._disposeLayerView,this),this._promisesMap.forEach(function(a){return a.cancel()}),this._layerViewsMap.clear(),this._promisesMap.clear(),this._refreshCollections())};b.prototype.refresh=function(){var a=this._handles;a.remove("refresh");
a.add(r.schedule(this._doWork),"refresh")};b.prototype.whenLayerView=function(a){this.refresh();this._doWork();return this._promisesMap.has(a)?this._promisesMap.get(a):q.reject(new k("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:a}))};b.prototype._doWork=function(){var a=this,c=this._handles,b=this.get("view.map");this._map!==b&&(this.clear(),this._map=b);if(c.has("refresh")){c.remove("refresh");c.remove("collection-change");this.factory.paused=!this.ready;var d=
this._map&&this._map.allLayers;d&&(d.forEach(this._createLayerView,this),this._refreshCollections(),this._promisesMap.forEach(function(c,b){d.includes(b)||a._disposeLayerView(a._layerViewsMap.get(b),b)}),c.add(d.on("change",this.refresh),"collection-change"))}};b.prototype._refreshCollections=function(){var a=this;this.layersToLayerViews.forEach(function(c,b){a._populateLayerViewsOwners(a.get(b),a.get(c),a.view)})};b.prototype._populateLayerViewsOwners=function(a,c,b){var d=this;if(a&&c){var e=0;
a.forEach(function(a){var g=d._layerViewsMap.get(a);g&&(g.layer=a,g.parent=b,c.getItemAt(e)!==g&&c.splice(e,0,g),a.layers&&d._populateLayerViewsOwners(a.layers,g.layerViews,g),e+=1)});e<c.length&&c.splice(e,c.length)}else c&&c.removeAll()};b.prototype._createLayerView=function(a){var c=this,b=this.view,d=this.factory,e=this._layerViewsMap,f=this._promisesMap;e.has(a)?a.load():f.has(a)||(d=d.create(b,a).then(function(d){if(!c._map||!c._map.allLayers.some(function(c){return a===c}))throw new k("view:no-layerview-for-layer",
"The layer has been removed from the map",{layer:a});e.set(a,d);c._refreshCollections();a.emit("layerview-create",{view:b,layerView:d});b.emit("layerview-create",{layer:a,layerView:d});return d.when()}),f.set(a,d),d.always(this.refresh))};b.prototype._disposeLayerView=function(a,c){if(this._promisesMap.has(c)&&(this._promisesMap.get(c).cancel(),this._promisesMap.delete(c),a)){c=a.layer;var b=a.view;this.factory.dispose(a);a.layer=a.parent=a.view=null;this._layerViewsMap.delete(c);c.emit("layerview-destroy",
{view:b,layerView:a});b.emit("layerview-destroy",{layer:c,layerView:a})}};h([f.property()],b.prototype,"ready",void 0);h([f.property()],b.prototype,"view",void 0);return b=h([f.subclass("esri.views.LayerViewManager")],b)}(f.declared(n))});