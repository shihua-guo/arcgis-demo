// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ./Layer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer".split(" "),function(f,r,l,g,h,m,k,d,n,p,q){return function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.type="base-dynamic";return a}l(b,c);b.prototype.getImageUrl=function(a,b,d){throw new m("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented");
};b.prototype.fetchImage=function(a,b,d,e){a=this.getImageUrl(a,b,d);var c={responseType:"image",allowImageDataAccess:e&&e.allowImageDataAccess||!1};e&&e.timestamp&&(c.query={_ts:e.timestamp});return"string"===typeof a?h(a,c).then(function(a){return a.data}):a.then(function(a){return h(a,c)}).then(function(a){return a.data})};b.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return k.create(function(a){return f(["../views/2d/layers/BaseDynamicLayerView2D"],a)});case "3d":return k.create(function(a){return f(["../views/3d/layers/DynamicLayerView3D"],
a)})}};g([d.property({readOnly:!0,value:"base-dynamic"})],b.prototype,"type",void 0);return b=g([d.subclass("esri.layers.BaseDynamicLayer")],b)}(d.declared(n,p,q))});