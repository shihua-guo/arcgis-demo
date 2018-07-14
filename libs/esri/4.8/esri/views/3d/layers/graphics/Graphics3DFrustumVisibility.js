// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Handles ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../support/earthUtils ../../support/FrustumExtentIntersection".split(" "),function(q,r,g,e,h,k,l,d,m,n){var p=-.3*m.earthRadius;return function(f){function a(){var b=f.call(this)||this;b.suspended=!0;b._frustumVisibilityDirty=!0;b.extent=null;b.extentIntersectionDirty=
!0;b._isVisibleBelowSurface=!1;b.handles=new k;b.layerView=null;return b}g(a,f);Object.defineProperty(a.prototype,"frustumVisibilityDirty",{get:function(){return this._frustumVisibilityDirty},set:function(b){b!==this._frustumVisibilityDirty&&(this._frustumVisibilityDirty=b,this.notifyChange("updating"))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return this.frustumVisibilityDirty},enumerable:!0,configurable:!0});a.prototype.setup=function(b){var a=
this;this.layerView=b;this.extentIntersection=new n.FrustumExtentIntersection({renderCoordsHelper:b.view.renderCoordsHelper});b=b.view;var c=b.basemapTerrain;this.handles.add([b.on("resize",function(){return a.viewChange()}),b.state.watch("camera",function(){return a.viewChange()},!0),c.on("elevation-bounds-change",function(){return a.elevationBoundsChange()})]);"local"===b.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add(l.init(c,["opacity","wireframe"],function(){return a.isVisibleBelowSurface=
c.isSeeThrough()}))};a.prototype.destroy=function(){this.extentIntersection=this.extent=this.layerView=null;this.handles&&(this.handles.destroy(),this.handles=null)};a.prototype.needsIdleUpdate=function(){return this.frustumVisibilityDirty};a.prototype.setExtent=function(b){this.extent=b;this.frustumVisibilityDirty=this.extentIntersectionDirty=!0};a.prototype.viewChange=function(){this.frustumVisibilityDirty=!0};a.prototype.elevationBoundsChange=function(){this.extentIntersectionDirty=this.frustumVisibilityDirty=
!0};Object.defineProperty(a.prototype,"isVisibleBelowSurface",{set:function(b){this._isVisibleBelowSurface=b;this.extentIntersectionDirty=this.frustumVisibilityDirty=!0},enumerable:!0,configurable:!0});a.prototype.idleUpdate=function(b){!b.done()&&this.frustumVisibilityDirty&&(this.updateSuspendFrustumVisible(),this.frustumVisibilityDirty=!1)};a.prototype.updateExtentIntersection=function(){if(this.extentIntersectionDirty){this.extentIntersectionDirty=!1;var b=this.layerView.view,a;if(this._isVisibleBelowSurface)a=
p;else{a=b.basemapTerrain.getElevationBounds();var c=a[0];a=c-Math.max(1,(a[1]-c)*(1.2-1))}this.extentIntersection.update(this.extent,b.spatialReference,a)}};a.prototype.updateSuspendFrustumVisible=function(){this.extent?(this.updateExtentIntersection(),this._set("suspended",!this.extentIntersection.isVisibleInFrustum(this.layerView.view.frustum))):this._set("suspended",!1)};e([d.property({readOnly:!0})],a.prototype,"suspended",void 0);e([d.property({readOnly:!0})],a.prototype,"updating",null);return a=
e([d.subclass("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],a)}(d.declared(h))});