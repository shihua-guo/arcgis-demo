// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(){this._byGeometryType=null}Object.defineProperty(b.prototype,"satisfied",{get:function(){return!this._byGeometryType},enumerable:!0,configurable:!0});b.prototype.reset=function(){this._byGeometryType=null};b.prototype.verticesFor=function(a){return this._byGeometryType?this._byGeometryType[a].vertices:0};b.prototype.indicesFor=function(a){return this._byGeometryType?this._byGeometryType[a].indices:
0};b.prototype.needMore=function(a,b,c){if(b||c)this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}]),a=this._byGeometryType[a],a.vertices+=b,a.indices+=c};return b}();d.default=c});