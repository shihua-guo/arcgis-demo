// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(p,g){function k(a,b){var d=b[0]-a[0],c=b[1]-a[1];return 2<a.length&&2<b.length?(a=a[2]-b[2],Math.sqrt(d*d+c*c+a*a)):Math.sqrt(d*d+c*c)}function n(a,b,d){var c=a[0]+d*(b[0]-a[0]),e=a[1]+d*(b[1]-a[1]);return 2<a.length&&2<b.length?[c,e,a[2]+d*(b[2]-a[2])]:[c,e]}Object.defineProperty(g,"__esModule",{value:!0});g.geometryToCoordinates=function(a){if(!a)return null;if(Array.isArray(a))return a;var b=a.hasZ,d=a.hasM;if("point"===a.type)return d&&b?[a.x,a.y,a.z,a.m]:
b?[a.x,a.y,a.z]:d?[a.x,a.y,a.m]:[a.x,a.y];if("polygon"===a.type)return a.rings.slice(0);if("polyline"===a.type)return a.paths.slice(0);if("multipoint"===a.type)return a.points.slice(0);if("extent"===a.type){a=a.clone().normalize();if(!a)return null;var c=!1,e=!1;a.forEach(function(a){a.hasZ&&(c=!0);a.hasM&&(e=!0)});return a.map(function(a){var b=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];if(c&&a.hasZ)for(var d=.5*(a.zmax-a.zmin),f=0;f<b.length;f++)b[f].push(d);
if(e&&a.hasM)for(a=.5*(a.mmax-a.mmin),f=0;f<b.length;f++)b[f].push(a);return b})}return null};g.getLength=k;g.getMidpoint=function(a,b){return n(a,b,.5)};g.getPathLength=function(a){for(var b=a.length,d=0,c=0;c<b-1;++c)d+=k(a[c],a[c+1]);return d};g.getPointOnPath=function(a,b){if(0>=b)return a[0];for(var d=a.length,c=0,e=0;e<d-1;++e){var g=k(a[e],a[e+1]);if(b-c<g)return n(a[e],a[e+1],(b-c)/g);c+=g}return a[d-1]};g.isClockwise=function(a,b,d){for(var c=a.length,e=0,g=0,k=0,m=0;m<c;m++){var f=a[m],
h=a[(m+1)%c],l=2,e=e+(f[0]*h[1]-h[0]*f[1]);2<f.length&&2<h.length&&d&&(g+=f[0]*h[2]-h[0]*f[2],l=3);f.length>l&&h.length>l&&b&&(k+=f[0]*h[l]-h[0]*f[l])}return 0>=e&&0>=g&&0>=k}});