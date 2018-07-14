// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../geometry/Point ../../../../layers/graphics/dehydratedFeatures ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ../../../../views/3d/lib/glMatrix ../../support/projectionUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Util ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(B,Y,K,L,M,N,n,O,P,C,Q,D,R,E,S,F,T){function U(k,d,b,a){k=k.stageObject;for(var e=k.getGeometryRecords(),G=e.length,p="absolute-height"!==d.mode,l=0,f=0;f<G;f++){var H=e[f].geometry,r=[e[f].transformation[12],e[f].transformation[13],e[f].transformation[14]],h=H.getData().getVertexAttr(),t=h[V.POSITION].data,W=h.zOffset.data,h=h.mapPos.data,w=h.length/3;X(t.length/3===w*A+2,"unexpected tube geometry");var m=0,x=0;z.spatialReference=b.spatialReference;for(var v=0,c=0;c<w;c++){z.x=h[3*c];z.y=
h[3*c+1];z.z=h[3*c+2];var g=n.computeElevation(b,z,d,a,p?I:null);p&&(v+=I.terrainElevation);var u=A;0!==c&&c!==w-1||u++;for(var y=0;y<u;y++)q[0]=t[m]+r[0],q[1]=t[m+1]+r[1],q[2]=t[m+2]+r[2],a.setAltitude(g+W[x],q),t[m]=q[0]-r[0],t[m+1]=q[1]-r[1],t[m+2]=q[2]-r[2],m+=3,x+=1;H.invalidateBoundingInfo()}k.geometryVertexAttrsUpdated(f);l+=v/w}return l/G}var y=C.vec3d,J=C.mat4d,X=F.assert;B=function(k){function d(){return null!==k&&k.apply(this,arguments)||this}K(d,k);d.prototype._prepareResources=function(){if(!this._isPropertyDriven("size")){var b=
P.validateSymbolLayerSize(this._getSymbolSize());if(b){this._logWarning(b);this.reject();return}}var b=this._getStageIdHint(),a=this._getMaterialOpacityAndColor(),e=y.create(a),a=a[3],e={diffuse:e,ambient:e,opacity:a,transparent:1>a||this._isPropertyDriven("opacity"),vertexColors:this._isPropertyDriven("color")||this._isPropertyDriven("opacity")};this._material=new T(e,b+"_3dlinemat");this._context.stage.add(D.ModelContentType.MATERIAL,this._material);this.resolve()};d.prototype.destroy=function(){k.prototype.destroy.call(this);
this.isFulfilled()||this.reject();this._material&&(this._context.stage.remove(D.ModelContentType.MATERIAL,this._material.id),this._material=null)};d.prototype.createGraphics3DGraphic=function(b){var a=b.graphic;if("polyline"!==a.geometry.type)return this._logWarning("unsupported geometry type for path symbol: "+a.geometry.type),null;if(!this._validateGeometry(a.geometry))return null;var e="graphic"+a.uid,d=this.getGraphicElevationContext(a);return this._createAs3DShape(a,b.renderingInfo,d,e,a.uid)};
d.prototype.layerPropertyChanged=function(b,a,e){if("opacity"===b)return a=this._getMaterialOpacity(),e=1>a||this._isPropertyDriven("opacity"),this._material.setParameterValues({opacity:a,transparent:e}),!0;if("elevationInfo"===b){this._updateElevationContext();for(var d in a){var p=a[d];if(b=e(p))p=this.getGraphicElevationContext(p.graphic),b.needsElevationUpdates=n.needsElevationUpdates3D(p.mode),b.elevationContext.set(p)}return!0}return!1};Object.defineProperty(d.prototype,"numberOfVertices",{get:function(){return 0},
enumerable:!0,configurable:!0});d.prototype._getPathSize=function(b){b=b.size&&this._isPropertyDriven("size")?n.getSingleSizeDriver(b.size):this._getSymbolSize();return b/=this._context.renderCoordsHelper.unitInMeters};d.prototype._getSymbolSize=function(){return this.symbol.size||1};d.prototype._createAs3DShape=function(b,a,e,d,p){var l=b.geometry,f=l.paths;b=[];var k=[],r=[],h=y.create(),t=this._context.renderSpatialReference===Q.SphericalECEFSpatialReference,q=Array(6),w=this._getPathSize(a),l=
n.getGeometryVertexData3D(f,M.hasZ(l),l.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,this._context.renderCoordsHelper,e);this._logGeometryCreationWarnings(l,f,"paths","PathSymbol3DLayer");if(0<f.length){for(var f=l.geometryData.outlines,m=l.eleVertexData,x=l.vertexData,v=0;v<f.length;++v){var c=f[v];if(!(1>=c.count)){var g=c.index,u=c.count;if(this._context.clippingExtent&&(n.computeBoundingBox(m,g,u,q),n.boundingBoxClipped(q,this._context.clippingExtent)))continue;
n.chooseOrigin(x,g,u,h);n.subtractCoordinates(x,g,u,h);c=new Float64Array(m.buffer,3*g*m.BYTES_PER_ELEMENT,3*u);g=n.flatArrayToArrayOfArrays(x,g,u);g=E.createTubeGeometry(g,.5*w,A,t,h);g.getVertexAttr().mapPos={size:3,data:c,offsetIdx:0,strideIdx:3};this._material.getParams().vertexColors&&(c=this._getVertexOpacityAndColor(a),g=E.addVertexColors(g,c));c=new R(g,d+"path"+v);c.singleUse=!0;b.push(c);k.push([this._material]);c=J.identity();J.translate(c,h,c);r.push(c)}}if(0<b.length)return a=new S({geometries:b,
materials:k,transformations:r,castShadow:!0,metadata:{layerUid:this._context.layer.uid,graphicUid:p},idHint:d}),a=new N(this,a,b,null,null,U,e),a.alignedTerrainElevation=l.terrainElevation,a.needsElevationUpdates=n.needsElevationUpdates3D(e.mode),a}return null};return d}(O);var V=F.VertexAttrConstants,q=y.create(),z=new L,I={verticalDistanceToGround:0,terrainElevation:0},A=10;return B});