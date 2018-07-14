// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred ../../kernel ../Error ../Logger ../promiseUtils ./utils ./workerFactory".split(" "),function(y,z,l,m,n,p,q,e,r){var t=p.getLogger("esri.core.workers"),g=e.MessageType.CANCEL,u=e.MessageType.INVOKE,v=e.MessageType.OPEN,w=e.MessageType.OPENED,h=e.MessageType.RESPONSE;return function(){function b(a,f){this._outJobs=new Map;this._inJobs=new Map;this.worker=a;this.id=f;a.addEventListener("message",this._onMessage.bind(this));a.addEventListener("error",function(a){a.preventDefault();
t.error(a)})}b.create=function(a){return r.createWorker().then(function(f){return new b(f,a)})};b.prototype.terminate=function(){this.worker.terminate()};b.prototype.open=function(a){var f=this,d=e.newJobId(),c=new l(function(a){f._outJobs["delete"](d);f._post({type:g,jobId:d})});this._outJobs.set(d,c);this._post({type:v,jobId:d,modulePath:a});return c.promise};b.prototype._onMessage=function(a){if(a=e.receiveMessage(a))switch(a.type){case w:case h:this._onResponse(a);break;case g:this._onCancel(a);
break;case u:this._onInvoke(a)}};b.prototype._onCancel=function(a){(a=this._inJobs.get(a.jobId))&&a.cancel()};b.prototype._onInvoke=function(a){var f=this,d=a.methodName,c=a.jobId;a=a.data;var b=this._inJobs,g=m.workerMessages[d],k;try{if("function"!==typeof g)throw new TypeError(d+" is not a function");k=g.call(null,a)}catch(x){this._post({type:h,jobId:c,error:e.toInvokeError(x)});return}q.isThenable(k)?(b.set(c,k),k.then(function(a){b["delete"](c);f._post({type:h,jobId:c},a)}).catch(function(a){b["delete"](c);
a||(a={message:"Error encountered at method"+d});a.dojoType&&"cancel"===a.dojoType||f._post({type:h,jobId:c,error:e.toInvokeError(a)})})):this._post({type:h,jobId:c},k)};b.prototype._onResponse=function(a){var b=a.jobId,d=a.error;a=a.data;var c=this._outJobs.get(b);c&&(this._outJobs["delete"](b),d?c.reject(n.fromJSON(JSON.parse(d))):c.resolve(a))};b.prototype._post=function(a,b,d){return e.postMessage(this.worker,a,b,d)};return b}()});