// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Handles ../../../core/watchUtils ../../../core/accessorSupport/decorators ./handlers/DoubleClickZoom ./handlers/DragRotate ./handlers/DragZoom ./handlers/KeyPan ./handlers/MouseWheelZoom ./handlers/PinchAndPanNavigation ./handlers/PointerDownCancelAnimation ./handlers/SingleKeyResetHeading ./handlers/SingleKeyResetTilt ./handlers/TwoFingerTilt ../../input/BrowserEventSource ../../input/InputManager ../../input/ViewEvents ../../input/handlers/PreventContextMenu".split(" "),
function(k,f,n,e,c,p,l,d,q,g,r,t,u,m,v,w,x,y,z,A,B,C){k=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a._handles=new p;return a}n(b,c);b.prototype.initialize=function(){var a=this;this.viewEvents=new B.ViewEvents(this.view);this._handles.add([l.whenNot(this.view,"ready",function(){return a._disconnect()}),l.when(this.view,"ready",function(){return a._connect()})])};b.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null);this._disconnect()};
Object.defineProperty(b.prototype,"primaryDragAction",{get:function(){return this._get("primaryDragAction")},set:function(a){"pan"!==a&&"rotate"!==a||a===this._get("primaryDragAction")||(this._set("primaryDragAction",a),this._updateMode())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"mode",{get:function(){return this._get("mode")},set:function(a){"default"!==a&&"pro"!==a||a===this._get("mode")||(this._set("mode",a),this._updateMode())},enumerable:!0,configurable:!0});b.prototype._disconnect=
function(){this.viewEvents.disconnect();this._source&&(this._source.destroy(),this._source=null);this._inputManager&&(this._inputManager.destroy(),this._inputManager=null)};b.prototype._connect=function(){var a=this.view;this._source=new z.BrowserEventSource(this.view.surface);var b=new A.InputManager(this._source);this._inputManager=b;b.installHandlers("prevent-context-menu",[new C.PreventContextMenu]);this._modeDragPan=new m.PinchAndPanNavigation(a,"primary");this._modeDragRotate=new g.DragRotate(a,
"secondary","center");this._modeDragZoom=new r.DragZoom(a,"tertiary");b.installHandlers("navigation",[new v.PointerDownCancelAnimation(a),new q.DoubleClickZoom(a),new t.KeyPan(a,{left:"ArrowLeft",right:"ArrowRight",forward:"ArrowUp",backward:"ArrowDown",up:"u",down:"j"}),new u.MouseWheelZoom(a),new x.SingleKeyResetTilt(a,"p"),new w.SingleKeyResetHeading(a,"n"),new g.DragRotate(a,"primary","eye",["b"]),new g.DragRotate(a,"secondary","center",["b"]),new m.PinchAndPanNavigation(a,"tertiary",["b"]),this._modeDragRotate,
this._modeDragZoom,this._modeDragPan,new y.TwoFingerTilt(a)]);this.viewEvents.connect(b);this._updateMode()};b.prototype._updateMode=function(){var a=this.primaryDragAction,a=h.get(this.mode).get(a);this._modeDragPan&&(this._modeDragPan.pointerAction=a.pan);this._modeDragRotate&&(this._modeDragRotate.pointerAction=a.rotate);this._modeDragZoom&&(this._modeDragZoom.pointerAction=a.zoom)};e([d.property()],b.prototype,"view",void 0);e([d.property({value:"pan"})],b.prototype,"primaryDragAction",null);
e([d.property({value:"default"})],b.prototype,"mode",null);e([d.property({readOnly:!0,aliasOf:"_inputManager.latestPointerType"})],b.prototype,"latestPointerType",void 0);e([d.property()],b.prototype,"_inputManager",void 0);return b=e([d.subclass("esri.views.3d.input.SceneInputManager")],b)}(d.declared(c));var h=new Map;f=new Map;c=new Map;f.set("pan",{pan:"primary",rotate:"secondary",zoom:"tertiary"});f.set("rotate",{pan:"secondary",rotate:"primary",zoom:"tertiary"});c.set("pan",{pan:"primary",rotate:"tertiary",
zoom:"secondary"});c.set("rotate",{pan:"tertiary",rotate:"primary",zoom:"secondary"});h.set("default",f);h.set("pro",c);return k});