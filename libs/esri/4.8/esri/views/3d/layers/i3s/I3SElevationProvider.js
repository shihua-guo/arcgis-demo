// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Logger ../../../../core/accessorSupport/decorators ../../../../geometry/support/aaBoundingRect ../../../../layers/graphics/dehydratedFeatures ../../lib/glMatrix ../../support/Evented ../../webgl-engine/lib/Selector".split(" "),function(x,y,q,h,r,t,d,k,u,g,v,w){var e=k.empty(),f={spatialReference:null,extent:e},c=g.vec3d.create(),l=g.vec3d.create(),
m=g.vec3d.create(),n=t.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");return function(p){function a(b){return p.call(this)||this}q(a,p);a.prototype.initialize=function(){this.renderCoordsHelper=this.layerView.view.renderCoordsHelper;this.intersectLayers=[this.stageLayer];this.selector=new w(this.layerView.view.viewingMode);var b=this.layerView.layer.fullExtent;this.zmin=b.zmin;this.zmax=b.zmax};a.prototype.getElevation=function(b){if(u.isPoint(b)){if(!this.renderCoordsHelper.toRenderCoords(b,
c))return n.error("could not project point for elevation alignment"),-Infinity}else if(!this.renderCoordsHelper.toRenderCoords(b,this.spatialReference,c))return n.error("could not project point for elevation alignment"),-Infinity;var a=this.layerView.elevationOffset;b=this.zmin+a;a=this.zmax+a;g.vec3d.set(c,l);g.vec3d.set(c,m);this.renderCoordsHelper.setAltitude(a,l);this.renderCoordsHelper.setAltitude(b,m);this.selector.init(this.intersectLayers,l,m,null,null,1,!1);return this.selector.getMinResult().getIntersectionPoint(c)?
this.renderCoordsHelper.getAltitude(c):-Infinity};a.prototype.layerChanged=function(){this.spatialReference&&(f.extent=this.computeLayerExtent(this.intersectLayers[0]),f.spatialReference=this.spatialReference,this.emit("elevation-change",f))};a.prototype.objectChanged=function(b){this.spatialReference&&(f.extent=this.computeObjectExtent(b),f.spatialReference=this.spatialReference,this.emit("elevation-change",f))};a.prototype.computeObjectExtent=function(b){k.empty(e);this.expandExtent(b,e);return e};
a.prototype.computeLayerExtent=function(b){k.empty(e);var a=0;for(b=b.getObjects();a<b.length;a++)this.expandExtent(b[a],e);return e};a.prototype.expandExtent=function(a,e){for(var b=a.getBBMin(!0),f=a.getBBMax(!0),d=0;8>d;++d)c[0]=d&1?b[0]:f[0],c[1]=d&2?b[1]:f[1],c[2]=d&4?b[2]:f[2],g.mat4d.multiplyVec3(a.objectTransformation,c),this.renderCoordsHelper.fromRenderCoords(c,c,this.spatialReference),k.expand(e,c);return e};h([d.property({constructOnly:!0})],a.prototype,"layerView",void 0);h([d.property({constructOnly:!0})],
a.prototype,"stageLayer",void 0);h([d.property({readOnly:!0,aliasOf:"layerView.view.elevationProvider.spatialReference"})],a.prototype,"spatialReference",void 0);return a=h([d.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],a)}(d.declared(r,v.Evented))});