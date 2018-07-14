// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../renderers/PointCloudClassBreaksRenderer ../../../../renderers/PointCloudRenderer ../../../../renderers/PointCloudStretchRenderer ../../../../renderers/PointCloudUniqueValueRenderer ./I3SBinaryReader".split(" "),function(z,m,u,v,w,x,y){function q(a){return(a=a&&a.pointSizeAlgorithm)&&"splat"===a.type?a:null}function r(a,d){for(var g=0;g<a.length;g++){var c=a[g];if(c.name===d&&null!=c.attributeValues&&"UInt8"===c.attributeValues.valueType&&3===c.attributeValues.valuesPerElement)return{storageInfo:c,
useElevation:!1}}return null}function n(a,d){for(var g=0;g<a.length;g++){var c=a[g];if(c.name===d)return a="embedded-elevation"===c.encoding,{storageInfo:a?null:c,useElevation:a}}return"elevation"===d.toLowerCase()?{storageInfo:null,useElevation:!0}:null}function t(a,d,g,c){if(a&&a.useElevation){a=new Float64Array(c);for(d=0;d<c;d++)a[d]=g[3*d+2];return a}return a&&d?y.readBinaryAttribute(a.storageInfo,d,c):null}function p(a){return null==a||"none"===a?null:"low-four-bit"===a?function(a){return a&
15}:"high-four-bit"===a?function(a){return(a&240)>>4}:"absolute-value"===a?function(a){return Math.abs(a)}:"modulo-ten"===a?function(a){return a%10}:null}Object.defineProperty(m,"__esModule",{value:!0});m.getRendererInfo=function(a){var d=a.renderer,g=d&&d.type,c=d&&a.renderer.toJSON()||null,k=null,b=!1;"point-cloud-unique-value"===g?k=n(a.attributeStorageInfo,d.field):"point-cloud-stretch"===g?k=n(a.attributeStorageInfo,d.field):"point-cloud-class-breaks"===g?k=n(a.attributeStorageInfo,d.field):
(k="point-cloud-rgb"===g?r(a.attributeStorageInfo,d.field):r(a.attributeStorageInfo,"RGB"),b=null!=k);g=null;d&&d.colorModulation&&(g=n(a.attributeStorageInfo,d.colorModulation.field));return{rendererJSON:c,isRGBRenderer:b,primaryAttribute:k,modulationAttribute:g}};m.evaluateRenderer=function(a,d,g,c,k){var b=a.rendererJSON,l=a.isRGBRenderer,h=a.modulationAttribute;a=t(a.primaryAttribute,d,c,k);g=t(h,g,c,k);h=c=null;if(a&&l)c=a;else if(a&&"pointCloudUniqueValueRenderer"===b.type){var h=x.fromJSON(b),
e=h.colorUniqueValueInfos;c=new Uint8Array(3*k);l=p(h.fieldTransformType);for(b=0;b<k;b++){d=l?l(a[b]):a[b];d+="";for(var f=0;f<e.length;f++)if(0<=e[f].values.indexOf(d)){c[3*b]=e[f].color.r;c[3*b+1]=e[f].color.g;c[3*b+2]=e[f].color.b;break}}}else if(a&&"pointCloudStretchRenderer"===b.type)for(h=w.fromJSON(b),e=h.stops,c=new Uint8Array(3*k),l=p(h.fieldTransformType),b=0;b<k;b++)if(d=l?l(a[b]):a[b],f=e.length-1,d<e[0].value)c[3*b]=e[0].color.r,c[3*b+1]=e[0].color.g,c[3*b+2]=e[0].color.b;else if(d>=
e[f].value)c[3*b]=e[f].color.r,c[3*b+1]=e[f].color.g,c[3*b+2]=e[f].color.b;else for(f=1;f<e.length;f++){if(d<e[f].value){d=(d-e[f-1].value)/(e[f].value-e[f-1].value);c[3*b]=e[f].color.r*d+e[f-1].color.r*(1-d);c[3*b+1]=e[f].color.g*d+e[f-1].color.g*(1-d);c[3*b+2]=e[f].color.b*d+e[f-1].color.b*(1-d);break}}else if(a&&"pointCloudClassBreaksRenderer"===b.type)for(h=u.fromJSON(b),e=h.colorClassBreakInfos,c=new Uint8Array(3*k),l=p(h.fieldTransformType),b=0;b<k;b++)for(d=l?l(a[b]):a[b],f=0;f<e.length;f++){if(d>=
e[f].minValue&&d<=e[f].maxValue){c[3*b]=e[f].color.r;c[3*b+1]=e[f].color.g;c[3*b+2]=e[f].color.b;break}}else for(c=new Uint8Array(3*k),b=0;b<c.length;b++)c[b]=255;if(g&&h&&h.colorModulation)for(a=h.colorModulation.minValue,h=h.colorModulation.maxValue,b=0;b<k;b++)d=g[b],l=d>=h?1:d<=a?.3:.3+.7*(d-a)/(h-a),c[3*b]*=l,c[3*b+1]*=l,c[3*b+2]*=l;return c};m.getSplatSizeAlgorithm=q;m.getMinSize=function(a){return(a=q(a))&&null!=a.minSize?a.minSize:v.defaultMinSize};m.getFixedSizeAlgorithm=function(a){return(a=
a&&a.pointSizeAlgorithm)&&"fixed-size"===a.type?a:null};m.rendererUsesFixedSizes=function(a){return(a=a&&a.pointSizeAlgorithm)&&a.type?"fixed-size"===a.type:!1}});