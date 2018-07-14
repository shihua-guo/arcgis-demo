// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../camera/constraintUtils ../../../lib/glMatrix ../InteractiveController ../../utils/navigationUtils ../../../support/mathUtils".split(" "),function(c,h,l,k,a,m,g,n){Object.defineProperty(h,"__esModule",{value:!0});c=function(c){function e(d,f){var b=c.call(this)||this;b.view=d;b.pickingHelper=f;b.tmpP=a.vec3d.create();b.tmpN=a.vec3d.create();b.tmpP0=a.vec3d.create();b.tmpPoi=a.vec3d.create();b.tmpRayDir=a.vec3d.create();b.dragBeginPoint=
a.vec2d.create();b.normalizedAnchorPoint=a.vec2d.create();b.constraintOptions={selection:15,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:a.vec3d.create()};b.plane={normal:a.vec3d.create(),d:0};return b}l(e,c);e.prototype.begin=function(d){this.active&&(a.vec2d.set(d,this.dragBeginPoint),g.normalizeCoordinate(this.beginCamera,d,this.normalizedAnchorPoint),this.pickingHelper.pickPointInScreen(d,this.tmpP)||this.pickingHelper.pickFreePointInScreen(d,this.tmpP),
a.vec3d.normalize(a.vec3d.subtract(this.beginCamera.eye,this.beginCamera.center,this.tmpN)),0>this.tmpN[1]&&a.vec3d.negate(this.tmpN),g.setPlane(this.tmpP,this.tmpN,this.plane),this.constraintOptions.interactionStartCamera=this.beginCamera)};e.prototype.update=function(d){if(this.active){g.intersectPlaneFromScreenPoint(this.plane,this.currentCamera,this.dragBeginPoint,this.tmpPoi)||a.vec3d.set(this.currentCamera.center,this.tmpPoi);g.normalizeCoordinate(this.currentCamera,d,this.tmpP0);var f=4*(this.normalizedAnchorPoint[1]-
this.tmpP0[1]);a.vec2d.set(this.tmpP0,this.normalizedAnchorPoint);a.vec3d.subtract(this.tmpPoi,this.currentCamera.eye,this.tmpRayDir);var b=a.vec3d.length(this.tmpRayDir),c=b*(1-f);a.vec3d.set(this.tmpRayDir,this.constraintOptions.interactionDirection);a.vec3d.scale(this.constraintOptions.interactionDirection,n.sign(f)/b);var e=this.view.state.constraints.minimumPoiDistance;0<=f&&c<e&&(c=e,f=-(c-b)/b);1E-6>Math.abs(b-c)||(a.vec3d.scale(this.tmpRayDir,f),a.vec3d.add(this.currentCamera.eye,this.tmpRayDir),
a.vec3d.lerp(this.currentCamera.center,this.tmpPoi,f),this.currentCamera.center[2]=this.tmpPoi[2]>this.beginCamera.center[2]?Math.max(this.beginCamera.center[2],this.currentCamera.center[2]):Math.min(this.beginCamera.center[2],this.currentCamera.center[2]),this.currentCamera.markViewDirty(),this.constraintOptions.interactionFactor=k.pixelDistanceToInteractionFactor(this.dragBeginPoint,d),k.applyAll(this.view,this.currentCamera,this.constraintOptions))}};e.prototype.end=function(){this.active&&this.finishController()};
return e}(m.InteractiveController);h.ZoomController=c});