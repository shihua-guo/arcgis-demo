// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../Feature","../languageUtils"],function(m,k,l,d){Object.defineProperty(k,"__esModule",{value:!0});k.registerFunctions=function(g,f){g.trim=function(b,e){return f(b,e,function(c,h,a){d.pcCheck(a,1,1);return d.toString(a[0]).trim()})};g.upper=function(b,e){return f(b,e,function(c,h,a){d.pcCheck(a,1,1);return d.toString(a[0]).toUpperCase()})};g.proper=function(b,e){return f(b,e,function(c,h,a){d.pcCheck(a,1,2);c=1;2===a.length&&"firstword"===d.toString(a[1]).toLowerCase()&&
(c=2);h=/\s/;a=d.toString(a[0]);for(var b="",e=!0,g=0;g<a.length;g++){var f=a[g];h.test(f)?1===c&&(e=!0):f.toUpperCase()!==f.toLowerCase()&&(e?(f=f.toUpperCase(),e=!1):f=f.toLowerCase());b+=f}return b})};g.lower=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,1,1);return d.toString(a[0]).toLowerCase()})};g.guid=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,0,1);if(0<a.length)switch(d.toString(a[0]).toLowerCase()){case "digits":return d.generateUUID().replace("-","").replace("-","").replace("-",
"").replace("-","");case "digits-hyphen":return d.generateUUID();case "digits-hyphen-parentheses":return"("+d.generateUUID()+")"}return"{"+d.generateUUID()+"}"})};g.console=function(b,e){return f(b,e,function(c,e,a){0!==a.length&&(1===a.length?b.console(d.toString(a[0])):b.console(d.toString(a)));return d.voidOperation})};g.mid=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,2,3);c=d.toNumber(a[1]);if(isNaN(c))return"";0>c&&(c=0);if(2===a.length)return d.toString(a[0]).substr(c);b=d.toNumber(a[2]);
if(isNaN(b))return"";0>b&&(b=0);return d.toString(a[0]).substr(c,b)})};g.find=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,2,3);c=0;if(2<a.length){c=d.toNumber(d.defaultUndefined(a[2],0));if(isNaN(c))return-1;0>c&&(c=0)}return d.toString(a[1]).indexOf(d.toString(a[0]),c)})};g.left=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,2,2);c=d.toNumber(a[1]);if(isNaN(c))return"";0>c&&(c=0);return d.toString(a[0]).substr(0,c)})};g.right=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,
2,2);c=d.toNumber(a[1]);if(isNaN(c))return"";0>c&&(c=0);return d.toString(a[0]).substr(-1*c,c)})};g.split=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,2,4);c=d.toNumber(d.defaultUndefined(a[2],-1));b=d.toBoolean(d.defaultUndefined(a[3],!1));-1===c||null===c||!0===b?a=d.toString(a[0]).split(d.toString(a[1])):(isNaN(c)&&(c=-1),-1>c&&(c=-1),a=d.toString(a[0]).split(d.toString(a[1]),c));if(!1===b)return a;b=[];for(var e=0;e<a.length&&!(-1!==c&&b.length>=c);e++)""!==a[e]&&void 0!==a[e]&&b.push(a[e]);
return b})};g.text=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,1,2);return d.toStringExplicit(a[0],a[1])})};g.concatenate=function(b,e){return f(b,e,function(c,b,a){c=[];if(1>a.length)return"";if(d.isArray(a[0])){b=d.defaultUndefined(a[2],"");for(var e=0;e<a[0].length;e++)c[e]=d.toStringExplicit(a[0][e],b);return 1<a.length?c.join(a[1]):c.join("")}if(d.isImmutableArray(a[0])){b=d.defaultUndefined(a[2],"");for(e=0;e<a[0].length();e++)c[e]=d.toStringExplicit(a[0].get(e),b);return 1<a.length?
c.join(a[1]):c.join("")}for(e=0;e<a.length;e++)c[e]=d.toStringExplicit(a[e]);return c.join("")})};g.reverse=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,1,1);if(d.isArray(a[0]))return c=a[0].slice(0),c.reverse(),c;if(d.isImmutableArray(a[0]))return c=a[0].toArray().slice(0),c.reverse(),c;throw Error("Invalid Parameter");})};g.replace=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,3,4);c=d.toString(a[0]);b=d.toString(a[1]);var e=d.toString(a[2]);return(4===a.length?d.toBoolean(a[3]):
1)?d.multiReplace(c,b,e):c.replace(b,e)})};g.domainname=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,2,4);if(a[0]instanceof l)return a[0].domainValueLookup(d.toString(a[1]),a[2],void 0===a[3]?void 0:d.toNumber(a[3]));throw Error("Invalid Parameter");})};g.domaincode=function(b,e){return f(b,e,function(c,b,a){d.pcCheck(a,3,4);if(a[0]instanceof l)return a[0].domainCodeLookup(d.toString(a[1]),a[2],void 0===a[3]?void 0:d.toNumber(a[3]));throw Error("Invalid Parameter");})}}});