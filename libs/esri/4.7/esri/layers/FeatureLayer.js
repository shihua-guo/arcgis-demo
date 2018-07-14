// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper dojo/_base/lang ../Graphic ../PopupTemplate ../request ../core/Collection ../core/Error ../core/Handles ../core/kebabDictionary ../core/lang ../core/Logger ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ../geometry/support/normalizeUtils ./Layer ./graphics/sources/MemorySource ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/arcgisLayerUrl ./support/commonProperties ./support/FeatureProcessing ./support/FeatureReduction ./support/FeatureReductionSelection ./support/FeatureTemplate ./support/FeatureType ./support/Field ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ./support/Relationship ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/styleUtils ../renderers/support/typeUtils ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleMarkerSymbol ../symbols/support/ElevationInfo ../symbols/support/jsonUtils ../tasks/support/FeatureSet ../tasks/support/Query".split(" "),
function(k,ra,L,M,e,q,u,A,N,B,C,g,O,P,Q,R,S,h,v,d,T,U,D,V,W,w,X,Y,Z,aa,ba,l,x,ca,da,ea,E,F,fa,y,ga,G,ha,H,ia,ja,ka,la,ma,na,oa,pa,z,qa,m){function I(d){return d&&null!=d.applyEdits}function r(d){return d&&d.isInstanceOf&&d.isInstanceOf(w)}function f(d,c,a){return!(d&&d.hasOwnProperty(c)?!d[c]:!a)}var K=P({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),t=R.getLogger("esri.layers.FeatureLayer");
return function(J){function c(a){a=J.call(this)||this;a._handles=new O;a.featureReduction=null;a.copyright=null;a.displayField=null;a.definitionExpression=null;a.dynamicDataSource=null;a.editFieldsInfo=null;a.elevationInfo=null;a.fields=null;a.fullExtent=null;a.gdbVersion=null;a.geometryType=null;a.hasM=!1;a.hasZ=!1;a.heightModelInfo=null;a.historicMoment=null;a.isTable=!1;a.labelsVisible=!1;a.labelingInfo=null;a.layerId=void 0;a.legendEnabled=!0;a.maxRecordCount=void 0;a.minScale=0;a.maxScale=0;
a.objectIdField=null;a.operationalLayerType="ArcGISFeatureLayer";a.popupEnabled=!0;a.popupTemplate=null;a.relationships=null;a.returnM=!1;a.returnZ=!1;a.screenSizePerspectiveEnabled=!0;a.serviceDefinitionExpression=null;a.spatialReference=D.WGS84;a.templates=null;a.timeInfo=null;a.title=null;a.sublayerTitleMode="item-title";a.trackIdField=null;a.type="feature";a.typeIdField=null;a.types=null;a.userIsAdmin=!1;a.version=void 0;a.visible=!0;return a}M(c,J);c.prototype.normalizeCtorArgs=function(a,b){return"string"===
typeof a?u.mixin({},{url:a},b):a};c.prototype.load=function(){var a=this,b=this.source&&(Array.isArray(this.source)||r(this.source));if(this.portalItem&&b)this.addResolvingPromise(h.resolve());else return b=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]}).always(function(){if(a.url&&null==a.layerId&&/FeatureServer\/*$/i.test(a.url))return a._fetchFirstLayerId().then(function(b){null!=b&&(a.layerId=b)})}).then(function(){if(!a.url&&!a._hasMemorySource())throw new g("feature-layer:missing-url-or-source",
"Feature layer must be created with either a url or a source");return a.createGraphicsSource().then(a._initLayerProperties.bind(a))}),this.addResolvingPromise(b),this.when()};Object.defineProperty(c.prototype,"allRenderers",{get:function(){return this._getAllRenderers(this.renderer)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"capabilities",{get:function(){var a=this._get("capabilities");return a||!this.loaded||this.hasService?a:{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},
operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!0,supportsDelete:!0,supportsEditing:!0,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!0},query:{supportsStatistics:!1,supportsCentroid:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!0,supportsGeometryProperties:!1,supportsOrderBy:!1,supportsPagination:!1,supportsQuantization:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsQueryByOthers:!1,
supportsHistoricMoment:!1},queryRelated:{supportsPagination:!1,supportsCount:!1,supportsOrderBy:!1},editing:{supportsGeometryUpdate:!0,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}},enumerable:!0,configurable:!0});c.prototype.readCapabilities=function(a,b){b=b.layerDefinition||b;return{data:this._readDataCapabilities(b),operations:this._readOperationsCapabilities(b.capabilities||
a,b),query:this._readQueryCapabilities(b),queryRelated:this._readQueryRelatedCapabilities(b),editing:this._readEditingCapabilities(b)}};Object.defineProperty(c.prototype,"hasAttachments",{get:function(){return this.hasService&&this._get("hasAttachments")||!1},enumerable:!0,configurable:!0});c.prototype.readIsTable=function(a,b){b=b&&b.layerDefinition||b;return"Table"===b.type};Object.defineProperty(c.prototype,"hasService",{get:function(){return!this._hasMemorySource()},enumerable:!0,configurable:!0});
c.prototype.readMinScale=function(a,b){return b.effectiveMinScale||a||0};c.prototype.readMaxScale=function(a,b){return b.effectiveMaxScale||a||0};c.prototype.readObjectIdFieldFromService=function(a,b){b=b.layerDefinition||b;if(b.objectIdField)return b.objectIdField;if(b.fields)for(a=0,b=b.fields;a<b.length;a++){var c=b[a];if("esriFieldTypeOID"===c.type)return c.name}};Object.defineProperty(c.prototype,"outFields",{get:function(){var a=this,b=this._userOutFields,c=this.requiredFields,b=b&&b.slice(0),
c=c&&c.slice(0);b?-1===b.indexOf("*")&&c.forEach(function(a){-1===b.indexOf(a)&&b.push(a)}):b=c;-1!==b.indexOf("*")?b=["*"]:this.loaded&&(b=b.filter(function(b){var c=!!a.getField(b,a.fields);b&&!c&&t.error("[outFields] Invalid field: ",b);return c},this),b=b.map(function(b){return a.getField(b,a.fields).name},this),b=b.filter(function(a,b,c){return c.indexOf(a)===b}));return b},set:function(a){var b=this,c=this.requiredFields&&this.requiredFields.slice(0);a?-1===a.indexOf("*")&&c.forEach(function(b){-1===
a.indexOf(b)&&a.push(b)}):a=c;this.loaded&&(a=a.filter(function(a){var c="*"===a||!!b.getField(a,b.fields);a&&!c&&t.error("[outFields] Invalid field: ",a);return c},this),a=a.map(function(a){return"*"===a?a:b.getField(a,b.fields).name},this));this._userOutFields=a},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"parsedUrl",{get:function(){var a=this.url?v.urlToObject(this.url):null;null!=this.layerId&&null!=a&&(a.path=v.join(a.path,this.layerId.toString()));return a},enumerable:!0,
configurable:!0});Object.defineProperty(c.prototype,"renderer",{set:function(a){var b=this._getAllRenderers(a);y.fixRendererFields(b,this.fields);this._set("renderer",a)},enumerable:!0,configurable:!0});c.prototype.readRenderer=function(a,b,c){b=b.layerDefinition||b;var d=b.drawingInfo&&b.drawingInfo.renderer||void 0,n,e;if(d)(n=ja.read(d,b,c)||void 0)||t.error("Failed to create renderer",{rendererDefinition:b.drawingInfo.renderer,layer:this,context:c});else if(b.defaultSymbol)z.read(b.defaultSymbol,
b,c),b.types&&b.types.length?(n=new ia({defaultSymbol:e,field:b.typeIdField}),b.types.forEach(function(a){d.addUniqueValueInfo(a.id,z.read(a.symbol,a,c))})):n=new H({symbol:e});else if("Table"!==b.type){switch(b.geometryType){case "esriGeometryPoint":case "esriGeometryMultipoint":e=new oa;break;case "esriGeometryPolyline":e=new na;break;case "esriGeometryPolygon":e=new ma}n=e&&new H({symbol:e})}return n};Object.defineProperty(c.prototype,"requiredFields",{get:function(){var a=this.timeInfo,b=[],c=
[],a=[this.objectIdField,this.typeIdField,this.editFieldsInfo&&this.editFieldsInfo.creatorField,a&&a.startTimeField,a&&a.endTimeField,this.trackIdField];this.allRenderers.forEach(function(a){b=b.concat(a.requiredFields)});this.labelingInfo&&this.labelingInfo.length&&this.labelingInfo.forEach(function(a){c=c.concat(a.requiredFields)});var c=c.map(function(a){return a.replace(/['"]+/g,"")}),a=a.concat(b),a=a.concat(c),d=this.elevationInfo&&this.elevationInfo.featureExpressionInfo;d&&(a=a.concat(d.requiredFields));
this.popupTemplate&&(a=a.concat(this.popupTemplate.requiredFields));return a.filter(function(a,b,c){return!!a&&c.indexOf(a)===b&&"function"!==typeof a})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"source",{set:function(a){var b=this._get("source");b!==a&&(r(b)&&this._resetMemorySource(b),r(a)&&this._initMemorySource(a),this._set("source",a))},enumerable:!0,configurable:!0});c.prototype.castSource=function(a){return a?Array.isArray(a)||a&&a.isInstanceOf&&a.isInstanceOf(C)?new w({layer:this,
items:a}):a:null};c.prototype.readSource=function(a,b){a=qa.fromJSON(b.featureSet);return new w({layer:this,items:a&&a.features||[]})};c.prototype.readTemplates=function(a,b){var c=b.editFieldsInfo;b=c&&c.creatorField;c=c&&c.editorField;a=a&&a.map(function(a){return E.fromJSON(a)});this._fixTemplates(a,b);this._fixTemplates(a,c);return a};c.prototype.readTitle=function(a,b){a=b.layerDefinition&&b.layerDefinition.name||b.name;b=b.title||b.layerDefinition&&b.layerDefinition.title;if(a){b=this.portalItem&&
this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?l.titleFromUrlAndName(this.url,a):a;if(a=a||this.url&&l.parse(this.url).title)return"item-title-and-service-name"===this.sublayerTitleMode&&b&&(a=b+" - "+a),l.cleanTitle(a)}else if("item-title"===this.sublayerTitleMode&&b)return b};c.prototype.readTitleFromWebMap=function(a,b){return(a=b.layerDefinition&&b.layerDefinition.name)?a:b.title};c.prototype.readTypeIdField=function(a,b){b=b.layerDefinition||b;if(a=b.typeIdField)if(b=
this.getField(a,b.fields))a=b.name;return a};c.prototype.readTypes=function(a,b){var c=this;b=b.layerDefinition||b;a=b.types;var d=(b=b.editFieldsInfo)&&b.creatorField,e=b&&b.editorField;return a&&a.map(function(a){a=F.fromJSON(a);c._fixTemplates(a.templates,d);c._fixTemplates(a.templates,e);return a})};Object.defineProperty(c.prototype,"url",{set:function(a){a=l.sanitizeUrlWithLayerId(this,a,t);this._set("url",a.url);null!=a.layerId&&this._set("layerId",a.layerId)},enumerable:!0,configurable:!0});
c.prototype.writeUrl=function(a,b,c,d){l.writeUrlWithLayerId(this,a,b)};c.prototype.readVersion=function(a,b){b=b.layerDefinition||b;return b.currentVersion?b.currentVersion:b.hasOwnProperty("capabilities")||b.hasOwnProperty("drawingInfo")||b.hasOwnProperty("hasAttachments")||b.hasOwnProperty("htmlPopupType")||b.hasOwnProperty("relationships")||b.hasOwnProperty("timeInfo")||b.hasOwnProperty("typeIdField")||b.hasOwnProperty("types")?10:9.3};c.prototype.readVisible=function(a,b){if(b.layerDefinition&&
null!=b.layerDefinition.defaultVisibility)return!!b.layerDefinition.defaultVisibility;if(null!=b.visibility)return!!b.visibility};c.prototype.applyEdits=function(a){var b=this;return this.load().then(function(){return I(b.source)?b._processApplyEditsParams(a):h.reject(new g("FeatureLayer","Layer source does not support applyEdits capability"))}).then(function(a){if(I(b.source))return b.source.applyEdits(a).then(function(a){var c=function(a){return a.filter(function(a){return!a.error}).map(Q.clone)},
c={addedFeatures:c(a.addFeatureResults),updatedFeatures:c(a.updateFeatureResults),deletedFeatures:c(a.deleteFeatureResults)};(c.addedFeatures.length||c.updatedFeatures.length||c.deletedFeatures.length)&&b.emit("edits",c);return a})})};c.prototype.createGraphicsSource=function(){var a=this;return this._hasMemorySource()?(this.emit("graphics-source-create",{graphicsSource:this.source}),this.source.when()):h.create(function(a){return k(["./graphics/sources/FeatureLayerSource"],a)}).then(function(b){return new b({layer:a})}).then(function(a){return a.when()}).then(function(b){a.emit("graphics-source-create",
{graphicsSource:b});return b})};c.prototype.createGraphicsController=function(a){var b=this,c=a.layerView,d=C.ofType(A),e=this.source,f=r(e),g=u.mixin(a.options||{},{layer:this,layerView:c,graphics:f?e:new d});return(f?h.create(function(a){return k(["./graphics/controllers/MemoryController"],a)}):"2d"===c.view.type?h.create(function(a){return k(["./graphics/controllers/AutoController2D"],a)}):h.create(function(a){return k(["./graphics/controllers/SnapshotController"],a)})).then(function(a){return new a(g)}).then(function(a){b.emit("graphics-controller-create",
{graphicsController:a});return a.when()})};c.prototype.createQuery=function(){var a=new m,b=this.get("capabilities.data");a.gdbVersion=this.gdbVersion;a.historicMoment=this.historicMoment;a.returnGeometry=!0;a.returnZ=b&&b.supportsZ&&this.returnZ||null;a.returnM=b&&b.supportsM&&this.returnM||null;a.outFields=this.outFields;a.where=this.definitionExpression||"1\x3d1";a.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null;return a};c.prototype.getFeatureType=function(a){var b=this.typeIdField;
if(!b||!a)return null;var c=a.attributes?a.attributes[b]:void 0;if("undefined"===typeof c)return null;var d=null;this.types.some(function(a){a.id.toString()===c.toString()&&(d=a);return!!d});return d};c.prototype.getFieldDomain=function(a,b){var c=this,d,e=!1;b=(b=b&&b.feature)&&b.attributes;var f=this.typeIdField&&b&&b[this.typeIdField];null!=f&&this.types&&(e=this.types.some(function(b){return b.id==f?((d=b.domains&&b.domains[a])&&"inherited"===d.type&&(d=c._getLayerDomain(a)),!0):!1}));e||d||(d=
this._getLayerDomain(a));return d};c.prototype.getField=function(a,b){var c=this.processing?this.fields.concat(this.processing.fields):this.fields;return y.getField(a,b||c)};c.prototype.graphicChanged=function(a){this.emit("graphic-update",a)};c.prototype.queryFeatureAttachments=function(a){var b=this;return this.load().then(function(){if(!a)return h.reject(new g("FeatureLayer","A feature is required to query attachments"));var c=b.layerId,d=b.objectIdField,e=b.token,f=b.url;if(!b.get("capabilities.data.supportsAttachment"))return h.reject(new g("FeatureLayer",
"this layer doesn't support attachments"));var p=a.attributes;if(!p)return h.reject(new g("FeatureLayer","'attributes' are required on a feature to query attachments"));p=p[d];if(!p)return h.reject(new g("FeatureLayer","feature is missing the identifying attribute "+d));var k=f+"/"+c+"/"+p+"/attachments";return B(k,{query:{f:"json",token:e},callbackParamName:"callback",responseType:"json"}).then(function(a){return a.data.attachmentInfos.map(function(a){return L({},a,{url:v.addProxy(k+"/"+a.id+(e?
"?token\x3d"+e:""))})})})})};c.prototype.queryFeatures=function(a){var b=this;return this.load().then(function(){if(!b.source.queryFeatures)return h.reject(new g("FeatureLayer","Layer source does not support queryFeatures capability"))}).then(function(){return b.source.queryFeatures(a||b.createQuery())}).then(function(a){if(a&&a.features){var c=b.popupTemplate;a.features.forEach(function(a){a.popupTemplate=c;a.layer=b;a.sourceLayer=b})}return a})};c.prototype.queryObjectIds=function(a){var b=this;
return this.load().then(function(){return b.source.queryObjectIds?b.source.queryObjectIds(a||b.createQuery()):h.reject(new g("FeatureLayer","Layer source does not support queryObjectIds capability"))})};c.prototype.queryFeatureCount=function(a){var b=this;return this.load().then(function(){return b.source.queryFeatureCount?b.source.queryFeatureCount(a||b.createQuery()):h.reject(new g("FeatureLayer","Layer source does not support queryFeatureCount capability"))})};c.prototype.queryExtent=function(a){var b=
this;return this.load().then(function(){return b.source.queryExtent?b.source.queryExtent(a||b.createQuery()):h.reject(new g("FeatureLayer","Layer source does not support queryExtent capability"))})};c.prototype.read=function(a,b){switch(b&&b.origin){case "web-scene":this.inherited(arguments,[{returnZ:!0},b])}var c=a.featureCollection;if(c){var d=c.layers;d&&1===d.length&&(this.inherited(arguments,[d[0],b]),null!=c.showLegend&&this.inherited(arguments,[{showLegend:c.showLegend},b]))}this.inherited(arguments,
[a,b]);return this};c.prototype.write=function(a,b){if(b&&"web-scene"===b.origin&&b.messages){if(!this.url)return b.messages.push(new g("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' require a url to a service to be written to web scenes",{layer:this})),null;if(this.isTable)return b.messages.push(new g("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' using a Table source cannot written to web scenes",{layer:this})),
null}return this.inherited(arguments)};c.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return h.create(function(a){return k(["../views/2d/layers/FeatureLayerView2D"],a)});case "3d":return h.create(function(a){return k(["../views/3d/layers/FeatureLayerView3D"],a)})}};c.prototype._getLayerDomain=function(a){if(!this.fields)return null;var b=null;this.fields.some(function(c){c.name===a&&(b=c.domain);return!!b});return b};c.prototype._fetchFirstLayerId=function(){return B(this.url,
{query:{f:"json"},callbackParamName:"callback",responseType:"json"}).then(function(a){if((a=a.data)&&Array.isArray(a.layers)&&0<a.layers.length)return a.layers[0].id})};c.prototype._initLayerProperties=function(a){var b=this;this.source||(this.source=a);a.url&&(this.url=a.url);a.layerDefinition&&this.read(a.layerDefinition,{origin:"service",url:this.parsedUrl});this._verifySource();this._verifyFields();this._addSymbolUrlTokens();y.fixRendererFields(this._getAllRenderers(this.renderer),this.fields);
this.watch("token",function(){b._addSymbolUrlTokens()});return ka.loadStyleRenderer(this,{origin:"service"})};c.prototype._findUrlBasedSymbols=function(){var a=this.renderer;if(!a)return[];var b=[];a.symbol&&b.push(a.symbol);a.defaultSymbol&&b.push(a.defaultSymbol);(a=a.classBreakInfos||a.uniqueValueInfos)&&a.forEach(function(a){a.symbol&&b.push(a.symbol)});return b.filter(function(a){return!!a.url})};c.prototype._addSymbolUrlTokens=function(){var a=this.token;!this._hasMemorySource()&&a&&this._findUrlBasedSymbols().forEach(function(b){var c=
b.url;if(c&&-1!==c.search(/https?\:/i)&&!/[?&]token=/.test(c)){var d=-1===c.indexOf("?")?"?":"\x26";b.url=c+d+"token\x3d"+a}})};c.prototype._getAllRenderers=function(a){if(!a)return[];var b=[];[a,a.trackRenderer,a.observationRenderer,a.latestObservationRenderer].forEach(function(a){a&&(b.push(a),a.rendererInfos&&a.rendererInfos.forEach(function(a){a.renderer&&b.push(a.renderer)}))});return b};c.prototype._verifyFields=function(){var a=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||
console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+a+")");this.isTable||this._hasMemorySource()||-1!==a.search(/\/FeatureServer\//i)||this.fields&&this.fields.some(function(a){return"geometry"===a.type})||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+a+")")};c.prototype._fixTemplates=function(a,b){a&&a.forEach(function(a){(a=a.prototype&&a.prototype.attributes)&&
b&&delete a[b]})};c.prototype._verifySource=function(){var a=this;if(this._hasMemorySource()){if(this.url)throw new g("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url");var b=["geometryType","fields","objectIdField"];if(!b.every(function(b){return null!=a[b]}))throw new g("feature-layer:missing-property","FeatureLayer created as feature collection requires properties: "+b.join(),{requiredProperties:b});}else{if(this.isTable)throw new g("feature-layer:source-type-not-supported",
"The table feature service type is not yet supported",{sourceType:"Table"});if(!this.url)throw new g("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source");}};c.prototype._initMemorySource=function(a){var b=this;a.forEach(function(a){a.layer=b;a.sourceLayer=b});this._handles.add([a.on("after-add",function(a){a.item.layer=b;a.item.sourceLayer=b}),a.on("after-remove",function(a){a.item.layer=null;a.item.sourceLayer=null})],"fl-source")};c.prototype._resetMemorySource=
function(a){a.forEach(function(a){a.layer=null;a.sourceLayer=null});this._handles.remove("fl-source")};c.prototype._hasMemorySource=function(){return!(this.url||!this.source)};c.prototype._readDataCapabilities=function(a){return{supportsAttachment:f(a,"hasAttachments",!1),supportsM:f(a,"hasM",!1),supportsZ:f(a,"hasZ",!1)}};c.prototype._readOperationsCapabilities=function(a,b){a=a?a.toLowerCase().split(",").map(function(a){return a.trim()}):[];var c=-1!==a.indexOf("editing"),d=c&&-1!==a.indexOf("create"),
e=c&&-1!==a.indexOf("delete"),g=c&&-1!==a.indexOf("update");!c||d||e||g||(d=e=g=!0);return{supportsCalculate:f(b,"supportsCalculate",!1),supportsTruncate:f(b,"supportsTruncate",!1),supportsValidateSql:f(b,"supportsValidateSql",!1),supportsAdd:d,supportsDelete:e,supportsEditing:c,supportsQuery:-1!==a.indexOf("query"),supportsResizeAttachments:f(b,"supportsAttachmentsResizing",!1),supportsUpdate:g}};c.prototype._readQueryCapabilities=function(a){var b=a.advancedQueryCapabilities,c=a.ownershipBasedAccessControlForFeatures,
d=a.archivingInfo;return{supportsStatistics:f(b,"supportsStatistics",a.supportsStatistics),supportsCentroid:f(b,"supportsReturningGeometryCentroid",!1),supportsDistance:f(b,"supportsQueryWithDistance",!1),supportsDistinct:f(b,"supportsDistinct",a.supportsAdvancedQueries),supportsExtent:f(b,"supportsReturningQueryExtent",!1),supportsGeometryProperties:f(b,"supportsReturningGeometryProperties",!1),supportsOrderBy:f(b,"supportsOrderBy",a.supportsAdvancedQueries),supportsPagination:f(b,"supportsPagination",
!1),supportsQuantization:f(a,"supportsCoordinatesQuantization",!1),supportsResultType:f(b,"supportsQueryWithResultType",!1),supportsSqlExpression:f(b,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:f(a,"useStandardizedQueries",!1),supportsQueryByOthers:f(c,"allowOthersToQuery",!0),supportsHistoricMoment:f(d,"supportsQueryWithHistoricMoment",!1)}};c.prototype._readQueryRelatedCapabilities=function(a){a=a.advancedQueryCapabilities;var b=f(a,"supportsAdvancedQueryRelated",!1);return{supportsPagination:f(a,
"supportsQueryRelatedPagination",!1),supportsCount:b,supportsOrderBy:b}};c.prototype._readEditingCapabilities=function(a){var b=a.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:f(a,"allowGeometryUpdates",!0),supportsGlobalId:f(a,"supportsApplyEditsWithGlobalIds",!1),supportsRollbackOnFailure:f(a,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:f(a,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:f(a,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:f(b,
"allowAnonymousToDelete",!0),supportsDeleteByOthers:f(b,"allowOthersToDelete",!0),supportsUpdateByAnonymous:f(b,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:f(b,"allowOthersToUpdate",!0)}};c.prototype._processApplyEditsParams=function(a){if(!a)return h.reject(new g("feature-layer:missing-parameters","'addFeatures', 'updateFeatures' or 'deleteFeatures' parameter is required"));a=u.mixin({},a);a.addFeatures=a.addFeatures||[];a.updateFeatures=a.updateFeatures||[];a.deleteFeatures=a.deleteFeatures||
[];if(a.addFeatures.length||a.updateFeatures.length||a.deleteFeatures.length){var b=function(a){var b=new A;b.geometry=a.geometry;b.attributes=a.attributes;return b};a.addFeatures=a.addFeatures.map(b);a.updateFeatures=a.updateFeatures.map(b);return this._normalizeGeometries(a)}return h.reject(new g("feature-layer:missing-parameters","'addFeatures', 'updateFeatures' or 'deleteFeatures' parameter is required"))};c.prototype._normalizeGeometries=function(a){var b=a.addFeatures,c=a.updateFeatures,d=b.concat(c).map(function(a){return a.geometry});
return V.normalizeCentralMeridian(d).then(function(d){var e=b.length,f=c.length;d.slice(0,e).forEach(function(b,c){a.addFeatures[c].geometry=b});d.slice(e,e+f).forEach(function(b,c){a.updateFeatures[c].geometry=b});return a})};e([d.property({types:{key:"type",base:da.default,typeMap:{selection:ea.default}},json:{origins:{"web-scene":{read:{source:"layerDefinition.featureReduction"},write:{target:"layerDefinition.featureReduction"}}}}})],c.prototype,"featureReduction",void 0);e([d.property({readOnly:!0,
dependsOn:["loaded","renderer","fields"]})],c.prototype,"allRenderers",null);e([d.property({readOnly:!0,dependsOn:["loaded"]})],c.prototype,"capabilities",null);e([d.reader("capabilities","layerDefinition.capabilities layerDefinition.advancedQueryCapabilities layerDefinition.archivingInfo layerDefinition.supportsStatistics layerDefinition.supportsAdvancedQueries layerDefinition.hasAttachments layerDefinition.hasM layerDefinition.hasZ layerDefinition.supportsCalculate layerDefinition.supportsTruncate layerDefinition.supportsValidateSql layerDefinition.supportsCoordinatesQuantization layerDefinition.useStandardizedQueries layerDefinition.ownershipBasedAccessControlForFeatures layerDefinition.allowGeometryUpdates layerDefinition.supportsApplyEditsWithGlobalIds layerDefinition.supportsRollbackOnFailureParameter layerDefinition.allowUpdateWithoutMValues layerDefinition.supportsAttachmentsByUploadId".split(" ")),
d.reader("service","capabilities","advancedQueryCapabilities archivingInfo supportsStatistics supportsAdvancedQueries hasAttachments hasM hasZ supportsAttachmentsResizing supportsCalculate supportsTruncate supportsValidateSql supportsCoordinatesQuantization useStandardizedQueries ownershipBasedAccessControlForFeatures allowGeometryUpdates supportsApplyEditsWithGlobalIds supportsRollbackOnFailureParameter allowUpdateWithoutMValues supportsAttachmentsByUploadId capabilities".split(" "))],c.prototype,
"readCapabilities",null);e([d.property({type:String,json:{read:{source:"layerDefinition.copyrightText"},origins:{service:{read:{source:"copyrightText"}}}}})],c.prototype,"copyright",void 0);e([d.property({type:String,json:{read:{source:"layerDefinition.displayField"},origins:{service:{read:{source:"displayField"}}}}})],c.prototype,"displayField",void 0);e([d.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],
c.prototype,"definitionExpression",void 0);e([d.property({readOnly:!0,json:{read:z.read}})],c.prototype,"defaultSymbol",void 0);e([d.property()],c.prototype,"dynamicDataSource",void 0);e([d.property({readOnly:!0})],c.prototype,"editFieldsInfo",void 0);e([d.property({type:pa,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],c.prototype,"elevationInfo",void 0);
e([d.property({type:[fa],json:{origins:{service:{read:!0}},read:{source:"layerDefinition.fields"}}})],c.prototype,"fields",void 0);e([d.property({type:T,json:{origins:{service:{read:{source:"extent"}}},read:{source:"layerDefinition.extent"}}})],c.prototype,"fullExtent",void 0);e([d.property()],c.prototype,"gdbVersion",void 0);e([d.property({json:{origins:{service:{read:K.read}},read:{source:"layerDefinition.geometryType",reader:K.read}}})],c.prototype,"geometryType",void 0);e([d.property({readOnly:!0,
dependsOn:["loaded"],json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasAttachments"}}})],c.prototype,"hasAttachments",null);e([d.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}})],c.prototype,"hasM",void 0);e([d.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasZ"}}})],c.prototype,"hasZ",void 0);e([d.property({readOnly:!0,type:U})],c.prototype,"heightModelInfo",void 0);e([d.property({type:Date})],
c.prototype,"historicMoment",void 0);e([d.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],c.prototype,"id",void 0);e([d.property({readOnly:!0})],c.prototype,"isTable",void 0);e([d.reader("service","isTable",["type"]),d.reader("isTable",["layerDefinition.type"])],c.prototype,"readIsTable",null);e([d.property({dependsOn:["loaded","url","source"],readOnly:!0})],c.prototype,"hasService",null);e([d.property(x.labelsVisible)],c.prototype,"labelsVisible",void 0);e([d.property({type:[ga],
json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:G.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:G.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],c.prototype,"labelingInfo",void 0);e([d.property({type:Number,json:{origins:{service:{read:{source:"id"}}},read:!1}})],c.prototype,"layerId",void 0);e([d.property({type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"}}})],
c.prototype,"legendEnabled",void 0);e([d.property({type:Number,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.maxRecordCount"}}})],c.prototype,"maxRecordCount",void 0);e([d.property({type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}})],c.prototype,"minScale",void 0);e([d.reader("service","minScale",["minScale","effectiveMinScale"])],c.prototype,"readMinScale",null);e([d.property({type:Number,
json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}})],c.prototype,"maxScale",void 0);e([d.reader("service","maxScale",["maxScale","effectiveMaxScale"])],c.prototype,"readMaxScale",null);e([d.property({type:String})],c.prototype,"objectIdField",void 0);e([d.reader("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"]),d.reader("service","objectIdField",["objectIdField","fields"])],c.prototype,"readObjectIdFieldFromService",
null);e([d.property()],c.prototype,"operationalLayerType",void 0);e([d.property({dependsOn:["requiredFields"]})],c.prototype,"outFields",null);e([d.property({readOnly:!0,dependsOn:["layerId"]})],c.prototype,"parsedUrl",null);e([d.property(x.popupEnabled)],c.prototype,"popupEnabled",void 0);e([d.property({type:N,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],c.prototype,"popupTemplate",void 0);e([d.property({type:ca})],c.prototype,"processing",void 0);e([d.property({type:[ha],readOnly:!0})],
c.prototype,"relationships",void 0);e([d.property({types:la.types,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],c.prototype,"renderer",null);e([d.reader("service","renderer",["drawingInfo.renderer","defaultSymbol","type"]),d.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol","layerDefinition.type"])],c.prototype,"readRenderer",null);e([d.property({readOnly:!0,dependsOn:["allRenderers",
"labelingInfo","elevationInfo.featureExpressionInfo","popupTemplate.requiredFields"]})],c.prototype,"requiredFields",null);e([d.property({type:Boolean})],c.prototype,"returnM",void 0);e([d.property({type:Boolean})],c.prototype,"returnZ",void 0);e([d.property(x.screenSizePerspectiveEnabled)],c.prototype,"screenSizePerspectiveEnabled",void 0);e([d.property()],c.prototype,"source",null);e([d.cast("source")],c.prototype,"castSource",null);e([d.reader("portal-item","source",["featureSet"]),d.reader("web-map",
"source",["featureSet"])],c.prototype,"readSource",null);e([d.property({readOnly:!0,json:{origins:{service:{read:{source:"definitionExpression"}}}}})],c.prototype,"serviceDefinitionExpression",void 0);e([d.property({type:D,json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:{source:"layerDefinition.extent.spatialReference"}}})],c.prototype,"spatialReference",void 0);e([d.property({type:[E]})],c.prototype,"templates",void 0);e([d.reader("templates",["editFieldsInfo","creatorField",
"editorField","templates"])],c.prototype,"readTemplates",null);e([d.property()],c.prototype,"timeInfo",void 0);e([d.property()],c.prototype,"title",void 0);e([d.reader("service","title",["name"]),d.reader("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],c.prototype,"readTitle",null);e([d.reader("web-map","title",["layerDefinition.name","title"])],c.prototype,"readTitleFromWebMap",null);e([d.property({type:String})],c.prototype,"sublayerTitleMode",void 0);e([d.property({type:String,
readOnly:!0,json:{read:{source:"timeInfo.trackIdField"}}})],c.prototype,"trackIdField",void 0);e([d.property({json:{read:!1}})],c.prototype,"type",void 0);e([d.property({type:String,readOnly:!0})],c.prototype,"typeIdField",void 0);e([d.reader("service","typeIdField"),d.reader("typeIdField",["layerDefinition.typeIdField"])],c.prototype,"readTypeIdField",null);e([d.property({type:[F]})],c.prototype,"types",void 0);e([d.reader("service","types",["types"]),d.reader("types",["layerDefinition.types"])],
c.prototype,"readTypes",null);e([d.property({type:String})],c.prototype,"url",null);e([d.writer("url")],c.prototype,"writeUrl",null);e([d.property({readOnly:!0})],c.prototype,"userIsAdmin",void 0);e([d.property({json:{origins:{"portal-item":{read:!1}}}})],c.prototype,"version",void 0);e([d.reader("service","version","currentVersion capabilities drawingInfo hasAttachments htmlPopupType relationships timeInfo typeIdField types".split(" ")),d.reader("version","layerDefinition.currentVersion layerDefinition.capabilities layerDefinition.drawingInfo layerDefinition.hasAttachments layerDefinition.htmlPopupType layerDefinition.typeIdField layerDefinition.types".split(" "))],
c.prototype,"readVersion",null);e([d.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],c.prototype,"visible",void 0);e([d.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],c.prototype,"readVisible",null);e([q(0,d.cast(m))],c.prototype,"queryFeatures",null);e([q(0,d.cast(m))],c.prototype,"queryObjectIds",null);e([q(0,d.cast(m))],c.prototype,"queryFeatureCount",null);e([q(0,d.cast(m))],c.prototype,"queryExtent",
null);return c=e([d.subclass("esri.layers.FeatureLayer")],c)}(d.declared(W,Y,Z,ba,aa,X,S))});