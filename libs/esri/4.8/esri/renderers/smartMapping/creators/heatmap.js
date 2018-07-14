// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../Color ../../../core/promiseUtils ../../../renderers/HeatmapRenderer ./support/utils ../statistics/heatmapStatistics ../support/utils ../symbology/heatmap ../../support/HeatmapColorStop ../../../support/basemapUtils".split(" "),function(D,h,p,t,g,x,m,y,k,q,e,z){function A(a){if(!(a&&a.layer&&a.view))return g.reject(m.createError("heatmap-renderer:missing-parameters","'layer' and 'view' parameters are required"));var b=a.blurRadius,
l=a.minRatio,f=a.maxRatio,e=a.fadeToTransparent,d=p({},a);d.blurRadius=null==b?10:b;d.minRatio=null==l?.01:l;d.maxRatio=null==f?1:f;d.fadeToTransparent=null==e?!0:e;a=[0,1];var c=k.createLayerAdapter(d.layer,a);return(d.layer=c)?c.load().then(function(){var a=k.getFieldsList({field:d.field});return(a=m.verifyBasicFieldValidity(c,a,"heatmap-renderer:invalid-parameters"))?g.reject(a):d}):g.reject(m.createError("heatmap-renderer:invalid-parameters","'layer' must be one of these types: "+k.getLayerTypeLabels(a).join(", ")))}
function B(a){var b=a.scheme;b?(b=q.cloneScheme(b),a="string"===typeof a.basemap?a.basemap:z.getWellKnownBasemapId(a.basemap)):(b=(a=q.getSchemes({basemap:a.basemap}))&&a.primaryScheme,a=a&&a.basemapId);return{scheme:b,basemapId:a}}function C(a,b){var l=a.fieldOffset,f=b.field,g=b.blurRadius,d=b.minRatio,c=b.maxRatio,k=b.fadeToTransparent,n=B({basemap:b.basemap,scheme:b.heatmapScheme});b=n.scheme;var n=n.basemapId,r=b.colors,h=r.length,u=!a.count,v=u?[0,100]:[a.min,a.max],p=(c-d)/(h-1),c=r[0],w=[new e.HeatmapColorStop({ratio:0,
color:new t([c.r,c.g,c.b,0])}),new e.HeatmapColorStop({ratio:.01,color:new t([c.r,c.g,c.b,0])}),new e.HeatmapColorStop({ratio:k?d:.01,color:c})];m.createColors(r,h).forEach(function(a,b){w.push(new e.HeatmapColorStop({ratio:d+p*b,color:a}))});f=new x({blurRadius:g,colorStops:w,field:f,minPixelIntensity:v[0],maxPixelIntensity:v[1]});null!=l&&(f.fieldOffset=l);return{renderer:f,statistics:a,defaultValuesUsed:u,scheme:q.cloneScheme(b),basemapId:n}}Object.defineProperty(h,"__esModule",{value:!0});h.createRenderer=
function(a){return A(a).then(function(a){return(a.statistics?g.resolve(a.statistics):y({layer:a.layer,field:a.field,fieldOffset:a.fieldOffset,blurRadius:a.blurRadius,view:a.view})).then(function(b){return C(b,a)})})}});