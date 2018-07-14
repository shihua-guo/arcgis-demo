// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/promiseUtils ../../../../geometry/Extent ../../../../geometry/support/spatialReferenceUtils ../../../../layers/support/TileInfo ../../viewStateUtils ../../engine/Bitmap ../../tiling/TileInfoView ../../tiling/TileKey".split(" "),function(y,z,r,m,p,t,u,n,v,w,x){var e=[0,0,0,0],l=[0,0],q=new x(0,0,0,0),k={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,
imageNormalizationSupported:!1,imageDataAccessRequired:!1,hidpi:!1};return function(){function h(a){this._imagePromise=null;this.hidpi=k.hidpi;this.imageDataAccessRequired=k.imageDataAccessRequired;this.imageMaxWidth=k.imageMaxWidth;this.imageMaxHeight=k.imageMaxHeight;this.imageRotationSupported=k.imageRotationSupported;this.imageNormalizationSupported=k.imageNormalizationSupported;a=r({},k,a);this.container=a.container;this.disposeSource=a.disposeSource;this.fetchSource=a.fetchSource;this.requestUpdate=
a.requestUpdate;this.imageMaxWidth=a.imageMaxWidth;this.imageMaxHeight=a.imageMaxHeight;this.imageRotationSupported=a.imageRotationSupported;this.imageNormalizationSupported=a.imageNormalizationSupported;this.hidpi=a.hidpi}h.prototype.destroy=function(){};Object.defineProperty(h.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0});h.prototype.update=function(a){var b=this,c=a.state,f=t.getInfo(c.spatialReference),g=this.hidpi?a.pixelRatio:1;this._imagePromise&&
(this._imagePromise.cancel(),this._imagePromise=null);if(a.stationary){this.imageRotationSupported?(l[0]=c.width,l[1]=c.height):n.getOuterSize(l,c);a=f&&(c.extent.xmin<f.valid[0]||c.extent.xmax>f.valid[1]);a=!this.imageNormalizationSupported&&a;f=this.imageRotationSupported?c.rotation:0;if(Math.floor(l[0]*g)>this.imageMaxWidth||Math.floor(l[1]*g)>this.imageMaxHeight||a){var d=Math.min(this.imageMaxWidth,this.imageMaxHeight);a&&(d=Math.min(c.worldScreenWidth,d));this._imagePromise=this._tiledExport(c,
d,f,g)}else this._imagePromise=this._singleExport(c,l,f,g);this._imagePromise.then(function(a){b._imagePromise=null;var c=b.container.children.slice();b.container.removeAllChildren();a.forEach(b.container.addChild,b.container);b.disposeSource&&c.forEach(function(a){b.disposeSource(a.source)},b)}).catch(function(a){b._imagePromise=null;if("cancel"!==a.dojoType)throw a;})}};h.prototype.updateExports=function(a,b){for(var c=0,f=this.container.children;c<f.length;c++){var g=f[c];if(!g.visible||!g.attached)break;
a(g,b)?console.error("ExportStrategy.updateExports doesn't support promise yet"):g.requestRender()}};h.prototype._export=function(a,b,c,f,g){var d=this;return m.resolve().then(function(){return d.fetchSource(a,Math.floor(b*g),Math.floor(c*g),{allowImageDataAccess:d.imageDataAccessRequired,rotation:f,pixelRatio:g})}).then(function(d){var e=new v(d);e.x=d.x=a.xmin;e.y=d.y=a.ymax;e.resolution=d.resolution=a.width/b;d.rotation=f;d.pixelRatio=g;e.width=b;e.height=c;return e})};h.prototype._singleExport=
function(a,b,c,f){n.getBBox(e,a.center,a.resolution,b);a=new p(e[0],e[1],e[2],e[3],a.spatialReference);return this._export(a,b[0],b[1],c,f).then(function(a){return[a]})};h.prototype._tiledExport=function(a,b,c,f){var g=this,d=u.create({size:b,spatialReference:a.spatialReference,scales:[a.scale]}),h=new w(d),d=h.getTileCoverage(a);if(!d)return null;var k=[];d.forEach(function(d,l,m,n){q.set(d,l,m,n);h.getTileBounds(e,q);d=new p(e[0],e[1],e[2],e[3],a.spatialReference);k.push(g._export(d,b,b,c,f))});
return m.all(k)};return h}()});