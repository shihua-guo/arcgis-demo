// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/i18n!../nls/Directions dojo/number dojo/_base/kernel ../../../moment ../../../core/lang".split(" "),function(u,d,g,h,n,e,t){function k(a){return"esriNAUSeconds"===a||"esriNAUMinutes"===a||"esriNAUHours"===a||"esriNAUDays"===a}function p(a,b,c){var d=k(b),f=k(c);b=d?l(a,b):m(a,b);return d===f?f?q(b,c):r(b,c):a}function l(a,b,c){a=a||0;switch(b){case "esriNAUSeconds":a/=Math.pow(60,c?-1:1);break;case "esriNAUHours":a*=Math.pow(60,c?-1:1);break;case "esriNAUDays":a*=Math.pow(1440,
c?-1:1)}return a}function q(a,b){return l(a,b,!0)}function m(a,b,c){a=a||0;switch((b||"").replace("esriNAU","esri")){case "esriInches":a*=Math.pow(.0254,c?-1:1);break;case "esriFeet":a*=Math.pow(.3048,c?-1:1);break;case "esriYards":a*=Math.pow(.9144,c?-1:1);break;case "esriMiles":a*=Math.pow(1609.344,c?-1:1);break;case "esriNauticalMiles":a*=Math.pow(1851.995396854,c?-1:1);break;case "esriMillimeters":a/=Math.pow(1E3,c?-1:1);break;case "esriCentimeters":a/=Math.pow(100,c?-1:1);break;case "esriKilometers":a*=
Math.pow(1E3,c?-1:1);break;case "esriDecimeters":a/=Math.pow(10,c?-1:1)}return a}function r(a,b){return m(a,b,!0)}Object.defineProperty(d,"__esModule",{value:!0});d.useSpatiallyLocalTime=function(a,b){return!(!a._associatedStop||!b||-22091616E5===a.get("attributes.ETA"))};d.toSpatiallyLocalTimeString=function(a,b,c){var d=new Date(b),f=new Date(d.getTime()+6E4*d.getTimezoneOffset()),f=n.date.locale.format(f,{selector:"time"}),e="";a?(b=(b-a)/1E3/60/60,a=Math.floor(b),b=60*(b-a),a=g.gmt+(0>a?"":"+")+
h.format(a,{pattern:"00"})+h.format(b,{pattern:"00"}),e=f+" "+a):e=c?n.date.locale.format(d,{selector:"time"}):f;return e};d.isTimeUnits=k;d.convertCostValue=p;d.toMinutes=l;d.fromMinutes=q;d.toMeters=m;d.fromMeters=r;d.isFirstStop=function(a){a=a&&a.attributes||{};return null===(a.ArriveCurbApproach||null)&&null!==(a.DepartCurbApproach||null)};d.isMiddleStop=function(a){a=a&&a.attributes||{};return null!==(a.ArriveCurbApproach||null)&&null!==(a.DepartCurbApproach||null)};d.isLastStop=function(a){a=
a&&a.attributes||{};return null!==(a.ArriveCurbApproach||null)&&null===(a.DepartCurbApproach||null)};d.isWaypoint=function(a){return a&&a.get("attributes.isWaypoint")};d.isStopLocated=function(a){a=a&&a.get("attributes.Status");return!a||6===a};d.getAssociatedStop=function(a){return a._associatedStop};d.formatTime=function(a,b){void 0===b&&(b={});b=b.unit;b=e.duration(Math.round(a),void 0===b?"minutes":b);a=b.asHours();b=b.asMilliseconds();a=1>a?e.utc(b).format("m[m]"):Math.floor(a)+e.utc(b).format(":mm[h]");
return a};d.formatDistance=function(a,b){void 0===b&&(b={});var c=b.toUnits;a=p(a,b.fromUnits,c);if(!a)return"";c=(b=g.units[c])?b.abbr:c.replace("esri","").toLowerCase();a=h.format(a,{locale:"root",places:2});return t.substitute({distance:a,units:c},g.distanceTemplate)}});