// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/urlUtils"],function(l,c,d){function h(b,a,e){return a.imageData?d.makeData({mediaType:a.contentType||"image/png",isBase64:!0,data:a.imageData}):f(a.url,e)}function f(b,a){return!a||"service"!==a.origin&&"portal-item"!==a.origin||!a.layer||"feature"!==a.layer.type&&"stream"!==a.layer.type||d.isAbsolute(b)||!a.layer.parsedUrl?d.read(b,a):d.join(a.layer.parsedUrl.path,"images",b)}function k(b,a,e,c){d.isDataProtocol(b)?(b=d.dataComponents(b),a.contentType=b.mediaType,
a.imageData=b.data,e&&e.imageData===a.imageData&&e.url&&(a.url=g(e.url,c))):a.url=g(b,c)}function g(b,a){return d.write(b,a)}Object.defineProperty(c,"__esModule",{value:!0});c.readImageDataOrUrl=h;c.read=f;c.writeImageDataAndUrl=k;c.write=g;c.urlPropertyDefinition={json:{read:{source:["imageData","url"],reader:h},write:{writer:function(b,a,c,d){k(b,a,this.source,d)}}}};c.sourcePropertyDefinition={readOnly:!0,json:{read:{source:["imageData","url"],reader:function(b,a,c){b={};a.imageData&&(b.imageData=
a.imageData);a.contentType&&(b.contentType=a.contentType);a.url&&(b.url=f(a.url,c));return b}}}}});