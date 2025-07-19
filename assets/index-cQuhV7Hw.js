function Am(o,f){for(var h=0;h<f.length;h++){const c=f[h];if(typeof c!="string"&&!Array.isArray(c)){for(const v in c)if(v!=="default"&&!(v in o)){const E=Object.getOwnPropertyDescriptor(c,v);E&&Object.defineProperty(o,v,E.get?E:{enumerable:!0,get:()=>c[v]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))c(v);new MutationObserver(v=>{for(const E of v)if(E.type==="childList")for(const C of E.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&c(C)}).observe(document,{childList:!0,subtree:!0});function h(v){const E={};return v.integrity&&(E.integrity=v.integrity),v.referrerPolicy&&(E.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?E.credentials="include":v.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function c(v){if(v.ep)return;v.ep=!0;const E=h(v);fetch(v.href,E)}})();function Lf(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ro={exports:{}},Mn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function xm(){if(pf)return Mn;pf=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function h(c,v,E){var C=null;if(E!==void 0&&(C=""+E),v.key!==void 0&&(C=""+v.key),"key"in v){E={};for(var D in v)D!=="key"&&(E[D]=v[D])}else E=v;return v=E.ref,{$$typeof:o,type:c,key:C,ref:v!==void 0?v:null,props:E}}return Mn.Fragment=f,Mn.jsx=h,Mn.jsxs=h,Mn}var Sf;function Tm(){return Sf||(Sf=1,ro.exports=xm()),ro.exports}var r=Tm(),fo={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function Cm(){if(bf)return J;bf=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),_=Symbol.iterator;function L(g){return g===null||typeof g!="object"?null:(g=_&&g[_]||g["@@iterator"],typeof g=="function"?g:null)}var nl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},el=Object.assign,il={};function X(g,j,G){this.props=g,this.context=j,this.refs=il,this.updater=G||nl}X.prototype.isReactComponent={},X.prototype.setState=function(g,j){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,j,"setState")},X.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function W(){}W.prototype=X.prototype;function dl(g,j,G){this.props=g,this.context=j,this.refs=il,this.updater=G||nl}var tl=dl.prototype=new W;tl.constructor=dl,el(tl,X.prototype),tl.isPureReactComponent=!0;var xl=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Fl=Object.prototype.hasOwnProperty;function Pl(g,j,G,H,Y,ul){return G=ul.ref,{$$typeof:o,type:g,key:j,ref:G!==void 0?G:null,props:ul}}function Wl(g,j){return Pl(g.type,j,void 0,void 0,void 0,g.props)}function be(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Yi(g){var j={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(G){return j[G]})}var ze=/\/+/g;function wl(g,j){return typeof g=="object"&&g!==null&&g.key!=null?Yi(""+g.key):j.toString(36)}function pi(){}function Si(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(pi,pi):(g.status="pending",g.then(function(j){g.status==="pending"&&(g.status="fulfilled",g.value=j)},function(j){g.status==="pending"&&(g.status="rejected",g.reason=j)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function ql(g,j,G,H,Y){var ul=typeof g;(ul==="undefined"||ul==="boolean")&&(g=null);var k=!1;if(g===null)k=!0;else switch(ul){case"bigint":case"string":case"number":k=!0;break;case"object":switch(g.$$typeof){case o:case f:k=!0;break;case U:return k=g._init,ql(k(g._payload),j,G,H,Y)}}if(k)return Y=Y(g),k=H===""?"."+wl(g,0):H,xl(Y)?(G="",k!=null&&(G=k.replace(ze,"$&/")+"/"),ql(Y,j,G,"",function(Ze){return Ze})):Y!=null&&(be(Y)&&(Y=Wl(Y,G+(Y.key==null||g&&g.key===Y.key?"":(""+Y.key).replace(ze,"$&/")+"/")+k)),j.push(Y)),1;k=0;var Il=H===""?".":H+":";if(xl(g))for(var pl=0;pl<g.length;pl++)H=g[pl],ul=Il+wl(H,pl),k+=ql(H,j,G,ul,Y);else if(pl=L(g),typeof pl=="function")for(g=pl.call(g),pl=0;!(H=g.next()).done;)H=H.value,ul=Il+wl(H,pl++),k+=ql(H,j,G,ul,Y);else if(ul==="object"){if(typeof g.then=="function")return ql(Si(g),j,G,H,Y);throw j=String(g),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return k}function R(g,j,G){if(g==null)return g;var H=[],Y=0;return ql(g,H,"","",function(ul){return j.call(G,ul,Y++)}),H}function B(g){if(g._status===-1){var j=g._result;j=j(),j.then(function(G){(g._status===0||g._status===-1)&&(g._status=1,g._result=G)},function(G){(g._status===0||g._status===-1)&&(g._status=2,g._result=G)}),g._status===-1&&(g._status=0,g._result=j)}if(g._status===1)return g._result.default;throw g._result}var Z=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function ml(){}return J.Children={map:R,forEach:function(g,j,G){R(g,function(){j.apply(this,arguments)},G)},count:function(g){var j=0;return R(g,function(){j++}),j},toArray:function(g){return R(g,function(j){return j})||[]},only:function(g){if(!be(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},J.Component=X,J.Fragment=h,J.Profiler=v,J.PureComponent=dl,J.StrictMode=c,J.Suspense=T,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,J.__COMPILER_RUNTIME={__proto__:null,c:function(g){return F.H.useMemoCache(g)}},J.cache=function(g){return function(){return g.apply(null,arguments)}},J.cloneElement=function(g,j,G){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=el({},g.props),Y=g.key,ul=void 0;if(j!=null)for(k in j.ref!==void 0&&(ul=void 0),j.key!==void 0&&(Y=""+j.key),j)!Fl.call(j,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&j.ref===void 0||(H[k]=j[k]);var k=arguments.length-2;if(k===1)H.children=G;else if(1<k){for(var Il=Array(k),pl=0;pl<k;pl++)Il[pl]=arguments[pl+2];H.children=Il}return Pl(g.type,Y,void 0,void 0,ul,H)},J.createContext=function(g){return g={$$typeof:C,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:E,_context:g},g},J.createElement=function(g,j,G){var H,Y={},ul=null;if(j!=null)for(H in j.key!==void 0&&(ul=""+j.key),j)Fl.call(j,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Y[H]=j[H]);var k=arguments.length-2;if(k===1)Y.children=G;else if(1<k){for(var Il=Array(k),pl=0;pl<k;pl++)Il[pl]=arguments[pl+2];Y.children=Il}if(g&&g.defaultProps)for(H in k=g.defaultProps,k)Y[H]===void 0&&(Y[H]=k[H]);return Pl(g,ul,void 0,void 0,null,Y)},J.createRef=function(){return{current:null}},J.forwardRef=function(g){return{$$typeof:D,render:g}},J.isValidElement=be,J.lazy=function(g){return{$$typeof:U,_payload:{_status:-1,_result:g},_init:B}},J.memo=function(g,j){return{$$typeof:p,type:g,compare:j===void 0?null:j}},J.startTransition=function(g){var j=F.T,G={};F.T=G;try{var H=g(),Y=F.S;Y!==null&&Y(G,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ml,Z)}catch(ul){Z(ul)}finally{F.T=j}},J.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},J.use=function(g){return F.H.use(g)},J.useActionState=function(g,j,G){return F.H.useActionState(g,j,G)},J.useCallback=function(g,j){return F.H.useCallback(g,j)},J.useContext=function(g){return F.H.useContext(g)},J.useDebugValue=function(){},J.useDeferredValue=function(g,j){return F.H.useDeferredValue(g,j)},J.useEffect=function(g,j,G){var H=F.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(g,j)},J.useId=function(){return F.H.useId()},J.useImperativeHandle=function(g,j,G){return F.H.useImperativeHandle(g,j,G)},J.useInsertionEffect=function(g,j){return F.H.useInsertionEffect(g,j)},J.useLayoutEffect=function(g,j){return F.H.useLayoutEffect(g,j)},J.useMemo=function(g,j){return F.H.useMemo(g,j)},J.useOptimistic=function(g,j){return F.H.useOptimistic(g,j)},J.useReducer=function(g,j,G){return F.H.useReducer(g,j,G)},J.useRef=function(g){return F.H.useRef(g)},J.useState=function(g){return F.H.useState(g)},J.useSyncExternalStore=function(g,j,G){return F.H.useSyncExternalStore(g,j,G)},J.useTransition=function(){return F.H.useTransition()},J.version="19.1.0",J}var Ef;function Eo(){return Ef||(Ef=1,fo.exports=Cm()),fo.exports}var N=Eo();const Yf=Lf(N),Mm=Am({__proto__:null,default:Yf},[N]);var ho={exports:{}},Rn={},go={exports:{}},mo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function Rm(){return Af||(Af=1,function(o){function f(R,B){var Z=R.length;R.push(B);l:for(;0<Z;){var ml=Z-1>>>1,g=R[ml];if(0<v(g,B))R[ml]=B,R[Z]=g,Z=ml;else break l}}function h(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var B=R[0],Z=R.pop();if(Z!==B){R[0]=Z;l:for(var ml=0,g=R.length,j=g>>>1;ml<j;){var G=2*(ml+1)-1,H=R[G],Y=G+1,ul=R[Y];if(0>v(H,Z))Y<g&&0>v(ul,H)?(R[ml]=ul,R[Y]=Z,ml=Y):(R[ml]=H,R[G]=Z,ml=G);else if(Y<g&&0>v(ul,Z))R[ml]=ul,R[Y]=Z,ml=Y;else break l}}return B}function v(R,B){var Z=R.sortIndex-B.sortIndex;return Z!==0?Z:R.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;o.unstable_now=function(){return E.now()}}else{var C=Date,D=C.now();o.unstable_now=function(){return C.now()-D}}var T=[],p=[],U=1,_=null,L=3,nl=!1,el=!1,il=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,dl=typeof clearTimeout=="function"?clearTimeout:null,tl=typeof setImmediate<"u"?setImmediate:null;function xl(R){for(var B=h(p);B!==null;){if(B.callback===null)c(p);else if(B.startTime<=R)c(p),B.sortIndex=B.expirationTime,f(T,B);else break;B=h(p)}}function F(R){if(il=!1,xl(R),!el)if(h(T)!==null)el=!0,Fl||(Fl=!0,wl());else{var B=h(p);B!==null&&ql(F,B.startTime-R)}}var Fl=!1,Pl=-1,Wl=5,be=-1;function Yi(){return X?!0:!(o.unstable_now()-be<Wl)}function ze(){if(X=!1,Fl){var R=o.unstable_now();be=R;var B=!0;try{l:{el=!1,il&&(il=!1,dl(Pl),Pl=-1),nl=!0;var Z=L;try{e:{for(xl(R),_=h(T);_!==null&&!(_.expirationTime>R&&Yi());){var ml=_.callback;if(typeof ml=="function"){_.callback=null,L=_.priorityLevel;var g=ml(_.expirationTime<=R);if(R=o.unstable_now(),typeof g=="function"){_.callback=g,xl(R),B=!0;break e}_===h(T)&&c(T),xl(R)}else c(T);_=h(T)}if(_!==null)B=!0;else{var j=h(p);j!==null&&ql(F,j.startTime-R),B=!1}}break l}finally{_=null,L=Z,nl=!1}B=void 0}}finally{B?wl():Fl=!1}}}var wl;if(typeof tl=="function")wl=function(){tl(ze)};else if(typeof MessageChannel<"u"){var pi=new MessageChannel,Si=pi.port2;pi.port1.onmessage=ze,wl=function(){Si.postMessage(null)}}else wl=function(){W(ze,0)};function ql(R,B){Pl=W(function(){R(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(R){R.callback=null},o.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Wl=0<R?Math.floor(1e3/R):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_next=function(R){switch(L){case 1:case 2:case 3:var B=3;break;default:B=L}var Z=L;L=B;try{return R()}finally{L=Z}},o.unstable_requestPaint=function(){X=!0},o.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Z=L;L=R;try{return B()}finally{L=Z}},o.unstable_scheduleCallback=function(R,B,Z){var ml=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ml+Z:ml):Z=ml,R){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=Z+g,R={id:U++,callback:B,priorityLevel:R,startTime:Z,expirationTime:g,sortIndex:-1},Z>ml?(R.sortIndex=Z,f(p,R),h(T)===null&&R===h(p)&&(il?(dl(Pl),Pl=-1):il=!0,ql(F,Z-ml))):(R.sortIndex=g,f(T,R),el||nl||(el=!0,Fl||(Fl=!0,wl()))),R},o.unstable_shouldYield=Yi,o.unstable_wrapCallback=function(R){var B=L;return function(){var Z=L;L=B;try{return R.apply(this,arguments)}finally{L=Z}}}}(mo)),mo}var xf;function zm(){return xf||(xf=1,go.exports=Rm()),go.exports}var vo={exports:{}},Ql={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function Dm(){if(Tf)return Ql;Tf=1;var o=Eo();function f(T){var p="https://react.dev/errors/"+T;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)p+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+T+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var c={d:{f:h,r:function(){throw Error(f(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},v=Symbol.for("react.portal");function E(T,p,U){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:_==null?null:""+_,children:T,containerInfo:p,implementation:U}}var C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(T,p){if(T==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ql.createPortal=function(T,p){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return E(T,p,null,U)},Ql.flushSync=function(T){var p=C.T,U=c.p;try{if(C.T=null,c.p=2,T)return T()}finally{C.T=p,c.p=U,c.d.f()}},Ql.preconnect=function(T,p){typeof T=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(T,p))},Ql.prefetchDNS=function(T){typeof T=="string"&&c.d.D(T)},Ql.preinit=function(T,p){if(typeof T=="string"&&p&&typeof p.as=="string"){var U=p.as,_=D(U,p.crossOrigin),L=typeof p.integrity=="string"?p.integrity:void 0,nl=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;U==="style"?c.d.S(T,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:L,fetchPriority:nl}):U==="script"&&c.d.X(T,{crossOrigin:_,integrity:L,fetchPriority:nl,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ql.preinitModule=function(T,p){if(typeof T=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var U=D(p.as,p.crossOrigin);c.d.M(T,{crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(T)},Ql.preload=function(T,p){if(typeof T=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var U=p.as,_=D(U,p.crossOrigin);c.d.L(T,U,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ql.preloadModule=function(T,p){if(typeof T=="string")if(p){var U=D(p.as,p.crossOrigin);c.d.m(T,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(T)},Ql.requestFormReset=function(T){c.d.r(T)},Ql.unstable_batchedUpdates=function(T,p){return T(p)},Ql.useFormState=function(T,p,U){return C.H.useFormState(T,p,U)},Ql.useFormStatus=function(){return C.H.useHostTransitionStatus()},Ql.version="19.1.0",Ql}var Cf;function Qf(){if(Cf)return vo.exports;Cf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),vo.exports=Dm(),vo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function Om(){if(Mf)return Rn;Mf=1;var o=zm(),f=Eo(),h=Qf();function c(l){var e="https://react.dev/errors/"+l;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+l+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function E(l){var e=l,i=l;if(l.alternate)for(;e.return;)e=e.return;else{l=e;do e=l,(e.flags&4098)!==0&&(i=e.return),l=e.return;while(l)}return e.tag===3?i:null}function C(l){if(l.tag===13){var e=l.memoizedState;if(e===null&&(l=l.alternate,l!==null&&(e=l.memoizedState)),e!==null)return e.dehydrated}return null}function D(l){if(E(l)!==l)throw Error(c(188))}function T(l){var e=l.alternate;if(!e){if(e=E(l),e===null)throw Error(c(188));return e!==l?null:l}for(var i=l,t=e;;){var n=i.return;if(n===null)break;var a=n.alternate;if(a===null){if(t=n.return,t!==null){i=t;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===i)return D(n),l;if(a===t)return D(n),e;a=a.sibling}throw Error(c(188))}if(i.return!==t.return)i=n,t=a;else{for(var u=!1,s=n.child;s;){if(s===i){u=!0,i=n,t=a;break}if(s===t){u=!0,t=n,i=a;break}s=s.sibling}if(!u){for(s=a.child;s;){if(s===i){u=!0,i=a,t=n;break}if(s===t){u=!0,t=a,i=n;break}s=s.sibling}if(!u)throw Error(c(189))}}if(i.alternate!==t)throw Error(c(190))}if(i.tag!==3)throw Error(c(188));return i.stateNode.current===i?l:e}function p(l){var e=l.tag;if(e===5||e===26||e===27||e===6)return l;for(l=l.child;l!==null;){if(e=p(l),e!==null)return e;l=l.sibling}return null}var U=Object.assign,_=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),nl=Symbol.for("react.portal"),el=Symbol.for("react.fragment"),il=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),dl=Symbol.for("react.consumer"),tl=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),Pl=Symbol.for("react.memo"),Wl=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),Yi=Symbol.for("react.memo_cache_sentinel"),ze=Symbol.iterator;function wl(l){return l===null||typeof l!="object"?null:(l=ze&&l[ze]||l["@@iterator"],typeof l=="function"?l:null)}var pi=Symbol.for("react.client.reference");function Si(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===pi?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case el:return"Fragment";case X:return"Profiler";case il:return"StrictMode";case F:return"Suspense";case Fl:return"SuspenseList";case be:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case nl:return"Portal";case tl:return(l.displayName||"Context")+".Provider";case dl:return(l._context.displayName||"Context")+".Consumer";case xl:var e=l.render;return l=l.displayName,l||(l=e.displayName||e.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case Pl:return e=l.displayName||null,e!==null?e:Si(l.type)||"Memo";case Wl:e=l._payload,l=l._init;try{return Si(l(e))}catch{}}return null}var ql=Array.isArray,R=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ml=[],g=-1;function j(l){return{current:l}}function G(l){0>g||(l.current=ml[g],ml[g]=null,g--)}function H(l,e){g++,ml[g]=l.current,l.current=e}var Y=j(null),ul=j(null),k=j(null),Il=j(null);function pl(l,e){switch(H(k,e),H(ul,l),H(Y,null),e.nodeType){case 9:case 11:l=(l=e.documentElement)&&(l=l.namespaceURI)?Zd(l):0;break;default:if(l=e.tagName,e=e.namespaceURI)e=Zd(e),l=Kd(e,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}G(Y),H(Y,l)}function Ze(){G(Y),G(ul),G(k)}function Fa(l){l.memoizedState!==null&&H(Il,l);var e=Y.current,i=Kd(e,l.type);e!==i&&(H(ul,l),H(Y,i))}function Un(l){ul.current===l&&(G(Y),G(ul)),Il.current===l&&(G(Il),En._currentValue=Z)}var Pa=Object.prototype.hasOwnProperty,Wa=o.unstable_scheduleCallback,Ia=o.unstable_cancelCallback,lh=o.unstable_shouldYield,eh=o.unstable_requestPaint,Ee=o.unstable_now,ih=o.unstable_getCurrentPriorityLevel,Co=o.unstable_ImmediatePriority,Mo=o.unstable_UserBlockingPriority,_n=o.unstable_NormalPriority,th=o.unstable_LowPriority,Ro=o.unstable_IdlePriority,nh=o.log,ah=o.unstable_setDisableYieldValue,zt=null,$l=null;function Ke(l){if(typeof nh=="function"&&ah(l),$l&&typeof $l.setStrictMode=="function")try{$l.setStrictMode(zt,l)}catch{}}var le=Math.clz32?Math.clz32:oh,uh=Math.log,sh=Math.LN2;function oh(l){return l>>>=0,l===0?32:31-(uh(l)/sh|0)|0}var Nn=256,Hn=4194304;function bi(l){var e=l&42;if(e!==0)return e;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Bn(l,e,i){var t=l.pendingLanes;if(t===0)return 0;var n=0,a=l.suspendedLanes,u=l.pingedLanes;l=l.warmLanes;var s=t&134217727;return s!==0?(t=s&~a,t!==0?n=bi(t):(u&=s,u!==0?n=bi(u):i||(i=s&~l,i!==0&&(n=bi(i))))):(s=t&~a,s!==0?n=bi(s):u!==0?n=bi(u):i||(i=t&~l,i!==0&&(n=bi(i)))),n===0?0:e!==0&&e!==n&&(e&a)===0&&(a=n&-n,i=e&-e,a>=i||a===32&&(i&4194048)!==0)?e:n}function Dt(l,e){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&e)===0}function ch(l,e){switch(l){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zo(){var l=Nn;return Nn<<=1,(Nn&4194048)===0&&(Nn=256),l}function Do(){var l=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),l}function $a(l){for(var e=[],i=0;31>i;i++)e.push(l);return e}function Ot(l,e){l.pendingLanes|=e,e!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function rh(l,e,i,t,n,a){var u=l.pendingLanes;l.pendingLanes=i,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=i,l.entangledLanes&=i,l.errorRecoveryDisabledLanes&=i,l.shellSuspendCounter=0;var s=l.entanglements,d=l.expirationTimes,b=l.hiddenUpdates;for(i=u&~i;0<i;){var M=31-le(i),O=1<<M;s[M]=0,d[M]=-1;var A=b[M];if(A!==null)for(b[M]=null,M=0;M<A.length;M++){var x=A[M];x!==null&&(x.lane&=-536870913)}i&=~O}t!==0&&Oo(l,t,0),a!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=a&~(u&~e))}function Oo(l,e,i){l.pendingLanes|=e,l.suspendedLanes&=~e;var t=31-le(e);l.entangledLanes|=e,l.entanglements[t]=l.entanglements[t]|1073741824|i&4194090}function jo(l,e){var i=l.entangledLanes|=e;for(l=l.entanglements;i;){var t=31-le(i),n=1<<t;n&e|l[t]&e&&(l[t]|=e),i&=~n}}function lu(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function eu(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Uo(){var l=B.p;return l!==0?l:(l=window.event,l===void 0?32:ff(l.type))}function dh(l,e){var i=B.p;try{return B.p=l,e()}finally{B.p=i}}var ke=Math.random().toString(36).slice(2),Ll="__reactFiber$"+ke,Vl="__reactProps$"+ke,Qi="__reactContainer$"+ke,iu="__reactEvents$"+ke,fh="__reactListeners$"+ke,hh="__reactHandles$"+ke,_o="__reactResources$"+ke,jt="__reactMarker$"+ke;function tu(l){delete l[Ll],delete l[Vl],delete l[iu],delete l[fh],delete l[hh]}function Xi(l){var e=l[Ll];if(e)return e;for(var i=l.parentNode;i;){if(e=i[Qi]||i[Ll]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(l=Pd(l);l!==null;){if(i=l[Ll])return i;l=Pd(l)}return e}l=i,i=l.parentNode}return null}function Vi(l){if(l=l[Ll]||l[Qi]){var e=l.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return l}return null}function Ut(l){var e=l.tag;if(e===5||e===26||e===27||e===6)return l.stateNode;throw Error(c(33))}function Zi(l){var e=l[_o];return e||(e=l[_o]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function jl(l){l[jt]=!0}var No=new Set,Ho={};function Ei(l,e){Ki(l,e),Ki(l+"Capture",e)}function Ki(l,e){for(Ho[l]=e,l=0;l<e.length;l++)No.add(e[l])}var gh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bo={},Go={};function mh(l){return Pa.call(Go,l)?!0:Pa.call(Bo,l)?!1:gh.test(l)?Go[l]=!0:(Bo[l]=!0,!1)}function Gn(l,e,i){if(mh(e))if(i===null)l.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":l.removeAttribute(e);return;case"boolean":var t=e.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){l.removeAttribute(e);return}}l.setAttribute(e,""+i)}}function wn(l,e,i){if(i===null)l.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttribute(e,""+i)}}function De(l,e,i,t){if(t===null)l.removeAttribute(i);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(i);return}l.setAttributeNS(e,i,""+t)}}var nu,wo;function ki(l){if(nu===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||"",wo=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nu+l+wo}var au=!1;function uu(l,e){if(!l||au)return"";au=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(e){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(x){var A=x}Reflect.construct(l,[],O)}else{try{O.call()}catch(x){A=x}l.call(O.prototype)}}else{try{throw Error()}catch(x){A=x}(O=l())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(x){if(x&&A&&typeof x.stack=="string")return[x.stack,A.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=t.DetermineComponentFrameRoot(),u=a[0],s=a[1];if(u&&s){var d=u.split(`
`),b=s.split(`
`);for(n=t=0;t<d.length&&!d[t].includes("DetermineComponentFrameRoot");)t++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(t===d.length||n===b.length)for(t=d.length-1,n=b.length-1;1<=t&&0<=n&&d[t]!==b[n];)n--;for(;1<=t&&0<=n;t--,n--)if(d[t]!==b[n]){if(t!==1||n!==1)do if(t--,n--,0>n||d[t]!==b[n]){var M=`
`+d[t].replace(" at new "," at ");return l.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",l.displayName)),M}while(1<=t&&0<=n);break}}}finally{au=!1,Error.prepareStackTrace=i}return(i=l?l.displayName||l.name:"")?ki(i):""}function vh(l){switch(l.tag){case 26:case 27:case 5:return ki(l.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return uu(l.type,!1);case 11:return uu(l.type.render,!1);case 1:return uu(l.type,!0);case 31:return ki("Activity");default:return""}}function qo(l){try{var e="";do e+=vh(l),l=l.return;while(l);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function oe(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Lo(l){var e=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yh(l){var e=Lo(l)?"checked":"value",i=Object.getOwnPropertyDescriptor(l.constructor.prototype,e),t=""+l[e];if(!l.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,a=i.set;return Object.defineProperty(l,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){t=""+u,a.call(this,u)}}),Object.defineProperty(l,e,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){l._valueTracker=null,delete l[e]}}}}function qn(l){l._valueTracker||(l._valueTracker=yh(l))}function Yo(l){if(!l)return!1;var e=l._valueTracker;if(!e)return!0;var i=e.getValue(),t="";return l&&(t=Lo(l)?l.checked?"true":"false":l.value),l=t,l!==i?(e.setValue(l),!0):!1}function Ln(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ph=/[\n"\\]/g;function ce(l){return l.replace(ph,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function su(l,e,i,t,n,a,u,s){l.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?l.type=u:l.removeAttribute("type"),e!=null?u==="number"?(e===0&&l.value===""||l.value!=e)&&(l.value=""+oe(e)):l.value!==""+oe(e)&&(l.value=""+oe(e)):u!=="submit"&&u!=="reset"||l.removeAttribute("value"),e!=null?ou(l,u,oe(e)):i!=null?ou(l,u,oe(i)):t!=null&&l.removeAttribute("value"),n==null&&a!=null&&(l.defaultChecked=!!a),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.name=""+oe(s):l.removeAttribute("name")}function Qo(l,e,i,t,n,a,u,s){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(l.type=a),e!=null||i!=null){if(!(a!=="submit"&&a!=="reset"||e!=null))return;i=i!=null?""+oe(i):"",e=e!=null?""+oe(e):i,s||e===l.value||(l.value=e),l.defaultValue=e}t=t??n,t=typeof t!="function"&&typeof t!="symbol"&&!!t,l.checked=s?l.checked:!!t,l.defaultChecked=!!t,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.name=u)}function ou(l,e,i){e==="number"&&Ln(l.ownerDocument)===l||l.defaultValue===""+i||(l.defaultValue=""+i)}function Ji(l,e,i,t){if(l=l.options,e){e={};for(var n=0;n<i.length;n++)e["$"+i[n]]=!0;for(i=0;i<l.length;i++)n=e.hasOwnProperty("$"+l[i].value),l[i].selected!==n&&(l[i].selected=n),n&&t&&(l[i].defaultSelected=!0)}else{for(i=""+oe(i),e=null,n=0;n<l.length;n++){if(l[n].value===i){l[n].selected=!0,t&&(l[n].defaultSelected=!0);return}e!==null||l[n].disabled||(e=l[n])}e!==null&&(e.selected=!0)}}function Xo(l,e,i){if(e!=null&&(e=""+oe(e),e!==l.value&&(l.value=e),i==null)){l.defaultValue!==e&&(l.defaultValue=e);return}l.defaultValue=i!=null?""+oe(i):""}function Vo(l,e,i,t){if(e==null){if(t!=null){if(i!=null)throw Error(c(92));if(ql(t)){if(1<t.length)throw Error(c(93));t=t[0]}i=t}i==null&&(i=""),e=i}i=oe(e),l.defaultValue=i,t=l.textContent,t===i&&t!==""&&t!==null&&(l.value=t)}function Fi(l,e){if(e){var i=l.firstChild;if(i&&i===l.lastChild&&i.nodeType===3){i.nodeValue=e;return}}l.textContent=e}var Sh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zo(l,e,i){var t=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?t?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="":t?l.setProperty(e,i):typeof i!="number"||i===0||Sh.has(e)?e==="float"?l.cssFloat=i:l[e]=(""+i).trim():l[e]=i+"px"}function Ko(l,e,i){if(e!=null&&typeof e!="object")throw Error(c(62));if(l=l.style,i!=null){for(var t in i)!i.hasOwnProperty(t)||e!=null&&e.hasOwnProperty(t)||(t.indexOf("--")===0?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="");for(var n in e)t=e[n],e.hasOwnProperty(n)&&i[n]!==t&&Zo(l,n,t)}else for(var a in e)e.hasOwnProperty(a)&&Zo(l,a,e[a])}function cu(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Eh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yn(l){return Eh.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}var ru=null;function du(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Pi=null,Wi=null;function ko(l){var e=Vi(l);if(e&&(l=e.stateNode)){var i=l[Vl]||null;l:switch(l=e.stateNode,e.type){case"input":if(su(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=l;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ce(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var t=i[e];if(t!==l&&t.form===l.form){var n=t[Vl]||null;if(!n)throw Error(c(90));su(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<i.length;e++)t=i[e],t.form===l.form&&Yo(t)}break l;case"textarea":Xo(l,i.value,i.defaultValue);break l;case"select":e=i.value,e!=null&&Ji(l,!!i.multiple,e,!1)}}}var fu=!1;function Jo(l,e,i){if(fu)return l(e,i);fu=!0;try{var t=l(e);return t}finally{if(fu=!1,(Pi!==null||Wi!==null)&&(Ma(),Pi&&(e=Pi,l=Wi,Wi=Pi=null,ko(e),l)))for(e=0;e<l.length;e++)ko(l[e])}}function _t(l,e){var i=l.stateNode;if(i===null)return null;var t=i[Vl]||null;if(t===null)return null;i=t[e];l:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(l=l.type,t=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!t;break l;default:l=!1}if(l)return null;if(i&&typeof i!="function")throw Error(c(231,e,typeof i));return i}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Oe)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{hu=!1}var Je=null,gu=null,Qn=null;function Fo(){if(Qn)return Qn;var l,e=gu,i=e.length,t,n="value"in Je?Je.value:Je.textContent,a=n.length;for(l=0;l<i&&e[l]===n[l];l++);var u=i-l;for(t=1;t<=u&&e[i-t]===n[a-t];t++);return Qn=n.slice(l,1<t?1-t:void 0)}function Xn(l){var e=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&e===13&&(l=13)):l=e,l===10&&(l=13),32<=l||l===13?l:0}function Vn(){return!0}function Po(){return!1}function Zl(l){function e(i,t,n,a,u){this._reactName=i,this._targetInst=n,this.type=t,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var s in l)l.hasOwnProperty(s)&&(i=l[s],this[s]=i?i(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vn:Po,this.isPropagationStopped=Po,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),e}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zn=Zl(Ai),Ht=U({},Ai,{view:0,detail:0}),Ah=Zl(Ht),mu,vu,Bt,Kn=U({},Ht,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Bt&&(Bt&&l.type==="mousemove"?(mu=l.screenX-Bt.screenX,vu=l.screenY-Bt.screenY):vu=mu=0,Bt=l),mu)},movementY:function(l){return"movementY"in l?l.movementY:vu}}),Wo=Zl(Kn),xh=U({},Kn,{dataTransfer:0}),Th=Zl(xh),Ch=U({},Ht,{relatedTarget:0}),yu=Zl(Ch),Mh=U({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),Rh=Zl(Mh),zh=U({},Ai,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Dh=Zl(zh),Oh=U({},Ai,{data:0}),Io=Zl(Oh),jh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nh(l){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(l):(l=_h[l])?!!e[l]:!1}function pu(){return Nh}var Hh=U({},Ht,{key:function(l){if(l.key){var e=jh[l.key]||l.key;if(e!=="Unidentified")return e}return l.type==="keypress"?(l=Xn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?Uh[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(l){return l.type==="keypress"?Xn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Xn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),Bh=Zl(Hh),Gh=U({},Kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$o=Zl(Gh),wh=U({},Ht,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),qh=Zl(wh),Lh=U({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yh=Zl(Lh),Qh=U({},Kn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=Zl(Qh),Vh=U({},Ai,{newState:0,oldState:0}),Zh=Zl(Vh),Kh=[9,13,27,32],Su=Oe&&"CompositionEvent"in window,Gt=null;Oe&&"documentMode"in document&&(Gt=document.documentMode);var kh=Oe&&"TextEvent"in window&&!Gt,lc=Oe&&(!Su||Gt&&8<Gt&&11>=Gt),ec=" ",ic=!1;function tc(l,e){switch(l){case"keyup":return Kh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Ii=!1;function Jh(l,e){switch(l){case"compositionend":return nc(e);case"keypress":return e.which!==32?null:(ic=!0,ec);case"textInput":return l=e.data,l===ec&&ic?null:l;default:return null}}function Fh(l,e){if(Ii)return l==="compositionend"||!Su&&tc(l,e)?(l=Fo(),Qn=gu=Je=null,Ii=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lc&&e.locale!=="ko"?null:e.data;default:return null}}var Ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(l){var e=l&&l.nodeName&&l.nodeName.toLowerCase();return e==="input"?!!Ph[l.type]:e==="textarea"}function uc(l,e,i,t){Pi?Wi?Wi.push(t):Wi=[t]:Pi=t,e=Ua(e,"onChange"),0<e.length&&(i=new Zn("onChange","change",null,i,t),l.push({event:i,listeners:e}))}var wt=null,qt=null;function Wh(l){Ld(l,0)}function kn(l){var e=Ut(l);if(Yo(e))return l}function sc(l,e){if(l==="change")return e}var oc=!1;if(Oe){var bu;if(Oe){var Eu="oninput"in document;if(!Eu){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Eu=typeof cc.oninput=="function"}bu=Eu}else bu=!1;oc=bu&&(!document.documentMode||9<document.documentMode)}function rc(){wt&&(wt.detachEvent("onpropertychange",dc),qt=wt=null)}function dc(l){if(l.propertyName==="value"&&kn(qt)){var e=[];uc(e,qt,l,du(l)),Jo(Wh,e)}}function Ih(l,e,i){l==="focusin"?(rc(),wt=e,qt=i,wt.attachEvent("onpropertychange",dc)):l==="focusout"&&rc()}function $h(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return kn(qt)}function lg(l,e){if(l==="click")return kn(e)}function eg(l,e){if(l==="input"||l==="change")return kn(e)}function ig(l,e){return l===e&&(l!==0||1/l===1/e)||l!==l&&e!==e}var ee=typeof Object.is=="function"?Object.is:ig;function Lt(l,e){if(ee(l,e))return!0;if(typeof l!="object"||l===null||typeof e!="object"||e===null)return!1;var i=Object.keys(l),t=Object.keys(e);if(i.length!==t.length)return!1;for(t=0;t<i.length;t++){var n=i[t];if(!Pa.call(e,n)||!ee(l[n],e[n]))return!1}return!0}function fc(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function hc(l,e){var i=fc(l);l=0;for(var t;i;){if(i.nodeType===3){if(t=l+i.textContent.length,l<=e&&t>=e)return{node:i,offset:e-l};l=t}l:{for(;i;){if(i.nextSibling){i=i.nextSibling;break l}i=i.parentNode}i=void 0}i=fc(i)}}function gc(l,e){return l&&e?l===e?!0:l&&l.nodeType===3?!1:e&&e.nodeType===3?gc(l,e.parentNode):"contains"in l?l.contains(e):l.compareDocumentPosition?!!(l.compareDocumentPosition(e)&16):!1:!1}function mc(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var e=Ln(l.document);e instanceof l.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)l=e.contentWindow;else break;e=Ln(l.document)}return e}function Au(l){var e=l&&l.nodeName&&l.nodeName.toLowerCase();return e&&(e==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||e==="textarea"||l.contentEditable==="true")}var tg=Oe&&"documentMode"in document&&11>=document.documentMode,$i=null,xu=null,Yt=null,Tu=!1;function vc(l,e,i){var t=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Tu||$i==null||$i!==Ln(t)||(t=$i,"selectionStart"in t&&Au(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Yt&&Lt(Yt,t)||(Yt=t,t=Ua(xu,"onSelect"),0<t.length&&(e=new Zn("onSelect","select",null,e,i),l.push({event:e,listeners:t}),e.target=$i)))}function xi(l,e){var i={};return i[l.toLowerCase()]=e.toLowerCase(),i["Webkit"+l]="webkit"+e,i["Moz"+l]="moz"+e,i}var lt={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionrun:xi("Transition","TransitionRun"),transitionstart:xi("Transition","TransitionStart"),transitioncancel:xi("Transition","TransitionCancel"),transitionend:xi("Transition","TransitionEnd")},Cu={},yc={};Oe&&(yc=document.createElement("div").style,"AnimationEvent"in window||(delete lt.animationend.animation,delete lt.animationiteration.animation,delete lt.animationstart.animation),"TransitionEvent"in window||delete lt.transitionend.transition);function Ti(l){if(Cu[l])return Cu[l];if(!lt[l])return l;var e=lt[l],i;for(i in e)if(e.hasOwnProperty(i)&&i in yc)return Cu[l]=e[i];return l}var pc=Ti("animationend"),Sc=Ti("animationiteration"),bc=Ti("animationstart"),ng=Ti("transitionrun"),ag=Ti("transitionstart"),ug=Ti("transitioncancel"),Ec=Ti("transitionend"),Ac=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function ye(l,e){Ac.set(l,e),Ei(e,[l])}var xc=new WeakMap;function re(l,e){if(typeof l=="object"&&l!==null){var i=xc.get(l);return i!==void 0?i:(e={value:l,source:e,stack:qo(e)},xc.set(l,e),e)}return{value:l,source:e,stack:qo(e)}}var de=[],et=0,Ru=0;function Jn(){for(var l=et,e=Ru=et=0;e<l;){var i=de[e];de[e++]=null;var t=de[e];de[e++]=null;var n=de[e];de[e++]=null;var a=de[e];if(de[e++]=null,t!==null&&n!==null){var u=t.pending;u===null?n.next=n:(n.next=u.next,u.next=n),t.pending=n}a!==0&&Tc(i,n,a)}}function Fn(l,e,i,t){de[et++]=l,de[et++]=e,de[et++]=i,de[et++]=t,Ru|=t,l.lanes|=t,l=l.alternate,l!==null&&(l.lanes|=t)}function zu(l,e,i,t){return Fn(l,e,i,t),Pn(l)}function it(l,e){return Fn(l,null,null,e),Pn(l)}function Tc(l,e,i){l.lanes|=i;var t=l.alternate;t!==null&&(t.lanes|=i);for(var n=!1,a=l.return;a!==null;)a.childLanes|=i,t=a.alternate,t!==null&&(t.childLanes|=i),a.tag===22&&(l=a.stateNode,l===null||l._visibility&1||(n=!0)),l=a,a=a.return;return l.tag===3?(a=l.stateNode,n&&e!==null&&(n=31-le(i),l=a.hiddenUpdates,t=l[n],t===null?l[n]=[e]:t.push(e),e.lane=i|536870912),a):null}function Pn(l){if(50<hn)throw hn=0,Ns=null,Error(c(185));for(var e=l.return;e!==null;)l=e,e=l.return;return l.tag===3?l.stateNode:null}var tt={};function sg(l,e,i,t){this.tag=l,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ie(l,e,i,t){return new sg(l,e,i,t)}function Du(l){return l=l.prototype,!(!l||!l.isReactComponent)}function je(l,e){var i=l.alternate;return i===null?(i=ie(l.tag,e,l.key,l.mode),i.elementType=l.elementType,i.type=l.type,i.stateNode=l.stateNode,i.alternate=l,l.alternate=i):(i.pendingProps=e,i.type=l.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=l.flags&65011712,i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=l.sibling,i.index=l.index,i.ref=l.ref,i.refCleanup=l.refCleanup,i}function Cc(l,e){l.flags&=65011714;var i=l.alternate;return i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),l}function Wn(l,e,i,t,n,a){var u=0;if(t=l,typeof l=="function")Du(l)&&(u=1);else if(typeof l=="string")u=cm(l,i,Y.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case be:return l=ie(31,i,e,n),l.elementType=be,l.lanes=a,l;case el:return Ci(i.children,n,a,e);case il:u=8,n|=24;break;case X:return l=ie(12,i,e,n|2),l.elementType=X,l.lanes=a,l;case F:return l=ie(13,i,e,n),l.elementType=F,l.lanes=a,l;case Fl:return l=ie(19,i,e,n),l.elementType=Fl,l.lanes=a,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case W:case tl:u=10;break l;case dl:u=9;break l;case xl:u=11;break l;case Pl:u=14;break l;case Wl:u=16,t=null;break l}u=29,i=Error(c(130,l===null?"null":typeof l,"")),t=null}return e=ie(u,i,e,n),e.elementType=l,e.type=t,e.lanes=a,e}function Ci(l,e,i,t){return l=ie(7,l,t,e),l.lanes=i,l}function Ou(l,e,i){return l=ie(6,l,null,e),l.lanes=i,l}function ju(l,e,i){return e=ie(4,l.children!==null?l.children:[],l.key,e),e.lanes=i,e.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},e}var nt=[],at=0,In=null,$n=0,fe=[],he=0,Mi=null,Ue=1,_e="";function Ri(l,e){nt[at++]=$n,nt[at++]=In,In=l,$n=e}function Mc(l,e,i){fe[he++]=Ue,fe[he++]=_e,fe[he++]=Mi,Mi=l;var t=Ue;l=_e;var n=32-le(t)-1;t&=~(1<<n),i+=1;var a=32-le(e)+n;if(30<a){var u=n-n%5;a=(t&(1<<u)-1).toString(32),t>>=u,n-=u,Ue=1<<32-le(e)+n|i<<n|t,_e=a+l}else Ue=1<<a|i<<n|t,_e=l}function Uu(l){l.return!==null&&(Ri(l,1),Mc(l,1,0))}function _u(l){for(;l===In;)In=nt[--at],nt[at]=null,$n=nt[--at],nt[at]=null;for(;l===Mi;)Mi=fe[--he],fe[he]=null,_e=fe[--he],fe[he]=null,Ue=fe[--he],fe[he]=null}var Xl=null,El=null,ol=!1,zi=null,Ae=!1,Nu=Error(c(519));function Di(l){var e=Error(c(418,""));throw Vt(re(e,l)),Nu}function Rc(l){var e=l.stateNode,i=l.type,t=l.memoizedProps;switch(e[Ll]=l,e[Vl]=t,i){case"dialog":ll("cancel",e),ll("close",e);break;case"iframe":case"object":case"embed":ll("load",e);break;case"video":case"audio":for(i=0;i<mn.length;i++)ll(mn[i],e);break;case"source":ll("error",e);break;case"img":case"image":case"link":ll("error",e),ll("load",e);break;case"details":ll("toggle",e);break;case"input":ll("invalid",e),Qo(e,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),qn(e);break;case"select":ll("invalid",e);break;case"textarea":ll("invalid",e),Vo(e,t.value,t.defaultValue,t.children),qn(e)}i=t.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||t.suppressHydrationWarning===!0||Vd(e.textContent,i)?(t.popover!=null&&(ll("beforetoggle",e),ll("toggle",e)),t.onScroll!=null&&ll("scroll",e),t.onScrollEnd!=null&&ll("scrollend",e),t.onClick!=null&&(e.onclick=_a),e=!0):e=!1,e||Di(l)}function zc(l){for(Xl=l.return;Xl;)switch(Xl.tag){case 5:case 13:Ae=!1;return;case 27:case 3:Ae=!0;return;default:Xl=Xl.return}}function Qt(l){if(l!==Xl)return!1;if(!ol)return zc(l),ol=!0,!1;var e=l.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=l.type,i=!(i!=="form"&&i!=="button")||Ps(l.type,l.memoizedProps)),i=!i),i&&El&&Di(l),zc(l),e===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l:{for(l=l.nextSibling,e=0;l;){if(l.nodeType===8)if(i=l.data,i==="/$"){if(e===0){El=Se(l.nextSibling);break l}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++;l=l.nextSibling}El=null}}else e===27?(e=El,ri(l.type)?(l=lo,lo=null,El=l):El=e):El=Xl?Se(l.stateNode.nextSibling):null;return!0}function Xt(){El=Xl=null,ol=!1}function Dc(){var l=zi;return l!==null&&(Jl===null?Jl=l:Jl.push.apply(Jl,l),zi=null),l}function Vt(l){zi===null?zi=[l]:zi.push(l)}var Hu=j(null),Oi=null,Ne=null;function Fe(l,e,i){H(Hu,e._currentValue),e._currentValue=i}function He(l){l._currentValue=Hu.current,G(Hu)}function Bu(l,e,i){for(;l!==null;){var t=l.alternate;if((l.childLanes&e)!==e?(l.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),l===i)break;l=l.return}}function Gu(l,e,i,t){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var a=n.dependencies;if(a!==null){var u=n.child;a=a.firstContext;l:for(;a!==null;){var s=a;a=n;for(var d=0;d<e.length;d++)if(s.context===e[d]){a.lanes|=i,s=a.alternate,s!==null&&(s.lanes|=i),Bu(a.return,i,l),t||(u=null);break l}a=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=i,a=u.alternate,a!==null&&(a.lanes|=i),Bu(u,i,l),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===l){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Zt(l,e,i,t){l=null;for(var n=e,a=!1;n!==null;){if(!a){if((n.flags&524288)!==0)a=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var s=n.type;ee(n.pendingProps.value,u.value)||(l!==null?l.push(s):l=[s])}}else if(n===Il.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(En):l=[En])}n=n.return}l!==null&&Gu(e,l,i,t),e.flags|=262144}function la(l){for(l=l.firstContext;l!==null;){if(!ee(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function ji(l){Oi=l,Ne=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Yl(l){return Oc(Oi,l)}function ea(l,e){return Oi===null&&ji(l),Oc(l,e)}function Oc(l,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},Ne===null){if(l===null)throw Error(c(308));Ne=e,l.dependencies={lanes:0,firstContext:e},l.flags|=524288}else Ne=Ne.next=e;return i}var og=typeof AbortController<"u"?AbortController:function(){var l=[],e=this.signal={aborted:!1,addEventListener:function(i,t){l.push(t)}};this.abort=function(){e.aborted=!0,l.forEach(function(i){return i()})}},cg=o.unstable_scheduleCallback,rg=o.unstable_NormalPriority,Dl={$$typeof:tl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new og,data:new Map,refCount:0}}function Kt(l){l.refCount--,l.refCount===0&&cg(rg,function(){l.controller.abort()})}var kt=null,qu=0,ut=0,st=null;function dg(l,e){if(kt===null){var i=kt=[];qu=0,ut=Ys(),st={status:"pending",value:void 0,then:function(t){i.push(t)}}}return qu++,e.then(jc,jc),e}function jc(){if(--qu===0&&kt!==null){st!==null&&(st.status="fulfilled");var l=kt;kt=null,ut=0,st=null;for(var e=0;e<l.length;e++)(0,l[e])()}}function fg(l,e){var i=[],t={status:"pending",value:null,reason:null,then:function(n){i.push(n)}};return l.then(function(){t.status="fulfilled",t.value=e;for(var n=0;n<i.length;n++)(0,i[n])(e)},function(n){for(t.status="rejected",t.reason=n,n=0;n<i.length;n++)(0,i[n])(void 0)}),t}var Uc=R.S;R.S=function(l,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&dg(l,e),Uc!==null&&Uc(l,e)};var Ui=j(null);function Lu(){var l=Ui.current;return l!==null?l:yl.pooledCache}function ia(l,e){e===null?H(Ui,Ui.current):H(Ui,e.pool)}function _c(){var l=Lu();return l===null?null:{parent:Dl._currentValue,pool:l}}var Jt=Error(c(460)),Nc=Error(c(474)),ta=Error(c(542)),Yu={then:function(){}};function Hc(l){return l=l.status,l==="fulfilled"||l==="rejected"}function na(){}function Bc(l,e,i){switch(i=l[i],i===void 0?l.push(e):i!==e&&(e.then(na,na),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw l=e.reason,wc(l),l;default:if(typeof e.status=="string")e.then(na,na);else{if(l=yl,l!==null&&100<l.shellSuspendCounter)throw Error(c(482));l=e,l.status="pending",l.then(function(t){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=t}},function(t){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=t}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw l=e.reason,wc(l),l}throw Ft=e,Jt}}var Ft=null;function Gc(){if(Ft===null)throw Error(c(459));var l=Ft;return Ft=null,l}function wc(l){if(l===Jt||l===ta)throw Error(c(483))}var Pe=!1;function Qu(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(l,e){l=l.updateQueue,e.updateQueue===l&&(e.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function We(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function Ie(l,e,i){var t=l.updateQueue;if(t===null)return null;if(t=t.shared,(cl&2)!==0){var n=t.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e,e=Pn(l),Tc(l,null,i),e}return Fn(l,t,e,i),Pn(l)}function Pt(l,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var t=e.lanes;t&=l.pendingLanes,i|=t,e.lanes=i,jo(l,i)}}function Vu(l,e){var i=l.updateQueue,t=l.alternate;if(t!==null&&(t=t.updateQueue,i===t)){var n=null,a=null;if(i=i.firstBaseUpdate,i!==null){do{var u={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};a===null?n=a=u:a=a.next=u,i=i.next}while(i!==null);a===null?n=a=e:a=a.next=e}else n=a=e;i={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:t.shared,callbacks:t.callbacks},l.updateQueue=i;return}l=i.lastBaseUpdate,l===null?i.firstBaseUpdate=e:l.next=e,i.lastBaseUpdate=e}var Zu=!1;function Wt(){if(Zu){var l=st;if(l!==null)throw l}}function It(l,e,i,t){Zu=!1;var n=l.updateQueue;Pe=!1;var a=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var d=s,b=d.next;d.next=null,u===null?a=b:u.next=b,u=d;var M=l.alternate;M!==null&&(M=M.updateQueue,s=M.lastBaseUpdate,s!==u&&(s===null?M.firstBaseUpdate=b:s.next=b,M.lastBaseUpdate=d))}if(a!==null){var O=n.baseState;u=0,M=b=d=null,s=a;do{var A=s.lane&-536870913,x=A!==s.lane;if(x?(al&A)===A:(t&A)===A){A!==0&&A===ut&&(Zu=!0),M!==null&&(M=M.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});l:{var K=l,Q=s;A=e;var gl=i;switch(Q.tag){case 1:if(K=Q.payload,typeof K=="function"){O=K.call(gl,O,A);break l}O=K;break l;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Q.payload,A=typeof K=="function"?K.call(gl,O,A):K,A==null)break l;O=U({},O,A);break l;case 2:Pe=!0}}A=s.callback,A!==null&&(l.flags|=64,x&&(l.flags|=8192),x=n.callbacks,x===null?n.callbacks=[A]:x.push(A))}else x={lane:A,tag:s.tag,payload:s.payload,callback:s.callback,next:null},M===null?(b=M=x,d=O):M=M.next=x,u|=A;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;x=s,s=x.next,x.next=null,n.lastBaseUpdate=x,n.shared.pending=null}}while(!0);M===null&&(d=O),n.baseState=d,n.firstBaseUpdate=b,n.lastBaseUpdate=M,a===null&&(n.shared.lanes=0),ui|=u,l.lanes=u,l.memoizedState=O}}function qc(l,e){if(typeof l!="function")throw Error(c(191,l));l.call(e)}function Lc(l,e){var i=l.callbacks;if(i!==null)for(l.callbacks=null,l=0;l<i.length;l++)qc(i[l],e)}var ot=j(null),aa=j(0);function Yc(l,e){l=Qe,H(aa,l),H(ot,e),Qe=l|e.baseLanes}function Ku(){H(aa,Qe),H(ot,ot.current)}function ku(){Qe=aa.current,G(ot),G(aa)}var $e=0,P=null,fl=null,Ml=null,ua=!1,ct=!1,_i=!1,sa=0,$t=0,rt=null,hg=0;function Tl(){throw Error(c(321))}function Ju(l,e){if(e===null)return!1;for(var i=0;i<e.length&&i<l.length;i++)if(!ee(l[i],e[i]))return!1;return!0}function Fu(l,e,i,t,n,a){return $e=a,P=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=l===null||l.memoizedState===null?Tr:Cr,_i=!1,a=i(t,n),_i=!1,ct&&(a=Xc(e,i,t,n)),Qc(l),a}function Qc(l){R.H=ha;var e=fl!==null&&fl.next!==null;if($e=0,Ml=fl=P=null,ua=!1,$t=0,rt=null,e)throw Error(c(300));l===null||Ul||(l=l.dependencies,l!==null&&la(l)&&(Ul=!0))}function Xc(l,e,i,t){P=l;var n=0;do{if(ct&&(rt=null),$t=0,ct=!1,25<=n)throw Error(c(301));if(n+=1,Ml=fl=null,l.updateQueue!=null){var a=l.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}R.H=bg,a=e(i,t)}while(ct);return a}function gg(){var l=R.H,e=l.useState()[0];return e=typeof e.then=="function"?ln(e):e,l=l.useState()[0],(fl!==null?fl.memoizedState:null)!==l&&(P.flags|=1024),e}function Pu(){var l=sa!==0;return sa=0,l}function Wu(l,e,i){e.updateQueue=l.updateQueue,e.flags&=-2053,l.lanes&=~i}function Iu(l){if(ua){for(l=l.memoizedState;l!==null;){var e=l.queue;e!==null&&(e.pending=null),l=l.next}ua=!1}$e=0,Ml=fl=P=null,ct=!1,$t=sa=0,rt=null}function Kl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ml===null?P.memoizedState=Ml=l:Ml=Ml.next=l,Ml}function Rl(){if(fl===null){var l=P.alternate;l=l!==null?l.memoizedState:null}else l=fl.next;var e=Ml===null?P.memoizedState:Ml.next;if(e!==null)Ml=e,fl=l;else{if(l===null)throw P.alternate===null?Error(c(467)):Error(c(310));fl=l,l={memoizedState:fl.memoizedState,baseState:fl.baseState,baseQueue:fl.baseQueue,queue:fl.queue,next:null},Ml===null?P.memoizedState=Ml=l:Ml=Ml.next=l}return Ml}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ln(l){var e=$t;return $t+=1,rt===null&&(rt=[]),l=Bc(rt,l,e),e=P,(Ml===null?e.memoizedState:Ml.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?Tr:Cr),l}function oa(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return ln(l);if(l.$$typeof===tl)return Yl(l)}throw Error(c(438,String(l)))}function ls(l){var e=null,i=P.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var t=P.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(e={data:t.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=$u(),P.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(l),t=0;t<l;t++)i[t]=Yi;return e.index++,i}function Be(l,e){return typeof e=="function"?e(l):e}function ca(l){var e=Rl();return es(e,fl,l)}function es(l,e,i){var t=l.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=i;var n=l.baseQueue,a=t.pending;if(a!==null){if(n!==null){var u=n.next;n.next=a.next,a.next=u}e.baseQueue=n=a,t.pending=null}if(a=l.baseState,n===null)l.memoizedState=a;else{e=n.next;var s=u=null,d=null,b=e,M=!1;do{var O=b.lane&-536870913;if(O!==b.lane?(al&O)===O:($e&O)===O){var A=b.revertLane;if(A===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),O===ut&&(M=!0);else if(($e&A)===A){b=b.next,A===ut&&(M=!0);continue}else O={lane:0,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},d===null?(s=d=O,u=a):d=d.next=O,P.lanes|=A,ui|=A;O=b.action,_i&&i(a,O),a=b.hasEagerState?b.eagerState:i(a,O)}else A={lane:O,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},d===null?(s=d=A,u=a):d=d.next=A,P.lanes|=O,ui|=O;b=b.next}while(b!==null&&b!==e);if(d===null?u=a:d.next=s,!ee(a,l.memoizedState)&&(Ul=!0,M&&(i=st,i!==null)))throw i;l.memoizedState=a,l.baseState=u,l.baseQueue=d,t.lastRenderedState=a}return n===null&&(t.lanes=0),[l.memoizedState,t.dispatch]}function is(l){var e=Rl(),i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=l;var t=i.dispatch,n=i.pending,a=e.memoizedState;if(n!==null){i.pending=null;var u=n=n.next;do a=l(a,u.action),u=u.next;while(u!==n);ee(a,e.memoizedState)||(Ul=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),i.lastRenderedState=a}return[a,t]}function Vc(l,e,i){var t=P,n=Rl(),a=ol;if(a){if(i===void 0)throw Error(c(407));i=i()}else i=e();var u=!ee((fl||n).memoizedState,i);u&&(n.memoizedState=i,Ul=!0),n=n.queue;var s=kc.bind(null,t,n,l);if(en(2048,8,s,[l]),n.getSnapshot!==e||u||Ml!==null&&Ml.memoizedState.tag&1){if(t.flags|=2048,dt(9,ra(),Kc.bind(null,t,n,i,e),null),yl===null)throw Error(c(349));a||($e&124)!==0||Zc(t,e,i)}return i}function Zc(l,e,i){l.flags|=16384,l={getSnapshot:e,value:i},e=P.updateQueue,e===null?(e=$u(),P.updateQueue=e,e.stores=[l]):(i=e.stores,i===null?e.stores=[l]:i.push(l))}function Kc(l,e,i,t){e.value=i,e.getSnapshot=t,Jc(e)&&Fc(l)}function kc(l,e,i){return i(function(){Jc(e)&&Fc(l)})}function Jc(l){var e=l.getSnapshot;l=l.value;try{var i=e();return!ee(l,i)}catch{return!0}}function Fc(l){var e=it(l,2);e!==null&&se(e,l,2)}function ts(l){var e=Kl();if(typeof l=="function"){var i=l;if(l=i(),_i){Ke(!0);try{i()}finally{Ke(!1)}}}return e.memoizedState=e.baseState=l,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:l},e}function Pc(l,e,i,t){return l.baseState=i,es(l,fl,typeof t=="function"?t:Be)}function mg(l,e,i,t,n){if(fa(l))throw Error(c(485));if(l=e.action,l!==null){var a={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){a.listeners.push(u)}};R.T!==null?i(!0):a.isTransition=!1,t(a),i=e.pending,i===null?(a.next=e.pending=a,Wc(e,a)):(a.next=i.next,e.pending=i.next=a)}}function Wc(l,e){var i=e.action,t=e.payload,n=l.state;if(e.isTransition){var a=R.T,u={};R.T=u;try{var s=i(n,t),d=R.S;d!==null&&d(u,s),Ic(l,e,s)}catch(b){ns(l,e,b)}finally{R.T=a}}else try{a=i(n,t),Ic(l,e,a)}catch(b){ns(l,e,b)}}function Ic(l,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(t){$c(l,e,t)},function(t){return ns(l,e,t)}):$c(l,e,i)}function $c(l,e,i){e.status="fulfilled",e.value=i,lr(e),l.state=i,e=l.pending,e!==null&&(i=e.next,i===e?l.pending=null:(i=i.next,e.next=i,Wc(l,i)))}function ns(l,e,i){var t=l.pending;if(l.pending=null,t!==null){t=t.next;do e.status="rejected",e.reason=i,lr(e),e=e.next;while(e!==t)}l.action=null}function lr(l){l=l.listeners;for(var e=0;e<l.length;e++)(0,l[e])()}function er(l,e){return e}function ir(l,e){if(ol){var i=yl.formState;if(i!==null){l:{var t=P;if(ol){if(El){e:{for(var n=El,a=Ae;n.nodeType!==8;){if(!a){n=null;break e}if(n=Se(n.nextSibling),n===null){n=null;break e}}a=n.data,n=a==="F!"||a==="F"?n:null}if(n){El=Se(n.nextSibling),t=n.data==="F!";break l}}Di(t)}t=!1}t&&(e=i[0])}}return i=Kl(),i.memoizedState=i.baseState=e,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},i.queue=t,i=Er.bind(null,P,t),t.dispatch=i,t=ts(!1),a=cs.bind(null,P,!1,t.queue),t=Kl(),n={state:e,dispatch:null,action:l,pending:null},t.queue=n,i=mg.bind(null,P,n,a,i),n.dispatch=i,t.memoizedState=l,[e,i,!1]}function tr(l){var e=Rl();return nr(e,fl,l)}function nr(l,e,i){if(e=es(l,e,er)[0],l=ca(Be)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var t=ln(e)}catch(u){throw u===Jt?ta:u}else t=e;e=Rl();var n=e.queue,a=n.dispatch;return i!==e.memoizedState&&(P.flags|=2048,dt(9,ra(),vg.bind(null,n,i),null)),[t,a,l]}function vg(l,e){l.action=e}function ar(l){var e=Rl(),i=fl;if(i!==null)return nr(e,i,l);Rl(),e=e.memoizedState,i=Rl();var t=i.queue.dispatch;return i.memoizedState=l,[e,t,!1]}function dt(l,e,i,t){return l={tag:l,create:i,deps:t,inst:e,next:null},e=P.updateQueue,e===null&&(e=$u(),P.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=l.next=l:(t=i.next,i.next=l,l.next=t,e.lastEffect=l),l}function ra(){return{destroy:void 0,resource:void 0}}function ur(){return Rl().memoizedState}function da(l,e,i,t){var n=Kl();t=t===void 0?null:t,P.flags|=l,n.memoizedState=dt(1|e,ra(),i,t)}function en(l,e,i,t){var n=Rl();t=t===void 0?null:t;var a=n.memoizedState.inst;fl!==null&&t!==null&&Ju(t,fl.memoizedState.deps)?n.memoizedState=dt(e,a,i,t):(P.flags|=l,n.memoizedState=dt(1|e,a,i,t))}function sr(l,e){da(8390656,8,l,e)}function or(l,e){en(2048,8,l,e)}function cr(l,e){return en(4,2,l,e)}function rr(l,e){return en(4,4,l,e)}function dr(l,e){if(typeof e=="function"){l=l();var i=e(l);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return l=l(),e.current=l,function(){e.current=null}}function fr(l,e,i){i=i!=null?i.concat([l]):null,en(4,4,dr.bind(null,e,l),i)}function as(){}function hr(l,e){var i=Rl();e=e===void 0?null:e;var t=i.memoizedState;return e!==null&&Ju(e,t[1])?t[0]:(i.memoizedState=[l,e],l)}function gr(l,e){var i=Rl();e=e===void 0?null:e;var t=i.memoizedState;if(e!==null&&Ju(e,t[1]))return t[0];if(t=l(),_i){Ke(!0);try{l()}finally{Ke(!1)}}return i.memoizedState=[t,e],t}function us(l,e,i){return i===void 0||($e&1073741824)!==0?l.memoizedState=e:(l.memoizedState=i,l=yd(),P.lanes|=l,ui|=l,i)}function mr(l,e,i,t){return ee(i,e)?i:ot.current!==null?(l=us(l,i,t),ee(l,e)||(Ul=!0),l):($e&42)===0?(Ul=!0,l.memoizedState=i):(l=yd(),P.lanes|=l,ui|=l,e)}function vr(l,e,i,t,n){var a=B.p;B.p=a!==0&&8>a?a:8;var u=R.T,s={};R.T=s,cs(l,!1,e,i);try{var d=n(),b=R.S;if(b!==null&&b(s,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var M=fg(d,t);tn(l,e,M,ue(l))}else tn(l,e,t,ue(l))}catch(O){tn(l,e,{then:function(){},status:"rejected",reason:O},ue())}finally{B.p=a,R.T=u}}function yg(){}function ss(l,e,i,t){if(l.tag!==5)throw Error(c(476));var n=yr(l).queue;vr(l,n,e,Z,i===null?yg:function(){return pr(l),i(t)})}function yr(l){var e=l.memoizedState;if(e!==null)return e;e={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:Z},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Be,lastRenderedState:i},next:null},l.memoizedState=e,l=l.alternate,l!==null&&(l.memoizedState=e),e}function pr(l){var e=yr(l).next.queue;tn(l,e,{},ue())}function os(){return Yl(En)}function Sr(){return Rl().memoizedState}function br(){return Rl().memoizedState}function pg(l){for(var e=l.return;e!==null;){switch(e.tag){case 24:case 3:var i=ue();l=We(i);var t=Ie(e,l,i);t!==null&&(se(t,e,i),Pt(t,e,i)),e={cache:wu()},l.payload=e;return}e=e.return}}function Sg(l,e,i){var t=ue();i={lane:t,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},fa(l)?Ar(e,i):(i=zu(l,e,i,t),i!==null&&(se(i,l,t),xr(i,e,t)))}function Er(l,e,i){var t=ue();tn(l,e,i,t)}function tn(l,e,i,t){var n={lane:t,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(fa(l))Ar(e,n);else{var a=l.alternate;if(l.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var u=e.lastRenderedState,s=a(u,i);if(n.hasEagerState=!0,n.eagerState=s,ee(s,u))return Fn(l,e,n,0),yl===null&&Jn(),!1}catch{}finally{}if(i=zu(l,e,n,t),i!==null)return se(i,l,t),xr(i,e,t),!0}return!1}function cs(l,e,i,t){if(t={lane:2,revertLane:Ys(),action:t,hasEagerState:!1,eagerState:null,next:null},fa(l)){if(e)throw Error(c(479))}else e=zu(l,i,t,2),e!==null&&se(e,l,2)}function fa(l){var e=l.alternate;return l===P||e!==null&&e===P}function Ar(l,e){ct=ua=!0;var i=l.pending;i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e}function xr(l,e,i){if((i&4194048)!==0){var t=e.lanes;t&=l.pendingLanes,i|=t,e.lanes=i,jo(l,i)}}var ha={readContext:Yl,use:oa,useCallback:Tl,useContext:Tl,useEffect:Tl,useImperativeHandle:Tl,useLayoutEffect:Tl,useInsertionEffect:Tl,useMemo:Tl,useReducer:Tl,useRef:Tl,useState:Tl,useDebugValue:Tl,useDeferredValue:Tl,useTransition:Tl,useSyncExternalStore:Tl,useId:Tl,useHostTransitionStatus:Tl,useFormState:Tl,useActionState:Tl,useOptimistic:Tl,useMemoCache:Tl,useCacheRefresh:Tl},Tr={readContext:Yl,use:oa,useCallback:function(l,e){return Kl().memoizedState=[l,e===void 0?null:e],l},useContext:Yl,useEffect:sr,useImperativeHandle:function(l,e,i){i=i!=null?i.concat([l]):null,da(4194308,4,dr.bind(null,e,l),i)},useLayoutEffect:function(l,e){return da(4194308,4,l,e)},useInsertionEffect:function(l,e){da(4,2,l,e)},useMemo:function(l,e){var i=Kl();e=e===void 0?null:e;var t=l();if(_i){Ke(!0);try{l()}finally{Ke(!1)}}return i.memoizedState=[t,e],t},useReducer:function(l,e,i){var t=Kl();if(i!==void 0){var n=i(e);if(_i){Ke(!0);try{i(e)}finally{Ke(!1)}}}else n=e;return t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},t.queue=l,l=l.dispatch=Sg.bind(null,P,l),[t.memoizedState,l]},useRef:function(l){var e=Kl();return l={current:l},e.memoizedState=l},useState:function(l){l=ts(l);var e=l.queue,i=Er.bind(null,P,e);return e.dispatch=i,[l.memoizedState,i]},useDebugValue:as,useDeferredValue:function(l,e){var i=Kl();return us(i,l,e)},useTransition:function(){var l=ts(!1);return l=vr.bind(null,P,l.queue,!0,!1),Kl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,e,i){var t=P,n=Kl();if(ol){if(i===void 0)throw Error(c(407));i=i()}else{if(i=e(),yl===null)throw Error(c(349));(al&124)!==0||Zc(t,e,i)}n.memoizedState=i;var a={value:i,getSnapshot:e};return n.queue=a,sr(kc.bind(null,t,a,l),[l]),t.flags|=2048,dt(9,ra(),Kc.bind(null,t,a,i,e),null),i},useId:function(){var l=Kl(),e=yl.identifierPrefix;if(ol){var i=_e,t=Ue;i=(t&~(1<<32-le(t)-1)).toString(32)+i,e="«"+e+"R"+i,i=sa++,0<i&&(e+="H"+i.toString(32)),e+="»"}else i=hg++,e="«"+e+"r"+i.toString(32)+"»";return l.memoizedState=e},useHostTransitionStatus:os,useFormState:ir,useActionState:ir,useOptimistic:function(l){var e=Kl();e.memoizedState=e.baseState=l;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=cs.bind(null,P,!0,i),i.dispatch=e,[l,e]},useMemoCache:ls,useCacheRefresh:function(){return Kl().memoizedState=pg.bind(null,P)}},Cr={readContext:Yl,use:oa,useCallback:hr,useContext:Yl,useEffect:or,useImperativeHandle:fr,useInsertionEffect:cr,useLayoutEffect:rr,useMemo:gr,useReducer:ca,useRef:ur,useState:function(){return ca(Be)},useDebugValue:as,useDeferredValue:function(l,e){var i=Rl();return mr(i,fl.memoizedState,l,e)},useTransition:function(){var l=ca(Be)[0],e=Rl().memoizedState;return[typeof l=="boolean"?l:ln(l),e]},useSyncExternalStore:Vc,useId:Sr,useHostTransitionStatus:os,useFormState:tr,useActionState:tr,useOptimistic:function(l,e){var i=Rl();return Pc(i,fl,l,e)},useMemoCache:ls,useCacheRefresh:br},bg={readContext:Yl,use:oa,useCallback:hr,useContext:Yl,useEffect:or,useImperativeHandle:fr,useInsertionEffect:cr,useLayoutEffect:rr,useMemo:gr,useReducer:is,useRef:ur,useState:function(){return is(Be)},useDebugValue:as,useDeferredValue:function(l,e){var i=Rl();return fl===null?us(i,l,e):mr(i,fl.memoizedState,l,e)},useTransition:function(){var l=is(Be)[0],e=Rl().memoizedState;return[typeof l=="boolean"?l:ln(l),e]},useSyncExternalStore:Vc,useId:Sr,useHostTransitionStatus:os,useFormState:ar,useActionState:ar,useOptimistic:function(l,e){var i=Rl();return fl!==null?Pc(i,fl,l,e):(i.baseState=l,[l,i.queue.dispatch])},useMemoCache:ls,useCacheRefresh:br},ft=null,nn=0;function ga(l){var e=nn;return nn+=1,ft===null&&(ft=[]),Bc(ft,l,e)}function an(l,e){e=e.props.ref,l.ref=e!==void 0?e:null}function ma(l,e){throw e.$$typeof===_?Error(c(525)):(l=Object.prototype.toString.call(e),Error(c(31,l==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":l)))}function Mr(l){var e=l._init;return e(l._payload)}function Rr(l){function e(y,m){if(l){var S=y.deletions;S===null?(y.deletions=[m],y.flags|=16):S.push(m)}}function i(y,m){if(!l)return null;for(;m!==null;)e(y,m),m=m.sibling;return null}function t(y){for(var m=new Map;y!==null;)y.key!==null?m.set(y.key,y):m.set(y.index,y),y=y.sibling;return m}function n(y,m){return y=je(y,m),y.index=0,y.sibling=null,y}function a(y,m,S){return y.index=S,l?(S=y.alternate,S!==null?(S=S.index,S<m?(y.flags|=67108866,m):S):(y.flags|=67108866,m)):(y.flags|=1048576,m)}function u(y){return l&&y.alternate===null&&(y.flags|=67108866),y}function s(y,m,S,z){return m===null||m.tag!==6?(m=Ou(S,y.mode,z),m.return=y,m):(m=n(m,S),m.return=y,m)}function d(y,m,S,z){var w=S.type;return w===el?M(y,m,S.props.children,z,S.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Wl&&Mr(w)===m.type)?(m=n(m,S.props),an(m,S),m.return=y,m):(m=Wn(S.type,S.key,S.props,null,y.mode,z),an(m,S),m.return=y,m)}function b(y,m,S,z){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=ju(S,y.mode,z),m.return=y,m):(m=n(m,S.children||[]),m.return=y,m)}function M(y,m,S,z,w){return m===null||m.tag!==7?(m=Ci(S,y.mode,z,w),m.return=y,m):(m=n(m,S),m.return=y,m)}function O(y,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Ou(""+m,y.mode,S),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case L:return S=Wn(m.type,m.key,m.props,null,y.mode,S),an(S,m),S.return=y,S;case nl:return m=ju(m,y.mode,S),m.return=y,m;case Wl:var z=m._init;return m=z(m._payload),O(y,m,S)}if(ql(m)||wl(m))return m=Ci(m,y.mode,S,null),m.return=y,m;if(typeof m.then=="function")return O(y,ga(m),S);if(m.$$typeof===tl)return O(y,ea(y,m),S);ma(y,m)}return null}function A(y,m,S,z){var w=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return w!==null?null:s(y,m,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case L:return S.key===w?d(y,m,S,z):null;case nl:return S.key===w?b(y,m,S,z):null;case Wl:return w=S._init,S=w(S._payload),A(y,m,S,z)}if(ql(S)||wl(S))return w!==null?null:M(y,m,S,z,null);if(typeof S.then=="function")return A(y,m,ga(S),z);if(S.$$typeof===tl)return A(y,m,ea(y,S),z);ma(y,S)}return null}function x(y,m,S,z,w){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return y=y.get(S)||null,s(m,y,""+z,w);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return y=y.get(z.key===null?S:z.key)||null,d(m,y,z,w);case nl:return y=y.get(z.key===null?S:z.key)||null,b(m,y,z,w);case Wl:var I=z._init;return z=I(z._payload),x(y,m,S,z,w)}if(ql(z)||wl(z))return y=y.get(S)||null,M(m,y,z,w,null);if(typeof z.then=="function")return x(y,m,S,ga(z),w);if(z.$$typeof===tl)return x(y,m,S,ea(m,z),w);ma(m,z)}return null}function K(y,m,S,z){for(var w=null,I=null,q=m,V=m=0,Nl=null;q!==null&&V<S.length;V++){q.index>V?(Nl=q,q=null):Nl=q.sibling;var sl=A(y,q,S[V],z);if(sl===null){q===null&&(q=Nl);break}l&&q&&sl.alternate===null&&e(y,q),m=a(sl,m,V),I===null?w=sl:I.sibling=sl,I=sl,q=Nl}if(V===S.length)return i(y,q),ol&&Ri(y,V),w;if(q===null){for(;V<S.length;V++)q=O(y,S[V],z),q!==null&&(m=a(q,m,V),I===null?w=q:I.sibling=q,I=q);return ol&&Ri(y,V),w}for(q=t(q);V<S.length;V++)Nl=x(q,y,V,S[V],z),Nl!==null&&(l&&Nl.alternate!==null&&q.delete(Nl.key===null?V:Nl.key),m=a(Nl,m,V),I===null?w=Nl:I.sibling=Nl,I=Nl);return l&&q.forEach(function(mi){return e(y,mi)}),ol&&Ri(y,V),w}function Q(y,m,S,z){if(S==null)throw Error(c(151));for(var w=null,I=null,q=m,V=m=0,Nl=null,sl=S.next();q!==null&&!sl.done;V++,sl=S.next()){q.index>V?(Nl=q,q=null):Nl=q.sibling;var mi=A(y,q,sl.value,z);if(mi===null){q===null&&(q=Nl);break}l&&q&&mi.alternate===null&&e(y,q),m=a(mi,m,V),I===null?w=mi:I.sibling=mi,I=mi,q=Nl}if(sl.done)return i(y,q),ol&&Ri(y,V),w;if(q===null){for(;!sl.done;V++,sl=S.next())sl=O(y,sl.value,z),sl!==null&&(m=a(sl,m,V),I===null?w=sl:I.sibling=sl,I=sl);return ol&&Ri(y,V),w}for(q=t(q);!sl.done;V++,sl=S.next())sl=x(q,y,V,sl.value,z),sl!==null&&(l&&sl.alternate!==null&&q.delete(sl.key===null?V:sl.key),m=a(sl,m,V),I===null?w=sl:I.sibling=sl,I=sl);return l&&q.forEach(function(Em){return e(y,Em)}),ol&&Ri(y,V),w}function gl(y,m,S,z){if(typeof S=="object"&&S!==null&&S.type===el&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case L:l:{for(var w=S.key;m!==null;){if(m.key===w){if(w=S.type,w===el){if(m.tag===7){i(y,m.sibling),z=n(m,S.props.children),z.return=y,y=z;break l}}else if(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Wl&&Mr(w)===m.type){i(y,m.sibling),z=n(m,S.props),an(z,S),z.return=y,y=z;break l}i(y,m);break}else e(y,m);m=m.sibling}S.type===el?(z=Ci(S.props.children,y.mode,z,S.key),z.return=y,y=z):(z=Wn(S.type,S.key,S.props,null,y.mode,z),an(z,S),z.return=y,y=z)}return u(y);case nl:l:{for(w=S.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){i(y,m.sibling),z=n(m,S.children||[]),z.return=y,y=z;break l}else{i(y,m);break}else e(y,m);m=m.sibling}z=ju(S,y.mode,z),z.return=y,y=z}return u(y);case Wl:return w=S._init,S=w(S._payload),gl(y,m,S,z)}if(ql(S))return K(y,m,S,z);if(wl(S)){if(w=wl(S),typeof w!="function")throw Error(c(150));return S=w.call(S),Q(y,m,S,z)}if(typeof S.then=="function")return gl(y,m,ga(S),z);if(S.$$typeof===tl)return gl(y,m,ea(y,S),z);ma(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(i(y,m.sibling),z=n(m,S),z.return=y,y=z):(i(y,m),z=Ou(S,y.mode,z),z.return=y,y=z),u(y)):i(y,m)}return function(y,m,S,z){try{nn=0;var w=gl(y,m,S,z);return ft=null,w}catch(q){if(q===Jt||q===ta)throw q;var I=ie(29,q,null,y.mode);return I.lanes=z,I.return=y,I}finally{}}}var ht=Rr(!0),zr=Rr(!1),ge=j(null),xe=null;function li(l){var e=l.alternate;H(Ol,Ol.current&1),H(ge,l),xe===null&&(e===null||ot.current!==null||e.memoizedState!==null)&&(xe=l)}function Dr(l){if(l.tag===22){if(H(Ol,Ol.current),H(ge,l),xe===null){var e=l.alternate;e!==null&&e.memoizedState!==null&&(xe=l)}}else ei()}function ei(){H(Ol,Ol.current),H(ge,ge.current)}function Ge(l){G(ge),xe===l&&(xe=null),G(Ol)}var Ol=j(0);function va(l){for(var e=l;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||$s(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break;for(;e.sibling===null;){if(e.return===null||e.return===l)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function rs(l,e,i,t){e=l.memoizedState,i=i(t,e),i=i==null?e:U({},e,i),l.memoizedState=i,l.lanes===0&&(l.updateQueue.baseState=i)}var ds={enqueueSetState:function(l,e,i){l=l._reactInternals;var t=ue(),n=We(t);n.payload=e,i!=null&&(n.callback=i),e=Ie(l,n,t),e!==null&&(se(e,l,t),Pt(e,l,t))},enqueueReplaceState:function(l,e,i){l=l._reactInternals;var t=ue(),n=We(t);n.tag=1,n.payload=e,i!=null&&(n.callback=i),e=Ie(l,n,t),e!==null&&(se(e,l,t),Pt(e,l,t))},enqueueForceUpdate:function(l,e){l=l._reactInternals;var i=ue(),t=We(i);t.tag=2,e!=null&&(t.callback=e),e=Ie(l,t,i),e!==null&&(se(e,l,i),Pt(e,l,i))}};function Or(l,e,i,t,n,a,u){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(t,a,u):e.prototype&&e.prototype.isPureReactComponent?!Lt(i,t)||!Lt(n,a):!0}function jr(l,e,i,t){l=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,t),e.state!==l&&ds.enqueueReplaceState(e,e.state,null)}function Ni(l,e){var i=e;if("ref"in e){i={};for(var t in e)t!=="ref"&&(i[t]=e[t])}if(l=l.defaultProps){i===e&&(i=U({},i));for(var n in l)i[n]===void 0&&(i[n]=l[n])}return i}var ya=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)};function Ur(l){ya(l)}function _r(l){console.error(l)}function Nr(l){ya(l)}function pa(l,e){try{var i=l.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(t){setTimeout(function(){throw t})}}function Hr(l,e,i){try{var t=l.onCaughtError;t(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fs(l,e,i){return i=We(i),i.tag=3,i.payload={element:null},i.callback=function(){pa(l,e)},i}function Br(l){return l=We(l),l.tag=3,l}function Gr(l,e,i,t){var n=i.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;l.payload=function(){return n(a)},l.callback=function(){Hr(e,i,t)}}var u=i.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(l.callback=function(){Hr(e,i,t),typeof n!="function"&&(si===null?si=new Set([this]):si.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})})}function Eg(l,e,i,t,n){if(i.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(e=i.alternate,e!==null&&Zt(e,i,n,!0),i=ge.current,i!==null){switch(i.tag){case 13:return xe===null?Bs():i.alternate===null&&Al===0&&(Al=3),i.flags&=-257,i.flags|=65536,i.lanes=n,t===Yu?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([t]):e.add(t),ws(l,t,n)),!1;case 22:return i.flags|=65536,t===Yu?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([t])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([t]):i.add(t)),ws(l,t,n)),!1}throw Error(c(435,i.tag))}return ws(l,t,n),Bs(),!1}if(ol)return e=ge.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,t!==Nu&&(l=Error(c(422),{cause:t}),Vt(re(l,i)))):(t!==Nu&&(e=Error(c(423),{cause:t}),Vt(re(e,i))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,t=re(t,i),n=fs(l.stateNode,t,n),Vu(l,n),Al!==4&&(Al=2)),!1;var a=Error(c(520),{cause:t});if(a=re(a,i),fn===null?fn=[a]:fn.push(a),Al!==4&&(Al=2),e===null)return!0;t=re(t,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,l=n&-n,i.lanes|=l,l=fs(i.stateNode,t,l),Vu(i,l),!1;case 1:if(e=i.type,a=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(si===null||!si.has(a))))return i.flags|=65536,n&=-n,i.lanes|=n,n=Br(n),Gr(n,l,i,t),Vu(i,n),!1}i=i.return}while(i!==null);return!1}var wr=Error(c(461)),Ul=!1;function Hl(l,e,i,t){e.child=l===null?zr(e,null,i,t):ht(e,l.child,i,t)}function qr(l,e,i,t,n){i=i.render;var a=e.ref;if("ref"in t){var u={};for(var s in t)s!=="ref"&&(u[s]=t[s])}else u=t;return ji(e),t=Fu(l,e,i,u,a,n),s=Pu(),l!==null&&!Ul?(Wu(l,e,n),we(l,e,n)):(ol&&s&&Uu(e),e.flags|=1,Hl(l,e,t,n),e.child)}function Lr(l,e,i,t,n){if(l===null){var a=i.type;return typeof a=="function"&&!Du(a)&&a.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=a,Yr(l,e,a,t,n)):(l=Wn(i.type,null,t,e,e.mode,n),l.ref=e.ref,l.return=e,e.child=l)}if(a=l.child,!bs(l,n)){var u=a.memoizedProps;if(i=i.compare,i=i!==null?i:Lt,i(u,t)&&l.ref===e.ref)return we(l,e,n)}return e.flags|=1,l=je(a,t),l.ref=e.ref,l.return=e,e.child=l}function Yr(l,e,i,t,n){if(l!==null){var a=l.memoizedProps;if(Lt(a,t)&&l.ref===e.ref)if(Ul=!1,e.pendingProps=t=a,bs(l,n))(l.flags&131072)!==0&&(Ul=!0);else return e.lanes=l.lanes,we(l,e,n)}return hs(l,e,i,t,n)}function Qr(l,e,i){var t=e.pendingProps,n=t.children,a=l!==null?l.memoizedState:null;if(t.mode==="hidden"){if((e.flags&128)!==0){if(t=a!==null?a.baseLanes|i:i,l!==null){for(n=e.child=l.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;e.childLanes=a&~t}else e.childLanes=0,e.child=null;return Xr(l,e,t,i)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},l!==null&&ia(e,a!==null?a.cachePool:null),a!==null?Yc(e,a):Ku(),Dr(e);else return e.lanes=e.childLanes=536870912,Xr(l,e,a!==null?a.baseLanes|i:i,i)}else a!==null?(ia(e,a.cachePool),Yc(e,a),ei(),e.memoizedState=null):(l!==null&&ia(e,null),Ku(),ei());return Hl(l,e,n,i),e.child}function Xr(l,e,i,t){var n=Lu();return n=n===null?null:{parent:Dl._currentValue,pool:n},e.memoizedState={baseLanes:i,cachePool:n},l!==null&&ia(e,null),Ku(),Dr(e),l!==null&&Zt(l,e,t,!0),null}function Sa(l,e){var i=e.ref;if(i===null)l!==null&&l.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(c(284));(l===null||l.ref!==i)&&(e.flags|=4194816)}}function hs(l,e,i,t,n){return ji(e),i=Fu(l,e,i,t,void 0,n),t=Pu(),l!==null&&!Ul?(Wu(l,e,n),we(l,e,n)):(ol&&t&&Uu(e),e.flags|=1,Hl(l,e,i,n),e.child)}function Vr(l,e,i,t,n,a){return ji(e),e.updateQueue=null,i=Xc(e,t,i,n),Qc(l),t=Pu(),l!==null&&!Ul?(Wu(l,e,a),we(l,e,a)):(ol&&t&&Uu(e),e.flags|=1,Hl(l,e,i,a),e.child)}function Zr(l,e,i,t,n){if(ji(e),e.stateNode===null){var a=tt,u=i.contextType;typeof u=="object"&&u!==null&&(a=Yl(u)),a=new i(t,a),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=ds,e.stateNode=a,a._reactInternals=e,a=e.stateNode,a.props=t,a.state=e.memoizedState,a.refs={},Qu(e),u=i.contextType,a.context=typeof u=="object"&&u!==null?Yl(u):tt,a.state=e.memoizedState,u=i.getDerivedStateFromProps,typeof u=="function"&&(rs(e,i,u,t),a.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(u=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),u!==a.state&&ds.enqueueReplaceState(a,a.state,null),It(e,t,a,n),Wt(),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308),t=!0}else if(l===null){a=e.stateNode;var s=e.memoizedProps,d=Ni(i,s);a.props=d;var b=a.context,M=i.contextType;u=tt,typeof M=="object"&&M!==null&&(u=Yl(M));var O=i.getDerivedStateFromProps;M=typeof O=="function"||typeof a.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,M||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s||b!==u)&&jr(e,a,t,u),Pe=!1;var A=e.memoizedState;a.state=A,It(e,t,a,n),Wt(),b=e.memoizedState,s||A!==b||Pe?(typeof O=="function"&&(rs(e,i,O,t),b=e.memoizedState),(d=Pe||Or(e,i,d,t,A,b,u))?(M||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=b),a.props=t,a.state=b,a.context=u,t=d):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{a=e.stateNode,Xu(l,e),u=e.memoizedProps,M=Ni(i,u),a.props=M,O=e.pendingProps,A=a.context,b=i.contextType,d=tt,typeof b=="object"&&b!==null&&(d=Yl(b)),s=i.getDerivedStateFromProps,(b=typeof s=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==O||A!==d)&&jr(e,a,t,d),Pe=!1,A=e.memoizedState,a.state=A,It(e,t,a,n),Wt();var x=e.memoizedState;u!==O||A!==x||Pe||l!==null&&l.dependencies!==null&&la(l.dependencies)?(typeof s=="function"&&(rs(e,i,s,t),x=e.memoizedState),(M=Pe||Or(e,i,M,t,A,x,d)||l!==null&&l.dependencies!==null&&la(l.dependencies))?(b||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,x,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,x,d)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===l.memoizedProps&&A===l.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&A===l.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=x),a.props=t,a.state=x,a.context=d,t=M):(typeof a.componentDidUpdate!="function"||u===l.memoizedProps&&A===l.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&A===l.memoizedState||(e.flags|=1024),t=!1)}return a=t,Sa(l,e),t=(e.flags&128)!==0,a||t?(a=e.stateNode,i=t&&typeof i.getDerivedStateFromError!="function"?null:a.render(),e.flags|=1,l!==null&&t?(e.child=ht(e,l.child,null,n),e.child=ht(e,null,i,n)):Hl(l,e,i,n),e.memoizedState=a.state,l=e.child):l=we(l,e,n),l}function Kr(l,e,i,t){return Xt(),e.flags|=256,Hl(l,e,i,t),e.child}var gs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ms(l){return{baseLanes:l,cachePool:_c()}}function vs(l,e,i){return l=l!==null?l.childLanes&~i:0,e&&(l|=me),l}function kr(l,e,i){var t=e.pendingProps,n=!1,a=(e.flags&128)!==0,u;if((u=a)||(u=l!==null&&l.memoizedState===null?!1:(Ol.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,l===null){if(ol){if(n?li(e):ei(),ol){var s=El,d;if(d=s){l:{for(d=s,s=Ae;d.nodeType!==8;){if(!s){s=null;break l}if(d=Se(d.nextSibling),d===null){s=null;break l}}s=d}s!==null?(e.memoizedState={dehydrated:s,treeContext:Mi!==null?{id:Ue,overflow:_e}:null,retryLane:536870912,hydrationErrors:null},d=ie(18,null,null,0),d.stateNode=s,d.return=e,e.child=d,Xl=e,El=null,d=!0):d=!1}d||Di(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return $s(s)?e.lanes=32:e.lanes=536870912,null;Ge(e)}return s=t.children,t=t.fallback,n?(ei(),n=e.mode,s=ba({mode:"hidden",children:s},n),t=Ci(t,n,i,null),s.return=e,t.return=e,s.sibling=t,e.child=s,n=e.child,n.memoizedState=ms(i),n.childLanes=vs(l,u,i),e.memoizedState=gs,t):(li(e),ys(e,s))}if(d=l.memoizedState,d!==null&&(s=d.dehydrated,s!==null)){if(a)e.flags&256?(li(e),e.flags&=-257,e=ps(l,e,i)):e.memoizedState!==null?(ei(),e.child=l.child,e.flags|=128,e=null):(ei(),n=t.fallback,s=e.mode,t=ba({mode:"visible",children:t.children},s),n=Ci(n,s,i,null),n.flags|=2,t.return=e,n.return=e,t.sibling=n,e.child=t,ht(e,l.child,null,i),t=e.child,t.memoizedState=ms(i),t.childLanes=vs(l,u,i),e.memoizedState=gs,e=n);else if(li(e),$s(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var b=u.dgst;u=b,t=Error(c(419)),t.stack="",t.digest=u,Vt({value:t,source:null,stack:null}),e=ps(l,e,i)}else if(Ul||Zt(l,e,i,!1),u=(i&l.childLanes)!==0,Ul||u){if(u=yl,u!==null&&(t=i&-i,t=(t&42)!==0?1:lu(t),t=(t&(u.suspendedLanes|i))!==0?0:t,t!==0&&t!==d.retryLane))throw d.retryLane=t,it(l,t),se(u,l,t),wr;s.data==="$?"||Bs(),e=ps(l,e,i)}else s.data==="$?"?(e.flags|=192,e.child=l.child,e=null):(l=d.treeContext,El=Se(s.nextSibling),Xl=e,ol=!0,zi=null,Ae=!1,l!==null&&(fe[he++]=Ue,fe[he++]=_e,fe[he++]=Mi,Ue=l.id,_e=l.overflow,Mi=e),e=ys(e,t.children),e.flags|=4096);return e}return n?(ei(),n=t.fallback,s=e.mode,d=l.child,b=d.sibling,t=je(d,{mode:"hidden",children:t.children}),t.subtreeFlags=d.subtreeFlags&65011712,b!==null?n=je(b,n):(n=Ci(n,s,i,null),n.flags|=2),n.return=e,t.return=e,t.sibling=n,e.child=t,t=n,n=e.child,s=l.child.memoizedState,s===null?s=ms(i):(d=s.cachePool,d!==null?(b=Dl._currentValue,d=d.parent!==b?{parent:b,pool:b}:d):d=_c(),s={baseLanes:s.baseLanes|i,cachePool:d}),n.memoizedState=s,n.childLanes=vs(l,u,i),e.memoizedState=gs,t):(li(e),i=l.child,l=i.sibling,i=je(i,{mode:"visible",children:t.children}),i.return=e,i.sibling=null,l!==null&&(u=e.deletions,u===null?(e.deletions=[l],e.flags|=16):u.push(l)),e.child=i,e.memoizedState=null,i)}function ys(l,e){return e=ba({mode:"visible",children:e},l.mode),e.return=l,l.child=e}function ba(l,e){return l=ie(22,l,null,e),l.lanes=0,l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},l}function ps(l,e,i){return ht(e,l.child,null,i),l=ys(e,e.pendingProps.children),l.flags|=2,e.memoizedState=null,l}function Jr(l,e,i){l.lanes|=e;var t=l.alternate;t!==null&&(t.lanes|=e),Bu(l.return,e,i)}function Ss(l,e,i,t,n){var a=l.memoizedState;a===null?l.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:i,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=t,a.tail=i,a.tailMode=n)}function Fr(l,e,i){var t=e.pendingProps,n=t.revealOrder,a=t.tail;if(Hl(l,e,t.children,i),t=Ol.current,(t&2)!==0)t=t&1|2,e.flags|=128;else{if(l!==null&&(l.flags&128)!==0)l:for(l=e.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Jr(l,i,e);else if(l.tag===19)Jr(l,i,e);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break l;for(;l.sibling===null;){if(l.return===null||l.return===e)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}t&=1}switch(H(Ol,t),n){case"forwards":for(i=e.child,n=null;i!==null;)l=i.alternate,l!==null&&va(l)===null&&(n=i),i=i.sibling;i=n,i===null?(n=e.child,e.child=null):(n=i.sibling,i.sibling=null),Ss(e,!1,n,i,a);break;case"backwards":for(i=null,n=e.child,e.child=null;n!==null;){if(l=n.alternate,l!==null&&va(l)===null){e.child=n;break}l=n.sibling,n.sibling=i,i=n,n=l}Ss(e,!0,i,null,a);break;case"together":Ss(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function we(l,e,i){if(l!==null&&(e.dependencies=l.dependencies),ui|=e.lanes,(i&e.childLanes)===0)if(l!==null){if(Zt(l,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(l!==null&&e.child!==l.child)throw Error(c(153));if(e.child!==null){for(l=e.child,i=je(l,l.pendingProps),e.child=i,i.return=e;l.sibling!==null;)l=l.sibling,i=i.sibling=je(l,l.pendingProps),i.return=e;i.sibling=null}return e.child}function bs(l,e){return(l.lanes&e)!==0?!0:(l=l.dependencies,!!(l!==null&&la(l)))}function Ag(l,e,i){switch(e.tag){case 3:pl(e,e.stateNode.containerInfo),Fe(e,Dl,l.memoizedState.cache),Xt();break;case 27:case 5:Fa(e);break;case 4:pl(e,e.stateNode.containerInfo);break;case 10:Fe(e,e.type,e.memoizedProps.value);break;case 13:var t=e.memoizedState;if(t!==null)return t.dehydrated!==null?(li(e),e.flags|=128,null):(i&e.child.childLanes)!==0?kr(l,e,i):(li(e),l=we(l,e,i),l!==null?l.sibling:null);li(e);break;case 19:var n=(l.flags&128)!==0;if(t=(i&e.childLanes)!==0,t||(Zt(l,e,i,!1),t=(i&e.childLanes)!==0),n){if(t)return Fr(l,e,i);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(Ol,Ol.current),t)break;return null;case 22:case 23:return e.lanes=0,Qr(l,e,i);case 24:Fe(e,Dl,l.memoizedState.cache)}return we(l,e,i)}function Pr(l,e,i){if(l!==null)if(l.memoizedProps!==e.pendingProps)Ul=!0;else{if(!bs(l,i)&&(e.flags&128)===0)return Ul=!1,Ag(l,e,i);Ul=(l.flags&131072)!==0}else Ul=!1,ol&&(e.flags&1048576)!==0&&Mc(e,$n,e.index);switch(e.lanes=0,e.tag){case 16:l:{l=e.pendingProps;var t=e.elementType,n=t._init;if(t=n(t._payload),e.type=t,typeof t=="function")Du(t)?(l=Ni(t,l),e.tag=1,e=Zr(null,e,t,l,i)):(e.tag=0,e=hs(null,e,t,l,i));else{if(t!=null){if(n=t.$$typeof,n===xl){e.tag=11,e=qr(null,e,t,l,i);break l}else if(n===Pl){e.tag=14,e=Lr(null,e,t,l,i);break l}}throw e=Si(t)||t,Error(c(306,e,""))}}return e;case 0:return hs(l,e,e.type,e.pendingProps,i);case 1:return t=e.type,n=Ni(t,e.pendingProps),Zr(l,e,t,n,i);case 3:l:{if(pl(e,e.stateNode.containerInfo),l===null)throw Error(c(387));t=e.pendingProps;var a=e.memoizedState;n=a.element,Xu(l,e),It(e,t,null,i);var u=e.memoizedState;if(t=u.cache,Fe(e,Dl,t),t!==a.cache&&Gu(e,[Dl],i,!0),Wt(),t=u.element,a.isDehydrated)if(a={element:t,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){e=Kr(l,e,t,i);break l}else if(t!==n){n=re(Error(c(424)),e),Vt(n),e=Kr(l,e,t,i);break l}else{switch(l=e.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(El=Se(l.firstChild),Xl=e,ol=!0,zi=null,Ae=!0,i=zr(e,null,t,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Xt(),t===n){e=we(l,e,i);break l}Hl(l,e,t,i)}e=e.child}return e;case 26:return Sa(l,e),l===null?(i=lf(e.type,null,e.pendingProps,null))?e.memoizedState=i:ol||(i=e.type,l=e.pendingProps,t=Na(k.current).createElement(i),t[Ll]=e,t[Vl]=l,Gl(t,i,l),jl(t),e.stateNode=t):e.memoizedState=lf(e.type,l.memoizedProps,e.pendingProps,l.memoizedState),null;case 27:return Fa(e),l===null&&ol&&(t=e.stateNode=Wd(e.type,e.pendingProps,k.current),Xl=e,Ae=!0,n=El,ri(e.type)?(lo=n,El=Se(t.firstChild)):El=n),Hl(l,e,e.pendingProps.children,i),Sa(l,e),l===null&&(e.flags|=4194304),e.child;case 5:return l===null&&ol&&((n=t=El)&&(t=Pg(t,e.type,e.pendingProps,Ae),t!==null?(e.stateNode=t,Xl=e,El=Se(t.firstChild),Ae=!1,n=!0):n=!1),n||Di(e)),Fa(e),n=e.type,a=e.pendingProps,u=l!==null?l.memoizedProps:null,t=a.children,Ps(n,a)?t=null:u!==null&&Ps(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Fu(l,e,gg,null,null,i),En._currentValue=n),Sa(l,e),Hl(l,e,t,i),e.child;case 6:return l===null&&ol&&((l=i=El)&&(i=Wg(i,e.pendingProps,Ae),i!==null?(e.stateNode=i,Xl=e,El=null,l=!0):l=!1),l||Di(e)),null;case 13:return kr(l,e,i);case 4:return pl(e,e.stateNode.containerInfo),t=e.pendingProps,l===null?e.child=ht(e,null,t,i):Hl(l,e,t,i),e.child;case 11:return qr(l,e,e.type,e.pendingProps,i);case 7:return Hl(l,e,e.pendingProps,i),e.child;case 8:return Hl(l,e,e.pendingProps.children,i),e.child;case 12:return Hl(l,e,e.pendingProps.children,i),e.child;case 10:return t=e.pendingProps,Fe(e,e.type,t.value),Hl(l,e,t.children,i),e.child;case 9:return n=e.type._context,t=e.pendingProps.children,ji(e),n=Yl(n),t=t(n),e.flags|=1,Hl(l,e,t,i),e.child;case 14:return Lr(l,e,e.type,e.pendingProps,i);case 15:return Yr(l,e,e.type,e.pendingProps,i);case 19:return Fr(l,e,i);case 31:return t=e.pendingProps,i=e.mode,t={mode:t.mode,children:t.children},l===null?(i=ba(t,i),i.ref=e.ref,e.child=i,i.return=e,e=i):(i=je(l.child,t),i.ref=e.ref,e.child=i,i.return=e,e=i),e;case 22:return Qr(l,e,i);case 24:return ji(e),t=Yl(Dl),l===null?(n=Lu(),n===null&&(n=yl,a=wu(),n.pooledCache=a,a.refCount++,a!==null&&(n.pooledCacheLanes|=i),n=a),e.memoizedState={parent:t,cache:n},Qu(e),Fe(e,Dl,n)):((l.lanes&i)!==0&&(Xu(l,e),It(e,null,null,i),Wt()),n=l.memoizedState,a=e.memoizedState,n.parent!==t?(n={parent:t,cache:t},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Fe(e,Dl,t)):(t=a.cache,Fe(e,Dl,t),t!==n.cache&&Gu(e,[Dl],i,!0))),Hl(l,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function qe(l){l.flags|=4}function Wr(l,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!uf(e)){if(e=ge.current,e!==null&&((al&4194048)===al?xe!==null:(al&62914560)!==al&&(al&536870912)===0||e!==xe))throw Ft=Yu,Nc;l.flags|=8192}}function Ea(l,e){e!==null&&(l.flags|=4),l.flags&16384&&(e=l.tag!==22?Do():536870912,l.lanes|=e,yt|=e)}function un(l,e){if(!ol)switch(l.tailMode){case"hidden":e=l.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?l.tail=null:i.sibling=null;break;case"collapsed":i=l.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?e||l.tail===null?l.tail=null:l.tail.sibling=null:t.sibling=null}}function bl(l){var e=l.alternate!==null&&l.alternate.child===l.child,i=0,t=0;if(e)for(var n=l.child;n!==null;)i|=n.lanes|n.childLanes,t|=n.subtreeFlags&65011712,t|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)i|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=t,l.childLanes=i,e}function xg(l,e,i){var t=e.pendingProps;switch(_u(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bl(e),null;case 1:return bl(e),null;case 3:return i=e.stateNode,t=null,l!==null&&(t=l.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),He(Dl),Ze(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(l===null||l.child===null)&&(Qt(e)?qe(e):l===null||l.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Dc())),bl(e),null;case 26:return i=e.memoizedState,l===null?(qe(e),i!==null?(bl(e),Wr(e,i)):(bl(e),e.flags&=-16777217)):i?i!==l.memoizedState?(qe(e),bl(e),Wr(e,i)):(bl(e),e.flags&=-16777217):(l.memoizedProps!==t&&qe(e),bl(e),e.flags&=-16777217),null;case 27:Un(e),i=k.current;var n=e.type;if(l!==null&&e.stateNode!=null)l.memoizedProps!==t&&qe(e);else{if(!t){if(e.stateNode===null)throw Error(c(166));return bl(e),null}l=Y.current,Qt(e)?Rc(e):(l=Wd(n,t,i),e.stateNode=l,qe(e))}return bl(e),null;case 5:if(Un(e),i=e.type,l!==null&&e.stateNode!=null)l.memoizedProps!==t&&qe(e);else{if(!t){if(e.stateNode===null)throw Error(c(166));return bl(e),null}if(l=Y.current,Qt(e))Rc(e);else{switch(n=Na(k.current),l){case 1:l=n.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=n.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=n.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=n.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=n.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof t.is=="string"?n.createElement("select",{is:t.is}):n.createElement("select"),t.multiple?l.multiple=!0:t.size&&(l.size=t.size);break;default:l=typeof t.is=="string"?n.createElement(i,{is:t.is}):n.createElement(i)}}l[Ll]=e,l[Vl]=t;l:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)l.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break l;for(;n.sibling===null;){if(n.return===null||n.return===e)break l;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=l;l:switch(Gl(l,i,t),i){case"button":case"input":case"select":case"textarea":l=!!t.autoFocus;break l;case"img":l=!0;break l;default:l=!1}l&&qe(e)}}return bl(e),e.flags&=-16777217,null;case 6:if(l&&e.stateNode!=null)l.memoizedProps!==t&&qe(e);else{if(typeof t!="string"&&e.stateNode===null)throw Error(c(166));if(l=k.current,Qt(e)){if(l=e.stateNode,i=e.memoizedProps,t=null,n=Xl,n!==null)switch(n.tag){case 27:case 5:t=n.memoizedProps}l[Ll]=e,l=!!(l.nodeValue===i||t!==null&&t.suppressHydrationWarning===!0||Vd(l.nodeValue,i)),l||Di(e)}else l=Na(l).createTextNode(t),l[Ll]=e,e.stateNode=l}return bl(e),null;case 13:if(t=e.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=Qt(e),t!==null&&t.dehydrated!==null){if(l===null){if(!n)throw Error(c(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Ll]=e}else Xt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bl(e),n=!1}else n=Dc(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ge(e),e):(Ge(e),null)}if(Ge(e),(e.flags&128)!==0)return e.lanes=i,e;if(i=t!==null,l=l!==null&&l.memoizedState!==null,i){t=e.child,n=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(n=t.alternate.memoizedState.cachePool.pool);var a=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048)}return i!==l&&i&&(e.child.flags|=8192),Ea(e,e.updateQueue),bl(e),null;case 4:return Ze(),l===null&&Zs(e.stateNode.containerInfo),bl(e),null;case 10:return He(e.type),bl(e),null;case 19:if(G(Ol),n=e.memoizedState,n===null)return bl(e),null;if(t=(e.flags&128)!==0,a=n.rendering,a===null)if(t)un(n,!1);else{if(Al!==0||l!==null&&(l.flags&128)!==0)for(l=e.child;l!==null;){if(a=va(l),a!==null){for(e.flags|=128,un(n,!1),l=a.updateQueue,e.updateQueue=l,Ea(e,l),e.subtreeFlags=0,l=i,i=e.child;i!==null;)Cc(i,l),i=i.sibling;return H(Ol,Ol.current&1|2),e.child}l=l.sibling}n.tail!==null&&Ee()>Ta&&(e.flags|=128,t=!0,un(n,!1),e.lanes=4194304)}else{if(!t)if(l=va(a),l!==null){if(e.flags|=128,t=!0,l=l.updateQueue,e.updateQueue=l,Ea(e,l),un(n,!0),n.tail===null&&n.tailMode==="hidden"&&!a.alternate&&!ol)return bl(e),null}else 2*Ee()-n.renderingStartTime>Ta&&i!==536870912&&(e.flags|=128,t=!0,un(n,!1),e.lanes=4194304);n.isBackwards?(a.sibling=e.child,e.child=a):(l=n.last,l!==null?l.sibling=a:e.child=a,n.last=a)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ee(),e.sibling=null,l=Ol.current,H(Ol,t?l&1|2:l&1),e):(bl(e),null);case 22:case 23:return Ge(e),ku(),t=e.memoizedState!==null,l!==null?l.memoizedState!==null!==t&&(e.flags|=8192):t&&(e.flags|=8192),t?(i&536870912)!==0&&(e.flags&128)===0&&(bl(e),e.subtreeFlags&6&&(e.flags|=8192)):bl(e),i=e.updateQueue,i!==null&&Ea(e,i.retryQueue),i=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(e.flags|=2048),l!==null&&G(Ui),null;case 24:return i=null,l!==null&&(i=l.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),He(Dl),bl(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function Tg(l,e){switch(_u(e),e.tag){case 1:return l=e.flags,l&65536?(e.flags=l&-65537|128,e):null;case 3:return He(Dl),Ze(),l=e.flags,(l&65536)!==0&&(l&128)===0?(e.flags=l&-65537|128,e):null;case 26:case 27:case 5:return Un(e),null;case 13:if(Ge(e),l=e.memoizedState,l!==null&&l.dehydrated!==null){if(e.alternate===null)throw Error(c(340));Xt()}return l=e.flags,l&65536?(e.flags=l&-65537|128,e):null;case 19:return G(Ol),null;case 4:return Ze(),null;case 10:return He(e.type),null;case 22:case 23:return Ge(e),ku(),l!==null&&G(Ui),l=e.flags,l&65536?(e.flags=l&-65537|128,e):null;case 24:return He(Dl),null;case 25:return null;default:return null}}function Ir(l,e){switch(_u(e),e.tag){case 3:He(Dl),Ze();break;case 26:case 27:case 5:Un(e);break;case 4:Ze();break;case 13:Ge(e);break;case 19:G(Ol);break;case 10:He(e.type);break;case 22:case 23:Ge(e),ku(),l!==null&&G(Ui);break;case 24:He(Dl)}}function sn(l,e){try{var i=e.updateQueue,t=i!==null?i.lastEffect:null;if(t!==null){var n=t.next;i=n;do{if((i.tag&l)===l){t=void 0;var a=i.create,u=i.inst;t=a(),u.destroy=t}i=i.next}while(i!==n)}}catch(s){vl(e,e.return,s)}}function ii(l,e,i){try{var t=e.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var a=n.next;t=a;do{if((t.tag&l)===l){var u=t.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=e;var d=i,b=s;try{b()}catch(M){vl(n,d,M)}}}t=t.next}while(t!==a)}}catch(M){vl(e,e.return,M)}}function $r(l){var e=l.updateQueue;if(e!==null){var i=l.stateNode;try{Lc(e,i)}catch(t){vl(l,l.return,t)}}}function ld(l,e,i){i.props=Ni(l.type,l.memoizedProps),i.state=l.memoizedState;try{i.componentWillUnmount()}catch(t){vl(l,e,t)}}function on(l,e){try{var i=l.ref;if(i!==null){switch(l.tag){case 26:case 27:case 5:var t=l.stateNode;break;case 30:t=l.stateNode;break;default:t=l.stateNode}typeof i=="function"?l.refCleanup=i(t):i.current=t}}catch(n){vl(l,e,n)}}function Te(l,e){var i=l.ref,t=l.refCleanup;if(i!==null)if(typeof t=="function")try{t()}catch(n){vl(l,e,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(n){vl(l,e,n)}else i.current=null}function ed(l){var e=l.type,i=l.memoizedProps,t=l.stateNode;try{l:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&t.focus();break l;case"img":i.src?t.src=i.src:i.srcSet&&(t.srcset=i.srcSet)}}catch(n){vl(l,l.return,n)}}function Es(l,e,i){try{var t=l.stateNode;Zg(t,l.type,i,e),t[Vl]=e}catch(n){vl(l,l.return,n)}}function id(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ri(l.type)||l.tag===4}function As(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||id(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ri(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function xs(l,e,i){var t=l.tag;if(t===5||t===6)l=l.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=_a));else if(t!==4&&(t===27&&ri(l.type)&&(i=l.stateNode,e=null),l=l.child,l!==null))for(xs(l,e,i),l=l.sibling;l!==null;)xs(l,e,i),l=l.sibling}function Aa(l,e,i){var t=l.tag;if(t===5||t===6)l=l.stateNode,e?i.insertBefore(l,e):i.appendChild(l);else if(t!==4&&(t===27&&ri(l.type)&&(i=l.stateNode),l=l.child,l!==null))for(Aa(l,e,i),l=l.sibling;l!==null;)Aa(l,e,i),l=l.sibling}function td(l){var e=l.stateNode,i=l.memoizedProps;try{for(var t=l.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gl(e,t,i),e[Ll]=l,e[Vl]=i}catch(a){vl(l,l.return,a)}}var Le=!1,Cl=!1,Ts=!1,nd=typeof WeakSet=="function"?WeakSet:Set,_l=null;function Cg(l,e){if(l=l.containerInfo,Js=La,l=mc(l),Au(l)){if("selectionStart"in l)var i={start:l.selectionStart,end:l.selectionEnd};else l:{i=(i=l.ownerDocument)&&i.defaultView||window;var t=i.getSelection&&i.getSelection();if(t&&t.rangeCount!==0){i=t.anchorNode;var n=t.anchorOffset,a=t.focusNode;t=t.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break l}var u=0,s=-1,d=-1,b=0,M=0,O=l,A=null;e:for(;;){for(var x;O!==i||n!==0&&O.nodeType!==3||(s=u+n),O!==a||t!==0&&O.nodeType!==3||(d=u+t),O.nodeType===3&&(u+=O.nodeValue.length),(x=O.firstChild)!==null;)A=O,O=x;for(;;){if(O===l)break e;if(A===i&&++b===n&&(s=u),A===a&&++M===t&&(d=u),(x=O.nextSibling)!==null)break;O=A,A=O.parentNode}O=x}i=s===-1||d===-1?null:{start:s,end:d}}else i=null}i=i||{start:0,end:0}}else i=null;for(Fs={focusedElem:l,selectionRange:i},La=!1,_l=e;_l!==null;)if(e=_l,l=e.child,(e.subtreeFlags&1024)!==0&&l!==null)l.return=e,_l=l;else for(;_l!==null;){switch(e=_l,a=e.alternate,l=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){l=void 0,i=e,n=a.memoizedProps,a=a.memoizedState,t=i.stateNode;try{var K=Ni(i.type,n,i.elementType===i.type);l=t.getSnapshotBeforeUpdate(K,a),t.__reactInternalSnapshotBeforeUpdate=l}catch(Q){vl(i,i.return,Q)}}break;case 3:if((l&1024)!==0){if(l=e.stateNode.containerInfo,i=l.nodeType,i===9)Is(l);else if(i===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Is(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(c(163))}if(l=e.sibling,l!==null){l.return=e.return,_l=l;break}_l=e.return}}function ad(l,e,i){var t=i.flags;switch(i.tag){case 0:case 11:case 15:ti(l,i),t&4&&sn(5,i);break;case 1:if(ti(l,i),t&4)if(l=i.stateNode,e===null)try{l.componentDidMount()}catch(u){vl(i,i.return,u)}else{var n=Ni(i.type,e.memoizedProps);e=e.memoizedState;try{l.componentDidUpdate(n,e,l.__reactInternalSnapshotBeforeUpdate)}catch(u){vl(i,i.return,u)}}t&64&&$r(i),t&512&&on(i,i.return);break;case 3:if(ti(l,i),t&64&&(l=i.updateQueue,l!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Lc(l,e)}catch(u){vl(i,i.return,u)}}break;case 27:e===null&&t&4&&td(i);case 26:case 5:ti(l,i),e===null&&t&4&&ed(i),t&512&&on(i,i.return);break;case 12:ti(l,i);break;case 13:ti(l,i),t&4&&od(l,i),t&64&&(l=i.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(i=Ng.bind(null,i),Ig(l,i))));break;case 22:if(t=i.memoizedState!==null||Le,!t){e=e!==null&&e.memoizedState!==null||Cl,n=Le;var a=Cl;Le=t,(Cl=e)&&!a?ni(l,i,(i.subtreeFlags&8772)!==0):ti(l,i),Le=n,Cl=a}break;case 30:break;default:ti(l,i)}}function ud(l){var e=l.alternate;e!==null&&(l.alternate=null,ud(e)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(e=l.stateNode,e!==null&&tu(e)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var Sl=null,kl=!1;function Ye(l,e,i){for(i=i.child;i!==null;)sd(l,e,i),i=i.sibling}function sd(l,e,i){if($l&&typeof $l.onCommitFiberUnmount=="function")try{$l.onCommitFiberUnmount(zt,i)}catch{}switch(i.tag){case 26:Cl||Te(i,e),Ye(l,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Cl||Te(i,e);var t=Sl,n=kl;ri(i.type)&&(Sl=i.stateNode,kl=!1),Ye(l,e,i),yn(i.stateNode),Sl=t,kl=n;break;case 5:Cl||Te(i,e);case 6:if(t=Sl,n=kl,Sl=null,Ye(l,e,i),Sl=t,kl=n,Sl!==null)if(kl)try{(Sl.nodeType===9?Sl.body:Sl.nodeName==="HTML"?Sl.ownerDocument.body:Sl).removeChild(i.stateNode)}catch(a){vl(i,e,a)}else try{Sl.removeChild(i.stateNode)}catch(a){vl(i,e,a)}break;case 18:Sl!==null&&(kl?(l=Sl,Fd(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,i.stateNode),Cn(l)):Fd(Sl,i.stateNode));break;case 4:t=Sl,n=kl,Sl=i.stateNode.containerInfo,kl=!0,Ye(l,e,i),Sl=t,kl=n;break;case 0:case 11:case 14:case 15:Cl||ii(2,i,e),Cl||ii(4,i,e),Ye(l,e,i);break;case 1:Cl||(Te(i,e),t=i.stateNode,typeof t.componentWillUnmount=="function"&&ld(i,e,t)),Ye(l,e,i);break;case 21:Ye(l,e,i);break;case 22:Cl=(t=Cl)||i.memoizedState!==null,Ye(l,e,i),Cl=t;break;default:Ye(l,e,i)}}function od(l,e){if(e.memoizedState===null&&(l=e.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Cn(l)}catch(i){vl(e,e.return,i)}}function Mg(l){switch(l.tag){case 13:case 19:var e=l.stateNode;return e===null&&(e=l.stateNode=new nd),e;case 22:return l=l.stateNode,e=l._retryCache,e===null&&(e=l._retryCache=new nd),e;default:throw Error(c(435,l.tag))}}function Cs(l,e){var i=Mg(l);e.forEach(function(t){var n=Hg.bind(null,l,t);i.has(t)||(i.add(t),t.then(n,n))})}function te(l,e){var i=e.deletions;if(i!==null)for(var t=0;t<i.length;t++){var n=i[t],a=l,u=e,s=u;l:for(;s!==null;){switch(s.tag){case 27:if(ri(s.type)){Sl=s.stateNode,kl=!1;break l}break;case 5:Sl=s.stateNode,kl=!1;break l;case 3:case 4:Sl=s.stateNode.containerInfo,kl=!0;break l}s=s.return}if(Sl===null)throw Error(c(160));sd(a,u,n),Sl=null,kl=!1,a=n.alternate,a!==null&&(a.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)cd(e,l),e=e.sibling}var pe=null;function cd(l,e){var i=l.alternate,t=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:te(e,l),ne(l),t&4&&(ii(3,l,l.return),sn(3,l),ii(5,l,l.return));break;case 1:te(e,l),ne(l),t&512&&(Cl||i===null||Te(i,i.return)),t&64&&Le&&(l=l.updateQueue,l!==null&&(t=l.callbacks,t!==null&&(i=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=i===null?t:i.concat(t))));break;case 26:var n=pe;if(te(e,l),ne(l),t&512&&(Cl||i===null||Te(i,i.return)),t&4){var a=i!==null?i.memoizedState:null;if(t=l.memoizedState,i===null)if(t===null)if(l.stateNode===null){l:{t=l.type,i=l.memoizedProps,n=n.ownerDocument||n;e:switch(t){case"title":a=n.getElementsByTagName("title")[0],(!a||a[jt]||a[Ll]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(t),n.head.insertBefore(a,n.querySelector("head > title"))),Gl(a,t,i),a[Ll]=l,jl(a),t=a;break l;case"link":var u=nf("link","href",n).get(t+(i.href||""));if(u){for(var s=0;s<u.length;s++)if(a=u[s],a.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&a.getAttribute("rel")===(i.rel==null?null:i.rel)&&a.getAttribute("title")===(i.title==null?null:i.title)&&a.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(s,1);break e}}a=n.createElement(t),Gl(a,t,i),n.head.appendChild(a);break;case"meta":if(u=nf("meta","content",n).get(t+(i.content||""))){for(s=0;s<u.length;s++)if(a=u[s],a.getAttribute("content")===(i.content==null?null:""+i.content)&&a.getAttribute("name")===(i.name==null?null:i.name)&&a.getAttribute("property")===(i.property==null?null:i.property)&&a.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&a.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(s,1);break e}}a=n.createElement(t),Gl(a,t,i),n.head.appendChild(a);break;default:throw Error(c(468,t))}a[Ll]=l,jl(a),t=a}l.stateNode=t}else af(n,l.type,l.stateNode);else l.stateNode=tf(n,t,l.memoizedProps);else a!==t?(a===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):a.count--,t===null?af(n,l.type,l.stateNode):tf(n,t,l.memoizedProps)):t===null&&l.stateNode!==null&&Es(l,l.memoizedProps,i.memoizedProps)}break;case 27:te(e,l),ne(l),t&512&&(Cl||i===null||Te(i,i.return)),i!==null&&t&4&&Es(l,l.memoizedProps,i.memoizedProps);break;case 5:if(te(e,l),ne(l),t&512&&(Cl||i===null||Te(i,i.return)),l.flags&32){n=l.stateNode;try{Fi(n,"")}catch(x){vl(l,l.return,x)}}t&4&&l.stateNode!=null&&(n=l.memoizedProps,Es(l,n,i!==null?i.memoizedProps:n)),t&1024&&(Ts=!0);break;case 6:if(te(e,l),ne(l),t&4){if(l.stateNode===null)throw Error(c(162));t=l.memoizedProps,i=l.stateNode;try{i.nodeValue=t}catch(x){vl(l,l.return,x)}}break;case 3:if(Ga=null,n=pe,pe=Ha(e.containerInfo),te(e,l),pe=n,ne(l),t&4&&i!==null&&i.memoizedState.isDehydrated)try{Cn(e.containerInfo)}catch(x){vl(l,l.return,x)}Ts&&(Ts=!1,rd(l));break;case 4:t=pe,pe=Ha(l.stateNode.containerInfo),te(e,l),ne(l),pe=t;break;case 12:te(e,l),ne(l);break;case 13:te(e,l),ne(l),l.child.flags&8192&&l.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(js=Ee()),t&4&&(t=l.updateQueue,t!==null&&(l.updateQueue=null,Cs(l,t)));break;case 22:n=l.memoizedState!==null;var d=i!==null&&i.memoizedState!==null,b=Le,M=Cl;if(Le=b||n,Cl=M||d,te(e,l),Cl=M,Le=b,ne(l),t&8192)l:for(e=l.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(i===null||d||Le||Cl||Hi(l)),i=null,e=l;;){if(e.tag===5||e.tag===26){if(i===null){d=i=e;try{if(a=d.stateNode,n)u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=d.stateNode;var O=d.memoizedProps.style,A=O!=null&&O.hasOwnProperty("display")?O.display:null;s.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(x){vl(d,d.return,x)}}}else if(e.tag===6){if(i===null){d=e;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(x){vl(d,d.return,x)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===l)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break l;for(;e.sibling===null;){if(e.return===null||e.return===l)break l;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}t&4&&(t=l.updateQueue,t!==null&&(i=t.retryQueue,i!==null&&(t.retryQueue=null,Cs(l,i))));break;case 19:te(e,l),ne(l),t&4&&(t=l.updateQueue,t!==null&&(l.updateQueue=null,Cs(l,t)));break;case 30:break;case 21:break;default:te(e,l),ne(l)}}function ne(l){var e=l.flags;if(e&2){try{for(var i,t=l.return;t!==null;){if(id(t)){i=t;break}t=t.return}if(i==null)throw Error(c(160));switch(i.tag){case 27:var n=i.stateNode,a=As(l);Aa(l,a,n);break;case 5:var u=i.stateNode;i.flags&32&&(Fi(u,""),i.flags&=-33);var s=As(l);Aa(l,s,u);break;case 3:case 4:var d=i.stateNode.containerInfo,b=As(l);xs(l,b,d);break;default:throw Error(c(161))}}catch(M){vl(l,l.return,M)}l.flags&=-3}e&4096&&(l.flags&=-4097)}function rd(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var e=l;rd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),l=l.sibling}}function ti(l,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ad(l,e.alternate,e),e=e.sibling}function Hi(l){for(l=l.child;l!==null;){var e=l;switch(e.tag){case 0:case 11:case 14:case 15:ii(4,e,e.return),Hi(e);break;case 1:Te(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&ld(e,e.return,i),Hi(e);break;case 27:yn(e.stateNode);case 26:case 5:Te(e,e.return),Hi(e);break;case 22:e.memoizedState===null&&Hi(e);break;case 30:Hi(e);break;default:Hi(e)}l=l.sibling}}function ni(l,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var t=e.alternate,n=l,a=e,u=a.flags;switch(a.tag){case 0:case 11:case 15:ni(n,a,i),sn(4,a);break;case 1:if(ni(n,a,i),t=a,n=t.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(b){vl(t,t.return,b)}if(t=a,n=t.updateQueue,n!==null){var s=t.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)qc(d[n],s)}catch(b){vl(t,t.return,b)}}i&&u&64&&$r(a),on(a,a.return);break;case 27:td(a);case 26:case 5:ni(n,a,i),i&&t===null&&u&4&&ed(a),on(a,a.return);break;case 12:ni(n,a,i);break;case 13:ni(n,a,i),i&&u&4&&od(n,a);break;case 22:a.memoizedState===null&&ni(n,a,i),on(a,a.return);break;case 30:break;default:ni(n,a,i)}e=e.sibling}}function Ms(l,e){var i=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==i&&(l!=null&&l.refCount++,i!=null&&Kt(i))}function Rs(l,e){l=null,e.alternate!==null&&(l=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==l&&(e.refCount++,l!=null&&Kt(l))}function Ce(l,e,i,t){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dd(l,e,i,t),e=e.sibling}function dd(l,e,i,t){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ce(l,e,i,t),n&2048&&sn(9,e);break;case 1:Ce(l,e,i,t);break;case 3:Ce(l,e,i,t),n&2048&&(l=null,e.alternate!==null&&(l=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==l&&(e.refCount++,l!=null&&Kt(l)));break;case 12:if(n&2048){Ce(l,e,i,t),l=e.stateNode;try{var a=e.memoizedProps,u=a.id,s=a.onPostCommit;typeof s=="function"&&s(u,e.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(d){vl(e,e.return,d)}}else Ce(l,e,i,t);break;case 13:Ce(l,e,i,t);break;case 23:break;case 22:a=e.stateNode,u=e.alternate,e.memoizedState!==null?a._visibility&2?Ce(l,e,i,t):cn(l,e):a._visibility&2?Ce(l,e,i,t):(a._visibility|=2,gt(l,e,i,t,(e.subtreeFlags&10256)!==0)),n&2048&&Ms(u,e);break;case 24:Ce(l,e,i,t),n&2048&&Rs(e.alternate,e);break;default:Ce(l,e,i,t)}}function gt(l,e,i,t,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var a=l,u=e,s=i,d=t,b=u.flags;switch(u.tag){case 0:case 11:case 15:gt(a,u,s,d,n),sn(8,u);break;case 23:break;case 22:var M=u.stateNode;u.memoizedState!==null?M._visibility&2?gt(a,u,s,d,n):cn(a,u):(M._visibility|=2,gt(a,u,s,d,n)),n&&b&2048&&Ms(u.alternate,u);break;case 24:gt(a,u,s,d,n),n&&b&2048&&Rs(u.alternate,u);break;default:gt(a,u,s,d,n)}e=e.sibling}}function cn(l,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=l,t=e,n=t.flags;switch(t.tag){case 22:cn(i,t),n&2048&&Ms(t.alternate,t);break;case 24:cn(i,t),n&2048&&Rs(t.alternate,t);break;default:cn(i,t)}e=e.sibling}}var rn=8192;function mt(l){if(l.subtreeFlags&rn)for(l=l.child;l!==null;)fd(l),l=l.sibling}function fd(l){switch(l.tag){case 26:mt(l),l.flags&rn&&l.memoizedState!==null&&dm(pe,l.memoizedState,l.memoizedProps);break;case 5:mt(l);break;case 3:case 4:var e=pe;pe=Ha(l.stateNode.containerInfo),mt(l),pe=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=rn,rn=16777216,mt(l),rn=e):mt(l));break;default:mt(l)}}function hd(l){var e=l.alternate;if(e!==null&&(l=e.child,l!==null)){e.child=null;do e=l.sibling,l.sibling=null,l=e;while(l!==null)}}function dn(l){var e=l.deletions;if((l.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var t=e[i];_l=t,md(t,l)}hd(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)gd(l),l=l.sibling}function gd(l){switch(l.tag){case 0:case 11:case 15:dn(l),l.flags&2048&&ii(9,l,l.return);break;case 3:dn(l);break;case 12:dn(l);break;case 22:var e=l.stateNode;l.memoizedState!==null&&e._visibility&2&&(l.return===null||l.return.tag!==13)?(e._visibility&=-3,xa(l)):dn(l);break;default:dn(l)}}function xa(l){var e=l.deletions;if((l.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var t=e[i];_l=t,md(t,l)}hd(l)}for(l=l.child;l!==null;){switch(e=l,e.tag){case 0:case 11:case 15:ii(8,e,e.return),xa(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,xa(e));break;default:xa(e)}l=l.sibling}}function md(l,e){for(;_l!==null;){var i=_l;switch(i.tag){case 0:case 11:case 15:ii(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var t=i.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Kt(i.memoizedState.cache)}if(t=i.child,t!==null)t.return=i,_l=t;else l:for(i=l;_l!==null;){t=_l;var n=t.sibling,a=t.return;if(ud(t),t===i){_l=null;break l}if(n!==null){n.return=a,_l=n;break l}_l=a}}}var Rg={getCacheForType:function(l){var e=Yl(Dl),i=e.data.get(l);return i===void 0&&(i=l(),e.data.set(l,i)),i}},zg=typeof WeakMap=="function"?WeakMap:Map,cl=0,yl=null,$=null,al=0,rl=0,ae=null,ai=!1,vt=!1,zs=!1,Qe=0,Al=0,ui=0,Bi=0,Ds=0,me=0,yt=0,fn=null,Jl=null,Os=!1,js=0,Ta=1/0,Ca=null,si=null,Bl=0,oi=null,pt=null,St=0,Us=0,_s=null,vd=null,hn=0,Ns=null;function ue(){if((cl&2)!==0&&al!==0)return al&-al;if(R.T!==null){var l=ut;return l!==0?l:Ys()}return Uo()}function yd(){me===0&&(me=(al&536870912)===0||ol?zo():536870912);var l=ge.current;return l!==null&&(l.flags|=32),me}function se(l,e,i){(l===yl&&(rl===2||rl===9)||l.cancelPendingCommit!==null)&&(bt(l,0),ci(l,al,me,!1)),Ot(l,i),((cl&2)===0||l!==yl)&&(l===yl&&((cl&2)===0&&(Bi|=i),Al===4&&ci(l,al,me,!1)),Me(l))}function pd(l,e,i){if((cl&6)!==0)throw Error(c(327));var t=!i&&(e&124)===0&&(e&l.expiredLanes)===0||Dt(l,e),n=t?jg(l,e):Gs(l,e,!0),a=t;do{if(n===0){vt&&!t&&ci(l,e,0,!1);break}else{if(i=l.current.alternate,a&&!Dg(i)){n=Gs(l,e,!1),a=!1;continue}if(n===2){if(a=e,l.errorRecoveryDisabledLanes&a)var u=0;else u=l.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;l:{var s=l;n=fn;var d=s.current.memoizedState.isDehydrated;if(d&&(bt(s,u).flags|=256),u=Gs(s,u,!1),u!==2){if(zs&&!d){s.errorRecoveryDisabledLanes|=a,Bi|=a,n=4;break l}a=Jl,Jl=n,a!==null&&(Jl===null?Jl=a:Jl.push.apply(Jl,a))}n=u}if(a=!1,n!==2)continue}}if(n===1){bt(l,0),ci(l,e,0,!0);break}l:{switch(t=l,a=n,a){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:ci(t,e,me,!ai);break l;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(n=js+300-Ee(),10<n)){if(ci(t,e,me,!ai),Bn(t,0,!0)!==0)break l;t.timeoutHandle=kd(Sd.bind(null,t,i,Jl,Ca,Os,e,me,Bi,yt,ai,a,2,-0,0),n);break l}Sd(t,i,Jl,Ca,Os,e,me,Bi,yt,ai,a,0,-0,0)}}break}while(!0);Me(l)}function Sd(l,e,i,t,n,a,u,s,d,b,M,O,A,x){if(l.timeoutHandle=-1,O=e.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(bn={stylesheets:null,count:0,unsuspend:rm},fd(e),O=fm(),O!==null)){l.cancelPendingCommit=O(Md.bind(null,l,e,a,i,t,n,u,s,d,M,1,A,x)),ci(l,a,u,!b);return}Md(l,e,a,i,t,n,u,s,d)}function Dg(l){for(var e=l;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var t=0;t<i.length;t++){var n=i[t],a=n.getSnapshot;n=n.value;try{if(!ee(a(),n))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===l)break;for(;e.sibling===null;){if(e.return===null||e.return===l)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ci(l,e,i,t){e&=~Ds,e&=~Bi,l.suspendedLanes|=e,l.pingedLanes&=~e,t&&(l.warmLanes|=e),t=l.expirationTimes;for(var n=e;0<n;){var a=31-le(n),u=1<<a;t[a]=-1,n&=~u}i!==0&&Oo(l,i,e)}function Ma(){return(cl&6)===0?(gn(0),!1):!0}function Hs(){if($!==null){if(rl===0)var l=$.return;else l=$,Ne=Oi=null,Iu(l),ft=null,nn=0,l=$;for(;l!==null;)Ir(l.alternate,l),l=l.return;$=null}}function bt(l,e){var i=l.timeoutHandle;i!==-1&&(l.timeoutHandle=-1,kg(i)),i=l.cancelPendingCommit,i!==null&&(l.cancelPendingCommit=null,i()),Hs(),yl=l,$=i=je(l.current,null),al=e,rl=0,ae=null,ai=!1,vt=Dt(l,e),zs=!1,yt=me=Ds=Bi=ui=Al=0,Jl=fn=null,Os=!1,(e&8)!==0&&(e|=e&32);var t=l.entangledLanes;if(t!==0)for(l=l.entanglements,t&=e;0<t;){var n=31-le(t),a=1<<n;e|=l[n],t&=~a}return Qe=e,Jn(),i}function bd(l,e){P=null,R.H=ha,e===Jt||e===ta?(e=Gc(),rl=3):e===Nc?(e=Gc(),rl=4):rl=e===wr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ae=e,$===null&&(Al=1,pa(l,re(e,l.current)))}function Ed(){var l=R.H;return R.H=ha,l===null?ha:l}function Ad(){var l=R.A;return R.A=Rg,l}function Bs(){Al=4,ai||(al&4194048)!==al&&ge.current!==null||(vt=!0),(ui&134217727)===0&&(Bi&134217727)===0||yl===null||ci(yl,al,me,!1)}function Gs(l,e,i){var t=cl;cl|=2;var n=Ed(),a=Ad();(yl!==l||al!==e)&&(Ca=null,bt(l,e)),e=!1;var u=Al;l:do try{if(rl!==0&&$!==null){var s=$,d=ae;switch(rl){case 8:Hs(),u=6;break l;case 3:case 2:case 9:case 6:ge.current===null&&(e=!0);var b=rl;if(rl=0,ae=null,Et(l,s,d,b),i&&vt){u=0;break l}break;default:b=rl,rl=0,ae=null,Et(l,s,d,b)}}Og(),u=Al;break}catch(M){bd(l,M)}while(!0);return e&&l.shellSuspendCounter++,Ne=Oi=null,cl=t,R.H=n,R.A=a,$===null&&(yl=null,al=0,Jn()),u}function Og(){for(;$!==null;)xd($)}function jg(l,e){var i=cl;cl|=2;var t=Ed(),n=Ad();yl!==l||al!==e?(Ca=null,Ta=Ee()+500,bt(l,e)):vt=Dt(l,e);l:do try{if(rl!==0&&$!==null){e=$;var a=ae;e:switch(rl){case 1:rl=0,ae=null,Et(l,e,a,1);break;case 2:case 9:if(Hc(a)){rl=0,ae=null,Td(e);break}e=function(){rl!==2&&rl!==9||yl!==l||(rl=7),Me(l)},a.then(e,e);break l;case 3:rl=7;break l;case 4:rl=5;break l;case 7:Hc(a)?(rl=0,ae=null,Td(e)):(rl=0,ae=null,Et(l,e,a,7));break;case 5:var u=null;switch($.tag){case 26:u=$.memoizedState;case 5:case 27:var s=$;if(!u||uf(u)){rl=0,ae=null;var d=s.sibling;if(d!==null)$=d;else{var b=s.return;b!==null?($=b,Ra(b)):$=null}break e}}rl=0,ae=null,Et(l,e,a,5);break;case 6:rl=0,ae=null,Et(l,e,a,6);break;case 8:Hs(),Al=6;break l;default:throw Error(c(462))}}Ug();break}catch(M){bd(l,M)}while(!0);return Ne=Oi=null,R.H=t,R.A=n,cl=i,$!==null?0:(yl=null,al=0,Jn(),Al)}function Ug(){for(;$!==null&&!lh();)xd($)}function xd(l){var e=Pr(l.alternate,l,Qe);l.memoizedProps=l.pendingProps,e===null?Ra(l):$=e}function Td(l){var e=l,i=e.alternate;switch(e.tag){case 15:case 0:e=Vr(i,e,e.pendingProps,e.type,void 0,al);break;case 11:e=Vr(i,e,e.pendingProps,e.type.render,e.ref,al);break;case 5:Iu(e);default:Ir(i,e),e=$=Cc(e,Qe),e=Pr(i,e,Qe)}l.memoizedProps=l.pendingProps,e===null?Ra(l):$=e}function Et(l,e,i,t){Ne=Oi=null,Iu(e),ft=null,nn=0;var n=e.return;try{if(Eg(l,n,e,i,al)){Al=1,pa(l,re(i,l.current)),$=null;return}}catch(a){if(n!==null)throw $=n,a;Al=1,pa(l,re(i,l.current)),$=null;return}e.flags&32768?(ol||t===1?l=!0:vt||(al&536870912)!==0?l=!1:(ai=l=!0,(t===2||t===9||t===3||t===6)&&(t=ge.current,t!==null&&t.tag===13&&(t.flags|=16384))),Cd(e,l)):Ra(e)}function Ra(l){var e=l;do{if((e.flags&32768)!==0){Cd(e,ai);return}l=e.return;var i=xg(e.alternate,e,Qe);if(i!==null){$=i;return}if(e=e.sibling,e!==null){$=e;return}$=e=l}while(e!==null);Al===0&&(Al=5)}function Cd(l,e){do{var i=Tg(l.alternate,l);if(i!==null){i.flags&=32767,$=i;return}if(i=l.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(l=l.sibling,l!==null)){$=l;return}$=l=i}while(l!==null);Al=6,$=null}function Md(l,e,i,t,n,a,u,s,d){l.cancelPendingCommit=null;do za();while(Bl!==0);if((cl&6)!==0)throw Error(c(327));if(e!==null){if(e===l.current)throw Error(c(177));if(a=e.lanes|e.childLanes,a|=Ru,rh(l,i,a,u,s,d),l===yl&&($=yl=null,al=0),pt=e,oi=l,St=i,Us=a,_s=n,vd=t,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,Bg(_n,function(){return jd(),null})):(l.callbackNode=null,l.callbackPriority=0),t=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||t){t=R.T,R.T=null,n=B.p,B.p=2,u=cl,cl|=4;try{Cg(l,e,i)}finally{cl=u,B.p=n,R.T=t}}Bl=1,Rd(),zd(),Dd()}}function Rd(){if(Bl===1){Bl=0;var l=oi,e=pt,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var t=B.p;B.p=2;var n=cl;cl|=4;try{cd(e,l);var a=Fs,u=mc(l.containerInfo),s=a.focusedElem,d=a.selectionRange;if(u!==s&&s&&s.ownerDocument&&gc(s.ownerDocument.documentElement,s)){if(d!==null&&Au(s)){var b=d.start,M=d.end;if(M===void 0&&(M=b),"selectionStart"in s)s.selectionStart=b,s.selectionEnd=Math.min(M,s.value.length);else{var O=s.ownerDocument||document,A=O&&O.defaultView||window;if(A.getSelection){var x=A.getSelection(),K=s.textContent.length,Q=Math.min(d.start,K),gl=d.end===void 0?Q:Math.min(d.end,K);!x.extend&&Q>gl&&(u=gl,gl=Q,Q=u);var y=hc(s,Q),m=hc(s,gl);if(y&&m&&(x.rangeCount!==1||x.anchorNode!==y.node||x.anchorOffset!==y.offset||x.focusNode!==m.node||x.focusOffset!==m.offset)){var S=O.createRange();S.setStart(y.node,y.offset),x.removeAllRanges(),Q>gl?(x.addRange(S),x.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),x.addRange(S))}}}}for(O=[],x=s;x=x.parentNode;)x.nodeType===1&&O.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<O.length;s++){var z=O[s];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}La=!!Js,Fs=Js=null}finally{cl=n,B.p=t,R.T=i}}l.current=e,Bl=2}}function zd(){if(Bl===2){Bl=0;var l=oi,e=pt,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var t=B.p;B.p=2;var n=cl;cl|=4;try{ad(l,e.alternate,e)}finally{cl=n,B.p=t,R.T=i}}Bl=3}}function Dd(){if(Bl===4||Bl===3){Bl=0,eh();var l=oi,e=pt,i=St,t=vd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Bl=5:(Bl=0,pt=oi=null,Od(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(si=null),eu(i),e=e.stateNode,$l&&typeof $l.onCommitFiberRoot=="function")try{$l.onCommitFiberRoot(zt,e,void 0,(e.current.flags&128)===128)}catch{}if(t!==null){e=R.T,n=B.p,B.p=2,R.T=null;try{for(var a=l.onRecoverableError,u=0;u<t.length;u++){var s=t[u];a(s.value,{componentStack:s.stack})}}finally{R.T=e,B.p=n}}(St&3)!==0&&za(),Me(l),n=l.pendingLanes,(i&4194090)!==0&&(n&42)!==0?l===Ns?hn++:(hn=0,Ns=l):hn=0,gn(0)}}function Od(l,e){(l.pooledCacheLanes&=e)===0&&(e=l.pooledCache,e!=null&&(l.pooledCache=null,Kt(e)))}function za(l){return Rd(),zd(),Dd(),jd()}function jd(){if(Bl!==5)return!1;var l=oi,e=Us;Us=0;var i=eu(St),t=R.T,n=B.p;try{B.p=32>i?32:i,R.T=null,i=_s,_s=null;var a=oi,u=St;if(Bl=0,pt=oi=null,St=0,(cl&6)!==0)throw Error(c(331));var s=cl;if(cl|=4,gd(a.current),dd(a,a.current,u,i),cl=s,gn(0,!1),$l&&typeof $l.onPostCommitFiberRoot=="function")try{$l.onPostCommitFiberRoot(zt,a)}catch{}return!0}finally{B.p=n,R.T=t,Od(l,e)}}function Ud(l,e,i){e=re(i,e),e=fs(l.stateNode,e,2),l=Ie(l,e,2),l!==null&&(Ot(l,2),Me(l))}function vl(l,e,i){if(l.tag===3)Ud(l,l,i);else for(;e!==null;){if(e.tag===3){Ud(e,l,i);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(si===null||!si.has(t))){l=re(i,l),i=Br(2),t=Ie(e,i,2),t!==null&&(Gr(i,t,e,l),Ot(t,2),Me(t));break}}e=e.return}}function ws(l,e,i){var t=l.pingCache;if(t===null){t=l.pingCache=new zg;var n=new Set;t.set(e,n)}else n=t.get(e),n===void 0&&(n=new Set,t.set(e,n));n.has(i)||(zs=!0,n.add(i),l=_g.bind(null,l,e,i),e.then(l,l))}function _g(l,e,i){var t=l.pingCache;t!==null&&t.delete(e),l.pingedLanes|=l.suspendedLanes&i,l.warmLanes&=~i,yl===l&&(al&i)===i&&(Al===4||Al===3&&(al&62914560)===al&&300>Ee()-js?(cl&2)===0&&bt(l,0):Ds|=i,yt===al&&(yt=0)),Me(l)}function _d(l,e){e===0&&(e=Do()),l=it(l,e),l!==null&&(Ot(l,e),Me(l))}function Ng(l){var e=l.memoizedState,i=0;e!==null&&(i=e.retryLane),_d(l,i)}function Hg(l,e){var i=0;switch(l.tag){case 13:var t=l.stateNode,n=l.memoizedState;n!==null&&(i=n.retryLane);break;case 19:t=l.stateNode;break;case 22:t=l.stateNode._retryCache;break;default:throw Error(c(314))}t!==null&&t.delete(e),_d(l,i)}function Bg(l,e){return Wa(l,e)}var Da=null,At=null,qs=!1,Oa=!1,Ls=!1,Gi=0;function Me(l){l!==At&&l.next===null&&(At===null?Da=At=l:At=At.next=l),Oa=!0,qs||(qs=!0,wg())}function gn(l,e){if(!Ls&&Oa){Ls=!0;do for(var i=!1,t=Da;t!==null;){if(l!==0){var n=t.pendingLanes;if(n===0)var a=0;else{var u=t.suspendedLanes,s=t.pingedLanes;a=(1<<31-le(42|l)+1)-1,a&=n&~(u&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(i=!0,Gd(t,a))}else a=al,a=Bn(t,t===yl?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(a&3)===0||Dt(t,a)||(i=!0,Gd(t,a));t=t.next}while(i);Ls=!1}}function Gg(){Nd()}function Nd(){Oa=qs=!1;var l=0;Gi!==0&&(Kg()&&(l=Gi),Gi=0);for(var e=Ee(),i=null,t=Da;t!==null;){var n=t.next,a=Hd(t,e);a===0?(t.next=null,i===null?Da=n:i.next=n,n===null&&(At=i)):(i=t,(l!==0||(a&3)!==0)&&(Oa=!0)),t=n}gn(l)}function Hd(l,e){for(var i=l.suspendedLanes,t=l.pingedLanes,n=l.expirationTimes,a=l.pendingLanes&-62914561;0<a;){var u=31-le(a),s=1<<u,d=n[u];d===-1?((s&i)===0||(s&t)!==0)&&(n[u]=ch(s,e)):d<=e&&(l.expiredLanes|=s),a&=~s}if(e=yl,i=al,i=Bn(l,l===e?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),t=l.callbackNode,i===0||l===e&&(rl===2||rl===9)||l.cancelPendingCommit!==null)return t!==null&&t!==null&&Ia(t),l.callbackNode=null,l.callbackPriority=0;if((i&3)===0||Dt(l,i)){if(e=i&-i,e===l.callbackPriority)return e;switch(t!==null&&Ia(t),eu(i)){case 2:case 8:i=Mo;break;case 32:i=_n;break;case 268435456:i=Ro;break;default:i=_n}return t=Bd.bind(null,l),i=Wa(i,t),l.callbackPriority=e,l.callbackNode=i,e}return t!==null&&t!==null&&Ia(t),l.callbackPriority=2,l.callbackNode=null,2}function Bd(l,e){if(Bl!==0&&Bl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var i=l.callbackNode;if(za()&&l.callbackNode!==i)return null;var t=al;return t=Bn(l,l===yl?t:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),t===0?null:(pd(l,t,e),Hd(l,Ee()),l.callbackNode!=null&&l.callbackNode===i?Bd.bind(null,l):null)}function Gd(l,e){if(za())return null;pd(l,e,!0)}function wg(){Jg(function(){(cl&6)!==0?Wa(Co,Gg):Nd()})}function Ys(){return Gi===0&&(Gi=zo()),Gi}function wd(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Yn(""+l)}function qd(l,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,l.id&&i.setAttribute("form",l.id),e.parentNode.insertBefore(i,e),l=new FormData(l),i.parentNode.removeChild(i),l}function qg(l,e,i,t,n){if(e==="submit"&&i&&i.stateNode===n){var a=wd((n[Vl]||null).action),u=t.submitter;u&&(e=(e=u[Vl]||null)?wd(e.formAction):u.getAttribute("formAction"),e!==null&&(a=e,u=null));var s=new Zn("action","action",null,t,n);l.push({event:s,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Gi!==0){var d=u?qd(n,u):new FormData(n);ss(i,{pending:!0,data:d,method:n.method,action:a},null,d)}}else typeof a=="function"&&(s.preventDefault(),d=u?qd(n,u):new FormData(n),ss(i,{pending:!0,data:d,method:n.method,action:a},a,d))},currentTarget:n}]})}}for(var Qs=0;Qs<Mu.length;Qs++){var Xs=Mu[Qs],Lg=Xs.toLowerCase(),Yg=Xs[0].toUpperCase()+Xs.slice(1);ye(Lg,"on"+Yg)}ye(pc,"onAnimationEnd"),ye(Sc,"onAnimationIteration"),ye(bc,"onAnimationStart"),ye("dblclick","onDoubleClick"),ye("focusin","onFocus"),ye("focusout","onBlur"),ye(ng,"onTransitionRun"),ye(ag,"onTransitionStart"),ye(ug,"onTransitionCancel"),ye(Ec,"onTransitionEnd"),Ki("onMouseEnter",["mouseout","mouseover"]),Ki("onMouseLeave",["mouseout","mouseover"]),Ki("onPointerEnter",["pointerout","pointerover"]),Ki("onPointerLeave",["pointerout","pointerover"]),Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Ld(l,e){e=(e&4)!==0;for(var i=0;i<l.length;i++){var t=l[i],n=t.event;t=t.listeners;l:{var a=void 0;if(e)for(var u=t.length-1;0<=u;u--){var s=t[u],d=s.instance,b=s.currentTarget;if(s=s.listener,d!==a&&n.isPropagationStopped())break l;a=s,n.currentTarget=b;try{a(n)}catch(M){ya(M)}n.currentTarget=null,a=d}else for(u=0;u<t.length;u++){if(s=t[u],d=s.instance,b=s.currentTarget,s=s.listener,d!==a&&n.isPropagationStopped())break l;a=s,n.currentTarget=b;try{a(n)}catch(M){ya(M)}n.currentTarget=null,a=d}}}}function ll(l,e){var i=e[iu];i===void 0&&(i=e[iu]=new Set);var t=l+"__bubble";i.has(t)||(Yd(e,l,2,!1),i.add(t))}function Vs(l,e,i){var t=0;e&&(t|=4),Yd(i,l,t,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function Zs(l){if(!l[ja]){l[ja]=!0,No.forEach(function(i){i!=="selectionchange"&&(Qg.has(i)||Vs(i,!1,l),Vs(i,!0,l))});var e=l.nodeType===9?l:l.ownerDocument;e===null||e[ja]||(e[ja]=!0,Vs("selectionchange",!1,e))}}function Yd(l,e,i,t){switch(ff(e)){case 2:var n=mm;break;case 8:n=vm;break;default:n=ao}i=n.bind(null,e,i,l),n=void 0,!hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),t?n!==void 0?l.addEventListener(e,i,{capture:!0,passive:n}):l.addEventListener(e,i,!0):n!==void 0?l.addEventListener(e,i,{passive:n}):l.addEventListener(e,i,!1)}function Ks(l,e,i,t,n){var a=t;if((e&1)===0&&(e&2)===0&&t!==null)l:for(;;){if(t===null)return;var u=t.tag;if(u===3||u===4){var s=t.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=t.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Xi(s),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){t=a=u;continue l}s=s.parentNode}}t=t.return}Jo(function(){var b=a,M=du(i),O=[];l:{var A=Ac.get(l);if(A!==void 0){var x=Zn,K=l;switch(l){case"keypress":if(Xn(i)===0)break l;case"keydown":case"keyup":x=Bh;break;case"focusin":K="focus",x=yu;break;case"focusout":K="blur",x=yu;break;case"beforeblur":case"afterblur":x=yu;break;case"click":if(i.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=qh;break;case pc:case Sc:case bc:x=Rh;break;case Ec:x=Yh;break;case"scroll":case"scrollend":x=Ah;break;case"wheel":x=Xh;break;case"copy":case"cut":case"paste":x=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$o;break;case"toggle":case"beforetoggle":x=Zh}var Q=(e&4)!==0,gl=!Q&&(l==="scroll"||l==="scrollend"),y=Q?A!==null?A+"Capture":null:A;Q=[];for(var m=b,S;m!==null;){var z=m;if(S=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||S===null||y===null||(z=_t(m,y),z!=null&&Q.push(vn(m,z,S))),gl)break;m=m.return}0<Q.length&&(A=new x(A,K,null,i,M),O.push({event:A,listeners:Q}))}}if((e&7)===0){l:{if(A=l==="mouseover"||l==="pointerover",x=l==="mouseout"||l==="pointerout",A&&i!==ru&&(K=i.relatedTarget||i.fromElement)&&(Xi(K)||K[Qi]))break l;if((x||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,x?(K=i.relatedTarget||i.toElement,x=b,K=K?Xi(K):null,K!==null&&(gl=E(K),Q=K.tag,K!==gl||Q!==5&&Q!==27&&Q!==6)&&(K=null)):(x=null,K=b),x!==K)){if(Q=Wo,z="onMouseLeave",y="onMouseEnter",m="mouse",(l==="pointerout"||l==="pointerover")&&(Q=$o,z="onPointerLeave",y="onPointerEnter",m="pointer"),gl=x==null?A:Ut(x),S=K==null?A:Ut(K),A=new Q(z,m+"leave",x,i,M),A.target=gl,A.relatedTarget=S,z=null,Xi(M)===b&&(Q=new Q(y,m+"enter",K,i,M),Q.target=S,Q.relatedTarget=gl,z=Q),gl=z,x&&K)e:{for(Q=x,y=K,m=0,S=Q;S;S=xt(S))m++;for(S=0,z=y;z;z=xt(z))S++;for(;0<m-S;)Q=xt(Q),m--;for(;0<S-m;)y=xt(y),S--;for(;m--;){if(Q===y||y!==null&&Q===y.alternate)break e;Q=xt(Q),y=xt(y)}Q=null}else Q=null;x!==null&&Qd(O,A,x,Q,!1),K!==null&&gl!==null&&Qd(O,gl,K,Q,!0)}}l:{if(A=b?Ut(b):window,x=A.nodeName&&A.nodeName.toLowerCase(),x==="select"||x==="input"&&A.type==="file")var w=sc;else if(ac(A))if(oc)w=eg;else{w=$h;var I=Ih}else x=A.nodeName,!x||x.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?b&&cu(b.elementType)&&(w=sc):w=lg;if(w&&(w=w(l,b))){uc(O,w,i,M);break l}I&&I(l,A,b),l==="focusout"&&b&&A.type==="number"&&b.memoizedProps.value!=null&&ou(A,"number",A.value)}switch(I=b?Ut(b):window,l){case"focusin":(ac(I)||I.contentEditable==="true")&&($i=I,xu=b,Yt=null);break;case"focusout":Yt=xu=$i=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,vc(O,i,M);break;case"selectionchange":if(tg)break;case"keydown":case"keyup":vc(O,i,M)}var q;if(Su)l:{switch(l){case"compositionstart":var V="onCompositionStart";break l;case"compositionend":V="onCompositionEnd";break l;case"compositionupdate":V="onCompositionUpdate";break l}V=void 0}else Ii?tc(l,i)&&(V="onCompositionEnd"):l==="keydown"&&i.keyCode===229&&(V="onCompositionStart");V&&(lc&&i.locale!=="ko"&&(Ii||V!=="onCompositionStart"?V==="onCompositionEnd"&&Ii&&(q=Fo()):(Je=M,gu="value"in Je?Je.value:Je.textContent,Ii=!0)),I=Ua(b,V),0<I.length&&(V=new Io(V,l,null,i,M),O.push({event:V,listeners:I}),q?V.data=q:(q=nc(i),q!==null&&(V.data=q)))),(q=kh?Jh(l,i):Fh(l,i))&&(V=Ua(b,"onBeforeInput"),0<V.length&&(I=new Io("onBeforeInput","beforeinput",null,i,M),O.push({event:I,listeners:V}),I.data=q)),qg(O,l,b,i,M)}Ld(O,e)})}function vn(l,e,i){return{instance:l,listener:e,currentTarget:i}}function Ua(l,e){for(var i=e+"Capture",t=[];l!==null;){var n=l,a=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||a===null||(n=_t(l,i),n!=null&&t.unshift(vn(l,n,a)),n=_t(l,e),n!=null&&t.push(vn(l,n,a))),l.tag===3)return t;l=l.return}return[]}function xt(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Qd(l,e,i,t,n){for(var a=e._reactName,u=[];i!==null&&i!==t;){var s=i,d=s.alternate,b=s.stateNode;if(s=s.tag,d!==null&&d===t)break;s!==5&&s!==26&&s!==27||b===null||(d=b,n?(b=_t(i,a),b!=null&&u.unshift(vn(i,b,d))):n||(b=_t(i,a),b!=null&&u.push(vn(i,b,d)))),i=i.return}u.length!==0&&l.push({event:e,listeners:u})}var Xg=/\r\n?/g,Vg=/\u0000|\uFFFD/g;function Xd(l){return(typeof l=="string"?l:""+l).replace(Xg,`
`).replace(Vg,"")}function Vd(l,e){return e=Xd(e),Xd(l)===e}function _a(){}function hl(l,e,i,t,n,a){switch(i){case"children":typeof t=="string"?e==="body"||e==="textarea"&&t===""||Fi(l,t):(typeof t=="number"||typeof t=="bigint")&&e!=="body"&&Fi(l,""+t);break;case"className":wn(l,"class",t);break;case"tabIndex":wn(l,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(l,i,t);break;case"style":Ko(l,t,a);break;case"data":if(e!=="object"){wn(l,"data",t);break}case"src":case"href":if(t===""&&(e!=="a"||i!=="href")){l.removeAttribute(i);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){l.removeAttribute(i);break}t=Yn(""+t),l.setAttribute(i,t);break;case"action":case"formAction":if(typeof t=="function"){l.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(i==="formAction"?(e!=="input"&&hl(l,e,"name",n.name,n,null),hl(l,e,"formEncType",n.formEncType,n,null),hl(l,e,"formMethod",n.formMethod,n,null),hl(l,e,"formTarget",n.formTarget,n,null)):(hl(l,e,"encType",n.encType,n,null),hl(l,e,"method",n.method,n,null),hl(l,e,"target",n.target,n,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){l.removeAttribute(i);break}t=Yn(""+t),l.setAttribute(i,t);break;case"onClick":t!=null&&(l.onclick=_a);break;case"onScroll":t!=null&&ll("scroll",l);break;case"onScrollEnd":t!=null&&ll("scrollend",l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(c(61));if(i=t.__html,i!=null){if(n.children!=null)throw Error(c(60));l.innerHTML=i}}break;case"multiple":l.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":l.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){l.removeAttribute("xlink:href");break}i=Yn(""+t),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?l.setAttribute(i,""+t):l.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?l.setAttribute(i,""):l.removeAttribute(i);break;case"capture":case"download":t===!0?l.setAttribute(i,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?l.setAttribute(i,t):l.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?l.setAttribute(i,t):l.removeAttribute(i);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?l.removeAttribute(i):l.setAttribute(i,t);break;case"popover":ll("beforetoggle",l),ll("toggle",l),Gn(l,"popover",t);break;case"xlinkActuate":De(l,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":De(l,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":De(l,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":De(l,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":De(l,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":De(l,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":De(l,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":De(l,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":De(l,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Gn(l,"is",t);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=bh.get(i)||i,Gn(l,i,t))}}function ks(l,e,i,t,n,a){switch(i){case"style":Ko(l,t,a);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(c(61));if(i=t.__html,i!=null){if(n.children!=null)throw Error(c(60));l.innerHTML=i}}break;case"children":typeof t=="string"?Fi(l,t):(typeof t=="number"||typeof t=="bigint")&&Fi(l,""+t);break;case"onScroll":t!=null&&ll("scroll",l);break;case"onScrollEnd":t!=null&&ll("scrollend",l);break;case"onClick":t!=null&&(l.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ho.hasOwnProperty(i))l:{if(i[0]==="o"&&i[1]==="n"&&(n=i.endsWith("Capture"),e=i.slice(2,n?i.length-7:void 0),a=l[Vl]||null,a=a!=null?a[i]:null,typeof a=="function"&&l.removeEventListener(e,a,n),typeof t=="function")){typeof a!="function"&&a!==null&&(i in l?l[i]=null:l.hasAttribute(i)&&l.removeAttribute(i)),l.addEventListener(e,t,n);break l}i in l?l[i]=t:t===!0?l.setAttribute(i,""):Gn(l,i,t)}}}function Gl(l,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ll("error",l),ll("load",l);var t=!1,n=!1,a;for(a in i)if(i.hasOwnProperty(a)){var u=i[a];if(u!=null)switch(a){case"src":t=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:hl(l,e,a,u,i,null)}}n&&hl(l,e,"srcSet",i.srcSet,i,null),t&&hl(l,e,"src",i.src,i,null);return;case"input":ll("invalid",l);var s=a=u=n=null,d=null,b=null;for(t in i)if(i.hasOwnProperty(t)){var M=i[t];if(M!=null)switch(t){case"name":n=M;break;case"type":u=M;break;case"checked":d=M;break;case"defaultChecked":b=M;break;case"value":a=M;break;case"defaultValue":s=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,e));break;default:hl(l,e,t,M,i,null)}}Qo(l,a,s,d,b,u,n,!1),qn(l);return;case"select":ll("invalid",l),t=u=a=null;for(n in i)if(i.hasOwnProperty(n)&&(s=i[n],s!=null))switch(n){case"value":a=s;break;case"defaultValue":u=s;break;case"multiple":t=s;default:hl(l,e,n,s,i,null)}e=a,i=u,l.multiple=!!t,e!=null?Ji(l,!!t,e,!1):i!=null&&Ji(l,!!t,i,!0);return;case"textarea":ll("invalid",l),a=n=t=null;for(u in i)if(i.hasOwnProperty(u)&&(s=i[u],s!=null))switch(u){case"value":t=s;break;case"defaultValue":n=s;break;case"children":a=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:hl(l,e,u,s,i,null)}Vo(l,t,n,a),qn(l);return;case"option":for(d in i)if(i.hasOwnProperty(d)&&(t=i[d],t!=null))switch(d){case"selected":l.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:hl(l,e,d,t,i,null)}return;case"dialog":ll("beforetoggle",l),ll("toggle",l),ll("cancel",l),ll("close",l);break;case"iframe":case"object":ll("load",l);break;case"video":case"audio":for(t=0;t<mn.length;t++)ll(mn[t],l);break;case"image":ll("error",l),ll("load",l);break;case"details":ll("toggle",l);break;case"embed":case"source":case"link":ll("error",l),ll("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in i)if(i.hasOwnProperty(b)&&(t=i[b],t!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:hl(l,e,b,t,i,null)}return;default:if(cu(e)){for(M in i)i.hasOwnProperty(M)&&(t=i[M],t!==void 0&&ks(l,e,M,t,i,void 0));return}}for(s in i)i.hasOwnProperty(s)&&(t=i[s],t!=null&&hl(l,e,s,t,i,null))}function Zg(l,e,i,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,a=null,u=null,s=null,d=null,b=null,M=null;for(x in i){var O=i[x];if(i.hasOwnProperty(x)&&O!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":d=O;default:t.hasOwnProperty(x)||hl(l,e,x,null,t,O)}}for(var A in t){var x=t[A];if(O=i[A],t.hasOwnProperty(A)&&(x!=null||O!=null))switch(A){case"type":a=x;break;case"name":n=x;break;case"checked":b=x;break;case"defaultChecked":M=x;break;case"value":u=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(137,e));break;default:x!==O&&hl(l,e,A,x,t,O)}}su(l,u,s,d,b,M,a,n);return;case"select":x=u=s=A=null;for(a in i)if(d=i[a],i.hasOwnProperty(a)&&d!=null)switch(a){case"value":break;case"multiple":x=d;default:t.hasOwnProperty(a)||hl(l,e,a,null,t,d)}for(n in t)if(a=t[n],d=i[n],t.hasOwnProperty(n)&&(a!=null||d!=null))switch(n){case"value":A=a;break;case"defaultValue":s=a;break;case"multiple":u=a;default:a!==d&&hl(l,e,n,a,t,d)}e=s,i=u,t=x,A!=null?Ji(l,!!i,A,!1):!!t!=!!i&&(e!=null?Ji(l,!!i,e,!0):Ji(l,!!i,i?[]:"",!1));return;case"textarea":x=A=null;for(s in i)if(n=i[s],i.hasOwnProperty(s)&&n!=null&&!t.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:hl(l,e,s,null,t,n)}for(u in t)if(n=t[u],a=i[u],t.hasOwnProperty(u)&&(n!=null||a!=null))switch(u){case"value":A=n;break;case"defaultValue":x=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==a&&hl(l,e,u,n,t,a)}Xo(l,A,x);return;case"option":for(var K in i)if(A=i[K],i.hasOwnProperty(K)&&A!=null&&!t.hasOwnProperty(K))switch(K){case"selected":l.selected=!1;break;default:hl(l,e,K,null,t,A)}for(d in t)if(A=t[d],x=i[d],t.hasOwnProperty(d)&&A!==x&&(A!=null||x!=null))switch(d){case"selected":l.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:hl(l,e,d,A,t,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in i)A=i[Q],i.hasOwnProperty(Q)&&A!=null&&!t.hasOwnProperty(Q)&&hl(l,e,Q,null,t,A);for(b in t)if(A=t[b],x=i[b],t.hasOwnProperty(b)&&A!==x&&(A!=null||x!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,e));break;default:hl(l,e,b,A,t,x)}return;default:if(cu(e)){for(var gl in i)A=i[gl],i.hasOwnProperty(gl)&&A!==void 0&&!t.hasOwnProperty(gl)&&ks(l,e,gl,void 0,t,A);for(M in t)A=t[M],x=i[M],!t.hasOwnProperty(M)||A===x||A===void 0&&x===void 0||ks(l,e,M,A,t,x);return}}for(var y in i)A=i[y],i.hasOwnProperty(y)&&A!=null&&!t.hasOwnProperty(y)&&hl(l,e,y,null,t,A);for(O in t)A=t[O],x=i[O],!t.hasOwnProperty(O)||A===x||A==null&&x==null||hl(l,e,O,A,t,x)}var Js=null,Fs=null;function Na(l){return l.nodeType===9?l:l.ownerDocument}function Zd(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kd(l,e){if(l===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&e==="foreignObject"?0:l}function Ps(l,e){return l==="textarea"||l==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ws=null;function Kg(){var l=window.event;return l&&l.type==="popstate"?l===Ws?!1:(Ws=l,!0):(Ws=null,!1)}var kd=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(l){return Jd.resolve(null).then(l).catch(Fg)}:kd;function Fg(l){setTimeout(function(){throw l})}function ri(l){return l==="head"}function Fd(l,e){var i=e,t=0,n=0;do{var a=i.nextSibling;if(l.removeChild(i),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(0<t&&8>t){i=t;var u=l.ownerDocument;if(i&1&&yn(u.documentElement),i&2&&yn(u.body),i&4)for(i=u.head,yn(i),u=i.firstChild;u;){var s=u.nextSibling,d=u.nodeName;u[jt]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=s}}if(n===0){l.removeChild(a),Cn(e);return}n--}else i==="$"||i==="$?"||i==="$!"?n++:t=i.charCodeAt(0)-48;else t=0;i=a}while(i);Cn(e)}function Is(l){var e=l.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Is(i),tu(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}l.removeChild(i)}}function Pg(l,e,i,t){for(;l.nodeType===1;){var n=i;if(l.nodeName.toLowerCase()!==e.toLowerCase()){if(!t&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(t){if(!l[jt])switch(e){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(a=l.getAttribute("rel"),a==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(a!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(a=l.getAttribute("src"),(a!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&a&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(e==="input"&&l.type==="hidden"){var a=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===a)return l}else return l;if(l=Se(l.nextSibling),l===null)break}return null}function Wg(l,e,i){if(e==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!i||(l=Se(l.nextSibling),l===null))return null;return l}function $s(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState==="complete"}function Ig(l,e){var i=l.ownerDocument;if(l.data!=="$?"||i.readyState==="complete")e();else{var t=function(){e(),i.removeEventListener("DOMContentLoaded",t)};i.addEventListener("DOMContentLoaded",t),l._reactRetry=t}}function Se(l){for(;l!=null;l=l.nextSibling){var e=l.nodeType;if(e===1||e===3)break;if(e===8){if(e=l.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return l}var lo=null;function Pd(l){l=l.previousSibling;for(var e=0;l;){if(l.nodeType===8){var i=l.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return l;e--}else i==="/$"&&e++}l=l.previousSibling}return null}function Wd(l,e,i){switch(e=Na(i),l){case"html":if(l=e.documentElement,!l)throw Error(c(452));return l;case"head":if(l=e.head,!l)throw Error(c(453));return l;case"body":if(l=e.body,!l)throw Error(c(454));return l;default:throw Error(c(451))}}function yn(l){for(var e=l.attributes;e.length;)l.removeAttributeNode(e[0]);tu(l)}var ve=new Map,Id=new Set;function Ha(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Xe=B.d;B.d={f:$g,r:lm,D:em,C:im,L:tm,m:nm,X:um,S:am,M:sm};function $g(){var l=Xe.f(),e=Ma();return l||e}function lm(l){var e=Vi(l);e!==null&&e.tag===5&&e.type==="form"?pr(e):Xe.r(l)}var Tt=typeof document>"u"?null:document;function $d(l,e,i){var t=Tt;if(t&&typeof e=="string"&&e){var n=ce(e);n='link[rel="'+l+'"][href="'+n+'"]',typeof i=="string"&&(n+='[crossorigin="'+i+'"]'),Id.has(n)||(Id.add(n),l={rel:l,crossOrigin:i,href:e},t.querySelector(n)===null&&(e=t.createElement("link"),Gl(e,"link",l),jl(e),t.head.appendChild(e)))}}function em(l){Xe.D(l),$d("dns-prefetch",l,null)}function im(l,e){Xe.C(l,e),$d("preconnect",l,e)}function tm(l,e,i){Xe.L(l,e,i);var t=Tt;if(t&&l&&e){var n='link[rel="preload"][as="'+ce(e)+'"]';e==="image"&&i&&i.imageSrcSet?(n+='[imagesrcset="'+ce(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(n+='[imagesizes="'+ce(i.imageSizes)+'"]')):n+='[href="'+ce(l)+'"]';var a=n;switch(e){case"style":a=Ct(l);break;case"script":a=Mt(l)}ve.has(a)||(l=U({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:l,as:e},i),ve.set(a,l),t.querySelector(n)!==null||e==="style"&&t.querySelector(pn(a))||e==="script"&&t.querySelector(Sn(a))||(e=t.createElement("link"),Gl(e,"link",l),jl(e),t.head.appendChild(e)))}}function nm(l,e){Xe.m(l,e);var i=Tt;if(i&&l){var t=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ce(t)+'"][href="'+ce(l)+'"]',a=n;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Mt(l)}if(!ve.has(a)&&(l=U({rel:"modulepreload",href:l},e),ve.set(a,l),i.querySelector(n)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Sn(a)))return}t=i.createElement("link"),Gl(t,"link",l),jl(t),i.head.appendChild(t)}}}function am(l,e,i){Xe.S(l,e,i);var t=Tt;if(t&&l){var n=Zi(t).hoistableStyles,a=Ct(l);e=e||"default";var u=n.get(a);if(!u){var s={loading:0,preload:null};if(u=t.querySelector(pn(a)))s.loading=5;else{l=U({rel:"stylesheet",href:l,"data-precedence":e},i),(i=ve.get(a))&&eo(l,i);var d=u=t.createElement("link");jl(d),Gl(d,"link",l),d._p=new Promise(function(b,M){d.onload=b,d.onerror=M}),d.addEventListener("load",function(){s.loading|=1}),d.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ba(u,e,t)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(a,u)}}}function um(l,e){Xe.X(l,e);var i=Tt;if(i&&l){var t=Zi(i).hoistableScripts,n=Mt(l),a=t.get(n);a||(a=i.querySelector(Sn(n)),a||(l=U({src:l,async:!0},e),(e=ve.get(n))&&io(l,e),a=i.createElement("script"),jl(a),Gl(a,"link",l),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},t.set(n,a))}}function sm(l,e){Xe.M(l,e);var i=Tt;if(i&&l){var t=Zi(i).hoistableScripts,n=Mt(l),a=t.get(n);a||(a=i.querySelector(Sn(n)),a||(l=U({src:l,async:!0,type:"module"},e),(e=ve.get(n))&&io(l,e),a=i.createElement("script"),jl(a),Gl(a,"link",l),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},t.set(n,a))}}function lf(l,e,i,t){var n=(n=k.current)?Ha(n):null;if(!n)throw Error(c(446));switch(l){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=Ct(i.href),i=Zi(n).hoistableStyles,t=i.get(e),t||(t={type:"style",instance:null,count:0,state:null},i.set(e,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){l=Ct(i.href);var a=Zi(n).hoistableStyles,u=a.get(l);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(l,u),(a=n.querySelector(pn(l)))&&!a._p&&(u.instance=a,u.state.loading=5),ve.has(l)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},ve.set(l,i),a||om(n,l,i,u.state))),e&&t===null)throw Error(c(528,""));return u}if(e&&t!==null)throw Error(c(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Mt(i),i=Zi(n).hoistableScripts,t=i.get(e),t||(t={type:"script",instance:null,count:0,state:null},i.set(e,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,l))}}function Ct(l){return'href="'+ce(l)+'"'}function pn(l){return'link[rel="stylesheet"]['+l+"]"}function ef(l){return U({},l,{"data-precedence":l.precedence,precedence:null})}function om(l,e,i,t){l.querySelector('link[rel="preload"][as="style"]['+e+"]")?t.loading=1:(e=l.createElement("link"),t.preload=e,e.addEventListener("load",function(){return t.loading|=1}),e.addEventListener("error",function(){return t.loading|=2}),Gl(e,"link",i),jl(e),l.head.appendChild(e))}function Mt(l){return'[src="'+ce(l)+'"]'}function Sn(l){return"script[async]"+l}function tf(l,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var t=l.querySelector('style[data-href~="'+ce(i.href)+'"]');if(t)return e.instance=t,jl(t),t;var n=U({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return t=(l.ownerDocument||l).createElement("style"),jl(t),Gl(t,"style",n),Ba(t,i.precedence,l),e.instance=t;case"stylesheet":n=Ct(i.href);var a=l.querySelector(pn(n));if(a)return e.state.loading|=4,e.instance=a,jl(a),a;t=ef(i),(n=ve.get(n))&&eo(t,n),a=(l.ownerDocument||l).createElement("link"),jl(a);var u=a;return u._p=new Promise(function(s,d){u.onload=s,u.onerror=d}),Gl(a,"link",t),e.state.loading|=4,Ba(a,i.precedence,l),e.instance=a;case"script":return a=Mt(i.src),(n=l.querySelector(Sn(a)))?(e.instance=n,jl(n),n):(t=i,(n=ve.get(a))&&(t=U({},i),io(t,n)),l=l.ownerDocument||l,n=l.createElement("script"),jl(n),Gl(n,"link",t),l.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(t=e.instance,e.state.loading|=4,Ba(t,i.precedence,l));return e.instance}function Ba(l,e,i){for(var t=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=t.length?t[t.length-1]:null,a=n,u=0;u<t.length;u++){var s=t[u];if(s.dataset.precedence===e)a=s;else if(a!==n)break}a?a.parentNode.insertBefore(l,a.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(l,e.firstChild))}function eo(l,e){l.crossOrigin==null&&(l.crossOrigin=e.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=e.referrerPolicy),l.title==null&&(l.title=e.title)}function io(l,e){l.crossOrigin==null&&(l.crossOrigin=e.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=e.referrerPolicy),l.integrity==null&&(l.integrity=e.integrity)}var Ga=null;function nf(l,e,i){if(Ga===null){var t=new Map,n=Ga=new Map;n.set(i,t)}else n=Ga,t=n.get(i),t||(t=new Map,n.set(i,t));if(t.has(l))return t;for(t.set(l,null),i=i.getElementsByTagName(l),n=0;n<i.length;n++){var a=i[n];if(!(a[jt]||a[Ll]||l==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var u=a.getAttribute(e)||"";u=l+u;var s=t.get(u);s?s.push(a):t.set(u,[a])}}return t}function af(l,e,i){l=l.ownerDocument||l,l.head.insertBefore(i,e==="title"?l.querySelector("head > title"):null)}function cm(l,e,i){if(i===1||e.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return l=e.disabled,typeof e.precedence=="string"&&l==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function uf(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}var bn=null;function rm(){}function dm(l,e,i){if(bn===null)throw Error(c(475));var t=bn;if(e.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ct(i.href),a=l.querySelector(pn(n));if(a){l=a._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=wa.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=a,jl(a);return}a=l.ownerDocument||l,i=ef(i),(n=ve.get(n))&&eo(i,n),a=a.createElement("link"),jl(a);var u=a;u._p=new Promise(function(s,d){u.onload=s,u.onerror=d}),Gl(a,"link",i),e.instance=a}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=wa.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}function fm(){if(bn===null)throw Error(c(475));var l=bn;return l.stylesheets&&l.count===0&&to(l,l.stylesheets),0<l.count?function(e){var i=setTimeout(function(){if(l.stylesheets&&to(l,l.stylesheets),l.unsuspend){var t=l.unsuspend;l.unsuspend=null,t()}},6e4);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(i)}}:null}function wa(){if(this.count--,this.count===0){if(this.stylesheets)to(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var qa=null;function to(l,e){l.stylesheets=null,l.unsuspend!==null&&(l.count++,qa=new Map,e.forEach(hm,l),qa=null,wa.call(l))}function hm(l,e){if(!(e.state.loading&4)){var i=qa.get(l);if(i)var t=i.get(null);else{i=new Map,qa.set(l,i);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<n.length;a++){var u=n[a];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(i.set(u.dataset.precedence,u),t=u)}t&&i.set(null,t)}n=e.instance,u=n.getAttribute("data-precedence"),a=i.get(u)||t,a===t&&i.set(null,n),i.set(u,n),this.count++,t=wa.bind(this),n.addEventListener("load",t),n.addEventListener("error",t),a?a.parentNode.insertBefore(n,a.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),e.state.loading|=4}}var En={$$typeof:tl,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function gm(l,e,i,t,n,a,u,s){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$a(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.hiddenUpdates=$a(null),this.identifierPrefix=t,this.onUncaughtError=n,this.onCaughtError=a,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function sf(l,e,i,t,n,a,u,s,d,b,M,O){return l=new gm(l,e,i,u,s,d,b,O),e=1,a===!0&&(e|=24),a=ie(3,null,null,e),l.current=a,a.stateNode=l,e=wu(),e.refCount++,l.pooledCache=e,e.refCount++,a.memoizedState={element:t,isDehydrated:i,cache:e},Qu(a),l}function of(l){return l?(l=tt,l):tt}function cf(l,e,i,t,n,a){n=of(n),t.context===null?t.context=n:t.pendingContext=n,t=We(e),t.payload={element:i},a=a===void 0?null:a,a!==null&&(t.callback=a),i=Ie(l,t,e),i!==null&&(se(i,l,e),Pt(i,l,e))}function rf(l,e){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var i=l.retryLane;l.retryLane=i!==0&&i<e?i:e}}function no(l,e){rf(l,e),(l=l.alternate)&&rf(l,e)}function df(l){if(l.tag===13){var e=it(l,67108864);e!==null&&se(e,l,67108864),no(l,67108864)}}var La=!0;function mm(l,e,i,t){var n=R.T;R.T=null;var a=B.p;try{B.p=2,ao(l,e,i,t)}finally{B.p=a,R.T=n}}function vm(l,e,i,t){var n=R.T;R.T=null;var a=B.p;try{B.p=8,ao(l,e,i,t)}finally{B.p=a,R.T=n}}function ao(l,e,i,t){if(La){var n=uo(t);if(n===null)Ks(l,e,t,Ya,i),hf(l,t);else if(pm(n,l,e,i,t))t.stopPropagation();else if(hf(l,t),e&4&&-1<ym.indexOf(l)){for(;n!==null;){var a=Vi(n);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var u=bi(a.pendingLanes);if(u!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var d=1<<31-le(u);s.entanglements[1]|=d,u&=~d}Me(a),(cl&6)===0&&(Ta=Ee()+500,gn(0))}}break;case 13:s=it(a,2),s!==null&&se(s,a,2),Ma(),no(a,2)}if(a=uo(t),a===null&&Ks(l,e,t,Ya,i),a===n)break;n=a}n!==null&&t.stopPropagation()}else Ks(l,e,t,null,i)}}function uo(l){return l=du(l),so(l)}var Ya=null;function so(l){if(Ya=null,l=Xi(l),l!==null){var e=E(l);if(e===null)l=null;else{var i=e.tag;if(i===13){if(l=C(e),l!==null)return l;l=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;l=null}else e!==l&&(l=null)}}return Ya=l,null}function ff(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ih()){case Co:return 2;case Mo:return 8;case _n:case th:return 32;case Ro:return 268435456;default:return 32}default:return 32}}var oo=!1,di=null,fi=null,hi=null,An=new Map,xn=new Map,gi=[],ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hf(l,e){switch(l){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":hi=null;break;case"pointerover":case"pointerout":An.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(e.pointerId)}}function Tn(l,e,i,t,n,a){return l===null||l.nativeEvent!==a?(l={blockedOn:e,domEventName:i,eventSystemFlags:t,nativeEvent:a,targetContainers:[n]},e!==null&&(e=Vi(e),e!==null&&df(e)),l):(l.eventSystemFlags|=t,e=l.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),l)}function pm(l,e,i,t,n){switch(e){case"focusin":return di=Tn(di,l,e,i,t,n),!0;case"dragenter":return fi=Tn(fi,l,e,i,t,n),!0;case"mouseover":return hi=Tn(hi,l,e,i,t,n),!0;case"pointerover":var a=n.pointerId;return An.set(a,Tn(An.get(a)||null,l,e,i,t,n)),!0;case"gotpointercapture":return a=n.pointerId,xn.set(a,Tn(xn.get(a)||null,l,e,i,t,n)),!0}return!1}function gf(l){var e=Xi(l.target);if(e!==null){var i=E(e);if(i!==null){if(e=i.tag,e===13){if(e=C(i),e!==null){l.blockedOn=e,dh(l.priority,function(){if(i.tag===13){var t=ue();t=lu(t);var n=it(i,t);n!==null&&se(n,i,t),no(i,t)}});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){l.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Qa(l){if(l.blockedOn!==null)return!1;for(var e=l.targetContainers;0<e.length;){var i=uo(l.nativeEvent);if(i===null){i=l.nativeEvent;var t=new i.constructor(i.type,i);ru=t,i.target.dispatchEvent(t),ru=null}else return e=Vi(i),e!==null&&df(e),l.blockedOn=i,!1;e.shift()}return!0}function mf(l,e,i){Qa(l)&&i.delete(e)}function Sm(){oo=!1,di!==null&&Qa(di)&&(di=null),fi!==null&&Qa(fi)&&(fi=null),hi!==null&&Qa(hi)&&(hi=null),An.forEach(mf),xn.forEach(mf)}function Xa(l,e){l.blockedOn===e&&(l.blockedOn=null,oo||(oo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Sm)))}var Va=null;function vf(l){Va!==l&&(Va=l,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Va===l&&(Va=null);for(var e=0;e<l.length;e+=3){var i=l[e],t=l[e+1],n=l[e+2];if(typeof t!="function"){if(so(t||i)===null)continue;break}var a=Vi(i);a!==null&&(l.splice(e,3),e-=3,ss(a,{pending:!0,data:n,method:i.method,action:t},t,n))}}))}function Cn(l){function e(d){return Xa(d,l)}di!==null&&Xa(di,l),fi!==null&&Xa(fi,l),hi!==null&&Xa(hi,l),An.forEach(e),xn.forEach(e);for(var i=0;i<gi.length;i++){var t=gi[i];t.blockedOn===l&&(t.blockedOn=null)}for(;0<gi.length&&(i=gi[0],i.blockedOn===null);)gf(i),i.blockedOn===null&&gi.shift();if(i=(l.ownerDocument||l).$$reactFormReplay,i!=null)for(t=0;t<i.length;t+=3){var n=i[t],a=i[t+1],u=n[Vl]||null;if(typeof a=="function")u||vf(i);else if(u){var s=null;if(a&&a.hasAttribute("formAction")){if(n=a,u=a[Vl]||null)s=u.formAction;else if(so(n)!==null)continue}else s=u.action;typeof s=="function"?i[t+1]=s:(i.splice(t,3),t-=3),vf(i)}}}function co(l){this._internalRoot=l}Za.prototype.render=co.prototype.render=function(l){var e=this._internalRoot;if(e===null)throw Error(c(409));var i=e.current,t=ue();cf(i,t,l,e,null,null)},Za.prototype.unmount=co.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var e=l.containerInfo;cf(l.current,2,null,l,null,null),Ma(),e[Qi]=null}};function Za(l){this._internalRoot=l}Za.prototype.unstable_scheduleHydration=function(l){if(l){var e=Uo();l={blockedOn:null,target:l,priority:e};for(var i=0;i<gi.length&&e!==0&&e<gi[i].priority;i++);gi.splice(i,0,l),i===0&&gf(l)}};var yf=f.version;if(yf!=="19.1.0")throw Error(c(527,yf,"19.1.0"));B.findDOMNode=function(l){var e=l._reactInternals;if(e===void 0)throw typeof l.render=="function"?Error(c(188)):(l=Object.keys(l).join(","),Error(c(268,l)));return l=T(e),l=l!==null?p(l):null,l=l===null?null:l.stateNode,l};var bm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{zt=Ka.inject(bm),$l=Ka}catch{}}return Rn.createRoot=function(l,e){if(!v(l))throw Error(c(299));var i=!1,t="",n=Ur,a=_r,u=Nr,s=null;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(a=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=sf(l,1,!1,null,null,i,t,n,a,u,s,null),l[Qi]=e.current,Zs(l),new co(e)},Rn.hydrateRoot=function(l,e,i){if(!v(l))throw Error(c(299));var t=!1,n="",a=Ur,u=_r,s=Nr,d=null,b=null;return i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(n=i.identifierPrefix),i.onUncaughtError!==void 0&&(a=i.onUncaughtError),i.onCaughtError!==void 0&&(u=i.onCaughtError),i.onRecoverableError!==void 0&&(s=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(d=i.unstable_transitionCallbacks),i.formState!==void 0&&(b=i.formState)),e=sf(l,1,!0,e,i??null,t,n,a,u,s,d,b),e.context=of(null),i=e.current,t=ue(),t=lu(t),n=We(t),n.callback=null,Ie(i,n,t),i=t,e.current.lanes=i,Ot(e,i),Me(e),l[Qi]=e.current,Zs(l),new Za(e)},Rn.version="19.1.0",Rn}var Rf;function jm(){if(Rf)return ho.exports;Rf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),ho.exports=Om(),ho.exports}var Um=jm();const _m=Lf(Um);Qf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zn(){return zn=Object.assign?Object.assign.bind():function(o){for(var f=1;f<arguments.length;f++){var h=arguments[f];for(var c in h)Object.prototype.hasOwnProperty.call(h,c)&&(o[c]=h[c])}return o},zn.apply(this,arguments)}var vi;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(vi||(vi={}));const zf="popstate";function Nm(o){o===void 0&&(o={});function f(v,E){let{pathname:C="/",search:D="",hash:T=""}=wi(v.location.hash.substr(1));return!C.startsWith("/")&&!C.startsWith(".")&&(C="/"+C),po("",{pathname:C,search:D,hash:T},E.state&&E.state.usr||null,E.state&&E.state.key||"default")}function h(v,E){let C=v.document.querySelector("base"),D="";if(C&&C.getAttribute("href")){let T=v.location.href,p=T.indexOf("#");D=p===-1?T:T.slice(0,p)}return D+"#"+(typeof E=="string"?E:ka(E))}function c(v,E){Ao(v.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(E)+")")}return Bm(f,h,c,o)}function zl(o,f){if(o===!1||o===null||typeof o>"u")throw new Error(f)}function Ao(o,f){if(!o){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Hm(){return Math.random().toString(36).substr(2,8)}function Df(o,f){return{usr:o.state,key:o.key,idx:f}}function po(o,f,h,c){return h===void 0&&(h=null),zn({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof f=="string"?wi(f):f,{state:h,key:f&&f.key||c||Hm()})}function ka(o){let{pathname:f="/",search:h="",hash:c=""}=o;return h&&h!=="?"&&(f+=h.charAt(0)==="?"?h:"?"+h),c&&c!=="#"&&(f+=c.charAt(0)==="#"?c:"#"+c),f}function wi(o){let f={};if(o){let h=o.indexOf("#");h>=0&&(f.hash=o.substr(h),o=o.substr(0,h));let c=o.indexOf("?");c>=0&&(f.search=o.substr(c),o=o.substr(0,c)),o&&(f.pathname=o)}return f}function Bm(o,f,h,c){c===void 0&&(c={});let{window:v=document.defaultView,v5Compat:E=!1}=c,C=v.history,D=vi.Pop,T=null,p=U();p==null&&(p=0,C.replaceState(zn({},C.state,{idx:p}),""));function U(){return(C.state||{idx:null}).idx}function _(){D=vi.Pop;let X=U(),W=X==null?null:X-p;p=X,T&&T({action:D,location:il.location,delta:W})}function L(X,W){D=vi.Push;let dl=po(il.location,X,W);h&&h(dl,X),p=U()+1;let tl=Df(dl,p),xl=il.createHref(dl);try{C.pushState(tl,"",xl)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;v.location.assign(xl)}E&&T&&T({action:D,location:il.location,delta:1})}function nl(X,W){D=vi.Replace;let dl=po(il.location,X,W);h&&h(dl,X),p=U();let tl=Df(dl,p),xl=il.createHref(dl);C.replaceState(tl,"",xl),E&&T&&T({action:D,location:il.location,delta:0})}function el(X){let W=v.location.origin!=="null"?v.location.origin:v.location.href,dl=typeof X=="string"?X:ka(X);return dl=dl.replace(/ $/,"%20"),zl(W,"No window.location.(origin|href) available to create URL for href: "+dl),new URL(dl,W)}let il={get action(){return D},get location(){return o(v,C)},listen(X){if(T)throw new Error("A history only accepts one active listener");return v.addEventListener(zf,_),T=X,()=>{v.removeEventListener(zf,_),T=null}},createHref(X){return f(v,X)},createURL:el,encodeLocation(X){let W=el(X);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:L,replace:nl,go(X){return C.go(X)}};return il}var Of;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Of||(Of={}));function Gm(o,f,h){return h===void 0&&(h="/"),wm(o,f,h)}function wm(o,f,h,c){let v=typeof f=="string"?wi(f):f,E=xo(v.pathname||"/",h);if(E==null)return null;let C=Xf(o);qm(C);let D=null;for(let T=0;D==null&&T<C.length;++T){let p=Wm(E);D=Jm(C[T],p)}return D}function Xf(o,f,h,c){f===void 0&&(f=[]),h===void 0&&(h=[]),c===void 0&&(c="");let v=(E,C,D)=>{let T={relativePath:D===void 0?E.path||"":D,caseSensitive:E.caseSensitive===!0,childrenIndex:C,route:E};T.relativePath.startsWith("/")&&(zl(T.relativePath.startsWith(c),'Absolute route path "'+T.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),T.relativePath=T.relativePath.slice(c.length));let p=yi([c,T.relativePath]),U=h.concat(T);E.children&&E.children.length>0&&(zl(E.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Xf(E.children,f,U,p)),!(E.path==null&&!E.index)&&f.push({path:p,score:Km(p,E.index),routesMeta:U})};return o.forEach((E,C)=>{var D;if(E.path===""||!((D=E.path)!=null&&D.includes("?")))v(E,C);else for(let T of Vf(E.path))v(E,C,T)}),f}function Vf(o){let f=o.split("/");if(f.length===0)return[];let[h,...c]=f,v=h.endsWith("?"),E=h.replace(/\?$/,"");if(c.length===0)return v?[E,""]:[E];let C=Vf(c.join("/")),D=[];return D.push(...C.map(T=>T===""?E:[E,T].join("/"))),v&&D.push(...C),D.map(T=>o.startsWith("/")&&T===""?"/":T)}function qm(o){o.sort((f,h)=>f.score!==h.score?h.score-f.score:km(f.routesMeta.map(c=>c.childrenIndex),h.routesMeta.map(c=>c.childrenIndex)))}const Lm=/^:[\w-]+$/,Ym=3,Qm=2,Xm=1,Vm=10,Zm=-2,jf=o=>o==="*";function Km(o,f){let h=o.split("/"),c=h.length;return h.some(jf)&&(c+=Zm),f&&(c+=Qm),h.filter(v=>!jf(v)).reduce((v,E)=>v+(Lm.test(E)?Ym:E===""?Xm:Vm),c)}function km(o,f){return o.length===f.length&&o.slice(0,-1).every((c,v)=>c===f[v])?o[o.length-1]-f[f.length-1]:0}function Jm(o,f,h){let{routesMeta:c}=o,v={},E="/",C=[];for(let D=0;D<c.length;++D){let T=c[D],p=D===c.length-1,U=E==="/"?f:f.slice(E.length)||"/",_=Fm({path:T.relativePath,caseSensitive:T.caseSensitive,end:p},U),L=T.route;if(!_)return null;Object.assign(v,_.params),C.push({params:v,pathname:yi([E,_.pathname]),pathnameBase:ev(yi([E,_.pathnameBase])),route:L}),_.pathnameBase!=="/"&&(E=yi([E,_.pathnameBase]))}return C}function Fm(o,f){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[h,c]=Pm(o.path,o.caseSensitive,o.end),v=f.match(h);if(!v)return null;let E=v[0],C=E.replace(/(.)\/+$/,"$1"),D=v.slice(1);return{params:c.reduce((p,U,_)=>{let{paramName:L,isOptional:nl}=U;if(L==="*"){let il=D[_]||"";C=E.slice(0,E.length-il.length).replace(/(.)\/+$/,"$1")}const el=D[_];return nl&&!el?p[L]=void 0:p[L]=(el||"").replace(/%2F/g,"/"),p},{}),pathname:E,pathnameBase:C,pattern:o}}function Pm(o,f,h){f===void 0&&(f=!1),h===void 0&&(h=!0),Ao(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let c=[],v="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(C,D,T)=>(c.push({paramName:D,isOptional:T!=null}),T?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(c.push({paramName:"*"}),v+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):h?v+="\\/*$":o!==""&&o!=="/"&&(v+="(?:(?=\\/|$))"),[new RegExp(v,f?void 0:"i"),c]}function Wm(o){try{return o.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Ao(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+f+").")),o}}function xo(o,f){if(f==="/")return o;if(!o.toLowerCase().startsWith(f.toLowerCase()))return null;let h=f.endsWith("/")?f.length-1:f.length,c=o.charAt(h);return c&&c!=="/"?null:o.slice(h)||"/"}function Im(o,f){f===void 0&&(f="/");let{pathname:h,search:c="",hash:v=""}=typeof o=="string"?wi(o):o;return{pathname:h?h.startsWith("/")?h:$m(h,f):f,search:iv(c),hash:tv(v)}}function $m(o,f){let h=f.replace(/\/+$/,"").split("/");return o.split("/").forEach(v=>{v===".."?h.length>1&&h.pop():v!=="."&&h.push(v)}),h.length>1?h.join("/"):"/"}function yo(o,f,h,c){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+f+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+h+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lv(o){return o.filter((f,h)=>h===0||f.route.path&&f.route.path.length>0)}function Zf(o,f){let h=lv(o);return f?h.map((c,v)=>v===h.length-1?c.pathname:c.pathnameBase):h.map(c=>c.pathnameBase)}function Kf(o,f,h,c){c===void 0&&(c=!1);let v;typeof o=="string"?v=wi(o):(v=zn({},o),zl(!v.pathname||!v.pathname.includes("?"),yo("?","pathname","search",v)),zl(!v.pathname||!v.pathname.includes("#"),yo("#","pathname","hash",v)),zl(!v.search||!v.search.includes("#"),yo("#","search","hash",v)));let E=o===""||v.pathname==="",C=E?"/":v.pathname,D;if(C==null)D=h;else{let _=f.length-1;if(!c&&C.startsWith("..")){let L=C.split("/");for(;L[0]==="..";)L.shift(),_-=1;v.pathname=L.join("/")}D=_>=0?f[_]:"/"}let T=Im(v,D),p=C&&C!=="/"&&C.endsWith("/"),U=(E||C===".")&&h.endsWith("/");return!T.pathname.endsWith("/")&&(p||U)&&(T.pathname+="/"),T}const yi=o=>o.join("/").replace(/\/\/+/g,"/"),ev=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),iv=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,tv=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function nv(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const kf=["post","put","patch","delete"];new Set(kf);const av=["get",...kf];new Set(av);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(o){for(var f=1;f<arguments.length;f++){var h=arguments[f];for(var c in h)Object.prototype.hasOwnProperty.call(h,c)&&(o[c]=h[c])}return o},Dn.apply(this,arguments)}const To=N.createContext(null),uv=N.createContext(null),qi=N.createContext(null),Ja=N.createContext(null),Li=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Jf=N.createContext(null);function sv(o,f){let{relative:h}=f===void 0?{}:f;On()||zl(!1);let{basename:c,navigator:v}=N.useContext(qi),{hash:E,pathname:C,search:D}=Pf(o,{relative:h}),T=C;return c!=="/"&&(T=C==="/"?c:yi([c,C])),v.createHref({pathname:T,search:D,hash:E})}function On(){return N.useContext(Ja)!=null}function Rt(){return On()||zl(!1),N.useContext(Ja).location}function Ff(o){N.useContext(qi).static||N.useLayoutEffect(o)}function jn(){let{isDataRoute:o}=N.useContext(Li);return o?bv():ov()}function ov(){On()||zl(!1);let o=N.useContext(To),{basename:f,future:h,navigator:c}=N.useContext(qi),{matches:v}=N.useContext(Li),{pathname:E}=Rt(),C=JSON.stringify(Zf(v,h.v7_relativeSplatPath)),D=N.useRef(!1);return Ff(()=>{D.current=!0}),N.useCallback(function(p,U){if(U===void 0&&(U={}),!D.current)return;if(typeof p=="number"){c.go(p);return}let _=Kf(p,JSON.parse(C),E,U.relative==="path");o==null&&f!=="/"&&(_.pathname=_.pathname==="/"?f:yi([f,_.pathname])),(U.replace?c.replace:c.push)(_,U.state,U)},[f,c,C,E,o])}function Pf(o,f){let{relative:h}=f===void 0?{}:f,{future:c}=N.useContext(qi),{matches:v}=N.useContext(Li),{pathname:E}=Rt(),C=JSON.stringify(Zf(v,c.v7_relativeSplatPath));return N.useMemo(()=>Kf(o,JSON.parse(C),E,h==="path"),[o,C,E,h])}function cv(o,f){return rv(o,f)}function rv(o,f,h,c){On()||zl(!1);let{navigator:v,static:E}=N.useContext(qi),{matches:C}=N.useContext(Li),D=C[C.length-1],T=D?D.params:{};D&&D.pathname;let p=D?D.pathnameBase:"/";D&&D.route;let U=Rt(),_;if(f){var L;let W=typeof f=="string"?wi(f):f;p==="/"||(L=W.pathname)!=null&&L.startsWith(p)||zl(!1),_=W}else _=U;let nl=_.pathname||"/",el=nl;if(p!=="/"){let W=p.replace(/^\//,"").split("/");el="/"+nl.replace(/^\//,"").split("/").slice(W.length).join("/")}let il=Gm(o,{pathname:el}),X=mv(il&&il.map(W=>Object.assign({},W,{params:Object.assign({},T,W.params),pathname:yi([p,v.encodeLocation?v.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?p:yi([p,v.encodeLocation?v.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),C,h,c);return f&&X?N.createElement(Ja.Provider,{value:{location:Dn({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:vi.Pop}},X):X}function dv(){let o=Sv(),f=nv(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),h=o instanceof Error?o.stack:null,v={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},f),h?N.createElement("pre",{style:v},h):null,null)}const fv=N.createElement(dv,null);class hv extends N.Component{constructor(f){super(f),this.state={location:f.location,revalidation:f.revalidation,error:f.error}}static getDerivedStateFromError(f){return{error:f}}static getDerivedStateFromProps(f,h){return h.location!==f.location||h.revalidation!=="idle"&&f.revalidation==="idle"?{error:f.error,location:f.location,revalidation:f.revalidation}:{error:f.error!==void 0?f.error:h.error,location:h.location,revalidation:f.revalidation||h.revalidation}}componentDidCatch(f,h){console.error("React Router caught the following error during render",f,h)}render(){return this.state.error!==void 0?N.createElement(Li.Provider,{value:this.props.routeContext},N.createElement(Jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gv(o){let{routeContext:f,match:h,children:c}=o,v=N.useContext(To);return v&&v.static&&v.staticContext&&(h.route.errorElement||h.route.ErrorBoundary)&&(v.staticContext._deepestRenderedBoundaryId=h.route.id),N.createElement(Li.Provider,{value:f},c)}function mv(o,f,h,c){var v;if(f===void 0&&(f=[]),h===void 0&&(h=null),c===void 0&&(c=null),o==null){var E;if(!h)return null;if(h.errors)o=h.matches;else if((E=c)!=null&&E.v7_partialHydration&&f.length===0&&!h.initialized&&h.matches.length>0)o=h.matches;else return null}let C=o,D=(v=h)==null?void 0:v.errors;if(D!=null){let U=C.findIndex(_=>_.route.id&&(D==null?void 0:D[_.route.id])!==void 0);U>=0||zl(!1),C=C.slice(0,Math.min(C.length,U+1))}let T=!1,p=-1;if(h&&c&&c.v7_partialHydration)for(let U=0;U<C.length;U++){let _=C[U];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=U),_.route.id){let{loaderData:L,errors:nl}=h,el=_.route.loader&&L[_.route.id]===void 0&&(!nl||nl[_.route.id]===void 0);if(_.route.lazy||el){T=!0,p>=0?C=C.slice(0,p+1):C=[C[0]];break}}}return C.reduceRight((U,_,L)=>{let nl,el=!1,il=null,X=null;h&&(nl=D&&_.route.id?D[_.route.id]:void 0,il=_.route.errorElement||fv,T&&(p<0&&L===0?(Ev("route-fallback"),el=!0,X=null):p===L&&(el=!0,X=_.route.hydrateFallbackElement||null)));let W=f.concat(C.slice(0,L+1)),dl=()=>{let tl;return nl?tl=il:el?tl=X:_.route.Component?tl=N.createElement(_.route.Component,null):_.route.element?tl=_.route.element:tl=U,N.createElement(gv,{match:_,routeContext:{outlet:U,matches:W,isDataRoute:h!=null},children:tl})};return h&&(_.route.ErrorBoundary||_.route.errorElement||L===0)?N.createElement(hv,{location:h.location,revalidation:h.revalidation,component:il,error:nl,children:dl(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):dl()},null)}var Wf=function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o}(Wf||{}),If=function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o}(If||{});function vv(o){let f=N.useContext(To);return f||zl(!1),f}function yv(o){let f=N.useContext(uv);return f||zl(!1),f}function pv(o){let f=N.useContext(Li);return f||zl(!1),f}function $f(o){let f=pv(),h=f.matches[f.matches.length-1];return h.route.id||zl(!1),h.route.id}function Sv(){var o;let f=N.useContext(Jf),h=yv(),c=$f();return f!==void 0?f:(o=h.errors)==null?void 0:o[c]}function bv(){let{router:o}=vv(Wf.UseNavigateStable),f=$f(If.UseNavigateStable),h=N.useRef(!1);return Ff(()=>{h.current=!0}),N.useCallback(function(v,E){E===void 0&&(E={}),h.current&&(typeof v=="number"?o.navigate(v):o.navigate(v,Dn({fromRouteId:f},E)))},[o,f])}const Uf={};function Ev(o,f,h){Uf[o]||(Uf[o]=!0)}function Av(o,f){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function Ve(o){zl(!1)}function xv(o){let{basename:f="/",children:h=null,location:c,navigationType:v=vi.Pop,navigator:E,static:C=!1,future:D}=o;On()&&zl(!1);let T=f.replace(/^\/*/,"/"),p=N.useMemo(()=>({basename:T,navigator:E,static:C,future:Dn({v7_relativeSplatPath:!1},D)}),[T,D,E,C]);typeof c=="string"&&(c=wi(c));let{pathname:U="/",search:_="",hash:L="",state:nl=null,key:el="default"}=c,il=N.useMemo(()=>{let X=xo(U,T);return X==null?null:{location:{pathname:X,search:_,hash:L,state:nl,key:el},navigationType:v}},[T,U,_,L,nl,el,v]);return il==null?null:N.createElement(qi.Provider,{value:p},N.createElement(Ja.Provider,{children:h,value:il}))}function Tv(o){let{children:f,location:h}=o;return cv(So(f),h)}new Promise(()=>{});function So(o,f){f===void 0&&(f=[]);let h=[];return N.Children.forEach(o,(c,v)=>{if(!N.isValidElement(c))return;let E=[...f,v];if(c.type===N.Fragment){h.push.apply(h,So(c.props.children,E));return}c.type!==Ve&&zl(!1),!c.props.index||!c.props.children||zl(!1);let C={id:c.props.id||E.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(C.children=So(c.props.children,E)),h.push(C)}),h}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(o){for(var f=1;f<arguments.length;f++){var h=arguments[f];for(var c in h)Object.prototype.hasOwnProperty.call(h,c)&&(o[c]=h[c])}return o},bo.apply(this,arguments)}function Cv(o,f){if(o==null)return{};var h={},c=Object.keys(o),v,E;for(E=0;E<c.length;E++)v=c[E],!(f.indexOf(v)>=0)&&(h[v]=o[v]);return h}function Mv(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Rv(o,f){return o.button===0&&(!f||f==="_self")&&!Mv(o)}const zv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dv="6";try{window.__reactRouterVersion=Dv}catch{}const Ov="startTransition",_f=Mm[Ov];function jv(o){let{basename:f,children:h,future:c,window:v}=o,E=N.useRef();E.current==null&&(E.current=Nm({window:v,v5Compat:!0}));let C=E.current,[D,T]=N.useState({action:C.action,location:C.location}),{v7_startTransition:p}=c||{},U=N.useCallback(_=>{p&&_f?_f(()=>T(_)):T(_)},[T,p]);return N.useLayoutEffect(()=>C.listen(U),[C,U]),N.useEffect(()=>Av(c),[c]),N.createElement(xv,{basename:f,children:h,location:D.location,navigationType:D.action,navigator:C,future:c})}const Uv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=N.forwardRef(function(f,h){let{onClick:c,relative:v,reloadDocument:E,replace:C,state:D,target:T,to:p,preventScrollReset:U,viewTransition:_}=f,L=Cv(f,zv),{basename:nl}=N.useContext(qi),el,il=!1;if(typeof p=="string"&&_v.test(p)&&(el=p,Uv))try{let tl=new URL(window.location.href),xl=p.startsWith("//")?new URL(tl.protocol+p):new URL(p),F=xo(xl.pathname,nl);xl.origin===tl.origin&&F!=null?p=F+xl.search+xl.hash:il=!0}catch{}let X=sv(p,{relative:v}),W=Nv(p,{replace:C,state:D,target:T,preventScrollReset:U,relative:v,viewTransition:_});function dl(tl){c&&c(tl),tl.defaultPrevented||W(tl)}return N.createElement("a",bo({},L,{href:el||X,onClick:il||E?c:dl,ref:h,target:T}))});var Nf;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(Nf||(Nf={}));var Hf;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Hf||(Hf={}));function Nv(o,f){let{target:h,replace:c,state:v,preventScrollReset:E,relative:C,viewTransition:D}=f===void 0?{}:f,T=jn(),p=Rt(),U=Pf(o,{relative:C});return N.useCallback(_=>{if(Rv(_,h)){_.preventDefault();let L=c!==void 0?c:ka(p)===ka(U);T(o,{replace:L,state:v,preventScrollReset:E,relative:C,viewTransition:D})}},[p,T,U,c,v,h,o,E,C,D])}const Hv=()=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:r.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065s.919-2.064 2.063-2.064 2.064.925 2.064 2.064-.92 2.065-2.064 2.065zm1.776 13.019H3.561V9h3.552v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"})}),Bv=()=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:r.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Gv=()=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:r.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),wv=()=>r.jsxs("nav",{style:{backgroundColor:"var(--clr-accent)",padding:"1rem 2rem",boxShadow:"var(--shadow-sm)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",gap:"2rem",alignItems:"center"},children:[r.jsx("li",{children:r.jsx(Re,{to:"/",className:"animated-underline",style:{color:"var(--clr-text-on-dark)",textDecoration:"none",fontSize:"1.1rem",fontWeight:"bold"},children:"Home"})}),r.jsx("li",{children:r.jsx(Re,{to:"/syllabus",className:"animated-underline",style:{color:"var(--clr-text-on-dark)",textDecoration:"none",fontSize:"1.1rem",fontWeight:"bold"},children:"Syllabus"})})]}),r.jsxs("div",{className:"social-links",style:{display:"flex",gap:"1rem"},children:[r.jsx("a",{href:"https://www.linkedin.com/in/mohamad-aoude-4aba1270/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:r.jsx(Hv,{})}),r.jsx("a",{href:"https://www.youtube.com/@mohamadaoude8620",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:r.jsx(Bv,{})}),r.jsx("a",{href:"https://github.com/maoude/",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:r.jsx(Gv,{})})]})]}),qv=()=>r.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem",textAlign:"center"},children:[r.jsxs("header",{style:{marginBottom:"40px",maxWidth:"750px",margin:"0 auto 40px auto"},children:[r.jsxs("h1",{children:[" ","Higher Ed Management Course"]}),r.jsx("p",{style:{fontSize:"clamp(1.1em, 3vw, 1.4em)",maxWidth:"700px",margin:"0 auto"},children:"Navigating the Future of Education Leadership & Innovation"})]}),r.jsxs("main",{children:[r.jsxs("div",{className:"card animate-on-scroll",children:[r.jsxs("h2",{children:[" ","Welcome Aboard!"]}),r.jsx("p",{style:{textAlign:"left"},children:"This site is undergoing a fresh rebuild to provide an enriched and streamlined learning experience. Explore the course content and resources."}),r.jsx("p",{style:{textAlign:"left"},children:"Please check back soon for exciting developments, course modules, and resources!"})]}),r.jsxs("section",{className:"instructor-section card animate-on-scroll",style:{textAlign:"left",marginTop:"3rem"},children:[r.jsx("h2",{children:"Meet Your Instructor"}),r.jsx("h3",{children:"Dr. Mohamad Aoude"}),r.jsx("p",{children:"Welcome! I'm Dr. Mohamad Aoude, Associate Professor and strategic advisor with over two decades of experience in higher education leadership, academic quality assurance, and technology integration. I hold a Ph.D. in Telecommunications from Telecom ParisTech, and a Master’s in International Relations from RUDN University. My career spans roles as department chair, accreditation consultant, curriculum developer, and university professor across Lebanon, France, and the Middle East."}),r.jsx("p",{children:"I’ve led multiple institutional accreditation efforts (CTI, ABET, EVALAG), managed academic departments, and trained hundreds of professionals in leadership, innovation, and strategic planning. My passion lies in helping institutions and individuals navigate the evolving landscape of higher education with agility, foresight, and innovation."}),r.jsxs("p",{children:["I’m excited to guide you through this journey in ",r.jsx("strong",{children:"Higher Ed Management: Navigating the Future of Education Leadership & Innovation"})," — and to help you develop the skills to lead, adapt, and thrive in today’s dynamic academic world."]}),r.jsx("p",{children:"Let’s get started!"})]})]})]}),Lv=()=>r.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[r.jsx("header",{className:"page-header",children:r.jsx("h1",{children:"Syllabus: Managing Institutional Higher Education"})}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsx("h3",{children:"Course Overview"}),r.jsxs("p",{children:[r.jsx("strong",{children:"Course Title:"})," Managing Institutional Higher Education"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Course Description:"}),r.jsx("br",{}),"This undergraduate course provides a comprehensive introduction to the multifaceted world of managing institutional higher education. It is designed to equip aspiring and current academic leaders, administrators, and policy makers with a foundational understanding of the complex structures, processes, and challenges inherent in contemporary colleges and universities. The curriculum delves into four critical pillars of higher education management: governance, finance, student affairs, and strategic planning. Students will explore the historical context, theoretical underpinnings, and practical applications associated with each of these areas. Emphasis will be placed on how these domains interrelate and influence institutional effectiveness, sustainability, and the overall student experience. Through a series of in-depth modules, readings, discussions, and applied case studies, participants will develop the analytical skills and strategic perspectives necessary to navigate the dynamic landscape of higher education and contribute meaningfully to institutional success. The course will examine the U.S. higher education system primarily, drawing upon established scholarship and best practices to foster a critical understanding of how institutions operate, adapt to change, and strive to fulfill their educational missions in an increasingly complex socio-economic and political environment."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Target Audience:"}),r.jsx("br",{}),"This course is tailored for undergraduate students aspiring to careers in university administration, current department heads seeking to broaden their understanding of institutional management, and individuals interested in higher education policy. It is also suitable for professionals in related fields who wish to gain a deeper insight into the operational dynamics of colleges and universities."]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Course Level:"})," Undergraduate"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Course Format:"})," This is a 10-module online course. Each module will consist of readings, lecture materials (structured around 2 sessions per week), interactive discussions, and a case study assignment designed to apply learned concepts to real-world or simulated higher education scenarios."]})]}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsx("h3",{children:"Course Learning Objectives"}),r.jsx("p",{children:"Upon successful completion of this course, students will be able to:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Describe the diverse landscape of higher education institutions, including their various missions, structures, and governance models."}),r.jsx("li",{children:"Analyze the key principles and practices of strategic planning in higher education, including environmental scanning, goal setting, and implementation strategies."}),r.jsx("li",{children:"Understand the fundamentals of financial management in higher education, including revenue sources, budgeting processes, resource allocation models, and financial sustainability challenges."}),r.jsx("li",{children:"Examine the core functions and philosophies of student affairs, including student development theories, the delivery of student support services, and the management of contemporary student issues."}),r.jsx("li",{children:"Evaluate the roles and responsibilities of various stakeholders in higher education governance, including governing boards, administrators, faculty, students, and external bodies."}),r.jsx("li",{children:"Identify and analyze key legal, ethical, and policy issues confronting higher education institutions and their impact on administrative decision-making."}),r.jsx("li",{children:"Apply theoretical concepts of leadership, organizational behavior, and change management to practical challenges in higher education settings."}),r.jsx("li",{children:"Utilize data and assessment strategies to inform decision-making and promote continuous improvement within higher education institutions."}),r.jsx("li",{children:"Develop and articulate solutions to complex problems in higher education management through the analysis of case studies and real-world scenarios."}),r.jsx("li",{children:"Critically assess emerging trends and future challenges in higher education and their implications for institutional management and leadership."})]})]}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsx("h3",{children:"Course Modules Overview"}),r.jsx("p",{children:"This course is structured into 10 modules. Each module page will provide a detailed plan including topics for two sessions per week, learning activities, and a case study."}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsxs("a",{href:"#/module/1",className:"animated-underline",children:[r.jsx("strong",{children:"Module 1:"})," Foundations of Institutional Higher Education Management",r.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:"→"})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#/module/2",className:"animated-underline",children:[r.jsx("strong",{children:"Module 2:"})," Governance Structures and Stakeholders in Higher Education",r.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:"→"})]})}),r.jsxs("li",{children:[r.jsx("strong",{children:"Module 3:"})," Strategic Planning in the Institutional Context"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Module 4:"})," Higher Education Finance and Budgeting"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Module 5:"})," Resource Allocation and Financial Decision-Making"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Module 6:"})," Understanding Student Affairs and Student Development"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Module 7:"})," Legal and Ethical Issues in Higher Education Management"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Module 8:"})," Leadership, Change Management, and Institutional Culture"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Module 9:"})," Assessment, Accreditation, and Continuous Improvement"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Module 10:"})," The Future of Higher Education Management: Trends, Challenges, and Opportunities"]})]})]})]}),Yv=()=>r.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[r.jsx("header",{className:"page-header",children:r.jsx("h1",{children:"Module 1: Foundations of Institutional Higher Education Management"})}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Duration:"})," 1 Week (2 Sessions)"]}),r.jsx("h3",{children:"Overall Module Learning Outcomes"}),r.jsx("p",{children:"Upon completing this module, students will be able to:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Trace the historical development of higher education institutions in the U.S. and globally."}),r.jsx("li",{children:"Differentiate between various types of higher education institutions (e.g., public, private, research, liberal arts, community colleges) and their distinct missions."}),r.jsx("li",{children:"Identify the core functions and societal responsibilities of contemporary colleges and universities."}),r.jsx("li",{children:"Explain fundamental organizational theories and how they apply to the unique context of higher education institutions."}),r.jsx("li",{children:"Recognize the key internal and external environmental factors influencing higher education management."})]})]}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsx("h3",{children:"Session 1: The Landscape and Legacy of Higher Education"}),r.jsx("p",{children:r.jsx("strong",{children:"Topics Covered:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Historical Perspectives on Higher Education (Global and U.S. focus)."}),r.jsx("li",{children:"The Evolving Role of Higher Education in Society (Economic, Social, Cultural contributions and expectations)."}),r.jsx("li",{children:"The American Higher Education System: An Overview of its structure, scale, and diversity."}),r.jsx("li",{children:"Types of Institutions and Their Missions (e.g., Public Research Universities, Private Liberal Arts Colleges, Community Colleges, For-Profit Institutions, Minority-Serving Institutions)."})]}),r.jsx("p",{style:{marginTop:"1rem"},children:r.jsxs(Re,{to:"/module/1/session/1/slides",className:"font-semibold animated-underline",children:["View Session 1 Lecture Slides",r.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📰"})]})}),r.jsx("p",{children:r.jsx("strong",{children:"Learning Activities & Exercises (to be completed between Session 1 and Session 2):"})}),r.jsxs("ol",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Reading Assignment:"})," Access and read provided articles/book excerpts detailing the history of higher education, its evolving societal functions, and the diverse landscape of U.S. institutions. (Specific readings to be listed in the Learning Management System - LMS)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Interactive Timeline & Profile Exploration:"})," Engage with a curated interactive online timeline highlighting key milestones in higher education history. Additionally, review detailed web-based profiles or short video spotlights of 2-3 distinct types of higher education institutions, noting their mission statements and primary characteristics."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Discussion Forum 1 - Initial Post:"}),' "Based on the Session 1 topics and your exploration, select one historical development OR one specific type of higher education institution. Discuss its significance and lasting impact on the contemporary higher education landscape. For institutional types, compare and contrast its mission with another type (approx. 300-350 words)." (Post due before Session 2).']})]})]}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsx("h3",{children:"Session 2: Organizing for Success - Theories, Players, and Challenges"}),r.jsx("p",{children:r.jsx("strong",{children:"Topics Covered:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Introduction to Organizational Theory and its application to Higher Education Institutions (e.g., Bureaucracy, Collegium, Political Systems, Organized Anarchy, Institutional Theory)."}),r.jsx("li",{children:"The Academic Profession: Roles, responsibilities, and evolving nature of faculty."}),r.jsx("li",{children:"Key Internal and External Stakeholders and Environmental Factors influencing higher education management."}),r.jsx("li",{children:'Introduction to Case Study 1: "Understanding Institutional Identity and Mission."'})]}),r.jsx("p",{style:{marginTop:"1rem"},children:r.jsxs(Re,{to:"/module/1/session/2/slides",className:"font-semibold animated-underline",children:["View Session 2 Lecture Slides",r.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📰"})]})}),r.jsx("p",{children:r.jsx("strong",{children:"Learning Activities & Exercises (to be completed after Session 2):"})}),r.jsxs("ol",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Reading Assignment:"})," Review materials on fundamental organizational theories as applied to university settings, and the roles of various stakeholders. (Specific readings in LMS)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Mini-Lecture Video (Asynchronous):"})," Watch a recorded lecture (15-20 minutes) by the instructor explaining how different organizational theories provide lenses for understanding university structures and decision-making processes."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Activity - Theory/Stakeholder Application:"}),' "Select one organizational theory discussed. Think of a higher education institution you are familiar with. In a short written reflection (approx. 200-250 words), describe specific examples of how elements of this chosen theory are visible OR identify two key stakeholders for that institution and describe their primary interests and potential influence." (Submit via LMS assignment tool).']}),r.jsxs("li",{children:[r.jsx("strong",{children:"Discussion Forum 1 - Peer Responses:"})," Respond to at least two classmates’ initial posts in Discussion Forum 1, offering further insights or respectfully challenging their perspectives."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Case Study 1 - Initial Analysis:"}),' Access and carefully read the full Case Study 1 document ("Understanding Institutional Identity and Mission"), which will present a scenario of a specific higher education institution, its history, mission, characteristics, and a current challenge related to its identity. Review the guiding questions and rubric. Begin your individual analysis.']})]})]}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsx("h3",{children:"Case Study 1: Understanding Institutional Identity and Mission"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Structure & Content (as previously detailed, adapted for weekly submission):"}),r.jsxs("ul",{children:[r.jsx("li",{children:'The case study will be a 2-4 page narrative describing a fictional higher education institution (e.g., "Midvale State University").'}),r.jsxs("li",{children:[r.jsx("strong",{children:"Content will include:"})," Founding History & Original Mission, Current Institutional Type & Profile, Stated Mission & Values, Organizational Characteristics, The Challenge/Dilemma."]})]})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Administration & Guiding Questions for Analysis (as previously detailed):"}),r.jsx("ul",{children:r.jsx("li",{children:"Guiding Questions will prompt students to analyze the institution's mission, characteristics, conduct a SWOT, articulate the dilemma, and propose strategic considerations."})})]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Submission:"})," A written analysis (target length: 1000-1500 words) to be submitted electronically via the LMS by the end of the week (e.g., Sunday evening, before the next module begins)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Grading:"})," A detailed rubric will assess the application of Module 1 concepts, analytical D:\\dev\\higher_edv2\\src\\index.cssdepth, clarity, and professionalism."]})]})]})]}),Bf=[{id:"slide1",title:"The Landscape and Legacy of Higher Education",subtitle:"Module 1, Session 1",content:"<h3>Managing Institutional Higher Education</h3>"},{id:"slide2",title:"Session Overview",content:`
      <h3>Session Overview</h3>
      <ul>
        <li>Historical Perspectives on Higher Education</li>
        <li>The Evolving Role of Higher Education in Society</li>
        <li>The American Higher Education System: Structure, Scale, and Diversity</li>
        <li>Types of Institutions and Their Missions</li>
      </ul>
    `},{id:"slide3",title:"Global Origins of Higher Education",content:`
      <h3>Global Origins of Higher Education</h3>
      <ul>
        <li><strong>Ancient Centers of Learning</strong>
          <ul>
            <li>Plato's Academy (387 BCE) - Greece</li>
            <li>Nalanda University (5th century CE) - India</li>
            <li>Al-Qarawiyyin University (859 CE) - Morocco</li>
            <li>Imperial Academy (124 BCE) - China</li>
          </ul>
        </li>
        <li><strong>Medieval European Universities</strong>
          <ul>
            <li>University of Bologna (1088)</li>
            <li>University of Paris (c. 1150)</li>
            <li>University of Oxford (c. 1096)</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide4",title:"Early University Characteristics",content:`
      <h3>Early University Characteristics</h3>
      <ul>
        <li>Faculty governance structures</li>
        <li>Degree-granting authority</li>
        <li>Limited academic freedom</li>
        <li>Latin as common language</li>
        <li>Focus on clergy, medicine, law</li>
        <li>Guild-like structure</li>
        <li>Limited access (elite males)</li>
      </ul>
    `},{id:"slide5",title:"American Higher Education: Colonial Period (1636-1776)",content:`
      <h3>American Higher Education: Colonial Period (1636-1776)</h3>
      <ul>
        <li><strong>Harvard College (1636)</strong> - First American college</li>
        <li>Eight other colonial colleges established
          <ul>
            <li>William & Mary (1693)</li>
            <li>Yale (1701)</li>
            <li>Princeton (1746)</li>
          </ul>
        </li>
        <li><strong>Characteristics</strong>:
          <ul>
            <li>Small, religiously affiliated</li>
            <li>Classical education</li>
            <li>Elite student population</li>
            <li>European model adaptation</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide6",title:"19th Century Expansion",content:`
      <h3>19th Century Expansion</h3>
      <ul>
        <li><strong>Morrill Land-Grant Acts (1862, 1890)</strong>
          <ul>
            <li>Federal land to establish public universities</li>
            <li>Practical education focus</li>
            <li>Democratized access</li>
          </ul>
        </li>
        <li><strong>Women's Colleges</strong>
          <ul>
            <li>Oberlin College (1833) - First coeducational</li>
            <li>Mount Holyoke (1837), Vassar (1861)</li>
          </ul>
        </li>
        <li><strong>Historically Black Colleges and Universities</strong>
          <ul>
            <li>Cheyney University (1837)</li>
            <li>Wilberforce University (1856)</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide7",title:"20th Century Transformation",content:`
      <h3>20th Century Transformation</h3>
      <ul>
        <li><strong>GI Bill (1944)</strong>
          <ul>
            <li>Expanded access for veterans</li>
            <li>Middle-class expectation</li>
          </ul>
        </li>
        <li><strong>Community College Growth</strong>
          <ul>
            <li>1947 Truman Commission Report</li>
            <li>Two-year college network</li>
          </ul>
        </li>
        <li><strong>Civil Rights & Higher Education Act (1965)</strong>
          <ul>
            <li>Federal financial aid</li>
            <li>Anti-discrimination provisions</li>
          </ul>
        </li>
        <li><strong>Title IX (1972)</strong>
          <ul>
            <li>Prohibited sex-based discrimination</li>
            <li>Expanded women's participation</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide8",title:"21st Century Challenges",content:`
      <h3>21st Century Challenges</h3>
      <ul>
        <li>Globalization and technological change</li>
        <li>Rising costs and questions about value</li>
        <li>Demographic shifts and changing student populations</li>
        <li>Increasing competition and market pressures</li>
        <li>Debates about purpose and accountability</li>
      </ul>
    `},{id:"slide9",title:"Economic Contributions",content:`
      <h3>Economic Contributions</h3>
      <ul>
        <li><strong>Human Capital Development</strong>
          <ul>
            <li>Skilled workforce preparation</li>
            <li>"College wage premium"</li>
            <li>Reduced unemployment</li>
          </ul>
        </li>
        <li><strong>Research and Innovation</strong>
          <ul>
            <li>New knowledge and technologies</li>
            <li>Patents and startups</li>
            <li>Industry partnerships</li>
          </ul>
        </li>
        <li><strong>Economic Mobility</strong>
          <ul>
            <li>Pathways to middle/upper class</li>
            <li>First-generation opportunities</li>
            <li>Addressing economic inequality</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide10",title:"Social and Cultural Contributions",content:`
      <h3>Social and Cultural Contributions</h3>
      <ul>
        <li><strong>Citizenship and Civic Engagement</strong>
          <ul>
            <li>Developing informed citizens</li>
            <li>Democratic values</li>
            <li>Civil discourse forums</li>
          </ul>
        </li>
        <li><strong>Cultural Preservation and Advancement</strong>
          <ul>
            <li>Cultural heritage preservation</li>
            <li>Arts and humanities advancement</li>
            <li>Intercultural understanding</li>
          </ul>
        </li>
        <li><strong>Social Justice and Equity</strong>
          <ul>
            <li>Expanding opportunity</li>
            <li>Addressing historical inequities</li>
            <li>Promoting diversity and inclusion</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide11",title:"Evolving Societal Expectations",content:`
      <h3>Evolving Societal Expectations</h3>
      <ul>
        <li><strong>Traditional Expectations</strong>
          <ul>
            <li>Intellectual development</li>
            <li>Cultural knowledge transmission</li>
            <li>Professional preparation</li>
            <li>Knowledge advancement</li>
          </ul>
        </li>
        <li><strong>Emerging Expectations</strong>
          <ul>
            <li>Career readiness and employability</li>
            <li>Measurable ROI</li>
            <li>Social problem solutions</li>
            <li>Technological adaptation</li>
            <li>Efficiency and accountability</li>
            <li>Economic development</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide12",title:"Scale and Scope",content:`
      <h3>Scale and Scope</h3>
      <ul>
        <li><strong>By the Numbers</strong>
          <ul>
            <li>~4,000 degree-granting institutions</li>
            <li>19+ million students</li>
            <li>$650+ billion annual expenditures</li>
            <li>4+ million employees (1.5M faculty)</li>
          </ul>
        </li>
        <li><strong>Global Context</strong>
          <ul>
            <li>Largest, most diverse system globally</li>
            <li>Historically dominant in research</li>
            <li>Facing increasing global competition</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide13",title:"Structural Characteristics",content:`
      <h3>Structural Characteristics</h3>
      <ul>
        <li><strong>Decentralized Governance</strong>
          <ul>
            <li>No federal ministry with direct control</li>
            <li>State-level coordination for public institutions</li>
            <li>Institutional autonomy with shared governance</li>
            <li>Accreditation as quality assurance</li>
          </ul>
        </li>
        <li><strong>Mixed Funding Model</strong>
          <ul>
            <li>Public: state funds, tuition, grants</li>
            <li>Private: tuition, endowments, gifts</li>
            <li>Federal role: research funding, student aid</li>
          </ul>
        </li>
        <li><strong>Hierarchical Prestige System</strong>
          <ul>
            <li>Stratification by selectivity and resources</li>
            <li>Competition for students, faculty, resources</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide14",title:"Public Research Universities",content:`
      <h3>Public Research Universities</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>State-supported</li>
            <li>Comprehensive academic offerings</li>
            <li>Significant research enterprise</li>
            <li>Multiple schools and colleges</li>
            <li>Large enrollments</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Teaching across levels</li>
            <li>Research and knowledge creation</li>
            <li>Public service and outreach</li>
            <li>Economic development</li>
            <li>Access for state residents</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: University of Michigan, UC Berkeley, UT Austin</li>
      </ul>
    `},{id:"slide15",title:"Private Research Universities",content:`
      <h3>Private Research Universities</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>Independent, non-profit governance</li>
            <li>Substantial endowments</li>
            <li>Highly selective admissions</li>
            <li>Strong research emphasis</li>
            <li>Higher tuition, more financial aid</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Advanced research and scholarship</li>
            <li>Graduate/professional education</li>
            <li>Undergraduate liberal education</li>
            <li>Knowledge creation</li>
            <li>Leadership development</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: Harvard, Stanford, MIT, Duke</li>
      </ul>
    `},{id:"slide16",title:"Liberal Arts Colleges",content:`
      <h3>Liberal Arts Colleges</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>Small, undergraduate focus</li>
            <li>Arts and sciences emphasis</li>
            <li>Low student-faculty ratios</li>
            <li>Residential experience</li>
            <li>Primarily private</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Broad, interdisciplinary education</li>
            <li>Critical thinking development</li>
            <li>Close faculty-student interaction</li>
            <li>Graduate study preparation</li>
            <li>Whole-person development</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: Williams, Amherst, Swarthmore, Pomona</li>
      </ul>
    `},{id:"slide17",title:"Community Colleges",content:`
      <h3>Community Colleges</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>Open access admissions</li>
            <li>Lower tuition costs</li>
            <li>Local/regional focus</li>
            <li>Two-year degrees and certificates</li>
            <li>Diverse student populations</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Affordable access</li>
            <li>Transfer preparation</li>
            <li>Career/technical education</li>
            <li>Workforce development</li>
            <li>Community service</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: Miami Dade College, Northern Virginia CC</li>
      </ul>
    `},{id:"slide18",title:"For-Profit Institutions",content:`
      <h3>For-Profit Institutions</h3>
      <ul>
        <li><strong>Characteristics</strong>
          <ul>
            <li>Investor-owned or publicly traded</li>
            <li>Market-driven programs</li>
            <li>Adult/non-traditional focus</li>
            <li>Online/flexible delivery</li>
            <li>Career-oriented curricula</li>
          </ul>
        </li>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Accessible, flexible education</li>
            <li>Career preparation</li>
            <li>Serving non-traditional students</li>
            <li>Market responsiveness</li>
            <li>Investor returns</li>
          </ul>
        </li>
        <li><strong>Examples</strong>: University of Phoenix, Strayer, DeVry</li>
      </ul>
    `},{id:"slide19",title:"Minority-Serving Institutions",content:`
      <h3>Minority-Serving Institutions</h3>
      <ul>
        <li><strong>Historically Black Colleges and Universities (HBCUs)</strong>
          <ul>
            <li>Founded pre-1964 during segregation</li>
            <li>Examples: Howard, Spelman, Morehouse</li>
          </ul>
        </li>
        <li><strong>Hispanic-Serving Institutions (HSIs)</strong>
          <ul>
            <li>25%+ Hispanic/Latino enrollment</li>
            <li>Examples: UT El Paso, FIU</li>
          </ul>
        </li>
        <li><strong>Tribal Colleges and Universities (TCUs)</strong>
          <ul>
            <li>Tribal government chartered</li>
            <li>Examples: Diné College, Salish Kootenai</li>
          </ul>
        </li>
        <li><strong>Asian American and Native American Pacific Islander-Serving Institutions (AANAPISIs)</strong>
          <ul>
            <li>Examples: University of Hawaii, CCSF</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide20",title:"MSI Missions and Challenges",content:`
      <h3>MSI Missions and Challenges</h3>
      <ul>
        <li><strong>Mission Elements</strong>
          <ul>
            <li>Culturally responsive education</li>
            <li>Serving underrepresented students</li>
            <li>Promoting diversity in professions</li>
            <li>Preserving cultural heritage</li>
            <li>Addressing unique population needs</li>
          </ul>
        </li>
        <li><strong>Management Challenges</strong>
          <ul>
            <li>Securing adequate funding</li>
            <li>Addressing historical inequities</li>
            <li>Balancing cultural and educational missions</li>
            <li>Navigating changing demographics</li>
            <li>Demonstrating distinctive value</li>
          </ul>
        </li>
      </ul>
    `},{id:"slide21",title:"Implications for Management",content:`
      <h3>Implications for Management</h3>
      <ol>
        <li><strong>Historical Awareness</strong>: Tradition vs. adaptation</li>
        <li><strong>Mission Clarity</strong>: Alignment with institutional type</li>
        <li><strong>Multiple Stakeholders</strong>: Balancing competing demands</li>
        <li><strong>Changing Context</strong>: Evolving while preserving core values</li>
        <li><strong>Systemic Perspective</strong>: Understanding position in larger ecosystem</li>
      </ol>
    `},{id:"slide22",title:"Discussion Questions",content:`
      <h3>Discussion Questions</h3>
      <ol>
        <li>How have historical developments shaped current structures? What traditions deserve preservation or reconsideration?</li>
        <li>How do higher education's multiple roles create tensions? How should leaders prioritize?</li>
        <li>What management approaches might be effective for specific institutional types?</li>
        <li>How is higher education's role changing in the 21st century? What are the management implications?</li>
        <li>How did your institution's type, history, and mission shape your experience?</li>
      </ol>
    `},{id:"slide23",title:"Key Terms and Concepts",content:`
      <h3>Key Terms and Concepts</h3>
      <ul>
        <li>Land-grant institutions</li>
        <li>Liberal arts education</li>
        <li>Open access</li>
        <li>Shared governance</li>
        <li>Academic freedom</li>
        <li>Institutional mission</li>
        <li>Carnegie Classification</li>
        <li>Minority-Serving Institutions</li>
        <li>GI Bill</li>
        <li>Morrill Acts</li>
        <li>Higher Education Act</li>
        <li>Title IX</li>
        <li>Institutional autonomy</li>
        <li>Accreditation</li>
        <li>Public good vs. private benefit</li>
      </ul>
    `},{id:"slide24",title:"References",content:`
      <h3>References and Further Reading</h3>
      <ul>
        <li>Altbach, P. G., Gumport, P. J., & Berdahl, R. O. (Eds.). (2011). <em>American higher education in the twenty-first century</em>.</li>
        <li>Cohen, A. M., & Kisker, C. B. (2010). <em>The shaping of American higher education</em>.</li>
        <li>Delbanco, A. (2012). <em>College: What it was, is, and should be</em>.</li>
        <li>Kerr, C. (2001). <em>The uses of the university</em>.</li>
        <li>Thelin, J. R. (2011). <em>A history of American higher education</em>.</li>
        <li>Trow, M. (2007). <em>Reflections on the transition from elite to mass to universal access</em>.</li>
      </ul>
    `},{id:"slide25",title:"Next Session Preview",content:`
      <h3>Next Session</h3>
      <h2>Governance Structures and Decision-Making in Higher Education</h2>
      <ul>
        <li>Models of governance</li>
        <li>Roles and responsibilities</li>
        <li>Shared governance in practice</li>
        <li>External governance influences</li>
        <li>Current governance challenges</li>
      </ul>
    `}],Qv=()=>{const[o,f]=N.useState(0),h=jn(),c=Bf.length,v=Bf[o],E=N.useCallback(()=>{f(D=>Math.min(D+1,c-1))},[c]),C=N.useCallback(()=>{f(D=>Math.max(D-1,0))},[]);return N.useEffect(()=>{const D=T=>{T.key==="ArrowRight"?E():T.key==="ArrowLeft"?C():T.key==="Escape"&&h("/module/1")};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[E,C,h]),v?r.jsxs("div",{className:"slideshow-container",children:[r.jsxs("div",{className:"slide-content-wrapper",children:[r.jsxs("header",{className:"slide-header",children:[r.jsx("h1",{className:"slide-title",children:v.title}),v.subtitle&&r.jsx("h2",{className:"slide-subtitle",children:v.subtitle})]}),r.jsx("div",{className:"slide-actual-content",dangerouslySetInnerHTML:{__html:v.content}})]}),r.jsxs("div",{className:"slideshow-controls",children:[r.jsx("button",{onClick:C,disabled:o===0,children:"← Previous"}),r.jsxs("span",{className:"slide-indicator",children:["Slide ",o+1," of ",c]}),r.jsx("button",{onClick:E,disabled:o===c-1,children:"Next →"})]}),r.jsx("div",{style:{textAlign:"center",padding:"10px",background:"#e9ecef"},children:r.jsx(Re,{to:"/module/1",style:{fontSize:"0.9rem"},children:"Back to Module 1 Overview"})})]}):r.jsx("div",{className:"container",children:"Slide data not found."})},Gf=[{id:"s2-slide1",title:"Organizing for Success: Theories, Players, and Challenges",subtitle:"Module 1, Session 2",content:"<h3>Managing Institutional Higher Education</h3>"},{id:"s2-slide2",title:"Session Overview",content:`
      <h3>Session Overview</h3>
      <ul>
        <li>Introduction to Organizational Theory in Higher Education</li>
        <li>The Academic Profession: Roles, Responsibilities, and Evolution</li>
        <li>Key Internal and External Stakeholders</li>
        <li>Environmental Factors Influencing Higher Education Management</li>
        <li>Introduction to Case Study 1: "Understanding Institutional Identity and Mission"</li>
      </ul>
    `},{id:"s2-slide3",title:"Higher Education's Unique Organizational Context",content:`
      <h3>Higher Education's Unique Organizational Context</h3>
      <ul>
        <li><strong>Ambiguous and Contested Goals</strong>: Multiple, competing missions</li>
        <li><strong>Professional Autonomy</strong>: Faculty independence in core activities</li>
        <li><strong>Shared Governance</strong>: Distributed decision-making authority</li>
        <li><strong>Loose Coupling</strong>: Independent units with limited coordination</li>
        <li><strong>Institutional Status and Prestige</strong>: Competition based on reputation</li>
        <li><strong>External Constraints</strong>: Government, accreditors, public expectations</li>
      </ul>
    `},{id:"s2-slide4",title:"Bureaucratic Theory in Higher Education",content:`
      <h3>Bureaucratic Theory in Higher Education</h3>
      <ul>
        <li><strong>Key Elements</strong>:
          <ul>
            <li>Formal structures and hierarchies</li>
            <li>Written rules and procedures</li>
            <li>Specialization and division of labor</li>
            <li>Imersonality and standardization</li>
          </ul>
        </li>
        <li><strong>Application in Higher Education</strong>:
          <ul>
            <li>Administrative hierarchies and reporting</li>
            <li>Formal policies and procedures</li>
            <li>Standardized processes (admissions, registration)</li>
            <li>Position-based authority</li>
          </ul>
        </li>
        <li><strong>Limitations</strong>: Clashes with academic values and professional autonomy</li>
      </ul>
    `},{id:"s2-slide5",title:"Collegial Model",content:`
      <h3>Collegial Model</h3>
      <ul>
        <li><strong>Key Elements</strong>:
          <ul>
            <li>Community of scholars</li>
            <li>Consensus-based decision-making</li>
            <li>Shared academic values</li>
            <li>Peer review and collective responsibility</li>
            <li>Leadership as "first among equals"</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Aligns with academic freedom, faculty autonomy</li>
        <li><strong>Challenges</strong>:
          <ul>
            <li>Slow and inefficient response to external pressures</li>
            <li>May privilege faculty interests over others</li>
            <li>Assumes consensus is possible despite diversity</li>
            <li>Struggles with financial and market pressures</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide6",title:"Political Systems Model",content:`
      <h3>Political Systems Model</h3>
      <ul>
        <li><strong>Key Elements</strong>:
          <ul>
            <li>Conflict as normal state</li>
            <li>Coalitions and interest groups</li>
            <li>Power and influence as central</li>
            <li>Negotiation and bargaining</li>
            <li>Resource allocation as political</li>
          </ul>
        </li>
        <li><strong>Applications</strong>:
          <ul>
            <li>Budget allocation processes</li>
            <li>Conflicts between priorities</li>
            <li>Resistance to change initiatives</li>
            <li>Importance of constituency support</li>
            <li>Informal influence networks</li>
          </ul>
        </li>
        <li><strong>Caution</strong>: Can undermine trust and collaboration if overemphasized</li>
      </ul>
    `},{id:"s2-slide7",title:"Organized Anarchy and Garbage Can Model",content:`
      <h3>Organized Anarchy Model</h3>
      <ul>
        <li><strong>Key Elements</strong> (Cohen, March, & Olsen):
          <ul>
            <li>Problematic preferences (unclear goals)</li>
            <li>Unclear technology (uncertain means-ends)</li>
            <li>Fluid participation in decisions</li>
          </ul>
        </li>
        <li><strong>Garbage Can Model</strong>:
          <ul>
            <li>Random confluence of problems, solutions, participants</li>
            <li>Solutions may precede problem definition</li>
            <li>Timing and attention as crucial resources</li>
          </ul>
        </li>
        <li><strong>Implications</strong>:
          <ul>
            <li>Decision processes often chaotic</li>
            <li>Solutions adopted based on availability</li>
            <li>Problems may remain unresolved despite discussion</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide8",title:"Institutional Theory",content:`
      <h3>Institutional Theory</h3>
      <ul>
        <li><strong>Key Elements</strong>:
          <ul>
            <li>Isomorphism (organizations becoming similar)</li>
            <li>Ceremonial adoption of practices for legitimacy</li>
            <li>Influence of professional norms</li>
            <li>Decoupling of structures from practices</li>
            <li>Institutional myths and rituals</li>
          </ul>
        </li>
        <li><strong>Applications in Higher Education</strong>:
          <ul>
            <li>Imitation of prestigious institutions</li>
            <li>Similar strategic plans and mission statements</li>
            <li>Persistence of traditional structures</li>
            <li>Importance of accreditation and rankings</li>
            <li>Ceremonial aspects of governance</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide9",title:"Applying Multiple Theoretical Perspectives",content:`
      <h3>Applying Multiple Theoretical Perspectives</h3>
      <ul>
        <li><strong>Hybrid Approaches</strong>: Most institutions combine elements of multiple models</li>
        <li><strong>Contextual Factors</strong>:
          <ul>
            <li>Institutional type and mission</li>
            <li>Governance structure (public vs. private)</li>
            <li>Size and complexity</li>
            <li>History and traditions</li>
            <li>External environment</li>
          </ul>
        </li>
        <li><strong>Strategic Implications</strong>:
          <ul>
            <li>Change must address formal and informal elements</li>
            <li>Different strategies for different domains</li>
            <li>Legitimacy as important as rational planning</li>
            <li>Timing and opportunity windows crucial</li>
            <li>Multiple stakeholder perspectives needed</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide10",title:"The Academic Profession: Traditional Roles",content:`
      <h3>The Academic Profession: Traditional Roles</h3>
      <ul>
        <li><strong>Teaching</strong>:
          <ul>
            <li>Course design and delivery</li>
            <li>Student assessment</li>
            <li>Academic advising</li>
            <li>Curriculum development</li>
          </ul>
        </li>
        <li><strong>Research and Scholarship</strong>:
          <ul>
            <li>Basic and applied research</li>
            <li>Publication and dissemination</li>
            <li>Grant acquisition</li>
            <li>Creative activities</li>
          </ul>
        </li>
        <li><strong>Service</strong>:
          <ul>
            <li>Institutional governance</li>
            <li>Department administration</li>
            <li>Professional associations</li>
            <li>Community engagement</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide11",title:"Faculty Career Structure",content:`
      <h3>Faculty Career Structure</h3>
      <ul>
        <li><strong>Assistant Professor</strong>:
          <ul>
            <li>Entry-level tenure-track</li>
            <li>6-7 year probationary period</li>
            <li>Demonstration of excellence required</li>
          </ul>
        </li>
        <li><strong>Associate Professor</strong>:
          <ul>
            <li>Mid-career rank</li>
            <li>Usually accompanied by tenure</li>
            <li>Demonstrated achievement required</li>
          </ul>
        </li>
        <li><strong>Professor</strong>:
          <ul>
            <li>Senior rank</li>
            <li>National/international recognition</li>
            <li>Sustained excellence and impact</li>
          </ul>
        </li>
        <li><strong>Tenure</strong>:
          <ul>
            <li>Academic freedom protection</li>
            <li>Employment security</li>
            <li>Long-term institutional commitment</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide12",title:"The Changing Academic Workforce",content:`
      <h3>The Changing Academic Workforce</h3>
      <ul>
        <li><strong>Growth of Contingent Faculty</strong>:
          <ul>
            <li>Full-time term-limited positions</li>
            <li>Part-time adjunct faculty</li>
            <li>Graduate teaching assistants</li>
            <li>Two-tier system implications</li>
          </ul>
        </li>
        <li><strong>Specialization of Faculty Roles</strong>:
          <ul>
            <li>Teaching-intensive faculty</li>
            <li>Research faculty</li>
            <li>Clinical faculty</li>
            <li>Practice faculty</li>
            <li>Public engagement professors</li>
          </ul>
        </li>
        <li><strong>Professionalization of Administration</strong>:
          <ul>
            <li>Full-time department chairs and deans</li>
            <li>Professional program directors</li>
            <li>Specialized administrative roles</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide13",title:"Contemporary Faculty Challenges",content:`
      <h3>Contemporary Faculty Challenges</h3>
      <ul>
        <li><strong>Expanding Expectations</strong>:
          <ul>
            <li>New teaching technologies</li>
            <li>Student success focus</li>
            <li>Interdisciplinary collaboration</li>
            <li>Practical impact pressure</li>
            <li>Assessment requirements</li>
            <li>Revenue generation</li>
          </ul>
        </li>
        <li><strong>Work-Life Balance</strong>:
          <ul>
            <li>Changing generational expectations</li>
            <li>Dual-career couples</li>
            <li>Mental health concerns</li>
          </ul>
        </li>
        <li><strong>Demographic Shifts</strong>:
          <ul>
            <li>Gender representation improving</li>
            <li>Racial/ethnic diversity lags</li>
            <li>International faculty increasing</li>
          </ul>
        </li>
        <li><strong>Political and Public Scrutiny</strong>:
          <ul>
            <li>Academic freedom controversies</li>
            <li>Questioning of tenure</li>
            <li>Return on investment demands</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide14",title:"Internal Stakeholders",content:`
      <h3>Internal Stakeholders</h3>
      <ul>
        <li><strong>Students</strong>:
          <ul>
            <li>Traditional and non-traditional</li>
            <li>Undergraduate and graduate</li>
            <li>Domestic and international</li>
          </ul>
        </li>
        <li><strong>Faculty</strong>:
          <ul>
            <li>Tenure-track and contingent</li>
            <li>By discipline and rank</li>
          </ul>
        </li>
        <li><strong>Staff</strong>:
          <ul>
            <li>Administrative and support</li>
            <li>Technical and professional</li>
            <li>Facilities and operations</li>
          </ul>
        </li>
        <li><strong>Administrators</strong>:
          <ul>
            <li>Executive leadership</li>
            <li>Deans and department chairs</li>
            <li>Program directors</li>
          </ul>
        </li>
        <li><strong>Governing Boards</strong>:
          <ul>
            <li>Trustees/regents</li>
            <li>Fiduciary responsibility</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide15",title:"External Stakeholders",content:`
      <h3>External Stakeholders</h3>
      <ul>
        <li><strong>Government Entities</strong>:
          <ul>
            <li>Federal: Financial aid, research funding, regulation</li>
            <li>State: Primary funders and regulators of public institutions</li>
            <li>Local: Economic development partners</li>
          </ul>
        </li>
        <li><strong>Accreditors</strong>:
          <ul>
            <li>Regional accrediting bodies</li>
            <li>Specialized program accreditors</li>
          </ul>
        </li>
        <li><strong>Employers and Industry</strong>:
          <ul>
            <li>Graduate employers</li>
            <li>Research partners</li>
            <li>Professional associations</li>
          </ul>
        </li>
        <li><strong>Alumni and Donors</strong>:
          <ul>
            <li>Graduates with ongoing connections</li>
            <li>Individual and institutional donors</li>
          </ul>
        </li>
        <li><strong>Community and Public</strong>:
          <ul>
            <li>Local communities</li>
            <li>Media</li>
            <li>General public</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide16",title:"Environmental Factors",content:`
      <h3>Environmental Factors</h3>
      <ul>
        <li><strong>Demographic Trends</strong>:
          <ul>
            <li>Declining traditional college-age population</li>
            <li>Growing diversity</li>
            <li>Geographic shifts</li>
            <li>Aging workforce</li>
          </ul>
        </li>
        <li><strong>Economic Factors</strong>:
          <ul>
            <li>State funding constraints</li>
            <li>Rising costs and affordability concerns</li>
            <li>Changing labor market demands</li>
            <li>Economic cycles</li>
          </ul>
        </li>
        <li><strong>Technological Change</strong>:
          <ul>
            <li>Online and hybrid learning</li>
            <li>Digital tools and analytics</li>
            <li>Automation affecting workforce needs</li>
          </ul>
        </li>
        <li><strong>Political and Policy Environment</strong>:
          <ul>
            <li>Partisan polarization</li>
            <li>Changing regulations</li>
            <li>Value questioning</li>
            <li>International competition</li>
          </ul>
        </li>
        <li><strong>Social and Cultural Shifts</strong>:
          <ul>
            <li>Changing student expectations</li>
            <li>Diversity, equity, and inclusion emphasis</li>
            <li>Mental health concerns</li>
            <li>Work-life balance expectations</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide17",title:"Stakeholder Management Strategies",content:`
      <h3>Stakeholder Management Strategies</h3>
      <ul>
        <li>Stakeholder Mapping: Identifying interests and influence</li>
        <li>Inclusive Governance: Appropriate voice in decisions</li>
        <li>Strategic Communication: Tailored yet consistent messaging</li>
        <li>Relationship Building: Ongoing engagement</li>
        <li>Interest Alignment: Finding shared priorities</li>
        <li>Expectation Management: Clear communication of possibilities</li>
        <li>Transparent Decision Processes: Explaining factors and input</li>
      </ul>
    `},{id:"s2-slide18",title:"Case Study 1 Overview",content:`
      <h3>Case Study 1: Understanding Institutional Identity and Mission</h3>
      <ul>
        <li><strong>Midvale State University</strong>:
          <ul>
            <li>Founded 1889 as normal school</li>
            <li>Evolved to comprehensive regional university</li>
            <li>15,000 students</li>
            <li>Mission drift and identity confusion</li>
          </ul>
        </li>
        <li><strong>Case Elements</strong>:
          <ul>
            <li>Historical development</li>
            <li>Current institutional profile</li>
            <li>Mission and values statements</li>
            <li>Organizational characteristics</li>
            <li>Challenge: potential doctoral program expansion</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide19",title:"Key Dilemmas in the Case",content:`
      <h3>Key Dilemmas in the Case</h3>
      <ul>
        <li><strong>Mission Clarity vs. Comprehensiveness</strong>:
          <ul>
            <li>Historical teaching mission vs. research aspirations</li>
          </ul>
        </li>
        <li><strong>Faculty Role Expectations</strong>:
          <ul>
            <li>Teaching, research, service balance</li>
          </ul>
        </li>
        <li><strong>Resource Allocation</strong>:
          <ul>
            <li>Undergraduate vs. graduate/research initiatives</li>
          </ul>
        </li>
        <li><strong>Stakeholder Alignment</strong>:
          <ul>
            <li>Divergent expectations from various constituencies</li>
          </ul>
        </li>
        <li><strong>Organizational Identity</strong>:
          <ul>
            <li>What kind of institution should Midvale aspire to be?</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide20",title:"Analytical Approach for the Case",content:`
      <h3>Analytical Approach for the Case</h3>
      <ol>
        <li>Apply organizational theories to explain structures and behaviors</li>
        <li>Analyze faculty roles and expectations</li>
        <li>Identify key stakeholders and their interests</li>
        <li>Conduct SWOT analysis</li>
        <li>Articulate core identity/mission dilemma</li>
        <li>Propose strategic considerations</li>
      </ol>
    `},{id:"s2-slide21",title:"Connection to Module Concepts",content:`
      <h3>Connection to Module Concepts</h3>
      <ul>
        <li><strong>Historical Context</strong>: How Midvale's evolution reflects broader patterns</li>
        <li><strong>Institutional Types</strong>: Where Midvale fits in the landscape</li>
        <li><strong>Organizational Theories</strong>: Multiple lenses for understanding governance and culture</li>
        <li><strong>Faculty Roles</strong>: How changing expectations reflect institutional priorities</li>
        <li><strong>Stakeholder Influences</strong>: How various actors shape options and constraints</li>
      </ul>
    `},{id:"s2-slide22",title:"Case Study Process",content:`
      <h3>Case Study Process</h3>
      <ul>
        <li>Complete case study document provided after session</li>
        <li>Analysis due end of week (before Module 2)</li>
        <li>Target length: 1000-1500 words</li>
        <li>Demonstrate understanding of Module 1 concepts</li>
        <li>Provide thoughtful, evidence-based recommendations</li>
        <li>Detailed rubric will assess:
          <ul>
            <li>Application of concepts</li>
            <li>Analytical depth</li>
            <li>Strategic thinking</li>
            <li>Professional communication</li>
            <li>Evidence-based reasoning</li>
          </ul>
        </li>
      </ul>
    `},{id:"s2-slide23",title:"Key Terms and Concepts",content:`
      <h3>Key Terms and Concepts</h3>
      <ul>
        <li>Bureaucracy</li>
        <li>Collegial governance</li>
        <li>Political systems</li>
        <li>Organized anarchy</li>
        <li>Institutional theory</li>
        <li>Shared governance</li>
        <li>Tenure</li>
        <li>Faculty roles</li>
        <li>Contingent faculty</li>
        <li>Stakeholder management</li>
        <li>Mission drift</li>
        <li>Institutional identity</li>
        <li>Professional autonomy</li>
        <li>Loose coupling</li>
        <li>Isomorphism</li>
      </ul>
    `},{id:"s2-slide24",title:"References",content:`
      <h3>References</h3>
      <ul>
        <li>Baldridge, J. V. (1971). <em>Power and conflict in the university</em>.</li>
        <li>Bergquist, W. H., & Pawlak, K. (2008). <em>Engaging the six cultures of the academy</em>.</li>
        <li>Birnbaum, R. (1988). <em>How colleges work</em>.</li>
        <li>Cohen, M. D., March, J. G., & Olsen, J. P. (1972). "A garbage can model of organizational choice."</li>
        <li>Finkelstein, M. J., Conley, V. M., & Schuster, J. H. (2016). <em>The faculty factor</em>.</li>
        <li>Kezar, A., & Holcombe, E. (2017). <em>Shared leadership in higher education</em>.</li>
        <li>Manning, K. (2017). <em>Organizational theory in higher education</em>.</li>
        <li>Tierney, W. G. (2008). <em>The impact of culture on organizational decision making</em>.</li>
        <li>Weick, K. E. (1976). "Educational organizations as loosely coupled systems."</li>
      </ul>
    `},{id:"s2-slide25",title:"Next Session Preview",content:`
      <h3>Next Session</h3>
      <h2>Module 2, Session 1: Governance Models, Boards, and Leadership Roles</h2>
      <ul>
        <li>Theories and Models of Higher Education Governance</li>
        <li>Governing Boards: Role, responsibilities, and composition</li>
        <li>The University Presidency: Leadership roles and challenges</li>
        <li>Faculty Governance: Senates, committees, and shared decision-making</li>
        <li>Academic Freedom and Tenure: Foundations and contemporary issues</li>
      </ul>
    `}],Xv=()=>{const[o,f]=N.useState(0),h=jn(),c=Gf.length,v=Gf[o],E=N.useCallback(()=>{f(D=>Math.min(D+1,c-1))},[c]),C=N.useCallback(()=>{f(D=>Math.max(D-1,0))},[]);return N.useEffect(()=>{const D=T=>{T.key==="ArrowRight"?E():T.key==="ArrowLeft"?C():T.key==="Escape"&&h("/module/1")};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[E,C,h]),v?r.jsxs("div",{className:"slideshow-container",children:[r.jsxs("div",{className:"slide-content-wrapper",children:[r.jsxs("header",{className:"slide-header",children:[r.jsx("h1",{className:"slide-title",children:v.title}),v.subtitle&&r.jsx("h2",{className:"slide-subtitle",children:v.subtitle})]}),r.jsx("div",{className:"slide-actual-content",dangerouslySetInnerHTML:{__html:v.content}})]}),r.jsxs("div",{className:"slideshow-controls",children:[r.jsx("button",{onClick:C,disabled:o===0,children:"← Previous"}),r.jsxs("span",{className:"slide-indicator",children:["Slide ",o+1," of ",c]}),r.jsx("button",{onClick:E,disabled:o===c-1,children:"Next →"})]}),r.jsx("div",{style:{textAlign:"center",padding:"10px",background:"#e9ecef"},children:r.jsx(Re,{to:"/module/1",style:{fontSize:"0.9rem"},children:"Back to Module 1 Overview"})})]}):r.jsx("div",{className:"container",children:"Slide data not found for Session 2."})},Vv=()=>r.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[r.jsx("header",{className:"page-header",children:r.jsx("h1",{children:"Module 2: Governance Structures and Stakeholders in Higher Education"})}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Duration:"})," 1 Week (2 Sessions)"]}),r.jsx("h3",{children:"Overall Module Learning Outcomes"}),r.jsx("p",{children:"Upon completing this module, students will be able to:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Compare and contrast different models of higher education governance (e.g., shared governance, corporate models)."}),r.jsx("li",{children:"Describe the functions and responsibilities of governing boards, institutional leaders (presidents/chancellors), and faculty senates."}),r.jsx("li",{children:"Analyze the influence of various internal stakeholders (faculty, staff, students) and external stakeholders (government, accreditors, donors, alumni, public) on institutional governance."}),r.jsx("li",{children:"Explain the principles of academic freedom and tenure and their role in governance."}),r.jsx("li",{children:"Evaluate the challenges and complexities of ensuring accountability in higher education governance."})]})]}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsx("h3",{children:"Session 1: Governance Models, Boards, and Leadership Roles"}),r.jsx("p",{children:r.jsx("strong",{children:"Topics Covered:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Theories and Models of Higher Education Governance (e.g., Shared Governance, Managerialism/Corporate Model, Political Model, Bureaucratic Model)."}),r.jsx("li",{children:"Governing Boards: Role, responsibilities, and composition of Trustees/Regents."}),r.jsx("li",{children:"The University Presidency: Leadership roles, powers, and challenges."}),r.jsx("li",{children:"Faculty Governance: Senates, committees, unions, and the principles of shared decision-making."}),r.jsx("li",{children:"Academic Freedom and Tenure: Foundations and contemporary issues."})]}),r.jsx("p",{style:{marginTop:"1rem"},children:r.jsxs(Re,{to:"/module/2/session/1/slides",className:"font-semibold animated-underline",children:["View Session 1 Lecture Slides",r.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📰"})]})})]}),r.jsxs("div",{className:"content-section animate-on-scroll",children:[r.jsx("h3",{children:"Session 2: Stakeholder Influence, Accountability, and Case Introduction"}),r.jsx("p",{children:r.jsx("strong",{children:"Topics Covered:"})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Student Involvement in Governance: Roles, impact, and limitations."}),r.jsx("li",{children:"External Influences: Accreditation bodies, state systems, federal government, donors, alumni, and navigating political contexts."}),r.jsx("li",{children:"Accountability in Higher Education: To whom and for what? Transparency and ethical considerations."}),r.jsx("li",{children:'Introduction to Case Study 2: "Navigating a Governance Crisis."'})]}),r.jsx("p",{style:{marginTop:"1rem"},children:r.jsxs(Re,{to:"/module/2/session/2/slides",className:"font-semibold animated-underline",children:["View Session 2 Lecture Slides",r.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📰"})]})})]})]}),wf=[{id:"m2s1-slide1",title:"Governance Models, Boards, and Leadership Roles",subtitle:"Module 2, Session 1",content:"<h3>Managing Institutional Higher Education</h3>"},{id:"m2s1-slide2",title:"Session Overview",content:`
      <h3>Session Overview</h3>
      <ul>
        <li>Theories and Models of Higher Education Governance</li>
        <li>Governing Boards: Role, Responsibilities, and Composition</li>
        <li>The University Presidency: Leadership Roles and Challenges</li>
        <li>Faculty Governance: Senates, Committees, and Shared Decision-Making</li>
        <li>Academic Freedom and Tenure: Foundations and Contemporary Issues</li>
      </ul>
    `},{id:"m2s1-slide3",title:"Evolution of Governance Models",content:`
      <h3>Evolution of Higher Education Governance</h3>
      <ul>
        <li><strong>Early American Colleges</strong>: Lay trustee model with limited faculty authority</li>
        <li><strong>Late 19th/Early 20th Century</strong>: Growing faculty professionalization</li>
        <li><strong>1915 AAUP Declaration</strong>: Articulated vision of shared governance</li>
        <li><strong>Post-WWII Expansion</strong>: Increased complexity and administration</li>
        <li><strong>1966 Statement on Government</strong>: Codified shared governance principles</li>
        <li><strong>Recent Decades</strong>: Tension between traditional models and corporate approaches</li>
        <li><strong>Contemporary Context</strong>: Multiple models operating simultaneously</li>
      </ul>
    `},{id:"m2s1-slide4",title:"Shared Governance Model",content:`
      <h3>Shared Governance Model</h3>
      <ul>
        <li><strong>Key Principles</strong>:
          <ul>
            <li>Distributed decision-making authority</li>
            <li>Faculty expertise in academic matters</li>
            <li>Consultation and collaboration</li>
            <li>Consensus-building processes</li>
          </ul>
        </li>
        <li><strong>Domains of Authority</strong>:
          <ul>
            <li>Faculty: Curriculum, standards, faculty status</li>
            <li>Administration: Operations, implementation</li>
            <li>Board: Mission, strategy, finances</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Diverse perspectives, broad ownership, academic values</li>
        <li><strong>Challenges</strong>: Process-heavy, slow response, time-intensive</li>
      </ul>
    `},{id:"m2s1-slide5",title:"Managerialism/Corporate Model",content:`
      <h3>Managerialism/Corporate Model</h3>
      <ul>
        <li><strong>Key Principles</strong>:
          <ul>
            <li>Centralized decision-making</li>
            <li>Clear hierarchical relationships</li>
            <li>Efficiency and accountability focus</li>
            <li>Market responsiveness</li>
          </ul>
        </li>
        <li><strong>Governance Characteristics</strong>:
          <ul>
            <li>Strong executive authority</li>
            <li>Oversight-focused boards</li>
            <li>Limited faculty role</li>
            <li>Professional administrators</li>
            <li>Performance metrics</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Rapid decisions, clear accountability, efficiency</li>
        <li><strong>Challenges</strong>: Faculty marginalization, resistance, cultural clash</li>
      </ul>
    `},{id:"m2s1-slide6",title:"Political Model",content:`
      <h3>Political Model</h3>
      <ul>
        <li><strong>Key Principles</strong>:
          <ul>
            <li>Competing interest groups</li>
            <li>Power dynamics and coalitions</li>
            <li>Negotiation and compromise</li>
            <li>Resource allocation as political</li>
            <li>Conflict as normal</li>
          </ul>
        </li>
        <li><strong>Governance Characteristics</strong>:
          <ul>
            <li>Multiple power centers</li>
            <li>Shifting alliances</li>
            <li>Informal influence networks</li>
            <li>Bargaining and trade-offs</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Recognizes competing interests, explains behaviors</li>
        <li><strong>Challenges</strong>: Normalizes conflict, can undermine trust</li>
      </ul>
    `},{id:"m2s1-slide7",title:"Bureaucratic Model",content:`
      <h3>Bureaucratic Model</h3>
      <ul>
        <li><strong>Key Principles</strong>:
          <ul>
            <li>Formal authority hierarchies</li>
            <li>Written policies and procedures</li>
            <li>Specialization and division of labor</li>
            <li>Standardization and consistency</li>
            <li>Rule-governed decisions</li>
          </ul>
        </li>
        <li><strong>Governance Characteristics</strong>:
          <ul>
            <li>Detailed organizational charts</li>
            <li>Extensive policy manuals</li>
            <li>Formal committees</li>
            <li>Standardized processes</li>
            <li>Clear delegation</li>
          </ul>
        </li>
        <li><strong>Strengths</strong>: Clarity, consistency, coordination</li>
        <li><strong>Challenges</strong>: Rigidity, excessive paperwork, adaptation difficulties</li>
      </ul>
    `},{id:"m2s1-slide8",title:"Hybrid Governance Approaches",content:`
      <h3>Hybrid Governance Approaches</h3>
      <ul>
        <li><strong>By Domain</strong>:
          <ul>
            <li>Academic: Shared governance</li>
            <li>Administrative: Managerial</li>
            <li>Resource allocation: Political</li>
            <li>Compliance: Bureaucratic</li>
          </ul>
        </li>
        <li><strong>By Level</strong>:
          <ul>
            <li>Department: Collegial</li>
            <li>School/College: Political</li>
            <li>Institution: Managerial</li>
            <li>System: Bureaucratic</li>
          </ul>
        </li>
        <li><strong>By Situation</strong>:
          <ul>
            <li>Routine decisions: Established procedures</li>
            <li>Crisis: Centralized approaches</li>
            <li>Strategic initiatives: Collaborative</li>
            <li>External mandates: Compliance-oriented</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide9",title:"Contemporary Governance Tensions",content:`
      <h3>Contemporary Governance Tensions</h3>
      <ul>
        <li><strong>Efficiency vs. Inclusivity</strong>:
          <ul>
            <li>Timely decisions vs. broad consultation</li>
            <li>Streamlined processes vs. thorough deliberation</li>
          </ul>
        </li>
        <li><strong>Expertise vs. Representation</strong>:
          <ul>
            <li>Professional judgment vs. stakeholder interests</li>
            <li>Specialized knowledge vs. diverse perspectives</li>
          </ul>
        </li>
        <li><strong>Internal vs. External Orientation</strong>:
          <ul>
            <li>Academic values vs. market demands</li>
            <li>Institutional autonomy vs. public accountability</li>
          </ul>
        </li>
        <li><strong>Centralization vs. Decentralization</strong>:
          <ul>
            <li>Institutional coherence vs. unit autonomy</li>
            <li>Standardized policies vs. contextual flexibility</li>
          </ul>
        </li>
        <li><strong>Tradition vs. Change</strong>:
          <ul>
            <li>Core values vs. adaptation</li>
            <li>Established processes vs. new approaches</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide10",title:"Governing Boards: Legal Authority",content:`
      <h3>Governing Boards: Legal Authority</h3>
      <ul>
        <li><strong>Legal Foundations</strong>:
          <ul>
            <li>State constitutions/statutes (public)</li>
            <li>Charter documents (private)</li>
            <li>IRS requirements</li>
            <li>Accreditation standards</li>
          </ul>
        </li>
        <li><strong>Fiduciary Responsibilities</strong>:
          <ul>
            <li><strong>Duty of Care</strong>: Reasonable diligence</li>
            <li><strong>Duty of Loyalty</strong>: Institutional best interest</li>
            <li><strong>Duty of Obedience</strong>: Mission alignment and legal compliance</li>
          </ul>
        </li>
        <li>Ultimate legal authority for institutional oversight</li>
      </ul>
    `},{id:"m2s1-slide11",title:"Core Board Functions",content:`
      <h3>Core Board Functions</h3>
      <ul>
        <li><strong>Policy Development and Oversight</strong>:
          <ul>
            <li>Establish broad institutional policies</li>
            <li>Monitor implementation and effectiveness</li>
          </ul>
        </li>
        <li><strong>Strategic Direction</strong>:
          <ul>
            <li>Approve mission and vision</li>
            <li>Ensure alignment between plans and resources</li>
          </ul>
        </li>
        <li><strong>Financial Stewardship</strong>:
          <ul>
            <li>Approve budgets and major financial decisions</li>
            <li>Ensure sustainability and manage risk</li>
          </ul>
        </li>
        <li><strong>Presidential Selection/Evaluation</strong>:
          <ul>
            <li>Hire and evaluate president/chancellor</li>
            <li>Plan for succession</li>
          </ul>
        </li>
        <li><strong>Institutional Advocacy</strong>:
          <ul>
            <li>External representation</li>
            <li>Fundraising support</li>
          </ul>
        </li>
        <li><strong>Self-Governance</strong>:
          <ul>
            <li>Board structures and processes</li>
            <li>Performance evaluation</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide12",title:"Board Composition and Structure",content:`
      <h3>Board Composition and Structure</h3>
      <ul>
        <li><strong>Public Institution Boards</strong>:
          <ul>
            <li>Appointed or elected</li>
            <li>Political considerations</li>
            <li>Geographic representation</li>
            <li>May include student/faculty representatives</li>
          </ul>
        </li>
        <li><strong>Private Institution Boards</strong>:
          <ul>
            <li>Self-perpetuating</li>
            <li>Donors and alumni</li>
            <li>Industry/professional leaders</li>
            <li>Personal giving expectations</li>
          </ul>
        </li>
        <li><strong>Board Leadership</strong>:
          <ul>
            <li>Board chair/president</li>
            <li>Vice chair</li>
            <li>Committee chairs</li>
          </ul>
        </li>
        <li><strong>Committee Structure</strong>:
          <ul>
            <li>Executive, Finance, Academic Affairs</li>
            <li>Audit/Compliance, Governance</li>
            <li>Advancement, others as needed</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide13",title:"Contemporary Board Issues",content:`
      <h3>Contemporary Board Issues</h3>
      <ul>
        <li><strong>Professionalization of Board Work</strong>:
          <ul>
            <li>Structured orientation and training</li>
            <li>Performance metrics</li>
            <li>Governance consultants</li>
          </ul>
        </li>
        <li><strong>Diversity, Equity, and Inclusion</strong>:
          <ul>
            <li>Diverse composition</li>
            <li>Inclusive practices</li>
            <li>Equity considerations</li>
          </ul>
        </li>
        <li><strong>Political Polarization</strong>:
          <ul>
            <li>Politicization of public boards</li>
            <li>Partisan appointments</li>
            <li>Divisive issues</li>
          </ul>
        </li>
        <li><strong>Stakeholder Representation</strong>:
          <ul>
            <li>Faculty/staff/student membership debates</li>
            <li>Input mechanisms</li>
            <li>Balancing representation with fiduciary focus</li>
          </ul>
        </li>
        <li><strong>Crisis Governance</strong>:
          <ul>
            <li>Emergency powers</li>
            <li>Balance between action and process</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide14",title:"The Evolving Presidential Role",content:`
      <h3>The Evolving Presidential Role</h3>
      <ul>
        <li><strong>Historical Evolution</strong>:
          <ul>
            <li>Scholar-leaders → Administrative leaders</li>
            <li>Internal focus → External focus</li>
            <li>Academic peers → Professional executives</li>
          </ul>
        </li>
        <li><strong>Contemporary Presidential Profile</strong>:
          <ul>
            <li>Diverse backgrounds</li>
            <li>Shorter tenures (6-7 years)</li>
            <li>Increasing demographic diversity</li>
            <li>Growing compensation</li>
          </ul>
        </li>
        <li><strong>Changing Expectations</strong>:
          <ul>
            <li>"First among equals" → CEO</li>
            <li>Internal academic leader → External representative</li>
            <li>Collegial persuader → Strategic change agent</li>
            <li>Mission guardian → Entrepreneurial innovator</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide15",title:"Presidential Responsibilities",content:`
      <h3>Presidential Responsibilities</h3>
      <ul>
        <li><strong>Institutional Leadership</strong>:
          <ul>
            <li>Vision articulation</li>
            <li>Team building</li>
            <li>Culture fostering</li>
            <li>Change management</li>
          </ul>
        </li>
        <li><strong>External Relations</strong>:
          <ul>
            <li>Fundraising</li>
            <li>Government relations</li>
            <li>Community engagement</li>
            <li>Crisis communication</li>
          </ul>
        </li>
        <li><strong>Internal Management</strong>:
          <ul>
            <li>Resource allocation</li>
            <li>Policy implementation</li>
            <li>Performance evaluation</li>
            <li>Conflict resolution</li>
          </ul>
        </li>
        <li><strong>Academic Leadership</strong>:
          <ul>
            <li>Academic quality</li>
            <li>Faculty development</li>
            <li>Innovation support</li>
            <li>Student success</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide16",title:"Presidential Authority",content:`
      <h3>Presidential Authority</h3>
      <ul>
        <li><strong>Appointment Authority</strong>:
          <ul>
            <li>Senior administrators</li>
            <li>Faculty recommendations</li>
            <li>Leadership team building</li>
          </ul>
        </li>
        <li><strong>Resource Authority</strong>:
          <ul>
            <li>Budget development</li>
            <li>Resource allocation</li>
            <li>Process establishment</li>
          </ul>
        </li>
        <li><strong>Policy Authority</strong>:
          <ul>
            <li>Board policy implementation</li>
            <li>Administrative policy development</li>
            <li>Academic policy recommendations</li>
          </ul>
        </li>
        <li><strong>Representational Authority</strong>:
          <ul>
            <li>External institutional voice</li>
            <li>Board-campus intermediary</li>
            <li>Decision communication</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide17",title:"Presidential Leadership Challenges",content:`
      <h3>Presidential Leadership Challenges</h3>
      <ul>
        <li><strong>Multiple Constituencies</strong>:
          <ul>
            <li>Board, faculty, students, staff</li>
            <li>Alumni, donors, government</li>
            <li>Community, media</li>
          </ul>
        </li>
        <li><strong>Competing Values</strong>:
          <ul>
            <li>Excellence vs. accessibility</li>
            <li>Tradition vs. innovation</li>
            <li>Autonomy vs. accountability</li>
          </ul>
        </li>
        <li><strong>Resource Constraints</strong>:
          <ul>
            <li>Declining public funding</li>
            <li>Affordability concerns</li>
            <li>Rising costs</li>
            <li>Infrastructure needs</li>
          </ul>
        </li>
        <li><strong>Governance Tensions</strong>:
          <ul>
            <li>Shared governance vs. decisive action</li>
            <li>Oversight vs. micromanagement</li>
            <li>Academic authority vs. financial reality</li>
          </ul>
        </li>
        <li><strong>External Pressures</strong>:
          <ul>
            <li>Political scrutiny</li>
            <li>Market competition</li>
            <li>Demographic changes</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide18",title:"Presidential Leadership Strategies",content:`
      <h3>Presidential Leadership Strategies</h3>
      <ul>
        <li><strong>Building Shared Vision</strong>:
          <ul>
            <li>Stakeholder engagement</li>
            <li>Connection to values</li>
            <li>Consistent communication</li>
          </ul>
        </li>
        <li><strong>Developing Effective Teams</strong>:
          <ul>
            <li>Talented recruitment</li>
            <li>Trust building</li>
            <li>Appropriate delegation</li>
          </ul>
        </li>
        <li><strong>Managing Change</strong>:
          <ul>
            <li>Creating urgency without panic</li>
            <li>Building coalitions</li>
            <li>Addressing resistance</li>
          </ul>
        </li>
        <li><strong>Balancing Consultation and Decision</strong>:
          <ul>
            <li>Appropriate consultation levels</li>
            <li>Process transparency</li>
            <li>Decision rationale</li>
          </ul>
        </li>
        <li><strong>Cultivating Board Relationships</strong>:
          <ul>
            <li>Regular communication</li>
            <li>Thorough information</li>
            <li>Expectation management</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide19",title:"Faculty Governance Rationale",content:`
      <h3>Faculty Governance Rationale</h3>
      <ul>
        <li><strong>Professional Expertise</strong>:
          <ul>
            <li>Specialized disciplinary knowledge</li>
            <li>Academic decisions require expertise</li>
            <li>Quality through peer review</li>
            <li>Professional judgment</li>
          </ul>
        </li>
        <li><strong>Academic Freedom</strong>:
          <ul>
            <li>Protection for intellectual inquiry</li>
            <li>Balance to administrative power</li>
            <li>Support for individual freedom</li>
          </ul>
        </li>
        <li><strong>Institutional Commitment</strong>:
          <ul>
            <li>Faculty investment</li>
            <li>Institutional memory</li>
            <li>Career alignment</li>
            <li>Mutual accountability</li>
          </ul>
        </li>
        <li><strong>Educational Quality</strong>:
          <ul>
            <li>Proximity to teaching/learning</li>
            <li>Disciplinary knowledge for curriculum</li>
            <li>Faculty engagement in assessment</li>
            <li>Academic standards maintenance</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide20",title:"Faculty Governance Structures",content:`
      <h3>Faculty Governance Structures</h3>
      <ul>
        <li><strong>Faculty Senates/Councils</strong>:
          <ul>
            <li>Institution-wide representative bodies</li>
            <li>Elected membership</li>
            <li>Elected leadership</li>
            <li>Formal procedures</li>
            <li>Advisory or decision-making authority</li>
          </ul>
        </li>
        <li><strong>Standing Committees</strong>:
          <ul>
            <li>Domain-specific focus</li>
            <li>Reporting relationships</li>
            <li>Mixed membership</li>
            <li>Policy development and oversight</li>
          </ul>
        </li>
        <li><strong>Department/Program Governance</strong>:
          <ul>
            <li>Unit-level decisions</li>
            <li>Curriculum development</li>
            <li>Personnel recommendations</li>
            <li>Resource allocation</li>
          </ul>
        </li>
        <li><strong>School/College Governance</strong>:
          <ul>
            <li>Dean's advisory councils</li>
            <li>Promotion and tenure committees</li>
            <li>Curriculum committees</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide21",title:"Faculty Unions and Collective Bargaining",content:`
      <h3>Faculty Unions and Collective Bargaining</h3>
      <ul>
        <li><strong>Historical Development</strong>:
          <ul>
            <li>Began 1960s-1970s</li>
            <li>Initially at community colleges, regional universities</li>
            <li>Now at ~30% of institutions</li>
            <li>Recent growth among contingent faculty</li>
          </ul>
        </li>
        <li><strong>Legal Framework</strong>:
          <ul>
            <li>State laws for public institutions</li>
            <li>Yeshiva decision impact on private institutions</li>
            <li>Graduate student unionization</li>
            <li>Right-to-work laws</li>
          </ul>
        </li>
        <li><strong>Typical Contract Elements</strong>:
          <ul>
            <li>Compensation and benefits</li>
            <li>Workload definitions</li>
            <li>Evaluation procedures</li>
            <li>Grievance processes</li>
          </ul>
        </li>
        <li><strong>Relationship to Shared Governance</strong>:
          <ul>
            <li>Complementary or competing</li>
            <li>Formalization of practices</li>
            <li>Legal enforceability</li>
            <li>Administrative flexibility impact</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide22",title:"Shared Governance in Practice",content:`
      <h3>Shared Governance in Practice</h3>
      <ul>
        <li><strong>Academic Affairs</strong>:
          <ul>
            <li>Curriculum (primary faculty authority)</li>
            <li>Academic policies (strong faculty role)</li>
            <li>Teaching methods (faculty discretion)</li>
            <li>Program evaluation (collaborative)</li>
          </ul>
        </li>
        <li><strong>Faculty Affairs</strong>:
          <ul>
            <li>Hiring criteria (strong faculty role)</li>
            <li>Promotion/tenure standards (primary faculty authority)</li>
            <li>Evaluation methods (collaborative)</li>
            <li>Workload policies (negotiated)</li>
          </ul>
        </li>
        <li><strong>Resource Allocation</strong>:
          <ul>
            <li>Budget models (administrative with consultation)</li>
            <li>Space allocation (administrative with input)</li>
            <li>Technology investments (collaborative)</li>
            <li>Faculty positions (collaborative)</li>
          </ul>
        </li>
        <li><strong>Institutional Planning</strong>:
          <ul>
            <li>Mission/vision (board with broad input)</li>
            <li>Strategic priorities (collaborative)</li>
            <li>Facilities planning (administrative with input)</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide23",title:"Faculty Governance Challenges",content:`
      <h3>Faculty Governance Challenges</h3>
      <ul>
        <li><strong>Changing Faculty Composition</strong>:
          <ul>
            <li>Declining tenure-track proportion</li>
            <li>Limited contingent faculty participation</li>
            <li>Varying institutional commitment</li>
            <li>Different interests across types</li>
          </ul>
        </li>
        <li><strong>Time Pressures and Workload</strong>:
          <ul>
            <li>Increasing demands</li>
            <li>Undervalued service</li>
            <li>Competing priorities</li>
            <li>Process inefficiencies</li>
          </ul>
        </li>
        <li><strong>Governance Capacity</strong>:
          <ul>
            <li>Limited preparation</li>
            <li>Uneven work distribution</li>
            <li>Insufficient support</li>
            <li>Inadequate information</li>
          </ul>
        </li>
        <li><strong>Scope and Speed of Change</strong>:
          <ul>
            <li>Accelerating external changes</li>
            <li>Pressure for rapid response</li>
            <li>Cross-boundary issues</li>
            <li>Technical complexity</li>
          </ul>
        </li>
        <li><strong>Governance-Administration Relations</strong>:
          <ul>
            <li>Varying commitment to principles</li>
            <li>Consultation perception gaps</li>
            <li>Trust deficits</li>
            <li>Boundary disagreements</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide24",title:"Academic Freedom Foundations",content:`
      <h3>Academic Freedom Foundations</h3>
      <ul>
        <li><strong>Conceptual Elements</strong>:
          <ul>
            <li>Freedom of inquiry and research</li>
            <li>Freedom of teaching</li>
            <li>Freedom of expression</li>
            <li>Protection from censorship</li>
            <li>Extramural utterance protection</li>
          </ul>
        </li>
        <li><strong>Historical Development</strong>:
          <ul>
            <li>Medieval university autonomy</li>
            <li>German Lehrfreiheit and Lernfreiheit</li>
            <li>1915 AAUP Declaration</li>
            <li>1940 Statement of Principles</li>
            <li>Court cases defining boundaries</li>
          </ul>
        </li>
        <li><strong>Rationale</strong>:
          <ul>
            <li>Knowledge advancement requires freedom</li>
            <li>Truth-seeking needs protection</li>
            <li>Society benefits from unfettered expertise</li>
            <li>Universities as open discourse spaces</li>
            <li>Protection from non-expert interference</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide25",title:"Tenure: Purpose and Process",content:`
      <h3>Tenure: Purpose and Process</h3>
      <ul>
        <li><strong>Purpose and Rationale</strong>:
          <ul>
            <li>Academic freedom protection</li>
            <li>Long-term research enablement</li>
            <li>Due process protections</li>
            <li>Talent attraction</li>
            <li>Institutional commitment</li>
          </ul>
        </li>
        <li><strong>Typical Process</strong>:
          <ul>
            <li>6-7 year probationary period</li>
            <li>Annual reviews</li>
            <li>Comprehensive dossier</li>
            <li>Multiple review levels</li>
            <li>External evaluation</li>
            <li>Board decision</li>
          </ul>
        </li>
        <li><strong>Standards and Criteria</strong>:
          <ul>
            <li>Research/scholarship excellence</li>
            <li>Teaching effectiveness</li>
            <li>Appropriate service</li>
            <li>Collegiality (controversial)</li>
            <li>Continued productivity potential</li>
            <li>Institutional alignment</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide26",title:"Contemporary Academic Freedom Challenges",content:`
      <h3>Contemporary Academic Freedom Challenges</h3>
      <ul>
        <li><strong>Political Polarization</strong>:
          <ul>
            <li>Partisan scrutiny</li>
            <li>Legislative intervention</li>
            <li>Pressure campaigns</li>
            <li>Political conflation</li>
          </ul>
        </li>
        <li><strong>Social Media and Public Engagement</strong>:
          <ul>
            <li>Blurred boundaries</li>
            <li>Viral amplification</li>
            <li>Reputation concerns</li>
            <li>Harassment and threats</li>
          </ul>
        </li>
        <li><strong>Donor Influence</strong>:
          <ul>
            <li>Gift strings</li>
            <li>External funding</li>
            <li>Chilling effects</li>
            <li>Governance questions</li>
          </ul>
        </li>
        <li><strong>Corporate Partnerships</strong>:
          <ul>
            <li>Funding restrictions</li>
            <li>Intellectual property issues</li>
            <li>Publication limitations</li>
            <li>Research bias potential</li>
          </ul>
        </li>
        <li><strong>Student Demands</strong>:
          <ul>
            <li>Content warnings</li>
            <li>Speaker protests</li>
            <li>Classroom expression complaints</li>
            <li>Inclusion vs. inquiry tensions</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide27",title:"Academic Freedom and Governance",content:`
      <h3>Academic Freedom and Governance</h3>
      <ul>
        <li><strong>Governance as Protection</strong>:
          <ul>
            <li>Faculty participation protects freedom</li>
            <li>Collective voice balances power</li>
            <li>Peer review maintains standards</li>
            <li>Due process prevents arbitrary actions</li>
          </ul>
        </li>
        <li><strong>Governance Scope</strong>:
          <ul>
            <li>Freedom applies to governance participation</li>
            <li>Dissenting views protected</li>
            <li>Administrative criticism protected</li>
            <li>Compliance with collective decisions</li>
          </ul>
        </li>
        <li><strong>Institutional Autonomy</strong>:
          <ul>
            <li>Institutional vs. individual freedom</li>
            <li>External interference protection</li>
            <li>Public accountability tension</li>
            <li>Autonomy-responsiveness balance</li>
          </ul>
        </li>
        <li><strong>Policy Development</strong>:
          <ul>
            <li>Clear policies needed</li>
            <li>Due process procedures</li>
            <li>Rights/responsibilities education</li>
            <li>Regular policy review</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s1-slide28",title:"Key Governance Themes",content:`
      <h3>Key Governance Themes</h3>
      <ul>
        <li><strong>Governance Complexity</strong>: Multiple models, structures, and stakeholders operating simultaneously</li>
        <li><strong>Contextual Variation</strong>: Approaches vary by institutional type, history, and culture</li>
        <li><strong>Balancing Tensions</strong>: Competing values and interests require constant balancing</li>
        <li><strong>Relationship Foundations</strong>: Trust, respect, communication, and shared commitment essential</li>
        <li><strong>Adaptive Leadership</strong>: Leaders must adapt approach to different situations and stakeholder groups</li>
      </ul>
    `},{id:"m2s1-slide29",title:"Key Terms and Concepts",content:`
      <h3>Key Terms and Concepts</h3>
      <ul>
        <li>Shared governance</li>
        <li>Corporate/managerial governance</li>
        <li>Political model</li>
        <li>Bureaucratic model</li>
        <li>Fiduciary responsibility</li>
        <li>Board of trustees/regents</li>
        <li>Faculty senate</li>
        <li>Collective bargaining</li>
        <li>Academic freedom</li>
        <li>Tenure</li>
        <li>Institutional autonomy</li>
        <li>Stakeholder representation</li>
        <li>Governance domains</li>
        <li>Presidential authority</li>
        <li>Faculty authority</li>
      </ul>
    `},{id:"m2s1-slide30",title:"References",content:`
      <h3>References</h3>
      <ul>
        <li>American Association of University Professors. (1940). Statement of principles on academic freedom and tenure.</li>
        <li>Association of Governing Boards. (2010). Statement on board responsibility for institutional governance.</li>
        <li>Birnbaum, R. (1988). How colleges work: The cybernetics of academic organization and leadership.</li>
        <li>Bowen, W. G., & Tobin, E. M. (2015). Locus of authority: The evolution of faculty roles in the governance of higher education.</li>
        <li>Eckel, P. D., & Kezar, A. J. (2016). The intersecting authority of boards, presidents, and faculty: Toward shared leadership.</li>
        <li>Gerber, L. G. (2014). The rise and decline of faculty governance: Professionalization and the modern American university.</li>
        <li>Hendrickson, R. M., et al. (2013). Academic leadership and governance of higher education.</li>
        <li>Kezar, A. (2004). What is more important to effective governance: Relationships, trust, and leadership, or structures and formal processes?</li>
      </ul>
    `},{id:"m2s1-slide31",title:"Next Session Preview",content:`
      <h3>Next Session</h3>
      <h2>Module 2, Session 2: Stakeholder Influence, Accountability, and Case Introduction</h2>
      <ul>
        <li>Student Involvement in Governance</li>
        <li>External Influences: Accreditation, government, donors, alumni</li>
        <li>Accountability in Higher Education</li>
        <li>Introduction to Case Study 2: "Navigating a Governance Crisis"</li>
      </ul>
    `}],Zv=()=>{const[o,f]=N.useState(0),h=jn(),c=wf.length,v=wf[o],E=N.useCallback(()=>{f(D=>Math.min(D+1,c-1))},[c]),C=N.useCallback(()=>{f(D=>Math.max(D-1,0))},[]);return N.useEffect(()=>{const D=T=>{T.key==="ArrowRight"?E():T.key==="ArrowLeft"?C():T.key==="Escape"&&h("/module/2")};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[E,C,h]),v?r.jsxs("div",{className:"slideshow-container",children:[r.jsxs("div",{className:"slide-content-wrapper",children:[r.jsxs("header",{className:"slide-header",children:[r.jsx("h1",{className:"slide-title",children:v.title}),v.subtitle&&r.jsx("h2",{className:"slide-subtitle",children:v.subtitle})]}),r.jsx("div",{className:"slide-actual-content",dangerouslySetInnerHTML:{__html:v.content}})]}),r.jsxs("div",{className:"slideshow-controls",children:[r.jsx("button",{onClick:C,disabled:o===0,children:"← Previous"}),r.jsxs("span",{className:"slide-indicator",children:["Slide ",o+1," of ",c]}),r.jsx("button",{onClick:E,disabled:o===c-1,children:"Next →"})]}),r.jsx("div",{style:{textAlign:"center",padding:"10px",background:"#e9ecef"},children:r.jsx(Re,{to:"/module/2",style:{fontSize:"0.9rem"},children:"Back to Module 2 Overview"})})]}):r.jsx("div",{className:"container",children:"Slide data not found."})},qf=[{id:"m2s2-slide1",title:"Stakeholder Influence, Accountability, and Case Introduction",subtitle:"Module 2, Session 2",content:"<h3>Managing Institutional Higher Education</h3>"},{id:"m2s2-slide2",title:"Session Overview",content:`
      <h3>Session Overview</h3>
      <ul>
        <li>Student Involvement in Governance: Roles, Impact, and Limitations</li>
        <li>External Influences: Accreditation, Government, Donors, Alumni</li>
        <li>Accountability in Higher Education: To Whom and for What?</li>
        <li>Introduction to Case Study 2: "Navigating a Governance Crisis"</li>
      </ul>
    `},{id:"m2s2-slide3",title:"Evolution of Student Governance Participation",content:`
      <h3>Evolution of Student Governance Participation</h3>
      <ul>
        <li><strong>Early American Colleges</strong>: Virtually no formal role, in loco parentis doctrine</li>
        <li><strong>Early to Mid-20th Century</strong>: Student government associations emerge, limited to student activities</li>
        <li><strong>1960s-1970s Transformation</strong>:
          <ul>
            <li>Civil rights and anti-war activism</li>
            <li>Creation of student positions on committees</li>
            <li>Student representation on some boards</li>
            <li>Development of student rights statements</li>
          </ul>
        </li>
        <li><strong>Contemporary Context</strong>: Varied formal representation across institutions</li>
      </ul>
    `},{id:"m2s2-slide4",title:"Current Models of Student Governance",content:`
      <h3>Student Governance Models</h3>
      <ul>
        <li><strong>Student Government Associations (SGAs)</strong>:
          <ul>
            <li>Representing student interests</li>
            <li>Allocating student activity fees</li>
            <li>Organizing campus events</li>
            <li>Appointing representatives to committees</li>
          </ul>
        </li>
        <li><strong>Board of Trustees/Regents Representation</strong>:
          <ul>
            <li>Full voting or advisory capacity</li>
            <li>Various selection methods</li>
            <li>Typically shorter terms (1-2 years)</li>
          </ul>
        </li>
        <li><strong>Committee Representation</strong>:
          <ul>
            <li>Academic policy committees</li>
            <li>Budget advisory committees</li>
            <li>Strategic planning groups</li>
            <li>Search committees</li>
          </ul>
        </li>
        <li><strong>Consultation Mechanisms</strong>:
          <ul>
            <li>Town halls, advisory councils</li>
            <li>Surveys and focus groups</li>
            <li>Regular leadership meetings</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide5",title:"Impact of Student Participation",content:`
      <h3>Student Governance Effectiveness</h3>
      <ul>
        <li><strong>Positive Impacts</strong>:
          <ul>
            <li>Student perspective in decisions</li>
            <li>Improved policy implementation</li>
            <li>Leadership development</li>
            <li>Enhanced communication</li>
            <li>Early warning of concerns</li>
          </ul>
        </li>
        <li><strong>Challenges and Limitations</strong>:
          <ul>
            <li>Short tenure limits knowledge</li>
            <li>Academic demands constrain time</li>
            <li>Power imbalances</li>
            <li>Potential disconnect with broader student body</li>
            <li>Focus on immediate vs. long-term issues</li>
          </ul>
        </li>
        <li><strong>Effectiveness Factors</strong>:
          <ul>
            <li>Clear roles and authority</li>
            <li>Training and orientation</li>
            <li>Information access</li>
            <li>Meaningful involvement</li>
            <li>Visible impact of input</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide6",title:"Contemporary Student Governance Issues",content:`
      <h3>Current Student Governance Issues</h3>
      <ul>
        <li><strong>Diversity and Representation</strong>:
          <ul>
            <li>Representing diverse populations</li>
            <li>Addressing participation barriers</li>
            <li>Balancing traditional/non-traditional interests</li>
            <li>Graduate/professional student inclusion</li>
          </ul>
        </li>
        <li><strong>Professionalization</strong>:
          <ul>
            <li>Complex operations</li>
            <li>Increased responsibilities</li>
            <li>Paid positions</li>
            <li>Sophisticated advocacy</li>
          </ul>
        </li>
        <li><strong>Digital Governance</strong>:
          <ul>
            <li>Virtual participation options</li>
            <li>Social media as voice channel</li>
            <li>Online voting and feedback</li>
            <li>Digital accessibility</li>
          </ul>
        </li>
        <li><strong>Activism and Governance</strong>:
          <ul>
            <li>Relationship between formal governance and protest</li>
            <li>Institutional responses to movements</li>
            <li>Creating responsive systems</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide7",title:"Accreditation Influence",content:`
      <h3>Accreditation Bodies and Quality Assurance</h3>
      <ul>
        <li><strong>Types of Accreditation</strong>:
          <ul>
            <li>Regional (institutional)</li>
            <li>National (specific institution types)</li>
            <li>Specialized/Programmatic (specific programs)</li>
          </ul>
        </li>
        <li><strong>Governance Requirements</strong>:
          <ul>
            <li>Authority delineation</li>
            <li>Effective processes</li>
            <li>Stakeholder involvement</li>
            <li>Regular evaluation</li>
            <li>Sufficient autonomy</li>
            <li>Academic freedom policies</li>
          </ul>
        </li>
        <li><strong>Accreditation Processes</strong>:
          <ul>
            <li>Self-study engagement</li>
            <li>Site visit examination</li>
            <li>Governance recommendations</li>
            <li>Monitoring and follow-up</li>
          </ul>
        </li>
        <li><strong>Contemporary Trends</strong>:
          <ul>
            <li>Increased federal oversight</li>
            <li>Greater outcomes emphasis</li>
            <li>More prescriptive standards</li>
            <li>Public disclosure requirements</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide8",title:"State and System Governance",content:`
      <h3>State and System Influence</h3>
      <ul>
        <li><strong>State Governance Models</strong>:
          <ul>
            <li>Consolidated Governing Boards</li>
            <li>Segmented Systems</li>
            <li>Regulatory Coordinating Boards</li>
            <li>Advisory Coordinating Boards</li>
          </ul>
        </li>
        <li><strong>System Governance Impact</strong>:
          <ul>
            <li>System-level policy constraints</li>
            <li>Resource allocation processes</li>
            <li>Shared services</li>
            <li>Approval requirements</li>
            <li>System leadership as intermediary</li>
          </ul>
        </li>
        <li><strong>State Legislative Influence</strong>:
          <ul>
            <li>Budget appropriations</li>
            <li>Performance funding</li>
            <li>Board composition requirements</li>
            <li>Policy mandates</li>
            <li>Capital project approval</li>
          </ul>
        </li>
        <li><strong>State Executive Branch</strong>:
          <ul>
            <li>Board appointments</li>
            <li>Budget recommendations</li>
            <li>Executive orders</li>
            <li>Regulatory oversight</li>
            <li>State agency policies</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide9",title:"Federal Government Influence",content:`
      <h3>Federal Government Influence</h3>
      <ul>
        <li><strong>Financial Leverage</strong>:
          <ul>
            <li>Financial aid program requirements</li>
            <li>Research funding compliance</li>
            <li>Grant program specifications</li>
            <li>Tax policy impacts</li>
          </ul>
        </li>
        <li><strong>Regulatory Requirements</strong>:
          <ul>
            <li>Title IX and OCR enforcement</li>
            <li>ADA compliance</li>
            <li>Research regulations</li>
            <li>Financial responsibility standards</li>
            <li>Consumer information requirements</li>
            <li>Clery Act reporting</li>
          </ul>
        </li>
        <li><strong>Accountability Initiatives</strong>:
          <ul>
            <li>College Scorecard</li>
            <li>Gainful employment regulations</li>
            <li>State authorization requirements</li>
            <li>Accreditation recognition</li>
          </ul>
        </li>
        <li><strong>Legal Framework</strong>:
          <ul>
            <li>Supreme Court decisions</li>
            <li>Department of Education interpretations</li>
            <li>Congressional oversight</li>
            <li>Federal court rulings</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide10",title:"Donor and Philanthropic Influence",content:`
      <h3>Donor and Philanthropic Influence</h3>
      <ul>
        <li><strong>Types of Donor Influence</strong>:
          <ul>
            <li>Major gifts (capital, endowed positions)</li>
            <li>Foundation support (strategic initiatives)</li>
            <li>Annual giving (operational support)</li>
            <li>Corporate partnerships (research, workforce)</li>
          </ul>
        </li>
        <li><strong>Governance Implications</strong>:
          <ul>
            <li>Gift agreements with requirements</li>
            <li>Donor representation on boards/committees</li>
            <li>Naming rights considerations</li>
            <li>Investment policies</li>
            <li>Advancement priorities</li>
            <li>Potential mission drift</li>
          </ul>
        </li>
        <li><strong>Governance Challenges</strong>:
          <ul>
            <li>Balancing donor wishes with academic freedom</li>
            <li>Managing conflicts of interest</li>
            <li>Ensuring transparency</li>
            <li>Maintaining institutional autonomy</li>
            <li>Addressing controversial donors</li>
            <li>Aligning advancement with priorities</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide11",title:"Alumni Influence",content:`
      <h3>Alumni Influence</h3>
      <ul>
        <li><strong>Formal Governance Roles</strong>:
          <ul>
            <li>Board representation</li>
            <li>Alumni association leadership</li>
            <li>Advisory councils</li>
            <li>Presidential search participation</li>
            <li>Advancement campaign leadership</li>
          </ul>
        </li>
        <li><strong>Informal Influence Channels</strong>:
          <ul>
            <li>Political advocacy</li>
            <li>Social media commentary</li>
            <li>Mentoring and career support</li>
            <li>Hiring practices</li>
            <li>Legacy admissions</li>
            <li>Campus events</li>
          </ul>
        </li>
        <li><strong>Governance Challenges</strong>:
          <ul>
            <li>Balancing tradition with change</li>
            <li>Managing divergent generational interests</li>
            <li>Addressing concerns while maintaining direction</li>
            <li>Leveraging expertise without undue influence</li>
            <li>Communication about controversial decisions</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide12",title:"Political Context",content:`
      <h3>Navigating Political Contexts</h3>
      <ul>
        <li><strong>Political Polarization</strong>:
          <ul>
            <li>Partisan divides on higher education</li>
            <li>Ideological scrutiny of curriculum</li>
            <li>Culture war issues</li>
            <li>Declining bipartisan support</li>
            <li>Regional political variations</li>
          </ul>
        </li>
        <li><strong>Public Perception Challenges</strong>:
          <ul>
            <li>Affordability concerns</li>
            <li>Workforce relevance questions</li>
            <li>Efficiency skepticism</li>
            <li>Declining trust in expertise</li>
            <li>Controversy-focused media coverage</li>
          </ul>
        </li>
        <li><strong>Political Engagement Strategies</strong>:
          <ul>
            <li>Government relations offices</li>
            <li>Coalition-building</li>
            <li>Data-driven impact demonstration</li>
            <li>Strategic communication</li>
            <li>Bipartisan engagement</li>
            <li>Community service emphasis</li>
          </ul>
        </li>
        <li><strong>Governance Implications</strong>:
          <ul>
            <li>Political board appointments</li>
            <li>Policy pressure</li>
            <li>Resource allocation impacts</li>
            <li>Strategic planning considerations</li>
            <li>Crisis management needs</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide13",title:"Balancing External Influences",content:`
      <h3>Managing Multiple External Stakeholders</h3>
      <ul>
        <li><strong>Competing Demands</strong>:
          <ul>
            <li>State efficiency vs. accreditor quality requirements</li>
            <li>Donor priorities vs. faculty-driven planning</li>
            <li>Political pressures vs. institutional autonomy</li>
            <li>Alumni tradition vs. innovation needs</li>
            <li>Federal compliance vs. administrative simplification</li>
          </ul>
        </li>
        <li><strong>Strategic Approaches</strong>:
          <ul>
            <li>Stakeholder mapping and prioritization</li>
            <li>Proactive communication</li>
            <li>Clear influence boundaries</li>
            <li>Transparent decision processes</li>
            <li>Consistent mission focus</li>
            <li>Diversified resource base</li>
          </ul>
        </li>
        <li><strong>Governance Structures</strong>:
          <ul>
            <li>Advisory groups connecting stakeholders</li>
            <li>External relations committees</li>
            <li>Coordinating administrative offices</li>
            <li>Faculty involvement in partnerships</li>
            <li>Regular impact assessment</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide14",title:"Evolving Accountability Landscape",content:`
      <h3>The Evolving Accountability Landscape</h3>
      <ul>
        <li><strong>Historical Context</strong>:
          <ul>
            <li>Peer review and professional norms</li>
            <li>Limited external oversight</li>
            <li>Trust-based social contract</li>
            <li>Self-regulated academic quality</li>
            <li>Minimal reporting requirements</li>
          </ul>
        </li>
        <li><strong>Shift to Contemporary Accountability</strong>:
          <ul>
            <li>Growing public investment and scrutiny</li>
            <li>Consumer protection concerns</li>
            <li>Assessment movement</li>
            <li>Performance funding initiatives</li>
            <li>Federal regulation and disclosure</li>
            <li>Market accountability through rankings</li>
            <li>Social media enabling public scrutiny</li>
          </ul>
        </li>
        <li><strong>Current Environment</strong>:
          <ul>
            <li>Multiple, sometimes conflicting demands</li>
            <li>Quantitative metrics emphasis</li>
            <li>Greater transparency expectations</li>
            <li>Outcomes focus</li>
            <li>Self-regulation skepticism</li>
            <li>Sophisticated data capabilities</li>
            <li>Growing compliance burden</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide15",title:"Multiple Accountability Relationships",content:`
      <h3>Accountability to Multiple Stakeholders</h3>
      <ul>
        <li><strong>Government Accountability</strong>:
          <ul>
            <li>Federal: Compliance, financial aid, research integrity</li>
            <li>State: Efficient use of funds, workforce needs</li>
            <li>Local: Community impact, partnerships</li>
          </ul>
        </li>
        <li><strong>Market Accountability</strong>:
          <ul>
            <li>Students/Families: Quality, outcomes, value</li>
            <li>Employers: Graduate preparation, skills</li>
            <li>Donors: Gift stewardship, impact</li>
          </ul>
        </li>
        <li><strong>Professional Accountability</strong>:
          <ul>
            <li>Accreditors: Quality, stability, mission</li>
            <li>Disciplinary Associations: Program standards</li>
            <li>Higher Education Associations: Best practices</li>
          </ul>
        </li>
        <li><strong>Public Accountability</strong>:
          <ul>
            <li>Media: Transparency, ethical conduct</li>
            <li>Community Partners: Engagement, accessibility</li>
            <li>General Public: Tax advantage justification</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide16",title:"Domains of Accountability",content:`
      <h3>Accountability Domains</h3>
      <ul>
        <li><strong>Financial Accountability</strong>:
          <ul>
            <li>Resource stewardship</li>
            <li>Accurate reporting</li>
            <li>Internal controls</li>
            <li>Sustainable models</li>
            <li>Efficient operations</li>
            <li>Funding restriction compliance</li>
          </ul>
        </li>
        <li><strong>Educational Accountability</strong>:
          <ul>
            <li>Learning outcomes</li>
            <li>Completion rates</li>
            <li>Post-graduation outcomes</li>
            <li>Educational quality</li>
            <li>Curricular relevance</li>
            <li>Faculty qualifications</li>
          </ul>
        </li>
        <li><strong>Mission Accountability</strong>:
          <ul>
            <li>Activity-mission alignment</li>
            <li>Service to intended populations</li>
            <li>Distinctive contribution</li>
            <li>Public purpose fulfillment</li>
            <li>Core value preservation</li>
            <li>Strategic goal achievement</li>
          </ul>
        </li>
        <li><strong>Ethical and Legal Accountability</strong>:
          <ul>
            <li>Operational integrity</li>
            <li>Fair treatment</li>
            <li>Responsible citizenship</li>
            <li>Ethical practices</li>
            <li>Compliance with laws</li>
            <li>Due process</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide17",title:"Accountability Mechanisms",content:`
      <h3>Accountability Mechanisms</h3>
      <ul>
        <li><strong>External Review Processes</strong>:
          <ul>
            <li>Accreditation</li>
            <li>Government audits</li>
            <li>Program evaluations</li>
            <li>Financial audits</li>
            <li>Specialized reviews</li>
          </ul>
        </li>
        <li><strong>Internal Assessment</strong>:
          <ul>
            <li>Institutional effectiveness programs</li>
            <li>Learning outcomes assessment</li>
            <li>Program review</li>
            <li>Administrative unit review</li>
            <li>Performance evaluation</li>
            <li>Internal audit</li>
          </ul>
        </li>
        <li><strong>Transparency and Disclosure</strong>:
          <ul>
            <li>Required reporting</li>
            <li>Voluntary data initiatives</li>
            <li>Public dashboards</li>
            <li>Annual reports</li>
            <li>Consumer information</li>
            <li>Open meetings</li>
          </ul>
        </li>
        <li><strong>Stakeholder Engagement</strong>:
          <ul>
            <li>Advisory boards</li>
            <li>Employer feedback</li>
            <li>Alumni surveys</li>
            <li>Community forums</li>
            <li>Student satisfaction assessment</li>
            <li>Climate surveys</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide18",title:"Transparency and Ethics",content:`
      <h3>Transparency and Ethical Considerations</h3>
      <ul>
        <li><strong>Benefits of Transparency</strong>:
          <ul>
            <li>Builds stakeholder trust</li>
            <li>Enables informed decisions</li>
            <li>Reduces speculation</li>
            <li>Creates improvement incentives</li>
            <li>Demonstrates public service commitment</li>
            <li>Supports shared governance</li>
          </ul>
        </li>
        <li><strong>Legitimate Limits</strong>:
          <ul>
            <li>Personnel privacy</li>
            <li>Student privacy (FERPA)</li>
            <li>Confidential donor arrangements</li>
            <li>Proprietary partnership information</li>
            <li>Legal strategy</li>
            <li>Early-stage planning</li>
          </ul>
        </li>
        <li><strong>Ethical Principles</strong>:
          <ul>
            <li>Proactive important disclosure</li>
            <li>Accessible complex data presentation</li>
            <li>Context for statistics</li>
            <li>Limitation acknowledgment</li>
            <li>Consistent standards</li>
            <li>Appropriate timing</li>
          </ul>
        </li>
        <li><strong>Governance Implications</strong>:
          <ul>
            <li>Clear information policies</li>
            <li>Regular disclosure review</li>
            <li>Privacy training</li>
            <li>Stakeholder education</li>
            <li>Deliberation-transparency balance</li>
            <li>Attention to disclosure consequences</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide19",title:"Balancing Accountability and Autonomy",content:`
      <h3>Accountability and Autonomy Balance</h3>
      <ul>
        <li><strong>The Case for Autonomy</strong>:
          <ul>
            <li>Academic freedom protection</li>
            <li>Innovation through independence</li>
            <li>Professional expertise for complex judgments</li>
            <li>Long-term mission vs. short-term metrics</li>
            <li>Diverse missions requiring contextual evaluation</li>
            <li>Resource diversion from compliance</li>
          </ul>
        </li>
        <li><strong>The Case for Accountability</strong>:
          <ul>
            <li>Public resource oversight</li>
            <li>Student interest protection</li>
            <li>External quality validation</li>
            <li>Self-regulation limitations</li>
            <li>Societal needs shaping priorities</li>
            <li>Improvement through feedback</li>
          </ul>
        </li>
        <li><strong>Governance Approaches</strong>:
          <ul>
            <li>Principle-based accountability</li>
            <li>Mission-centered evaluation</li>
            <li>Peer-based review</li>
            <li>Streamlined reporting</li>
            <li>Outcomes focus</li>
            <li>Differentiated accountability</li>
            <li>Stakeholder engagement in design</li>
          </ul>
        </li>
        <li><strong>Institutional Strategies</strong>:
          <ul>
            <li>Proactive self-assessment</li>
            <li>Strategic outcome communication</li>
            <li>Policymaker engagement</li>
            <li>Peer collaboration on measures</li>
            <li>Data capacity investment</li>
            <li>Accountability-governance integration</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide20",title:"Contemporary Accountability Challenges",content:`
      <h3>Emerging Accountability Issues</h3>
      <ul>
        <li><strong>Data Privacy and Security</strong>:
          <ul>
            <li>Student data protection</li>
            <li>Ethical predictive analytics</li>
            <li>Sensitive information sharing</li>
            <li>International regulations</li>
            <li>Cybersecurity threats</li>
          </ul>
        </li>
        <li><strong>Equity-Focused Accountability</strong>:
          <ul>
            <li>Disaggregated outcomes data</li>
            <li>Opportunity gap attention</li>
            <li>Inclusive excellence frameworks</li>
            <li>Community impact</li>
            <li>Representation in leadership</li>
          </ul>
        </li>
        <li><strong>Non-Traditional Education</strong>:
          <ul>
            <li>Online/hybrid delivery</li>
            <li>Alternative credentials</li>
            <li>Competency-based approaches</li>
            <li>Public-private partnerships</li>
            <li>Corporate providers</li>
          </ul>
        </li>
        <li><strong>Holistic Outcomes</strong>:
          <ul>
            <li>Beyond employment metrics</li>
            <li>Civic engagement</li>
            <li>Well-being and development</li>
            <li>Social mobility</li>
            <li>Long-term impacts</li>
          </ul>
        </li>
        <li><strong>Trust and Legitimacy</strong>:
          <ul>
            <li>Declining public confidence</li>
            <li>Political polarization effects</li>
            <li>Social media amplification</li>
            <li>Accessibility-excellence balance</li>
            <li>Value proposition demonstration</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide21",title:"Case Study 2 Overview",content:`
      <h3>Case Study 2: Navigating a Governance Crisis</h3>
      <ul>
        <li><strong>Veridian University</strong>:
          <ul>
            <li>Mid-sized public university</li>
            <li>Board makes controversial decision without consultation</li>
            <li>Faculty vote of no confidence</li>
            <li>Student protests</li>
            <li>Negative media coverage</li>
            <li>Threatened reputation and stability</li>
          </ul>
        </li>
        <li><strong>Case Elements</strong>:
          <ul>
            <li>University background and governance structure</li>
            <li>Controversial decision details</li>
            <li>Stakeholder reactions</li>
            <li>Current crisis state</li>
            <li>Key figure perspectives</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide22",title:"Key Dilemmas in the Case",content:`
      <h3>Key Case Dilemmas</h3>
      <ul>
        <li><strong>Governance Process Failures</strong>:
          <ul>
            <li>What breakdowns contributed to crisis?</li>
            <li>How could they have been prevented?</li>
          </ul>
        </li>
        <li><strong>Stakeholder Management</strong>:
          <ul>
            <li>How to engage different perspectives?</li>
            <li>Balancing competing interests?</li>
          </ul>
        </li>
        <li><strong>Communication and Transparency</strong>:
          <ul>
            <li>What information to share?</li>
            <li>With whom, when, and how?</li>
          </ul>
        </li>
        <li><strong>Leadership Responsibilities</strong>:
          <ul>
            <li>Appropriate board, president, faculty roles?</li>
            <li>Who should take what actions?</li>
          </ul>
        </li>
        <li><strong>Short-term vs. Long-term Solutions</strong>:
          <ul>
            <li>Immediate crisis management?</li>
            <li>Structural governance reforms?</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide23",title:"Analytical Approach",content:`
      <h3>Case Analysis Approach</h3>
      <ol>
        <li>Identify specific governance issues contributing to crisis</li>
        <li>Analyze roles and interests of key stakeholders</li>
        <li>Evaluate ethical implications of decisions and responses</li>
        <li>Propose short-term actions for immediate crisis</li>
        <li>Recommend long-term governance reforms</li>
      </ol>
    `},{id:"m2s2-slide24",title:"Connection to Module Concepts",content:`
      <h3>Connection to Module Concepts</h3>
      <ul>
        <li><strong>Governance Models</strong>: How different models might have prevented/mitigated crisis</li>
        <li><strong>Board-President-Faculty Relationships</strong>: How key relationship dynamics contributed or could help resolve</li>
        <li><strong>Student Involvement</strong>: Appropriate student roles in addressing crisis</li>
        <li><strong>External Stakeholder Influence</strong>: How external constituencies affect situation and engagement strategies</li>
        <li><strong>Accountability and Transparency</strong>: Information sharing approaches and trust rebuilding</li>
        <li><strong>Academic Freedom and Shared Governance</strong>: Tensions between board authority and academic self-governance</li>
      </ul>
    `},{id:"m2s2-slide25",title:"Case Study Process",content:`
      <h3>Case Study Process</h3>
      <ul>
        <li>Complete case document provided after session</li>
        <li>Analysis due end of week (before Module 3)</li>
        <li>Target length: 1200-1800 words</li>
        <li>Demonstrate Module 2 concept understanding</li>
        <li>Provide thoughtful, evidence-based recommendations</li>
        <li>Rubric will assess:
          <ul>
            <li>Governance issue identification</li>
            <li>Stakeholder analysis</li>
            <li>Ethical reasoning</li>
            <li>Practical short-term recommendations</li>
            <li>Strategic long-term recommendations</li>
            <li>Professional communication</li>
          </ul>
        </li>
      </ul>
    `},{id:"m2s2-slide26",title:"Key Themes",content:`
      <h3>Key Session Themes</h3>
      <ul>
        <li><strong>Stakeholder Complexity</strong>: Multiple stakeholders with different, sometimes conflicting expectations require sophisticated governance approaches</li>
        <li><strong>Balancing Influences</strong>: External pressures must be balanced with core academic values and institutional autonomy</li>
        <li><strong>Accountability Dimensions</strong>: Financial, educational, mission, ethical, and legal accountability domains require integrated oversight</li>
        <li><strong>Transparency and Trust</strong>: Thoughtful communication, consistent values, and demonstrated integrity build essential stakeholder trust</li>
        <li><strong>Crisis Preparedness</strong>: Effective governance includes mechanisms for preventing, identifying, and addressing potential crises</li>
      </ul>
    `},{id:"m2s2-slide27",title:"Key Terms and Concepts",content:`
      <h3>Key Terms and Concepts</h3>
      <ul>
        <li>Student governance</li>
        <li>Accreditation requirements</li>
        <li>State governance models</li>
        <li>System governance</li>
        <li>Federal regulatory compliance</li>
        <li>Donor influence</li>
        <li>Alumni engagement</li>
        <li>Political context</li>
        <li>Accountability relationships</li>
        <li>Transparency</li>
        <li>Institutional autonomy</li>
        <li>Stakeholder management</li>
        <li>Governance crisis</li>
        <li>External influence</li>
        <li>Ethical governance</li>
      </ul>
    `},{id:"m2s2-slide28",title:"References",content:`
      <h3>References</h3>
      <ul>
        <li>Association of Governing Boards. (2017). AGB board of directors' statement on governing board accountability.</li>
        <li>Bahls, S. C. (2014). Shared governance in times of change: A practical guide for universities and colleges.</li>
        <li>Bok, D. (2013). Higher education in America.</li>
        <li>Burke, J. C. (2005). Achieving accountability in higher education: Balancing public, academic, and market demands.</li>
        <li>Eckel, P. D., & Kezar, A. J. (2016). The intersecting authority of boards, presidents, and faculty.</li>
        <li>Ewell, P. T. (2009). Assessment, accountability, and improvement: Revisiting the tension.</li>
        <li>Kelchen, R. (2018). Higher education accountability.</li>
        <li>Kezar, A. (2005). Consequences of radical change in governance: A grounded theory approach.</li>
        <li>May, W. P. (2010). The board's role in crisis management.</li>
        <li>Mortimer, K. P., & Sathre, C. O. (2007). The art and politics of academic governance.</li>
      </ul>
    `},{id:"m2s2-slide29",title:"Next Session Preview",content:`
      <h3>Next Session</h3>
      <h2>Module 3, Session 1: Foundations of Strategic Planning & Environmental Analysis</h2>
      <ul>
        <li>The Rationale for Strategic Planning in Higher Education</li>
        <li>The Strategic Planning Cycle: Models and Frameworks</li>
        <li>Mission, Vision, and Values: The Foundation of Planning</li>
        <li>Environmental Scanning: External Trends and Forces</li>
        <li>Internal Assessment: Institutional Strengths and Weaknesses</li>
      </ul>
    `}],Kv=()=>{const[o,f]=N.useState(0),h=jn(),c=qf.length,v=qf[o],E=N.useCallback(()=>{f(D=>Math.min(D+1,c-1))},[c]),C=N.useCallback(()=>{f(D=>Math.max(D-1,0))},[]);return N.useEffect(()=>{const D=T=>{T.key==="ArrowRight"?E():T.key==="ArrowLeft"?C():T.key==="Escape"&&h("/module/2")};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[E,C,h]),v?r.jsxs("div",{className:"slideshow-container",children:[r.jsxs("div",{className:"slide-content-wrapper",children:[r.jsxs("header",{className:"slide-header",children:[r.jsx("h1",{className:"slide-title",children:v.title}),v.subtitle&&r.jsx("h2",{className:"slide-subtitle",children:v.subtitle})]}),r.jsx("div",{className:"slide-actual-content",dangerouslySetInnerHTML:{__html:v.content}})]}),r.jsxs("div",{className:"slideshow-controls",children:[r.jsx("button",{onClick:C,disabled:o===0,children:"← Previous"}),r.jsxs("span",{className:"slide-indicator",children:["Slide ",o+1," of ",c]}),r.jsx("button",{onClick:E,disabled:o===c-1,children:"Next →"})]}),r.jsx("div",{style:{textAlign:"center",padding:"10px",background:"#e9ecef"},children:r.jsx(Re,{to:"/module/2",style:{fontSize:"0.9rem"},children:"Back to Module 2 Overview"})})]}):r.jsx("div",{className:"container",children:"Slide data not found."})},kv=()=>{const{pathname:o}=Rt();return N.useEffect(()=>{window.scrollTo(0,0)},[o]),null},Jv=()=>{const o=Rt();N.useEffect(()=>{const f=setTimeout(()=>{const h=document.querySelectorAll(".animate-on-scroll:not(.is-visible)");if(h.length===0)return;const c=new IntersectionObserver(v=>{v.forEach(E=>{E.isIntersecting&&(E.target.classList.add("is-visible"),c.unobserve(E.target))})},{threshold:.1});return h.forEach(v=>c.observe(v)),()=>{h.forEach(v=>{document.body.contains(v)&&c.unobserve(v)}),c.disconnect()}},50);return()=>clearTimeout(f)},[o.pathname])},Fv=()=>(Jv(),r.jsxs(r.Fragment,{children:[r.jsx(kv,{}),r.jsx(wv,{}),r.jsx("div",{style:{flexGrow:1,display:"flex",flexDirection:"column"},children:r.jsxs(Tv,{children:[r.jsx(Ve,{path:"/",element:r.jsx(qv,{})}),r.jsx(Ve,{path:"/syllabus",element:r.jsx(Lv,{})}),r.jsx(Ve,{path:"/module/1",element:r.jsx(Yv,{})}),r.jsx(Ve,{path:"/module/1/session/1/slides",element:r.jsx(Qv,{})}),r.jsx(Ve,{path:"/module/1/session/2/slides",element:r.jsx(Xv,{})}),r.jsx(Ve,{path:"/module/2",element:r.jsx(Vv,{})}),r.jsx(Ve,{path:"/module/2/session/1/slides",element:r.jsx(Zv,{})}),r.jsx(Ve,{path:"/module/2/session/2/slides",element:r.jsx(Kv,{})})]})}),r.jsx("footer",{style:{backgroundColor:"var(--clr-accent)",color:"var(--clr-text-on-dark)",padding:"1.5rem",textAlign:"center",marginTop:"auto"},children:r.jsx("p",{children:"© 2025 maoude. All rights reserved. Higher Ed Management Course."})})]}));_m.createRoot(document.getElementById("root")).render(r.jsx(Yf.StrictMode,{children:r.jsx(jv,{children:r.jsx(Fv,{})})}));
