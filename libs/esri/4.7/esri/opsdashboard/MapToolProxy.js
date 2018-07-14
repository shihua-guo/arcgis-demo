// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper dojo/Deferred ../core/typescript ../geometry/support/jsonUtils ./core/errorMessages ./core/ExtensionBase ./core/messageHandler".split(" "),function(n,p,h,f,k,g,l,c,m,d){return function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.mapWidgetProxy=null;a.previousState=null;a.displaySize=null;a.availableDisplaySize=null;return a}h(b,e);b.prototype.dojoConstructor=function(){this.displaySize={width:0,
height:0}};b.prototype._initializeResponseReceived=function(a){var b=this;return this.inherited(arguments).then(function(){b.previousState=a.state||{};b.availableDisplaySize=a.availableSize||{width:0,height:0};return b.getMapWidgetProxy(a.mapWidgetId).then(function(a){b.mapWidgetProxy=a})})};b.prototype._messageReceived=function(a){switch(a.functionName.toLowerCase()){case "drawcomplete":return this._drawComplete(a.args);case "availablesizechanged":return this._availableDisplaySizeChanged(a.args)}};
b.prototype.activateMapDrawing=function(a){if(!this._isHostInitialized())throw Error(c.hostNotReady);d._sendMessage({functionName:"activateDrawing",args:a})};b.prototype.deactivateMapDrawing=function(){if(!this._isHostInitialized())throw Error(c.hostNotReady);d._sendMessage({functionName:"deactivateDrawing"})};b.prototype._drawComplete=function(a){a=l.fromJSON(a.geometry);this.mapDrawComplete(a);this.emit("draw-complete",{geometry:a})};b.prototype.mapDrawComplete=function(a){};b.prototype.setDisplaySize=
function(a){var b=this;if(!this._isHostInitialized())return(new k).reject(Error(c.hostNotReady));this.displaySize=a;return d._sendMessageWithReply({functionName:"setSize",args:a}).then(function(a){b.displaySize=a})};b.prototype._availableDisplaySizeChanged=function(a){this.availableDisplaySize=a.availableSize;this.availableDisplaySizeChanged(this.availableDisplaySize);this.emit("available-display-size-changed",{size:this.availableDisplaySize})};b.prototype.availableDisplaySizeChanged=function(a){};
b.prototype.deactivateMapTool=function(a){if(!this._isHostInitialized())throw Error(c.hostNotReady);d._sendMessage({functionName:"deactivateTool",args:{state:a}})};f([g.shared("esri.opsdashboard.MapToolProxy")],b.prototype,"declaredClass",void 0);return b=f([g.subclass()],b)}(m)});