// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Error ../../core/geolocationUtils ../../core/promiseUtils ../../core/accessorSupport/decorators ../support/GeolocationPositioning".split(" "),function(m,n,h,d,e,k,f,c,l){return function(g){function a(b){b=g.call(this,b)||this;b.locate=b.locate.bind(b);return b}h(a,g);a.prototype.destroy=function(){this._locating&&(this._locating.cancel(),this._locating=null)};Object.defineProperty(a.prototype,
"state",{get:function(){return this._geolocationUsable?this.get("view.ready")?this._locating?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0});a.prototype.locate=function(){var b=this;if("disabled"===this.state)return f.reject(new e("locate:disabled-state","Cannot locate when disabled."));if("feature-unsupported"===this.state)return f.reject(new e("locate:feature-unsupported-state","Cannot locate in unsecure domain."));this._locating&&(this._locating.cancel(),this._locating=
null);var a=k.getCurrentPosition(this.geolocationOptions).then(function(a){return b._setPosition(a)}).then(function(a){b.view.graphics.remove(b.graphic);b.graphic&&(b.graphic=b.graphic.clone(),b.view.graphics.push(b.graphic));b.emit("locate",{position:a});return a}).catch(function(a){b.emit("locate-error",{error:a});throw a;});a.always(function(a){b._locating=null;b.notifyChange("state")});this._locating=a;this.notifyChange("state");return a};d([c.property({dependsOn:["view.ready"],readOnly:!0})],
a.prototype,"state",null);d([c.property()],a.prototype,"locate",null);return a=d([c.subclass("esri.widgets.Locate.LocateViewModel")],a)}(c.declared(l))});