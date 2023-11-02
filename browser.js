// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){return"string"==typeof r}function N(r){var t,e,n;if(!I(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&($.call(r,t)||C.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&L&&L.call(r,t,e.set),r};var H=k;function W(r,t,e){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=Z()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return R(r)||tr(r)}function nr(){return new Function("return this;")()}W(er,"isPrimitive",R),W(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!R(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;W(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function dr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=sr.exec(n.toString()))return t[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}W(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!pr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yr));var gr="function"==typeof B||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function vr(r){return"function"===gr(r)}function br(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&vr(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=Z();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||Ar(r)}W(_r,"isPrimitive",hr),W(_r,"isObject",Ar);var Er,Or="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,Sr=Object,xr=Object.getPrototypeOf;Er=vr(Object.getPrototypeOf)?xr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=Er,Ur=Object.prototype;function Fr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(t=function(r){return null==r?null:(r=Sr(r),Tr(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&vr(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===Ur||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Ir(r,t){return Fr(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Nr(r,t,e){var n,o,i,a;if(!br(r))throw new TypeError(N("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Ir(n,e)))throw i;return W(o={},"next",u),W(o,"return",c),Or&&vr(r[Or])&&W(o,Or,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:hr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Nr(r[Or](),t,n)}}var kr,Vr="function"==typeof Uint32Array,Pr="function"==typeof Uint32Array?Uint32Array:null,Gr="function"==typeof Uint32Array?Uint32Array:void 0;kr=function(){var r,t,e;if("function"!=typeof Pr)return!1;try{t=new Pr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Vr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr,$r=kr,Cr="function"==typeof Float64Array,Hr="function"==typeof Float64Array?Float64Array:null,Wr="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,e;if("function"!=typeof Hr)return!1;try{t=new Hr([1,3.14,-3.14,NaN]),e=t,r=(Cr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Br,Rr=Lr,Mr="function"==typeof Uint8Array,Zr="function"==typeof Uint8Array?Uint8Array:null,Xr="function"==typeof Uint8Array?Uint8Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,256,257]),e=t,r=(Mr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr,zr=Br,qr="function"==typeof Uint16Array,Dr="function"==typeof Uint16Array?Uint16Array:null,Jr="function"==typeof Uint16Array?Uint16Array:void 0;Yr=function(){var r,t,e;if("function"!=typeof Dr)return!1;try{t=new Dr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(qr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr,Qr={uint16:Yr,uint8:zr};(Kr=new Qr.uint16(1))[0]=4660;var rt=52===new Qr.uint8(Kr.buffer)[0],tt=!0===rt?1:0,et=new Rr(1),nt=new $r(et.buffer);function ot(r){return et[0]=r,nt[tt]}var it=!0===rt?0:1,at=new Rr(1),ut=new $r(at.buffer);function ct(r,t){return at[0]=r,ut[it]=t>>>0,at[0]}function ft(r,t,e){var n,o,i,a,u,c,f,l,s;return(o=2147483647&(n=ot(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(s=.7853981633974483-r)+(l=3061616997868383e-32-t),t=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(s=r*r)*s),f=s*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=t+s*((u=s*r)*(a+f)+t),l=r+(a+=.3333333333333341*u),o>=1072010280?(1-(n>>30&2))*((f=e)-2*(r-(l*l/(l+f)-a))):1===e?l:(f=a-((s=ct(l,0))-r),(c=ct(i=-1/l,0))+i*((u=1+c*s)+c*f))}var lt,st,pt=2147483647,yt=2146435072,dt=!0===rt?0:1,gt=new Rr(1),vt=new $r(gt.buffer);!0===rt?(lt=1,st=0):(lt=0,st=1);var bt={HIGH:lt,LOW:st},ht=new Rr(1),wt=new $r(ht.buffer),mt=bt.HIGH,jt=bt.LOW;function At(r,t){return wt[mt]=r,wt[jt]=t,ht[0]}var _t,Et,Ot=Math.floor,St=Number.POSITIVE_INFINITY,xt=wr.NEGATIVE_INFINITY;function Tt(r){return r!=r}function Ut(r){return r===St||r===xt}!0===rt?(_t=1,Et=0):(_t=0,Et=1);var Ft={HIGH:_t,LOW:Et},It=new Rr(1),Nt=new $r(It.buffer),kt=Ft.HIGH,Vt=Ft.LOW;function Pt(r,t,e,n){return It[0]=r,t[n]=Nt[kt],t[n+e]=Nt[Vt],t}function Gt(r){return Pt(r,[0,0],1,0)}W(Gt,"assign",Pt);var Lt=[0,0];function $t(r,t,e,n){return Tt(r)||Ut(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}W((function(r){return $t(r,[0,0],1,0)}),"assign",$t);var Ct=[0,0],Ht=[0,0];function Wt(r,t){var e,n,o,i,a,u;return 0===t||0===r||Tt(r)||Ut(r)?r:($t(r,Ct,1,0),t+=Ct[1],t+=function(r){var t=ot(r);return(t=(t&yt)>>>20)-1023|0}(r=Ct[0]),t<-1074?(o=0,i=r,Gt.assign(o,Lt,1,0),a=Lt[0],a&=pt,u=ot(i),At(a|=u&=2147483648,Lt[1])):t>1023?r<0?xt:St:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Gt.assign(r,Ht,1,0),e=Ht[0],e&=2148532223,n*At(e|=t+1023<<20,Ht[1])))}function Bt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var Rt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Zt=16777216,Xt=5.960464477539063e-8,Yt=Bt(20),zt=Bt(20),qt=Bt(20),Dt=Bt(20);function Jt(r,t,e,n,o,i,a,u,c){var f,l,s,p,y,d,g,v,b;for(p=i,b=n[e],v=e,y=0;v>0;y++)l=Xt*b|0,Dt[y]=b-Zt*l|0,b=n[v-1]+l,v-=1;if(b=Wt(b,o),b-=8*Ot(.125*b),b-=g=0|b,s=0,o>0?(g+=y=Dt[e-1]>>24-o,Dt[e-1]-=y<<24-o,s=Dt[e-1]>>23-o):0===o?s=Dt[e-1]>>23:b>=.5&&(s=2),s>0){for(g+=1,f=0,y=0;y<e;y++)v=Dt[y],0===f?0!==v&&(f=1,Dt[y]=16777216-v):Dt[y]=16777215-v;if(o>0)switch(o){case 1:Dt[e-1]&=8388607;break;case 2:Dt[e-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Wt(1,o)))}if(0===b){for(v=0,y=e-1;y>=i;y--)v|=Dt[y];if(0===v){for(d=1;0===Dt[i-d];d++);for(y=e+1;y<=e+d;y++){for(c[u+y]=Rt[a+y],l=0,v=0;v<=u;v++)l+=r[v]*c[u+(y-v)];n[y]=l}return Jt(r,t,e+=d,n,o,i,a,u,c)}}if(0===b)for(e-=1,o-=24;0===Dt[e];)e-=1,o-=24;else(b=Wt(b,-o))>=Zt?(l=Xt*b|0,Dt[e]=b-Zt*l|0,o+=24,Dt[e+=1]=l):Dt[e]=0|b;for(l=Wt(1,o),y=e;y>=0;y--)n[y]=l*Dt[y],l*=Xt;for(y=e;y>=0;y--){for(l=0,d=0;d<=p&&d<=e-y;d++)l+=Mt[d]*n[y+d];qt[e-y]=l}for(l=0,y=e;y>=0;y--)l+=qt[y];for(t[0]=0===s?l:-l,l=qt[0]-l,y=1;y<=e;y++)l+=qt[y];return t[1]=0===s?l:-l,7&g}function Kt(r,t,e,n){var o,i,a,u,c,f,l;for((i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Yt[c]=f<0?0:Rt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Yt[a+(c-f)];zt[c]=o}return Jt(r,t,4,zt,u,4,i,a,Yt)}var Qt=Math.round;function re(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=Qt(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(ot(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(ot(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var te=1.5707963267341256,ee=6077100506506192e-26,ne=2*ee,oe=3*ee,ie=4*ee,ae=[0,0,0],ue=[0,0];function ce(r,t){var e,n,o,i,a,u,c;if((o=ot(r)&pt|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?re(r,o,t):o<=1073928572?r>0?(c=r-te,t[0]=c-ee,t[1]=c-t[0]-ee,1):(c=r+te,t[0]=c+ee,t[1]=c-t[0]+ee,-1):r>0?(c=r-2*te,t[0]=c-ne,t[1]=c-t[0]-ne,2):(c=r+2*te,t[0]=c+ne,t[1]=c-t[0]+ne,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?re(r,o,t):r>0?(c=r-3*te,t[0]=c-oe,t[1]=c-t[0]-oe,3):(c=r+3*te,t[0]=c+oe,t[1]=c-t[0]+oe,-3):1075388923===o?re(r,o,t):r>0?(c=r-4*te,t[0]=c-ie,t[1]=c-t[0]-ie,4):(c=r+4*te,t[0]=c+ie,t[1]=c-t[0]+ie,-4);if(o<1094263291)return re(r,o,t);if(o>=yt)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return gt[0]=r,vt[dt]}(r),c=At(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)ae[a]=0|c,c=16777216*(c-ae[a]);for(ae[2]=c,i=3;0===ae[i-1];)i-=1;return u=Kt(ae,ue,n,i),r<0?(t[0]=-ue[0],t[1]=-ue[1],-u):(t[0]=ue[0],t[1]=ue[1],u)}var fe=[0,0];function le(r){var t,e;return t=ot(r),(t&=2147483647)<=1072243195?t<1044381696?r:ft(r,0,1):t>=2146435072?NaN:(e=ce(r,fe),ft(fe[0],fe[1],1-((1&e)<<1)))}return function(r){return Nr(r,le)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterTan=t();
//# sourceMappingURL=browser.js.map
