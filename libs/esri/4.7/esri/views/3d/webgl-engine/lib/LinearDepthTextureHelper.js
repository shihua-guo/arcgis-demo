// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util","../../../webgl/FramebufferObject"],function(e,f,c,d){return function(){function b(a){this._rctx=a;this._depthFBO=void 0;this.height=this.width=this.viewportToRestore=null}b.prototype.setEnableState=function(a){a!==this.getEnableState()&&(a?this.enable():this.disable())};b.prototype.getEnableState=function(){return void 0!==this._depthFBO};b.prototype.getDepthFBO=function(){return this._depthFBO};b.prototype.enable=function(){c.assert(!this.getEnableState());this._depthFBO=
d.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:3})};b.prototype.disable=function(){c.assert(this.getEnableState());this._depthFBO.dispose();this._depthFBO=void 0};b.prototype.setupFBOs=function(a){c.assert(this.getEnableState());this.viewportToRestore=a=a.fullViewport;this.width=a[2];this.height=a[3];this._rctx.setViewport(0,0,this.width,this.height)};b.prototype.prepareDepthPass=function(){c.assert(this.getEnableState());
var a=this._rctx,b=a.gl;this._depthFBO.resize(this.width,this.height);a.bindFramebuffer(this._depthFBO);a.setClearStencil(0);a.setClearColor(0,0,0,0);a.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT|b.STENCIL_BUFFER_BIT);a.setBlendingEnabled(!1)};b.prototype.finish=function(a){var b=this._rctx;b.bindFramebuffer(a);b.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3])};return b}()});