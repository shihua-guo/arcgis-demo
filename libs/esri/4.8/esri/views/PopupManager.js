// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("../core/promiseUtils dojo/on dojo/Deferred ../layers/graphics/dehydratedFeatures ../geometry/support/scaleUtils ../geometry/Extent ../tasks/support/Query ../layers/GroupLayer ../core/Accessor".split(" "),function(v,z,A,B,w,C,D,x,E){return E.createSubclass({declaredClass:"esri.views.PopupManager",properties:{map:{dependsOn:["view.map"],readOnly:!0}},constructor:function(){this._featureLayersCache={}},destroy:function(){this._featureLayersCache={};this.view=null},_clickHandle:null,_featureLayersCache:null,
enabled:!1,_enabledSetter:function(b){this._clickHandle&&(b?this._clickHandle.resume():this._clickHandle.pause());this._set("enabled",b)},_mapGetter:function(){return this.get("view.map")||null},view:null,_viewSetter:function(b){this._clickHandle&&(this._clickHandle.remove(),this._clickHandle=null);b&&(this._clickHandle=z.pausable(b,"click",this._clickHandler.bind(this)),this.enabled||this._clickHandle.pause());this._set("view",b)},getMapLayer:function(b){var d;if(b&&(d=b.findLayerById())&&(b=d.id,
this._featureLayersCache[b])){var a=b.lastIndexOf("_");-1<a&&(b=b.substring(0,a),d=this.map.findLayerById(b))}return d},_closePopup:function(){var b=this.get("view.popup");b&&(b.clear(),b.close())},_showPopup:function(b,d,a){function h(c){return f.allLayerViews.find(function(a){return a.layer===c})}function k(c){if(null==c)return!1;var a=h(c);return null==a?!1:c.loaded&&!a.suspended&&(c.popupEnabled&&c.popupTemplate||"graphics"===c.type||"geo-rss"===c.type||"map-notes"===c.type||"kml"===c.type||a.getPopupData)}
function q(a){return(a=h(a))&&a.hasDraped}var f=this.view;b=f.popup;var m=this,g=[],r="3d"===f.type;this.map.layers.toArray().forEach(function(a){a.isInstanceOf(x)?a.layers.toArray().forEach(function(a){!k(a)||r&&!q(a)||g.push(a)}):!k(a)||r&&!q(a)||g.push(a)});0<f.graphics.length&&g.push(f.graphics);(a&&f.graphics.includes(a)?a.getEffectivePopupTemplate():!a||k(a.layer))||(a=null);if(g.length||a){var n=[],p=!!a,l=m._calculateClickTolerance(g);if(d){var t=1;"2d"===f.type&&(t=f.state.resolution);var e=
f.basemapTerrain;e&&e.overlayManager&&(t=e.overlayManager.overlayPixelSizeInMapUnits(d));l*=t;e&&!e.spatialReference.equals(f.spatialReference)&&(l*=w.getMetersPerUnitForSR(e.spatialReference)/w.getMetersPerUnitForSR(f.spatialReference));var e=d.clone().offset(-l,-l),l=d.clone().offset(l,l),u=new C(Math.min(e.x,l.x),Math.min(e.y,l.y),Math.max(e.x,l.x),Math.max(e.y,l.y),f.spatialReference),e=function(c){var b;if("imagery"===c.type){b=new D;b.geometry=d;var g=h(c),e={rasterAttributeTableFieldPrefix:"Raster.",
returnDomainValues:!0};e.layerView=g;b=c.queryVisibleRasters(b,e).then(function(a){p=p||0<a.length;return a})}else if("scene"===c.type||!m._featureLayersCache[c.id]&&"function"!==typeof c.queryFeatures){if("map-image"===c.type||"wms"===c.type)return g=h(c),g.getPopupData(u);var e=[],f,k=!1;"esri.core.Collection\x3cesri.Graphic\x3e"===c.declaredClass?(g=c,f=!0):"graphics"===c.type?(g=c.graphics,f=!0):(g=(g=h(c))&&g.loadedGraphics,f=!1,k=!0);g&&(e=g.filter(function(a){return a&&(!f||a.getEffectivePopupTemplate())&&
a.visible&&u.intersects(a.geometry)}).toArray(),k&&(e=e.map(function(a){return B.hydrateGraphic(a,c)})));0<e.length&&(p=!0,b="scene"===c.type?m._fetchSceneAttributes(c,e):v.resolve(e))}else b=c.createQuery(),b.geometry=u,b=c.queryFeatures(b).then(function(b){b=b.features;if(a&&a.layer===c&&c.objectIdField){var d=c.objectIdField,g=a.attributes[d];b=b.filter(function(a){return a.attributes[d]!==g})}if(!a&&"graphics3DGraphics"in h(c)){var m=[],e=h(c).graphics3DGraphics,f;for(f in e)m.push(e[f].graphic.attributes[c.objectIdField]);
b=b.filter(function(a){return-1!==m.indexOf(a.attributes[c.objectIdField])})}p=p||0<b.length;return b});return b};if(r&&!a||!r)var n=g.map(e).filter(function(a){return!!a}),y=function(a){return a.reduce(function(a,b){return a.concat(b.items?y(b.items):b)},[])},n=y(n);a&&(a.layer&&"scene"===a.layer.type?n.unshift(this._fetchSceneAttributes(a.layer,[a])):a.getEffectivePopupTemplate()&&(e=new A,n.unshift(e.resolve([a]))));n.some(function(a){return!a.isFulfilled()})||p?n.length&&b.open({promises:n,location:d}):
m._closePopup()}else m._closePopup()}else m._closePopup()},_fetchSceneAttributes:function(b,d){return this.view.whenLayerView(b).then(function(a){var h=this._getOutFields(b.popupTemplate),k=d.map(function(b){return a.whenGraphicAttributes(b,h).catch(function(){return b})});return v.eachAlways(k)}.bind(this)).then(function(a){return a.map(function(a){return a.value})})},_getOutFields:function(b){var d=["*"];if("esri.PopupTemplate"===b.declaredClass){var a=null==b.content||Array.isArray(b.content)&&
b.content.every(function(a){return"attachments"===a.type||"fields"===a.type&&null==a.fieldInfos||"text"===a.type&&-1===a.text.indexOf("{")});b.fieldInfos&&!b.expressionInfos&&a&&(d=[],b.fieldInfos.forEach(function(a){var b=a.fieldName&&a.fieldName.toLowerCase();b&&"shape"!==b&&0!==b.indexOf("relationships/")&&d.push(a.fieldName)}))}return d},_calculateClickTolerance:function(b){var d=6;b.forEach(function(a){if(a=a.renderer)"simple"===a.type?((a=a.symbol)&&a.xoffset&&(d=Math.max(d,Math.abs(a.xoffset))),
a&&a.yoffset&&(d=Math.max(d,Math.abs(a.yoffset)))):"unique-value"!==a.type&&"class-breaks"!==a.type||(a.uniqueValueInfos||a.classBreakInfos).forEach(function(a){(a=a.symbol)&&a.xoffset&&(d=Math.max(d,Math.abs(a.xoffset)));a&&a.yoffset&&(d=Math.max(d,Math.abs(a.yoffset)))})});return d},_clickHandler:function(b){function d(b){return a.allLayerViews.find(function(a){return a.layer===b})}var a=this.view,h=b.screenPoint,k=this;if(0===b.button&&a.popup&&a.ready){var q="3d"===a.type,f=a.map.allLayers.some(function(a){if(a.isInstanceOf(x))return!1;
var b;null==a?b=!1:(b=d(a),b=null==b?!1:a.loaded&&!b.suspended&&(a.popupEnabled&&a.popupTemplate||"graphics"===a.type||b.getPopupData));b&&!(b=!q)&&(b=(a=d(a))&&a.hasDraped);return b?!0:!1});null!=h?this.view.hitTest(h.x,h.y).then(function(a){f||0<a.results.length?0<a.results.length?(a=a.results[0],k._showPopup(b,a.mapPoint,a.graphic)):k._showPopup(b,b.mapPoint,null):k._closePopup()}):k._showPopup(b,b.mapPoint)}}})});