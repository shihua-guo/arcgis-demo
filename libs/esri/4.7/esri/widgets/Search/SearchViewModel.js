// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/has dojo/i18n!./nls/Search ../../Graphic ../../PopupTemplate ../../core/Accessor ../../core/Collection ../../core/Error ../../core/Evented ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/Point ../../geometry/SpatialReference ../../styles/basic ../../symbols/PictureMarkerSymbol ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../symbols/SimpleMarkerSymbol ../../symbols/TextSymbol ../../tasks/Locator ./FeatureLayerSearchSource ./LocatorSearchSource ./SearchSource ./support/geometryUtils".split(" "),
function(u,U,C,d,D,k,A,E,F,G,v,H,I,J,h,p,c,l,K,L,M,N,O,P,Q,R,w,m,S,x){function g(c,b){return c.hasOwnProperty(b)&&null!=c[b]&&""!==c[b]}var y=J.getLogger("esri.widgets.Search.SearchViewModel"),n=G.ofType({key:function(c){return c.featureLayer?"feature-layer":"locator"},base:S,typeMap:{"feature-layer":w,locator:m}}),r=K.WGS84,T=/<(?:.|\s)*?>/g;return function(q){function b(a){a=q.call(this)||this;a._handles=new I;a._viewReadyPromise=null;a._gotoPromise=null;a._popupTemplate=new E({title:k.searchResult,
content:"{Match_addr}"});a.activeSource=null;a.activeSourceIndex=0;a.allPlaceholder=k.allPlaceholder;a.autoNavigate=!0;a.autoSelect=!0;a.defaultSource=new m({locator:new R({url:"//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"}),singleLineFieldName:"SingleLine",outFields:["Addr_type","Match_addr","StAddr","City"],name:k.esriLocatorName,localSearchOptions:{minScale:3E5,distance:5E4},placeholder:k.placeholder,resultSymbol:new M({url:u.toUrl(D("trident")?"../../images/search/search-symbol-32.png":
"../../images/search/search-symbol-32.svg"),size:24,width:24,height:24})});a.locationToAddressDistance=1500;a.maxInputLength=128;a.maxResults=6;a.maxSuggestions=6;a.minSuggestCharacters=1;a.popupOpenOnSelect=!0;a.popupTemplate=null;a.popupEnabled=!0;a.resultGraphicEnabled=!0;a.resultGraphic=null;a.results=null;a.selectedSuggestion=null;a.searchAllEnabled=!0;a.selectedResult=null;a.sources=new n([a.defaultSource]);a.suggestionDelay=150;a.suggestions=null;a.suggestionsEnabled=!0;a.view=null;return a}
C(b,q);b.prototype.initialize=function(){var a=this;this._handles.add([p.init(this,"activeSourceIndex",function(){return a._updateActiveSource()}),p.init(this,"searchAllEnabled, sources",function(){return a._setDefaultActiveSourceIndex()})])};b.prototype.destroy=function(){this.clearGraphics();this._viewReadyPromise&&this._viewReadyPromise.cancel();this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"placeholder",{get:function(){var a=this.activeSourceIndex,e=this.allPlaceholder,
e=void 0===e?k.allPlaceholder:e;return-1===a?e:(a=this.sources.getItemAt(a))?a.placeholder:""},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"popup",{get:function(){return this.get("view.popup")||null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"searchTerm",{get:function(){return this._get("searchTerm")||""},set:function(a){this._set("searchTerm",a||"");this.clearGraphics();this.selectedSuggestion&&this.selectedSuggestion.text!==a&&this._set("selectedSuggestion",
null);""===a&&this._clear()},enumerable:!0,configurable:!0});b.prototype.clear=function(){this.searchTerm=""};b.prototype.clearGraphics=function(){this._closePopup();this.view&&this.view.graphics.remove(this.resultGraphic);this._set("resultGraphic",null)};b.prototype.search=function(a){var e=this;this.emit("search-start");this.clearGraphics();var f=this._createSuggestionForSearch(a);return this._ready(this.view).then(function(){return e._getResultsFromSources(f).then(function(a){var b={activeSourceIndex:e.activeSourceIndex,
searchTerm:f.text,numResults:0,numErrors:0,errors:[],results:[]};e._formatResponse(b,a,f);a=e._getFirstResult(b.results);var t=(f.location&&a?a.name:f.text).replace(T,"");e._set("searchTerm",t);(f.key&&"number"===typeof f.sourceIndex||f.location)&&e._set("selectedSuggestion",f);e._set("results",b.results);e.emit("search-complete",b);return e._selectFirstResult(a).then(function(){return b})})})};b.prototype.select=function(a){var e=this;this.clearGraphics();if(!a)return y.error("missing-parameter: searchResult is required."),
h.reject(new v("searchviewmodel:missing-parameter","searchResult is required."));var b=this.view,t=g(a,"sourceIndex")?a.sourceIndex:this._getSourceIndexOfResult(a),c=this.sources.getItemAt(t);if(!c)return y.error("missing-source: source not found for selection."),h.reject(new v("searchviewmodel:missing-source","source not found for selection."));var d=c instanceof w?this._getSourcePopupTemplate(c):null,z=c.resultSymbol||this._getDefaultSymbol(a),k=g(c,"resultGraphicEnabled")?c.resultGraphicEnabled:
this.resultGraphicEnabled,m=g(c,"autoNavigate")?c.autoNavigate:this.autoNavigate,p=g(c,"popupOpenOnSelect")?c.popupOpenOnSelect:this.popupOpenOnSelect,l=g(c,"popupEnabled")?c.popupEnabled:this.popupEnabled,q=l?d||this.popupTemplate||this._popupTemplate:null,d=a.feature,n=this.popup,r=d.attributes,B=d.geometry,u=d.sourceLayer;if(!d)return y.error("missing-feature: searchResult must contain a feature for selection."),h.reject(new v("searchviewmodel:missing-feature","searchResult must contain a feature for selection."));
d=x.getPointFromGeometry(B);return(b?x.getPointWithElevation(d,b):h.resolve(d)).then(function(f){z instanceof Q&&(z.text=a.name);var d=new A({geometry:B,symbol:z,attributes:r,sourceLayer:u,popupTemplate:q});return(b&&m?e._goToSearchResult(b,a.extent):h.resolve()).then(function(){e._gotoPromise=null;k&&b&&b.graphics.push(d);n&&l&&p&&n.open({features:[d],location:f});e._set("selectedResult",a);e._set("resultGraphic",d);e.emit("select-result",{result:a,source:c,sourceIndex:t});return a})})};b.prototype.suggest=
function(a,b){var e=this,c=a||this.searchTerm;this.emit("suggest-start",{searchTerm:c});return this._suggestTimer(b).then(function(){return e._suggestImmediate(c).then(function(a){e._set("suggestions",a.results);e.emit("suggest-complete",a);return a})})};b.prototype._clear=function(){this._gotoPromise&&(this._gotoPromise.cancel(),this._gotoPromise=null);this._set("results",null);this._set("suggestions",null);this._set("selectedResult",null);this._set("selectedSuggestion",null);this.emit("search-clear")};
b.prototype._closePopup=function(){var a=this.get("view.popup"),b=this.resultGraphic;if(a&&this.popupEnabled&&b){var f=a.selectedFeature;f&&f===b&&a.close()}};b.prototype._suggestTimer=function(a){return h.after(null!=a?a:this.suggestionDelay)};b.prototype._createLocationForSearch=function(a){if(a instanceof A)return x.getPointFromGeometry(a.geometry);if(a instanceof l)return a;if(Array.isArray(a)&&2===a.length)return new l({longitude:a[0],latitude:a[1]})};b.prototype._createSuggestionForSearch=function(a){if(a&&
g(a,"key")&&g(a,"text")&&g(a,"sourceIndex"))return a;var b=this._createLocationForSearch(a)||null,f="string"===typeof a?a:this.searchTerm,c=this.selectedSuggestion,d=this.selectedResult,h=(a=!a&&c&&d)&&c.location;return a&&c.key===d.key&&c.sourceIndex===d.sourceIndex||h?c:{location:b,text:b?"":f,sourceIndex:null,key:null}};b.prototype._getFirstResult=function(a){var b=null;a&&a.some(function(a){a=a.results[0];var e=!!a;e&&(b=a);return e});return b};b.prototype._selectFirstResult=function(a){return this.autoSelect&&
a?this.select(a):h.resolve()};b.prototype._suggestImmediate=function(a){var b=this;return this._ready(this.view).then(function(){return b._getSuggestionsFromSources(a)}).then(function(e){var c={activeSourceIndex:b.activeSourceIndex,searchTerm:a,numResults:0,numErrors:0,errors:[],results:[]};b._formatResponse(c,e);return c})};b.prototype._formatSourceResponse=function(a,b,c){var e=b&&b.value||[];b=b&&b.error;var f=this.sources.getItemAt(c);b?(a.errors.push({sourceIndex:c,source:f,error:b}),a.numErrors++):
(a.results.push({sourceIndex:c,source:f,results:e}),a.numResults+=e.length)};b.prototype._formatResponse=function(a,b,c){var e=this;if(b)if(-1===a.activeSourceIndex){var f=c&&g(c,"sourceIndex")&&-1!==c.sourceIndex?c.sourceIndex:void 0;b.forEach(function(b,c){e._formatSourceResponse(a,b,void 0!==f?f:c)})}else this._formatSourceResponse(a,b[0],a.activeSourceIndex)};b.prototype._getResultsFromSources=function(a){var b=this,c=!a.location&&g(a,"sourceIndex")?a.sourceIndex:this.activeSourceIndex,d=[];-1===
c?this.sources.forEach(function(c,e){d.push(b._getResultsFromSource(a,e))}):d.push(this._getResultsFromSource(a,c));return h.eachAlways(d)};b.prototype._getSuggestionsFromSources=function(a){var b=this,c=this.activeSourceIndex,d=[];-1===c?this.sources.forEach(function(c,e){d.push(b._getSuggestionsFromSource(a,e))}):d.push(this._getSuggestionsFromSource(a,c));return h.eachAlways(d)};b.prototype._getResultsFromSource=function(a,b){var c=this.sources.getItemAt(b),e=a.location,e=void 0===e?null:e,d=this.get("view.spatialReference")||
r,h=g(c,"maxResults")?c.maxResults:this.maxResults,k=c instanceof w&&g(c,"exactMatch")?c.exactMatch:!1,l=c instanceof m&&g(c,"locationToAddressDistance")?c.locationToAddressDistance:this.locationToAddressDistance;return c.getResults({view:this.view,sourceIndex:b,location:e,suggestResult:a,spatialReference:d,exactMatch:k,maxResults:h,distance:l})};b.prototype._getSuggestionsFromSource=function(a,b){var c=this.sources.getItemAt(b),e=g(c,"suggestionsEnabled")?c.suggestionsEnabled:this.suggestionsEnabled,
d=a.trim().length,k=g(c,"minSuggestCharacters")?c.minSuggestCharacters:this.minSuggestCharacters;return e&&d>=k?(e=this.get("view.spatialReference")||r,d=g(c,"maxSuggestions")?c.maxSuggestions:this.maxSuggestions,c.getSuggestions({view:this.view,sourceIndex:b,suggestTerm:a,spatialReference:e,maxSuggestions:d})):h.resolve()};b.prototype.createDefaultSymbol=function(a,b){if("point"===b)return new P({color:a.color,size:a.size,outline:{color:a.outline.color,width:a.outline.width}});if("polyline"===b)return new O({color:a.color,
width:a.width});if("polygon"===b)return new N({color:a.color,outline:{color:a.outline.color,width:a.outline.width}})};b.prototype._updateActiveSource=function(){var a=this.sources.getItemAt(this.activeSourceIndex)||null;this._set("activeSource",a)};b.prototype._setDefaultActiveSourceIndex=function(){this.activeSourceIndex=1!==this.sources.length&&this.searchAllEnabled?-1:0};b.prototype._getSourcePopupTemplate=function(a){var b=a.featureLayer;if(b)return g(a,"popupTemplate")?a.popupTemplate:b.popupTemplate};
b.prototype._getSourceIndexOfResult=function(a){var b=null;this.results.some(function(c){return c.results.some(function(d){if(d===a)return b=c.sourceIndex,!0})});return b};b.prototype._goToSearchResult=function(a,b){var c=!!b,d={animate:c};a="3d"===a.type?a.goTo({target:b,tilt:0},d):a.goTo({target:b},d);c&&(this._gotoPromise=a);return a};b.prototype._ready=function(a){this._viewReadyPromise&&this._viewReadyPromise.cancel();return a?this._viewReadyPromise=a.always().then(function(){return null}):h.resolve()};
b.prototype._getDefaultSymbol=function(a){var b=this.get("view.map.basemap.id");if(a=a&&a.feature&&a.feature.geometry&&a.feature.geometry.type)if(b=(b=L.getSchemes({theme:"default",basemap:b||"topo",geometryType:a}))&&b.primaryScheme)return b.color&&g(b,"opacity")&&(b.color.a=b.opacity),this.createDefaultSymbol(b,a);return this.get("defaultSource.resultSymbol")};b.ALL_INDEX=-1;d([c.property({readOnly:!0})],b.prototype,"activeSource",void 0);d([c.property()],b.prototype,"activeSourceIndex",void 0);
d([c.property()],b.prototype,"allPlaceholder",void 0);d([c.property()],b.prototype,"autoNavigate",void 0);d([c.property()],b.prototype,"autoSelect",void 0);d([c.property({readOnly:!0})],b.prototype,"defaultSource",void 0);d([c.property()],b.prototype,"locationToAddressDistance",void 0);d([c.property()],b.prototype,"maxInputLength",void 0);d([c.property()],b.prototype,"maxResults",void 0);d([c.property()],b.prototype,"maxSuggestions",void 0);d([c.property()],b.prototype,"minSuggestCharacters",void 0);
d([c.property({readOnly:!0,dependsOn:["activeSourceIndex","activeSource.placeholder","allPlaceholder","sources"]})],b.prototype,"placeholder",null);d([c.property({dependsOn:["view.popup"],readOnly:!0})],b.prototype,"popup",null);d([c.property()],b.prototype,"popupOpenOnSelect",void 0);d([c.property()],b.prototype,"popupTemplate",void 0);d([c.property()],b.prototype,"popupEnabled",void 0);d([c.property()],b.prototype,"resultGraphicEnabled",void 0);d([c.property({readOnly:!0})],b.prototype,"resultGraphic",
void 0);d([c.property({readOnly:!0})],b.prototype,"results",void 0);d([c.property({readOnly:!0})],b.prototype,"selectedSuggestion",void 0);d([c.property()],b.prototype,"searchAllEnabled",void 0);d([c.property({readOnly:!0})],b.prototype,"selectedResult",void 0);d([c.property()],b.prototype,"searchTerm",null);d([c.property({type:n})],b.prototype,"sources",void 0);d([c.property()],b.prototype,"suggestionDelay",void 0);d([c.property({readOnly:!0})],b.prototype,"suggestions",void 0);d([c.property()],
b.prototype,"suggestionsEnabled",void 0);d([c.property()],b.prototype,"view",void 0);d([c.property()],b.prototype,"clear",null);return b=d([c.subclass("esri.widgets.Search.SearchViewModel")],b)}(c.declared(F,H))});