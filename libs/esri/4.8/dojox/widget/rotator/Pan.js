//>>built
define("dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/dom-style dojo/_base/fx dojo/fx".split(" "),function(y,v,q,r,m,w){function k(a,b){var g=b.next.node,d=b.rotatorBox,e=a%2,c=e?"left":"top";a=(e?d.w:d.h)*(2>a?-1:1);d={};e={};r.set(g,"display","");d[c]={start:0,end:-a};e[c]={start:a,end:0};return w.combine([m.animateProperty({node:b.current.node,duration:b.duration,properties:d,easing:b.easing}),m.animateProperty({node:g,duration:b.duration,properties:e,easing:b.easing})])}function x(a,
b){r.set(a,"zIndex",b)}var n={pan:function(a){var b=a.wrap,g=a.rotator.panes,d=g.length,e=d,c=a.current.idx,l=a.next.idx,f=Math.abs(l-c),h=Math.abs(d-Math.max(c,l)+Math.min(c,l))%d,t=c<l,p=3,m=[],n=[],u=a.duration;if(!b&&!t||b&&(t&&f>h||!t&&f<h))p=1;if(a.continuous){a.quick&&(u=Math.round(u/(b?Math.min(h,f):f)));x(g[c].node,e--);for(b=3==p;;){f=c;b?++c>=d&&(c=0):0>--c&&(c=d-1);f=g[f];h=g[c];x(h.node,e--);m.push(k(p,q.mixin({easing:function(a){return a}},a,{current:f,next:h,duration:u})));if(b&&c==
l||!b&&c==l)break;n.push(h.node)}a=w.chain(m);var z=v.connect(a,"onEnd",function(){v.disconnect(z);y.forEach(n,function(a){r.set(a,{display:"none",left:0,opacity:1,top:0,zIndex:0})})});return a}return k(p,a)},panDown:function(a){return k(0,a)},panRight:function(a){return k(1,a)},panUp:function(a){return k(2,a)},panLeft:function(a){return k(3,a)}};q.mixin(q.getObject("dojox.widget.rotator"),n);return n});