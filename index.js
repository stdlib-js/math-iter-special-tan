// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterTan=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[w]=n:delete r[w],e}:function(r){return s.call(r)},g=Boolean.prototype.toString;var A=b();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return p(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var N=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),T=N.document&&N.document.childNodes,F=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(I,"REGEXP",P);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function x(r){return null!==r&&"object"==typeof r}function G(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=P.exec(e.toString()))return t[1]}return x(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(x,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!V(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(x));var H="function"==typeof y||"object"==typeof F||"function"==typeof T?function(r){return G(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?G(r).toLowerCase():t};function B(r){return"function"===H(r)}function L(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&B(r.next)}function M(r){return"number"==typeof r}var k=Number,W=k.prototype.toString;var C=b();function Y(r){return"object"==typeof r&&(r instanceof k||(C?function(r){try{return W.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return M(r)||Y(r)}l(R,"isPrimitive",M),l(R,"isObject",Y);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var q,z=Object.getPrototypeOf;q=B(Object.getPrototypeOf)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=q;var J=Object.prototype;function K(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),D(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&B(t.constructor)&&"[object Function]"===j(t.constructor)&&m(t,"isPrototypeOf")&&B(t.isPrototypeOf)&&(t===J||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}function Q(r,t){return K(t)?(m(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function Z(r,t,n){var e,o,u,i;if(!L(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!B(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Q(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),X&&B(r[X])&&l(o,X,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:M(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return Z(r[X](),t,e)}}var $="function"==typeof Uint32Array;var rr="function"==typeof Uint32Array?Uint32Array:null;var tr,nr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=($&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er=tr,or="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var ir,fr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur([1,3.14,-3.14,NaN]),n=t,r=(or&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var ar=ir,cr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var yr,pr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr(t=[1,3.14,-3.14,256,257]),n=t,r=(cr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var vr=yr,br="function"==typeof Uint16Array;var sr="function"==typeof Uint16Array?Uint16Array:null;var dr,mr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr,jr={uint16:dr,uint8:vr};(wr=new jr.uint16(1))[0]=4660;var gr=52===new jr.uint8(wr.buffer)[0],Ar=!0===gr?1:0,hr=new ar(1),_r=new er(hr.buffer);function Or(r){return hr[0]=r,_r[Ar]}var Ur=!0===gr?0:1,Sr=new ar(1),Er=new er(Sr.buffer);function Nr(r,t){return Sr[0]=r,Er[Ur]=t>>>0,Sr[0]}function Tr(r,t,n){var e,o,u,i,f,a,c,l,y;return(o=2147483647&(e=Or(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-t),t=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),i=t+y*((f=y*r)*(i+c)+t),l=r+(i+=.3333333333333341*f),o>=1072010280?(1-(e>>30&2))*((c=n)-2*(r-(l*l/(l+c)-i))):1===n?l:(Nr(y=l,0),c=i-(y-r),Nr(a=u=-1/l,0),a+u*((f=1+a*y)+a*c))}var Fr,Ir,Pr=!0===gr?0:1,Vr=new ar(1),xr=new er(Vr.buffer);!0===gr?(Fr=1,Ir=0):(Fr=0,Ir=1);var Gr={HIGH:Fr,LOW:Ir},Hr=new ar(1),Br=new er(Hr.buffer),Lr=Gr.HIGH,Mr=Gr.LOW;function kr(r,t){return Br[Lr]=r,Br[Mr]=t,Hr[0]}var Wr=Math.floor,Cr=Number.POSITIVE_INFINITY,Yr=k.NEGATIVE_INFINITY;function Rr(r){return r!=r}function Xr(r){return r===Cr||r===Yr}var qr,zr;!0===gr?(qr=1,zr=0):(qr=0,zr=1);var Dr={HIGH:qr,LOW:zr},Jr=new ar(1),Kr=new er(Jr.buffer),Qr=Dr.HIGH,Zr=Dr.LOW;function $r(r,t,n,e){return Jr[0]=r,t[e]=Kr[Qr],t[e+n]=Kr[Zr],t}function rt(r){return $r(r,[0,0],1,0)}l(rt,"assign",$r);var tt=[0,0];function nt(r,t,n,e){return Rr(r)||Xr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return nt(r,[0,0],1,0)}),"assign",nt);var et=[0,0],ot=[0,0];function ut(r,t){var n,e,o,u,i,f;return 0===t||0===r||Rr(r)||Xr(r)?r:(nt(r,et,1,0),t+=et[1],t+=function(r){var t=Or(r);return(t=(2146435072&t)>>>20)-1023|0}(r=et[0]),t<-1074?(o=0,u=r,rt.assign(o,tt,1,0),i=tt[0],i&=2147483647,f=Or(u),kr(i|=f&=2147483648,tt[1])):t>1023?r<0?Yr:Cr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,rt.assign(r,ot,1,0),n=ot[0],n&=2148532223,e*kr(n|=t+1023<<20,ot[1])))}function it(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var ft=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],at=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ct=16777216,lt=5.960464477539063e-8,yt=it(20),pt=it(20),vt=it(20),bt=it(20);function st(r,t,n,e,o,u,i,f,a){var c,l,y,p,v,b,s,d,m;for(p=u,m=e[n],d=n,v=0;d>0;v++)l=lt*m|0,bt[v]=m-ct*l|0,m=e[d-1]+l,d-=1;if(m=ut(m,o),m-=8*Wr(.125*m),m-=s=0|m,y=0,o>0?(s+=v=bt[n-1]>>24-o,bt[n-1]-=v<<24-o,y=bt[n-1]>>23-o):0===o?y=bt[n-1]>>23:m>=.5&&(y=2),y>0){for(s+=1,c=0,v=0;v<n;v++)d=bt[v],0===c?0!==d&&(c=1,bt[v]=16777216-d):bt[v]=16777215-d;if(o>0)switch(o){case 1:bt[n-1]&=8388607;break;case 2:bt[n-1]&=4194303}2===y&&(m=1-m,0!==c&&(m-=ut(1,o)))}if(0===m){for(d=0,v=n-1;v>=u;v--)d|=bt[v];if(0===d){for(b=1;0===bt[u-b];b++);for(v=n+1;v<=n+b;v++){for(a[f+v]=ft[i+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return st(r,t,n+=b,e,o,u,i,f,a)}}if(0===m)for(n-=1,o-=24;0===bt[n];)n-=1,o-=24;else(m=ut(m,-o))>=ct?(l=lt*m|0,bt[n]=m-ct*l|0,o+=24,bt[n+=1]=l):bt[n]=0|m;for(l=ut(1,o),v=n;v>=0;v--)e[v]=l*bt[v],l*=lt;for(v=n;v>=0;v--){for(l=0,b=0;b<=p&&b<=n-v;b++)l+=at[b]*e[v+b];vt[n-v]=l}for(l=0,v=n;v>=0;v--)l+=vt[v];for(t[0]=0===y?l:-l,l=vt[0]-l,v=1;v<=n;v++)l+=vt[v];return t[1]=0===y?l:-l,7&s}function dt(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)yt[a]=c<0?0:ft[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*yt[i+(a-c)];pt[a]=o}return 4,st(r,t,4,pt,f,4,u,i,yt)}var mt=Math.round;function wt(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=mt(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Or(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Or(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var jt=1.5707963267341256,gt=6077100506506192e-26,At=2*gt,ht=3*gt,_t=4*gt,Ot=[0,0,0],Ut=[0,0];function St(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Or(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?wt(r,o,t):o<=1073928572?r>0?(a=r-jt,t[0]=a-gt,t[1]=a-t[0]-gt,1):(a=r+jt,t[0]=a+gt,t[1]=a-t[0]+gt,-1):r>0?(a=r-2*jt,t[0]=a-At,t[1]=a-t[0]-At,2):(a=r+2*jt,t[0]=a+At,t[1]=a-t[0]+At,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?wt(r,o,t):r>0?(a=r-3*jt,t[0]=a-ht,t[1]=a-t[0]-ht,3):(a=r+3*jt,t[0]=a+ht,t[1]=a-t[0]+ht,-3):1075388923===o?wt(r,o,t):r>0?(a=r-4*jt,t[0]=a-_t,t[1]=a-t[0]-_t,4):(a=r+4*jt,t[0]=a+_t,t[1]=a-t[0]+_t,-4);if(o<1094263291)return wt(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Vr[0]=r,xr[Pr]}(r),a=kr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Ot[i]=0|a,a=16777216*(a-Ot[i]);for(Ot[2]=a,u=3;0===Ot[u-1];)u-=1;return f=dt(Ot,Ut,e,u),r<0?(t[0]=-Ut[0],t[1]=-Ut[1],-f):(t[0]=Ut[0],t[1]=Ut[1],f)}var Et=[0,0];function Nt(r){var t,n;return t=Or(r),(t&=2147483647)<=1072243195?t<1044381696?r:Tr(r,0,1):t>=2146435072?NaN:(n=St(r,Et),Tr(Et[0],Et[1],1-((1&n)<<1)))}return function(r){return Z(r,Nt)}}));
//# sourceMappingURL=index.js.map
