// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(v,g){Object.defineProperty(g,"__esModule",{value:!0});g.manhattanDistance=function(a,b){return Math.abs(b.x-a.x)+Math.abs(b.y-a.y)};g.euclideanDistance=function(a,b){var e=b.x-a.x;a=b.y-a.y;return Math.sqrt(e*e+a*a)};g.fitCircleLSQ=function(a,b){b?(b.radius=0,b.center.x=0,b.center.y=0):b={radius:0,center:{x:0,y:0}};if(0===a.length)return b;if(1===a.length)return b.center.x=a[0].x,b.center.y=a[0].y,b;if(2===a.length){var e=a[0];a=a[1];var f=[a.x-e.x,a.y-e.y],c=
f[0],f=f[1];b.radius=Math.sqrt(c*c+f*f)/2;b.center.x=(e.x+a.x)/2;b.center.y=(e.y+a.y)/2;return b}for(var k=0,l=0,d=0;d<a.length;d++)k+=a[d].x,l+=a[d].y;for(var k=k/a.length,l=l/a.length,m=a.map(function(a){return a.x-k}),g=a.map(function(a){return a.y-l}),r=e=b=0,n=0,h=c=0,d=f=0;d<m.length;d++){var p=m[d],q=g[d],t=p*p,u=q*q;b+=t;e+=u;r+=p*q;n+=t*p;c+=u*q;h+=p*u;f+=q*t}d=b;m=r;g=e;n=.5*(n+h);c=.5*(c+f);f=d*g-r*m;h=(n*g-c*m)/f;c=(d*c-r*n)/f;return{radius:Math.sqrt(h*h+c*c+(b+e)/a.length),center:{x:h+
k,y:c+l}}}});