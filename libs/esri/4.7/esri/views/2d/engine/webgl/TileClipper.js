// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","./Geometry","./GeometryUtils"],function(u,x,m,v){Object.defineProperty(x,"__esModule",{value:!0});var w=function(){return function(l,a,b){this.ratio=l;this.x=a;this.y=b}}();u=function(){function l(a,b,d,c,f){void 0===c&&(c=8);void 0===f&&(f=8);this.lines=[];this.starts=[];this.pixelRatio=c;this.pixelMargin=f;this.tileSize=512*c;this.dz=a;this.yPos=b;this.xPos=d}l.prototype.setExtent=function(a){this.finalRatio=this.tileSize/a*(1<<this.dz);var b=this.pixelRatio*this.pixelMargin,
b=b/this.finalRatio;a>>=this.dz;b>a&&(b=a);this.margin=b;this.xmin=a*this.xPos-b;this.ymin=a*this.yPos-b;this.xmax=this.xmin+a+2*b;this.ymax=this.ymin+a+2*b};l.prototype.reset=function(a){this.type=a;this.lines=[];this.starts=[];this.line=null;this.start=0};l.prototype.moveTo=function(a,b){this._pushLine();this._prevIsIn=this._isIn(a,b);this._moveTo(a,b,this._prevIsIn);this._prevPt=new m.Point(a,b);this._firstPt=new m.Point(a,b);this._dist=0};l.prototype.lineTo=function(a,b){var d=this._isIn(a,b),
c=new m.Point(a,b),f=m.Point.distance(this._prevPt,c),g,e,h;if(d)this._prevIsIn?this._lineTo(a,b,!0):(g=this._prevPt,e=c,a=this._intersect(e,g),this.start=this._dist+f*(1-this._r),this._lineTo(a.x,a.y,!0),this._lineTo(e.x,e.y,!0));else if(this._prevIsIn)e=this._prevPt,g=c,a=this._intersect(e,g),this._lineTo(a.x,a.y,!0),this._lineTo(g.x,g.y,!1);else{var k=this._prevPt;if(!(k.x<=this.xmin&&c.x<=this.xmin||k.x>=this.xmax&&c.x>=this.xmax||k.y<=this.ymin&&c.y<=this.ymin||k.y>=this.ymax&&c.y>=this.ymax)){a=
[];if(k.x<this.xmin&&c.x>this.xmin||k.x>this.xmin&&c.x<this.xmin)b=(this.xmin-k.x)/(c.x-k.x),h=k.y+b*(c.y-k.y),h<=this.ymin?e=!1:h>=this.ymax?e=!0:a.push(new w(b,this.xmin,h));if(k.x<this.xmax&&c.x>this.xmax||k.x>this.xmax&&c.x<this.xmax)b=(this.xmax-k.x)/(c.x-k.x),h=k.y+b*(c.y-k.y),h<=this.ymin?e=!1:h>=this.ymax?e=!0:a.push(new w(b,this.xmax,h));if(k.y<this.ymin&&c.y>this.ymin||k.y>this.ymin&&c.y<this.ymin)b=(this.ymin-k.y)/(c.y-k.y),h=k.x+b*(c.x-k.x),h<=this.xmin?g=!1:h>=this.xmax?g=!0:a.push(new w(b,
h,this.ymin));if(k.y<this.ymax&&c.y>this.ymax||k.y>this.ymax&&c.y<this.ymax)b=(this.ymax-k.y)/(c.y-k.y),h=k.x+b*(c.x-k.x),h<=this.xmin?g=!1:h>=this.xmax?g=!0:a.push(new w(b,h,this.ymax));if(0===a.length)g?e?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):e?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(1<a.length&&a[0].ratio>a[1].ratio)this.start=this._dist+f*a[1].ratio,this._lineTo(a[1].x,a[1].y,!0),this._lineTo(a[0].x,a[0].y,!0);else for(this.start=
this._dist+f*a[0].ratio,g=0;g<a.length;g++)this._lineTo(a[g].x,a[g].y,!0)}this._lineTo(c.x,c.y,!1)}this._dist+=f;this._prevIsIn=d;this._prevPt=c};l.prototype.close=function(){var a,b;0<this.line.length&&(a=this._firstPt,b=this._prevPt,a.x===b.x&&a.y===b.y||this.lineTo(a.x,a.y),a=this.line,b=a.length,4<=b&&(a[0].x===a[1].x&&a[0].x===a[b-2].x||a[0].y===a[1].y&&a[0].y===a[b-2].y)&&(a.pop(),a[0].x=a[b-2].x,a[0].y=a[b-2].y))};l.prototype.result=function(a){void 0===a&&(a=!0);this._pushLine();if(0===this.lines.length)return null;
3===this.type&&a&&y.simplify(this.tileSize,this.margin*this.finalRatio,this.lines);return this.lines};l.prototype.resultWithStarts=function(){if(2!==this.type)throw Error("Only valid for lines");this._pushLine();var a=this.lines,b=a.length;if(0===b)return null;for(var d=[],c=0;c<b;c++)d.push({line:a[c],start:this.starts[c]||0});return d};l.prototype._isIn=function(a,b){return a>=this.xmin&&a<=this.xmax&&b>=this.ymin&&b<=this.ymax};l.prototype._intersect=function(a,b){var d,c,f;if(b.x>=this.xmin&&
b.x<=this.xmax)c=b.y<=this.ymin?this.ymin:this.ymax,f=(c-a.y)/(b.y-a.y),d=a.x+f*(b.x-a.x);else if(b.y>=this.ymin&&b.y<=this.ymax)d=b.x<=this.xmin?this.xmin:this.xmax,f=(d-a.x)/(b.x-a.x),c=a.y+f*(b.y-a.y);else{c=b.y<=this.ymin?this.ymin:this.ymax;d=b.x<=this.xmin?this.xmin:this.xmax;var g=(d-a.x)/(b.x-a.x),e=(c-a.y)/(b.y-a.y);g<e?(f=g,c=a.y+g*(b.y-a.y)):(f=e,d=a.x+e*(b.x-a.x))}this._r=f;return new m.Point(d,c)};l.prototype._pushLine=function(){this.line&&(1===this.type?0<this.line.length&&(this.lines.push(this.line),
this.starts.push(this.start)):2===this.type?1<this.line.length&&(this.lines.push(this.line),this.starts.push(this.start)):3===this.type&&3<this.line.length&&(this.lines.push(this.line),this.starts.push(this.start)));this.line=[];this.start=0};l.prototype._moveTo=function(a,b,d){3!==this.type?d&&(a=Math.round((a-(this.xmin+this.margin))*this.finalRatio),b=Math.round((b-(this.ymin+this.margin))*this.finalRatio),this.line.push(new m.Point(a,b))):(d||(a<this.xmin&&(a=this.xmin),a>this.xmax&&(a=this.xmax),
b<this.ymin&&(b=this.ymin),b>this.ymax&&(b=this.ymax)),a=Math.round((a-(this.xmin+this.margin))*this.finalRatio),b=Math.round((b-(this.ymin+this.margin))*this.finalRatio),this.line.push(new m.Point(a,b)),this._is_v=this._is_h=!1)};l.prototype._lineTo=function(a,b,d){if(3!==this.type)if(d){a=Math.round((a-(this.xmin+this.margin))*this.finalRatio);b=Math.round((b-(this.ymin+this.margin))*this.finalRatio);if(0<this.line.length&&(d=this.line[this.line.length-1],d.equals(a,b)))return;this.line.push(new m.Point(a,
b))}else this.line&&0<this.line.length&&this._pushLine();else if(d||(a<this.xmin&&(a=this.xmin),a>this.xmax&&(a=this.xmax),b<this.ymin&&(b=this.ymin),b>this.ymax&&(b=this.ymax)),a=Math.round((a-(this.xmin+this.margin))*this.finalRatio),b=Math.round((b-(this.ymin+this.margin))*this.finalRatio),this.line&&0<this.line.length){d=this.line[this.line.length-1];var c=d.x===a,f=d.y===b;c&&f||(this._is_h&&c?(d.x=a,d.y=b,d=this.line[this.line.length-2],this._is_h=d.x===a,this._is_v=d.y===b):this._is_v&&f?(d.x=
a,d.y=b,d=this.line[this.line.length-2],this._is_h=d.x===a,this._is_v=d.y===b):(this.line.push(new m.Point(a,b)),this._is_h=c,this._is_v=f))}else this.line.push(new m.Point(a,b))};return l}();x.TileClipper=u;u=function(){function l(){}l.prototype.setExtent=function(a){this._ratio=4096===a?1:4096/a};l.prototype.reset=function(a){this.type=a;this.lines=[];this.line=null};l.prototype.moveTo=function(a,b){this.line&&this.lines.push(this.line);this.line=[];var d=this._ratio;this.line.push(new m.Point(Math.round(a*
d),Math.round(b*d)))};l.prototype.lineTo=function(a,b){var d=this._ratio;this.line.push(new m.Point(Math.round(a*d),Math.round(b*d)))};l.prototype.close=function(){var a=this.line;a&&!a[0].isEqual(a[a.length-1])&&a.push(a[0])};l.prototype.result=function(){this.line&&this.lines.push(this.line);if(0===this.lines.length)return null;3===this.type&&1!==this._ratio&&y.simplify(4096,64,this.lines);return this.lines};return l}();x.SimpleBuilder=u;var y=function(){function l(){}l.simplify=function(a,b,d){if(d){var c=
-b,f=a+b,g=-b,e=a+b;a=[];b=[];for(var h=d.length,k=0;k<h;++k){var m=d[k];if(m&&!(2>m.length))for(var r=m[0],n=void 0,t=m.length,p=1;p<t;++p)n=m[p],r.x===n.x&&(r.x<=c&&(r.y>n.y?(a.push(k),a.push(p),a.push(0),a.push(-1)):(b.push(k),b.push(p),b.push(0),b.push(-1))),r.x>=f&&(r.y<n.y?(a.push(k),a.push(p),a.push(1),a.push(-1)):(b.push(k),b.push(p),b.push(1),b.push(-1)))),r.y===n.y&&(r.y<=g&&(r.x<n.x?(a.push(k),a.push(p),a.push(2),a.push(-1)):(b.push(k),b.push(p),b.push(2),b.push(-1))),r.y>=e&&(r.x>n.x?
(a.push(k),a.push(p),a.push(3),a.push(-1)):(b.push(k),b.push(p),b.push(3),b.push(-1)))),r=n}0!==a.length&&0!==b.length&&(l.fillParent(d,b,a),l.fillParent(d,a,b),c=[],l.calcDeltas(c,b,a),l.calcDeltas(c,a,b),l.addDeltas(c,d))}};l.fillParent=function(a,b,d){for(var c=d.length,f=b.length,g=0;g<f;g+=4){for(var e=b[g],h=b[g+1],k=b[g+2],l=a[e][h-1],e=a[e][h],h=8092,m=-1,n=0;n<c;n+=4)if(d[n+2]===k){var t=d[n],p=d[n+1],q=a[t][p-1],t=a[t][p];switch(k){case 0:case 1:v.between(l.y,q.y,t.y)&&v.between(e.y,q.y,
t.y)&&(q=Math.abs(t.y-q.y),q<h&&(h=q,m=n));break;case 2:case 3:v.between(l.x,q.x,t.x)&&v.between(e.x,q.x,t.x)&&(q=Math.abs(t.x-q.x),q<h&&(h=q,m=n))}}b[g+3]=m}};l.calcDeltas=function(a,b,d){for(var c=b.length,f=0;f<c;f+=4){var g=l.calcDelta(f,b,d,[]);a.push(b[f]);a.push(b[f+1]);a.push(b[f+2]);a.push(g)}};l.calcDelta=function(a,b,d,c){a=b[a+3];if(-1===a)return 0;var f=c.length;if(1<f&&c[f-2]===a)return 0;c.push(a);return l.calcDelta(a,d,b,c)+1};l.addDeltas=function(a,b){for(var d=a.length,c=0,f=0;f<
d;f+=4){var g=a[f+3];g>c&&(c=g)}for(f=0;f<d;f+=4){var e=b[a[f]],h=a[f+1],g=c-a[f+3];switch(a[f+2]){case 0:e[h-1].x-=g;e[h].x-=g;break;case 1:e[h-1].x+=g;e[h].x+=g;break;case 2:e[h-1].y-=g;e[h].y-=g;break;case 3:e[h-1].y+=g,e[h].y+=g}}a=b.length;for(d=0;d<a;++d)e=b[d],!e||2>e.length||e[e.length-1].x!==e[0].x&&e[e.length-1].y!==e[0].y&&e.push(e[0])};return l}()});