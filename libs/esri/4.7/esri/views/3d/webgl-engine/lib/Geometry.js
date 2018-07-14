// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ./BoundingInfo ./ComponentUtils ./geometryDataUtils ./IdGen ./Util ./Util".split(" "),function(y,z,q,r,t,w,x,g){return function(){function a(c,d,b){this.singleUse=!1;this.componentAABB=null;this.id=a.__idGen.gen(d);this.data=c;this.boundingInfo=b}a.prototype.getData=function(){return this.data};a.prototype.getComponentCount=function(){return r.componentCount(this.data.componentOffsets)};a.prototype.getComponentAABB=function(c,d){null==this.componentAABB&&(this.componentAABB=
this._computeComponentAABB());for(var b=0;6>b;b++)d[b]=this.componentAABB[6*c+b];return d};a.prototype._computeComponentAABB=function(){for(var c=this.getComponentCount(),d=new Float32Array(6*c),b=0;b<c;b++)this._calculateAABB(b,d,6*b);return d};a.prototype._calculateAABB=function(c,d,b){void 0===b&&(b=0);var u=this.data.getIndices(g.VertexAttrConstants.POSITION),a=this.data.getAttribute(g.VertexAttrConstants.POSITION),e=this.data.componentOffsets,q=e.length?e[c+1]:u.length,h=Infinity,k=Infinity,
l=Infinity,m=-Infinity,n=-Infinity,p=-Infinity,r=a.offsetIdx,t=a.strideIdx;for(c=e.length?e[c]:0;c<q;c++)var f=r+t*u[c],e=a.data[f],v=a.data[f+1],f=a.data[f+2],h=Math.min(h,e),k=Math.min(k,v),l=Math.min(l,f),m=Math.max(m,e),n=Math.max(n,v),p=Math.max(p,f);d?(d[b]=h,d[b+1]=k,d[b+2]=l,d[b+3]=m,d[b+4]=n,d[b+5]=p):d=[h,k,l,m,n,p];return d};a.prototype.calculateBoundingInfo=function(){var c=this.data.getIndices(g.VertexAttrConstants.POSITION),d=this.data.getAttribute(g.VertexAttrConstants.POSITION),b=
"triangle"===this.data.primitiveType?3:1;if(0===c.length)for(var c=new Uint32Array(b),a=0;a<b;++a)c[a]=a;a=c.length;x.assert(0===a%b);a=t.generateDefaultIndexArray(a/b);return new q(a,b,c,d)};a.prototype.getBoundingInfo=function(){null==this.boundingInfo&&(this.boundingInfo=this.calculateBoundingInfo());return this.boundingInfo};a.prototype.invalidateBoundingInfo=function(){this.boundingInfo=null};a.__idGen=new w;return a}()});