// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/accessorSupport/decorators ../../../../layers/support/fieldUtils ./SceneLayerAdapter".split(" "),function(k,l,e,f,c,g,h){return function(d){function b(a){return d.call(this,a)||this}e(b,d);b.prototype.getField=function(a){void 0===a&&(a="");return g.getField(a,this._layer.fields)};b.prototype.getFieldUsageInfo=function(a){a=this.getField(a);if(!a)return null;a=this._hasCachedStatistics(a.name);
return{supportsLabelingInfo:a,supportsPopupTemplate:a,supportsRenderer:a,supportsLayerQuery:!1,supportsStatistics:a}};b.prototype.getFieldDomain=function(a,b){return null};b.prototype.load=function(){var a=this,b=this._layer.load().then(function(){a.geometryType="point";a.objectIdField=null;a.supportsSQLExpression=!1});this.addResolvingPromise(b);return this.when()};return b=f([c.subclass()],b)}(c.declared(h))});