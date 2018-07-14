// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Error ../../core/Logger ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../portal/Portal ../../portal/PortalItem".split(" "),function(h,u,k,e,l,m,n,g,p,d,q,r){var t=n.getLogger("esri.layers.mixins.PortalLayer");return function(f){function a(){return null!==f&&f.apply(this,arguments)||this}k(a,f);Object.defineProperty(a.prototype,
"portalItem",{set:function(c){c!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",c))},enumerable:!0,configurable:!0});a.prototype.writePortalItem=function(c,b,a){c&&c.id&&(b.itemId=c.id)};a.prototype.loadFromPortal=function(c){var b=this;return this.portalItem&&this.portalItem.id?g.create(function(b){return h(["../../portal/support/layersLoader"],b)}).then(function(a){return a.load({instance:b,supportedTypes:c.supportedTypes,validateItem:c.validateItem,supportsData:c.supportsData}).catch(function(a){t.warn("Failed to load layer ("+
b.title+", "+b.id+") portal item ("+b.portalItem.id+")\n  "+a);throw a;})}):g.resolve()};a.prototype.read=function(a,b){b&&(b.layer=this);return this.inherited(arguments)};a.prototype.write=function(a,b){var c=b&&b.portal,d=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||q.getDefault());return c&&d&&!p.hasSamePortal(d.restUrl,c.restUrl)?(b.messages&&b.messages.push(new m("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",
{layer:this})),null):this.inherited(arguments)};e([d.property({type:r})],a.prototype,"portalItem",null);e([d.writer("portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null);return a=e([d.subclass("esri.layers.mixins.PortalLayer")],a)}(d.declared(l))});