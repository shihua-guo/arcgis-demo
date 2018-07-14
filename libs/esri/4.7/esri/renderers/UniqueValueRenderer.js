// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/arrayUtils ../core/Error ../core/lang ../core/Logger ../core/urlUtils ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ../portal/Portal ./Renderer ./support/diffUtils ./support/LegendOptions ./support/UniqueValueInfo ../support/arcadeUtils ../symbols/PolygonSymbol3D ../symbols/Symbol ../symbols/WebStyleSymbol ../symbols/support/jsonUtils ../symbols/support/styleUtils ../symbols/support/typeUtils".split(" "),
function(I,J,w,c,x,t,y,f,z,p,d,u,r,A,B,C,q,l,D,E,F,g,G,h){var k=z.getLogger("esri.renderers.UniqueValueRenderer"),H=u.ensureType(q.default);return function(v){function a(b){b=v.call(this)||this;b._valueInfoMap={};b._isDefaultSymbolDerived=!1;b.type="unique-value";b.backgroundFillSymbol=null;b.field=null;b.field2=null;b.field3=null;b.valueExpression=null;b.valueExpressionTitle=null;b.legendOptions=null;b.defaultLabel=null;b.fieldDelimiter=null;b.portal=null;b.styleOrigin=null;b.diff={uniqueValueInfos:function(b,
a){if(b||a){if(!b||!a)return{type:"complete",oldValue:b,newValue:a};for(var e=!1,m={type:"collection",added:[],removed:[],changed:[],unchanged:[]},d=function(c){var d=t.find(b,function(b){return b.value===a[c].value});d?B.diff(d,a[c])?m.changed.push({type:"complete",oldValue:d,newValue:a[c]}):m.unchanged.push({oldValue:d,newValue:a[c]}):m.added.push(a[c]);e=!0},c=0;c<a.length;c++)d(c);d=function(c){t.find(a,function(e){return e.value===b[c].value})||(m.removed.push(b[c]),e=!0)};for(c=0;c<b.length;c++)d(c);
return e?m:void 0}}};b._set("uniqueValueInfos",[]);return b}w(a,v);n=a;a.prototype.writeType=function(b,e,a,c){e.type="uniqueValue"};a.prototype.writeBackgroundFillSymbolWebScene=function(b,e,a,c){g.writeTarget(b,e,a,c)};a.prototype.castField=function(b){return null==b?b:"function"===typeof b?b:u.ensureString(b)};a.prototype.writeField=function(b,e,a,c){"string"===typeof b?e[a]=b:c&&c.messages?c.messages.push(new y("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):
k.error(".field: cannot write field to JSON since it's not a string value")};Object.defineProperty(a.prototype,"compiledFunc",{get:function(){return l.createFunction(this.valueExpression)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"defaultSymbol",{set:function(b){this._isDefaultSymbolDerived=!1;this._set("defaultSymbol",b)},enumerable:!0,configurable:!0});a.prototype.readDefaultSymbol=function(b,e,a){return g.read(b,e,a)};a.prototype.writeDefaultSymbolWebScene=function(b,e,
a,c){this._isDefaultSymbolDerived||g.writeTarget(b,e,a,c)};a.prototype.writeDefaultSymbol=function(b,e,a,c){this._isDefaultSymbolDerived||g.writeTarget(b,e,a,c)};a.prototype.readPortal=function(b,e,a){return a.portal||r.getDefault()};a.prototype.readStyleOrigin=function(b,e,a){if(e.styleName)return Object.freeze({styleName:e.styleName});if(e.styleUrl)return b=p.read(e.styleUrl,a),Object.freeze({styleUrl:b})};a.prototype.writeStyleOrigin=function(b,e,a,c){b.styleName?e.styleName=b.styleName:b.styleUrl&&
(e.styleUrl=p.write(b.styleUrl,c),p.isAbsolute(e.styleUrl)&&(e.styleUrl=p.normalize(e.styleUrl)))};Object.defineProperty(a.prototype,"uniqueValueInfos",{set:function(b){this.styleOrigin?k.error("#uniqueValueInfos\x3d","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",b),this._updateValueInfoMap())},enumerable:!0,configurable:!0});a.prototype.addUniqueValueInfo=function(b,e){this.styleOrigin?k.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):
(b="object"===typeof b?H(b):new q.default({value:b,symbol:e}),this.uniqueValueInfos.push(b),this._valueInfoMap[b.value]=b)};a.prototype.removeUniqueValueInfo=function(b){if(this.styleOrigin)k.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for(var e=0;e<this.uniqueValueInfos.length;e++)if(this.uniqueValueInfos[e].value===b+""){delete this._valueInfoMap[b];this.uniqueValueInfos.splice(e,1);break}};a.prototype.getUniqueValueInfo=
function(b,e){var a=this.field,c=b.attributes,d;this.valueExpression?d=l.executeFunction(this.compiledFunc,l.createExecContext(b,l.getViewInfo(e))):"function"!==typeof a&&this.field2?(b=this.field2,e=this.field3,d=[],a&&d.push(c[a]),b&&d.push(c[b]),e&&d.push(c[e]),d=d.join(this.fieldDelimiter||"")):"function"===typeof a?d=a(b):a&&(d=c[a]);return this._valueInfoMap[d+""]};a.prototype.getSymbol=function(b,a){return(b=this.getUniqueValueInfo(b,a))&&b.symbol||this.defaultSymbol};a.prototype.getSymbols=
function(){for(var b=[],a=0,c=this.uniqueValueInfos;a<c.length;a++){var d=c[a];d.symbol&&b.push(d.symbol)}this.defaultSymbol&&b.push(this.defaultSymbol);return b};a.prototype.clone=function(){var b=new n({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:f.clone(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:f.clone(this.visualVariables),legendOptions:f.clone(this.legendOptions),
authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:f.clone(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(b._isDefaultSymbolDerived=!0);b._set("portal",this.portal);var a=f.clone(this.uniqueValueInfos);this.styleOrigin&&(b._set("styleOrigin",Object.freeze(f.clone(this.styleOrigin))),Object.freeze(a));b._set("uniqueValueInfos",a);b._updateValueInfoMap();return b};a.prototype.collectRequiredFields=function(b){this.inherited(arguments);[this.field,this.field2,
this.field3].forEach(function(a){a&&"string"===typeof a&&(b[a]=!0)});this.valueExpression&&l.extractFieldNames(this.valueExpression).forEach(function(a){b[a]=!0})};a.prototype.populateFromStyle=function(){var b=this;return G.fetchStyle(this.styleOrigin,{portal:this.portal}).then(function(a){var c=[];b._valueInfoMap={};a&&a.data&&Array.isArray(a.data.items)&&a.data.items.forEach(function(e){var d=new F({styleUrl:a.styleUrl,styleName:a.styleName,portal:b.portal,name:e.name});b.defaultSymbol||e.name!==
a.data.defaultItem||(b.defaultSymbol=d,b._isDefaultSymbolDerived=!0);d=new q.default({value:e.name,symbol:d});c.push(d);b._valueInfoMap[e.name]=d});b._set("uniqueValueInfos",Object.freeze(c));!b.defaultSymbol&&b.uniqueValueInfos.length&&(b.defaultSymbol=b.uniqueValueInfos[0].symbol,b._isDefaultSymbolDerived=!0);return b})};a.prototype._updateValueInfoMap=function(){var b=this;this._valueInfoMap={};this.uniqueValueInfos.forEach(function(a){return b._valueInfoMap[a.value+""]=a})};a.fromPortalStyle=
function(b,a){var c=new n(a&&a.properties);c._set("styleOrigin",Object.freeze({styleName:b}));c._set("portal",a&&a.portal||r.getDefault());a=c.populateFromStyle();a.catch(function(a){k.error("#fromPortalStyle('"+b+"'[, ...])","Failed to create unique value renderer from style name",a)});return a};a.fromStyleUrl=function(a,c){c=new n(c&&c.properties);c._set("styleOrigin",Object.freeze({styleUrl:a}));c=c.populateFromStyle();c.catch(function(b){k.error("#fromStyleUrl('"+a+"'[, ...])","Failed to create unique value renderer from style URL",
b)});return c};c([d.property()],a.prototype,"type",void 0);c([d.writer("type")],a.prototype,"writeType",null);c([d.property({types:{base:E,key:"type",typeMap:{"simple-fill":h.rendererTypes.typeMap["simple-fill"],"picture-fill":h.rendererTypes.typeMap["picture-fill"],"polygon-3d":h.rendererTypes.typeMap["polygon-3d"]}},json:{read:g.read,write:g.writeTarget}})],a.prototype,"backgroundFillSymbol",void 0);c([d.writer("web-scene","backgroundFillSymbol",{backgroundFillSymbol:{type:D}})],a.prototype,"writeBackgroundFillSymbolWebScene",
null);c([d.property({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],a.prototype,"field",void 0);c([d.cast("field")],a.prototype,"castField",null);c([d.writer("field")],a.prototype,"writeField",null);c([d.property({type:String,json:{write:!0}})],a.prototype,"field2",void 0);c([d.property({type:String,json:{write:!0}})],a.prototype,"field3",void 0);c([d.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);c([d.property({type:String,json:{write:!0}})],
a.prototype,"valueExpressionTitle",void 0);c([d.property({dependsOn:["valueExpression"]})],a.prototype,"compiledFunc",null);c([d.property({type:C.default,json:{write:!0}})],a.prototype,"legendOptions",void 0);c([d.property({type:String,json:{write:!0}})],a.prototype,"defaultLabel",void 0);c([d.property({types:h.rendererTypes})],a.prototype,"defaultSymbol",null);c([d.reader("defaultSymbol")],a.prototype,"readDefaultSymbol",null);c([d.writer("web-scene","defaultSymbol",{defaultSymbol:{types:h.rendererTypes3D}})],
a.prototype,"writeDefaultSymbolWebScene",null);c([d.writer("defaultSymbol")],a.prototype,"writeDefaultSymbol",null);c([d.property({type:String,json:{write:!0}})],a.prototype,"fieldDelimiter",void 0);c([d.property({type:r,readOnly:!0})],a.prototype,"portal",void 0);c([d.reader("portal",["styleName"])],a.prototype,"readPortal",null);c([d.property({readOnly:!0})],a.prototype,"styleOrigin",void 0);c([d.reader("styleOrigin",["styleName","styleUrl"])],a.prototype,"readStyleOrigin",null);c([d.writer("styleOrigin",
{styleName:{type:String},styleUrl:{type:String}})],a.prototype,"writeStyleOrigin",null);c([d.property({type:[q.default],json:{write:{overridePolicy:function(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],a.prototype,"uniqueValueInfos",null);c([d.property({dependsOn:["field","field2","field3","valueExpression"],readOnly:!0})],a.prototype,"requiredFields",void 0);c([x(1,d.cast(h.ensureType))],a.prototype,"addUniqueValueInfo",null);return a=n=c([d.subclass("esri.renderers.UniqueValueRenderer")],
a);var n}(d.declared(A))});