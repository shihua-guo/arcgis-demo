// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/_base/lang ../../request ../../Viewpoint ../../core/Accessor ../../core/Collection ../../core/Error ../../core/Handles ../../core/Loadable ../../core/promiseUtils ../../core/accessorSupport/decorators ../../geometry/Extent ../../tasks/PrintTask ../../tasks/support/PrintParameters ../../views/2d/viewpointUtils ./FileLink".split(" "),function(B,C,p,d,q,r,t,u,v,g,w,x,h,c,y,l,z,A,k){var m=v.ofType(k);
return function(n){function a(b){b=n.call(this,b)||this;b._handles=new w;b._viewpoint=null;b.view=null;b.printServiceUrl=null;b.updateDelay=1E3;b.exportedLinks=new m;b.templatesInfo=null;b.scaleEnabled=!1;b.error=null;b.print=b.print.bind(b);return b}p(a,n);a.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null};Object.defineProperty(a.prototype,"_printTask",{get:function(){return new l(this.printServiceUrl,{updateDelay:this.updateDelay})},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"state",{get:function(){return"loading"===this.loadStatus?"initializing":this.error||"failed"===this.loadStatus?"error":this.get("view.ready")&&"loaded"===this.loadStatus?"ready":"disabled"},enumerable:!0,configurable:!0});a.prototype.load=function(){this.addResolvingPromise(this._loadServiceDescription());return this.when()};a.prototype.print=function(b){var a;if(!this.view)return h.reject(new g("export-error","view is not set"));this.scaleEnabled?(this._viewpoint||
(this._viewpoint=this.view.viewpoint.clone()),a=this._getExtent(this._viewpoint,b.outScale)):(this._viewpoint=null,a=this._getExtent(this.view.viewpoint));b=new z({view:this.view,template:b});var c=this.exportedLinks,d=c.getItemAt(c.length-1);return this._printTask.execute(q.mixin(b,{extent:a})).then(function(b){var a=new k({formattedName:d.formattedName,url:b&&b.url,state:"ready"}),e=c.indexOf(d);c.splice(e,1,a);return b}).catch(function(b){var a=new k({formattedName:d.formattedName,url:d.url,state:"error"}),
e=c.indexOf(d);c.splice(e,1,a);return h.reject(new g("export-error",b.message))})};a.prototype._loadServiceDescription=function(){var b=this;return this._getPrintTemplatesFromService().then(function(a){b._set("templatesInfo",a)})};a.prototype._getPrintTemplatesFromService=function(){var b=this;return-1===this.printServiceUrl.toLowerCase().split("/").indexOf("gpserver")?(this.error=new g("url-error","Can't fetch print templates information from provided URL"),h.reject(this.error)):r(this.printServiceUrl,
{callbackParamName:"callback",query:{f:"json"},timeout:6E4}).then(function(a){a=a&&a.data;b._printTask.mode=-1<a.executionType.toLowerCase().indexOf("async")?"async":"sync";var c=null,d=null;(a&&a.parameters).forEach(function(b){var a=b.choiceList&&b.choiceList.slice(),e;a&&a.length&&b.defaultValue&&(e=a.indexOf(b.defaultValue));-1<e&&(a.splice(e,1),a.unshift(b.defaultValue));if("Format"===b.name)c={defaultValue:b.defaultValue,choiceList:a};else if("Layout_Template"===b.name){var a=a.filter(function(a){return"map_only"!==
a.toLowerCase()}),f;e=void 0;a.some(function(a,b){a=a.toLowerCase();if(-1<a.indexOf("letter")&&-1<a.indexOf("landscape"))return f=b,!0;-1<a.indexOf("a4")&&-1<a.indexOf("landscape")&&(f=b);return!1});f&&(e=a[f],a.splice(f,1),a.unshift(e));d={defaultValue:a&&a[0]||b.defaultValue,choiceList:a}}});b.error=null;return{format:c,layout:d}}).catch(function(a){b.error=new g("fetching-print-templates-info-error","Can't fetch templates info from service");return h.reject(b.error)})};a.prototype._getExtent=function(a,
c){c=c||this.view.scale;var b=this.get("view.size");a=a?a.targetGeometry:null;return A.getExtent(new y,new t({scale:c,targetGeometry:a}),b)};d([c.property()],a.prototype,"view",void 0);d([c.property()],a.prototype,"printServiceUrl",void 0);d([c.property({dependsOn:["printServiceUrl"],type:l})],a.prototype,"_printTask",null);d([c.property({dependsOn:["view.ready","error","loadStatus"],readOnly:!0})],a.prototype,"state",null);d([c.property()],a.prototype,"updateDelay",void 0);d([c.property({type:m})],
a.prototype,"exportedLinks",void 0);d([c.property({readOnly:!0})],a.prototype,"templatesInfo",void 0);d([c.property()],a.prototype,"scaleEnabled",void 0);d([c.property()],a.prototype,"error",void 0);return a=d([c.subclass("esri.widgets.Print.PrintViewModel")],a)}(c.declared(u,x))});