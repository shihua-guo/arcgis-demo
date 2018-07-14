// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ./ensureType ./extensions ./metadata ./utils ./decorators/cast".split(" "),function(y,n,r,m,p,h,q,t){Object.defineProperty(n,"__esModule",{value:!0});var u=Object.prototype.hasOwnProperty,v=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Writer|Caster)$/,w={Getter:"get",Setter:"set",Reader:"json.read.reader",Writer:"json.write.writer",Caster:"cast"},x=/^_(set|get)([a-zA-Z0-9]+)Attr$/;n.processPrototype=function(c){for(var k=c.declaredClass,f=c.properties||{},d=0,g=Object.getOwnPropertyNames(f);d<
g.length;d++){var a=g[d],b=f[a],e=typeof b;null==b?h.setPropertyMetadata(c,a,{value:b}):Array.isArray(b)?h.setPropertyMetadata(c,a,{type:[b[0]],value:null}):"object"===e?q.getProperties(b)||b instanceof Date?h.setPropertyMetadata(c,a,{type:b.constructor,value:b}):h.setPropertyMetadata(c,a,b):"boolean"===e?h.setPropertyMetadata(c,a,{type:Boolean,value:b}):"string"===e?h.setPropertyMetadata(c,a,{type:String,value:b}):"number"===e?h.setPropertyMetadata(c,a,{type:Number,value:b}):"function"===e&&h.setPropertyMetadata(c,
a,{type:b,value:null})}d=0;for(g=Object.getOwnPropertyNames(c);d<g.length;d++){var e=g[d],b=c[e],f=a=void 0,l=v.exec(e);if(l)a=l[1],f=w[l[2]];else if(l=x.exec(e))a=l[2][0].toLowerCase()+l[2].substr(1),f=l[1].toLowerCase();a&&f&&(a=h.getPropertyMetadata(c,a),r.setObject(f,b,a))}d=0;for(g=Object.getOwnPropertyNames(h.getPropertiesMetadata(c));d<g.length;d++)if(a=g[d],b=h.getPropertyMetadata(c,a),f=b.type,e=b.types,void 0===b.value&&u.call(c,a)&&(b.value=c[a]),!b.cast&&f){a=b;b=0;for(e=f;Array.isArray(e);)e=
e[0],b++;f=1===b?m.ensureArray(e):1<b?m.ensureNArray(e,b):m.ensureType(f);a.cast=f}else!b.cast&&e&&(Array.isArray(e)?b.cast=m.ensureArrayTyped(m.ensureOneOfType(e[0])):b.cast=m.ensureOneOfType(e));p.processPrototypeMetadatas(h.getPropertiesMetadata(c),k);return h.getPropertiesMetadata(c)};n.processClass=function(c){for(var k=c.prototype,f=k.declaredClass,d=c._meta.bases,g={},a=d.length-1;0<=a;a--)q.merge(g,h.getMetadata(d[a].prototype));var b=g.properties;p.processClassMetadatas(b,f);Object.defineProperty(c,
"__accessorMetadata__",{value:{properties:b,autoDestroy:!!g.autoDestroy}});for(var e={},f=function(a){var c=b[a];e[a]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(a):c.value},set:function(b){var d=this.__accessor__;if(!d)Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b});else if(!Object.isFrozen(this)){if(d.initialized&&c.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+a+"' of "+this.declaredClass);
if(2===d.lifecycle&&c.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+a+"' of "+this.declaredClass);d.set(a,b)}}}},d=0,a=Object.getOwnPropertyNames(b);d<a.length;d++)f(a[d]);Object.defineProperties(c.prototype,e);if(g.parameters)for(c=0,f=Object.getOwnPropertyNames(g.parameters);c<f.length;c++)d=f[c],a=Object.getOwnPropertyDescriptor(k,d)||{value:k[d]},(a=t.autocastMethod(k,d,a))&&Object.defineProperty(k,d,a);return g}});