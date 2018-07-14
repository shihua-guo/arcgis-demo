// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/io-query dojo/_base/lang dojo/_base/url dojo/_base/window ../config ./Error ./lang ./Logger ./sniff".split(" "),function(D,d,x,U,h,V,E,W,X,Y,F){function r(a){var b={path:null,query:null},c=new h(a),e=a.indexOf("?");null===c.query?b.path=a:(b.path=a.substring(0,e),b.query=x.queryToObject(c.query));c.fragment&&(b.hash=c.fragment,null===c.query&&(b.path=b.path.substring(0,b.path.length-(c.fragment.length+1))));return b}function G(a,b){void 0===a&&(a=!1);void 0===b&&(b=!0);
var c,e=p.proxyUrl;if("string"===typeof a){if(c=H(a),a=y(a))e=a.proxyUrl}else c=!!a;if(!e)throw Z.warn("esri/config: esriConfig.request.proxyUrl is not set. If making a request to a CORS-enabled\n server, please push the domain into esriConfig.request.corsEnabledServers."),new W("urlutils:proxy-not-set","esri/config: esriConfig.request.proxyUrl is not set. If making a request to a CORS-enabled\n server, please push the domain into esriConfig.request.corsEnabledServers.");var g;c&&b&&"https"===d.appUrl.scheme&&
(b=z(e),t(b)&&(e=b,g=1));e=r(e);e._xo=g;return e}function A(a){var b=a.indexOf("?");-1!==b?(q.path=a.slice(0,b),q.query=a.slice(b+1)):(q.path=a,q.query=null);return q}function I(a){a=A(a).path;a&&"/"===a[a.length-1]||(a+="/");a=B(a,!0);return a=a.toLowerCase()}function y(a){var b=p.proxyRules;a=I(a);for(var c=0;c<b.length;c++)if(0===a.indexOf(b[c].urlPrefix))return b[c]}function J(a){a=l(a);var b=a.indexOf("/sharing");return 0<b?a.substring(0,b):a.replace(/\/+$/,"")}function u(a,b,c){void 0===c&&
(c=!1);a=C(a);b=C(b);return c||a.scheme===b.scheme?a.host.toLowerCase()===b.host.toLowerCase()&&a.port===b.port:!1}function t(a){return F("esri-phonegap")?!0:F("esri-cors")?null!=K(a):!1}function K(a,b){void 0===b&&(b=!1);"string"===typeof a&&(a=k(a)?C(a):d.appUrl);for(var c=p.corsEnabledServers||[],e=0;e<c.length;e++)for(var g=c[e],m=void 0,m="string"===typeof g?L(g):g.host?L(g.host):[],f=0;f<m.length;f++)if(u(a,m[f]))return b?e:g;return b?-1:null}function L(a){d.corsServersUrlCache[a]||(v(a)||f(a)?
d.corsServersUrlCache[a]=[new h(n(a))]:d.corsServersUrlCache[a]=[new h("http://"+a),new h("https://"+a)]);return d.corsServersUrlCache[a]}function n(a,b,c){void 0===b&&(b=d.appBaseUrl);if(f(a))return c&&c.preserveProtocolRelative?a:"http"===d.appUrl.scheme&&d.appUrl.authority===M(a).slice(2)?"http:"+a:"https:"+a;if(v(a))return a;c=N;if("/"===a[0]){var e=b.indexOf("//"),e=b.indexOf("/",e+2);b=-1===e?b:b.slice(0,e)}return c(b,a)}function O(a,b,c){void 0===b&&(b=d.appBaseUrl);if(!k(a))return a;var e=
l(a),g=e.toLowerCase();b=l(b).toLowerCase().replace(/\/+$/,"");if((c=c?l(c).toLowerCase().replace(/\/+$/,""):null)&&0!==b.indexOf(c))return a;for(var m=function(a,b,c){c=a.indexOf(b,c);return-1===c?a.length:c},f=m(g,"/",g.indexOf("//")+2),h=-1;g.slice(0,f+1)===b.slice(0,f)+"/";){h=f+1;if(f===g.length)break;f=m(g,"/",f+1)}if(-1===h||c&&h<c.length)return a;a=e.slice(h);e=b.slice(h-1).replace(/[^/]+/g,"").length;if(0<e)for(g=0;g<e;g++)a="../"+a;else a="./"+a;return a}function l(a){a=a.trim();a=n(a);
if(/^https?:\/\//i.test(a)){var b=A(a);a=b.path.replace(/\/{2,}/g,"/");a=a.replace("/","//");b.query&&(a+="?"+b.query)}a="http"===d.appUrl.scheme&&H(a)&&u(d.appBaseUrl,a,!0)&&!t(a)?f(a)?"http:"+a:a.replace(P,"http:"):a;a=aa(a);return a=a.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function N(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];if(a&&a.length){b=[];if(k(a[0])){var c=a[0],e=c.indexOf("//");b.push(c.slice(0,e+1));ba.test(a[0])&&(b[0]+="/");a[0]=c.slice(e+2)}else"/"===a[0][0]&&
b.push("");a=a.reduce(function(a,b){return b?a.concat(b.split("/")):a},[]);for(c=0;c<a.length;c++)e=a[c],".."===e&&0<b.length?b.pop():!e||"."===e&&0!==b.length||b.push(e);return b.join("/")}}function M(a){if(Q(a)||R(a))return null;var b=a.indexOf("://");if(-1===b&&f(a))b=2;else if(-1!==b)b+=3;else return null;b=a.indexOf("/",b);return-1===b?a:a.slice(0,b)}function k(a){return f(a)||v(a)}function Q(a){return"blob:"===a.slice(0,5)}function R(a){return"data:"===a.slice(0,5)}function f(a){return a&&"/"===
a[0]&&"/"===a[1]}function v(a){return S.test(a)}function H(a){return P.test(a)||"https"===d.appUrl.scheme&&f(a)}function ca(a){return T.test(a)||"http"===d.appUrl.scheme&&f(a)}function z(a){return f(a)?"https:"+a:a.replace(T,"https:")}function B(a,b){void 0===b&&(b=!1);if(f(a))return a.slice(2);a=a.replace(S,"");b&&1<a.length&&"/"===a[0]&&"/"===a[1]&&(a=a.slice(2));return a}function aa(a){var b=E.request.httpsDomains;if(!ca(a))return a;var c=a.indexOf("/",7),e;e=-1===c?a:a.slice(0,c);e=e.toLowerCase().slice(7);
if(!("http"!==d.appUrl.scheme||e!==d.appUrl.authority||da.test(a)&&t(a)))return a;if("https"===d.appUrl.scheme&&e===d.appUrl.authority||b&&b.some(function(a){return e===a||X.endsWith(e,"."+a)}))a=z(a);return a}function w(a,b,c){if(!(b&&c&&a&&k(a)))return a;var e=a.indexOf("//"),d=a.indexOf("/",e+2),f=a.indexOf(":",e+2),d=Math.min(0>d?a.length:d,0>f?a.length:f);if(a.slice(e+2,d).toLowerCase()!==b.toLowerCase())return a;b=a.slice(0,e+2);a=a.slice(d);return""+b+c+a}function C(a){if("string"===typeof a)return new h(n(a));
a.scheme||(a.scheme=d.appUrl.scheme);return a}Object.defineProperty(d,"__esModule",{value:!0});D=V.global;var Z=Y.getLogger("esri.core.urlUtils"),p=E.request,S=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,T=/^\s*http:/i,P=/^\s*https:/i,ba=/^\s*file:/i,da=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i;d.appUrl=new h(D.location);d.corsServersUrlCache={};d.appBaseUrl=function(){var a=d.appUrl.path,a=a.substring(0,a.lastIndexOf(a.split("/")[a.split("/").length-1]));return""+(d.appUrl.scheme+"://"+d.appUrl.host+
(null!=d.appUrl.port?":"+d.appUrl.port:""))+a}();d.urlToObject=r;d.getProxyUrl=G;d.addProxy=function(a){var b=y(a),c,e;b?(e=A(b.proxyUrl),c=e.path,e=e.query?x.queryToObject(e.query):null):p.forceProxy&&(e=G(),c=e.path,e=e.query);c&&(b=r(a),a=c+"?"+b.path,(c=x.objectToQuery(U.mixin(e||{},b.query)))&&(a=a+"?"+c));return a};var q={path:"",query:""};d.addProxyRule=function(a){a={proxyUrl:a.proxyUrl,urlPrefix:I(a.urlPrefix)};for(var b=p.proxyRules,c=a.urlPrefix,e=b.length,d=0;d<b.length;d++){var f=b[d].urlPrefix;
if(0===c.indexOf(f)){if(c.length===f.length)return-1;e=d;break}0===f.indexOf(c)&&(e=d+1)}b.splice(e,0,a);return e};d.getProxyRule=y;d.hasSamePortal=function(a,b){a=J(a);b=J(b);return B(a)===B(b)};d.hasSameOrigin=u;d.canUseXhr=t;d.getCorsConfig=K;d.makeAbsolute=n;d.makeRelative=O;d.normalize=l;d.join=N;d.getOrigin=M;d.isAbsolute=k;d.isBlobProtocol=Q;d.isDataProtocol=R;var ea=/^data:(.*?)(;base64)?,(.*)$/;d.dataComponents=function(a){return(a=a.match(ea))?{mediaType:a[1],isBase64:!!a[2],data:a[3]}:
null};d.makeData=function(a){return a.isBase64?"data:"+a.mediaType+";base64,"+a.data:"data:"+a.mediaType+","+a.data};d.isProtocolRelative=f;d.hasProtocol=v;d.toHTTPS=z;d.removeFile=function(a){var b=0;if(k(a)){var c=a.indexOf("//");-1!==c&&(b=c+2)}c=a.lastIndexOf("/");return c<b?a:a.slice(0,c+1)};d.removeTrailingSlash=function(a){return a.replace(/\/+$/,"")};d.changeDomain=w;d.read=function(a,b){var c=b&&b.url&&b.url.path;a&&c&&(a=n(a,c,{preserveProtocolRelative:!0}));(b=b&&b.portal)&&!b.isPortal&&
b.urlKey&&b.customBaseUrl?(c=b.urlKey+"."+b.customBaseUrl,b=u(d.appUrl,d.appUrl.scheme+"://"+c)?w(a,b.portalHostname,c):w(a,c,b.portalHostname)):b=a;return b};d.write=function(a,b){if(!a)return a;!k(a)&&b&&b.blockedRelativeUrls&&b.blockedRelativeUrls.push(a);var c=n(a);if(b){var d=b.verifyItemRelativeUrls&&b.verifyItemRelativeUrls.rootPath||b.url&&b.url.path;d&&(c=O(c,d,d),c!==a&&b.verifyItemRelativeUrls&&b.verifyItemRelativeUrls.writtenUrls.push(c))}a=c;c=(b=b&&b.portal)&&!b.isPortal&&b.urlKey&&
b.customBaseUrl?w(a,b.urlKey+"."+b.customBaseUrl,b.portalHostname):a;return c};d.writeOperationalLayerUrl=function(a,b){a&&f(a)&&(a="https:"+a);b.url=a?l(a):a};d.isSVG=function(a){return fa.test(a)};d.removeQueryParameters=function(a,b){a=r(a);var c=Object.keys(a.query||{});0<c.length&&b&&b.warn("removeQueryParameters()","Url query parameters are not supported, the following parameters have been removed: "+c.join(", ")+".");return a.path};var fa=/(^data:image\/svg|\.svg$)/i});