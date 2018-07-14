// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./common","../../lib/glMatrix","../../webgl-engine/lib/Util"],function(w,g,l,e,p){function m(b,c,d){void 0===d&&(d=l.defaultApplyOptions);if(!b.state.isLocal)return 0;var a=b.state.constraints.distance;if(!b.pointsOfInterest.surfaceOrigin.renderLocation||Infinity===a)return 0;h.min=0;h.max=a;var a=h,f=d.interactionType;if(0!==f){var g=a.min,q=a.max,k=d.interactionStartCamera;d=d.interactionFactor;var f=1===f||4===f,n=m(b,k),k=0===n?0:e.vec3d.dist(k.eye,b.pointsOfInterest.surfaceOrigin.renderLocation);
a.min=g;a.max=q;l.adjustRangeForInteraction(n,k,f,d,.05*k,a)}b=e.vec3d.dist(c.eye,b.pointsOfInterest.surfaceOrigin.renderLocation);b=h.max-b;return-1E-6<=b?0:b}Object.defineProperty(g,"__esModule",{value:!0});g.error=m;g.apply=function(b,c,d,a){void 0===d&&(d=l.defaultApplyOptions);void 0===a&&(a=c);a!==c&&a.copyFrom(c);var f=m(b,c,d);if(0===f)return!1;var g=b.pointsOfInterest.surfaceOrigin,f=e.vec3d.dist(c.eye,b.pointsOfInterest.surfaceOrigin.renderLocation)+f,h=e.vec3d.set(c.eye,r);d=l.interactionDirectionTowardsConstraintMinimization(b,
c,d.interactionDirection,e.vec3d.direction(b.pointsOfInterest.surfaceOrigin.renderLocation,c.eye,t),u);return p.raySphere(c.eye,d,g.renderLocation,f,a.eye)?(c=e.vec3d.subtract(a.eye,h,v),e.vec3d.add(a.center,c),a.markViewDirty(),c=b.renderCoordsHelper.getAltitude(a.center),b.renderCoordsHelper.intersectManifold(a.eye,a.viewForward,c,a.center),a.markViewDirty(),!0):!1};var h={min:0,max:0},r=e.vec3d.create(),v=e.vec3d.create(),u=e.vec3d.create(),t=e.vec3d.create()});