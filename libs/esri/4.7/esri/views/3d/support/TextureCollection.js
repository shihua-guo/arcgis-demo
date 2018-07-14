// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("../../../core/declare ../../../core/urlUtils dojo/Deferred dojo/_base/lang ../webgl-engine/Stage ../webgl-engine/lib/Texture ../webgl-engine/lib/Util".split(" "),function(g,h,k,l,e,m,n){var f=n.assert;return g(null,{constructor:function(a,b,c){this._streamDataSupplier=a;this._stage=b;this._textureRecords={};this._loadedHandler=this._loadedHandler.bind(this);this._errorHandler=this._errorHandler.bind(this);this._textureOptions=c||{}},acquire:function(a,b,c){var d;if(d=this._textureRecords[a])return d.referenceCount++,
d.texture||d.clientDfd;if(b)return c=b(a),this._stage.add(e.ModelContentType.TEXTURE,c),d={texture:c,referenceCount:1},this._textureRecords[a]=d,c;d=new k;b=this._streamDataSupplier.request(a,"image");this._textureRecords[a]={clientDfd:d,loaderDfd:b,texture:null,size:Math.ceil(c||0),referenceCount:1};b.then(this._loadedHandler,this._errorHandler);return d.promise},release:function(a){var b=this._textureRecords[a];b?(1>b.referenceCount&&console.warn("TextureCollection: reference count is \x3c 1 for "+
a),b.referenceCount--,1>b.referenceCount&&(b.texture?(this._stage.remove(e.ModelContentType.TEXTURE,b.texture.id),b.texture=null):this._streamDataSupplier.cancelRequest(b.loaderDfd),delete this._textureRecords[a])):console.warn("TextureCollection: texture doesn't exist: "+a)},isInUse:function(a){a=this._textureRecords[a];f(!a||0<a.referenceCount,"texture record with zero reference count");return!!a},_loadedHandler:function(a,b){var c=this._textureRecords[a];f(c&&!c.texture);if(h.isSVG(a)&&(c.size||
0===b.width&&0===b.height)){a=b.width?b.height/b.width:1;var d=c.size||64;1<a?(b.width=Math.round(d/a),b.height=d):(b.width=d,b.height=Math.round(d*a))}a=l.mixin({width:b.width,height:b.height},this._textureOptions);b=new m(b,"symbol",a);this._stage.add(e.ModelContentType.TEXTURE,b);c.texture=b;c.clientDfd.resolve(b)},_errorHandler:function(a){a=this._textureRecords[a];f(a&&!a.texture);a.clientDfd.reject()}})});