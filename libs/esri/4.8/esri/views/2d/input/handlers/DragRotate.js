// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../input/DragEventSeparator ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(d,a,e,h,f,k){Object.defineProperty(a,"__esModule",{value:!0});d=function(d){function a(a,e,f){var b=d.call(this,!0)||this;b.view=a;b.pointerAction=e;var g=b.view.navigation;b.dragEventSeparator=new h.DragEventSeparator({start:function(a,c){g.rotate.begin(b.view,c.data);c.stopPropagation()},update:function(a,c){g.rotate.update(b.view,
c.data);c.stopPropagation()},end:function(a,c){g.rotate.end(b.view,c.data);c.stopPropagation()},condition:function(a,c){return 1===a&&k.eventMatchesPointerAction(c.data,b.pointerAction)}});b.registerIncoming("drag",f,function(a){return b.dragEventSeparator.handle(a)});return b}e(a,d);return a}(f.InputHandler);a.DragRotate=d});