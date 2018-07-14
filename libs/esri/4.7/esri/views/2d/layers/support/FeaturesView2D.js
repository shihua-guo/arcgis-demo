// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../Graphic ../../../../core/Collection ../../../../core/Handles ../../../../core/Logger ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators ../../../../renderers/support/renderingInfoUtils ../../../../symbols/Symbol3D ../../engine/graphics/GFXGroup ../../engine/graphics/GFXObject ../../engine/graphics/GFXSurface ../../../layers/GraphicsView".split(" "),function(z,
A,r,g,t,u,v,w,k,f,l,m,n,h,x,y){var p=w.getLogger("esri.views.2d.layers.support.FeaturesView2D");return function(q){function d(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];var b=q.apply(this,a)||this;b._handles=new v;b._backgroundGroup=new n;b._frontGroup=new n;b._frontObjects=new Map;b._backgroundObjects=new Map;b._scale=0;b.container=new x;b.layer=null;b.container.addChild(b._backgroundGroup);b.container.addChild(b._frontGroup);b.watch("graphics",function(){return b._reset()});b.watch("renderer",
function(){return b._resymbolize()});b.watch("mapView.scale, mapView.stationary",function(){return b._applyScale()});return b}r(d,q);d.prototype.destroy=function(){this.renderer=this.graphics=null};d.prototype.hitTest=function(a,c){a+=this.mapView.position[0]-window.pageXOffset;c+=this.mapView.position[1]-window.pageYOffset;return(a=this.container.hitTest(a,c))?k.resolve(a.graphic):k.resolve()};d.prototype.graphicUpdateHandler=function(a){};d.prototype._reset=function(){var a=this;this._handles.remove("graphics");
this.graphics&&(this.graphics.forEach(this._add,this),this._handles.add(this.graphics.on("change",function(c){return a._graphicsChangeHandler(c)}),"graphics"))};d.prototype._applyScale=function(){var a=this.get("mapView.scale"),c=this.get("mapView.stationary");a!==this._scale&&c&&(this._scale=a,this._resymbolize())};d.prototype._resymbolize=function(){var a=this;this.graphics&&this.graphics.forEach(function(c){return a._resymbolizeGraphic(c)})};d.prototype._add=function(a){if(!this._frontObjects.has(a)){var c=
l.getRenderingInfo(a,{renderer:this.renderer,viewingMode:"map",scale:this.mapView.state.scale,resolution:this.mapView.state.resolution,spatialReference:this.mapView.spatialReference});if(c)if(c.symbol instanceof m)p.error("3D symbols are not supported with MapView");else{var b=new h;b.graphic=a;b.renderingInfo=c;this._frontObjects.set(a,b);this._frontGroup.addChild(b);var d=c.renderer&&c.renderer.backgroundFillSymbol;d&&b.isPolygonMarkerSymbol&&(b=new h,b.graphic=a,b.renderingInfo=null!=c.outlineSize?
{symbol:d,size:[c.outlineSize,c.outlineSize,c.outlineSize]}:{symbol:d},this._backgroundObjects.set(a,b),this._backgroundGroup.addChild(b))}}};d.prototype._remove=function(a){var c=this._frontObjects.get(a);c&&(this._frontObjects.delete(a),this._frontGroup.removeChild(c),this._backgroundObjects.has(a)&&(c=this._backgroundObjects.get(a),this._backgroundObjects.delete(a),this._backgroundGroup.removeChild(c)))};d.prototype._resymbolizeGraphic=function(a){if(this._frontObjects.has(a)){var c=l.getRenderingInfo(a,
{renderer:this.renderer,viewingMode:"map",scale:this.mapView.state.scale,resolution:this.mapView.state.resolution,spatialReference:this.mapView.spatialReference});if(c)if(c.symbol instanceof m)p.error("3D symbols are not supported with MapView");else{var b=this._frontObjects.get(a);b&&(b.renderingInfo=c);var d=c.renderer&&c.renderer.backgroundFillSymbol,e=this._backgroundObjects.get(a);d&&b.isPolygonMarkerSymbol?(e||(e=new h,e.graphic=a,this._backgroundObjects.set(a,e),this._backgroundGroup.addChild(e)),
e.renderingInfo=null!=c.outlineSize?{symbol:d,size:[c.outlineSize,c.outlineSize,c.outlineSize]}:{symbol:d}):!d&&e&&(this._backgroundObjects.delete(a),this._backgroundGroup.removeChild(e))}}};d.prototype._graphicsChangeHandler=function(a){for(var c=a.removed,b=0,d=a.added;b<d.length;b++)a=d[b],this._add(a);for(b=0;b<c.length;b++)a=c[b],this._remove(a)};g([f.property()],d.prototype,"container",void 0);g([f.property(),f.cast(u.ofType(t))],d.prototype,"graphics",void 0);g([f.property()],d.prototype,"layer",
void 0);g([f.property()],d.prototype,"mapView",void 0);return d=g([f.subclass("esri.views.2d.layers.support.FeaturesView2D")],d)}(f.declared(y))});