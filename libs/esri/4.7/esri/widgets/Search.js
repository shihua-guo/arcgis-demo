// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Search/nls/Search dojo/keys dojo/query dojo/regexp ../PopupTemplate ../core/geolocationUtils ../core/lang ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./Search/SearchResultRenderer ./Search/SearchViewModel ./support/widget".split(" "),function(E,F,v,f,k,e,l,x,y,r,z,A,g,B,C,t,d){var D=/<[a-z/][\s\S]*>/i;return function(u){function b(a){a=u.call(this)||this;a._supportsGeolocation=
null;a._inputNode=null;a._searching=null;a._sourceMenuButtonNode=null;a._sourceListNode=null;a._suggestionListNode=null;a._searchResultRenderer=new C({container:document.createElement("div")});a._suggestPromise=null;a._popupTemplate=new y({title:k.searchResult,content:a._renderSearchResultsContent.bind(a)});a._relatedTarget=null;a.activeMenu="none";a.activeSource=null;a.activeSourceIndex=null;a.allPlaceholder=null;a.autoNavigate=null;a.autoSelect=null;a.defaultSource=null;a.iconClass="esri-icon-search";
a.label=k.widgetLabel;a.locationEnabled=!0;a.locationToAddressDistance=null;a.maxResults=null;a.maxSuggestions=null;a.minSuggestCharacters=null;a.popupEnabled=null;a.popupOpenOnSelect=null;a.popupTemplate=null;a.resultGraphic=null;a.resultGraphicEnabled=null;a.results=null;a.searchAllEnabled=null;a.searchTerm=null;a.selectedResult=null;a.sources=null;a.suggestions=null;a.suggestionsEnabled=null;a.view=null;a.viewModel=new t;a._supportsGeolocation=r.supported();return a}v(b,u);b.prototype.postInitialize=
function(){var a=this;this.viewModel.popupTemplate=this._popupTemplate;this.own(A.watch(this,"searchTerm",function(c){if(c&&"warning"===a.activeMenu||!c&&!a.get("viewModel.selectedSuggestion.location"))a.activeMenu="none"}))};b.prototype.destroy=function(){this._cancelSuggest();this._searchResultRenderer&&(this._searchResultRenderer.viewModel=null,this._searchResultRenderer.destroy(),this._searchResultRenderer=null)};Object.defineProperty(b.prototype,"state",{get:function(){return 0===this.sources.length?
"disabled":this._searching?"searching":"ready"},enumerable:!0,configurable:!0});b.prototype.clear=function(){};b.prototype.focus=function(){this._inputNode&&(this.activeMenu="suggestion",this._inputNode.focus(),this.emit("search-focus"))};b.prototype.blur=function(a){this._inputNode&&(this._inputNode.blur(),this._inputBlur(a),this.emit("search-blur"))};b.prototype.search=function(a){var c=this;this.activeMenu="none";this._cancelSuggest();a=this.viewModel.search(a).then(function(a){c.activeMenu=a.numResults?
"none":"warning";return a}).catch(function(){c.activeMenu="none";return null}).always(function(a){c._searching=null;c.notifyChange("state");return a});this._searching=a.isFulfilled()?null:a;this.notifyChange("state");return a};b.prototype.suggest=function(a){var c=this;this._cancelSuggest();return this._suggestPromise=a=this.viewModel.suggest(a).then(function(a){a.numResults&&(c.activeMenu="suggestion");c._scrollToTopSuggestion();return a}).catch(function(){return null})};b.prototype.render=function(){var a=
this,c=this.viewModel,b=c.placeholder,h=c.searchTerm,e=this._getSourceName(c.activeSourceIndex),f=(""+h).trim(),g=this.activeMenu,p=this.id,l=this.state,q=this.id+"-suggest-menu",b=d.tsx("input",{bind:this,placeholder:b,"aria-label":k.searchButtonTitle,maxlength:c.maxInputLength,autocomplete:"off",type:"text",tabindex:"0",class:this.classes("esri-input","esri-search__input"),"aria-autocomplete":"list",value:h,"aria-haspopup":"true","aria-owns":q,role:"textbox",onkeydown:this._handleInputKeydown,onkeyup:this._handleInputKeyup,
onclick:this._handleInputClick,oninput:this._handleInputPaste,onpaste:this._handleInputPaste,afterCreate:d.storeNode,"data-node-ref":"_inputNode",onfocusout:this._storeRelatedTarget,onfocus:this.focus,onblur:this.blur,title:h?"":b}),b=d.tsx("form",{key:"esri-search__form",bind:this,class:"esri-search__form",onsubmit:this._formSubmit,role:"search"},b),m=h?d.tsx("div",{key:"esri-search__clear-button",bind:this,role:"button",class:d.join("esri-search__clear-button","esri-widget-button"),tabindex:"0",
title:k.clearButtonTitle,onfocus:this._clearButtonFocus,onclick:this._handleClearButtonClick,onkeydown:this._handleClearButtonClick},d.tsx("span",{"aria-hidden":"true",class:"esri-icon-close"})):null,r=this.locationEnabled&&this._supportsGeolocation&&!f?d.tsx("ul",{key:"esri-search__suggestion-list-current-location",class:d.join("esri-search__suggestions-list","esri-search__suggestions-list--current-location")},d.tsx("li",{bind:this,onclick:this._handleUseCurrentLocationClick,onkeydown:this._handleUseCurrentLocationClick,
onkeyup:this._handleSuggestionKeyup,role:"menuitem",tabindex:"-1"},d.tsx("span",{"aria-hidden":"true",role:"presentation",class:"esri-icon-locate-circled"})," ",k.useCurrentLocation)):null,u=1<c.sources.length&&c.activeSourceIndex===t.ALL_INDEX,v=c.suggestions?c.suggestions.map(function(c,b){var e=c.sourceIndex,h=c.results.length;b=h&&u?a._getSuggestionHeaderNode(e):null;c=c.results.map(function(c,b){return a._getSuggestionNode(c,b,e)});c=h?d.tsx("ul",{key:"esri-search__suggestion-list-"+e,class:"esri-search__suggestions-list"},
c):null;return[b,c]}):null,q=d.tsx("div",{id:q,"aria-expanded":"suggestion"===g,key:"esri-search__suggestions-menu",class:d.join("esri-menu","esri-search__suggestions-menu"),role:"menu",bind:this,afterCreate:d.storeNode,"data-node-ref":"_suggestionListNode"},r,v),q=d.tsx("div",{key:"esri-search__input-container",class:"esri-search__input-container"},b,q,m),b=d.tsx("div",{key:"esri-search__submit-button",bind:this,role:"button",title:k.searchButtonTitle,class:d.join("esri-search__submit-button","esri-widget-button"),
tabindex:"0",onclick:this._handleSearchButtonClick,onkeydown:this._handleSearchButtonClick},d.tsx("span",{"aria-hidden":"true",role:"presentation",class:"esri-icon-search"}),d.tsx("span",{class:"esri-icon-font-fallback-text"},k.searchButtonTitle)),h=f?z.substitute({value:'"'+h+'"'},k.noResultsFoundForValue):k.noResultsFound,h=c.get("selectedSuggestion.location")||f?d.tsx("div",{key:"esri-search__no_results"},d.tsx("div",{class:"esri-search__warning-header"},k.noResults),d.tsx("div",{class:"esri-search__warning-text"},
h)):null,f=c.get("selectedSuggestion.location")||f?null:d.tsx("div",{key:"esri-search__empty-search"},d.tsx("span",{"aria-hidden":"true",class:"esri-icon-notice-triangle"}),d.tsx("span",{class:"esri-search__no-value-text"},k.emptyValue)),f=d.tsx("div",{key:"esri-search__error-menu",class:d.join("esri-menu","esri-search__warning-menu")},d.tsx("div",{class:"esri-search__warning-body"},h,f)),m=c.sources,h=1<m.length,m=m&&m.toArray(),c=c.searchAllEnabled?this._getSourceNode(t.ALL_INDEX):null,p=p+"-source-menu",
e=h?d.tsx("div",{key:"esri-search__source-menu-button",bind:this,role:"button",title:k.searchIn,"aria-haspopup":"true","aria-expanded":"source"===g,"aria-controls":p,class:d.join("esri-search__sources-button","esri-widget-button"),tabindex:"0",onkeydown:this._handleSourceMenuButtonKeydown,onclick:this._handleSourcesMenuToggleClick,onkeyup:this._handleSourceMenuButtonKeyup,onblur:this._sourcesButtonBlur,afterCreate:d.storeNode,"data-node-ref":"_sourceMenuButtonNode"},d.tsx("span",{"aria-hidden":"true",
role:"presentation",class:"esri-icon-down-arrow esri-search__sources-button--down"}),d.tsx("span",{"aria-hidden":"true",role:"presentation",class:"esri-icon-up-arrow esri-search__sources-button--up"}),d.tsx("span",{class:"esri-search__source-name"},e)):null,c=h?d.tsx("ul",{bind:this,afterCreate:d.storeNode,"data-node-ref":"_sourceListNode"},c,m.map(function(c,b){return a._getSourceNode(b)})):null,p=d.tsx("div",{id:p,key:"esri-search__source-menu",class:d.join("esri-menu","esri-search__sources-menu"),
role:"menu"},c),g=(n={},n["esri-search--multiple-sources"]=h,n["esri-search--loading"]="searching"===l,n["esri-search--warning"]="warning"===g,n["esri-search--sources"]="source"===g,n["esri-search--show-suggestions"]="suggestion"===g,n),l=(w={},w["esri-disabled"]="disabled"===l,w);return d.tsx("div",{class:"esri-search esri-widget",classes:l},d.tsx("div",{role:"presentation",classes:g,class:"esri-search__container"},e,p,q,b,f));var n,w};b.prototype._handleSourceMenuButtonKeydown=function(a){var c=
a.keyCode;c===e.UP_ARROW||c===e.DOWN_ARROW||c===e.END||c===e.HOME?(a.preventDefault(),a.stopPropagation(),this.activeMenu="source"):this._handleSourcesMenuToggleClick(a)};b.prototype._handleSourcesMenuToggleClick=function(a){var c="source"===this.activeMenu;this.activeMenu=c?"none":"source";this.renderNow();c?this._sourceMenuButtonNode&&this._sourceMenuButtonNode.focus():(c=this._sourceListNode?l("li",this._sourceListNode):null)&&(a=a.keyCode===e.END?c[c.length-1]:c[0])&&a.focus()};b.prototype._handleClearButtonClick=
function(){this.viewModel.clear();this._focus()};b.prototype._handleSearchButtonClick=function(){this.search()};b.prototype._handleSuggestionClick=function(a){if(a=a.currentTarget["data-suggestion"])this._focus(),this.search(a)};b.prototype._handleUseCurrentLocationClick=function(){var a=this;this._focus("none");var c=r.getCurrentPosition().then(function(c){return r.positionToPoint(c,a.view).then(function(c){return a.search(c)})}).always(function(c){a._searching=null;a.notifyChange("state");return c});
this._searching=c.isFulfilled()?null:c;this.notifyChange("state")};b.prototype._handleSourceClick=function(a){this.viewModel.activeSourceIndex=a.currentTarget["data-source-index"];this._focus("none")};b.prototype._sourcesButtonBlur=function(a){this._removeActiveMenu(a&&a.relatedTarget,this._sourceListNode)};b.prototype._inputBlur=function(a){a=a&&a.relatedTarget;this._removeActiveMenu(a?a:this._relatedTarget,this._suggestionListNode)};b.prototype._storeRelatedTarget=function(a){this._relatedTarget=
a.relatedTarget};b.prototype._clearButtonFocus=function(){this.activeMenu="none"};b.prototype._removeActiveMenu=function(a,c){a&&c&&c.contains(a)||(this.activeMenu="none")};b.prototype._cancelSuggest=function(){var a=this._suggestPromise;a&&(a.cancel(),this._suggestPromise=null)};b.prototype._handleInputKeydown=function(a){var c=a.keyCode;(c===e.TAB||c===e.ESCAPE||a.shiftKey&&c===e.TAB)&&this._cancelSuggest()};b.prototype._handleInputKeyup=function(a){var c=a.keyCode,b=a.ctrlKey||a.metaKey||c===e.copyKey||
c===e.LEFT_ARROW||c===e.RIGHT_ARROW||c===e.ENTER||c===e.SHIFT,d=this._suggestionListNode?l("li",this._suggestionListNode):null;b||(c===e.TAB||c===e.ESCAPE||a.shiftKey&&c===e.TAB?(this._cancelSuggest(),c===e.ESCAPE&&(this.activeMenu="none")):c!==e.UP_ARROW&&c!==e.DOWN_ARROW||!d?this.viewModel.searchTerm&&this.suggest():(this.activeMenu="suggestion",a.stopPropagation(),a.preventDefault(),this._cancelSuggest(),(a=d[c===e.UP_ARROW?d.length-1:0])&&a.focus()))};b.prototype._scrollToTopSuggestion=function(){this._suggestionListNode&&
(this._suggestionListNode.scrollTop=0)};b.prototype._handleInputClick=function(a){this.activeMenu="suggestion"};b.prototype._handleInputPaste=function(a){var c=this.viewModel;a=a.target;c.searchTerm!==a.value&&(c.searchTerm=a.value);c.searchTerm&&this.suggest()};b.prototype._handleSourceMenuButtonKeyup=function(a){var c=a.keyCode;if(c===e.UP_ARROW||c===e.DOWN_ARROW||c===e.HOME||c===e.END)a.stopPropagation(),a.preventDefault(),(a=this._sourceListNode?l("li",this._sourceListNode):null)&&(c=a[c===e.UP_ARROW||
c===e.END?a.length-1:0])&&c.focus()};b.prototype._handleSourceKeyup=function(a){var c=a.target,b=this._sourceListNode?l("li",this._sourceListNode):null,d=a.keyCode;if(d===e.ESCAPE)this._focus("none"),this._sourceMenuButtonNode&&this._sourceMenuButtonNode.focus();else if(b){c=b.indexOf(c);if(d===e.HOME||d===e.END||d===e.UP_ARROW||d===e.DOWN_ARROW)a.stopPropagation(),a.preventDefault();d===e.HOME?(b=b[0])&&b.focus():d===e.END?(b=b[b.length-1])&&b.focus():d===e.UP_ARROW?(a=c-1,(b=0>a?this._sourceMenuButtonNode:
b[a])&&b.focus()):d===e.DOWN_ARROW&&(a=c+1,(b=a>=b.length?this._sourceMenuButtonNode:b[a])&&b.focus())}};b.prototype._handleSuggestionKeyup=function(a){var c=a.target,b=this._suggestionListNode?l("li",this._suggestionListNode):null,c=b.indexOf(c),d=a.keyCode;this._cancelSuggest();if(d===e.BACKSPACE||d===e.DELETE)this._focus();else if(d===e.ESCAPE)this._focus("none");else if(b){if(d===e.HOME||d===e.END||d===e.UP_ARROW||d===e.DOWN_ARROW)a.stopPropagation(),a.preventDefault();d===e.HOME&&(a=b[0])&&a.focus();
d===e.END&&(a=b[b.length-1])&&a.focus();d===e.UP_ARROW?(--c,(b=0>c?b[b.length-1]:b[c])&&b.focus()):d===e.DOWN_ARROW&&(c+=1,(b=c>=b.length?b[0]:b[c])&&b.focus())}};b.prototype._focus=function(a){this.focus();a&&(this.activeMenu=a)};b.prototype._formSubmit=function(a){a.preventDefault();this.search()};b.prototype._getSourceName=function(a){var b=this.viewModel.sources.getItemAt(a);return a===t.ALL_INDEX?k.all:b?b.name:k.untitledSource};b.prototype._getSuggestionHeaderNode=function(a){var b=this._getSourceName(a);
return d.tsx("div",{key:"esri-search__suggestion-header-"+a,class:"esri-header"},b)};b.prototype._splitResult=function(a,b){b=x.escapeString(b);return a.replace(new RegExp("(^|)("+b+")(|$)","ig"),"$1|$2|$3").split("|")};b.prototype._getSuggestionNode=function(a,b,e){if(e=this.viewModel.searchTerm){var c=a.text||k.untitledResult,f=[];if(D.test(c))f.push(d.tsx("div",{innerHTML:c}));else{var c=this._splitResult(c,e),g=e.toLowerCase();c.forEach(function(a,b){a&&a.length&&(a.toLowerCase()===g?f.push(d.tsx("strong",
{key:b},a)):f.push(a))})}return d.tsx("li",{bind:this,onclick:this._handleSuggestionClick,onkeydown:this._handleSuggestionClick,onkeyup:this._handleSuggestionKeyup,key:"esri-search__suggestion$-{sourceIndex}_"+b,"data-suggestion":a,role:"menuitem",tabindex:"-1"},f)}};b.prototype._getSourceNode=function(a){var b=(e={},e["esri-search__source--active"]=a===this.viewModel.activeSourceIndex,e);return d.tsx("li",{bind:this,key:"esri-search__source-"+a,onclick:this._handleSourceClick,onkeydown:this._handleSourceClick,
onkeyup:this._handleSourceKeyup,"data-source-index":a,role:"menuitem",class:"esri-search__source",classes:b,tabindex:"-1"},this._getSourceName(a));var e};b.prototype._renderSearchResultsContent=function(){this._searchResultRenderer.showMoreResultsOpen=!1;this._searchResultRenderer.viewModel=this.viewModel;return this._searchResultRenderer};f([g.property(),d.renderable()],b.prototype,"activeMenu",void 0);f([g.aliasOf("viewModel.activeSource"),d.renderable()],b.prototype,"activeSource",void 0);f([g.aliasOf("viewModel.activeSourceIndex"),
d.renderable()],b.prototype,"activeSourceIndex",void 0);f([g.aliasOf("viewModel.allPlaceholder"),d.renderable()],b.prototype,"allPlaceholder",void 0);f([g.aliasOf("viewModel.autoNavigate")],b.prototype,"autoNavigate",void 0);f([g.aliasOf("viewModel.autoSelect")],b.prototype,"autoSelect",void 0);f([g.aliasOf("viewModel.defaultSource")],b.prototype,"defaultSource",void 0);f([g.property()],b.prototype,"iconClass",void 0);f([g.property()],b.prototype,"label",void 0);f([g.property()],b.prototype,"locationEnabled",
void 0);f([g.aliasOf("viewModel.locationToAddressDistance")],b.prototype,"locationToAddressDistance",void 0);f([g.aliasOf("viewModel.maxResults")],b.prototype,"maxResults",void 0);f([g.aliasOf("viewModel.maxSuggestions")],b.prototype,"maxSuggestions",void 0);f([g.aliasOf("viewModel.minSuggestCharacters")],b.prototype,"minSuggestCharacters",void 0);f([g.aliasOf("viewModel.popupEnabled")],b.prototype,"popupEnabled",void 0);f([g.aliasOf("viewModel.popupOpenOnSelect")],b.prototype,"popupOpenOnSelect",
void 0);f([g.aliasOf("viewModel.popupTemplate")],b.prototype,"popupTemplate",void 0);f([g.aliasOf("viewModel.resultGraphic")],b.prototype,"resultGraphic",void 0);f([g.aliasOf("viewModel.resultGraphicEnabled")],b.prototype,"resultGraphicEnabled",void 0);f([g.aliasOf("viewModel.results"),d.renderable()],b.prototype,"results",void 0);f([g.aliasOf("viewModel.searchAllEnabled"),d.renderable()],b.prototype,"searchAllEnabled",void 0);f([g.aliasOf("viewModel.searchTerm"),d.renderable()],b.prototype,"searchTerm",
void 0);f([g.aliasOf("viewModel.selectedResult")],b.prototype,"selectedResult",void 0);f([g.aliasOf("viewModel.sources"),d.renderable()],b.prototype,"sources",void 0);f([g.property({readOnly:!0,dependsOn:["sources.length"]}),d.renderable()],b.prototype,"state",null);f([g.aliasOf("viewModel.suggestions"),d.renderable()],b.prototype,"suggestions",void 0);f([g.aliasOf("viewModel.suggestionsEnabled")],b.prototype,"suggestionsEnabled",void 0);f([g.aliasOf("viewModel.view"),d.renderable()],b.prototype,
"view",void 0);f([d.vmEvent("search-complete search-clear search-start select-result suggest-start suggest-complete".split(" ")),g.property({type:t}),d.renderable(["viewModel.activeSource.placeholder","viewModel.activeSource.name"])],b.prototype,"viewModel",void 0);f([g.aliasOf("viewModel.clear")],b.prototype,"clear",null);f([d.accessibleHandler()],b.prototype,"_handleSourcesMenuToggleClick",null);f([d.accessibleHandler()],b.prototype,"_handleClearButtonClick",null);f([d.accessibleHandler()],b.prototype,
"_handleSearchButtonClick",null);f([d.accessibleHandler()],b.prototype,"_handleSuggestionClick",null);f([d.accessibleHandler()],b.prototype,"_handleUseCurrentLocationClick",null);f([d.accessibleHandler()],b.prototype,"_handleSourceClick",null);return b=f([g.subclass("esri.widgets.Search")],b)}(g.declared(B))});