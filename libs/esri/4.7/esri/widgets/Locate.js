// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Locate/nls/Locate ../core/accessorSupport/decorators ./Widget ./Locate/LocateViewModel ./support/widget".split(" "),function(n,p,l,b,g,c,m,h,d){return function(k){function a(a){a=k.call(this)||this;a.geolocationOptions=null;a.goToLocationEnabled=null;a.graphic=null;a.iconClass="esri-icon-north-navigation";a.scale=null;a.useHeadingEnabled=null;a.view=null;a.viewModel=new h;return a}l(a,k);a.prototype.locate=
function(){};a.prototype.render=function(){var a=this.get("viewModel.state"),b="locating"===a,c=(f={},f["esri-disabled"]="disabled"===a,f["esri-hidden"]="feature-unsupported"===a,f),b=(e={},e["esri-icon-loading-indicator"]=b,e["esri-rotating"]=b,e["esri-icon-locate"]=!b,e);return d.tsx("div",{bind:this,class:"esri-locate esri-widget-button esri-widget",classes:c,hidden:"feature-unsupported"===a,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":g.title,title:g.title},
d.tsx("span",{classes:b,"aria-hidden":"true",class:d.join("esri-icon","esri-icon-locate")}),d.tsx("span",{class:"esri-icon-font-fallback-text"},g.title));var f,e};a.prototype._locate=function(){this.locate()};b([c.aliasOf("viewModel.geolocationOptions")],a.prototype,"geolocationOptions",void 0);b([c.aliasOf("viewModel.goToLocationEnabled")],a.prototype,"goToLocationEnabled",void 0);b([c.aliasOf("viewModel.graphic")],a.prototype,"graphic",void 0);b([c.property()],a.prototype,"iconClass",void 0);b([c.aliasOf("viewModel.scale")],
a.prototype,"scale",void 0);b([c.aliasOf("viewModel.useHeadingEnabled")],a.prototype,"useHeadingEnabled",void 0);b([c.aliasOf("viewModel.view")],a.prototype,"view",void 0);b([c.property({type:h}),d.renderable("viewModel.state"),d.vmEvent(["locate","locate-error"])],a.prototype,"viewModel",void 0);b([c.aliasOf("viewModel.locate")],a.prototype,"locate",null);b([d.accessibleHandler()],a.prototype,"_locate",null);return a=b([c.subclass("esri.widgets.Locate")],a)}(c.declared(m))});