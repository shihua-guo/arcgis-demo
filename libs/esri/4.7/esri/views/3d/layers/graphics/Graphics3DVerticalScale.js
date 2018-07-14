// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../geometry/support/scaleUtils"],function(g,h,f){return function(){function b(a){this.sourceSpatialReference=a.sourceSpatialReference;this.destSpatialReference=a.destSpatialReference}b.prototype.adjust=function(a){var d=this._getVerticalUnitScale();1!==d&&(a=a.slice(),this._scaleVerticalUnits(a,d));return a};b.prototype._getVerticalUnitScale=function(){if(this.sourceSpatialReference&&!this.sourceSpatialReference.equals(this.destSpatialReference)){var a=f.getMetersPerVerticalUnitForSR(this.sourceSpatialReference),
d=f.getMetersPerVerticalUnitForSR(this.destSpatialReference);return a/d}return 1};b.prototype._vertexListsScaleZ=function(a,d){for(var b=0;b<a.length;++b)for(var c=a[b],e=0;e<c.length;++e)c[e][2]*=d};b.prototype._scaleVerticalUnits=function(a,b){for(var d=0;d<a.length;++d){var c=a[d].geometry;c&&c.hasZ&&(this._geometryIsPoint(c)?null!==c.z&&(c.z*=b):this._geometryIsPolyline(c)?this._vertexListsScaleZ(c.paths,b):this._geometryIsPolygon(c)&&this._vertexListsScaleZ(c.rings,b))}};b.prototype._geometryIsPoint=
function(a){return"point"===a.type};b.prototype._geometryIsPolygon=function(a){return"polygon"===a.type};b.prototype._geometryIsPolyline=function(a){return"polyline"===a.type};return b}()});