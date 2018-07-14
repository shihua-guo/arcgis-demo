// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix/mat4 ../../../core/libs/gl-matrix/vec3 ../../../core/libs/gl-matrix/vec4 ../GeometryUtils ./rendererUtils ./vtShaderSnippets ../../webgl/ShaderVariations ../../webgl/VertexArrayObject".split(" "),function(z,A,r,t,q,v,w,u,x,y){return function(){function n(){this._attributeLocations={a_pos:0,a_color:1,a_stroke_color:2,a_data:3};this._initialized=!1;this._viewProjMat=r.create();this._offsetVector=t.create();this._color=q.create();this._strokeColor=
q.create()}n.prototype.dispose=function(){};n.prototype.render=function(d,f,a,b,p,g,c,n,k){if(0!==f.triangleElementCount){this._initialized||this._initialize(d);var q=c.hasDataDrivenRadius?1:c.getPaintValue("circle-radius",a),e=c.hasDataDrivenColor?[1,1,1,1]:c.getPaintValue("circle-color",a),h=c.hasDataDrivenOpacity?1:c.getPaintValue("circle-opacity",a),t=c.hasDataDrivenStrokeWidth?1:c.getPaintValue("circle-stroke-width",a),l=c.hasDataDrivenStrokeColor?[1,1,1,1]:c.getPaintValue("circle-stroke-color",
a),m=c.hasDataDrivenStrokeOpacity?1:c.getPaintValue("circle-stroke-opacity",a),u=c.hasDataDrivenBlur?0:c.getPaintValue("circle-blur",a),h=h*e[3]*k;this._color[0]=h*e[0];this._color[1]=h*e[1];this._color[2]=h*e[2];this._color[3]=h;h=m*l[3]*k;this._strokeColor[0]=h*l[0];this._strokeColor[1]=h*l[1];this._strokeColor[2]=h*l[2];this._strokeColor[3]=h;k=g.tileTransform.transform;e=c.getPaintValue("circle-translate",a);if(0!==e[0]||0!==e[1])r.copy(this._viewProjMat,g.tileTransform.transform),k=e[0],e=e[1],
m=l=0,m=(1<<g.key.level)/Math.pow(2,a)*(g.coordRange/512),1===c.getPaintValue("circle-translate-anchor",a)?(p*=-v.C_DEG_TO_RAD,a=Math.sin(p),p=Math.cos(p),l=m*(k*p-e*a),m*=k*a+e*p):(l=m*k,m*=e),this._offsetVector[0]=l,this._offsetVector[1]=m,this._offsetVector[2]=0,r.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),k=this._viewProjMat;if(a=this._getCircleVAO(d,g))d.bindVAO(a),a=3===b,b=this._shaderVariations.getProgram([a],void 0,void 0,this._attributeLocations),d.bindProgram(b),
b.setUniformMatrix4fv("u_transformMatrix",k),b.setUniformMatrix4fv("u_extrudeMatrix",n),b.setUniform2fv("u_normalized_origin",g.tileTransform.displayCoord),b.setUniform1f("u_depth",c.z),b.setUniform1f("u_radius",q),b.setUniform4fv("u_color",this._color),b.setUniform1f("u_blur",u),b.setUniform1f("u_stroke_width",t),b.setUniform4fv("u_stroke_color",this._strokeColor),b.setUniform1f("u_antialiasingWidth",1.2),a&&(g=w.int32To4Bytes(f.layerID),b.setUniform4f("u_id",g[0],g[1],g[2],g[3])),d.drawElements(4,
f.triangleElementCount,5125,12*f.triangleElementStart),d.bindVAO()}};n.prototype._initialize=function(d){if(this._initialized)return!0;d=new x("circle",["circleVS","circleFS"],[],u,d);d.addDefine("ID","ID",[!0,!0],"ID");this._shaderVariations=d;this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,
divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return this._initialized=!0};n.prototype._getCircleVAO=function(d,f){if(f.circleVertexArrayObject)return f.circleVertexArrayObject;var a=f.circleVertexBuffer,b=f.circleIndexBuffer;if(!a||!b)return null;f.circleVertexArrayObject=new y(d,this._attributeLocations,this._vertexAttributes,{geometry:a},b);return f.circleVertexArrayObject};return n}()});