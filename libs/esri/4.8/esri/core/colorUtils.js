// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define([],function(){var g={COEF_RGB2XYZ:[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],COEF_XYZ2RGB:[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],matrixProduct:function(a,b){var c=[],e,d;if(a[0].length!==b.length)throw"dimensions do not match";var f=a.length,g=a[0].length,h=0;for(e=0;e<f;e++){for(d=h=0;d<g;d++)h+=a[e][d]*b[d];c.push(h)}return c},rgb2xyz:function(a){a=[a.r/255,a.g/255,a.b/255].map(function(a){return.04045>=a?a/12.92:Math.pow((a+.055)/1.055,2.4)});
a=this.matrixProduct(this.COEF_RGB2XYZ,a);return{x:100*a[0],y:100*a[1],z:100*a[2]}},xyz2rgb:function(a){a=this.matrixProduct(this.COEF_XYZ2RGB,[a.x/100,a.y/100,a.z/100]).map(function(a){return Math.min(1,Math.max(.0031308>=a?12.92*a:1.055*Math.pow(a,1/2.4)-.055,0))});return{r:Math.round(255*a[0]),g:Math.round(255*a[1]),b:Math.round(255*a[2])}},xyz2lab:function(a){a=[a.x/95.047,a.y/100,a.z/108.883].map(function(a){return a>Math.pow(6/29,3)?Math.pow(a,1/3):1/3*Math.pow(29/6,2)*a+4/29});return{l:116*
a[1]-16,a:500*(a[0]-a[1]),b:200*(a[1]-a[2])}},lab2xyz:function(a){var b=a.l;a=[(b+16)/116+a.a/500,(b+16)/116,(b+16)/116-a.b/200].map(function(a){return a>6/29?Math.pow(a,3):3*Math.pow(6/29,2)*(a-4/29)});return{x:95.047*a[0],y:100*a[1],z:108.883*a[2]}},lab2lch:function(a){var b=a.l,c=a.a,e=a.b;a=Math.sqrt(c*c+e*e);c=Math.atan2(e,c);c=0<c?c:c+2*Math.PI;return{l:b,c:a,h:c}},lch2lab:function(a){var b=a.c,c=a.h;return{l:a.l,a:b*Math.cos(c),b:b*Math.sin(c)}},rgb2lab:function(a){return this.xyz2lab(this.rgb2xyz(a))},
lab2rgb:function(a){return this.xyz2rgb(this.lab2xyz(a))},rgb2lch:function(a){return this.lab2lch(this.xyz2lab(this.rgb2xyz(a)))},lch2rgb:function(a){return this.xyz2rgb(this.lab2xyz(this.lch2lab(a)))}},k={rgb2hsv:function(a){var b=a.r,c=a.g;a=a.b;var e=Math.max(b,c,a),d=e-Math.min(b,c,a),f;0===d?f=0:e===b?f=(c-a)/d%6:e===c?f=(a-b)/d+2:e===a&&(f=(b-c)/d+4);0>f&&(f+=6);return{h:60*f,s:100*(0===d?0:d/e),v:100/255*e}},hsv2rgb:function(a){var b=a.h/60,c=a.v/100*255;a=a.s/100*c;var e=a*(1-Math.abs(b%2-
1)),d;switch(Math.floor(b)){case 0:d={r:a,g:e,b:0};break;case 1:d={r:e,g:a,b:0};break;case 2:d={r:0,g:a,b:e};break;case 3:d={r:0,g:e,b:a};break;case 4:d={r:e,g:0,b:a};break;case 5:case 6:d={r:a,g:0,b:e}}d.r=Math.round(d.r+c-a);d.g=Math.round(d.g+c-a);d.b=Math.round(d.b+c-a);return d}};return{toRGB:function(a){var b;void 0!==a.r&&void 0!==a.g&&void 0!==a.b?b=a:void 0!==a.l&&void 0!==a.c&&void 0!==a.h?b=g.lch2rgb(a):void 0!==a.l&&void 0!==a.a&&void 0!==a.b?b=g.lab2rgb(a):void 0!==a.x&&void 0!==a.y&&
void 0!==a.z?b=g.xyz2rgb(a):void 0!==a.h&&void 0!==a.s&&void 0!==a.v&&(b=k.hsv2rgb(a));return b},toHSV:function(a){if(void 0!==a.h&&void 0!==a.s&&void 0!==a.v)return a;a=this.toRGB(a);return k.rgb2hsv(a)},toLAB:function(a){return void 0!==a.l&&void 0!==a.a&&void 0!==a.b?a:g.rgb2lab(this.toRGB(a))},toLCH:function(a){return void 0!==a.l&&void 0!==a.c&&void 0!==a.h?a:g.rgb2lch(this.toRGB(a))},toXYZ:function(a){return void 0!==a.x&&void 0!==a.y&&void 0!==a.z?a:g.rgb2xyz(this.toRGB(a))}}});