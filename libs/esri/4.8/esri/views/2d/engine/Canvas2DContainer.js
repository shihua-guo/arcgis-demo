// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/promiseUtils ../ViewState ./Container ../../support/screenshotUtils".split(" "),function(B,C,w,r,t,x,y){var z={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"};return function(g){function d(){var a=null!==g&&g.apply(this,arguments)||this;a._childrenRenderParameters={context:null,pixelRatio:1,state:new t,stationary:!0};a.hidpi=!1;return a}w(d,g);d.prototype.createElement=function(){var a=document.createElement("canvas");
a.setAttribute("class","esri-display-object");return a};d.prototype.setElement=function(a){this.element=a};d.prototype.takeScreenshot=function(a){void 0===a&&(a={});var b=a.pixelRatio||1,c={context:null,pixelRatio:b,state:new t,stationary:!0};c.opacity=this._childrenRenderParameters.opacity;c.state.copy(this._childrenRenderParameters.state);var f=Math.round(b*c.state.width),l=Math.round(b*c.state.height),n=0,d=0,h=f,k=l,e=f,m=l;if(e=a.area)n=Math.round(b*e.x),d=Math.round(b*e.y),h=Math.round(b*e.width),
k=Math.round(b*e.height);void 0!==a.width&&void 0!==a.height?(e=a.width/a.height,k*e<h?(e*=k,n+=Math.floor((h-e)/2),h=Math.floor(e)):(e=h/e,d+=Math.floor((k-e)/2),k=Math.floor(e)),e=a.width,m=a.height):(e=h,m=k);var g=document.createElement("canvas"),b=new Uint8Array(h*k*4);g.width=e;g.height=m;c.context=g.getContext("2d");this.beforeRenderChildren(c,c);if(void 0!==a.rotation&&null!==a.rotation){var u=c.state,v=u.clone();v.viewpoint.rotation=a.rotation;c.state=v;this.renderChildren(c);c.state=u}else this.renderChildren(c);
this.afterRenderChildren(c,c);var q;try{q=c.context.getImageData(0,0,e,m)}catch(A){return r.reject(A)}0===n&&0===d&&h===f&&k===l&&e===f&&m===l||y.resampleHermite(b,h,k,q.data,e,m,!0);c.context.putImageData(q,0,0);c=z[a.format?a.format.toLowerCase():"png"];c={dataURL:g.toDataURL(c,null!=a.quality?a.quality/100:1),x:0,y:0,width:e,height:m};a.returnByteBuffer&&(c.data=b);return r.resolve(c)};d.prototype.doRender=function(a){var b=this.element,c=b.style;if(this.visible){var f=a.state,l=a.pixelRatio,d=
f.width,f=f.height;b.width=d*(this.hidpi?l:1);b.height=f*(this.hidpi?l:1);c.display="block";c.opacity=""+Math.min(this.opacity,this.parent.opacity);c.width=d+"px";c.height=f+"px";g.prototype.doRender.call(this,a)}else c.display="none"};d.prototype.prepareChildrenRenderParameters=function(a){var b=this._childrenRenderParameters;b.context=this.element.getContext("2d");b.pixelRatio=a.pixelRatio;b.state.copy(a.state);b.state.pixelRatio=this.hidpi?a.pixelRatio:1;b.stationary=a.stationary;return b};d.prototype.beforeRenderChildren=
function(a,b){a=b.context;var c=b.state;a.save();if(c.spatialReference.isWrappable){var f=c.width;b=c.height;var d=c.pixelRatio,g=this.hidpi?d:1,d=c.rotation*Math.PI/180,p=Math.round(f*g*Math.abs(Math.cos(d))+b*g*Math.abs(Math.sin(d))),c=c.worldScreenWidth*g;c<p&&(f=f*g*.5,b=b*g*.5,d&&(a.translate(f,b),a.rotate(d),a.translate(-f,-b)),a.beginPath(),a.rect(f-.5*c,b-.5*p,c,p),a.closePath(),d&&(a.translate(f,b),a.rotate(-d),a.translate(-f,-b)),a.clip("evenodd"))}};d.prototype.afterRenderChildren=function(a,
b){b.context.restore()};d.prototype.renderChild=function(a,b){b.context.save();a.processRender(b);b.context.restore()};return d}(x)});