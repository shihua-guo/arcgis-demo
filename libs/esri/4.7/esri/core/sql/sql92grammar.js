// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define([],function(){function F(g,v,h,B){this.message=g;this.expected=v;this.found=h;this.location=B;this.name="SyntaxError";"function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,F)}(function(g,v){function h(){this.constructor=g}h.prototype=v.prototype;g.prototype=new h})(F,Error);F.buildMessage=function(g,v){function h(g){return g.charCodeAt(0).toString(16).toUpperCase()}function B(g){return g.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,
"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(g){return"\\x0"+h(g)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(g){return"\\x"+h(g)})}function F(g){return g.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(g){return"\\x0"+h(g)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(g){return"\\x"+h(g)})}var ba={literal:function(g){return'"'+B(g.text)+
'"'},"class":function(g){var l="",h;for(h=0;h<g.parts.length;h++)l+=g.parts[h]instanceof Array?F(g.parts[h][0])+"-"+F(g.parts[h][1]):F(g.parts[h]);return"["+(g.inverted?"^":"")+l+"]"},any:function(g){return"any character"},end:function(g){return"end of input"},other:function(g){return g.description}};return"Expected "+function(g){var l=Array(g.length),h;for(h=0;h<g.length;h++){var A=h,v;v=g[h];v=ba[v.type](v);l[A]=v}l.sort();if(0<l.length){for(g=h=1;h<l.length;h++)l[h-1]!==l[h]&&(l[g]=l[h],g++);l.length=
g}switch(l.length){case 1:return l[0];case 2:return l[0]+" or "+l[1];default:return l.slice(0,-1).join(", ")+", or "+l[l.length-1]}}(g)+" but "+(v?'"'+B(v)+'"':"end of input")+" found."};return{SyntaxError:F,parse:function(g,v){function h(a,b){return{type:"literal",text:a,ignoreCase:b}}function B(a,b,d){return{type:"class",parts:a,inverted:b,ignoreCase:d}}function Ma(a){var b=ca[a],c;if(!b){for(c=a-1;!ca[c];)c--;b=ca[c];for(b={line:b.line,column:b.column};c<a;)10===g.charCodeAt(c)?(b.line++,b.column=
1):b.column++,c++;ca[a]=b}return b}function ba(a,b){var c=Ma(a),e=Ma(b);return{start:{offset:a,line:c.line,column:c.column},end:{offset:b,line:e.line,column:e.column}}}function l(a){b<H||(b>H&&(H=b,da=[]),da.push(a))}function La(){var c,e,d;c=b;e=m();e!==a?(e=A(),e!==a?(d=m(),d!==a?c=e:(b=c,c=a)):(b=c,c=a)):(b=c,c=a);return c}function Ic(){var c,e,d,f,g,k,l,h;c=b;e=A();if(e!==a){d=[];f=b;g=m();g!==a?(k=Na(),k!==a?(l=m(),l!==a?(h=A(),h!==a?f=g=[g,k,l,h]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);for(;f!==
a;)d.push(f),f=b,g=m(),g!==a?(k=Na(),k!==a?(l=m(),l!==a?(h=A(),h!==a?f=g=[g,k,l,h]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);if(d!==a){c={type:"expr_list"};e=[e];for(f=0;f<d.length;f++)e.push(d[f][3]);c.value=e}else b=c,c=a}else b=c,c=a;return c}function A(){var c,e,d,f,g,k,l,h;c=b;e=xa();if(e!==a){d=[];f=b;g=m();g!==a?(k=Oa(),k!==a?(l=m(),l!==a?(h=xa(),h!==a?f=g=[g,k,l,h]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);for(;f!==a;)d.push(f),f=b,g=m(),g!==a?(k=Oa(),k!==a?(l=m(),l!==a?(h=xa(),h!==a?f=
g=[g,k,l,h]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);d!==a?c=e=P(e,d):(b=c,c=a)}else b=c,c=a;return c}function xa(){var c,e,d,f,g,k,l,h;c=b;e=Q();if(e!==a){d=[];f=b;g=m();g!==a?(k=ea(),k!==a?(l=m(),l!==a?(h=Q(),h!==a?f=g=[g,k,l,h]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);for(;f!==a;)d.push(f),f=b,g=m(),g!==a?(k=ea(),k!==a?(l=m(),l!==a?(h=Q(),h!==a?f=g=[g,k,l,h]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);d!==a?c=e=P(e,d):(b=c,c=a)}else b=c,c=a;return c}function Q(){var c,e,d,f,h;c=b;e=N();e===
a&&(e=b,33===g.charCodeAt(b)?(d=ed,b++):(d=a,0===k&&l(fd)),d!==a?(f=b,k++,61===g.charCodeAt(b)?(h=Pa,b++):(h=a,0===k&&l(Qa)),k--,h===a?f=void 0:(b=f,f=a),f!==a?e=d=[d,f]:(b=e,e=a)):(b=e,e=a));e!==a?(d=m(),d!==a?(f=Q(),f!==a?c=e={type:"unary_expr",operator:"NOT",expr:f}:(b=c,c=a)):(b=c,c=a)):(b=c,c=a);if(c===a)if(c=b,e=C(),e!==a)if(d=m(),d!==a){var q,r,V;d=[];f=b;h=m();h!==a?(q=Ra(),q!==a?(r=m(),r!==a?(V=C(),V!==a?f=h=[h,q,r,V]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);if(f!==a)for(;f!==a;)d.push(f),
f=b,h=m(),h!==a?(q=Ra(),q!==a?(r=m(),r!==a?(V=C(),V!==a?f=h=[h,q,r,V]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);else d=a;d!==a&&(d={type:"arithmetic",tail:d});d===a&&(d=b,f=ya(),f!==a?(h=m(),h!==a?(h=R(),h!==a?(h=m(),h!==a?(h=Ic(),h!==a?(q=m(),q!==a?(q=S(),q!==a?d=f={op:f,right:h}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,f=ya(),f!==a?(h=m(),h!==a?(h=R(),h!==a?(h=m(),h!==a?(h=S(),h!==a?d=f={op:f,right:{type:"expr_list",value:[]}}:(b=d,d=a)):(b=d,d=a)):
(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,f=ya(),f!==a?(h=m(),h!==a?(h=rc(),h!==a?d=f={op:f,right:h}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a))),d===a&&(d=b,h=N(),h!==a?(f=m(),f!==a?(f=Sa(),f!==a?(q=m(),q!==a?(q=C(),q!==a?(r=m(),r!==a?(r=ea(),r!==a?(h=m(),h!==a?(h=C(),h!==a?d=h={op:"NOT"+f,right:{type:"expr_list",value:[q,h]}}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,h=Sa(),h!==a?(f=m(),f!==a?(f=C(),f!==a?(q=m(),q!==a?(q=ea(),q!==a?(r=m(),
r!==a?(r=C(),r!==a?d=h={op:h,right:{type:"expr_list",value:[f,r]}}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)),d===a&&(d=b,f=Ta(),f!==a?(h=m(),h!==a?(h=N(),h!==a?(h=m(),h!==a?(h=C(),h!==a?d=f={op:f+"NOT",right:h}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,f=Ta(),f!==a?(h=m(),h!==a?(h=C(),h!==a?d=f={op:f,right:h}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)),d===a&&(d=b,f=Ua(),f!==a?(h=m(),h!==a?(h=Lb(),h!==a?(q=m(),q!==a?(q=b,g.substr(b,6).toLowerCase()===
gd?(r=g.substr(b,6),b+=6):(r=a,0===k&&l(hd)),r!==a?(r=b,k++,V=t(),k--,V===a?r=void 0:(b=r,r=a),r!==a?q="ESCAPE":(b=q,q=a)):(b=q,q=a),q!==a?(q=m(),q!==a?(q=sc(),q!==a?d=f={op:f,right:h,escape:q.value}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,f=Ua(),f!==a?(h=m(),h!==a?(h=Lb(),h!==a?d=f={op:f,right:h,escape:""}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a))))));d===a&&(d=null);d!==a?(c=e,e=d,""==e||void 0==e||null==e?e=c:(d=null,e=d="arithmetic"==e.type?P(c,e.tail):Va(e.op,
c,e.right,e.escape)),c=e):(b=c,c=a)}else b=c,c=a;else b=c,c=a;return c}function Ra(){var c;g.substr(b,2)===Wa?(c=Wa,b+=2):(c=a,0===k&&l(id));c===a&&(62===g.charCodeAt(b)?(c=jd,b++):(c=a,0===k&&l(kd)),c===a&&(g.substr(b,2)===Xa?(c=Xa,b+=2):(c=a,0===k&&l(ld)),c===a&&(g.substr(b,2)===Ya?(c=Ya,b+=2):(c=a,0===k&&l(md)),c===a&&(60===g.charCodeAt(b)?(c=nd,b++):(c=a,0===k&&l(od)),c===a&&(61===g.charCodeAt(b)?(c=Pa,b++):(c=a,0===k&&l(Qa)),c===a&&(g.substr(b,2)===Za?(c=Za,b+=2):(c=a,0===k&&l(pd))))))));return c}
function Ua(){var c,e,d,f;c=c=b;e=N();e!==a?(d=m(),d!==a?(f=$a(),f!==a?c=e=[e,d,f]:(b=c,c=a)):(b=c,c=a)):(b=c,c=a);c!==a&&(c=c[0]+" "+c[2]);c===a&&(c=$a());return c}function ya(){var c,e,d,f;c=c=b;e=N();e!==a?(d=m(),d!==a?(f=tc(),f!==a?c=e=[e,d,f]:(b=c,c=a)):(b=c,c=a)):(b=c,c=a);c!==a&&(c=c[0]+" "+c[2]);c===a&&(c=tc());return c}function C(){var c,e,d,f,g,h,k,l;c=b;e=fa();if(e!==a){d=[];f=b;g=m();g!==a?(h=ab(),h!==a?(k=m(),k!==a?(l=fa(),l!==a?f=g=[g,h,k,l]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);
for(;f!==a;)d.push(f),f=b,g=m(),g!==a?(h=ab(),h!==a?(k=m(),k!==a?(l=fa(),l!==a?f=g=[g,h,k,l]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);d!==a?c=e=P(e,d):(b=c,c=a)}else b=c,c=a;return c}function ab(){var c;43===g.charCodeAt(b)?(c=bb,b++):(c=a,0===k&&l(cb));c===a&&(45===g.charCodeAt(b)?(c=db,b++):(c=a,0===k&&l(eb)));return c}function fa(){var c,e,d,f,g,h,k,l;c=b;e=za();if(e!==a){d=[];f=b;g=m();g!==a?(h=fb(),h!==a?(k=m(),k!==a?(l=za(),l!==a?f=g=[g,h,k,l]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);for(;f!==
a;)d.push(f),f=b,g=m(),g!==a?(h=fb(),h!==a?(k=m(),k!==a?(l=za(),l!==a?f=g=[g,h,k,l]:(b=f,f=a)):(b=f,f=a)):(b=f,f=a)):(b=f,f=a);d!==a?c=e=P(e,d):(b=c,c=a)}else b=c,c=a;return c}function fb(){var c;42===g.charCodeAt(b)?(c=qd,b++):(c=a,0===k&&l(rd));c===a&&(47===g.charCodeAt(b)?(c=sd,b++):(c=a,0===k&&l(td)));return c}function za(){var c,e,d,f,h,q,r;r=sc();if(r===a){var v,B,F,H;v=b;var x,D,C,P;x=b;D=Mb();D!==a?(C=Jc(),C!==a?(P=Kc(),P!==a?x=D=parseFloat(D+C+P):(b=x,x=a)):(b=x,x=a)):(b=x,x=a);x===a&&(x=
b,D=Mb(),D!==a?(C=Jc(),C!==a?x=D=parseFloat(D+C):(b=x,x=a)):(b=x,x=a),x===a&&(x=b,D=Mb(),D!==a?(C=Kc(),C!==a?x=D=parseFloat(D+C):(b=x,x=a)):(b=x,x=a),x===a&&(x=b,D=Mb(),D!==a&&(D=parseFloat(D)),x=D)));B=x;B!==a?(F=b,k++,H=uc(),k--,H===a?F=void 0:(b=F,F=a),F!==a?v=B={type:"number",value:B}:(b=v,v=a)):(b=v,v=a);r=v;if(r===a){var Aa,W;Aa=b;var ga,N,Ba,ba;ga=b;g.substr(b,4).toLowerCase()===ud?(N=g.substr(b,4),b+=4):(N=a,0===k&&l(vd));N!==a?(Ba=b,k++,ba=t(),k--,ba===a?Ba=void 0:(b=Ba,Ba=a),Ba!==a?ga=N=
[N,Ba]:(b=ga,ga=a)):(b=ga,ga=a);W=ga;W!==a&&(W={type:"bool",value:!0});Aa=W;if(Aa===a){Aa=b;var ha,gb,Ca,ca;ha=b;g.substr(b,5).toLowerCase()===wd?(gb=g.substr(b,5),b+=5):(gb=a,0===k&&l(xd));gb!==a?(Ca=b,k++,ca=t(),k--,ca===a?Ca=void 0:(b=Ca,Ca=a),Ca!==a?ha=gb=[gb,Ca]:(b=ha,ha=a)):(b=ha,ha=a);W=ha;W!==a&&(W={type:"bool",value:!1});Aa=W}r=Aa;if(r===a){var Q,ia,hb,Da,ea;ia=b;g.substr(b,4).toLowerCase()===yd?(hb=g.substr(b,4),b+=4):(hb=a,0===k&&l(zd));hb!==a?(Da=b,k++,ea=t(),k--,ea===a?Da=void 0:(b=Da,
Da=a),Da!==a?ia=hb=[hb,Da]:(b=ia,ia=a)):(b=ia,ia=a);Q=ia;Q!==a&&(Q={type:"null",value:null});r=Q;if(r===a){var T,Z,wa,aa;T=b;var ja,Nb,ib,xa;ja=b;g.substr(b,4).toLowerCase()===Ad?(Nb=g.substr(b,4),b+=4):(Nb=a,0===k&&l(Bd));Nb!==a?(ib=b,k++,xa=t(),k--,xa===a?ib=void 0:(b=ib,ib=a),ib!==a?ja=Nb="DATE":(b=ja,ja=a)):(b=ja,ja=a);Z=ja;Z!==a?(wa=m(),wa!==a?(aa=Lb(),aa!==a?T=Z={type:"date",value:aa.value}:(b=T,T=a)):(b=T,T=a)):(b=T,T=a);r=T;if(r===a){var U,da,ya,fa;U=b;var ka,Ob,jb,za;ka=b;g.substr(b,9).toLowerCase()===
Cd?(Ob=g.substr(b,9),b+=9):(Ob=a,0===k&&l(Dd));Ob!==a?(jb=b,k++,za=t(),k--,za===a?jb=void 0:(b=jb,jb=a),jb!==a?ka=Ob="TIMESTAMP":(b=ka,ka=a)):(b=ka,ka=a);da=ka;da!==a?(ya=m(),ya!==a?(fa=Lb(),fa!==a?U=da={type:"timestamp",value:fa.value}:(b=U,U=a)):(b=U,U=a)):(b=U,U=a);r=U}}}}}c=r;if(c===a){var y,vc,La,Ma,Na,wc,Oa,Pa,Qa,xc,Ra,Sa;y=b;var la,Pb,kb,Ta;la=b;g.substr(b,7).toLowerCase()===Ed?(Pb=g.substr(b,7),b+=7):(Pb=a,0===k&&l(Fd));Pb!==a?(kb=b,k++,Ta=t(),k--,Ta===a?kb=void 0:(b=kb,kb=a),kb!==a?la=Pb=
"EXTRACT":(b=la,la=a)):(b=la,la=a);vc=la;if(vc!==a)if(La=m(),La!==a)if(Ma=R(),Ma!==a)if(Na=m(),Na!==a){var I,ma,Qb,lb,Ua;ma=b;g.substr(b,4).toLowerCase()===Gd?(Qb=g.substr(b,4),b+=4):(Qb=a,0===k&&l(Hd));Qb!==a?(lb=b,k++,Ua=t(),k--,Ua===a?lb=void 0:(b=lb,lb=a),lb!==a?ma=Qb="YEAR":(b=ma,ma=a)):(b=ma,ma=a);I=ma;if(I===a){var na,Rb,mb,Va;na=b;g.substr(b,5).toLowerCase()===Id?(Rb=g.substr(b,5),b+=5):(Rb=a,0===k&&l(Jd));Rb!==a?(mb=b,k++,Va=t(),k--,Va===a?mb=void 0:(b=mb,mb=a),mb!==a?na=Rb="MONTH":(b=na,
na=a)):(b=na,na=a);I=na;if(I===a){var oa,Sb,nb,Wa;oa=b;g.substr(b,3).toLowerCase()===Kd?(Sb=g.substr(b,3),b+=3):(Sb=a,0===k&&l(Ld));Sb!==a?(nb=b,k++,Wa=t(),k--,Wa===a?nb=void 0:(b=nb,nb=a),nb!==a?oa=Sb="DAY":(b=oa,oa=a)):(b=oa,oa=a);I=oa;if(I===a){var pa,Tb,ob,Xa;pa=b;g.substr(b,4).toLowerCase()===Md?(Tb=g.substr(b,4),b+=4):(Tb=a,0===k&&l(Nd));Tb!==a?(ob=b,k++,Xa=t(),k--,Xa===a?ob=void 0:(b=ob,ob=a),ob!==a?pa=Tb="HOUR":(b=pa,pa=a)):(b=pa,pa=a);I=pa;if(I===a){var qa,Ub,pb,Ya;qa=b;g.substr(b,6).toLowerCase()===
Od?(Ub=g.substr(b,6),b+=6):(Ub=a,0===k&&l(Pd));Ub!==a?(pb=b,k++,Ya=t(),k--,Ya===a?pb=void 0:(b=pb,pb=a),pb!==a?qa=Ub="MINUTE":(b=qa,qa=a)):(b=qa,qa=a);I=qa;if(I===a){var ra,Vb,qb,Za;ra=b;g.substr(b,6).toLowerCase()===Qd?(Vb=g.substr(b,6),b+=6):(Vb=a,0===k&&l(Rd));Vb!==a?(qb=b,k++,Za=t(),k--,Za===a?qb=void 0:(b=qb,qb=a),qb!==a?ra=Vb="SECOND":(b=ra,ra=a)):(b=ra,ra=a);I=ra}}}}}wc=I;wc!==a?(Oa=m(),Oa!==a?(Pa=yc(),Pa!==a?(Qa=m(),Qa!==a?(xc=A(),xc!==a?(Ra=m(),Ra!==a?(Sa=S(),Sa!==a?y=vc={type:"function",
name:"extract",args:{type:"expr_list",value:[{type:"string",value:wc},xc]}}:(b=y,y=a)):(b=y,y=a)):(b=y,y=a)):(b=y,y=a)):(b=y,y=a)):(b=y,y=a)):(b=y,y=a)}else b=y,y=a;else b=y,y=a;else b=y,y=a;else b=y,y=a;c=y;if(c===a){var w,zc,$a,ab,bb,Wb,cb,db,eb,Xb,fb,G,Ea,Ac,Bc,Cc;w=b;var sa,Yb,rb,zb;sa=b;g.substr(b,9).toLowerCase()===Sd?(Yb=g.substr(b,9),b+=9):(Yb=a,0===k&&l(Td));Yb!==a?(rb=b,k++,zb=t(),k--,zb===a?rb=void 0:(b=rb,rb=a),rb!==a?sa=Yb="SUBSTRING":(b=sa,sa=a)):(b=sa,sa=a);zc=sa;if(zc!==a)if($a=m(),
$a!==a)if(ab=R(),ab!==a)if(bb=m(),bb!==a)if(Wb=A(),Wb!==a)if(cb=m(),cb!==a)if(db=yc(),db!==a)if(eb=m(),eb!==a)if(Xb=A(),Xb!==a)if(fb=m(),fb!==a){G=b;var ta,Zb,sb,Ab;ta=b;g.substr(b,3).toLowerCase()===Ud?(Zb=g.substr(b,3),b+=3):(Zb=a,0===k&&l(Vd));Zb!==a?(sb=b,k++,Ab=t(),k--,Ab===a?sb=void 0:(b=sb,sb=a),sb!==a?ta=Zb="FOR":(b=ta,ta=a)):(b=ta,ta=a);Ea=ta;Ea!==a?(Ac=m(),Ac!==a?(Bc=A(),Bc!==a?(Cc=m(),Cc!==a?G=Ea=[Ea,Ac,Bc,Cc]:(b=G,G=a)):(b=G,G=a)):(b=G,G=a)):(b=G,G=a);G===a&&(G=null);G!==a?(Ea=S(),Ea!==
a?w=zc={type:"function",name:"substring",args:{type:"expr_list",value:G?[Wb,Xb,G[2]]:[Wb,Xb]}}:(b=w,w=a)):(b=w,w=a)}else b=w,w=a;else b=w,w=a;else b=w,w=a;else b=w,w=a;else b=w,w=a;else b=w,w=a;else b=w,w=a;else b=w,w=a;else b=w,w=a;else b=w,w=a;c=w;if(c===a){var n,Fa,$b,ac,bc,J,cc,Ga,dc,ec,Bb,Dc,Cb,Db;n=b;Fa=Lc();Fa!==a?($b=m(),$b!==a?(ac=R(),ac!==a?(bc=m(),bc!==a?(J=Mc(),J===a&&(J=null),J!==a?(cc=m(),cc!==a?(Ga=A(),Ga!==a?(dc=m(),dc!==a?(ec=yc(),ec!==a?(Bb=m(),Bb!==a?(Dc=A(),Dc!==a?(Cb=m(),Cb!==
a?(Db=S(),Db!==a?n=Fa={type:"function",name:"trim",args:{type:"expr_list",value:[{type:"string",value:null==J?"BOTH":J},Ga,Dc]}}:(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a);n===a&&(n=b,Fa=Lc(),Fa!==a?($b=m(),$b!==a?(ac=R(),ac!==a?(bc=m(),bc!==a?(J=Mc(),J===a&&(J=null),J!==a?(cc=m(),cc!==a?(Ga=A(),Ga!==a?(dc=m(),dc!==a?(ec=S(),ec!==a?n=Fa={type:"function",name:"trim",args:{type:"expr_list",value:[{type:"string",
value:null==J?"BOTH":J},Ga]}}:(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a)):(b=n,n=a));c=n;if(c===a){var z,Ec,Eb,Fb,Gb,Fc,Hb,Ib,Jb,Gc,Kb,Nc;z=b;var ua,fc,tb,Oc;ua=b;g.substr(b,8).toLowerCase()===Wd?(fc=g.substr(b,8),b+=8):(fc=a,0===k&&l(Xd));fc!==a?(tb=b,k++,Oc=t(),k--,Oc===a?tb=void 0:(b=tb,tb=a),tb!==a?ua=fc="POSITION":(b=ua,ua=a)):(b=ua,ua=a);Ec=ua;Ec!==a?(Eb=m(),Eb!==a?(Fb=R(),Fb!==a?(Gb=m(),Gb!==a?(Fc=A(),Fc!==a?(Hb=m(),Hb!==a?(Ib=tc(),Ib!==a?(Jb=m(),
Jb!==a?(Gc=A(),Gc!==a?(Kb=m(),Kb!==a?(Nc=S(),Nc!==a?z=Ec={type:"function",name:"position",args:{type:"expr_list",value:[Fc,Gc]}}:(b=z,z=a)):(b=z,z=a)):(b=z,z=a)):(b=z,z=a)):(b=z,z=a)):(b=z,z=a)):(b=z,z=a)):(b=z,z=a)):(b=z,z=a)):(b=z,z=a)):(b=z,z=a);c=z;if(c===a){var E,gc,Pc,Qc,Rc,Ha,Sc,Tc;E=b;var K,ub,vb,O;K=b;K=ub=Uc();if(K===a)if(K=b,96===g.charCodeAt(b)?(ub=Vc,b++):(ub=a,0===k&&l(Wc)),ub!==a){vb=[];Xc.test(g.charAt(b))?(O=g.charAt(b),b++):(O=a,0===k&&l(Yc));if(O!==a)for(;O!==a;)vb.push(O),Xc.test(g.charAt(b))?
(O=g.charAt(b),b++):(O=a,0===k&&l(Yc));else vb=a;vb!==a?(96===g.charCodeAt(b)?(O=Vc,b++):(O=a,0===k&&l(Wc)),O!==a?K=ub=vb.join(""):(b=K,K=a)):(b=K,K=a)}else b=K,K=a;gc=K;gc!==a?(Pc=m(),Pc!==a?(Qc=R(),Qc!==a?(Rc=m(),Rc!==a?(Ha=Ic(),Ha===a&&(Ha=null),Ha!==a?(Sc=m(),Sc!==a?(Tc=S(),Tc!==a?E=gc={type:"function",name:gc,args:Ha?Ha:{type:"expr_list",value:[]}}:(b=E,E=a)):(b=E,E=a)):(b=E,E=a)):(b=E,E=a)):(b=E,E=a)):(b=E,E=a)):(b=E,E=a);c=E;if(c===a){var hc,p,Ia,ic,Ja,jc,X,L,wb,Zc,$c;p=b;Ia=kc();if(Ia!==a)if(ic=
m(),ic!==a)if(Ja=A(),Ja!==a)if(jc=m(),jc!==a){X=[];for(L=lc();L!==a;)X.push(L),L=lc();X!==a?(L=m(),L!==a?(wb=mc(),wb!==a?p=Ia={type:"case_expression",format:"simple",operand:Ja,clauses:X,else:null}:(b=p,p=a)):(b=p,p=a)):(b=p,p=a)}else b=p,p=a;else b=p,p=a;else b=p,p=a;else b=p,p=a;if(p===a)if(p=b,Ia=kc(),Ia!==a)if(ic=m(),ic!==a)if(Ja=A(),Ja!==a)if(jc=m(),jc!==a){X=[];for(L=lc();L!==a;)X.push(L),L=lc();X!==a?(L=m(),L!==a?(wb=ad(),wb!==a?(Zc=m(),Zc!==a?($c=mc(),$c!==a?p=Ia={type:"case_expression",format:"simple",
operand:Ja,clauses:X,else:wb.value}:(b=p,p=a)):(b=p,p=a)):(b=p,p=a)):(b=p,p=a)):(b=p,p=a)}else b=p,p=a;else b=p,p=a;else b=p,p=a;else b=p,p=a;hc=p;if(hc===a){var u,Ka,nc,Y,M,xb,bd,cd;u=b;Ka=kc();if(Ka!==a)if(nc=m(),nc!==a){Y=[];for(M=oc();M!==a;)Y.push(M),M=oc();Y!==a?(M=m(),M!==a?(xb=mc(),xb!==a?u=Ka={type:"case_expression",format:"searched",clauses:Y,else:null}:(b=u,u=a)):(b=u,u=a)):(b=u,u=a)}else b=u,u=a;else b=u,u=a;if(u===a)if(u=b,Ka=kc(),Ka!==a)if(nc=m(),nc!==a){Y=[];for(M=oc();M!==a;)Y.push(M),
M=oc();Y!==a?(M=m(),M!==a?(xb=ad(),xb!==a?(bd=m(),bd!==a?(cd=mc(),cd!==a?u=Ka={type:"case_expression",format:"searched",clauses:Y,else:xb.value}:(b=u,u=a)):(b=u,u=a)):(b=u,u=a)):(b=u,u=a)):(b=u,u=a)}else b=u,u=a;else b=u,u=a;hc=u}c=hc;if(c===a){var yb,va,Hc,pc,qc;va=b;Hc=uc();if(Hc!==a){pc=[];for(qc=dd();qc!==a;)pc.push(qc),qc=dd();pc!==a?va=Hc+=pc.join(""):(b=va,va=a)}else b=va,va=a;yb=va;yb!==a&&(yb={type:"column_ref",table:"",column:yb});c=yb;c===a&&(c=rc(),c===a&&(c=b,e=R(),e!==a?(d=m(),d!==a?
(f=A(),f!==a?(h=m(),h!==a?(q=S(),q!==a?(f.paren=!0,c=e=f):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)))}}}}}}}return c}function Uc(){var c,e,d,f;c=b;e=uc();if(e!==a){d=[];for(f=t();f!==a;)d.push(f),f=t();d!==a?c=e+=d.join(""):(b=c,c=a)}else b=c,c=a;return c}function uc(){var c;Yd.test(g.charAt(b))?(c=g.charAt(b),b++):(c=a,0===k&&l(Zd));return c}function t(){var c;$d.test(g.charAt(b))?(c=g.charAt(b),b++):(c=a,0===k&&l(ae));return c}function dd(){var c;be.test(g.charAt(b))?(c=g.charAt(b),
b++):(c=a,0===k&&l(ce));return c}function rc(){var c,e,d;c=b;64===g.charCodeAt(b)?(e=de,b++):(e=a,0===k&&l(ee));e!==a?(d=Uc(),d!==a?c=e=[e,d]:(b=c,c=a)):(b=c,c=a);c!==a&&(c={type:"param",value:c[1]});return c}function Mc(){var c,e,d;c=b;g.substr(b,7).toLowerCase()===fe?(e=g.substr(b,7),b+=7):(e=a,0===k&&l(ge));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="LEADING":(b=c,c=a)):(b=c,c=a);c===a&&(c=b,g.substr(b,8).toLowerCase()===he?(e=g.substr(b,8),b+=8):(e=a,0===k&&l(ie)),e!==a?(e=b,k++,
d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="TRAILING":(b=c,c=a)):(b=c,c=a),c===a&&(c=b,g.substr(b,4).toLowerCase()===je?(e=g.substr(b,4),b+=4):(e=a,0===k&&l(ke)),e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="BOTH":(b=c,c=a)):(b=c,c=a)));return c}function Lb(){var b;b=sc();b===a&&(b=rc());return b}function sc(){var c,e,d;c=b;39===g.charCodeAt(b)?(e=zb,b++):(e=a,0===k&&l(Ab));e===a&&(g.substr(b,2)===Bb?(e=Bb,b+=2):(e=a,0===k&&l(le)));if(e!==a){e=[];d=b;g.substr(b,2)===Z?(d=Z,b+=2):(d=a,
0===k&&l(Cb));d!==a&&(d="'");d===a&&(Db.test(g.charAt(b))?(d=g.charAt(b),b++):(d=a,0===k&&l(Eb)));for(;d!==a;)e.push(d),d=b,g.substr(b,2)===Z?(d=Z,b+=2):(d=a,0===k&&l(Cb)),d!==a&&(d="'"),d===a&&(Db.test(g.charAt(b))?(d=g.charAt(b),b++):(d=a,0===k&&l(Eb)));e!==a?(39===g.charCodeAt(b)?(d=zb,b++):(d=a,0===k&&l(Ab)),d!==a?c=e={type:"string",value:e.join("")}:(b=c,c=a)):(b=c,c=a)}else b=c,c=a;return c}function oc(){var c,e,d;c=b;e=Fb();e!==a?(e=m(),e!==a?(e=A(),e!==a?(d=m(),d!==a?(d=Gb(),d!==a?(d=m(),
d!==a?(d=A(),d!==a?c=e={type:"when_clause",operand:e,value:d}:(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a);return c}function lc(){var c,e,d;c=b;e=Fb();e!==a?(e=m(),e!==a?(e=A(),e!==a?(d=m(),d!==a?(d=Gb(),d!==a?(d=m(),d!==a?(d=A(),d!==a?c=e={type:"when_clause",operand:e,value:d}:(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a);return c}function ad(){var c,e;c=b;var d,f;e=b;g.substr(b,4).toLowerCase()===me?(d=g.substr(b,4),b+=4):(d=a,0===k&&
l(ne));d!==a?(d=b,k++,f=t(),k--,f===a?d=void 0:(b=d,d=a),d!==a?e="ELSE":(b=e,e=a)):(b=e,e=a);e!==a?(e=m(),e!==a?(e=A(),e!==a?c={type:"else_clause",value:e}:(b=c,c=a)):(b=c,c=a)):(b=c,c=a);return c}function Mb(){var c,e,d;c=wa();c===a&&(c=b,45===g.charCodeAt(b)?(e=db,b++):(e=a,0===k&&l(eb)),e===a&&(43===g.charCodeAt(b)?(e=bb,b++):(e=a,0===k&&l(cb))),e!==a?(d=wa(),d!==a?c=e=e[0]+d:(b=c,c=a)):(b=c,c=a));return c}function Jc(){var c,e;c=b;46===g.charCodeAt(b)?(e=oe,b++):(e=a,0===k&&l(pe));e!==a?(e=wa(),
e===a&&(e=null),e!==a?c="."+(null!=e?e:""):(b=c,c=a)):(b=c,c=a);return c}function Kc(){var c,e,d;e=c=b;qe.test(g.charAt(b))?(d=g.charAt(b),b++):(d=a,0===k&&l(re));d!==a?(se.test(g.charAt(b))?(d=g.charAt(b),b++):(d=a,0===k&&l(te)),d===a&&(d=null),d!==a?e="e"+(null===d?"":d):(b=e,e=a)):(b=e,e=a);e!==a?(d=wa(),d!==a?c=e+d:(b=c,c=a)):(b=c,c=a);return c}function wa(){var b,e;b=[];e=Hb();if(e!==a)for(;e!==a;)b.push(e),e=Hb();else b=a;b!==a&&(b=b.join(""));return b}function Hb(){var c;ue.test(g.charAt(b))?
(c=g.charAt(b),b++):(c=a,0===k&&l(ve));return c}function tc(){var c,e,d;c=b;g.substr(b,2).toLowerCase()===we?(e=g.substr(b,2),b+=2):(e=a,0===k&&l(xe));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="IN":(b=c,c=a)):(b=c,c=a);return c}function Ta(){var c,e,d;c=b;g.substr(b,2).toLowerCase()===ye?(e=g.substr(b,2),b+=2):(e=a,0===k&&l(ze));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="IS":(b=c,c=a)):(b=c,c=a);return c}function $a(){var c,e,d;c=b;g.substr(b,4).toLowerCase()===Ae?
(e=g.substr(b,4),b+=4):(e=a,0===k&&l(Be));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="LIKE":(b=c,c=a)):(b=c,c=a);return c}function N(){var c,e,d;c=b;g.substr(b,3).toLowerCase()===Ce?(e=g.substr(b,3),b+=3):(e=a,0===k&&l(De));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="NOT":(b=c,c=a)):(b=c,c=a);return c}function ea(){var c,e,d;c=b;g.substr(b,3).toLowerCase()===Ee?(e=g.substr(b,3),b+=3):(e=a,0===k&&l(Fe));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="AND":(b=
c,c=a)):(b=c,c=a);return c}function Oa(){var c,e,d;c=b;g.substr(b,2).toLowerCase()===Ge?(e=g.substr(b,2),b+=2):(e=a,0===k&&l(He));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="OR":(b=c,c=a)):(b=c,c=a);return c}function Sa(){var c,e,d;c=b;g.substr(b,7).toLowerCase()===Ie?(e=g.substr(b,7),b+=7):(e=a,0===k&&l(Je));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="BETWEEN":(b=c,c=a)):(b=c,c=a);return c}function yc(){var c,e,d;c=b;g.substr(b,4).toLowerCase()===Ke?(e=g.substr(b,4),
b+=4):(e=a,0===k&&l(Le));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="FROM":(b=c,c=a)):(b=c,c=a);return c}function Lc(){var c,e,d;c=b;g.substr(b,4).toLowerCase()===Me?(e=g.substr(b,4),b+=4):(e=a,0===k&&l(Ne));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="TRIM":(b=c,c=a)):(b=c,c=a);return c}function kc(){var c,e,d;c=b;g.substr(b,4).toLowerCase()===Oe?(e=g.substr(b,4),b+=4):(e=a,0===k&&l(Pe));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="CASE":(b=c,c=a)):(b=c,
c=a);return c}function mc(){var c,e,d;c=b;g.substr(b,3).toLowerCase()===Qe?(e=g.substr(b,3),b+=3):(e=a,0===k&&l(Re));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="END":(b=c,c=a)):(b=c,c=a);return c}function Fb(){var c,e,d;c=b;g.substr(b,4).toLowerCase()===Se?(e=g.substr(b,4),b+=4):(e=a,0===k&&l(Te));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="WHEN":(b=c,c=a)):(b=c,c=a);return c}function Gb(){var c,e,d;c=b;g.substr(b,4).toLowerCase()===Ue?(e=g.substr(b,4),b+=4):(e=a,0===
k&&l(Ve));e!==a?(e=b,k++,d=t(),k--,d===a?e=void 0:(b=e,e=a),e!==a?c="THEN":(b=c,c=a)):(b=c,c=a);return c}function Na(){var c;44===g.charCodeAt(b)?(c=We,b++):(c=a,0===k&&l(Xe));return c}function R(){var c;40===g.charCodeAt(b)?(c=Ye,b++):(c=a,0===k&&l(Ze));return c}function S(){var c;41===g.charCodeAt(b)?(c=$e,b++):(c=a,0===k&&l(af));return c}function m(){var b,e;b=[];for(e=Ib();e!==a;)b.push(e),e=Ib();return b}function Ib(){var c;bf.test(g.charAt(b))?(c=g.charAt(b),b++):(c=a,0===k&&l(cf));return c}
function Va(a,b,d,f){a={type:"binary_expr",operator:a,left:b,right:d};void 0!==f&&(a.escape=f);return a}function P(a,b){for(var c=0;c<b.length;c++)a=Va(b[c][1],a,b[c][3]);return a}v=void 0!==v?v:{};var a={},Jb={start:La},Kb=La,ed="!",fd=h("!",!1),Pa="\x3d",Qa=h("\x3d",!1),Wa="\x3e\x3d",id=h("\x3e\x3d",!1),jd="\x3e",kd=h("\x3e",!1),Xa="\x3c\x3d",ld=h("\x3c\x3d",!1),Ya="\x3c\x3e",md=h("\x3c\x3e",!1),nd="\x3c",od=h("\x3c",!1),Za="!\x3d",pd=h("!\x3d",!1),bb="+",cb=h("+",!1),db="-",eb=h("-",!1),qd="*",
rd=h("*",!1),sd="/",td=h("/",!1),Yd=/^[A-Za-z_\x80-\uFFFF]/,Zd=B([["A","Z"],["a","z"],"_",["\u0080","\uffff"]],!1,!1),$d=/^[A-Za-z0-9_]/,ae=B([["A","Z"],["a","z"],["0","9"],"_"],!1,!1),be=/^[A-Za-z0-9_.\x80-\uFFFF]/,ce=B([["A","Z"],["a","z"],["0","9"],"_",".",["\u0080","\uffff"]],!1,!1),de="@",ee=h("@",!1),zb="'",Ab=h("'",!1),Bb="N'",le=h("N'",!1),Z="''",Cb=h("''",!1),Db=/^[^']/,Eb=B(["'"],!0,!1),oe=".",pe=h(".",!1),ue=/^[0-9]/,ve=B([["0","9"]],!1,!1),qe=/^[eE]/,re=B(["e","E"],!1,!1),se=/^[+\-]/,
te=B(["+","-"],!1,!1),yd="null",zd=h("NULL",!0),ud="true",vd=h("TRUE",!0),wd="false",xd=h("FALSE",!0),we="in",xe=h("IN",!0),ye="is",ze=h("IS",!0),Ae="like",Be=h("LIKE",!0),gd="escape",hd=h("ESCAPE",!0),Ce="not",De=h("NOT",!0),Ee="and",Fe=h("AND",!0),Ge="or",He=h("OR",!0),Ie="between",Je=h("BETWEEN",!0),Ke="from",Le=h("FROM",!0),Ud="for",Vd=h("FOR",!0),Sd="substring",Td=h("SUBSTRING",!0),Ed="extract",Fd=h("EXTRACT",!0),Me="trim",Ne=h("TRIM",!0),Wd="position",Xd=h("POSITION",!0),Cd="timestamp",Dd=h("TIMESTAMP",
!0),Ad="date",Bd=h("DATE",!0),fe="leading",ge=h("LEADING",!0),he="trailing",ie=h("TRAILING",!0),je="both",ke=h("BOTH",!0),Gd="year",Hd=h("YEAR",!0),Id="month",Jd=h("MONTH",!0),Kd="day",Ld=h("DAY",!0),Md="hour",Nd=h("HOUR",!0),Od="minute",Pd=h("MINUTE",!0),Qd="second",Rd=h("SECOND",!0),Oe="case",Pe=h("CASE",!0),Qe="end",Re=h("END",!0),Se="when",Te=h("WHEN",!0),Ue="then",Ve=h("THEN",!0),me="else",ne=h("ELSE",!0),We=",",Xe=h(",",!1),Ye="(",Ze=h("(",!1),$e=")",af=h(")",!1),bf=/^[ \t\n\r]/,cf=B([" ","\t",
"\n","\r"],!1,!1),Vc="`",Wc=h("`",!1),Xc=/^[^`]/,Yc=B(["`"],!0,!1),b=0,ca=[{line:1,column:1}],H=0,da=[],k=0,aa;if("startRule"in v){if(!(v.startRule in Jb))throw Error("Can't start parsing from rule \""+v.startRule+'".');Kb=Jb[v.startRule]}aa=Kb();if(aa!==a&&b===g.length)return aa;aa!==a&&b<g.length&&l({type:"end"});throw function(a,b,d){return new F(F.buildMessage(a,b),a,b,d)}(da,H<g.length?g.charAt(H):null,H<g.length?ba(H,H+1):ba(H,H));}}});