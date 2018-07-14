// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/Point ../graphics/ElevationContext ../graphics/featureExpressionInfoUtils ../graphics/Graphics3DSymbolCommonCode ./I3SUtil ../../lib/glMatrix ../../support/orientedBoundingBox ../../support/projectionUtils ../../webgl-engine/lib/Util".split(" "),function(v,w,q,r,m,n,t,d,p,k,u){return function(){function e(a,b,c,e,f,g,k,l,h){void 0===h&&(h={});this.indexSR=a;this._renderCoordsHelper=b;this.extent=f;this.errorMetricPreference=g;this.elevationProvider=k;this.options=
h;this._computedOBBs={};this._computedMBSs={};this._isNodeVisibleCached={};this.fp=[];this._idleCamera=!0;this.maxDistance=0;this.maxLodLevel=2;this._tmp1=[0,0,0];this._tmp2=[0,0,0];this._tmp3=[0,0,0];this._tmp0=[0,0,0];this.supportedMetrics=["screenSpaceRelative","maxScreenThreshold","removedFeatureDiameter","distanceRangeFromDefaultCamera"];this.screenspaceErrorBias=h.screenspaceErrorBias||1;this.progressiveLoadFactor=h.progressiveLoadFactor||1;this.enableLoD=!h.disableLod;for(b=0;8>b;++b)this.fp[b]=
d.vec4d.create();this.updateCamera(c);this._poi=d.vec3d.create(e);this.engineSR=this._renderCoordsHelper.spatialReference;l?(this._elevationContext=new r,this._elevationContext.featureExpressionInfoContext=m.createContext(m.extractExpressionInfo(l,!1)),this._elevationContext.mixinApi(l)):this._elevationContext=null;this.tmpPoint=new q({x:0,y:0,z:0,spatialReference:a})}e.prototype.updateCamera=function(a){u.matrix2frustumPlanes(a.viewMatrix,a.projectionMatrix,this.fp);this._screenSizeFactor=1/a.perPixelRatio;
this._camPos=a.eye;this._isNodeVisibleCached={}};e.prototype.updatePointOfInterest=function(a){d.vec3d.set(a,this._poi);this.maxDistance=0};e.prototype.updateScreenSpaceErrorBias=function(a){this.screenspaceErrorBias=a};e.prototype.setCameraIdle=function(a){this._idleCamera!==a&&(this._idleCamera=a,this._isNodeVisibleCached={})};e.prototype.updateExtent=function(a){this.extent=a;this._isNodeVisibleCached={}};e.prototype.computeMbs=function(a){var b=this._computedMBSs[a.id];b||(b=d.vec4d.createFrom(a.mbs[0],
a.mbs[1],a.mbs[2],-1),this._computedMBSs[a.id]=b);0>b[3]&&(d.vec4d.set(a.mbs,b),this._elevationContext&&1E5>b[3]&&(this.tmpPoint.x=b[0],this.tmpPoint.y=b[1],this.tmpPoint.z=b[2],b[2]=n.computeElevation(this.elevationProvider,this.tmpPoint,this._elevationContext,this._renderCoordsHelper,null)),k.mbsToMbs(b,this.indexSR,b,this.engineSR));return b};e.prototype.computeObb=function(a){if(a.obb&&!(0>a.obb.halfSize[0])){var b=this._computedOBBs[a.id];b||(b=p.clone(a.obb),b.halfSize[0]=-1,this._computedOBBs[a.id]=
b);0>b.halfSize[0]&&(b.halfSize[0]=a.obb.halfSize[0],d.vec3d.set(a.obb.center,b.center),this._elevationContext&&1E5>a.mbs[3]&&(this.tmpPoint.x=a.obb.center[0],this.tmpPoint.y=a.obb.center[1],this.tmpPoint.z=a.obb.center[2],b.center[2]=n.computeElevation(this.elevationProvider,this.tmpPoint,this._elevationContext,this._renderCoordsHelper,null)),k.bufferToBuffer(b.center,this.indexSR,0,b.center,this.engineSR,0,1));return b}};e.prototype._isNodeVisible=function(a){a=this.computeMbs(a);return this.isMBSinExtent(a)&&
this.isMBSVisible(a)};e.prototype.isNodeVisible=function(a){if(!this.enableLoD)return!0;if(!this._idleCamera)return this._isNodeVisible(a);if(null!=this._isNodeVisibleCached[a.id])return this._isNodeVisibleCached[a.id];this._isNodeVisibleCached[a.id]=this._isNodeVisible(a);return this._isNodeVisibleCached[a.id]};e.prototype.isGeometryVisible=function(a){return this.isNodeVisible(a)?(a=this.computeObb(a))?p.isVisible(a,this.fp):!0:!1};e.prototype.invalidateCache=function(a){if(null==a){for(var b=0,
c=Object.keys(this._computedMBSs);b<c.length;b++)a=c[b],this._computedMBSs[a][3]=-1;b=0;for(c=Object.keys(this._computedOBBs);b<c.length;b++)a=c[b],this._computedOBBs[a].halfSize[0]=-1}else this._computedMBSs[a]&&(this._computedMBSs[a][3]=-1),this._computedOBBs[a]&&(this._computedOBBs[a].halfSize[0]=-1)};e.prototype.isMBSinExtent=function(a){return this.extent?0!==t.intersectBoundingBoxWithMbs(this.extent,a):!0};e.prototype.isMBSVisible=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];var f=this.fp;return f[0][0]*
b+f[0][1]*c+f[0][2]*d+f[0][3]<=a&&f[1][0]*b+f[1][1]*c+f[1][2]*d+f[1][3]<=a&&f[2][0]*b+f[2][1]*c+f[2][2]*d+f[2][3]<=a&&f[3][0]*b+f[3][1]*c+f[3][2]*d+f[3][3]<=a&&f[4][0]*b+f[4][1]*c+f[4][2]*d+f[4][3]<=a&&f[5][0]*b+f[5][1]*c+f[5][2]*d+f[5][3]<=a};e.prototype.calcScreenSpaceSize=function(a,b){a=this.computeMbs(a);var c=a[3];a=d.vec3d.dist2(a,this._camPos)-c*c;return 0>a?.5*Number.MAX_VALUE:b/Math.sqrt(a)*this._screenSizeFactor};e.prototype.calcCameraDistance=function(a){a=this.computeMbs(a);return Math.max(0,
d.vec3d.dist(a,this._camPos)-a[3])};e.prototype.calcAngleDependentLoD=function(a){a=this.computeMbs(a);var b=a[3];a=(Math.abs(a[0]*(a[0]-this._camPos[0])+a[1]*(a[1]-this._camPos[1])+a[2]*(a[2]-this._camPos[2]))/d.vec3d.length(a)+b)/d.vec3d.dist(a,this._camPos);return Math.min(1,a)};e.prototype.hasLOD=function(a){return null!=a.lodSelection};e.prototype.hasFeatures=function(a){return null!=a.featureData};e.prototype.getDistancePlanarMode=function(a,b,c){var d=a[0]-b[0],f=a[1]-b[1];a=a[2]-b[2];d=d+
d+f*f;if(d<=c*c)return Math.abs(a);c=Math.sqrt(d)-c;return Math.sqrt(a*a+c*c)};e.prototype.getDistanceGlobeMode=function(a,b,c){var e=d.vec3d.length(b),f=d.vec3d.length(a)-e;d.vec3d.scale(a,d.vec3d.dot(a,b)/d.vec3d.length2(a),this._tmp0);if(d.vec3d.dist2(b,this._tmp0)<=c*c)return Math.abs(f);b=d.vec3d.scale(b,1/e,this._tmp0);var e=d.vec3d.scale(b,e-c*c/2/e,this._tmp1),g=d.vec3d.subtract(a,e,this._tmp2),g=d.vec3d.subtract(g,d.vec3d.scale(b,d.vec3d.dot(b,g),this._tmp3),this._tmp2),e=d.vec3d.add(e,d.vec3d.scale(g,
c/d.vec3d.length(g),this._tmp2),this._tmp2);c=d.vec3d.dist(a,e);2E5<=f&&(a=d.vec3d.subtract(a,e,this._tmp1),a=d.vec3d.dot(a,b)/d.vec3d.length(a),.08>a&&(a=1E-4),c/=a);return c};e.prototype.getDistance=function(a,b,c){return this.engineSR===k.SphericalECEFSpatialReference?this.getDistanceGlobeMode(a,b,c):this.getDistancePlanarMode(a,b,c)};e.prototype._selectErrorMetric=function(a){if(this.errorMetricPreference)for(var b=0;b<this.errorMetricPreference.length;b++)for(var c=0;c<a.length;c++){if(a[c].metricType===
this.errorMetricPreference[b])return a[c]}else for(b=0;b<a.length;b++)if(0<=this.supportedMetrics.indexOf(a[b].metricType))return a[b];return null};e.prototype.getLodLevel=function(a){if(!a.lodSelection||0>=a.lodSelection.length||!1===this.hasFeatures(a))return 0;if(null==a.children||0===a.children.length)return this.maxLodLevel;var b=this.enableLoD?this._selectErrorMetric(a.lodSelection):null;if(null==b)return 0;if(1>this.progressiveLoadFactor){var c=this.screenspaceErrorBias;return this.evaluateLODmetric(a,
this.progressiveLoadFactor*this.screenspaceErrorBias,b)?this.evaluateLODmetric(a,c,b)?2:1:0}return this.evaluateLODmetric(a,this.screenspaceErrorBias,b)?this.maxLodLevel:0};e.prototype.evaluateLODmetric=function(a,b,c){return"screenSpaceRelative"===c.metricType?(a=this.computeMbs(a),a=2*this.getDistance(this._camPos,a,a[3])/this._screenSizeFactor,c.maxError*b<=a):"maxScreenThreshold"===c.metricType?(b=this.calcScreenSpaceSize(a,a.mbs[3]*b),this.options.angleDependentLoD&&(b*=this.calcAngleDependentLoD(a)),
b<c.maxError):"removedFeatureDiameter"===c.metricType?10>this.calcScreenSpaceSize(a,c.maxError)*b:"distanceRangeFromDefaultCamera"===c.metricType?this.calcCameraDistance(a)>c.maxError*b:!1};e.prototype.distToPOI=function(a){a=this.computeMbs(a);a=d.vec3d.dist(a,this._poi)-a[3];this.maxDistance=Math.max(this.maxDistance,a);return a};e.prototype.distCameraToPOI=function(){return d.vec3d.dist(this._camPos,this._poi)};return e}()});