// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["./core/JSONSupport","./Camera","./geometry/support/typeUtils","./geometry/support/jsonUtils"],function(c,d,e,f){var b=c.createSubclass({declaredClass:"esri.Viewpoint",properties:{rotation:{type:Number,value:0,cast:function(a){a%=360;0>a&&(a+=360);return a},json:{write:!0}},scale:{type:Number,value:0,json:{write:!0}},targetGeometry:{value:null,types:e.types,json:{read:function(a){return f.fromJSON(a)},write:!0}},camera:{value:null,type:d,json:{write:!0}}},clone:function(){return new b({rotation:this.rotation,
scale:this.scale,targetGeometry:this.targetGeometry?this.targetGeometry.clone():null,camera:this.camera?this.camera.clone():null})}});return b});