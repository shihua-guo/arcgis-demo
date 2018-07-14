// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/generatorHelper ../../../geometry/support/boundsUtils ../../../geometry/support/centroid ../../../geometry/support/quantizationUtils @dojo/shim/Symbol".split(" "),function(k,h,m,w,n,p,f){Object.defineProperty(h,"__esModule",{value:!0});h.createFeatureSetReader=function(c){switch(c.geometryType){case "esriGeometryEnvelope":return new q(c);case "esriGeometryMultipoint":return new r(c);case "esriGeometryPoint":return new t(c);
case "esriGeometryPolygon":return new u(c);case "esriGeometryPolyline":return new v(c);default:throw new TypeError("invalid feature set");}};k=function(){function c(b){this._boundsByOID=new Map;this._hydratedGeometryByOID=new Map;this._centroidByOID=new Map;this._features=b.features;this._hasM=b.hasM;this._hasZ=b.hasZ;this._objectIdFieldName=b.objectIdFieldName;if(this._transform=b.transform)this._hydrateX=f.getHydrateX(this._transform),this._hydrateY=f.getHydrateY(this._transform)}c.prototype.add=
function(b){if(!f.equals(b.transform,this._transform))throw Error("transform not equivalent");(c=this._features).push.apply(c,b.features);if(c=this._featureByOID){var a=this._objectIdFieldName,l=0;for(b=b.features;l<b.length;l++){var g=b[l];c.set(g.attributes[a],g)}}var c};c.prototype.oids=function(){var b,a,l;return w(this,function(c){switch(c.label){case 0:b=0,a=this._features,c.label=1;case 1:if(!(b<a.length))return[3,4];l=a[b];return[4,l.attributes[this._objectIdFieldName]];case 2:c.sent(),c.label=
3;case 3:return b++,[3,1];case 4:return[2]}})};c.prototype.getAttributes=function(b){return this._getFeatureByOID(b).attributes};c.prototype.getBounds=function(b){if(this._boundsByOID.has(b))return this._boundsByOID.get(b);var a;a=this._transform?f.hydrateBounds(this._getBounds(this._getRawGeometry(b)),this._hydrateX,this._hydrateY):this._getHydratedBounds(this.getGeometry(b));this._boundsByOID.set(b,a);return a};c.prototype.getCentroid=function(b){var a=this._centroidByOID;if(a.has(b))return a.get(b);
var c=this.getGeometry(b),c=this._getCentroid(c);a.set(b,c);return c};c.prototype.getCentroidQuantized=function(b,a,c,g){return(b=this.getCentroid(b))?f.hydratePoint({},b,c,g,this._hasZ,this._hasM):null};c.prototype.getGeometry=function(b){if(!this._transform)return this._getRawGeometry(b);var a=this._hydratedGeometryByOID;if(a.has(b))return a.get(b);var c=this._hydrateGeometry(this._getRawGeometry(b),this._hydrateX,this._hydrateY,this._hasZ,this._hasM);a.set(b,c);return c};c.prototype.getProjectedGeometry=
function(b,a){this.getGeometry(a)};c.prototype.getGeometryQuantized=function(b,a,c,g){return f.equals(a,this._transform)?this._getRawGeometry(b):this._quantizeGeometry(this.getGeometry(b),c,g,this._hasZ,this._hasM)};c.prototype._getRawGeometry=function(b){return this._getFeatureByOID(b).geometry};c.prototype._getFeatureByOID=function(b){if(this._featureByOID)return this._featureByOID.get(b);for(var a=this._featureByOID=new Map,c=this._objectIdFieldName,g=0,d=this._features;g<d.length;g++){var e=d[g];
a.set(e.attributes[c],e)}return a.get(b)};return c}();h.FeatureSetReader=k;var q=function(c){function b(a){return c.call(this,a)||this}m(b,c);b.prototype._getBounds=function(a){return[a.xmin,a.ymin,a.xmax,a.ymax]};b.prototype._getCentroid=function(a){a=p.extentCentroid(a);return{x:a[0],y:a[1]}};b.prototype._getHydratedBounds=function(a){return[a.xmin,a.ymin,a.xmax,a.ymax]};b.prototype._hydrateGeometry=function(a,b,c,d,e){return f.hydrateExtent({},a,b,c,d,e)};b.prototype._quantizeGeometry=function(a,
b,c,d,e){return f.quantizeExtent({},a,b,c,d,e)};return b}(k);h.ExtentFeatureSetReader=q;var r=function(c){function b(a){return c.call(this,a)||this}m(b,c);b.prototype._getBounds=function(a){return f.getQuantizedBoundsPoints(a.points)};b.prototype._getCentroid=function(a){a=this._getHydratedBounds(a);return{x:a[0]-a[2],y:a[3]-a[1]}};b.prototype._getHydratedBounds=function(a){return n.getPointsBounds(a.points)};b.prototype._hydrateGeometry=function(a,b,c,d,e){return f.hydrateMultipoint({},a,b,c,d,e)};
b.prototype._quantizeGeometry=function(a,b,c,d,e){return f.quantizeMultipoint({},a,b,c,d,e)};return b}(k);h.MultipointFeatureSetReader=r;var t=function(c){function b(a){return c.call(this,a)||this}m(b,c);b.prototype._getBounds=function(a){return[a.x,a.y,a.x,a.y]};b.prototype._getCentroid=function(a){return a};b.prototype._getHydratedBounds=function(a){return[a.x,a.y,a.x,a.y]};b.prototype._hydrateGeometry=function(a,b,c,d,e){return f.hydratePoint({},a,b,c,d,e)};b.prototype._quantizeGeometry=function(a,
b,c,d,e){return f.hydratePoint({},a,b,c,d,e)};return b}(k);h.PointFeatureSetReader=t;var u=function(c){function b(a){return c.call(this,a)||this}m(b,c);b.prototype._getBounds=function(a){return f.getQuantizedBoundsRings(a.rings)};b.prototype._getCentroid=function(a){a=p.polygonCentroid(a);return{x:a[0],y:a[1]}};b.prototype._getHydratedBounds=function(a){return n.getRingsOrPathsBounds(a.rings)};b.prototype._hydrateGeometry=function(a,b,c,d,e){return f.hydratePolygon({},a,b,c,d,e)};b.prototype._quantizeGeometry=
function(a,b,c,d,e){return f.quantizePolygon({},a,b,c,d,e)};return b}(k);h.PolygonFeatureSetReader=u;var v=function(c){function b(a){return c.call(this,a)||this}m(b,c);b.prototype._getBounds=function(a){return f.getQuantizedBoundsPaths(a.paths)};b.prototype._getCentroid=function(a){a=this._getHydratedBounds(a);return{x:a[0]-a[2],y:a[3]-a[1]}};b.prototype._getHydratedBounds=function(a){return n.getRingsOrPathsBounds(a.paths)};b.prototype._hydrateGeometry=function(a,b,c,d,e){return f.hydratePolyline({},
a,b,c,d,e)};b.prototype._quantizeGeometry=function(a,b,c,d,e){return f.quantizePolyline({},a,b,c,d,e)};return b}(k);h.PolylineFeatureSetReader=v});