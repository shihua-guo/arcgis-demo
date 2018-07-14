// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","./ModelContentType","./Util"],function(B,C,w,A){var u=A.objectEmpty,v=A.assert;return function(){function c(a){this._residentGeomRecords={};this._dirtyGeomRecords={};this._dirtyMaterials={};this._model=a}Object.defineProperty(c.prototype,"residentLayerCount",{get:function(){return Object.keys(this._residentGeomRecords).length},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"residentObjectCount",{get:function(){var a=0,b;for(b in this._residentGeomRecords)a+=
Object.keys(this._residentGeomRecords[b]).length;return a},enumerable:!0,configurable:!0});c.prototype._getResidentGeometryRecords=function(){return this._residentGeomRecords};c.prototype._getDirtyGeometryRecords=function(){return this._dirtyGeomRecords};c.prototype.getDirtyMaterials=function(){return u(this._dirtyMaterials)?null:this._dirtyMaterials};c.prototype.clearDirtyMaterials=function(){this._dirtyMaterials={}};c.prototype.hasDirtyGeometryRecords=function(){for(var a in this._dirtyGeomRecords)for(var b in this._dirtyGeomRecords[a]){var d=
this._dirtyGeomRecords[a][b];if(d&&!u(d))return!0}return!1};c.prototype.handleUpdate=function(a,b,d){v(this[b],"ModelDirtySet doesn't know how to process "+b);return this[b](a,d)};c.prototype.shaderTransformationChanged=function(a){if(a=this._residentGeomRecords[a.id])for(var b in a){var d=this._model.content[w.OBJECT][b];if(d&&d.hasVolativeTransformation()){var d=a[b],t;for(t in d)for(var c=0,e=d[t][1];c<e.length;c++)e[c].shaderTransformationChanged()}}};c.prototype.getAddRemoveUpdateList=function(a){return this.getAddRemoveUpdateListFilteredByLayers(Object.keys(this._dirtyGeomRecords),
a)};c.prototype.getAddRemoveUpdateListFilteredByLayers=function(a,b){for(var d=[],c=[],f=[],e=0;e<a.length;e++){var h=a[e];if(h in this._dirtyGeomRecords){for(var k in this._dirtyGeomRecords[h]){var n=this._dirtyGeomRecords[h][k];if(n){var l=this._createObjectRecordObjIfNonexistent(this._residentGeomRecords,h,k),q;for(q in n){var p=n[q],x=p[0],m=p[1],p=p[2],r=m&2&&p&1;if(m&4||r){var g=l[q];g?c.push.apply(c,g[1]):4===m&&v(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid remove");b&&g&&delete l[q]}if(m&
1||r){var g=[x,[]],y=this._model.get(w.OBJECT,k);this._model.getGeometryRenderGeometries(y,x,g[1]);d.push.apply(d,g[1]);b&&(l[q]=g)}if(m&2&&!r)if(g=l[q],y=this._model.get(w.OBJECT,k),g){m=g[1];r=m.length;if(p&16)for(g=0;g<r;g++){var z=m[g];this._model.updateRenderGeometryTransformation(y,x,z)}for(g=0;g<r;g++)z=m[g],f.push({renderGeometry:z,updateType:p})}else v(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid update")}u(l)&&delete this._residentGeomRecords[h][k]}}u(this._residentGeomRecords[h])&&
delete this._residentGeomRecords[h]}b&&delete this._dirtyGeomRecords[h]}return[d,c,f]};c.prototype.getResidentRenderGeometries=function(){return this.getResidentRenderGeometriesFilteredByLayers(Object.keys(this._residentGeomRecords))};c.prototype.getResidentRenderGeometriesFilteredByLayers=function(a){for(var b=[],d=0;d<a.length;d++){var c=a[d];if(c in this._residentGeomRecords)for(var f in this._residentGeomRecords[c]){var e=this._residentGeomRecords[c][f];if(e)for(var h in e)b.push.apply(b,e[h][1])}}return b};
c.prototype.visibilityChanged=function(a,b,d){if(null!=b)this._componentPropertyChanged(a,b,d,2);else{b=0;for(var c=a.getGeometryRecords();b<c.length;b++)this._componentPropertyChanged(a,c[b],d,2)}};c.prototype.componentHighlightChanged=function(a,b,d){if(null!=b)this._componentPropertyChanged(a,b,d,32);else{b=0;for(var c=a.getGeometryRecords();b<c.length;b++)this._componentPropertyChanged(a,c[b],d,32)}};c.prototype.vertexAttrsUpdated=function(a,b,d){this._updateOrCreateDirtyRecord(a,b,d,2,0,0,2,
5,4)};c.prototype.matChanged=function(a){this._dirtyMaterials[a.id]=!0};c.prototype.layerAdded=function(a){for(var b=a.getObjects(),d=0;d<b.length;d++)this.layObjectAdded(a,b[d])};c.prototype.layerRemoved=function(a){for(var b=a.getObjects(),d=0;d<b.length;d++)this.layObjectRemoved(a,b[d])};c.prototype.layObjectAdded=function(a,b){a=a.id;for(var d=b.getGeometryRecords(),c=0;c<d.length;c++)this.objGeometryAdded(b,d[c],a)};c.prototype.layObjectRemoved=function(a,b){a=a.id;for(var d=b.getGeometryRecords(),
c=0;c<d.length;c++)this.objGeometryRemoved(b,d[c],a)};c.prototype.layObjectReplaced=function(a,b){this.layObjectRemoved(a,b[0]);this.layObjectAdded(a,b[1])};c.prototype.objDirty=function(a,b){b=b||this._getParentLayerId(a);var d=this._createObjectRecordObjIfNonexistent(this._residentGeomRecords,b,a.id),c;for(c in d)this._updateOrCreateDirtyRecord(a,d[c][0],b,2,0,2,0,5,1)};c.prototype.objTransformation=function(a,b){b=b||this._getParentLayerId(a);var d=this._createObjectRecordObjIfNonexistent(this._residentGeomRecords,
b,a.id),c;for(c in d)this._updateOrCreateDirtyRecord(a,d[c][0],b,2,0,0,2,5,16)};c.prototype.objGeometryAdded=function(a,b,d){this._updateOrCreateDirtyRecord(a,b,d,1,4,0,0,0)};c.prototype.objGeometryRemoved=function(a,b,d){this._updateOrCreateDirtyRecord(a,b,d,4,1,2,0,0)};c.prototype.objGeometryReplaced=function(a,b){this.objGeometryRemoved(a,b[0]);this.objGeometryAdded(a,b[1])};c.prototype.objGeometryTransformation=function(a,b){this.objGeometryReplaced(a,b)};c.prototype._componentPropertyChanged=
function(a,b,d,c){this._updateOrCreateDirtyRecord(a,b,d,2,0,0,2,5,c)};c.prototype._updateOrCreateDirtyRecord=function(a,b,d,c,f,e,h,k,n){d=d||this._getParentLayerId(a);var l=b.id;a=this._createObjectRecordObjIfNonexistent(this._dirtyGeomRecords,d,a.id);(d=a[l])?(b=d[1],b&f?delete a[l]:b&e?(d[1]=c,d[2]=n):b&h?d[2]|=n:b&k||v(!1,"ModelDirtySet.objGeometryAdded: inconsistent state")):a[l]=[b,c,n]};c.prototype._createObjectRecordObjIfNonexistent=function(a,b,c){a[b]||(a[b]={});a[b][c]||(a[b][c]={});return a[b][c]};
c.prototype._getParentLayerId=function(a){return a.parentLayer.id};c.prototype.formatDebugInfo=function(a){var b=["ADD","UPD",void 0,"REM"];if(a)return"";a="";for(var c in this._dirtyGeomRecords)for(var t in this._dirtyGeomRecords[c]){var f=this._dirtyGeomRecords[c][t];if(f){0<a.length&&(a+="\n");a+=c+"."+t;var e=[],h;for(h in f){var k=f[h][1];e[k]||(e[k]=[]);e[k].push(f[h][0].geometry.id)}for(f=0;f<e.length;f++)if(e[f])for(a+=" "+b[f-1]+": ",k=0;k<e[f].length;k++)a+=e[f][k]+", "}}return a};return c}()});