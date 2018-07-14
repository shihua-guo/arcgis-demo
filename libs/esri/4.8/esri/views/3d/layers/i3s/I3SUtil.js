// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../request ../../../../core/Error ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../geometry/SpatialReference ../../../../geometry/support/webMercatorUtils ../../../../tasks/QueryTask ../../../../tasks/support/Query ./I3SBinaryReader ../../support/projectionUtils ../support/symbolColorUtils".split(" "),function(U,e,E,m,n,F,u,G,H,I,J,v,K){function r(a){return a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10)}function w(a,b,c,d,h,f){if(null!=
c){var g=c.mbs;b!==d&&(g=L,v.mbsToMbs(c.mbs,d,g,b));if(0!==x(a,g)&&(f(c),c.children))for(g=0;g<c.children.length;++g)w(a,b,h[c.children[g].id],d,h,f)}}function x(a,b){var c=b[0],d=b[1],h=b[2];b=b[3];var f=0;if(c<a[0])var g=a[0]-c,f=f+g*g;d<a[1]&&(g=a[1]-d,f+=g*g);h<a[2]&&(g=a[2]-h,f+=g*g);c>a[3]&&(g=c-a[3],f+=g*g);d>a[4]&&(g=d-a[4],f+=g*g);h>a[5]&&(g=h-a[5],f+=g*g);if(f>b*b)return 0;if(0<f)return 1;f=Infinity;c-a[0]<f&&(f=c-a[0]);d-a[1]<f&&(f=d-a[1]);h-a[2]<f&&(f=h-a[2]);a[3]-c<f&&(f=a[3]-c);a[4]-
d<f&&(f=a[4]-d);a[5]-h<f&&(f=a[5]-h);return f>b?2:1}function t(a,b,c){var d=[],h=c&&c.missingFields;c=c&&c.originalFields;for(var f=0;f<a.length;f++){for(var g=a[f],p=g.toLowerCase(),k=!1,l=0,e=b;l<e.length;l++){var y=e[l];if(p===y.name.toLowerCase()){d.push(y.name);k=!0;c&&c.push(g);break}}!k&&h&&h.push(g)}return d}function M(a,b){return a.filter(function(a){return a.toLowerCase()!==b.toLowerCase()}).concat([b])}function N(a,b,c,d){b.sort(function(a,b){return a.attributes[c]-b.attributes[c]});var h=
b.map(function(a){return a.attributes[c]}),f=[],g=t(d,a.fields,{originalFields:f});return z(a,h,g).then(function(a){for(var c=0;c<b.length;c++){var h=b[c],d=a[c];h.attributes={};for(var e=0;e<f.length;e++)h.attributes[f[e]]=d[g[e]]}return b})}function O(a,b){for(var c=[],d=0;d<a.length;d++){var h=a[d];h in b.attributes||c.push(h)}return c}function z(a,b,c){if(null!=a.maxRecordCount&&b.length>a.maxRecordCount){var d=P(b,a.maxRecordCount);return n.all(d.map(function(b){return z(a,b,c)})).then(Q)}d=
new I({objectIds:b,outFields:c,orderByFields:[a.objectIdField]});return(new H(a.parsedUrl.path)).execute(d).then(function(a){return a&&a.features&&a.features.length===b.length?a.features.map(function(a){return a.attributes}):n.reject(new m("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer"))})}function R(a,b,c,d,h){for(var f=[],g=0;g<b.attributeData.length;g++){var e=b.attributeData[g],k=a[g];k&&-1!==d.indexOf(k.name)&&(e=F.makeAbsolute(e.href,b.baseUrl),
f.push({url:e,storageInfo:k}))}return n.eachAlways(f.map(function(a){return E(a.url,{responseType:"array-buffer"}).then(function(b){return J.readBinaryAttribute(a.storageInfo,b.data)})})).then(function(a){var b=[];if(!h.ignoreUnavailableFields&&a.some(function(a){return null==a.value})){for(var b=[],d=0;d<a.length;d++)null==a[d].value&&b.push({name:f[d].storageInfo.name,error:a[d].error});return n.reject(new m("scenelayer:attribute-request-failed","Request for scene layer attributes failed",{failedAttributes:b}))}for(var g=
0;g<c.length;g++){for(var e=c[g],k={},d=0;d<a.length;d++)null!=a[d].value&&(k[f[d].storageInfo.name]=A(a[d].value,e));b.push(k)}return b})}function A(a,b){b=a[b];return a instanceof Int16Array?b===S?null:b:a instanceof Int32Array?b===T?null:b:b!==b?null:b}function P(a,b){var c=a.length;b=Math.ceil(c/b);for(var d=[],h=0;h<b;h++)d.push(a.slice(Math.floor(c*h/b),Math.floor(c*(h+1)/b)));return d}function Q(a){for(var b=[],c=0;c<a.length;c++)b=b.concat(a[c]);return b}function B(a){var b=new u(r(a.store.indexCRS||
a.store.geographicCRS));return b.equals(a.spatialReference)?a.spatialReference:b}function C(a){var b=new u(r(a.store.vertexCRS||a.store.projectedCRS));return b.equals(a.spatialReference)?a.spatialReference:b}function q(a,b,c){if(!G.canProject(a,b))throw new m("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===c&&a.isGeographic)throw new m("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",
{});}function D(a,b,c){var d=B(a);a=C(a);q(d,b,c);q(a,b,c)}Object.defineProperty(e,"__esModule",{value:!0});e.DDS_ENCODING_STRING="image/vnd-ms.dds";e.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS=["image/jpeg","image/png"];e.extractWkid=r;e.getAppropriateTextureEncoding=function(a,b){if(Array.isArray(a)){if(b&&(b=a.indexOf(e.DDS_ENCODING_STRING),-1<b))return b;for(b=0;b<a.length;b++)if(-1<e.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS.indexOf(a[b]))return b;throw Error("Could not find appropriate texture encoding (among "+
a.toString()+")");}return-1};e.findIntersectingNodes=w;e.buildTopNodeMap=function(a,b,c,d){void 0===d&&(d=Number.POSITIVE_INFINITY);if(0>=b)a.clear();else{var h=new Map,f=Number.POSITIVE_INFINITY;a.forEach(function(g,e){var k=c(g);if(e<b)f=Math.min(f,k),h.set(g.id,k);else if(!(k<=f||k>=d)){h.set(g.id,k);e=f=h.get(a.front().id);for(var k=0,l=1;l<b;++l){var p=h.get(a.data[l].id);p<f&&(k=l,e=f,f=p)}a.data[k]=g;f=e}});a.length=Math.min(a.length,b);a.sort(function(a,b){return h.get(b.id)-h.get(a.id)})}};
var L=[0,0,0,0];e.intersectBoundingBoxWithMbs=x;e.findFieldsCaseInsensitive=t;e.whenGraphicAttributes=function(a,b,c,d,h,f){var g=!0===(f&&f.populateObjectId),e=f.ignoreUnavailableFields?void 0:[],k=1===d.length&&"*"===d[0];!k&&g&&(d=M(d,c));d=k?d:t(d,a.fields,{missingFields:e});if(e&&0!==e.length)return n.reject(new m("scenelayer:unknown-fields","This scene layer does not have the requested fields",{unknownFields:e}));if(0===b.length)return n.resolve(b);var g=a.associatedLayer,e=a.attributeStorageInfo,
l=k?a.fields.map(function(a){return a.name}):d;if(g)return N(g,b,c,l);a=O(l,b[0]);return 0===a.length?n.resolve(b):e?(h=h(),null==h?n.reject(new m("scenelayer:feature-not-loaded","Tried to query attributes for unloaded features")):R(e,h.node,h.indices,a,f).then(function(a){for(var c=0;c<b.length;c++){for(var d=0,f=l;d<f.length;d++){var g=f[d];g in a[c]||(a[c][g]=b[c].attributes[g])}b[c].attributes=a[c]}return b})):n.reject(new m("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available"))};
var S=-Math.pow(2,15),T=-Math.pow(2,31);e.getCachedAttributeValue=A;e.convertFlatRangesToOffsets=function(a,b,c){void 0===c&&(c=2);b=null!=b?b:a.length/c;for(var d=new Uint32Array(b+1),e=0;e<b;e++){var f=a[e*c];d[e]=3*f;var g=(e-1)*c+1;if(0<=g&&f-1!==a[g])throw new m("Face ranges are not continuous");}d[d.length-1]=3*(a[(b-1)*c+1]+1);return d};e.getIndexCrs=B;e.getVertexCrs=C;e.getCacheKeySuffix=function(a,b){return b===v.SphericalECEFSpatialReference?"@ECEF":a.equals(b)?"":null!=b.wkid?"@"+b.wkid:
null};e.checkSpatialReference=q;e.checkSpatialReferences=D;e.checkSceneLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null!=a.geometryType&&"triangles"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new m("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{});};e.checkSceneLayerCompatibleWithView=
function(a,b){D(a,b.spatialReference,b.viewingMode)};e.checkPointCloudLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null==a.geometryType||"points"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null!=a.encoding&&""!==a.encoding&&"lepcc-xyz"!==a.encoding||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new m("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",
{});};e.checkPointCloudLayerCompatibleWithView=function(a,b){q(a.spatialReference,b.spatialReference,b.viewingMode)};e.encodeSymbolColor=K.encodeSymbolColor;e.rendererNeedsTextures=function(a){if(null==a||"simple"!==a.type&&"class-breaks"!==a.type&&"unique-value"!==a.type||("unique-value"===a.type||"class-breaks"===a.type)&&null==a.defaultSymbol)return!0;a=a.getSymbols();if(0===a.length)return!0;for(var b=0;b<a.length;b++){var c=a[b];if("mesh-3d"!==c.type||0===c.symbolLayers.length)return!0;for(var d=
0,c=c.symbolLayers.items;d<c.length;d++){var e=c[d];if("fill"!==e.type||null==e.material||"replace"!==e.material.colorMixMode)return!0}}return!1}});