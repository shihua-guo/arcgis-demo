// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/promiseUtils ../../../core/scheduling ./Container ./DOMContainer ./StageGL".split(" "),function(n,p,f,g,h,k,l,m){function d(c){if(c instanceof m)return c;if(c instanceof k){var a=0;for(c=c.children;a<c.length;a++){var e=d(c[a]);if(e)return e}}return null}return function(c){function a(a){var b=c.call(this)||this;b.element=a;b._renderParameters={state:b.state,pixelRatio:window.devicePixelRatio,stationary:!1};b._renderRequested=
!1;b._taskHandle=h.addFrameTask({render:function(){return b.renderFrame()}});b._stationary=!0;b.attached=!0;b._taskHandle.pause();return b}f(a,c);a.prototype.destroy=function(){this.removeAllChildren();this.renderFrame();this._taskHandle.remove();this._taskHandle=null};Object.defineProperty(a.prototype,"state",{get:function(){return this._state},set:function(a){this._state=a;this.requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"stationary",{get:function(){return this._stationary},
set:function(a){this._stationary!==a&&(this._stationary=a,this.requestRender())},enumerable:!0,configurable:!0});a.prototype.start=function(){this._taskHandle.resume()};a.prototype.stop=function(){this._taskHandle.pause()};a.prototype.requestRender=function(){this._renderRequested=!0;this._taskHandle&&this._taskHandle.resume()};a.prototype.takeScreenshot=function(a){var b=d(this);return b?b.takeScreenshot(a):g.reject("Could not find an object capable of capturing screenshot!")};a.prototype.renderFrame=
function(){this._renderRequested&&(this._renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this.processRender(this._renderParameters));this._renderRequested||this._taskHandle.pause()};return a}(l)});