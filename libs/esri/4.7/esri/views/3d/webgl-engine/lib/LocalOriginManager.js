// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","./gl-matrix","./localOriginHelper"],function(d,e,f,g){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function c(a){this.factory=a;this.originData=new Map}c.prototype.aquire=function(a){return this.register(this.factory.getOrigin(a))};c.prototype.register=function(a){var b=this.originData.get(a.id);if(b)return b.refCount++,b.origin;this.originData.set(a.id,{refCount:1,viewMatrix:f.mat4d.identity(),origin:a});return a};c.prototype.release=function(a){var b=
this.originData.get(a.id);b&&(b.refCount--,0===b.refCount&&this.originData.delete(a.id))};c.prototype.updateViewMatrices=function(a){this.originData.forEach(function(b){f.mat4d.set(a,b.viewMatrix);g.applyToViewMatrix(b.origin.vec3,b.viewMatrix)})};c.prototype.getViewMatrix=function(a){return this.originData.get(a.id).viewMatrix};return c}();e.LocalOriginManager=d});