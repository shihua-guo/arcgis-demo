// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred dojo/has ./arcadeCompiler ./arcadeRuntime ./parser".split(" "),function(g,c,h,k,f,d,e){Object.defineProperty(c,"__esModule",{value:!0});var l="disjoint intersects touches crosses within contains overlaps equals relate intersection union difference symmetricdifference clip cut area areageodetic length lengthgeodetic distance densify densifygeodetic generalize buffer buffergeodetic offset rotate issimple simplify multiparttosinglepart".split(" ");c.compileScript=
function(a,b){return k("csp-restrictions")?function(b,c){return d.executeScript(a,b,c)}:f.compileScript(a,b)};c.extend=function(a){d.extend(a);f.extend(a)};c.parseScript=function(a){return e.parseScript(a)};c.validateScript=function(a,b){return e.validateScript(a,b,"simple")};c.scriptCheck=function(a,b,c){return e.scriptCheck(a,b,c,"full")};c.parseAndExecuteScript=function(a,b,c){return d.executeScript(e.parseScript(a),b,c)};c.executeScript=function(a,b,c){return d.executeScript(a,b,c)};c.referencesMember=
function(a,b){return d.referencesMember(a,b)};c.referencesFunction=function(a,b){return d.referencesFunction(a,b)};c.extractFieldLiterals=function(a,b){void 0===b&&(b=!1);return e.extractFieldLiterals(a,b)};c.scriptUsesGeometryEngine=function(a){a=d.findFunctionCalls(a);for(var b=0;b<a.length;b++)if(-1<l.indexOf(a[b]))return!0;return!1};c.enableGeometrySupport=function(){var a=new h;g(["esri/geometry/geometryEngine","./functions/geomsync"],function(b,c){c.setGeometryEngine(b);a.resolve(!0)},function(b){a.reject(b)});
return a.promise}});