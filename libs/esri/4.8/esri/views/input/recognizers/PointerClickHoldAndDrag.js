// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(k,g,l,m,n){Object.defineProperty(g,"__esModule",{value:!0});g.DefaultParameters={maximumClickDelay:300,movementUntilMouseDrag:1.5,movementUntilTouchDrag:6,holdDelay:500};k=function(h){function f(c,d,b,e){void 0===c&&(c=g.DefaultParameters.maximumClickDelay);void 0===d&&(d=g.DefaultParameters.movementUntilMouseDrag);void 0===b&&(b=g.DefaultParameters.movementUntilTouchDrag);void 0===e&&(e=g.DefaultParameters.holdDelay);
var a=h.call(this,!1)||this;a.maximumClickDelay=c;a.movementUntilMouseDrag=d;a.movementUntilTouchDrag=b;a.holdDelay=e;a._pointerState=new Map;a._pointerDrag=a.registerOutgoing("pointer-drag");a._immediateClick=a.registerOutgoing("immediate-click");a._pointerHold=a.registerOutgoing("hold");a.registerIncoming("pointer-down",a._handlePointerDown.bind(a));a.registerIncoming("pointer-up",function(b){a._handlePointerLoss(b,"pointer-up")});a.registerIncoming("pointer-capture-lost",function(b){a._handlePointerLoss(b,
"pointer-capture-lost")});a.registerIncoming("pointer-cancel",function(b){a._handlePointerLoss(b,"pointer-cancel")});a._moveHandle=a.registerIncoming("pointer-move",a._handlePointerMove.bind(a));a._moveHandle.pause();return a}l(f,h);f.prototype.onUninstall=function(){this._pointerState.forEach(function(c){0!==c.holdTimeout&&(clearTimeout(c.holdTimeout),c.holdTimeout=0)});h.prototype.onUninstall.call(this)};f.prototype._handlePointerDown=function(c){var d=this,b=c.data,e=b.native.pointerId,a=0;0===
this._pointerState.size&&(a=setTimeout(function(){var a=d._pointerState.get(e);a&&(a.isDragging||(d._pointerHold.emit(a.previousEvent,void 0,c.modifiers),a.holdEmitted=!0),a.holdTimeout=0)},this.holdDelay));a={startEvent:b,previousEvent:b,startTimestamp:c.timestamp,isDragging:!1,downButton:b.native.button,holdTimeout:a,modifiers:new Set};this._pointerState.set(e,a);this.startCapturingPointer(b.native);this._moveHandle.resume();1<this._pointerState.size&&this.startDragging(c)};f.prototype._createPointerDragData=
function(c,d,b){return{action:c,startEvent:d.startEvent,previousEvent:d.previousEvent,currentEvent:b}};f.prototype._handlePointerMove=function(c){var d=c.data,b=this._pointerState.get(d.native.pointerId);b&&(b.isDragging?this._pointerDrag.emit(this._createPointerDragData("update",b,d),void 0,b.modifiers):n.euclideanDistance(d,b.startEvent)>("touch"===d.native.pointerType?this.movementUntilTouchDrag:this.movementUntilMouseDrag)&&this.startDragging(c),b.previousEvent=d)};f.prototype.startDragging=function(c){var d=
this,b=c.data,e=b.native.pointerId;this._pointerState.forEach(function(a){0!==a.holdTimeout&&(clearTimeout(a.holdTimeout),a.holdTimeout=0);a.isDragging||(a.modifiers=c.modifiers,a.isDragging=!0,e===a.startEvent.native.pointerId?d._pointerDrag.emit(d._createPointerDragData("start",a,b)):d._pointerDrag.emit(d._createPointerDragData("start",a,a.previousEvent),c.timestamp))})};f.prototype._handlePointerLoss=function(c,d){var b=c.data,e=b.native.pointerId,a=this._pointerState.get(e);a&&(0!==a.holdTimeout&&
clearTimeout(a.holdTimeout),a.isDragging?this._pointerDrag.emit(this._createPointerDragData("end",a,"pointer-up"===d?b:a.previousEvent),void 0,a.modifiers):"pointer-up"===d&&a.downButton===b.native.button&&c.timestamp-a.startTimestamp<=this.maximumClickDelay&&!a.holdEmitted&&this._immediateClick.emit(b),this._pointerState.delete(e),this.stopCapturingPointer(b.native),0===this._pointerState.size&&this._moveHandle.pause())};return f}(m.InputHandler);g.PointerClickHoldAndDrag=k});