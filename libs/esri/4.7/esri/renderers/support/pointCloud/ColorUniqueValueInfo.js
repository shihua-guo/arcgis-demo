// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Color ../../../core/JSONSupport ../../../core/lang ../../../core/accessorSupport/decorators ../../../core/accessorSupport/ensureType".split(" "),function(b,c,g,e,h,k,f,d,l){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.description=null;a.label=null;a.values=null;a.color=null;return a}g(a,b);c=a;a.prototype.clone=
function(){return new c({description:this.description,label:this.label,values:f.clone(this.values),color:f.clone(this.color)})};e([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);e([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);e([d.property({type:[String],json:{write:!0}})],a.prototype,"values",void 0);e([d.property({type:h,json:{type:[l.Integer],write:!0}})],a.prototype,"color",void 0);return a=c=e([d.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],
a);var c}(d.declared(k));c.ColorUniqueValueInfo=b;c.default=b});