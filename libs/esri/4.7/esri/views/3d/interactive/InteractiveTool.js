// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),function(g,h,e,d,f,b){return function(c){function a(){return null!==c&&c.apply(this,arguments)||this}e(a,c);a.prototype.start=function(){this.view.activeTool=this};a.prototype.stop=function(){this.view.ready&&this.view.activeTool===this&&(this.view.activeTool=null)};a.prototype.activate=function(){};a.prototype.deactivate=
function(){};d([b.property({constructOnly:!0})],a.prototype,"view",void 0);return a=d([b.subclass("esri.views.3d.interactive.InteractiveTool")],a)}(b.declared(f))});