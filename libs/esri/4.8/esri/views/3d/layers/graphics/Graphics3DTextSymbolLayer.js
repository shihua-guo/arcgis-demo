// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../Color ../../../../core/screenUtils ../../../../symbols/callouts/calloutUtils ./ElevationAligners ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/TextTexture ../../webgl-engine/materials/HUDMaterial".split(" "),function(M,N,u,A,v,E,F,G,q,w,x,H,I,J,B){var C=[1,1,1,1],K=[0,0,1],y={mode:"relative-to-ground",
offset:0},L=[0,0,0,1];return function(d){function c(){var a=null!==d&&d.apply(this,arguments)||this;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1};return a}u(c,d);c.prototype._prepareResources=function(){if(!this._isPropertyDriven("size")){var a=x.validateSymbolLayerSize(this._getTextSize());if(a){this._logWarning(a);this.reject();return}}this._anchor="center";this.resolve()};c.prototype.destroy=function(){d.prototype.destroy.call(this);this.isFulfilled()||this.reject()};
c.prototype.createGraphics3DGraphic=function(a,b,c,z){void 0===b&&(b={});a=a.graphic;var e=q.placePointOnGeometry(a.geometry);if(!e)return this._logWarning("unsupported geometry type for text symbol: "+a.geometry.type),null;var d=b.text||this.symbol.text;if(!d||1>d.length)return null;null!=b.needsOffsetAdjustment&&(this._elevationOptions.needsOffsetAdjustment=b.needsOffsetAdjustment);var k=this.getGraphicElevationContext(a,b.elevationOffset||0);return this._createAs3DShape(this.symbol,e,d,k,this._context.layer.id+
"_label_"+a.uid,a.uid,b,c,z,"polyline"===a.geometry.type)};c.prototype.getGraphicElevationContext=function(a,b){void 0===b&&(b=0);a=d.prototype.getGraphicElevationContext.call(this,a);a.addOffsetRenderUnits(b);return a};c.prototype.layerPropertyChanged=function(a,b,c){if("opacity"===a)this._logWarning("layer opacity change not yet implemented in Graphics3DTextSymbolLayer");else if("elevationInfo"===a){this._updateElevationContext();if(b)for(var d in b){a=b[d];var e=c(a);e&&this.updateGraphicElevationContext(a.graphic,
e)}return!0}return!1};c.prototype.updateGraphicElevationContext=function(a,b){a=this.getGraphicElevationContext(a,b.metadata.elevationOffset);b.elevationContext.set(a);b.needsElevationUpdates=q.needsElevationUpdates2D(a.mode)||"absolute-height"===a.mode};Object.defineProperty(c.prototype,"numberOfVertices",{get:function(){return 6},enumerable:!0,configurable:!0});c.prototype._defaultElevationInfoNoZ=function(){return y};c.prototype._createAs3DShape=function(a,b,c,d,e,u,k,f,m,h){var p=k.centerOffset||
L,r=k.screenOffset||[0,0],t=k.debugDrawBorder||!1,w=k.translation||[0,0,0],D=k.anchor||this._anchor||"center";this._anchor=D;var x=a.material?A.toUnitRGBA(a.material.color):C,n=a.halo&&a.halo.color&&0<a.halo.size,y=n?A.toUnitRGBA(a.halo.color):C,n=n?v.pt2px(a.halo.size):0,z=this._getTextSize(a),l=new J(c,{size:z,color:x,font:{family:a.font&&a.font.family?a.font.family:"sans-serif",weight:a.font&&a.font.weight?a.font.weight:"normal",style:a.font&&a.font.style?a.font.style:"normal"},halo:{size:n,color:y}},
e),g;f?g=k:E.isCalloutSupport(this.symbolContainer)&&this.symbolContainer.hasVisibleVerticalOffset()&&(g=this.symbolContainer);a={textureId:m?m.textureId:l.id,texCoordScale:m?[1,1]:l.texcoordScale,occlusionTest:!0,screenOffset:r,anchorPos:D,polygonOffset:!0,color:[1,1,1,1],centerOffsetUnits:k.centerOffsetUnits,debugDrawBorder:t,drawInSecondSlot:!0};g&&g.verticalOffset&&(g=g.verticalOffset,r=g.minWorldLength,t=g.maxWorldLength,a.verticalOffset={screenLength:v.pt2px(g.screenLength),minWorldLength:r||
0,maxWorldLength:null!=t?t:Infinity});this._context.screenSizePerspectiveEnabled&&(g=this._context.sharedResources,r=g.screenSizePerspectiveSettings,a.screenSizePerspective=g.screenSizePerspectiveSettingsLabels.overridePadding(n),a.screenSizePerspectiveAlignment=r);h&&(a.shaderPolygonOffset=1E-4);h=null;n=JSON.stringify(a);null!=f?(h=f.getMaterial(n),null==h&&(h=new B(a,e),f.addMaterial(n,h))):h=new B(a,e);h=[h];p=I.createPointGeometry(K,w,void 0,m?[0,0]:[l.textWidth,l.textHeight],p,m?[0,0]:null);
p=[new H(p,e)];e=q.createStageObjectForPoint.call(this,b,p,[h],null,null,d,e,this._context.layer.uid,u,!0);if(null===e)return null;f=new G(this,e.object,p,null==f?h:null,m?null:[l],F.perObjectElevationAligner,d);f.alignedTerrainElevation=e.terrainElevation;f.needsElevationUpdates=q.needsElevationUpdates2D(d.mode)||"absolute-height"===d.mode;f.getScreenSize=function(a){void 0===a&&(a=Array(2));a[0]=m?l.textWidth:l.width;a[1]=m?l.textHeight:l.height;return a};f.metadata={labelText:c,elevationOffset:k.elevationOffset||
0};q.extendPointGraphicElevationContext(f,b,this._context.elevationProvider);return f};c.prototype._getTextSize=function(a){return v.pt2px((a||this.symbol).size)||12};return c}(w)});