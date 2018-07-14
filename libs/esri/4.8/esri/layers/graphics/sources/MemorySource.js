// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("../../../core/Collection ../../../core/Promise ../../../core/promiseUtils ../../../core/Error ../../../tasks/support/FeatureSet ../../../Graphic ../QueryEngine".split(" "),function(c,d,e,f,g,h,k){return c.ofType(h).createSubclass([d],{declaredClass:"esri.layers.graphics.sources.MemorySource",properties:{layer:{value:null},_queryEngine:{value:null,dependsOn:["layer.loaded"],get:function(){return this.get("layer.loaded")?new k({features:this,spatialReference:this.layer.spatialReference,objectIdField:this.layer.objectIdField}):
null}}},queryFeatures:function(a){return this._queryEngine?this._queryEngine.queryFeatures(a).then(function(a){var b=new g;b.features=a;return b}):this._rejectQuery("Not ready to execute query")},queryObjectIds:function(a){return this._queryEngine?this._queryEngine.queryObjectIds(a):this._rejectQuery("Not ready to execute query")},queryFeatureCount:function(a){return this._queryEngine?this._queryEngine.queryFeatureCount(a):this._rejectQuery("Not ready to execute query")},queryExtent:function(a){return this._queryEngine?
this._queryEngine.queryExtent(a):this._rejectQuery("Not ready to execute query")},_rejectQuery:function(a){return e.reject(new f("MemorySource",a))}})});