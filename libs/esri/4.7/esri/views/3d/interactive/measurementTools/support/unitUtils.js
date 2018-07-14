// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/i18n!./nls/Units","dojo/number","../../../../../geometry/support/scaleUtils"],function(m,n,w,x,y){m={millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1E3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1853.184},"us-feet":{inBaseUnits:1200/3937}};n={"square-millimeters":{inBaseUnits:1E-6},
"square-centimeters":{inBaseUnits:1E-4},"square-decimeters":{inBaseUnits:.1*.1},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:1E6},"square-inches":{inBaseUnits:6.4516E-4},"square-feet":{inBaseUnits:.09290304},"square-yards":{inBaseUnits:.83612736},"square-miles":{inBaseUnits:2589988.110336},"square-us-feet":{inBaseUnits:function(c){return c*c}(1200/3937)},acres:{inBaseUnits:4046.8564224},ares:{inBaseUnits:100},hectares:{inBaseUnits:1E4}};var l={length:{baseUnit:"meters",units:m},
area:{baseUnit:"square-meters",units:n},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1E3*1E-9},"cubic-centimeters":{inBaseUnits:.001},"cubic-decimeters":{inBaseUnits:1},"cubic-meters":{inBaseUnits:1E3},"cubic-kilometers":{inBaseUnits:1E12},"cubic-inches":{inBaseUnits:.016387064},"cubic-feet":{inBaseUnits:.09290304*304.8},"cubic-yards":{inBaseUnits:764.554857984},"cubic-miles":{inBaseUnits:4.16818182544058E12}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},
degrees:{inBaseUnits:Math.PI/180}}}},z=function(){var c={},g;for(g in l)for(var p in l[g].units)c[p]=g;return c}(),h;(function(c){function g(a){if(a=z[a])return a;throw Error("unknown measure");}function p(a){return l[a].baseUnit}function h(a,b){void 0===b&&(b=null);b=b||g(a);return l[b].baseUnit===a}function f(a,b,e){if(b===e)return a;var d=g(b);if(d!==g(e))throw Error("incompatible units");a=h(b,d)?a:a*l[d].units[b].inBaseUnits;return h(e,d)?a:a/l[d].units[e].inBaseUnits}function m(a,b){return w.units[a][b]}
function k(a,b,e,d){void 0===e&&(e=2);void 0===d&&(d="abbr");return x.format(a,{places:e})+" "+m(b,d)}function n(a,b){return 3E3>f(a,b,"meters")?"meters":"kilometers"}function q(a,b){return 1E5>f(a,b,"meters")?"meters":"kilometers"}function r(a,b){return 1E3>f(a,b,"feet")?"feet":"miles"}function t(a,b){return 1E5>f(a,b,"feet")?"feet":"miles"}function u(a,b){return 3E6>f(a,b,"square-meters")?"square-meters":"square-kilometers"}function v(a,b){return 1E6>f(a,b,"square-feet")?"square-feet":"square-miles"}
c.measureForUnit=g;c.baseUnitForMeasure=p;c.baseUnitForUnit=function(a){return p(g(a))};c.isBaseUnit=h;c.convertUnit=f;c.unitName=m;c.formatDecimal=k;c.preferredMetricLengthUnit=n;c.preferredMetricVerticalLengthUnit=q;c.formatMetricLength=function(a,b,e,d){void 0===e&&(e=2);void 0===d&&(d="abbr");var c=n(a,b);return k(f(a,b,c),c,e,d)};c.formatMetricVerticalLength=function(a,b,e,d){void 0===e&&(e=2);void 0===d&&(d="abbr");var c=q(a,b);return k(f(a,b,c),c,e,d)};c.preferredImperialLengthUnit=r;c.preferredImperialVerticalLengthUnit=
t;c.formatImperialLength=function(a,b,e,d){void 0===e&&(e=2);void 0===d&&(d="abbr");var c=r(a,b);return k(f(a,b,c),c,e,d)};c.formatImperialVerticalLength=function(a,b,c,d){void 0===c&&(c=2);void 0===d&&(d="abbr");var e=t(a,b);return k(f(a,b,e),e,c,d)};c.preferredMetricAreaUnit=u;c.formatMetricArea=function(a,b,c,d){void 0===c&&(c=2);void 0===d&&(d="abbr");var e=u(a,b);return k(f(a,b,e),e,c,d)};c.preferredImperialAreaUnit=v;c.formatImperialArea=function(a,b,c,d){void 0===c&&(c=2);void 0===d&&(d="abbr");
var e=v(a,b);return k(f(a,b,e),e,c,d)};c.formatDMS=function(a,b,e){void 0===e&&(e=2);a=c.convertUnit(a,b,"degrees");b=a-Math.floor(a);a-=b;b*=60;var d=b-Math.floor(b);b-=d;d*=60;return a.toFixed()+"\u00b0 "+b.toFixed()+"' "+d.toFixed(e)+'"'};c.defaultUnitForSpatialReference=function(a){if(!a)return null;switch(y.getUnitString(a)){case "feet":case "us-feet":case "clarke-feet":case "clarke-yards":case "clarke-links":case "sears-yards":case "sears-feet":case "sears-chains":case "benoit-1895-b-chains":case "indian-yards":case "indian-1937-yards":case "gold-coast-feet":case "sears-1922-truncated-chains":return"imperial";
case "50-kilometers":case "150-kilometers":case "meters":return"metric"}return null}})(h||(h={}));return h});