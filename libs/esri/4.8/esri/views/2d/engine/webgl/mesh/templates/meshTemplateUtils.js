// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/Logger ../../enums ../templates/WGLFillTemplate ../templates/WGLLineTemplate ../templates/WGLMarkerTemplate ../templates/WGLTextTemplate ../../util/vvFlagUtils".split(" "),function(v,p,t,k,q,m,r,u,d){Object.defineProperty(p,"__esModule",{value:!0});var n=t.getLogger("esri.views.2d.engine.webgl.mesh.templates.meshTemplateUtils");p.createMeshTemplates=function(b,e,a,c,f,g,l){void 0===l&&(l=!1);if(-1!==a.type.indexOf("3d"))return n.error("3D symbols are not supported with MapView"),
b;var h=c.get(a.id);h||n.error("Couldn't find texture resources for symbol: "+a.id+"!");switch(a.type){case k.EsriSymbolTypeKebab.SIMPLE_MARKER:return b.push(r.default.fromSimpleMarker(e,d.getMarkerVVFlags(f),a,h.spriteMosaicItem,g)),b;case k.EsriSymbolTypeKebab.PICTURE_MARKER:return b.push(r.default.fromPictureMarker(e,d.getMarkerVVFlags(f),a,h.spriteMosaicItem,g)),b;case k.EsriSymbolTypeKebab.SIMPLE_FILL:return b.push(q.default.fromSimpleFill(e,d.getFillVVFlags(f),a,h.spriteMosaicItem,g,l)),a.outline&&
(c=c.get(a.outline.id),b.push(m.default.fromSimpleLine(e,d.getLineVVFlags(f,!0),a.outline,c&&c.spriteMosaicItem,g))),b;case k.EsriSymbolTypeKebab.PICTURE_FILL:return b.push(q.default.fromPictureFill(e,d.getFillVVFlags(f),a,h.spriteMosaicItem,g,l)),a.outline&&(c=c.get(a.outline.id),b.push(m.default.fromSimpleLine(e,d.getLineVVFlags(f,!0),a.outline,c&&c.spriteMosaicItem,g))),b;case k.EsriSymbolTypeKebab.SIMPLE_LINE:return b.push(m.default.fromSimpleLine(e,d.getLineVVFlags(f,!1),a,h.spriteMosaicItem,
g)),b;case k.EsriSymbolTypeKebab.TEXT:return b.push(u.default.fromText(e,d.getTextVVFlags(f),a,g,h.glyphMosaicItems)),b;default:return n.error("Unable to create mesh template for unknown symbol type: "+a.type),b}}});