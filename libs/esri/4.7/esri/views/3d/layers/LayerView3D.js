// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/support/heightModelInfoUtils ../../layers/LayerView".split(" "),function(m,n,g,e,h,k,d,f,l){return function(c){function a(){var b=null!==c&&c.apply(this,arguments)||this;b.supportsHeightUnitConversion=!1;return b}g(a,c);a.prototype.postscript=function(b){this.inherited(arguments);f.mayHaveHeightModelInfo(this.layer)&&
this.addResolvingPromise(this._validateHeightModelInfo())};a.prototype._validateHeightModelInfo=function(){var b=this;return h.create(function(a,d){k.whenFalseOnce(b.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var c=f.rejectLayerError(b.layer,b.view.heightModelInfo,b.supportsHeightUnitConversion);c?d(c):a()})})};e([d.property()],a.prototype,"view",void 0);return a=e([d.subclass("esri.views.3d.layers.LayerView3D")],a)}(d.declared(l))});