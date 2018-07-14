// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators ../../geometry/support/jsonUtils".split(" "),function(m,n,f,b,g,h,k,c,l){var d=k.getLogger("esri.tasks.support.ProjectParameters");return function(e){function a(a){a=e.call(this)||this;a.geometries=null;a.outSpatialReference=null;a.transformation=null;a.transformForward=null;return a}f(a,e);Object.defineProperty(a.prototype,
"outSR",{get:function(){d.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead.");return this.outSpatialReference},set:function(a){d.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead.");this.outSpatialReference=a},enumerable:!0,configurable:!0});a.prototype.toJSON=function(){var a=this.geometries.map(function(a){return a.toJSON()}),c=this.geometries[0],b={};b.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON());b.inSR=
c.spatialReference.wkid||JSON.stringify(c.spatialReference.toJSON());b.geometries=JSON.stringify({geometryType:l.getJsonType(c),geometries:a});this.transformation&&(b.transformation=this.transformation.wkid||JSON.stringify(this.transformation));h.isDefined(this.transformForward)&&(b.transformForward=this.transformForward);return b};b([c.property()],a.prototype,"geometries",void 0);b([c.property({json:{read:{source:"outSR"}}})],a.prototype,"outSpatialReference",void 0);b([c.property({json:{read:!1}})],
a.prototype,"outSR",null);b([c.property()],a.prototype,"transformation",void 0);b([c.property()],a.prototype,"transformForward",void 0);return a=b([c.subclass("esri.tasks.support.ProjectParameters")],a)}(c.declared(g))});