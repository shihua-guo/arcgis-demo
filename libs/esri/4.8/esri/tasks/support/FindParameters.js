// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../layers/support/layerUtils"],function(g,h){return g.createSubclass({declaredClass:"esri.tasks.support.FindParameters",properties:{contains:!0,dynamicLayerInfos:null,layerDefinitions:null,layerIds:null,geometryPrecision:null,maxAllowableOffset:null,outSpatialReference:null,returnGeometry:!1,searchFields:null,searchText:null},toJSON:function(){var a={searchText:this.searchText,contains:this.contains,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,
geometryPrecision:this.geometryPrecision},b=this.layerIds,e=this.searchFields,c=this.outSpatialReference;b&&(a.layers=b.join(","));e&&(a.searchFields=e.join(","));c&&(a.sr=c.wkid||JSON.stringify(c.toJSON()));a.layerDefs=h.serializeLayerDefinitions(this.layerDefinitions);if(this.dynamicLayerInfos&&0<this.dynamicLayerInfos.length){var f=[];this.dynamicLayerInfos.forEach(function(a){if(!a.subLayerIds){var b=a.id;if(this.layerIds&&-1!==this.layerIds.indexOf(b)){var c={id:b};c.source=a.source&&a.source.toJSON();
var d;this.layerDefinitions&&this.layerDefinitions[b]&&(d=this.layerDefinitions[b]);d&&(c.definitionExpression=d);f.push(c)}}},this);b=JSON.stringify(f);"[]"===b&&(b="[{}]");a.dynamicLayers=b}return a}})});