// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Error ../../core/MultiOriginJSONSupport ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/read ../../core/accessorSupport/write".split(" "),function(c,g,k,f,l,h,m,b,n,d,p,q){g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.title="Layer";return a}k(a,b);c=a;a.prototype.writeListMode=
function(a,e,b,c){c&&"ground"===c.layerContainerType?e[b]=a:a&&q.willPropertyWrite(this,b,{},c)&&(e[b]=a)};a.prototype.writeTitle=function(a,e){e.title=a||"Layer"};a.prototype.writeOperationalLayerType=function(a,e){a&&(e.layerType=a)};a.prototype.readOpacity=function(a,e,b){if(void 0!==e.opacity&&(!b||"web-map"===b.origin||"web-scene"===b.origin))return e.opacity;if((!b||"service"===b.origin)&&e.drawingInfo&&void 0!==e.drawingInfo.transparency)return 1-e.drawingInfo.transparency/100;if(e.layerDefinition&&
e.layerDefinition.drawingInfo&&void 0!==e.layerDefinition.drawingInfo.transparency)return 1-e.layerDefinition.drawingInfo.transparency/100};a.prototype.readVisible=function(a,b){return!!b.visibility};a.prototype.read=function(a,b){var e=this,c=arguments;b&&(b.layer=this);p.readLoadable(this,a,function(b){return e.inherited(c,[a,b])},b);return this};a.prototype.write=function(a,b){if(b&&b.origin){var e=b.origin+"/"+(b.layerContainerType||"operational-layers"),d=c.supportedTypes[e],d=d&&d[this.operationalLayerType];
if("write"!==d&&"readwrite"!==d)return b.messages&&b.messages.push(new h("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+e+"'",{layer:this})),null;if(!this.url&&!r[this.operationalLayerType])return b.messages&&b.messages.push(new h("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' require a url to a service to be written to a '"+b.origin+"'",{layer:this})),null}return this.inherited(arguments,
[a,b])};f([d.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],a.prototype,"id",void 0);f([d.property({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"listMode",void 0);f([d.writer("listMode")],a.prototype,"writeListMode",null);f([d.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],a.prototype,"title",void 0);f([d.writer("title")],a.prototype,
"writeTitle",null);f([d.property({type:String,json:{write:{ignoreOrigin:!0,writer:n.writeOperationalLayerUrl}}})],a.prototype,"url",void 0);f([d.property({type:String,json:{write:{target:"layerType",ignoreOrigin:!0}}})],a.prototype,"operationalLayerType",void 0);f([d.writer("operationalLayerType")],a.prototype,"writeOperationalLayerType",null);f([d.property({type:Number,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0);f([d.reader("opacity",["opacity","layerDefinition.drawingInfo.transparency",
"drawingInfo.transparency"])],a.prototype,"readOpacity",null);f([d.property({type:Boolean,json:{write:{target:"visibility",ignoreOrigin:!0}}})],a.prototype,"visible",void 0);f([d.reader("visible",["visibility"])],a.prototype,"readVisible",null);return a=c=f([d.subclass("esri.layers.mixins.OperationalLayer")],a);var c}(d.declared(l,m));var r={GroupLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,ArcGISFeatureLayer:!0,CSV:!0,VectorTileLayer:!0,KML:!0};(function(d){d.typeModuleMap={ArcGISFeatureLayer:function(){return b.create(function(a){return c(["../FeatureLayer"],
a)})},ArcGISImageServiceLayer:function(){return b.create(function(a){return c(["../ImageryLayer"],a)})},ArcGISImageServiceVectorLayer:function(){return b.resolve(null)},ArcGISMapServiceLayer:function(){return b.create(function(a){return c(["../MapImageLayer"],a)})},ArcGISSceneServiceLayer:function(){return b.create(function(a){return c(["../SceneLayer"],a)})},ArcGISStreamLayer:function(){return b.create(function(a){return c(["../StreamLayer"],a)})},ArcGISTiledElevationServiceLayer:function(){return b.create(function(a){return c(["../ElevationLayer"],
a)})},ArcGISTiledImageServiceLayer:function(){return b.create(function(a){return c(["../TileLayer"],a)})},ArcGISTiledMapServiceLayer:function(){return b.create(function(a){return c(["../TileLayer"],a)})},bingLayer:function(){return b.resolve(null)},CSV:function(){return b.create(function(a){return c(["../CSVLayer"],a)})},GeoRSS:function(){return b.create(function(a){return c(["../GeoRSSLayer"],a)})},GroupLayer:function(){return b.create(function(a){return c(["../GroupLayer"],a)})},IntegratedMeshLayer:function(){return b.create(function(a){return c(["../IntegratedMeshLayer"],
a)})},KML:function(){return b.create(function(a){return c(["../KMLLayer"],a)})},OpenStreetMap:function(){return b.create(function(a){return c(["../OpenStreetMapLayer"],a)})},PointCloudLayer:function(){return b.create(function(a){return c(["../PointCloudLayer"],a)})},VectorTileLayer:function(){return b.create(function(a){return c(["../VectorTileLayer"],a)})},WebTiledLayer:function(){return b.create(function(a){return c(["../WebTileLayer"],a)})},WMS:function(){return b.create(function(a){return c(["../WMSLayer"],
a)})}};d.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISSceneServiceLayer:"readwrite",ArcGISTiledElevationServiceLayer:"read",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",GroupLayer:"readwrite",IntegratedMeshLayer:"readwrite",PointCloudLayer:"readwrite",WebTiledLayer:"readwrite",CSV:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite"},"web-scene/basemap":{ArcGISTiledImageServiceLayer:"readwrite",
ArcGISTiledMapServiceLayer:"readwrite",WebTiledLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",WMS:"readwrite",ArcGISMapServiceLayer:"readwrite"},"web-scene/ground":{ArcGISTiledElevationServiceLayer:"readwrite"},"web-map/operational-layers":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISStreamLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",
ArcGISFeatureLayer:"readwrite",CSV:"readwrite",GeoRSS:"readwrite",KML:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite"},"web-map/basemap":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite",bingLayer:"readwrite"}}})(g||(g={}));return g});