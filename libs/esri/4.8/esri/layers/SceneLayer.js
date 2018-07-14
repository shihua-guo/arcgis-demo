// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/promise/all ../PopupTemplate ../request ../core/Error ../core/Logger ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ../core/accessorSupport/PropertyOrigin ../core/accessorSupport/utils ./FeatureLayer ./Layer ./mixins/SceneService ./support/commonProperties ./support/commonProperties ./support/FeatureReduction ./support/FeatureReductionSelection ./support/Field ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ./support/RangeInfo ../portal/PortalItem ../renderers/support/jsonUtils ../renderers/support/styleUtils ../renderers/support/typeUtils ../symbols/support/ElevationInfo ../tasks/support/Query".split(" "),
function(n,U,y,z,d,p,A,l,f,B,g,C,c,h,D,q,E,F,r,G,H,I,J,m,K,t,L,M,N,O,P,Q,R){function u(c,b,a){c&&((c=N.read(c,b,a)||void 0)||k.error("Failed to create renderer",{rendererDefinition:c,layer:this,context:a}));return c}var S=["3DObject","Point"],k=B.getLogger("esri.layers.SceneLayer"),w={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},
T={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};return function(v){function b(a,e){a=v.call(this)||this;a.featureReduction=null;a.rangeInfos=null;a.operationalLayerType="ArcGISSceneServiceLayer";a.type="scene";a.fields=[];a.definitionExpression=null;a.elevationInfo=null;a.labelsVisible=!0;a.labelingInfo=null;a.legendEnabled=!0;a.cachedDrawingInfo={color:!1};a.popupEnabled=!0;a.popupTemplate=null;a.objectIdField=null;a.objectIdFilter=null;a._fieldUsageInfo={};a.screenSizePerspectiveEnabled=
!0;return a}z(b,v);b.prototype.normalizeCtorArgs=function(a,e){return"string"===typeof a?y({url:a},e):a};b.prototype.getField=function(a){return m.getField(a,this.fields)};Object.defineProperty(b.prototype,"geometryType",{get:function(){return T[this.profile]||"mesh"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderer",{set:function(a){m.fixRendererFields(a,this.fields);this._set("renderer",a)},enumerable:!0,configurable:!0});b.prototype.readCachedDrawingInfo=function(a,e){if(null==
a||"object"!==typeof a)a={};null==a.color&&(a.color=!1);return a};b.prototype.readObjectIdField=function(a,e){!a&&e.fields&&e.fields.some(function(e){"esriFieldTypeOID"===e.type&&(a=e.name);return!!a});return a||void 0};b.prototype.readProfile=function(a,e){a=e.store.profile;if(null!=a&&w[a])return w[a];k.error("Unknown or missing profile",{profile:a,layer:this});return"mesh-pyramids"};b.prototype.readNormalReferenceFrame=function(a,e){return e.store.normalReferenceFrame};b.prototype.load=function(){var a=
this,e=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return a._fetchService()}).then(function(){return p([a._verifyRootNodeAndUpdateExtent(),a._setCompanionFeatureLayer()])}).then(function(){return a._applyCompanionOverrides()}).then(function(){return a._populateFieldUsageInfo()}).then(function(){return O.loadStyleRenderer(a,{origin:"service"})}).then(function(){return m.fixRendererFields(a.renderer,a.fields)});this.addResolvingPromise(e);return this.when()};b.prototype.createLayerView=
function(a){var e=this;return(null==this.profile||"mesh-pyramids"===this.profile?g.create(function(a){return n(["../views/3d/layers/SceneLayerView3D"],a)}):g.create(function(a){return n(["../views/3d/layers/SceneLayerGraphicsView3D"],a)})).then(function(b){return new b({view:a,layer:e})})};b.prototype.createQuery=function(){var a=new R;"mesh"!==this.geometryType&&(a.returnGeometry=!0,a.returnZ=!0);a.where=this.definitionExpression||"1\x3d1";a.sqlFormat="standard";return a};b.prototype.queryExtent=
function(a){var e=this;return this._getAssociatedLayerForQuery().then(function(b){return b.queryExtent(a||e.createQuery())})};b.prototype.queryFeatureCount=function(a){var e=this;return this._getAssociatedLayerForQuery().then(function(b){return b.queryFeatureCount(a||e.createQuery())})};b.prototype.queryFeatures=function(a){var e=this;return this._getAssociatedLayerForQuery().then(function(b){return b.queryFeatures(a||e.createQuery())}).then(function(a){if(a&&a.features)for(var b=0,c=a.features;b<
c.length;b++){var x=c[b];x.layer=e;x.sourceLayer=e}return a})};b.prototype.queryFeaturesJSON=function(a){var e=this;return this._getAssociatedLayerForQuery().then(function(b){return b.queryFeaturesJSON(a||e.createQuery())})};b.prototype.queryObjectIds=function(a){var e=this;return this._getAssociatedLayerForQuery().then(function(b){return b.queryObjectIds(a||e.createQuery())})};b.prototype.getFieldUsageInfo=function(a){return this._fieldUsageInfo[a]||{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,
supportsLayerQuery:!1}};b.prototype._getAssociatedLayerForQuery=function(){var a=this;if(!this.loaded)return this.load().then(function(){return a._getAssociatedLayerForQuery()});var b=this.associatedLayer;return null!=b?g.resolve(b):g.reject(new f("scenelayer:query-not-available","SceneLayer queries are not available without associated feature layer"))};b.prototype.hasCachedStatistics=function(a){return null!=this.statisticsInfo&&this.statisticsInfo.some(function(b){return b.name===a})};b.prototype.queryCachedStatistics=
function(a){if(!this.hasCachedStatistics(a))return g.reject(new f("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var b=0,c=this.statisticsInfo;b<c.length;b++){var d=c[b];if(d.name===a)return a=C.join(this.parsedUrl.path,d.href),l(a,{query:{f:"json"},responseType:"json"}).then(function(a){return a.data})}};b.prototype.graphicChanged=function(a){this.emit("graphic-update",a)};b.prototype._validateLayer=function(a){if(a.layerType&&-1===S.indexOf(a.layerType))throw new f("scenelayer:layer-type-not-supported",
"SceneLayer does not support this layer type",{layerType:a.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new f("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(1<this.version.major)throw new f("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});a=this.normalReferenceFrame;var b=this.spatialReference,
c=!1,d=!1;if(null==a)d=c=!0;else switch(b=b&&b.isGeographic,a){case "east-north-up":case "earth-centered":c=!0;d=b;break;case "vertex-reference-frame":c=!0;d=!b;break;default:c=!1}if(!c)throw new f("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!d)throw new f("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.");};b.prototype._populateFieldUsageInfo=function(){this._fieldUsageInfo={};if(this.fields)for(var a=
function(a){var e=!(!b.attributeStorageInfo||!b.attributeStorageInfo.some(function(b){return b.name===a.name})),c=!!(b.associatedLayer&&b.associatedLayer.fields&&b.associatedLayer.fields.some(function(b){return b&&a.name===b.name}));b._fieldUsageInfo[a.name]={supportsLabelingInfo:e,supportsRenderer:e,supportsPopupTemplate:e||c,supportsLayerQuery:c}},b=this,c=0,d=this.fields;c<d.length;c++)a(d[c])};b.prototype._applyCompanionOverrides=function(){if(this.associatedLayer){if(this.associatedLayer.fields)for(var a=
0,b=this.associatedLayer.fields;a<b.length;a++){var c=b[a];this.getField(c.name)||this.fields.push(c.clone())}a=["popupTemplate","popupEnabled"];b=D.getProperties(this);for(c=0;c<a.length;c++){var d=a[c];this._buddyIsMoreImportant(d)&&(b.setDefaultOrigin(this.associatedLayer.originOf(d)),b.set(d,this.associatedLayer[d]),b.setDefaultOrigin("user"))}}};b.prototype._setCompanionFeatureLayer=function(){var a=this;return this._fetchCompanionFeatureLayer().then(function(b){a.associatedLayer=b})};b.prototype._fetchCompanionFeatureLayer=
function(){var a=this;return-1===["mesh-pyramids","points"].indexOf(this.profile)?g.resolve(null):(this.portalItem&&this.portalItem.isResolved()?this._fetchCompanionFeatureLayerFromRelatedItems(this.portalItem):this._fetchCompanionFeatureLayerFromUrl()).then(function(a){return a.load()}).catch(function(b){null==a.attributeStorageInfo?k.warn("Companion FeatureLayer could not be loaded and no binary attributes found. Popups will not work for this SceneLayer: "+a.title):k.info("Companion FeatureLayer could not be loaded. Falling back to binary attributes for Popups on this SceneLayer: "+
a.title);return null})};b.prototype._fetchCompanionFeatureLayerFromRelatedItems=function(a){var b=this;return a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"}).then(function(a){return(a=a.filter(function(a){return"Feature Service"===a.type})[0])?b._fetchCompanionFeatureLayerFromPortalItem(new M({id:a.id,portal:a.portal})):g.reject()}).catch(function(){return b._fetchCompanionFeatureLayerFromUrl()})};b.prototype._fetchCompanionFeatureLayerFromPortalItem=function(a){var b=
this;return a.load().then(function(a){return b._findMatchingCompanionSublayerUrl(a.url)}).then(function(b){return g.resolve(new q({url:b,portalItem:a}))})};b.prototype._fetchCompanionFeatureLayerFromUrl=function(){return this._findMatchingCompanionSublayerUrl().then(function(a){return g.resolve(new q({url:a}))})};b.prototype._findMatchingCompanionSublayerUrl=function(a){var b=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);if(!b)return g.reject();null==a&&(a=b[1]+"/FeatureServer");
var c=a.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1");a={query:{f:"json"},responseType:"json"};var d=b[1]+"/SceneServer",f=parseInt(b[2],10),b=l(d,a).catch(function(a){return{layers:null}});a=l(c,a);return p([a,b]).then(function(a){var b=a[0];a=a[1];a=a.data&&a.data.layers;b=b.data&&b.data.layers;if(!Array.isArray(b))throw Error("expected layers array");if(Array.isArray(a))for(var d=0;d<Math.min(a.length,b.length);d++){if(a[d].id===f)return c+"/"+b[d].id}else if(f<b.length)return c+"/"+b[f].id;
throw Error("could not find matching associated sublayer");})};b.prototype._buddyIsMoreImportant=function(a){if(!this.associatedLayer)return!1;var b=h.nameToId(this.originOf(a));a=h.nameToId(this.associatedLayer.originOf(a));return null!=a&&a<=h.OriginId.SERVICE?null==b||b<h.OriginId.SERVICE:null!=a&&a<=h.OriginId.PORTAL_ITEM?null==b||b<h.OriginId.PORTAL_ITEM:!1};d([c.shared("esri.layers.SceneLayer")],b.prototype,"declaredClass",void 0);d([c.property({types:{key:"type",base:H.default,typeMap:{selection:I.default}},
json:{origins:{"web-scene":{read:{source:"layerDefinition.featureReduction"},write:{target:"layerDefinition.featureReduction"}}}}})],b.prototype,"featureReduction",void 0);d([c.property({type:[L.default],json:{read:!1,origins:{"web-scene":{read:{source:"layerDefinition.rangeInfos"},write:{target:"layerDefinition.rangeInfos"}}}}})],b.prototype,"rangeInfos",void 0);d([c.property()],b.prototype,"associatedLayer",void 0);d([c.property()],b.prototype,"operationalLayerType",void 0);d([c.property({json:{read:!1},
readOnly:!0})],b.prototype,"type",void 0);d([c.property({type:[J]})],b.prototype,"fields",void 0);d([c.property({readOnly:!0})],b.prototype,"attributeStorageInfo",void 0);d([c.property({readOnly:!0})],b.prototype,"statisticsInfo",void 0);d([c.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],b.prototype,"definitionExpression",void 0);d([c.property({type:Q,json:{origins:{service:{read:{source:"elevationInfo"}}},
read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],b.prototype,"elevationInfo",void 0);d([c.property({type:String,dependsOn:["profile"]})],b.prototype,"geometryType",null);d([c.property(r.labelsVisible)],b.prototype,"labelsVisible",void 0);d([c.property({type:[K],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:t.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",
reader:t.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],b.prototype,"labelingInfo",void 0);d([c.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],b.prototype,"legendEnabled",void 0);d([c.property({types:P.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:u}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:u},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],
b.prototype,"renderer",null);d([c.property({json:{read:!1}})],b.prototype,"cachedDrawingInfo",void 0);d([c.reader("service","cachedDrawingInfo")],b.prototype,"readCachedDrawingInfo",null);d([c.property(r.popupEnabled)],b.prototype,"popupEnabled",void 0);d([c.property({type:A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],b.prototype,"popupTemplate",void 0);d([c.property({type:String,json:{read:!1}})],b.prototype,"objectIdField",void 0);d([c.reader("service","objectIdField",["objectIdField",
"fields"])],b.prototype,"readObjectIdField",null);d([c.property()],b.prototype,"objectIdFilter",void 0);d([c.property({type:String,json:{read:!1}})],b.prototype,"profile",void 0);d([c.reader("service","profile",["store.profile"])],b.prototype,"readProfile",null);d([c.property({readOnly:!0,type:String,json:{read:!1}})],b.prototype,"normalReferenceFrame",void 0);d([c.reader("service","normalReferenceFrame",["store.normalReferenceFrame"])],b.prototype,"readNormalReferenceFrame",null);d([c.property(G.screenSizePerspectiveEnabled)],
b.prototype,"screenSizePerspectiveEnabled",void 0);return b=d([c.subclass()],b)}(c.declared(E,F))});