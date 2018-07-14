// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./objectResourceUtils","../../webgl-engine/lib/lodRendering/LodResources"],function(l,b,g,h){function d(a){var c=[];a.stageResources.geometries.forEach(function(b,d){c.push({material:a.materialsByComponent[d][0],geometry:b,textures:a.stageResources.textures})});return{components:c,faceCount:a.lodMetrics?a.lodMetrics.faceCount:null,minScreenSpaceRadius:null,pivotOffset:a.pivotOffset}}function e(a){return{levels:a.map(function(a){return d(a)})}}function f(a,c){void 0===
c&&(c=k);a=h.computeFaceCount(a);return Math.sqrt(a/(c*Math.PI))}Object.defineProperty(b,"__esModule",{value:!0});b.makeLodLevelResources=d;b.makeLodResources=e;b.fetchObjectLodResources=function(a,c){return g.fetchLod(a,c).then(function(a){return e(a)})};b.estimateMinScreenSpaceRadius=f;b.fillEstimatedMinScreenSpaceRadius=function(a){a.levels.forEach(function(a){a.minScreenSpaceRadius=f(a)});a.levels[0].minScreenSpaceRadius=Math.min(2,a.levels[0].minScreenSpaceRadius)};var k=.05});