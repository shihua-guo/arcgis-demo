// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../geometry/geometryEngine ../../../../../geometry/Polygon ../../../../../geometry/SpatialReference ../../../../../geometry/support/geodesicUtils ../../../lib/glMatrix ../../../support/mathUtils ../../../support/projectionUtils".split(" "),function(z,A,w,x,q,t,d,k,n){var p;(function(g){function p(a,b,c,f){d.vec3d.subtract(b,a,u);d.vec3d.subtract(c,a,v);d.vec3d.cross(u,v,f);d.vec3d.normalize(f,f);f[3]=-d.vec3d.dot(a,f)}g.boundingSphere=function(a,b){var c=b.center;
d.vec3d.set3(0,0,0,c);for(var f=0;f<a.length;++f)d.vec3d.add(c,a[f]);d.vec3d.scale(c,1/a.length);for(var e=0,f=0;f<a.length;++f)e=Math.max(e,d.vec3d.dist2(c,a[f]));b.radius=Math.sqrt(e)};g.planeFromPoints=p;var u=d.vec3d.create(),v=d.vec3d.create();g.bestFitPlane=function(a,b){if(3>a.length)throw Error("need at least 3 points to fit a plane");p(a[0],a[1],a[2],b)};g.planePointDistance=function(a,b){return d.vec3d.dot(a,b)+a[3]};g.segmentLengthEuclidean=function(a,b,c){n.pointToVector(a,l,c);n.pointToVector(b,
m,c);return d.vec3d.dist(l,m)};g.segmentLengthGeodesic=function(a,b){var c=q.WGS84;n.pointToVector(a,l,c);n.pointToVector(b,m,c);return t.inverseGeodeticSolver(k.deg2rad(l[1]),k.deg2rad(l[0]),k.deg2rad(m[1]),k.deg2rad(m[0])).geodesicDistance};g.segmentLengthGeodesicVector=function(a,b){return t.inverseGeodeticSolver(k.deg2rad(a[1]),k.deg2rad(a[0]),k.deg2rad(b[1]),k.deg2rad(b[0])).geodesicDistance};g.triangleAreaEuclidean=function(a,b,c){return.5*Math.abs((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-
a[0]))};g.triangleAreaGeodesic=function(a,b,c,d){var e=y;n.vectorToVector(a,d,l,q.WGS84);n.vectorToVector(b,d,m,q.WGS84);n.vectorToVector(c,d,r,q.WGS84);e.setPoint(0,0,l);e.setPoint(0,1,m);e.setPoint(0,2,r);return Math.abs(w.geodesicArea(e,"square-meters"))};g.tangentFrame=function(a,b,c){Math.abs(a[0])>Math.abs(a[1])?d.vec3d.set3(0,1,0,b):d.vec3d.set3(1,0,0,b);d.vec3d.cross(a,b,c);d.vec3d.normalize(b);d.vec3d.cross(c,a,b);d.vec3d.normalize(c)};g.fitHemisphere=function(a,b,c){void 0===b&&(b=null);
void 0===c&&(c=!0);var f=function(a,b){if(0===b[0]&&0===b[1]&&0===b[2])return!1;for(var c=0;c<a.length;++c)if(-1E-6>d.vec3d.dot(b,a[c]))return!1;return!0};if(0===a.length)return!1;if(1===a.length)return b&&d.vec3d.set(a[0],b),!0;d.vec3d.set3(0,0,0,h);for(var e=0;e<a.length;++e)d.vec3d.add(h,a[e]);d.vec3d.normalize(h);if(f(a,h))return b&&d.vec3d.set(h,b),!0;if(!c)return!1;for(e=0;e<a.length;++e)for(c=0;c<a.length;++c)if(e!==c&&(d.vec3d.cross(a[e],a[c],h),d.vec3d.normalize(h),f(a,h)))return b&&d.vec3d.set(h,
b),!0;return!1};g.compareSets=function(a,b){if(a===b)return!0;if(a.size!==b.size)return!1;for(var c=0;c<a.size;++c)if(!b.has(a[c]))return!1;return!0}})(p||(p={}));var l=[0,0,0],m=[0,0,0],r=[0,0,0],y=new x({rings:[[l,m,r]],spatialReference:q.WGS84}),h=d.vec3d.create();return p});