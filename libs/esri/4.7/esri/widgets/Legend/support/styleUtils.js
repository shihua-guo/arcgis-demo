// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/i18n!../../Legend/nls/Legend","../../../core/lang"],function(f,b,d,e){Object.defineProperty(b,"__esModule",{value:!0});b.attachToNode=function(a){a.appendChild(this)};b.getTitle=function(a,c){var b=null;c?b=a.ratioPercentTotal?"showRatioPercentTotal":a.ratioPercent?"showRatioPercent":a.ratio?"showRatio":a.normField?"showNormField":a.field?"showField":null:c||(b=a.normField?"showNormField":a.normByPct?"showNormPct":a.field?"showField":null);return b?e.substitute({field:a.field,
normField:a.normField},d[b]):null};b.isRendererTitle=function(a,b){return!b};b.isImageryStretchedLegend=function(a,b){return!!(b&&"Stretched"===b&&10.3<=a.version&&"esri.layers.ImageryLayer"===a.declaredClass)}});