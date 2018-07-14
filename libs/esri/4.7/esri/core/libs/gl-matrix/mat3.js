// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["./common"],function(q){var f={create:function(){var a=new q.ARRAY_TYPE(9);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a},fromMat4:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[4];a[4]=b[5];a[5]=b[6];a[6]=b[8];a[7]=b[9];a[8]=b[10];return a},clone:function(a){var b=new q.ARRAY_TYPE(9);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];
a[6]=b[6];a[7]=b[7];a[8]=b[8];return a},fromValues:function(a,b,c,d,e,g,k,p,m){var h=new q.ARRAY_TYPE(9);h[0]=a;h[1]=b;h[2]=c;h[3]=d;h[4]=e;h[5]=g;h[6]=k;h[7]=p;h[8]=m;return h},set:function(a,b,c,d,e,g,k,p,m,h){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=g;a[5]=k;a[6]=p;a[7]=m;a[8]=h;return a},identity:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a},transpose:function(a,b){if(a===b){var c=b[1],d=b[2],e=b[5];a[1]=b[3];a[2]=b[6];a[3]=c;a[5]=b[7];a[6]=d;a[7]=e}else a[0]=b[0],
a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8];return a},invert:function(a,b){var c=b[0],d=b[1],e=b[2],g=b[3],k=b[4],p=b[5],m=b[6],h=b[7];b=b[8];var r=b*k-p*h,n=-b*g+p*m,f=h*g-k*m,l=c*r+d*n+e*f;if(!l)return null;l=1/l;a[0]=r*l;a[1]=(-b*d+e*h)*l;a[2]=(p*d-e*k)*l;a[3]=n*l;a[4]=(b*c-e*m)*l;a[5]=(-p*c+e*g)*l;a[6]=f*l;a[7]=(-h*c+d*m)*l;a[8]=(k*c-d*g)*l;return a},adjoint:function(a,b){var c=b[0],d=b[1],e=b[2],g=b[3],k=b[4],p=b[5],m=b[6],h=b[7];b=b[8];a[0]=k*b-p*h;a[1]=e*
h-d*b;a[2]=d*p-e*k;a[3]=p*m-g*b;a[4]=c*b-e*m;a[5]=e*g-c*p;a[6]=g*h-k*m;a[7]=d*m-c*h;a[8]=c*k-d*g;return a},determinant:function(a){var b=a[3],c=a[4],d=a[5],e=a[6],g=a[7],k=a[8];return a[0]*(k*c-d*g)+a[1]*(-k*b+d*e)+a[2]*(g*b-c*e)},multiply:function(a,b,c){var d=b[0],e=b[1],g=b[2],k=b[3],p=b[4],m=b[5],h=b[6],r=b[7];b=b[8];var n=c[0],f=c[1],l=c[2],q=c[3],t=c[4],u=c[5],v=c[6],x=c[7];c=c[8];a[0]=n*d+f*k+l*h;a[1]=n*e+f*p+l*r;a[2]=n*g+f*m+l*b;a[3]=q*d+t*k+u*h;a[4]=q*e+t*p+u*r;a[5]=q*g+t*m+u*b;a[6]=v*d+
x*k+c*h;a[7]=v*e+x*p+c*r;a[8]=v*g+x*m+c*b;return a}};f.mul=f.multiply;f.translate=function(a,b,c){var d=b[0],e=b[1],g=b[2],k=b[3],p=b[4],m=b[5],h=b[6],f=b[7];b=b[8];var n=c[0];c=c[1];a[0]=d;a[1]=e;a[2]=g;a[3]=k;a[4]=p;a[5]=m;a[6]=n*d+c*k+h;a[7]=n*e+c*p+f;a[8]=n*g+c*m+b;return a};f.rotate=function(a,b,c){var d=b[0],e=b[1],g=b[2],k=b[3],p=b[4],m=b[5],h=b[6],f=b[7];b=b[8];var n=Math.sin(c);c=Math.cos(c);a[0]=c*d+n*k;a[1]=c*e+n*p;a[2]=c*g+n*m;a[3]=c*k-n*d;a[4]=c*p-n*e;a[5]=c*m-n*g;a[6]=h;a[7]=f;a[8]=
b;return a};f.scale=function(a,b,c){var d=c[0];c=c[1];a[0]=d*b[0];a[1]=d*b[1];a[2]=d*b[2];a[3]=c*b[3];a[4]=c*b[4];a[5]=c*b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];return a};f.fromTranslation=function(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=b[0];a[7]=b[1];a[8]=1;return a};f.fromRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=0;a[3]=-c;a[4]=b;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};f.fromScaling=function(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=0;a[4]=b[1];a[5]=0;a[6]=0;a[7]=0;
a[8]=1;return a};f.fromMat2d=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=0;a[3]=b[2];a[4]=b[3];a[5]=0;a[6]=b[4];a[7]=b[5];a[8]=1;return a};f.fromQuat=function(a,b){var c=b[0],d=b[1],e=b[2];b=b[3];var g=c+c,k=d+d,p=e+e,c=c*g,m=d*g,d=d*k,h=e*g,f=e*k,e=e*p,g=b*g,k=b*k;b*=p;a[0]=1-d-e;a[3]=m-b;a[6]=h+k;a[1]=m+b;a[4]=1-c-e;a[7]=f-g;a[2]=h-k;a[5]=f+g;a[8]=1-c-d;return a};f.normalFromMat4=function(a,b){var c=b[0],d=b[1],e=b[2],g=b[3],k=b[4],f=b[5],m=b[6],h=b[7],r=b[8],n=b[9],q=b[10],l=b[11],w=b[12],t=b[13],u=
b[14];b=b[15];var v=c*f-d*k,x=c*m-e*k,y=c*h-g*k,F=d*m-e*f,z=d*h-g*f,A=e*h-g*m,B=r*t-n*w,C=r*u-q*w,r=r*b-l*w,D=n*u-q*t,n=n*b-l*t,q=q*b-l*u,l=v*q-x*n+y*D+F*r-z*C+A*B;if(!l)return null;l=1/l;a[0]=(f*q-m*n+h*D)*l;a[1]=(m*r-k*q-h*C)*l;a[2]=(k*n-f*r+h*B)*l;a[3]=(e*n-d*q-g*D)*l;a[4]=(c*q-e*r+g*C)*l;a[5]=(d*r-c*n-g*B)*l;a[6]=(t*A-u*z+b*F)*l;a[7]=(u*y-w*A-b*x)*l;a[8]=(w*z-t*y+b*v)*l;return a};f.str=function(a){return"mat3("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+
")"};f.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2))};f.add=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];a[6]=b[6]+c[6];a[7]=b[7]+c[7];a[8]=b[8]+c[8];return a};f.subtract=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];a[6]=b[6]-c[6];a[7]=b[7]-
c[7];a[8]=b[8]-c[8];return a};f.sub=f.subtract;f.multiplyScalar=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;a[6]=b[6]*c;a[7]=b[7]*c;a[8]=b[8]*c;return a};f.multiplyScalarAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;a[6]=b[6]+c[6]*d;a[7]=b[7]+c[7]*d;a[8]=b[8]+c[8]*d;return a};f.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&
a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]};f.equals=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],p=a[5],m=a[6],h=a[7],r=a[8],n=b[0],E=b[1],l=b[2],w=b[3],t=b[4],u=b[5];a=a[6];var v=b[7];b=b[8];return Math.abs(c-n)<=q.EPSILON*Math.max(1,Math.abs(c),Math.abs(n))&&Math.abs(d-E)<=q.EPSILON*Math.max(1,Math.abs(d),Math.abs(E))&&Math.abs(e-l)<=q.EPSILON*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(g-w)<=q.EPSILON*Math.max(1,Math.abs(g),Math.abs(w))&&Math.abs(f-t)<=q.EPSILON*Math.max(1,Math.abs(f),
Math.abs(t))&&Math.abs(p-u)<=q.EPSILON*Math.max(1,Math.abs(p),Math.abs(u))&&Math.abs(m-a)<=q.EPSILON*Math.max(1,Math.abs(m),Math.abs(a))&&Math.abs(h-v)<=q.EPSILON*Math.max(1,Math.abs(h),Math.abs(v))&&Math.abs(r-b)<=q.EPSILON*Math.max(1,Math.abs(r),Math.abs(b))};return f});