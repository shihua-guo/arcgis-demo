// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../Widget ../support/widget".split(" "),function(h,k,f,c,b,g,d){return function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.enabled=!0;a.iconClass="";a.title="";return a}f(a,e);a.prototype.render=function(){var a=this.enabled?0:-1,c=(b={},b["esri-disabled"]=!this.enabled,b["esri-interactive"]=this.enabled,b),b=(e={},e[this.iconClass]=!!this.iconClass,
e);return d.tsx("div",{bind:this,class:"esri-widget-button esri-widget",classes:c,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:a,title:this.title},d.tsx("span",{"aria-hidden":"true",role:"presentation",class:"esri-icon",classes:b}),d.tsx("span",{class:"esri-icon-font-fallback-text"},this.title));var b,e};a.prototype._triggerAction=function(){this.action.call(this)};c([b.property()],a.prototype,"action",void 0);c([b.property(),d.renderable()],a.prototype,"enabled",
void 0);c([b.property({readOnly:!1}),d.renderable()],a.prototype,"iconClass",void 0);c([b.property(),d.renderable()],a.prototype,"title",void 0);c([d.accessibleHandler()],a.prototype,"_triggerAction",null);return a=c([b.subclass("esri.widgets.IconButton")],a)}(b.declared(g))});