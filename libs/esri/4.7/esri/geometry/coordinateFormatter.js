// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/Error ./pe ./Point ./SpatialReference".split(" "),function(q,e,m,d,l,h){function k(a){var b=null;a||(a=h.WGS84);if(a.wkid){if(b=d.PeFactory.geogcs(a.wkid),!b)throw new m("coordinate-formatter:invalid-spatial-reference","wkid is not valid");}else if(a.wkt){if(b=d.PeFactory.fromString(d.PeDefs.PE_TYPE_GEOGCS,a.wkt),!b)throw new m("coordinate-formatter:invalid-spatial-reference","wkt is not valid");}else throw new m("coordinate-formatter:invalid-spatial-reference","wkid and wkt are missing");
return b}function n(a){var b=-1;switch(a){case "automatic":b=d.PeNotationMgrs.PE_MGRS_STYLE_AUTO;break;case "new-180-in-zone-01":b=d.PeNotationMgrs.PE_MGRS_STYLE_NEW|d.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case "new-180-in-zone-60":b=d.PeNotationMgrs.PE_MGRS_STYLE_NEW;break;case "old-180-in-zone-01":b=d.PeNotationMgrs.PE_MGRS_STYLE_OLD|d.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case "old-180-in-zone-60":b=d.PeNotationMgrs.PE_MGRS_STYLE_OLD}return b}function p(a){var b=-1;switch(a){case "latitude-band-indicators":b=
d.PeNotationUtm.PE_UTM_OPTS_NONE;break;case "north-south-indicators":b=d.PeNotationUtm.PE_UTM_OPTS_NS}return b}Object.defineProperty(e,"__esModule",{value:!0});e.isLoaded=function(){return d.isLoaded()};e.isSupported=function(){return d.isSupported()};e.load=function(){return d.load()};e.fromLatitudeLongitude=function(a,b){var c=[];a=a.replace(/\u2032/g,"'");var f=k(b);return d.PeNotationDms.dms_to_geog(f,1,[a],c)?new l(c[0][0],c[0][1],b||h.WGS84):null};e.fromMgrs=function(a,b,c){var f=[],g=n(c);
if(-1===g)return console.warn("invalid conversionMode: "+c),null;c=k(b);return d.PeNotationMgrs.mgrs_to_geog_extended(c,1,[a],g,f)?new l(f[0][0],f[0][1],b||h.WGS84):null};e.fromUsng=function(a,b){var c=[];!b&&/\(.+27/.test(a)&&(b=h.GCS_NAD_1927);var f=k(b);return d.PeNotationUsng.usng_to_geog(f,1,[a],c)?new l(c[0][0],c[0][1],b||h.WGS84):null};e.fromUtm=function(a,b,c){var f=[],g=p(c);if(-1===g)return console.warn("invalid conversionMode: "+c),null;c=k(b);return d.PeNotationUtm.utm_to_geog(c,1,[a],
g,f)?new l(f[0][0],f[0][1],b||h.WGS84):null};e.toLatitudeLongitude=function(a,b,c){void 0===c&&(c=0);var f=[[a.x,a.y]],g=[];a=k(a.spatialReference);var e=0;switch(b){case "dd":e=d.PeNotationDms.geog_to_dd(a,1,f,c,g);break;case "ddm":e=d.PeNotationDms.geog_to_ddm(a,1,f,c,g);break;case "dms":e=d.PeNotationDms.geog_to_dms(a,1,f,c,g);break;default:return console.warn("invalid format: "+b),null}return e?g[0]:null};e.toMgrs=function(a,b,c,f){void 0===c&&(c=0);void 0===f&&(f=!1);var g=[[a.x,a.y]],e=[];a=
k(a.spatialReference);var h=n(b);if(-1===h)return console.warn("invalid conversionMode: "+b),null;f&&(h|=d.PeNotationMgrs.PE_MGRS_ADD_SPACES);return d.PeNotationMgrs.geog_to_mgrs_extended(a,1,g,c,!1,h,e)?e[0]:null};e.toUsng=function(a,b,c){void 0===b&&(b=0);void 0===c&&(c=!1);var f=[[a.x,a.y]],e=[];a=k(a.spatialReference);return d.PeNotationUsng.geog_to_usng(a,1,f,b,!1,c,e)?e[0]:null};e.toUtm=function(a,b,c){void 0===c&&(c=!1);var e=[[a.x,a.y]],g=[];a=k(a.spatialReference);var h=p(b);if(-1===h)return console.warn("invalid conversionMode: "+
b),null;c&&(h|=d.PeNotationUtm.PE_UTM_OPTS_ADD_SPACES);return d.PeNotationUtm.geog_to_utm(a,1,e,h,g)?g[0]:null}});