// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Evented ../../../core/Handles ../../../core/accessorSupport/decorators ../../../geometry/ScreenPoint ./DrawAction ./input/DrawEvents ./input/Keys".split(" "),function(t,u,m,h,n,p,q,e,l,r,d,g){return function(k){function c(){var a=null!==k&&k.apply(this,arguments)||this;a._cursorMoved=!1;a._cursorScreenPoint=null;a._dragEnabled=!0;a._pointerDownEvent=null;
a._viewHandles=new q;a.vertices=[];a.view=null;return a}m(c,k);c.prototype.initialize=function(){this._addViewHandles()};c.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};c.prototype.addVertex=function(a,b){var f=this;isNaN(b)?(b=this.vertices.length,this.vertices.push(a)):this.vertices.splice(b,0,a);this.history.push({vertex:a,vertexIndex:b,undo:function(){return f._undoVertexAdd(null,a,b)},redo:function(){return f._redoVertexAdd(null,a,b)}});
this._set("redoHistory",[]);var c=new d.VertexAddEvent(this.view,null,b,this.vertices);this.emit("vertex-add",c);c.defaultPrevented&&(this._cursorMoved=!0,this.history.pop())};c.prototype.removeVertex=function(a){var b=this,f=this.vertices.splice(a,1)[0];this.history.push({vertex:f,vertexIndex:a,undo:function(){return b._undoVertexRemove(null,f,a)},redo:function(){return b._redoVertexRemove(null,f,a)}});this._set("redoHistory",[]);this.emit("vertex-remove",new d.VertexRemoveEvent(this.view,null,a,
this.vertices))};c.prototype.updateVertex=function(a,b){var f=this,c=this.vertices[b];this.vertices[b]=a;this.history.push({vertex:a,vertexIndex:b,undo:function(){return f._undoVertexUpdate(null,c,b)},redo:function(){return f._redoVertexUpdate(null,a,b)}});this._set("redoHistory",[]);this.emit("vertex-update",new d.VertexUpdateEvent(this.view,null,b,this.vertices))};c.prototype.complete=function(){this._completeDrawing()};c.prototype._addViewHandles=function(){var a=this;this._removeViewHandles();
this._viewHandles.add([this.view.on("click",function(a){a.stopPropagation()}),this.view.on("pointer-down",function(b){a._cursorMoved&&a.vertices.pop();a._pointerDownEvent=b;a._cursorMoved=!1;a._cursorScreenPoint=new l({x:b.x,y:b.y})}),this.view.on("pointer-move",function(b){a._cursorMoved&&a.vertices.pop();a._cursorMoved=!0;a._cursorScreenPoint=new l({x:b.x,y:b.y});a._cursorUpdateHandler(b)}),this.view.on("pointer-up",function(b){a._pointerDownEvent&&(a._cursorMoved?(a.vertices.pop(),a._cursorMoved=
!1):(a._pointerDownEvent=null,a._vertexAddHandler(b)))}),this.view.on("drag",function(b){a._dragEnabled&&a._pointerDownEvent&&b.stopPropagation()}),this.view.on("double-click",function(b){b.stopPropagation();a._drawCompleteHandler(b)}),this.view.on("double-click",["Control"],function(b){b.stopPropagation();a._drawCompleteHandler(b)}),this.view.on("key-down",function(b){b.key===g.KEYS.vertexAddKey&&!b.repeat&&a._cursorScreenPoint?(a._cursorMoved&&(a.vertices.pop(),a._cursorMoved=!1),a._vertexAddHandler(b)):
b.key===g.KEYS.drawCompleteKey&&!b.repeat&&a._cursorScreenPoint?(a._cursorMoved&&(a.vertices.pop(),a._cursorMoved=!1),a._vertexAddHandler(b),a._drawCompleteHandler(b)):b.key!==g.KEYS.undoKey||b.repeat?b.key!==g.KEYS.redoKey||b.repeat||a.redo():a.undo()})])};c.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};c.prototype._addVertex=function(a,b){var c=this;this.vertices.push(a);var e=this.vertices.indexOf(a);this.history.push({vertex:a,vertexIndex:e,undo:function(){return c._undoVertexAdd(b,
a,e)},redo:function(){return c._redoVertexAdd(b,a,e)}});this._set("redoHistory",[]);var g=new d.VertexAddEvent(this.view,b,e,this.vertices);this.emit("vertex-add",g);g.defaultPrevented&&(this._cursorMoved=!0,this.history.pop())};c.prototype._updateCursor=function(a,b){this.vertices.push(a);a=this.vertices.indexOf(a);b=new d.CursorUpdateEvent(this.view,b,a,this.vertices);this.emit("cursor-update",b)};c.prototype._completeDrawing=function(a){this._cursorMoved=!1;this._pointerDownEvent=null;1>this.vertices.length||
(a=new d.DrawCompleteEvent(a,this.vertices),this.emit("draw-complete",a),a.defaultPrevented?this._cursorMoved=!0:this._removeViewHandles())};c.prototype._undoVertexAdd=function(a,b,c){this.vertices.splice(c,1);this.emit("undo",new d.VertexRemoveEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexAdd=function(a,b,c){this.vertices.splice(c,0,b);this.emit("redo",new d.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._undoVertexRemove=function(a,b,c){this.vertices.splice(c,0,b);this.emit("undo",
new d.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexRemove=function(a,b,c){this.vertices.splice(c,1);this.emit("redo",new d.VertexRemoveEvent(this.view,a,c,this.vertices))};c.prototype._undoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("undo",new d.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("redo",new d.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._vertexAddHandler=function(a){this._addVertex(this.getCoordsFromScreenPoint(this._cursorScreenPoint),
a.native)};c.prototype._cursorUpdateHandler=function(a){this._updateCursor(this.getCoordsFromScreenPoint(this._cursorScreenPoint),a.native)};c.prototype._drawCompleteHandler=function(a){this._completeDrawing(a.native)};h([e.property({readOnly:!0})],c.prototype,"vertices",void 0);h([e.property()],c.prototype,"view",void 0);return c=h([e.subclass("esri.views.2d.draw.MultipointDrawAction")],c)}(e.declared(r,n,p))});