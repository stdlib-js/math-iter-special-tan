// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterTan=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return v&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var t,n,e;if(null==r)return b.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[m]=n:delete r[m],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var A=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return p(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof I||"function"==typeof F?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function R(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function X(r){return k(r)||R(r)}l(X,"isPrimitive",k),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),q&&L(r[q])&&l(o,q,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[q](),t,e)}}var rr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var nr,er="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=nr,ur="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var fr,ar="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir([1,3.14,-3.14,NaN]),n=t,r=(ur&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var pr,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),n=t,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var sr=pr,br="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,gr={uint16:wr,uint8:sr};(jr=new gr.uint16(1))[0]=4660;var Ar=52===new gr.uint8(jr.buffer)[0],hr=!0===Ar?1:0,_r=new cr(1),Or=new or(_r.buffer);function Ur(r){return _r[0]=r,Or[hr]}var Sr=!0===Ar?0:1,Er=new cr(1),Nr=new or(Er.buffer);function Tr(r,t){return Er[0]=r,Nr[Sr]=t>>>0,Er[0]}function Fr(r,t,n){var e,o,u,i,f,a,c,l,y;return(o=2147483647&(e=Ur(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-t),t=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),i=t+y*((f=y*r)*(i+c)+t),l=r+(i+=.3333333333333341*f),o>=1072010280?(1-(e>>30&2))*((c=n)-2*(r-(l*l/(l+c)-i))):1===n?l:(Tr(y=l,0),c=i-(y-r),Tr(a=u=-1/l,0),a+u*((f=1+a*y)+a*c))}var Ir,Pr,Vr=!0===Ar?0:1,xr=new cr(1),Gr=new or(xr.buffer);!0===Ar?(Ir=1,Pr=0):(Ir=0,Pr=1);var Hr={HIGH:Ir,LOW:Pr},Br=new cr(1),Lr=new or(Br.buffer),Mr=Hr.HIGH,kr=Hr.LOW;function Wr(r,t){return Lr[Mr]=r,Lr[kr]=t,Br[0]}var Cr=Math.floor,Yr=Number.POSITIVE_INFINITY,Rr=W.NEGATIVE_INFINITY;function Xr(r){return r!=r}function qr(r){return r===Yr||r===Rr}var zr,Dr;!0===Ar?(zr=1,Dr=0):(zr=0,Dr=1);var Jr={HIGH:zr,LOW:Dr},Kr=new cr(1),Qr=new or(Kr.buffer),Zr=Jr.HIGH,$r=Jr.LOW;function rt(r,t,n,e){return Kr[0]=r,t[e]=Qr[Zr],t[e+n]=Qr[$r],t}function tt(r){return rt(r,[0,0],1,0)}l(tt,"assign",rt);var nt=[0,0];function et(r,t,n,e){return Xr(r)||qr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return et(r,[0,0],1,0)}),"assign",et);var ot=[0,0],ut=[0,0];function it(r,t){var n,e,o,u,i,f;return 0===t||0===r||Xr(r)||qr(r)?r:(et(r,ot,1,0),t+=ot[1],t+=function(r){var t=Ur(r);return(t=(2146435072&t)>>>20)-1023|0}(r=ot[0]),t<-1074?(o=0,u=r,tt.assign(o,nt,1,0),i=nt[0],i&=2147483647,f=Ur(u),Wr(i|=f&=2147483648,nt[1])):t>1023?r<0?Rr:Yr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,tt.assign(r,ut,1,0),n=ut[0],n&=2148532223,e*Wr(n|=t+1023<<20,ut[1])))}function ft(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var at=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ct=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],lt=16777216,yt=5.960464477539063e-8,pt=ft(20),vt=ft(20),st=ft(20),bt=ft(20);function dt(r,t,n,e,o,u,i,f,a){var c,l,y,p,v,s,b,d,w;for(p=u,w=e[n],d=n,v=0;d>0;v++)l=yt*w|0,bt[v]=w-lt*l|0,w=e[d-1]+l,d-=1;if(w=it(w,o),w-=8*Cr(.125*w),w-=b=0|w,y=0,o>0?(b+=v=bt[n-1]>>24-o,bt[n-1]-=v<<24-o,y=bt[n-1]>>23-o):0===o?y=bt[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<n;v++)d=bt[v],0===c?0!==d&&(c=1,bt[v]=16777216-d):bt[v]=16777215-d;if(o>0)switch(o){case 1:bt[n-1]&=8388607;break;case 2:bt[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=it(1,o)))}if(0===w){for(d=0,v=n-1;v>=u;v--)d|=bt[v];if(0===d){for(s=1;0===bt[u-s];s++);for(v=n+1;v<=n+s;v++){for(a[f+v]=at[i+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return dt(r,t,n+=s,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===bt[n];)n-=1,o-=24;else(w=it(w,-o))>=lt?(l=yt*w|0,bt[n]=w-lt*l|0,o+=24,bt[n+=1]=l):bt[n]=0|w;for(l=it(1,o),v=n;v>=0;v--)e[v]=l*bt[v],l*=yt;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=ct[s]*e[v+s];st[n-v]=l}for(l=0,v=n;v>=0;v--)l+=st[v];for(t[0]=0===y?l:-l,l=st[0]-l,v=1;v<=n;v++)l+=st[v];return t[1]=0===y?l:-l,7&b}function wt(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)pt[a]=c<0?0:at[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*pt[i+(a-c)];vt[a]=o}return 4,dt(r,t,4,vt,f,4,u,i,pt)}var mt=Math.round;function jt(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=mt(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Ur(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Ur(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var gt=1.5707963267341256,At=6077100506506192e-26,ht=2*At,_t=3*At,Ot=4*At,Ut=[0,0,0],St=[0,0];function Et(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Ur(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?jt(r,o,t):o<=1073928572?r>0?(a=r-gt,t[0]=a-At,t[1]=a-t[0]-At,1):(a=r+gt,t[0]=a+At,t[1]=a-t[0]+At,-1):r>0?(a=r-2*gt,t[0]=a-ht,t[1]=a-t[0]-ht,2):(a=r+2*gt,t[0]=a+ht,t[1]=a-t[0]+ht,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?jt(r,o,t):r>0?(a=r-3*gt,t[0]=a-_t,t[1]=a-t[0]-_t,3):(a=r+3*gt,t[0]=a+_t,t[1]=a-t[0]+_t,-3):1075388923===o?jt(r,o,t):r>0?(a=r-4*gt,t[0]=a-Ot,t[1]=a-t[0]-Ot,4):(a=r+4*gt,t[0]=a+Ot,t[1]=a-t[0]+Ot,-4);if(o<1094263291)return jt(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return xr[0]=r,Gr[Vr]}(r),a=Wr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Ut[i]=0|a,a=16777216*(a-Ut[i]);for(Ut[2]=a,u=3;0===Ut[u-1];)u-=1;return f=wt(Ut,St,e,u),r<0?(t[0]=-St[0],t[1]=-St[1],-f):(t[0]=St[0],t[1]=St[1],f)}var Nt=[0,0];function Tt(r){var t,n;return t=Ur(r),(t&=2147483647)<=1072243195?t<1044381696?r:Fr(r,0,1):t>=2146435072?NaN:(n=Et(r,Nt),Fr(Nt[0],Nt[1],1-((1&n)<<1)))}return function(r){return $(r,Tt)}}));
//# sourceMappingURL=browser.js.map
