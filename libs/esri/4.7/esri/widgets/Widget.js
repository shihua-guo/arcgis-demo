// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/dom dojo/_base/lang ../core/Accessor ../core/ArrayPool ../core/Collection ../core/Evented ../core/Handles ../core/Logger ../core/watchUtils ../core/accessorSupport/decorators maquette".split(" "),function(w,x,k,d,l,m,n,g,f,p,q,r,e,c,t){var u=r.getLogger("esri.widgets.Widget"),v=0;return function(h){function a(b,a){b=h.call(this)||this;b._attached=!1;b.destroyed=!1;b.domNode=null;b.iconClass="esri-icon-checkbox-unchecked";
b.visible=!0;b._internalHandles=new q;b.render=b.render.bind(b);return b}k(a,h);a.prototype.normalizeCtorArgs=function(b,a){b=m.mixin({},b);a&&(b.container=a);return b};a.prototype.initialize=function(){var b=this;this._internalHandles.add(this._renderableProps.map(function(a){return e.init(b,a,function(b,c){var d=this;f.isCollection(c)&&this._internalHandles.remove(this.declaredClass+":"+a+"-collection-change-event-listener");f.isCollection(b)&&(b=b.on("change",function(){return d.scheduleRender()}),
this._internalHandles.add(b,this.declaredClass+":"+a+"-collection-change-event-listener"));this.scheduleRender()})}));this._delegatedEventNames.length&&this._internalHandles.add(e.init(this,"viewModel",function(){b._get("viewModel")&&b._internalHandles.remove("delegated-events");b._delegatedEventNames.map(function(a){return b.viewModel.on(a,function(c){b.emit(a,c)})})}),"delegated-events");this.postInitialize();this._internalHandles.add(e.whenOnce(this,"container",function(a){return b._attach(a)}))};
a.prototype.postInitialize=function(){};a.prototype.destroy=function(){this.destroyed||(this.viewModel&&this.viewModel.destroy(),this._detach(this.container),this._internalHandles.destroy(),this._set("destroyed",!0))};a.prototype.startup=function(){u.warn("Widget.startup() is deprecated and no longer needed")};Object.defineProperty(a.prototype,"container",{set:function(b){this._get("container")||this._set("container",b)},enumerable:!0,configurable:!0});a.prototype.castContainer=function(b){return l.byId(b)};
Object.defineProperty(a.prototype,"id",{get:function(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+v++},set:function(b){b&&this._set("id",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"label",{get:function(){return this.declaredClass.split(".").pop()},enumerable:!0,configurable:!0});a.prototype.scheduleRender=function(){this._projector.scheduleRender()};a.prototype.on=function(b,a){var c=this.inherited(arguments);this._internalHandles.add(c);
return c};a.prototype.classes=function(b){for(var a=g.acquire(),c=0;c<arguments.length;c++){var d=arguments[c],e=typeof d;if("string"===e)a.push(d);else if(Array.isArray(d))a.push.apply(a,d);else if("object"===e)for(var f in d)d[f]&&a.push(f)}c=a.join(" ");g.release(a);return c};a.prototype.own=function(a){1<arguments.length&&(a=Array.prototype.slice.call(arguments));this._internalHandles.add(a)};a.prototype.renderNow=function(){this._projector.renderNow()};a.prototype._attach=function(a){a&&(this._projector.merge(a,
this.render),this._attached=!0)};a.prototype._detach=function(a){a&&this._attached&&(this._projector.detach(this.render),a.parentNode&&a.parentNode.removeChild(a),this._attached=!1)};d([c.shared(t.createProjector())],a.prototype,"_projector",void 0);d([c.shared([])],a.prototype,"_renderableProps",void 0);d([c.shared([])],a.prototype,"_delegatedEventNames",void 0);d([c.property({value:null})],a.prototype,"container",null);d([c.cast("container")],a.prototype,"castContainer",null);d([c.property({readOnly:!0})],
a.prototype,"destroyed",void 0);d([c.property({aliasOf:"container"})],a.prototype,"domNode",void 0);d([c.property({readOnly:!0})],a.prototype,"iconClass",void 0);d([c.property({dependsOn:["container"]})],a.prototype,"id",null);d([c.property({readOnly:!0})],a.prototype,"label",null);d([c.property()],a.prototype,"viewModel",void 0);d([c.property()],a.prototype,"visible",void 0);return a=d([c.subclass("esri.widgets.Widget")],a)}(c.declared(n,p))});