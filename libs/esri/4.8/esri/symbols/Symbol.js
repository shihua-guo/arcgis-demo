// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../core/lang","../core/kebabDictionary","../core/JSONSupport","../Color"],function(d,e,f,b){var c=e({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d"}),g=0;return f.createSubclass({declaredClass:"esri.symbols.Symbol",constructor:function(){this.id="sym"+g++},
properties:{type:{type:String,value:null,json:{read:c.fromJSON,write:{ignoreOrigin:!0,writer:function(a,b){b.type=c.toJSON(this.type)}}}},color:{type:b,value:new b([0,0,0,1]),json:{read:function(a){return a&&d.isDefined(a[0])?[a[0],a[1],a[2],a[3]/255]:a},write:{allowNull:!0}}}}})});