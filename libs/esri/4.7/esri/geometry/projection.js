// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred ./pe ./SpatialReference ./support/GeographicTransformation".split(" "),function(q,a,r,g,n,h){function k(b,l,c,e,a){void 0===e&&(e=null);void 0===a&&(a=!1);if(null===e){var d=h.cacheKey(l,c);void 0!==m[d]?e=m[d]:(e=p(l,c,null),null===e&&(e=new h),m[d]=e)}return f._project(b,l,c instanceof n||!1===a?c:new n(c),e,a)}function p(b,a,c){void 0===c&&(c=null);b=f._getTransformation(b,a,c);return null!==b?h.fromGE(b):null}Object.defineProperty(a,"__esModule",{value:!0});
var f=null;a.isLoaded=function(){return!!f&&g.isLoaded()};a.isSupported=function(){return g.isSupported()};var d=null;a.load=function(){if(null!==d)return d.promise;d=new r;g.load().then(function(){q(["./geometryEngine"],function(b){f=b;f._enableProjection(g);d.resolve()})},function(b){d.reject(b)});return d.promise};a.project=function(b,a,c){void 0===c&&(c=null);return b instanceof Array?0===b.length?[]:k(b,b[0].spatialReference,a,c):k([b],b.spatialReference,a,c)[0]};var m={};a.projectMany=k;a.getTransformation=
p;a.getTransformations=function(b,a,c){void 0===c&&(c=null);b=f._getTransformationBySuitability(b,a,c);if(null!==b){a=[];for(c=0;c<b.length;c++)a.push(h.fromGE(b[c]));return a}return[]}});