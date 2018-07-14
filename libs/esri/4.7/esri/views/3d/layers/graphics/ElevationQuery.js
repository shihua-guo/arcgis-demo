// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper dojo/Deferred dojo/_base/lang ../../../../geometry ../../../../core/promiseUtils ../../../../core/scheduling".split(" "),function(e,f,k,g,m,n,l,p,q){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function b(a,c){this.spatialReference=a;this.elevationProvider=c;this.point=new l.Point;this.point.spatialReference=a}b.prototype.queryElevation=function(a,c){return g(this,void 0,void 0,
function(){return k(this,function(d){this.point.x=a;this.point.y=c;return[2,p.resolve(this.elevationProvider&&this.elevationProvider.getElevation(this.point)||0)]})})};return b}();f.ElevationQueryView=e;e=function(){function b(a,c,d){this.spatialReference=a;this._getElevationQueryProvider=c;this._queries=[];this._isScheduled=!1;this._queryOptions=n.mixin({},d,{ignoreInvisibleLayers:!0})}b.prototype.queryElevation=function(a,c){return g(this,void 0,void 0,function(){var d;return k(this,function(b){d=
new m;this._queries.push({x:a,y:c,result:d});this._scheduleDoQuery();return[2,d.promise]})})};b.prototype._scheduleDoQuery=function(){var a=this;this._isScheduled||(q.schedule(function(){return a._doQuery()}),this._isScheduled=!0)};b.prototype._doQuery=function(){return g(this,void 0,void 0,function(){var a,c,d,b,e,f,g;return k(this,function(h){switch(h.label){case 0:this._isScheduled=!1;a=this._queries;this._queries=[];c=a.map(function(a){return[a.x,a.y]});d=new l.Multipoint({points:c,spatialReference:this.spatialReference});
b=this._getElevationQueryProvider();if(!b)return a.forEach(function(a,b){return a.result.reject()}),[2];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,b.queryElevation(d,this._queryOptions)];case 2:return e=h.sent(),[3,4];case 3:return f=h.sent(),a.forEach(function(a){return a.result.reject(f)}),[2];case 4:return g=e.geometry.points,a.forEach(function(a,b){return a.result.resolve(g[b][2])}),[2]}})})};return b}();f.ElevationQuery=e});