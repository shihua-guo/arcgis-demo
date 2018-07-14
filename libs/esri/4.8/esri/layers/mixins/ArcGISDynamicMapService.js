// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/CollectionFlattener ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/PropertyOrigin ../../geometry/support/scaleUtils ./ArcGISMapService ./ScaleRangeLayer ../support/ExportImageParameters ../support/Sublayer ../support/sublayerUtils".split(" "),function(C,D,q,v,d,l,w,x,b,h,y,z,A,B,k,m){function n(b,
c,a){var t=[],u={};b.forEach(function(e){var b=new k;b.read(e,c);a&&(-1===a.indexOf(b.id)?b.visible=!1:b.visible=!0);u[b.id]=b;null!=e.parentLayerId&&-1!==e.parentLayerId?(e=u[e.parentLayerId],e.sublayers||(e.sublayers=[]),e.sublayers.unshift(b)):t.unshift(b)});return t}function p(b,c){var a=c.get(b.id);a?(x.mixin(b.__accessor__.store._values,a.__accessor__.store._values),a.sublayers&&(b.sublayers=a.sublayers.map(function(a){return p(a,c)}))):b.sublayers&&b.sublayers.forEach(function(a){return p(a,
c)});return b}return function(r){function c(){var a=r.call(this)||this;a.allSublayers=new w({root:a,rootCollectionNames:["sublayers"],getChildrenFunction:function(a){return a.sublayers}});a.dpi=96;a.gdbVersion=null;a.imageFormat="png24";a.imageMaxHeight=2048;a.imageMaxWidth=2048;a.imageTransparency=!0;a.loaded=!1;a.sublayers=null;a.watch("sublayers",function(b,c){c&&(c.forEach(function(a){a.parent=null;a.layer=null}),a._sublayersHandles.forEach(function(a){return a.remove()}),a._sublayersHandles=
null);b&&(b.forEach(function(b){b.parent=a;b.layer=a}),a._sublayersHandles=[b.on("after-add",function(b){b=b.item;b.parent=a;b.layer=a}),b.on("after-remove",function(a){a=a.item;a.parent=null;a.layer=null})])},!0);return a}v(c,r);c.prototype.readImageFormat=function(a,b){return(a=b.supportedImageFormatTypes)&&-1<a.indexOf("PNG32")?"png32":"png24"};c.prototype.readServiceSublayers=function(a,b,c){return n(b.layers,c)};c.prototype.readSublayersFromItemOrWebMap=function(a,b,c){return!b.layers&&b.visibleLayers?
b.visibleLayers.map(function(a){return{id:a}}):n(b.layers,c,b.visibleLayers)};c.prototype.readSublayers=function(a,b,c){a=n(b.layers,c);this._updateSublayersForOrigin(h.OriginId.PORTAL_ITEM,a);this._updateSublayersForOrigin(h.OriginId.WEB_MAP,a);this._updateSublayersForOrigin(h.OriginId.WEB_SCENE,a);return a};c.prototype.writeSublayers=function(a,b,c,e){a=a.flatten(function(a){return(a=a.sublayers)&&a.toArray().reverse()}).toArray().reverse();var d=this.serviceSublayers.flatten(function(a){return(a=
a.sublayers)&&a.toArray().reverse()}).toArray().reduce(function(a,b){a.set(b.id,b);return a},new Map),g=!1,f=!0;this.capabilities&&this.capabilities.exportMap.supportsDynamicLayers?(g=m.isExportDynamic(a,this.serviceSublayers,this),f=!g&&m.sameStructureAsService(a,this.serviceSublayers)):f=m.sameStructureAsService(a,this.serviceSublayers);b.layers=[];a.forEach(function(a){var c=d.get(a.id),c=q({writeAsDynamic:g,writeOverridesOnly:f,serviceSublayer:c},e);a=a.write({},c);(!f||f&&1<Object.keys(a).length)&&
b.layers.push(a)});b.visibleLayers=a.filter(function(a){return a.visible}).map(function(a){return a.id})};c.prototype.findSublayerById=function(a){return this.allSublayers.find(function(b){return b.id===a})};c.prototype.createServiceSublayers=function(){return this.serviceSublayers.map(function(a){return a.clone()})};c.prototype.createExportImageParameters=function(a,b,c,e){a&&10<=this.version&&(a=a.clone().shiftCentralMeridian());var d=new B({layer:this,scale:y.getScale({extent:a,width:b})}),g=d.toJSON();
d.layer=null;d.destroy();var d=!e||!e.rotation||10.3>this.version?{}:{rotation:-e.rotation},f=a&&a.spatialReference,f=f.wkid||JSON.stringify(f.toJSON());e&&null!=e.pixelRatio&&(g.dpi*=e.pixelRatio);return q({bbox:a&&a.xmin+","+a.ymin+","+a.xmax+","+a.ymax,bboxSR:f,imageSR:f,size:b+","+c},g,d)};c.prototype._updateSublayersForOrigin=function(a,b){var c=this.__accessor__.store;if(c.has("sublayers",a)){var d=c.get("sublayers",a).flatten(function(a){return a.sublayers});if(d.every(function(a){return!a.__accessor__.store._values.hasOwnProperty("minScale")})){var h=
d.reduce(function(a,b){a.set(b.id,b);return a},new Map);b=b.map(function(a){return p(a.clone(),h)});c.set("sublayers",new (l.ofType(k))(b),a)}}};d([b.property({readOnly:!0})],c.prototype,"allSublayers",void 0);d([b.property()],c.prototype,"dpi",void 0);d([b.property()],c.prototype,"gdbVersion",void 0);d([b.property()],c.prototype,"imageFormat",void 0);d([b.reader("imageFormat",["supportedImageFormatTypes"])],c.prototype,"readImageFormat",null);d([b.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],
c.prototype,"imageMaxHeight",void 0);d([b.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],c.prototype,"imageMaxWidth",void 0);d([b.property()],c.prototype,"imageTransparency",void 0);d([b.property()],c.prototype,"loaded",void 0);d([b.property({readOnly:!0,type:l.ofType(k)})],c.prototype,"serviceSublayers",void 0);d([b.reader("service","serviceSublayers",["layers"])],c.prototype,"readServiceSublayers",null);d([b.property({type:l.ofType(k)})],c.prototype,"sublayers",void 0);d([b.reader(["web-map",
"web-scene","portal-item"],"sublayers",["layers","visibleLayers"])],c.prototype,"readSublayersFromItemOrWebMap",null);d([b.reader("service","sublayers",["layers"])],c.prototype,"readSublayers",null);d([b.writer(["web-map","web-scene","portal-item"],"sublayers")],c.prototype,"writeSublayers",null);return c=d([b.subclass("esri.layers.mixins.ArcGISDynamicMapService")],c)}(b.declared(z,A))});