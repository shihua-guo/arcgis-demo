// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/Handles ../../../../../core/StackedObjectPool ./LaserLineRenderer ../support/Label ../support/LabelSegment ../support/labelUtils ../support/PathSegmentInterpolator ../support/viewUtils ../../../lib/glMatrix ../../../support/mathUtils ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryData ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../webgl-engine/lib/Selector ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/DefaultMaterial ../../../webgl-engine/materials/MeasurementArrowMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../webgl-engine/parts/Model".split(" "),
function(t,R,S,T,G,H,I,A,w,B,E,m,g,q,z,J,C,K,r,L,M,N,O,D,d){var h=new H(function(){return g.vec3d.create()});t=[1,.5,0,.75];var P={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25,triangleColor:t,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,
.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:t,guideLineWidth:2,guideLineColor:t,guideStippleLengthPixels:6,labelDistance:25},u;(function(b){b[b.Small=12]="Small";b[b.Large=16]="Large"})(u||(u={}));t=function(){function b(a,c,e){void 0===e&&(e={});this._visible=!1;this._laserLineRenderer=null;this._handleGeometry=new z(C.createSphereGeometry(1,32,32),"handle");
this._directDistanceLabel=new A;this._horizontalDistanceLabel=new A;this._verticalDistanceLabel=new A;this._listenerHandles=null;this._cursorPosition=g.vec3d.create();this._startPosition=g.vec3d.create();this._endPosition=g.vec3d.create();this._centerPosition=g.vec3d.create();this._cornerPosition=g.vec3d.create();this._arrowLabelSegment=new w;this._horizontalLabelSegment=new w;this._verticalLabelSegment=new w;this._geodesicProjectionLabelSegment=new w;this._origin=g.vec3d.create();this._originTransform=
g.mat4d.create();this._tempMat4=g.mat4d.create();this._model=a;this._sceneView=c;this._params=m.copyParameter(P,e);this._layer=new K("point-to-point-measurement",{},"point-to-point-measurement");this._createMaterials();this._createObjects();this._selector=new L(this._sceneView.viewingMode)}b.prototype.destroy=function(){this.hide()};Object.defineProperty(b.prototype,"requiresCursorPoint",{get:function(){return"initial"===this._model.state},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"cameraAboveGround",{get:function(){return this._sceneView.state.camera.aboveGround},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{get:function(){return this._visible},set:function(a){a?this.show():this.hide()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"testData",{get:function(){return{labels:{direct:this._directDistanceLabel,horizontal:this._horizontalDistanceLabel,vertical:this._verticalDistanceLabel},laserLineRenderer:this._laserLineRenderer}},
enumerable:!0,configurable:!0});b.prototype.show=function(){if(!this._visible){this._visible=!0;var a=this._sceneView._stage;this._laserLineRenderer=new I(this._sceneView.renderCoordsHelper,{glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,globalAlpha:this._params.laserLineGlobalAlpha});a.addExternalRenderer(this._laserLineRenderer.renderSlots,this._laserLineRenderer);this._addToStage(a);
this._directDistanceLabel.addToView(this._sceneView);this._horizontalDistanceLabel.addToView(this._sceneView);this._verticalDistanceLabel.addToView(this._sceneView);this._initializeListeners();this._updateCursorPosition();this._updateStartPosition();this._updateEndPosition();this._updateMouseCursor();this._updateView()}};b.prototype.hide=function(){if(this._visible){this._visible=!1;var a=this._sceneView._stage;a.removeExternalRenderer(this._laserLineRenderer);this._laserLineRenderer=null;this._removeFromStage(a);
this._directDistanceLabel.removeFromView(this._sceneView);this._horizontalDistanceLabel.removeFromView(this._sceneView);this._verticalDistanceLabel.removeFromView(this._sceneView);this._destroyListeners();this._sceneView.cursor=null}};b.prototype.handleAt=function(a,c){a=a.toArray();c="touch"===c?this._params.handleRadiusTouch:this._params.handleRadiusMouse;return this._model.endPoint&&m.pointToScreenPositionDistance(this._model.endPoint,a,this._sceneView)<c?"end":this._model.startPoint&&m.pointToScreenPositionDistance(this._model.startPoint,
a,this._sceneView)<c?"start":null};b.prototype.pick=function(a){for(var c=[],e=this._sceneView._stage.getViewContent(),f=this._sceneView._stage.getAll(d.ContentType.LAYER),p=0;p<e.length;p++){var k=f[e[p]];k&&k!==this._layer&&k.isPickable&&c.push(k.id)}e=this._sceneView.spatialReference;a=this._sceneView._stage.pick([a.screenPoint.x,this._sceneView.height-a.screenPoint.y],c,!0,this._selector).getMinResult();c=g.vec3d.create();if(!a.getIntersectionPoint(c))return new b.PickResult;e=this._sceneView.renderCoordsHelper.fromRenderCoords(c,
e);return new b.PickResult("terrain"===a.intersector?"surface":"feature",c,e)};b.prototype.getElevation=function(a){return this._sceneView.basemapTerrain.ready?this._sceneView.basemapTerrain.getElevation(a)||0:0};b.prototype.overlappingHandles=function(a,c){return m.pointToPointScreenDistance(a,c,this._sceneView)<=this._params.handleRadius};b.prototype._createMaterials=function(){this._handleMaterial=new N({diffuse:this._params.handleColor,transparent:1!==this._params.handleOpacity,opacity:this._params.handleOpacity,
castShadows:!1},"handle");this._handleMaterial.renderOccluded=!0;this._triangleLineMaterial=new D({width:this._params.triangleLineWidth,color:this._params.triangleColor,polygonOffset:!0},"triangle-line");this._triangleLineMaterial.renderOccluded=!0;this._triangleCornerMaterial=new M({color:this._params.triangleColor,transparent:!0,polygonOffset:!0},"triangle-corner");this._triangleCornerMaterial.renderOccluded=!0;this._arrowMaterial=new O({outlineColor:this._params.arrowOutlineColor,stripeEvenColor:this._params.arrowStripeEvenColor,
stripeOddColor:this._params.arrowStripeOddColor,polygonOffset:!0},"arrow");this._arrowMaterial.renderOccluded=!0;this._geodesicProjectionLineMaterial=new D({width:this._params.geodesicProjectionLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0},"geodesic-line");this._geodesicProjectionLineMaterial.renderOccluded=!0;this._geodesicGuideLineMaterial=new D({width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stippleLength:0},"geodesic-guide");
this._geodesicGuideLineMaterial.renderOccluded=!0};b.prototype._createObjects=function(){this._startHandleObject=new r;this._startHandleObject.addGeometry(this._handleGeometry,[this._handleMaterial],g.mat4d.identity());this._layer.addObject(this._startHandleObject);this._endHandleObject=new r;this._endHandleObject.addGeometry(this._handleGeometry,[this._handleMaterial],g.mat4d.identity());this._layer.addObject(this._endHandleObject);this._triangleLineObject=new r;this._layer.addObject(this._triangleLineObject);
this._triangleCornerObject=new r;this._layer.addObject(this._triangleCornerObject);this._arrowObject=new r;this._layer.addObject(this._arrowObject);this._geodesicProjectionLineObject=new r;this._layer.addObject(this._geodesicProjectionLineObject);this._geodesicProjectionStartGuideObject=new r;this._layer.addObject(this._geodesicProjectionStartGuideObject);this._geodesicProjectionEndGuideObject=new r;this._layer.addObject(this._geodesicProjectionEndGuideObject)};b.prototype._addToStage=function(a){a.add(d.ContentType.LAYER,
this._layer);a.add(d.ContentType.MATERIAL,this._handleMaterial);a.add(d.ContentType.MATERIAL,this._triangleLineMaterial);a.add(d.ContentType.MATERIAL,this._triangleCornerMaterial);a.add(d.ContentType.MATERIAL,this._arrowMaterial);a.add(d.ContentType.MATERIAL,this._geodesicProjectionLineMaterial);a.add(d.ContentType.MATERIAL,this._geodesicGuideLineMaterial);a.add(d.ContentType.OBJECT,this._startHandleObject);a.add(d.ContentType.OBJECT,this._endHandleObject);a.add(d.ContentType.OBJECT,this._triangleLineObject);
a.add(d.ContentType.OBJECT,this._triangleCornerObject);a.add(d.ContentType.OBJECT,this._arrowObject);a.add(d.ContentType.OBJECT,this._geodesicProjectionLineObject);a.add(d.ContentType.OBJECT,this._geodesicProjectionStartGuideObject);a.add(d.ContentType.OBJECT,this._geodesicProjectionEndGuideObject);a.addToViewContent([this._layer.id])};b.prototype._removeFromStage=function(a){a.removeFromViewContent([this._layer.id]);a.remove(d.ContentType.LAYER,this._layer.id);a.remove(d.ContentType.MATERIAL,this._handleMaterial.id);
a.remove(d.ContentType.MATERIAL,this._triangleLineMaterial.id);a.remove(d.ContentType.MATERIAL,this._triangleCornerMaterial.id);a.remove(d.ContentType.MATERIAL,this._arrowMaterial.id);a.remove(d.ContentType.MATERIAL,this._geodesicProjectionLineMaterial.id);a.remove(d.ContentType.MATERIAL,this._geodesicGuideLineMaterial.id);a.remove(d.ContentType.OBJECT,this._startHandleObject.id);a.remove(d.ContentType.OBJECT,this._endHandleObject.id);a.remove(d.ContentType.OBJECT,this._triangleLineObject.id);a.remove(d.ContentType.OBJECT,
this._triangleCornerObject.id);a.remove(d.ContentType.OBJECT,this._arrowObject.id);a.remove(d.ContentType.OBJECT,this._geodesicProjectionLineObject.id);a.remove(d.ContentType.OBJECT,this._geodesicProjectionStartGuideObject.id);a.remove(d.ContentType.OBJECT,this._geodesicProjectionEndGuideObject.id)};b.prototype._getLabelPositions=function(a,c,e,b,p){var k=this._model.triangleView.collapsed;h.push();var f=h.allocate(),d=h.allocate();p.projectPoint(e,f);p.projectPoint(c,d);f={direct:k?"top":"bottom",
horizontal:"top",vertical:f[0]<d[0]?"left":"right"};k||(d=h.allocate(),k=h.allocate(),m.screenSpaceTangent(a,e,d,p),m.screenSpaceTangent(a,c,k,p),g.vec2d.dot(d,k)>=F?f.direct=q.sign(d[1])===q.sign(k[1])?B.mirrorPosition(f.vertical):f.vertical:(a=h.allocate(),m.screenSpaceTangent(e,c,a,p),g.vec2d.dot(a,k)>=F&&(f.direct=q.sign(a[0])===q.sign(k[0])?B.mirrorPosition(f.horizontal):f.horizontal)));"below-the-surface"===b&&(c=function(a){return"top"===a?"bottom":"top"},f.direct=c(f.direct),f.horizontal=
c(f.horizontal),f.vertical=c(f.vertical));h.pop();return f};b.prototype._updateView=function(){if(this._sceneView.ready){var a=this._sceneView._stage.getCamera(),c=this._sceneView.renderCoordsHelper;this._updateHandleObject(this._startHandleObject,this._startPosition,null!==this._model.startPoint,"start"===this._model.hoveredHandle,this._model.draggedHandles.includes("start"),a);this._updateHandleObject(this._endHandleObject,this._endPosition,null!==this._model.endPoint,"end"===this._model.hoveredHandle,
this._model.draggedHandles.includes("end"),a);var e=this._model.triangleView;if(e.visible){var f="camera-dependent"===this._model.measurementSurfaceLocation?this._sceneView.state.camera.aboveGround?"above-the-surface":"below-the-surface":this._model.measurementSurfaceLocation,b=this._startPosition,k=this._endPosition,d="above-the-surface"===f?1:-1,h=d*(c.getAltitude(k)-c.getAltitude(b));0>h&&(k=[k,b],b=k[0],k=k[1]);var n=this._cornerPosition;c.worldUpAtPosition(b,n);g.vec3d.scale(n,d*Math.abs(h));
g.vec3d.add(n,b);c=this._centerPosition;m.midpoint([b,k,n],c);g.vec3d.set(c,this._origin);g.mat4d.identity(this._originTransform);g.mat4d.translate(this._originTransform,this._origin);e.collapsed?(this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries()):this._updateTriangleObjects(this._triangleLineObject,this._triangleCornerObject,b,k,n,this._origin,this._originTransform,a,e.mode,this._horizontalLabelSegment,this._verticalLabelSegment);this._updateArrowObject(this._arrowObject,
this._startPosition,this._endPosition,this._origin,this._originTransform,e.stripeLength,a,e.mode,this._arrowLabelSegment);c=this._requiresGeodesicGuides(this._startPosition,this._endPosition,a,e.mode);this._updateGeodesicProjectionLineObject(this._geodesicProjectionLineObject,this._startPosition,this._endPosition,this._origin,this._originTransform,c,this._geodesicProjectionLabelSegment);this._updateGeodesicProjectionGuideObjects(a,c);d=this._params.labelDistance;f=this._getLabelPositions(b,k,n,f,
a);this._updateAuxiliaryMeasureLabels(e,a,f);"geodesic"!==e.mode?this._updateLabel(this._directDistanceLabel,this._arrowLabelSegment,d,f.direct,e.directLabel,e.visible,u.Large,a):(this._updateLabel(this._horizontalDistanceLabel,c?this._geodesicProjectionLabelSegment:this._arrowLabelSegment,d,f.horizontal,e.horizontalLabel,e.visible,u.Large,a),this._directDistanceLabel.visible=!1)}else this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries(),this._arrowObject.removeAllGeometries(),
this._geodesicProjectionLineObject.removeAllGeometries(),this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries(),this._directDistanceLabel.visible=!1,this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=!1}};b.prototype._updateAuxiliaryMeasureLabels=function(a,c,e){if(a.collapsed)this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=!1;else{var f=this._params.labelDistance;this._updateLabel(this._horizontalDistanceLabel,
this._horizontalLabelSegment,f,e.horizontal,a.horizontalLabel,!0,u.Small,c);this._updateLabel(this._verticalDistanceLabel,this._verticalLabelSegment,f,e.vertical,a.verticalLabel,!0,u.Small,c)}};b.prototype._updateHandleObject=function(a,c,e,f,b,k){a.removeAllGeometries();e&&!b&&(m.scaleTranslateMatrix((f?this._params.handleRadiusHovered:this._params.handleRadius)*k.computePixelSizeAt(c),c,this._tempMat4),a.addGeometry(this._handleGeometry,[this._handleMaterial],this._tempMat4))};b.prototype._updateTriangleObjects=
function(a,c,e,f,b,k,d,l,n,v,m){h.push();n=[g.vec3d.subtract(e,k,h.allocate()),g.vec3d.subtract(b,k,h.allocate()),g.vec3d.subtract(f,k,h.allocate())];v.update(b,f);m.update(e,b);v=new z(C.createPolylineGeometry(n),"triangle-line");a.removeAllGeometries();a.addGeometry(v,[this._triangleLineMaterial],d);a=h.allocate();v=h.allocate();g.vec3d.subtract(b,e,a);g.vec3d.normalize(a,a);g.vec3d.subtract(f,b,v);g.vec3d.normalize(v,v);e=.33*Math.min(g.vec3d.dist(b,e),g.vec3d.dist(b,f));l=this._params.triangleCornerSize*
l.computePixelSizeAt(b);b=new z(this._quadGeometryData(b,a,v,Math.min(e,l),k),"triangle-corner");c.removeAllGeometries();c.addGeometry(b,[this._triangleCornerMaterial],d);h.pop()};b.prototype._updateArrowObject=function(a,c,e,b,d,k,h,g,n){this._createInterpolatedLineGeometry(a,this._arrowMaterial,"arrow",c,e,b,d,g,this._arrowLabelSegment);a=h.computePixelSizeAt(n.origin);this._arrowMaterial.setParameterValues({width:this._params.arrowWidth*a,stripeLength:k})};b.prototype._getSegmentInterpolator=function(a,
c){var e=this._sceneView.spatialReference,b=this._sceneView.renderCoordsHelper.spatialReference;return e.isWebMercator||e.isWGS84?new E.Spherical(a,c,b,b):new E.Linear(a,c)};b.prototype._updateGeodesicProjectionLineObject=function(a,c,b,f,d,k,m){k?(h.push(),k=this._sceneView.renderCoordsHelper,c=g.vec3d.set(c,h.allocate()),b=g.vec3d.set(b,h.allocate()),k.setAltitude(0,c),k.setAltitude(0,b),this._createInterpolatedLineGeometry(a,this._geodesicProjectionLineMaterial,"geodesicProjectionLine",c,b,f,d,
"geodesic",m),h.pop()):a.removeAllGeometries()};b.prototype._requiresGeodesicGuides=function(a,c,b,f){return"geodesic"===f&&this._model.geodesicDistanceExceeded?this._requiresGeodesicGuideAt(a,b)||this._requiresGeodesicGuideAt(c,b):!1};b.prototype._requiresGeodesicGuideAt=function(a,b){var c=this._sceneView.renderCoordsHelper;b=b.computePixelSizeAt(a);return 10<=c.getAltitude(a)/b};b.prototype._updateGeodesicProjectionGuideObjects=function(a,b){if(b){h.push();b=this._sceneView.renderCoordsHelper;
var c=g.vec3d.set(this._startPosition,h.allocate()),f=g.vec3d.set(this._endPosition,h.allocate());b.setAltitude(0,c);b.setAltitude(0,f);this._createInterpolatedLineGeometry(this._geodesicProjectionStartGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",c,this._startPosition,this._origin,this._originTransform,"euclidean");this._createInterpolatedLineGeometry(this._geodesicProjectionEndGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",f,this._endPosition,this._origin,this._originTransform,
"euclidean");a=Math.min(a.computePixelSizeAt(this._startPosition),a.computePixelSizeAt(c),a.computePixelSizeAt(this._endPosition),a.computePixelSizeAt(f));this._geodesicGuideLineMaterial.setParameterValues({stippleLength:this._params.guideStippleLengthPixels*a});h.pop()}else this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries()};b.prototype._createInterpolatedLineGeometry=function(a,b,e,f,d,k,t,l,n){h.push();var c=this._sceneView.renderCoordsHelper,
p=[],r=[],u=function(a,b){var c=h.allocate();g.vec3d.subtract(a,k,c);p.push(c);r.push(b)};if("euclidean"===l){var q=h.allocate();m.midpoint([f,d],q);l=h.allocate();c.worldUpAtPosition(q,l);u(f,l);u(d,l);n&&n.update(f,d)}else{f=this._getSegmentInterpolator(f,d);d=this._params.arrowSubdivisions+1&-2;for(var w=q=null,x=0;x<d;++x){var Q=x/(d-1),y=h.allocate();l=h.allocate();f.eval(Q,y);c.worldUpAtPosition(y,l);x===d/2-1?q=y:x===d/2&&(w=y);u(y,l)}n&&n.update(q,w)}e=new z(C.createPolylineGeometry(p,r),
e);a.removeAllGeometries();a.addGeometry(e,[b],t);h.pop()};b.prototype._quadGeometryData=function(a,b,e,d,p){h.push();var c=h.allocate(),f=[],l=h.allocate();g.vec3d.scale(e,d,l);e=h.allocate();g.vec3d.scale(b,-d,e);for(b=0;4>b;++b)g.vec3d.set(a,c),g.vec3d.subtract(c,p),b&1&&g.vec3d.add(c,l),b&2&&g.vec3d.add(c,e),f.push(c[0],c[1],c[2]);a=new J({position:{size:3,data:f}},{position:new Uint32Array([0,1,2,1,2,3])});h.pop();return a};b.prototype._updateLabel=function(a,b,d,f,g,k,m,l){h.push();var c=h.allocate(),
e=h.allocate();b=B.computeLabelPositionFromSegment(l,b,d,f,c,e);a.updatePosition(c,e);a.text=g;a.visible=b&&k;a.fontSize=m;h.pop()};b.prototype._updateMouseCursor=function(){if("drawing"===this._model.state||"initial"===this._model.state)this._sceneView.cursor="crosshair";else if("editing"===this._model.state||"measured"===this._model.state)this._sceneView.cursor=0<this._model.draggedHandles.length?"grabbing":this._model.hoveredHandle?"pointer":"crosshair"};b.prototype._updateCursorPosition=function(){this._model.cursorPoint&&
this._sceneView.renderCoordsHelper.toRenderCoords(this._model.cursorPoint,this._cursorPosition);this._updateLaserLine()};b.prototype._updateStartPosition=function(){this._model.startPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.startPoint,this._startPosition);this._updateLaserLine()};b.prototype._updateEndPosition=function(){this._model.endPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.endPoint,this._endPosition);this._updateLaserLine()};b.prototype._lastAddedDraggedHandle=
function(){return 0<this._model.draggedHandles.length?this._model.draggedHandles.items[this._model.draggedHandles.length-1]:null};b.prototype._getFocusPosition=function(){var a=this._model,b=a.triangleView.visible&&a.triangleView.collapsed&&"euclidean"===a.measurementMode;switch(a.state){case "drawing":return b?this._startPosition:a.endPoint?this._endPosition:this._startPosition;case "editing":return b?"start"===this._lastAddedDraggedHandle()?this._endPosition:this._startPosition:"start"===this._lastAddedDraggedHandle()?
this._startPosition:this._endPosition;default:return a.cursorPoint?this._cursorPosition:null}};b.prototype._getFocusSpherePosition=function(){return"drawing"===this._model.state||"end"===this._lastAddedDraggedHandle()?this._startPosition:this._endPosition};b.prototype._updateLaserLine=function(){var a=this._model,b=this._getFocusPosition(),d=this._params.laserLineEnabled&&!!b&&"measured"!==a.state;d?(this._laserLineRenderer.focusPlaneActive=d&&"euclidean"===a.measurementMode,this._laserLineRenderer.focusSphereActive=
d&&!!a.startPoint&&"geodesic"===a.measurementMode,this._laserLineRenderer.focusPosition=b,this._laserLineRenderer.focusSpherePosition=this._getFocusSpherePosition(),this._laserLineRenderer.segmentActive=d&&a.triangleView.visible&&!a.triangleView.collapsed,this._laserLineRenderer.segmentStartPosition=this._startPosition,this._laserLineRenderer.segmentEndPosition=this._endPosition):(this._laserLineRenderer.focusPlaneActive=!1,this._laserLineRenderer.focusSphereActive=!1,this._laserLineRenderer.segmentActive=
!1)};b.prototype._initializeListeners=function(){var a=this;this._listenerHandles=new G;this._listenerHandles.add(this._model.watch("state",function(){a._updateMouseCursor();a._updateLaserLine()}));this._listenerHandles.add(this._model.watch("measurementMode",function(){a._updateLaserLine()}));this._listenerHandles.add(this._model.watch("hoveredHandle",function(){a._updateMouseCursor();a._updateView()}));this._listenerHandles.add(this._model.draggedHandles.on("change",function(){a._updateMouseCursor();
a._updateView()}));this._listenerHandles.add(this._model.watch("cursorPoint",function(){a._updateCursorPosition()}));this._listenerHandles.add(this._model.watch("startPoint",function(){a._updateStartPosition();a._updateView()}));this._listenerHandles.add(this._model.watch("endPoint",function(){a._updateEndPosition();a._updateView()}));this._listenerHandles.add(this._model.watch("unit",function(){a._updateView()}));this._listenerHandles.add(this._sceneView.state.watch("camera",function(){a._updateView()}))};
b.prototype._destroyListeners=function(){this._listenerHandles.destroy();this._listenerHandles=null};return b}();(function(b){var a=function(){return function(){}}();b.PickRequest=a;a=function(){return function(a,b,d){void 0===a&&(a=null);void 0===b&&(b=null);void 0===d&&(d=null);this.type=a;this.scenePoint=b;this.mapPoint=d}}();b.PickResult=a})(t||(t={}));var F=Math.cos(q.deg2rad(12));return t});