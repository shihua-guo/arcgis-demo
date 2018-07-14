// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../ViewState","./Container"],function(n,p,k,l,m){return function(f){function c(){var a=null!==f&&f.apply(this,arguments)||this;a._childrenRenderParameters={context:null,pixelRatio:1,state:new l,stationary:!0};a.hidpi=!1;return a}k(c,f);c.prototype.createElement=function(){var a=document.createElement("canvas");a.setAttribute("class","esri-display-object");return a};c.prototype.setElement=function(a){this.element=a};c.prototype.doRender=
function(a){var b=this.element,d=b.style;if(this.visible){var e=a.state,h=a.pixelRatio,c=e.width,e=e.height;b.width=c*(this.hidpi?h:1);b.height=e*(this.hidpi?h:1);d.display="block";d.opacity=""+this.opacity;d.width=c+"px";d.height=e+"px";f.prototype.doRender.call(this,a)}else d.display="none"};c.prototype.prepareChildrenRenderParameters=function(a){var b=this._childrenRenderParameters;b.context=this.element.getContext("2d");b.pixelRatio=a.pixelRatio;b.state.copy(a.state);b.state.pixelRatio=this.hidpi?
a.pixelRatio:1;b.stationary=a.stationary;return b};c.prototype.beforeRenderChildren=function(a,b){a=b.context;var d=b.state;a.save();if(d.spatialReference.isWrappable){var e=d.width;b=d.height;var c=d.pixelRatio,g=this.hidpi?c:1,c=d.rotation*Math.PI/180,f=Math.round(e*g*Math.abs(Math.cos(c))+b*g*Math.abs(Math.sin(c))),d=d.worldScreenWidth*g;d<f&&(e=e*g*.5,b=b*g*.5,c&&(a.translate(e,b),a.rotate(c),a.translate(-e,-b)),a.beginPath(),a.rect(e-.5*d,b-.5*f,d,f),a.closePath(),c&&(a.translate(e,b),a.rotate(-c),
a.translate(-e,-b)),a.clip("evenodd"))}};c.prototype.afterRenderChildren=function(a,b){b.context.restore()};c.prototype.renderChild=function(a,b){b.context.save();a.processRender(b);b.context.restore()};return c}(m)});