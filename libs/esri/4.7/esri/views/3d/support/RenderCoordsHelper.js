// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/support/scaleUtils ../lib/glMatrix ./earthUtils ./mathUtils ./projectionUtils ../webgl-engine/lib/Util".split(" "),function(l,f,p,q,w,x,a,m,r,k,t){Object.defineProperty(f,"__esModule",{value:!0});f.createRenderCoordsHelper=function(a,c){return"global"===a?new y(c):new z(c)};var h;(function(a){a[a.X=0]="X";a[a.Y=1]="Y";a[a.Z=2]="Z"})(h=f.BasisDimension||(f.BasisDimension=
{}));l=function(){function a(a,b){this.spatialReference=a;this.unitInMeters=b}a.prototype.toRenderCoords=function(a,b,d){return a instanceof q?k.pointToVector(a,b,this.spatialReference):k.vectorToVector(a,b,d,this.spatialReference)};a.prototype.fromRenderCoords=function(a,b,d){return b instanceof q?k.vectorToPoint(a,this.spatialReference,b,d):b instanceof w?k.vectorToPoint(a,this.spatialReference,b):k.vectorToVector(a,this.spatialReference,b,d)};return a}();f.RenderCoordsHelper=l;var y=function(f){function c(b){return f.call(this,
b||k.SphericalECEFSpatialReference,1)||this}p(c,f);c.prototype.getAltitude=function(b){return a.vec3d.length(b)-m.earthRadius};c.prototype.setAltitude=function(b,d){b=(b+m.earthRadius)/a.vec3d.length(d);a.vec3d.scale(d,b)};c.prototype.setAltitudeOfTransformation=function(b,a){var d=a[12],c=a[13],e=a[14];b=(b+m.earthRadius)/Math.sqrt(d*d+c*c+e*e);a[12]=d*b;a[13]=c*b;a[14]=e*b};c.prototype.worldUpAtPosition=function(b,a){return this.worldBasisAtPosition(b,h.Z,a)};c.prototype.worldBasisAtPosition=function(b,
d,c){switch(d){case h.X:return r.cartesianToSpherical(b||n,e),b=e[2],a.vec3d.set3(-Math.sin(b),Math.cos(b),0,c);case h.Y:r.cartesianToSpherical(b||n,e);d=e[1];b=e[2];var g=Math.sin(d);return a.vec3d.set3(-g*Math.cos(b),-g*Math.sin(b),Math.cos(d),c);case h.Z:return a.vec3d.normalize(b||n,c)}};c.prototype.intersectManifold=function(b,d,c,g){void 0===g&&(g=a.vec3d.create());if(!t.raySphere(b,d,null,m.earthRadius+c,e)||0>a.vec3d.dot(a.vec3d.direction(e,b,u),d))return!1;a.vec3d.set(e,g);return!0};return c}(l),
z=function(f){function c(b){b=f.call(this,b,x.getMetersPerUnitForSR(b))||this;b.worldX=[1,0,0];b.worldY=[0,1,0];b.worldZ=[0,0,1];return b}p(c,f);c.prototype.getAltitude=function(b,a){return a?b[a+2]:b[2]};c.prototype.setAltitude=function(b,a){a[2]=b};c.prototype.setAltitudeOfTransformation=function(a,c){c[14]=a};c.prototype.worldUpAtPosition=function(b,c){return a.vec3d.set(this.worldZ,c)};c.prototype.worldBasisAtPosition=function(b,c,e){switch(c){case h.X:return a.vec3d.set(this.worldX,e);case h.Y:return a.vec3d.set(this.worldY,
e);case h.Z:return a.vec3d.set(this.worldZ,e)}};c.prototype.intersectManifold=function(b,c,f,g){void 0===g&&(g=a.vec3d.create());a.vec4d.set4(this.worldZ[0],this.worldZ[1],this.worldZ[2],-f,v);if(!t.rayPlane(b,c,v,e)||0>a.vec3d.dot(a.vec3d.direction(e,b,u),c))return!1;a.vec3d.set(e,g);return!0};return c}(l),v=a.vec4d.create(),e=a.vec3d.create(),u=a.vec3d.create(),n=[0,0,0]});