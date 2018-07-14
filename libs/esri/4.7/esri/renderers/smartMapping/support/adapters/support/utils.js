// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/string dojo/_base/lang ../../../../../core/promiseUtils ../../../../../support/arcadeUtils ../../../../../tasks/support/ClassBreaksDefinition ../../../../../tasks/support/generateRendererUtils".split(" "),function(Q,h,G,t,H,r,I,J){function y(a,b,c){b=null==b?-Infinity:b;c=null==c?Infinity:c;return a.filter(function(a){if(null!=a&&n(a)&&a>=b&&a<=c)return a})}function p(a,b){var c=a.field,d="function"===typeof c,e=a.valueExpression,f=r.createFunction(e),g=a.normalizationType,
k=a.normalizationField,l=a.normalizationTotal,u=[],h=(a=a.view)&&r.getViewInfo({viewingMode:"2d"===a.type?"map":a.viewingMode,scale:a.scale,spatialReference:a.spatialReference});if(!b)return u;b.forEach(function(a){var b=a.attributes,m;e?(m=r.createExecContext(a,h),m=r.executeFunction(f,m)):d?m=c.call(null,a):b&&(m=b[c]);g&&null!=m&&n(m)&&(b=b&&parseFloat(b[k]),"log"===g&&0!==m?m=Math.log(m)*Math.LOG10E:"percent-of-total"===g&&n(l)&&0!==l?m=m/l*100:"field"===g&&n(b)&&0!==b&&(m/=b));u.push(m)});return u}
function K(a,b){for(var c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,e=null,f=null,g=null,k=null,l=0;l<a.length;l++)var h=a[l],e=e+h,c=Math.min(c,h),d=Math.max(d,h);if(l=a.length){f=e/l;for(k=g=0;k<a.length;k++)h=a[k],g+=Math.pow(h-f,2);k=b?1<l?g/(l-1):0:0<l?g/l:0;g=Math.sqrt(k)}else d=c=null;return{avg:f,count:l,max:d,min:c,stddev:g,sum:e,variance:k}}function z(a){var b=a.field,c=a.classificationMethod||"equal-interval",d=a.normalizationType,e=a.normalizationField,f=new I;f.classificationField=
b;f.breakCount=a.breakCount;f.classificationMethod=c;f.standardDeviationInterval="standard-deviation"===c?a.standardDeviationInterval||1:void 0;f.normalizationType=d;f.normalizationField="field"===d?e:void 0;return f}function A(a,b){var c=b.classBreaks,d=c[0].minValue,e=c[c.length-1].maxValue,f="standard-deviation"===a.classificationMethod,g=L,c=c.map(function(a){var b=a.label;a={minValue:a.minValue,maxValue:a.maxValue,label:b};if(f&&b){var c=b.match(g).map(function(a){return+t.trim(a)});2===c.length?
(a.minStdDev=c[0],a.maxStdDev=c[1],0>c[0]&&0<c[1]&&(a.hasAvg=!0)):1===c.length&&(-1<b.indexOf("\x3c")?(a.minStdDev=null,a.maxStdDev=c[0]):-1<b.indexOf("\x3e")&&(a.minStdDev=c[0],a.maxStdDev=null))}return a});return{minValue:d,maxValue:e,classBreakInfos:c,normalizationTotal:b.normalizationTotal}}function v(a,b,c){b=(b-a)/c;for(var d=[],e,f=1;f<=c;f++)e=a+b,e=Number(e.toFixed(16)),d.push([a,e]),a=e;return d}function B(a){var b=a.field,c=a.normalizationType,d=a.normalizationField;a=a.normalizationTotal;
var e=b;"percent-of-total"===c?e="(("+b+" / "+a+") * 100)":"log"===c?e="(log("+b+") * "+M+")":"field"===c&&(e="("+b+" / "+d+")");return e}function N(a,b){for(var c=-1,d=a.length-1;0<=d;d--)if(b>=a[d][0]){c=d;break}return c}function C(a,b){var c;b=b.toLowerCase();if(a)for(var d in a)if(d.toLowerCase()!==b){c=a[d];break}return c}function w(a,b){var c;b=b.toLowerCase();if(a)for(var d in a)if(d.toLowerCase()===b){c=a[d];break}return c}function x(a,b){if(b)for(var c in a)a[c].label=b[c];return{count:a}}
function D(a,b,c,d){var e=a.count;a=[];d&&c&&"coded-value"===c.type&&c.codedValues.forEach(function(a){a=a.code;e.hasOwnProperty(a)||(e[a]={data:a,count:0})});for(var f in e)c=e[f],a.push({value:c.data,count:c.count,label:c.label});return{uniqueValueInfos:a}}function q(a){return G.pad(a,2,"0")}function E(a,b){if("date"===b||"number"===b)"number"===b&&(a=new Date(a)),a="TIMESTAMP'"+a.getUTCFullYear()+"-"+q(a.getUTCMonth()+1)+"-"+q(a.getUTCDate())+" "+q(a.getUTCHours())+":"+q(a.getUTCMinutes())+":"+
q(a.getUTCSeconds())+"'";return a}function F(a,b){var c;b instanceof Date?c="date":"number"===typeof b?c="number":"string"===typeof b&&(a=a.getField(b),"\x3cnow\x3e"===b.toLowerCase()?c="":a&&"date"===a.type&&(c="field"));return c}function n(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==a&&-Infinity!==a}Object.defineProperty(h,"__esModule",{value:!0});var O=/_value$/i,L=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,M=Math.LOG10E,P={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,
milliseconds:1/864E5};h.statisticTypes="min max avg stddev count sum variance".split(" ");h.getSummaryStatisticsFromFeatureSet=function(a){a=(a=a&&a.features)&&a[0]&&a[0].attributes;var b={},c;for(c in a)b[c.replace(O,"").toLowerCase()]=a[c];b.min===b.max&&null!=b.min&&null==b.stddev&&(b.stddev=b.variance=0);return b};h.calculateStatsFromMemory=function(a,b,c){b=p(a,b);b=y(b,a.minValue,a.maxValue);var d=K(b,!a.normalizationType);c&&["avg","stddev","variance"].forEach(function(a){null!=d[a]&&(d[a]=
Math.ceil(d[a]))});return d};h.getDataValues=p;h.processSummaryStatisticsResult=function(a){for(var b in a)-1<h.statisticTypes.indexOf(b)&&(n(a[b])||(a[b]=null));return a};h.createCBDefn=z;h.calculateClassBreaksFromMemory=function(a,b){var c=a.normalizationTotal,d=z({field:a.field,normalizationType:a.normalizationType,normalizationField:a.normalizationField,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,breakCount:a.numClasses||5});b=p(a,b);b=y(b,
a.minValue,a.maxValue);c=J.createGenerateRendererClassBreaks({definition:d,values:b,normalizationTotal:c});return A(a,c)};h.resolveCBResult=A;h.getEqualIntervalBins=v;h.generateBinParams=function(a){var b=[],c=a.classBreaks,d=c[0].minValue,e=c[c.length-1].maxValue;c.forEach(function(a){b.push([a.minValue,a.maxValue])});return{min:d,max:e,intervals:b,sqlExpr:B({field:a.field,normalizationType:a.normalizationType,normalizationField:a.normalizationField,normalizationTotal:a.normalizationTotal}),excludeZerosExpr:a.where,
normTotal:a.normalizationTotal}};h.getFieldExpr=B;h.calculateHistogramFromMemory=function(a,b,c){var d=b.min,e=b.max,f=b.normTotal,g=a.numBins||10,k=b.intervals||v(d,e,g);b=k.map(function(a,b){return{minValue:k[b][0],maxValue:k[b][1],count:0}});g=0;for(a=p(a,c);g<a.length;g++)c=a[g],null!=c&&c>=d&&c<=e&&(c=N(k,c),-1<c&&b[c].count++);return{bins:b,minValue:d,maxValue:e,normalizationTotal:f}};h.getHistogramFromFeatureSet=function(a,b,c,d){var e={};a&&a.features&&a.features.forEach(function(a){var b=
a.attributes;a=C(b,"countOFExpr");b=w(b,"countOFExpr");0!==a&&(e[a]=b)});var f=[];v(b,c,d).forEach(function(a,b){b=(b+1).toString();f.push({minValue:a[0],maxValue:a[1],count:e.hasOwnProperty(b)?e[b]:0})});return{bins:f,minValue:b,maxValue:c}};h.getUniqueValuesFromFeatureSet=function(a,b,c,d){var e="countOF"+(c||"Expr"),f={},g=!1;(a&&a.features).forEach(function(a){var b=a.attributes;a=w(b,e);b=c?w(b,c):C(b,e);null===b&&0===a&&(g=!0);if(null==b||"string"===typeof b&&""===t.trim(b))b=null;null==f[b]?
f[b]={count:a,data:b}:f[b].count+=a});return c&&g?b.queryFeatureCount(c+" is NULL").then(function(a){f["null"].count+=a||0;return x(f,d)}).catch(function(){return x(f,d)}):H.resolve(x(f,d))};h.createUVResult=D;h.calculateUniqueValuesFromMemory=function(a,b,c){var d=a.features?"features":"features-in-memory",e={},f=0;for(b=p(a,b);f<b.length;f++){var g=b[f];if(null==g||"string"===typeof g&&""===t.trim(g))g=null;null==e[g]?e[g]={count:1,data:g}:e[g].count++}return D({count:e},d,c,a.returnAllCodedValues)};
h.msSinceUnixEpochSQL=function(a,b){var c=new Date(0);a="("+E(b,F(a,b))+" - "+E(c,F(a,c))+")";b=P.milliseconds;c="/";1>b&&(b=1/b,c="*");return 1===b?a:"("+a+" "+c+" "+b+")"};h.isValidNumber=n});