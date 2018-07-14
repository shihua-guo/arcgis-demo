// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../camera/constraintUtils ../../../input/util ../../../lib/glMatrix ../InteractiveController ../momentum/PanPlanarMomentumController ../momentum/RotationMomentumController ../momentum/ZoomPlanarMomentumController ../../utils/navigationUtils ../../../webgl-engine/lib/Camera ../../../../navigation/PanPlanarMomentumEstimator ../../../../navigation/RotationMomentumEstimator ../../../../navigation/ZoomMomentumEstimator".split(" "),
function(p,k,t,l,q,b,u,v,w,x,e,y,z,A,B){Object.defineProperty(k,"__esModule",{value:!0});var n;(function(b){b[b.Vertical=0]="Vertical";b[b.Horizontal=1]="Horizontal"})(n=k.PanMode||(k.PanMode={}));var r=b.vec3d.createFrom(0,0,1),C=16/180*Math.PI;p=function(k){function m(a,h){var c=k.call(this)||this;c.view=a;c.pickingHelper=h;c.rotationValueSmooth=new q.ExponentialFalloff(.05);c.scalingValueSmooth=new q.ExponentialFalloff(.05);c.planeHorizontal={normal:b.vec3d.create(),d:0};c.planeVertical={normal:b.vec3d.create(),
d:0};c.rotationMomentumEstimator=new A.RotationMomentumEstimator;c.panMomentumEstimator=new z.PanPlanarMomentumEstimator(300,12,.9);c.zoomMomentumEstimator=new B.ZoomMomentumEstimator;c.beginCenter=b.vec3d.create();c.tmpPoints=[];c.beginCenterScreen=b.vec2d.create();c.tmpCentroid3d=b.vec3d.create();c.tmpCentroid2d=b.vec2d.create();c.tmp2d=b.vec2d.create();c.constraintOptions={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:new y,interactionDirection:null};return c}t(m,k);
m.prototype.begin=function(a){if(this.active){this.beginRadius=a.radius;this.pointerCount=a.pointers.size;this.beginAngle=a.angle;this.rotationValueSmooth.reset();this.scalingValueSmooth.reset();e.navPointToScreenPoint(this.beginCamera,a.center,this.beginCenterScreen);this.planeHorizontal.d=0;b.vec3d.set(r,this.planeHorizontal.normal);var h=b.vec3d.create();this.pickingHelper.pickPointInScreen(this.beginCenterScreen,h)||this.pickingHelper.pickFreePointInScreen(this.beginCenterScreen,h);var c=b.vec3d.create();
b.vec3d.negate(this.beginCamera.viewForward,c);var d=b.vec3d.create();b.vec3d.set(r,d);var g=b.vec3d.dot(c,d);this.panMode=Math.asin(0>g?-g:g)>=C?n.Horizontal:n.Vertical;e.setPlaneD(h,this.planeHorizontal);0>b.vec3d.dot(this.planeHorizontal.normal,this.beginCamera.eye)+this.planeHorizontal.d&&(b.vec3d.negate(this.planeHorizontal.normal),this.planeHorizontal.d*=-1);this.panMode===n.Vertical?(b.vec3d.scale(d,g),b.vec3d.subtract(c,d,this.planeVertical.normal),b.vec3d.normalize(this.planeVertical.normal),
e.setPlaneD(h,this.planeVertical),this.computePlanePoints(a.pointers,this.planeVertical,this.beginCamera,this.tmpPoints)):this.computePlanePoints(a.pointers,this.planeHorizontal,this.beginCamera,this.tmpPoints);e.centroid(this.tmpPoints,this.beginCenter);this.constraintOptions.interactionStartCamera.copyFrom(this.beginCamera)}};m.prototype.update=function(a){if(this.active){this.currentCamera.copyFrom(this.beginCamera);var b=1<a.pointers.size,c=this.panMode===n.Horizontal?this.planeHorizontal:this.planeVertical,
d=this.beginCenter;if(b){var g=this.beginRadius/a.radius,f=.001875*Math.min(Math.max(a.radius,40),120);this.scalingValueSmooth.gain=f;this.scalingValueSmooth.update(g);e.applyZoomToPoint(this.currentCamera,d,this.scalingValueSmooth.value,this.view.state.constraints.minimumPoiDistance);this.zoomMomentumEstimator.add(this.scalingValueSmooth.value,.001*a.timestamp);this.constraintOptions.interactionType=1;this.constraintOptions.interactionFactor=l.pixelDistanceToInteractionFactor(Math.abs(a.radius-this.beginRadius));
l.applyAll(this.view,this.currentCamera,this.constraintOptions)}this.computePlanePoints(a.pointers,c,this.currentCamera,this.tmpPoints);e.centroid(this.tmpPoints,this.tmpCentroid3d);e.navPointToScreenPoint(this.currentCamera,a.center,this.tmpCentroid2d);e.applyPanPlanar(this.currentCamera,d,this.tmpCentroid3d);this.panMomentumEstimator.add(this.tmpCentroid2d,this.tmpCentroid3d,.001*a.timestamp);this.constraintOptions.interactionType=4;this.constraintOptions.interactionFactor=l.pixelDistanceToInteractionFactor(this.beginCenterScreen,
this.tmpCentroid2d);l.applyAll(this.view,this.currentCamera,this.constraintOptions);b&&(b=this.planeHorizontal.normal,c=this.rotationValueSmooth.value,g=e.normalizeRotationDelta(a.angle-c),f=.00125*Math.min(Math.max(a.radius,40),120),this.rotationValueSmooth.gain=f,this.rotationValueSmooth.update(c+g),f=this.rotationValueSmooth.value-this.beginAngle,this.rotationMomentumEstimator.add(f,.001*a.timestamp),e.applyRotation(this.currentCamera,d,b,f),this.constraintOptions.interactionType=2,this.constraintOptions.interactionFactor=
l.pixelDistanceToInteractionFactor(Math.abs(a.radius*f)),l.applyAll(this.view,this.currentCamera,this.constraintOptions));this.currentCamera.markViewDirty()}};m.prototype.end=function(a){a.pointers.size===this.pointerCount&&this.update(a);this.finishController();return(a=this.zoomMomentumEstimator.evaluateMomentum())?new x.ZoomPlanarMomentumController(this.view,a,this.beginCenter):(a=this.rotationMomentumEstimator.evaluateMomentum())?new w.RotationMomentumController(this.view,a,this.beginCenter,this.planeHorizontal.normal):
(a=this.panMomentumEstimator.evaluateMomentum())?new v.PanPlanarMomentumController(this.view,a):null};m.prototype.computePlanePoints=function(a,h,c,d){d.length=a.size;var g=this.tmp2d,f=0;a.forEach(function(a){e.navPointToScreenPoint(c,a,g);void 0===d[f]&&(d[f]=b.vec3d.create());e.intersectPlaneFromScreenPoint(h,c,g,d[f]);f+=1});return d};return m}(u.InteractiveController);k.PinchAndPanController=p});