// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix/vec4 ./WGLBrush ../shaders/glShaderSnippets ../../../../webgl/BufferObject ../../../../webgl/Program ../../../../webgl/VertexArrayObject".split(" "),function(c,e,g,h,k,f,l,m,n){Object.defineProperty(e,"__esModule",{value:!0});c=function(c){function b(){var a=c.call(this)||this;a._color=h.create();a._initialized=!1;a._color.set([1,0,0,1]);return a}g(b,c);b.prototype.dispose=function(){this._solidProgram&&
(this._solidProgram.dispose(),this._solidProgram=null);this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)};b.prototype.draw=function(a,d){a=a.context;this._initialized||this._initialize(a);a.setStencilFunctionSeparate(1032,519,d.stencilRef,255);a.bindVAO(this._solidVertexArrayObject);a.bindProgram(this._solidProgram);this._solidProgram.setUniformMatrix4fv("u_transformMatrix",d.tileTransform.transform);this._solidProgram.setUniform2fv("u_normalized_origin",
d.tileTransform.displayCoord);this._solidProgram.setUniform1f("u_coord_range",512);this._solidProgram.setUniform1f("u_depth",0);this._solidProgram.setUniform4fv("u_color",this._color);a.drawArrays(5,0,4);a.bindVAO()};b.prototype._initialize=function(a){if(this._initialized)return!0;var d={a_pos:0},c=new m(a,f.backgroundVS,f.backgroundFS,d);if(!c)return!1;var b=new Int8Array([0,0,1,0,0,1,1,1]),b=l.createVertex(a,35044,b);a=new n(a,d,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,
divisor:0}]},{geometry:b});this._solidProgram=c;this._solidVertexArrayObject=a;return this._initialized=!0};return b}(k.default);e.default=c});