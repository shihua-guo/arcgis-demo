// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/has","./StyleLayer"],function(n,p,m,k){return function(){function l(a,d){this.styleJSON=a;this.version=parseFloat(a.version);this.sprite=d?d.spriteUrl:a.sprite;this.glyphs=d?d.glyphsUrl:a.glyphs;if(m("stable-symbol-rendering")){var e=(a.layers||[]).filter(function(a){return a.layout&&a.layout["text-font"]})[0];e&&(a.layers||[]).forEach(function(a){a.layout&&a.layout["text-font"]&&(a.layout["text-font"]=e.layout["text-font"])})}this.layers=(a.layers||[]).map(l._create);
this._identifyRefLayers()}l.prototype._identifyRefLayers=function(){for(var a=[],d=[],e=0,h=0,g=this.layers;h<g.length;h++){var b=g[h];if(1===b.type){var f=b,c=b.sourceLayer,c=c+("|"+JSON.stringify(b.minzoom)),c=c+("|"+JSON.stringify(b.maxzoom)),c=c+("|"+JSON.stringify(b.filter));if(f.hasDataDrivenFill||f.hasDataDrivenOutline)c+="|"+JSON.stringify(e);a.push({key:c,layer:b})}2===b.type&&(f=b,c=b.sourceLayer,c+="|"+JSON.stringify(b.minzoom),c+="|"+JSON.stringify(b.maxzoom),c+="|"+JSON.stringify(b.filter),
c+="|"+JSON.stringify(b.layout&&b.layout["line-cap"]),c+="|"+JSON.stringify(b.layout&&b.layout["line-join"]),f.hasDataDrivenLine&&(c+="|"+JSON.stringify(e)),d.push({key:c,layer:b}));++e}this._assignRefLayers(a);this._assignRefLayers(d)};l.prototype._assignRefLayers=function(a){a.sort(function(a,b){return a.key<b.key?-1:a.key>b.key?1:0});for(var d,e,h=a.length,g=0;g<h;g++){var b=a[g];if(b.key===d)b.layer.refLayerId=e;else if(d=b.key,e=b.layer.id,1===b.layer.type&&!b.layer.getPaintProperty("fill-outline-color"))for(var f=
g+1;f<h;f++){var c=a[f];if(c.key===d){if(c.layer.getPaintProperty("fill-outline-color")){a[g]=c;a[f]=b;e=c.layer.id;break}}else break}}};l._create=function(a,d,e){d=1-1/(e.length+1)*(1+d);switch(a.type){case "background":return new k.BackgroundStyleLayer(0,a,d);case "fill":return new k.FillStyleLayer(1,a,d);case "line":return new k.LineStyleLayer(2,a,d);case "symbol":return new k.SymbolStyleLayer(3,a,d);case "raster":throw Error("Unsupported vector tile raster layer");case "circle":return new k.CircleStyleLayer(4,
a,d)}throw Error("Unknown vector tile layer");};return l}()});