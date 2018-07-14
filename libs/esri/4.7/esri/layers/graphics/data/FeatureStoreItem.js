// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/shim/iterator","./FeatureSetReader"],function(h,c,f,g){Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){this.reader=a;this.oid=b;this.count=1;this.bounds=void 0}a.prototype.getBounds=function(){void 0===this.bounds&&(this.bounds=this.reader.getBounds(this.oid));return this.bounds};a.prototype.getCentroid=function(){return this.reader.getCentroid(this.oid)};a.prototype.getCentroidQuantized=function(a,b,d){return this.reader.getCentroidQuantized(this.oid,
a,b,d)};a.prototype.getGeometry=function(){return this.reader.getGeometry(this.oid)};a.prototype.getGeometryQuantized=function(a,b,d){return this.reader.getGeometryQuantized(this.oid,a,b,d)};a.prototype.getAttributes=function(){return this.reader.getAttributes(this.oid)};return a}();c.default=e;c.createFromFeatureSet=function(a){var c=g.createFeatureSetReader(a),b=[];f.forOf(c.oids(),function(a){b.push(new e(c,a))});return b}});