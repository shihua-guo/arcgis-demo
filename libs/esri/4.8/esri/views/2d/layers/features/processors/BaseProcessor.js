// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/Accessor ../../../../../core/HandleOwner ../../../../../core/accessorSupport/decorators ../../../support/Evented".split(" "),function(e,f,g,c,h,k,b,l){Object.defineProperty(f,"__esModule",{value:!0});e=function(d){function a(){return null!==d&&d.apply(this,arguments)||this}g(a,d);a.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])};
a.prototype.destroy=function(){};Object.defineProperty(a.prototype,"supportsTileUpdates",{get:function(){return!1},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"spatialReference",{get:function(){var a=this.get("tileStore.spatialReference");return a&&a.toJSON()||null},enumerable:!0,configurable:!0});c([b.property({readOnly:!0})],a.prototype,"supportsTileUpdates",null);c([b.property({constructOnly:!0})],a.prototype,"remoteClient",void 0);c([b.property({constructOnly:!0})],a.prototype,
"service",void 0);c([b.property({dependsOn:["tileStore.spatialReference"]})],a.prototype,"spatialReference",null);c([b.property({constructOnly:!0})],a.prototype,"tileStore",void 0);return a=c([b.subclass()],a)}(b.declared(h,k,l.default));f.default=e});