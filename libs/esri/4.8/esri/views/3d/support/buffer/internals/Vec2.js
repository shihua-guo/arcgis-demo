// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../lib/glMatrix"],function(d,f,g){Object.defineProperty(f,"__esModule",{value:!0});d=function(){function a(c,b,a,e){void 0===a&&(a=0);c=this.TypedArrayConstructor=c;void 0===e&&(e=2*c.BYTES_PER_ELEMENT);this.data=new c(b,0===b.byteLength?0:a);this.elementStride=e/c.BYTES_PER_ELEMENT}a.prototype.getVec=function(c,a){return g.vec2d.set2(this.data[c*this.elementStride],this.data[c*this.elementStride+1],a)};a.prototype.setVec=function(a,b){this.data[a*this.elementStride]=
b[0];this.data[a*this.elementStride+1]=b[1]};a.prototype.get=function(a,b){return this.data[a*this.elementStride+b]};a.prototype.set=function(a,b,d){this.data[a*this.elementStride+b]=d};Object.defineProperty(a.prototype,"count",{get:function(){return Math.ceil(this.data.length/this.elementStride)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"buffer",{get:function(){return this.data.buffer},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"typedBuffer",{get:function(){return this.data},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"stride",{get:function(){return this.elementStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT},enumerable:!0,configurable:!0});a.ElementCount=2;return a}();f.BufferViewVec2=d});