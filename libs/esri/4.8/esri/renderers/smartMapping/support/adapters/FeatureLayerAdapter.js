// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../geometry ../../../../core/Error ../../../../core/Handles ../../../../core/promiseUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../geometry/support/quantizationUtils ../../../../layers/support/arcgisLayerUrl ../../../../layers/support/fieldUtils ../../statistics/support/utils ../utils ./LayerAdapter ./support/utils ../../../../tasks/GenerateRendererTask ../../../../tasks/support/GenerateRendererParameters ../../../../tasks/support/QuantizationParameters ../../../../tasks/support/Query ../../../../tasks/support/StatisticDefinition ../../../../tasks/support/UniqueValueDefinition".split(" "),
function(P,Q,q,D,A,E,n,F,h,G,v,B,H,w,l,I,J,k,K,t,L,M,y,N){var O=/(https?:)?\/\/services.*\.arcgis\.com/i;return function(C){function e(a){a=C.call(this,a)||this;a._handles=new F;return a}D(e,C);e.prototype.destroy=function(){this._handles.destroy();this._hasLocalSource=this._handles=null};e.prototype._summaryStatsFromGenRend=function(a){var c=a.normalizationType,b=a.normalizationField;return this.classBreaks({field:a.field,numClasses:5,classificationMethod:"standard-deviation",standardDeviationInterval:.25,
normalizationType:c,normalizationField:"field"===c?b:void 0,minValue:a.minValue,maxValue:a.maxValue}).then(function(a){var b,c,d;a.classBreakInfos.some(function(a){a.hasAvg&&(b=a);return!!b});b&&(d=b.maxValue-b.minValue,c=b.minValue+d/2,d*=4);return k.processSummaryStatisticsResult({min:a.minValue,max:a.maxValue,avg:c,stddev:d})})};e.prototype._summaryStatsFromQuery=function(a,c){var b=a.field,d=(this.supportsSQLExpression&&c?k.msSinceUnixEpochSQL(this,b):a.sqlExpression)||b,b=d?l.getRangeExpr(d,
a.minValue,a.maxValue):null;a={sqlFormat:a.sqlExpression?"standard":null,where:l.mergeWhereClauses(a.sqlWhere,b),outStatistics:k.statisticTypes.map(function(a){var b=new y;b.statisticType="variance"===a?"var":a;b.onStatisticField=d;b.outStatisticFieldName=a+"_value";return b})};return this._statisticsFromQuery(a).then(k.getSummaryStatisticsFromFeatureSet).then(function(a){c&&("min max avg stddev sum variance".split(" ").forEach(function(b){null!=a[b]&&(a[b]=Math.ceil(a[b]))}),a.min===a.max&&null!=
a.min&&(a.avg=a.min,a.stddev=a.variance=0));return k.processSummaryStatisticsResult(a)})};e.prototype._statisticsFromQuery=function(a){var c=this.layer;if(!c.get("capabilities.query.supportsStatistics")||"multipatch"===this.geometryType&&!H.isHostedAgolService(c.url)&&10.5>c.version)return h.reject(new n("feature-layer-adapter:not-supported","Layer does not support statistics query"));var b=c.createQuery();b.outStatistics=a.outStatistics;b.groupByFieldsForStatistics=a.groupByFieldsForStatistics;b.orderByFields=
a.orderByFields;b.where=l.mergeWhereClauses(b.where,a.where);b.sqlFormat=a.sqlFormat;return c.queryFeatures(b)};e.prototype._summaryStatsFromMemory=function(a,c){var b=a.field,d=a.valueExpression,f=(d||a.sqlExpression)&&!a.sqlExpression,g=a.view,d={field:b,valueExpression:d,normalizationField:a.normalizationField,view:g};return(this._hasLocalSource||a.features||"function"!==typeof b&&!f?a.features?h.resolve(a.features):this._fetchFeaturesFromMemory(g):this._fetchFeaturesForStats(d)).then(function(d){if(!d||
!d.length)return h.reject(new n("feature-layer-adapter:insufficient-data","No features are available to calculate statistics"));var f=q({},a);if("percent-of-total"===f.normalizationType){var g=k.calculateStatsFromMemory({field:b},d).sum;if(null==g)return h.reject(new n("feature-layer-adapter:invalid","invalid normalizationTotal"));f.normalizationTotal=g}d=k.calculateStatsFromMemory(f,d,c);return k.processSummaryStatisticsResult(d)})};e.prototype._fetchFeaturesFromMemory=function(a,c){var b=this.layer;
return this._hasLocalSource?h.resolve(b.source):a?a.whenLayerView(b).then(function(a){var b=G.whenFalseOnce(a,"updating").then(function(){return a.queryFeaturesJSON(c)}).then(function(a){return a.features});h.timeout(b,1E4,null);return b}):h.reject(new n("feature-layer-adapter:insufficient-data","view is required to fetch the features from layerView"))};e.prototype._fetchFeaturesForStats=function(a){var c=this,b=this.layer,d=I.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression}),
b=b.createQuery();b.returnGeometry=!1;b.outFields=d;return this.layer.queryFeatures(b).then(function(a){return a&&a.features}).catch(function(b){return c._fetchFeaturesFromMemory(a.view)})};e.prototype._uvFromQuery=function(a,c){var b=this,d=a.field,f=a.sqlExpression,g="countOF"+(d||"Expr"),m=new y;m.statisticType="count";m.onStatisticField=f?"*":d;m.outStatisticFieldName=g;return this._statisticsFromQuery({sqlFormat:f?"standard":null,where:a.sqlWhere,outStatistics:[m],groupByFieldsForStatistics:[d||
f]}).then(function(a){return k.getUniqueValuesFromFeatureSet(a,b,d)}).then(function(b){return k.createUVResult(b,"service-query",c,a.returnAllCodedValues)})};e.prototype._uvFromGenRenderer=function(a,c){var b=this,d=a.field,f=new N;f.attributeField=d;var g=new t;g.classificationDefinition=f;return this.generateRenderer(g).then(function(a){var c={},f=b.getField(d),g=-1<w.numericTypes.indexOf(f&&f.type);a.uniqueValues.forEach(function(a){var b=a.value;if(null==b||""===b||"string"===typeof b&&(""===
b.trim()||"\x3cnull\x3e"===b.toLowerCase()))b=null;null==c[b]?c[b]={count:a.count,data:g&&b?Number(b):b}:c[b].count+=a.count});return{count:c}}).then(function(b){return k.createUVResult(b,"service-generate-renderer",c,a.returnAllCodedValues)})};e.prototype._uvFromMemory=function(a,c){var b=a.valueExpression,d=a.sqlExpression,f=a.view,g={field:a.field,valueExpression:b,view:f};return(this._hasLocalSource||a.features||!b||d?a.features?h.resolve(a.features):this._fetchFeaturesFromMemory(f):this._fetchFeaturesForStats(g)).then(function(b){return k.calculateUniqueValuesFromMemory(a,
b,c)})};e.prototype._calcBinsSQL=function(a,c){var b=[],d=c.length;c.forEach(function(c,g){c=l.mergeWhereClauses(a+" \x3e\x3d "+c[0],a+(g===d-1?" \x3c\x3d ":" \x3c ")+c[1]);b.push("WHEN ("+c+") THEN "+(g+1))});return["CASE",b.join(" "),"ELSE 0 END"].join(" ")};e.prototype._getNormalizationTotal=function(a,c){return a&&"percent-of-total"===c?this.summaryStatistics({field:a}).then(function(a){return a.sum}):h.resolve()};e.prototype._getQueryParamsForExpr=function(a,c){if(!a.valueExpression&&!a.sqlExpression){var b=
a.field,d=b?this.getField(b):null,d=w.isDateField(d);c={field:b,normalizationType:a.normalizationType,normalizationField:a.normalizationField,normalizationTotal:c};return{sqlExpression:d?k.msSinceUnixEpochSQL(this,b):k.getFieldExpr(c),sqlWhere:d?null:l.getSQLFilterForNormalization(a)}}return{valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere}};e.prototype._getDataRange=function(a,c,b){return null!=c&&null!=b?h.resolve({min:c,max:b}):this.summaryStatistics(a).then(function(a){return{min:a.min,
max:a.max}})};e.prototype._histogramForExpr=function(a){var c=this;return this._getNormalizationTotal(a.field,a.normalizationType).then(function(b){return c._getQueryParamsForExpr(a,b)}).then(function(b){return c._getDataRange(b,a.minValue,a.maxValue).then(function(d){var f=d.min,g=d.max,m=a.numBins||10;d=k.getEqualIntervalBins(f,g,m);d=c._calcBinsSQL(b.sqlExpression,d);d={outStatistics:[new y({statisticType:"count",outStatisticFieldName:"countOFExpr",onStatisticField:"*"})],groupByFieldsForStatistics:[d],
orderByFields:[d],where:b.sqlWhere,sqlFormat:"standard"};return c._statisticsFromQuery(d).then(function(a){return k.getHistogramFromFeatureSet(a,f,g,m)})})})};e.prototype._histogramForField=function(a){var c=this,b=null,b=null!=a.minValue&&null!=a.maxValue?h.resolve({min:a.minValue,max:a.maxValue}):this.summaryStatistics(a).then(function(a){return a.count?{min:a.min,max:a.max}:h.reject(new n("feature-layer-adapter:insufficient-data","Either the layer has no features or none of the features have data for the field"))});
return b.then(function(b){return c._getBins({min:b.min,max:b.max},a.field,a.numBins)})};e.prototype._getBins=function(a,c,b){void 0===b&&(b=10);var d=a.min,f=a.max,g=a.normTotal,m=a.excludeZerosExpr,e=a.intervals||k.getEqualIntervalBins(d,f,b);return this._queryBins(e,a.sqlExpr||c,m).then(function(a){return{bins:a.map(function(a,b){return{minValue:e[b][0],maxValue:e[b][1],count:a.value}}),minValue:d,maxValue:f,normalizationTotal:g}})};e.prototype._queryBins=function(a,c,b){for(var d=this,f=[],g=a.length,
m=0;m<g;m++){var e=l.mergeWhereClauses(b,l.mergeWhereClauses(c+" \x3e\x3d "+a[m][0],null!==a[m][1]?c+(m===g-1?" \x3c\x3d ":" \x3c ")+a[m][1]:""));f.push(e)}return h.eachAlways(f.map(function(a){return d.queryFeatureCount(a)}))};e.prototype._binParamsFromGenRend=function(a,c){var b=a.field,d=a.normalizationType,f=a.normalizationField,g=l.getSQLFilterForNormalization({field:b,normalizationType:d,normalizationField:f});a=new t({classificationDefinition:k.createCBDefn({field:b,normalizationType:d,normalizationField:f,
classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,breakCount:a.numBins||10}),where:l.mergeWhereClauses(g,c)});return this.generateRenderer(a).then(function(a){return k.generateBinParams({field:b,normalizationType:d,normalizationField:f,normalizationTotal:a.normalizationTotal,classBreaks:a.classBreaks,where:g})})};e.prototype._histogramFromMemory=function(a){var c=this,b=a.field,d=a.normalizationType,f=a.valueExpression,g=a.classificationMethod,e=a.minValue,
u=a.maxValue,l=a.view,r=f&&!a.sqlExpression,p={field:b,valueExpression:f,normalizationField:a.normalizationField,view:l};return(this._hasLocalSource||a.features||!r?a.features?h.resolve(a.features):this._fetchFeaturesFromMemory(l):this._fetchFeaturesForStats(p)).then(function(m){if(!m||!m.length)return h.reject(new n("feature-layer-adapter:insufficient-data","No features are available to calculate histogram"));var p=null!=e&&null!=u,r=null;g&&"equal-interval"!==g||d?(p=q({},a),p.features=m,r=c._getBinParamsFromMemory(p)):
r=p?h.resolve({min:e,max:u,source:"parameters"}):c.summaryStatistics({field:b,valueExpression:f,features:m,view:l}).then(function(a){return a.count?{min:a.min,max:a.max}:h.reject(new n("feature-layer-adapter:insufficient-data","No features are available to calculate histogram"))});return r.then(function(b){return k.calculateHistogramFromMemory(a,b,m)})})};e.prototype._getBinParamsFromMemory=function(a){var c=a.field,b=a.normalizationType,d=a.normalizationField;return this._classBreaksFromMemory({field:c,
valueExpression:a.valueExpression,normalizationType:b,normalizationField:d,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,minValue:a.minValue,maxValue:a.maxValue,numClasses:a.numBins,features:a.features,view:a.view}).then(function(a){var f=a.normalizationTotal;a=a.classBreakInfos;var e=l.getSQLFilterForNormalization({field:c,normalizationType:b,normalizationField:d});return k.generateBinParams({field:c,normalizationType:b,normalizationField:d,normalizationTotal:f,
classBreaks:a,where:e})})};e.prototype._classBreaksFromGenRend=function(a){var c=a.field,b=a.normalizationType,d=a.normalizationField,f=a.normalizationTotal,g=l.getSQLFilterForNormalization({field:c,normalizationType:b,normalizationField:d}),f=k.getFieldExpr({field:c,normalizationType:b,normalizationField:d,normalizationTotal:f}),f=l.getRangeExpr(f,a.minValue,a.maxValue),c=k.createCBDefn({field:c,normalizationType:b,normalizationField:d,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,
breakCount:a.numClasses||5}),b=new t;b.classificationDefinition=c;b.where=l.mergeWhereClauses(g,f);return this.generateRenderer(b).then(function(b){return k.resolveCBResult(a,b)})};e.prototype._classBreaksFromInterpolation=function(a){for(var c=a.minValue,b=a.maxValue,d=a.numClasses||5,f=[],g=(b-c)/d,e=0;e<d;e++){var l=c+e*g;f.push({minValue:l,maxValue:l+g})}f[d-1].maxValue=b;a=k.resolveCBResult(a,{classBreaks:f,normalizationTotal:a.normalizationTotal});return h.resolve(a)};e.prototype._classBreaksFromMemory=
function(a){var c=a.field,b=a.valueExpression,d=a.view,f={field:c,valueExpression:b,normalizationField:a.normalizationField,view:d};return(this._hasLocalSource||a.features||!b?a.features?h.resolve(a.features):this._fetchFeaturesFromMemory(d):this._fetchFeaturesForStats(f)).then(function(b){if(!b||!b.length)return h.reject(new n("feature-layer-adapter:insufficient-data","No features are available to calculate statistics"));var d=q({},a);if("percent-of-total"===d.normalizationType){var f=k.calculateStatsFromMemory({field:c},
b).sum;if(null==f)return h.reject(new n("feature-layer-adapter:invalid","invalid normalizationTotal"));d.normalizationTotal=f}return k.calculateClassBreaksFromMemory(d,b)})};e.prototype._heatmapStatsFromMemory=function(a,c){var b=a.blurRadius,d=a.field,f=a.view,g=f.state,e=g.width,l=g.height,g=new L.default({extent:f.extent,tolerance:g.resolution}),z=new M({returnGeometry:!0,quantizationParameters:g});return(a.features?h.resolve(this._quantizeFeatures(a.features,g)):this._fetchFeaturesFromMemory(f,
z)).then(function(a){if(!a||!a.length)return{count:0,min:null,max:null,avg:null,stddev:null};var f=k.calculateHeatmapStats(a,b,c,d,e,l);return f?{count:a.length,min:f.min,max:f.max,avg:f.mean,stddev:f.stdDev}:h.reject(new n("feature-layer-adapter:invalid","unable to calculate heatmap statistics"))})};e.prototype._quantizeFeatures=function(a,c){var b=B.toTransform(c);return a.map(function(a){var c=new E.Point(a.geometry);B.quantizePoint(b,c,c,c.hasZ,c.hasM);a.geometry=c;return a})};e.prototype.getField=
function(a){void 0===a&&(a="");return this.layer.getField(a)};e.prototype.getFieldUsageInfo=function(a){return this.getField(a)?{supportsLabelingInfo:!0,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:!0,supportsStatistics:!0}:null};e.prototype.getFieldDomain=function(a,c){return this.layer.getFieldDomain(a,c)};e.prototype.summaryStatistics=function(a){var c=this,b=a.field,d=b?this.getField(b):null,f=w.isDateField(d),g=(d=a.valueExpression||a.sqlExpression)&&!a.sqlExpression;return this._hasLocalSource||
a.features||"function"===typeof b||g?this._summaryStatsFromMemory(a,f):this.supportsSQLExpression||!f&&!d?(a.normalizationType?this._summaryStatsFromGenRend(a):this._summaryStatsFromQuery(a,f)).catch(function(b){return c._summaryStatsFromMemory(a,f)}):h.reject(new n("feature-layer-adapter:not-supported","Layer does not support standardized SQL expression for queries"))};e.prototype.uniqueValues=function(a){var c=this,b=a.field,d=a.valueExpression,f=a.sqlExpression,g=(b?this.getField(b):null)&&this.getFieldDomain(b),
b=d&&(!f||!this.supportsSQLExpression);return this._hasLocalSource||a.features||b?this._uvFromMemory(a,g):this._uvFromQuery(a,g).catch(function(b){return a.field?c._uvFromGenRenderer(a,g):b}).catch(function(b){return c._uvFromMemory(a,g)})};e.prototype.histogram=function(a){var c=this,b=a.field,d=a.normalizationType,f=a.normalizationField,g=a.classificationMethod,e=b?this.getField(b):null,e=w.isDateField(e),u=a.valueExpression||a.sqlExpression,z=u&&!a.sqlExpression,r=this.supportsSQLExpression,p=
!g||"equal-interval"===g,q=a.minValue,x=a.maxValue,v=null!=q&&null!=x,t=a.numBins||10;return this._hasLocalSource||a.features||z?this._histogramFromMemory(a):(u||r)&&p?u&&!r?h.reject(new n("feature-layer-adapter:not-supported","Layer does not support standardized SQL expression for queries")):this._histogramForExpr(a):e&&p?h.reject(new n("feature-layer-adapter:not-supported","Normalization and date field are not allowed when layer does not support standardized SQL expression for queries")):d||!p?
this._binParamsFromGenRend(a).then(function(e){if(!v)return c._getBins(e,b,t);if(q>e.max||x<e.min)return h.reject(new n("histogram:insufficient-data","Range defined by 'minValue' and 'maxValue' does not intersect available data range of the field"));if(p)return c._getBins({min:q,max:x,sqlExpr:e.sqlExpr,excludeZerosExpr:e.excludeZerosExpr},b,t);e=k.getFieldExpr({field:b,normalizationType:d,normalizationField:f,normalizationTotal:e.normTotal});e=l.getRangeExpr(e,q,x);return c._binParamsFromGenRend(a,
e).then(function(a){return c._getBins(a,b,t)})}):this._histogramForField(a)};e.prototype.classBreaks=function(a){var c=this,b=!1!==a.analyzeData,d=this._hasLocalSource||a.features||a.valueExpression;return b&&d?this._classBreaksFromMemory(a):(b?this._classBreaksFromGenRend(a):this._classBreaksFromInterpolation(a)).catch(function(b){return c._classBreaksFromMemory(a)})};e.prototype.queryFeatureCount=function(a){if(this._hasLocalSource)return h.reject(new n("feature-layer-adapter:not-supported","Layer does not support count query"));
var c=this.layer,b=c.createQuery();b.where=l.mergeWhereClauses(b.where,a);return c.queryFeatureCount(b)};e.prototype.generateRenderer=function(a){var c=this.layer;if(this._hasLocalSource||10.1>c.version)return h.reject(new n("feature-layer-adapter:not-supported","Layer does not support generateRenderer operation (requires ArcGIS Server version 10.1+)"));var b=new K({url:c.parsedUrl.path,source:c.dynamicDataSource,gdbVersion:c.gdbVersion}),c=c.createQuery();a.where=l.mergeWhereClauses(a.where,c.where);
return b.execute(a)};e.prototype.heatmapStatistics=function(a){var c=this,b=a.field,d=a.fieldOffset;return(b&&null==d?this.summaryStatistics({field:b}):h.resolve()).then(function(b){var e=d||0;if(b){var f=b.min,h=b.max;b.count?f===h&&0===f?e=1:0>=h?e="abs":0>f&&(e=-1.01*f):e=1}return c._heatmapStatsFromMemory(a,e).then(function(a){return q({},a,{summaryStatistics:b,fieldOffset:e})})})};e.prototype.load=function(){var a=this,c=this.layer,b=c.load().then(function(){a.geometryType=c.geometryType;a.objectIdField=
c.objectIdField;a.supportsSQLExpression=O.test(c.url);a._hasLocalSource=!c.url&&!!c.source});this.addResolvingPromise(b);return this.when()};A([v.property({constructOnly:!0})],e.prototype,"layer",void 0);return e=A([v.subclass()],e)}(v.declared(J))});