// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","dojox/xml/parser"],function(q,r,h){return function(){function b(a){if(a)for(var c in a)this[c]=a[c]}b.parse=function(a,c){a=h.parse(a).getElementsByTagName("snippet");for(var n=/\$[a-zA-Z][a-zA-Z0-9]*(?:\([^\(\)]*\))?[ \t]*/,b=/[\$\s]+/g,l=/\(([^\(\)]*)\)/,d=0;d<a.length;d++){for(var p=a[d].getAttribute("name"),e=a[d].textContent;;){var k=e.match(n);if(null==k)break;var f=k[0].replace(b,""),m=f.match(l),g=void 0;m&&(g=m[1].split(",").map(function(a){return a.trim()}));
f=f.replace(l,"");g=c._instantiate(f,g);e=e.replace(k[0],g)}c[p]=e}};b.prototype._instantiate=function(a,c){a=this[a];for(c||(c=[]);;){var b=a.match(/\$(\d+)/);if(null==b)break;var h=parseInt(b[1],10);a=a.replace(b[0],c[h])}return a};return b}()});