// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),function(a,c,f,e,g,d){Object.defineProperty(c,"__esModule",{value:!0});a=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}f(b,a);Object.defineProperty(b.prototype,"quality",{set:function(a){-1!==["low","high"].indexOf(a)&&this._set("quality",a)},enumerable:!0,configurable:!0});b.prototype.clone=
function(){return new this.constructor({quality:this.quality})};e([d.property({type:String,value:"low"})],b.prototype,"quality",null);return b=e([d.subclass("esri.views.3d.environment.SceneViewAtmosphere")],b)}(d.declared(g));c.SceneViewAtmosphere=a;c.default=a});