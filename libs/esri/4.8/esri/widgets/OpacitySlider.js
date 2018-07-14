// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/OpacitySlider/templates/OpacitySlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("./Widgette ./RendererSlider ./RendererSlider/sliderUtils ../Color ../core/lang ../core/numberUtils dijit/_TemplatedMixin dojo/dom-style dojox/gfx dojo/text!./OpacitySlider/templates/OpacitySlider.html".split(" "),function(m,n,h,p,g,q,r,l,f,t){return m.createSubclass([r],{_rampNode:null,_sliderHeight:null,_updateTimer:null,_forceMinValue:null,_forceMaxValue:null,_css:null,declaredClass:"esri.widgets.OpacitySlider",templateString:t,properties:{opacityInfo:null,minValue:null,maxValue:null,histogram:null,
statistics:null,zoomOptions:null,handles:[0,1],showLabels:!0,showTicks:!0,showHandles:!0,showHistogram:!0,showStatistics:!0,showTransparentBackground:!0,histogramWidth:100,rampWidth:26},constructor:function(a){void 0!==a.minValue&&this.set("_forceMinValue",a.minValue);void 0!==a.maxValue&&this.set("_forceMaxValue",a.maxValue);this._css={container:"esri-opacity-slider",rampSurface:"esri-slider-ramp-surface"}},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);
this._slider=new n({type:"OpacitySlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:this.zoomOptions?!0:!1,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;
this._sliderHeight=l.get(this._rampNode,"height")||155;this._valuesAutoAdjust();this._createSVGSurfaces();this.own(this._slider.on("slide",function(a){this._valuesAutoAdjust();this._fillRamp()}.bind(this)),this._slider.on("data-change",function(a){this.set("values",a.values);this._updateOpacityInfo(a.values);this._valuesAutoAdjust();this._fillRamp();this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,opacityInfo:g.clone(this.opacityInfo)})}.bind(this)),this._slider.on("handle-value-change",
function(a){this.set("values",a.values);this._updateOpacityInfo(a.values);this._valuesAutoAdjust();this._fillRamp();this.emit("handle-value-change",{minValue:this.minValue,maxValue:this.maxValue,opacityInfo:g.clone(this.opacityInfo)})}.bind(this)),this._slider.on("data-value-change",function(a){this.set({minValue:a.min,maxValue:a.max});this._updateRendererSlider();this.emit("data-value-change",{minValue:a.min,maxValue:a.max,opacityInfo:g.clone(this.opacityInfo)})}.bind(this)),this._slider.on("stop",
function(a){this.emit("handle-value-change",{minValue:this.minValue,maxValue:this.maxValue,opacityInfo:g.clone(this.opacityInfo)})}.bind(this)),this._slider.on("zoom-out",function(a){this.set("zoomOptions",null)}.bind(this)));this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram();this.watch("opacityInfo, minValue, maxValue, statistics, histogram, zoomOptions, showHandles, showLabels, showTicks",
this._updateTimeout);this.watch("zoomOptions",this._zoomEventHandler);this.watch("showHistogram",this._toggleHistogram);this.watch("showTransparentBackground",this._toggleTransparentBackground);this.set("loaded",!0);this.emit("load")},destroy:function(){this.inherited(arguments);this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&this.countTooltips.forEach(function(a){a.destroy()})},_updateOpacityInfo:function(a){(this.opacityInfo.stops||
[]).forEach(function(c,b){c.value=a[b].value;c.opacity=a[b].opacity},this)},_valuesAutoAdjust:function(){var a,c,b,h,g,e,d,f=this._slider.values,k=[];(f||[]).some(function(a,b){a.hidden||k.push(b)});for(e=0;e<k.length-1;e++)for(a=k[e],c=k[e+1],b=c-a,h=f[a].value,g=f[c].value,d=a+1;d<c;d++)f[d].value=h*(c-d)/b+g*(d-a)/b},_getHandleInfo:function(a){return(a||[]).map(function(c,b){return{color:new p([0,121,193,c.opacity]),value:a[b].value,opacity:a[b].opacity}})},_updateTimeout:function(a){this._updateRendererSlider()},
_updateRendererSlider:function(a){null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1});
this.set("values",this._getHandleInfo(this.opacityInfo.stops));this._slider.set("values",this.values);this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_zoomEventHandler:function(){this.emit("zoomed",!!this.zoomOptions)},_setupDataDefaults:function(){this.statistics?
this.set({minValue:this.statistics.min,maxValue:this.statistics.max}):this.set({minValue:0,maxValue:100});null!==this._forceMinValue&&this.set("minValue",this._forceMinValue);null!==this._forceMaxValue&&this.set("maxValue",this._forceMaxValue);null!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue);this.minValue===this.maxValue&&(0===this.minValue?this.set("maxValue",100):null===this.minValue?
this.set({minValue:0,maxValue:100}):this.set({minValue:0,maxValue:2*this.minValue}));null===this.minValue&&this.set("minValue",0);null===this.maxValue&&this.set("maxValue",100);this.set("values",this._getHandleInfo(g.clone(this.opacityInfo.stops)))},_createSVGSurfaces:function(){this._colorRampSurface=f.createSurface(this._rampNode,this.rampWidth-2,this._sliderHeight-2);this._colorRampSurface.rawNode.setAttribute("class",this._css.rampSurface);this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,
height:this._sliderHeight});this._transparentBackgroundNode=h.generateTransparentBackground(this._colorRampSurface,this.rampWidth-2,this._sliderHeight-2,this.showTransparentBackground);this._histogramSurface=h.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp();null!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,
5)),this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,195))):this.toggleSliderBottom?this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,195)):this.toggleSliderTop&&this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,5)))},_fillRamp:function(){var a=
this._slider.minimum,c=this._slider.maximum,b=this._slider.values.slice(0);b.forEach(function(b){b.offset=(c-b.value)/(c-a)});b.reverse();null!==this.zoomOptions?this.toggleSliderBottom&&this.toggleSliderTop?this._surfaceRect.setFill({type:"linear",x1:0,y1:10,x2:0,y2:this._sliderHeight-10,colors:b}):this.toggleSliderBottom?this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight-20,colors:b}):this.toggleSliderTop&&this._surfaceRect.setFill({type:"linear",x1:0,y1:20,x2:0,y2:this._sliderHeight,
colors:b}):this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:b})},_toggleTransparentBackground:function(){this.showTransparentBackground?this._transparentBackgroundNode.setFill(h.getTransparentFill()):this._transparentBackgroundNode.setFill(null)},_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&
(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(l.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):l.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var a=this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=h.generateHistogram(this._histogramSurface,a,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=h.generateCountTooltips(a,
this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a=this.statistics,c=this._slider,b=this.zoomOptions||null,f=h.getPrecision(this.maxValue),g=a.avg,e,d;a.min===a.max&&a.min===a.avg?(e=0,d=2*a.avg):(e=a.min,d=a.max);if(e!==c.minimum||d!==c.maximum)e=c.minimum,d=c.maximum;b&&(e=b.minSliderValue,d=b.maxSliderValue);g=q.round([a.avg,d,e])[0];this._avgHandleObjs=h.generateAvgLine(this._histogramSurface,g,this._sliderHeight*(d-a.avg)/(d-e),f,
this.isDate,this.isLeftToRight())}}})});