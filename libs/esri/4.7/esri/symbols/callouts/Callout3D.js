// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/_base/lang ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(k,l,f,d,g,h,c){return function(e){function b(a){a=e.call(this)||this;a.visible=!0;return a}f(b,e);b.prototype.normalizeCtorArgs=function(a){a&&a.type&&(a=g.mixin({},a),delete a.type);return a};b.prototype.clone=function(){};d([c.property({type:String,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],
b.prototype,"type",void 0);d([c.property({readOnly:!0})],b.prototype,"visible",void 0);return b=d([c.subclass("esri.symbols.callouts.Callout3D")],b)}(c.declared(h))});