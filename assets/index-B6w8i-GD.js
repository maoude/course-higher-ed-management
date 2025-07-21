function Mm(u,f){for(var h=0;h<f.length;h++){const r=f[h];if(typeof r!="string"&&!Array.isArray(r)){for(const p in r)if(p!=="default"&&!(p in u)){const x=Object.getOwnPropertyDescriptor(r,p);x&&Object.defineProperty(u,p,x.get?x:{enumerable:!0,get:()=>r[p]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))r(p);new MutationObserver(p=>{for(const x of p)if(x.type==="childList")for(const C of x.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&r(C)}).observe(document,{childList:!0,subtree:!0});function h(p){const x={};return p.integrity&&(x.integrity=p.integrity),p.referrerPolicy&&(x.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?x.credentials="include":p.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function r(p){if(p.ep)return;p.ep=!0;const x=h(p);fetch(p.href,x)}})();function Vf(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var du={exports:{}},Mn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function zm(){if(yf)return Mn;yf=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function h(r,p,x){var C=null;if(x!==void 0&&(C=""+x),p.key!==void 0&&(C=""+p.key),"key"in p){x={};for(var D in p)D!=="key"&&(x[D]=p[D])}else x=p;return p=x.ref,{$$typeof:u,type:r,key:C,ref:p!==void 0?p:null,props:x}}return Mn.Fragment=f,Mn.jsx=h,Mn.jsxs=h,Mn}var bf;function Rm(){return bf||(bf=1,du.exports=zm()),du.exports}var c=Rm(),fu={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function Dm(){if(Sf)return J;Sf=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),U=Symbol.iterator;function L(g){return g===null||typeof g!="object"?null:(g=U&&g[U]||g["@@iterator"],typeof g=="function"?g:null)}var ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,le={};function X(g,O,B){this.props=g,this.context=O,this.refs=le,this.updater=B||ne}X.prototype.isReactComponent={},X.prototype.setState=function(g,O){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,O,"setState")},X.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function W(){}W.prototype=X.prototype;function de(g,O,B){this.props=g,this.context=O,this.refs=le,this.updater=B||ne}var te=de.prototype=new W;te.constructor=de,ie(te,X.prototype),te.isPureReactComponent=!0;var Ee=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Pe=Object.prototype.hasOwnProperty;function We(g,O,B,H,Y,se){return B=se.ref,{$$typeof:u,type:g,key:O,ref:B!==void 0?B:null,props:se}}function Ie(g,O){return We(g.type,O,void 0,void 0,void 0,g.props)}function xi(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function Ll(g){var O={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(B){return O[B]})}var Ri=/\/+/g;function Ge(g,O){return typeof g=="object"&&g!==null&&g.key!=null?Ll(""+g.key):O.toString(36)}function vl(){}function yl(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(vl,vl):(g.status="pending",g.then(function(O){g.status==="pending"&&(g.status="fulfilled",g.value=O)},function(O){g.status==="pending"&&(g.status="rejected",g.reason=O)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function qe(g,O,B,H,Y){var se=typeof g;(se==="undefined"||se==="boolean")&&(g=null);var K=!1;if(g===null)K=!0;else switch(se){case"bigint":case"string":case"number":K=!0;break;case"object":switch(g.$$typeof){case u:case f:K=!0;break;case w:return K=g._init,qe(K(g._payload),O,B,H,Y)}}if(K)return Y=Y(g),K=H===""?"."+Ge(g,0):H,Ee(Y)?(B="",K!=null&&(B=K.replace(Ri,"$&/")+"/"),qe(Y,O,B,"",function(Vi){return Vi})):Y!=null&&(xi(Y)&&(Y=Ie(Y,B+(Y.key==null||g&&g.key===Y.key?"":(""+Y.key).replace(Ri,"$&/")+"/")+K)),O.push(Y)),1;K=0;var $e=H===""?".":H+":";if(Ee(g))for(var ye=0;ye<g.length;ye++)H=g[ye],se=$e+Ge(H,ye),K+=qe(H,O,B,se,Y);else if(ye=L(g),typeof ye=="function")for(g=ye.call(g),ye=0;!(H=g.next()).done;)H=H.value,se=$e+Ge(H,ye++),K+=qe(H,O,B,se,Y);else if(se==="object"){if(typeof g.then=="function")return qe(yl(g),O,B,H,Y);throw O=String(g),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return K}function z(g,O,B){if(g==null)return g;var H=[],Y=0;return qe(g,H,"","",function(se){return O.call(B,se,Y++)}),H}function _(g){if(g._status===-1){var O=g._result;O=O(),O.then(function(B){(g._status===0||g._status===-1)&&(g._status=1,g._result=B)},function(B){(g._status===0||g._status===-1)&&(g._status=2,g._result=B)}),g._status===-1&&(g._status=0,g._result=O)}if(g._status===1)return g._result.default;throw g._result}var k=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function me(){}return J.Children={map:z,forEach:function(g,O,B){z(g,function(){O.apply(this,arguments)},B)},count:function(g){var O=0;return z(g,function(){O++}),O},toArray:function(g){return z(g,function(O){return O})||[]},only:function(g){if(!xi(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},J.Component=X,J.Fragment=h,J.Profiler=p,J.PureComponent=de,J.StrictMode=r,J.Suspense=T,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,J.__COMPILER_RUNTIME={__proto__:null,c:function(g){return F.H.useMemoCache(g)}},J.cache=function(g){return function(){return g.apply(null,arguments)}},J.cloneElement=function(g,O,B){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=ie({},g.props),Y=g.key,se=void 0;if(O!=null)for(K in O.ref!==void 0&&(se=void 0),O.key!==void 0&&(Y=""+O.key),O)!Pe.call(O,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&O.ref===void 0||(H[K]=O[K]);var K=arguments.length-2;if(K===1)H.children=B;else if(1<K){for(var $e=Array(K),ye=0;ye<K;ye++)$e[ye]=arguments[ye+2];H.children=$e}return We(g.type,Y,void 0,void 0,se,H)},J.createContext=function(g){return g={$$typeof:C,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:x,_context:g},g},J.createElement=function(g,O,B){var H,Y={},se=null;if(O!=null)for(H in O.key!==void 0&&(se=""+O.key),O)Pe.call(O,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Y[H]=O[H]);var K=arguments.length-2;if(K===1)Y.children=B;else if(1<K){for(var $e=Array(K),ye=0;ye<K;ye++)$e[ye]=arguments[ye+2];Y.children=$e}if(g&&g.defaultProps)for(H in K=g.defaultProps,K)Y[H]===void 0&&(Y[H]=K[H]);return We(g,se,void 0,void 0,null,Y)},J.createRef=function(){return{current:null}},J.forwardRef=function(g){return{$$typeof:D,render:g}},J.isValidElement=xi,J.lazy=function(g){return{$$typeof:w,_payload:{_status:-1,_result:g},_init:_}},J.memo=function(g,O){return{$$typeof:y,type:g,compare:O===void 0?null:O}},J.startTransition=function(g){var O=F.T,B={};F.T=B;try{var H=g(),Y=F.S;Y!==null&&Y(B,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(me,k)}catch(se){k(se)}finally{F.T=O}},J.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},J.use=function(g){return F.H.use(g)},J.useActionState=function(g,O,B){return F.H.useActionState(g,O,B)},J.useCallback=function(g,O){return F.H.useCallback(g,O)},J.useContext=function(g){return F.H.useContext(g)},J.useDebugValue=function(){},J.useDeferredValue=function(g,O){return F.H.useDeferredValue(g,O)},J.useEffect=function(g,O,B){var H=F.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(g,O)},J.useId=function(){return F.H.useId()},J.useImperativeHandle=function(g,O,B){return F.H.useImperativeHandle(g,O,B)},J.useInsertionEffect=function(g,O){return F.H.useInsertionEffect(g,O)},J.useLayoutEffect=function(g,O){return F.H.useLayoutEffect(g,O)},J.useMemo=function(g,O){return F.H.useMemo(g,O)},J.useOptimistic=function(g,O){return F.H.useOptimistic(g,O)},J.useReducer=function(g,O,B){return F.H.useReducer(g,O,B)},J.useRef=function(g){return F.H.useRef(g)},J.useState=function(g){return F.H.useState(g)},J.useSyncExternalStore=function(g,O,B){return F.H.useSyncExternalStore(g,O,B)},J.useTransition=function(){return F.H.useTransition()},J.version="19.1.0",J}var xf;function xu(){return xf||(xf=1,fu.exports=Dm()),fu.exports}var N=xu();const kf=Vf(N),jm=Mm({__proto__:null,default:kf},[N]);var hu={exports:{}},zn={},gu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function Om(){return Af||(Af=1,function(u){function f(z,_){var k=z.length;z.push(_);e:for(;0<k;){var me=k-1>>>1,g=z[me];if(0<p(g,_))z[me]=_,z[k]=g,k=me;else break e}}function h(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var _=z[0],k=z.pop();if(k!==_){z[0]=k;e:for(var me=0,g=z.length,O=g>>>1;me<O;){var B=2*(me+1)-1,H=z[B],Y=B+1,se=z[Y];if(0>p(H,k))Y<g&&0>p(se,H)?(z[me]=se,z[Y]=k,me=Y):(z[me]=H,z[B]=k,me=B);else if(Y<g&&0>p(se,k))z[me]=se,z[Y]=k,me=Y;else break e}}return _}function p(z,_){var k=z.sortIndex-_.sortIndex;return k!==0?k:z.id-_.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;u.unstable_now=function(){return x.now()}}else{var C=Date,D=C.now();u.unstable_now=function(){return C.now()-D}}var T=[],y=[],w=1,U=null,L=3,ne=!1,ie=!1,le=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function Ee(z){for(var _=h(y);_!==null;){if(_.callback===null)r(y);else if(_.startTime<=z)r(y),_.sortIndex=_.expirationTime,f(T,_);else break;_=h(y)}}function F(z){if(le=!1,Ee(z),!ie)if(h(T)!==null)ie=!0,Pe||(Pe=!0,Ge());else{var _=h(y);_!==null&&qe(F,_.startTime-z)}}var Pe=!1,We=-1,Ie=5,xi=-1;function Ll(){return X?!0:!(u.unstable_now()-xi<Ie)}function Ri(){if(X=!1,Pe){var z=u.unstable_now();xi=z;var _=!0;try{e:{ie=!1,le&&(le=!1,de(We),We=-1),ne=!0;var k=L;try{i:{for(Ee(z),U=h(T);U!==null&&!(U.expirationTime>z&&Ll());){var me=U.callback;if(typeof me=="function"){U.callback=null,L=U.priorityLevel;var g=me(U.expirationTime<=z);if(z=u.unstable_now(),typeof g=="function"){U.callback=g,Ee(z),_=!0;break i}U===h(T)&&r(T),Ee(z)}else r(T);U=h(T)}if(U!==null)_=!0;else{var O=h(y);O!==null&&qe(F,O.startTime-z),_=!1}}break e}finally{U=null,L=k,ne=!1}_=void 0}}finally{_?Ge():Pe=!1}}}var Ge;if(typeof te=="function")Ge=function(){te(Ri)};else if(typeof MessageChannel<"u"){var vl=new MessageChannel,yl=vl.port2;vl.port1.onmessage=Ri,Ge=function(){yl.postMessage(null)}}else Ge=function(){W(Ri,0)};function qe(z,_){We=W(function(){z(u.unstable_now())},_)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(z){z.callback=null},u.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ie=0<z?Math.floor(1e3/z):5},u.unstable_getCurrentPriorityLevel=function(){return L},u.unstable_next=function(z){switch(L){case 1:case 2:case 3:var _=3;break;default:_=L}var k=L;L=_;try{return z()}finally{L=k}},u.unstable_requestPaint=function(){X=!0},u.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=L;L=z;try{return _()}finally{L=k}},u.unstable_scheduleCallback=function(z,_,k){var me=u.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?me+k:me):k=me,z){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=k+g,z={id:w++,callback:_,priorityLevel:z,startTime:k,expirationTime:g,sortIndex:-1},k>me?(z.sortIndex=k,f(y,z),h(T)===null&&z===h(y)&&(le?(de(We),We=-1):le=!0,qe(F,k-me))):(z.sortIndex=g,f(T,z),ie||ne||(ie=!0,Pe||(Pe=!0,Ge()))),z},u.unstable_shouldYield=Ll,u.unstable_wrapCallback=function(z){var _=L;return function(){var k=L;L=_;try{return z.apply(this,arguments)}finally{L=k}}}}(mu)),mu}var Ef;function wm(){return Ef||(Ef=1,gu.exports=Om()),gu.exports}var pu={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function Um(){if(Tf)return Qe;Tf=1;var u=xu();function f(T){var y="https://react.dev/errors/"+T;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)y+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+T+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var r={d:{f:h,r:function(){throw Error(f(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},p=Symbol.for("react.portal");function x(T,y,w){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:U==null?null:""+U,children:T,containerInfo:y,implementation:w}}var C=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(T,y){if(T==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Qe.createPortal=function(T,y){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(f(299));return x(T,y,null,w)},Qe.flushSync=function(T){var y=C.T,w=r.p;try{if(C.T=null,r.p=2,T)return T()}finally{C.T=y,r.p=w,r.d.f()}},Qe.preconnect=function(T,y){typeof T=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(T,y))},Qe.prefetchDNS=function(T){typeof T=="string"&&r.d.D(T)},Qe.preinit=function(T,y){if(typeof T=="string"&&y&&typeof y.as=="string"){var w=y.as,U=D(w,y.crossOrigin),L=typeof y.integrity=="string"?y.integrity:void 0,ne=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;w==="style"?r.d.S(T,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:U,integrity:L,fetchPriority:ne}):w==="script"&&r.d.X(T,{crossOrigin:U,integrity:L,fetchPriority:ne,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Qe.preinitModule=function(T,y){if(typeof T=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var w=D(y.as,y.crossOrigin);r.d.M(T,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(T)},Qe.preload=function(T,y){if(typeof T=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var w=y.as,U=D(w,y.crossOrigin);r.d.L(T,w,{crossOrigin:U,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Qe.preloadModule=function(T,y){if(typeof T=="string")if(y){var w=D(y.as,y.crossOrigin);r.d.m(T,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(T)},Qe.requestFormReset=function(T){r.d.r(T)},Qe.unstable_batchedUpdates=function(T,y){return T(y)},Qe.useFormState=function(T,y,w){return C.H.useFormState(T,y,w)},Qe.useFormStatus=function(){return C.H.useHostTransitionStatus()},Qe.version="19.1.0",Qe}var Cf;function Zf(){if(Cf)return pu.exports;Cf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),pu.exports=Um(),pu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function Nm(){if(Mf)return zn;Mf=1;var u=wm(),f=xu(),h=Zf();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var i=e,l=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(l=i.return),e=i.return;while(e)}return i.tag===3?l:null}function C(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function D(e){if(x(e)!==e)throw Error(r(188))}function T(e){var i=e.alternate;if(!i){if(i=x(e),i===null)throw Error(r(188));return i!==e?null:e}for(var l=e,t=i;;){var n=l.return;if(n===null)break;var a=n.alternate;if(a===null){if(t=n.return,t!==null){l=t;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===l)return D(n),e;if(a===t)return D(n),i;a=a.sibling}throw Error(r(188))}if(l.return!==t.return)l=n,t=a;else{for(var s=!1,o=n.child;o;){if(o===l){s=!0,l=n,t=a;break}if(o===t){s=!0,t=n,l=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===l){s=!0,l=a,t=n;break}if(o===t){s=!0,t=a,l=n;break}o=o.sibling}if(!s)throw Error(r(189))}}if(l.alternate!==t)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var w=Object.assign,U=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),ne=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),de=Symbol.for("react.consumer"),te=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),We=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),xi=Symbol.for("react.activity"),Ll=Symbol.for("react.memo_cache_sentinel"),Ri=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Ri&&e[Ri]||e["@@iterator"],typeof e=="function"?e:null)}var vl=Symbol.for("react.client.reference");function yl(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ie:return"Fragment";case X:return"Profiler";case le:return"StrictMode";case F:return"Suspense";case Pe:return"SuspenseList";case xi:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ne:return"Portal";case te:return(e.displayName||"Context")+".Provider";case de:return(e._context.displayName||"Context")+".Consumer";case Ee:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case We:return i=e.displayName||null,i!==null?i:yl(e.type)||"Memo";case Ie:i=e._payload,e=e._init;try{return yl(e(i))}catch{}}return null}var qe=Array.isArray,z=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},me=[],g=-1;function O(e){return{current:e}}function B(e){0>g||(e.current=me[g],me[g]=null,g--)}function H(e,i){g++,me[g]=e.current,e.current=i}var Y=O(null),se=O(null),K=O(null),$e=O(null);function ye(e,i){switch(H(K,i),H(se,e),H(Y,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?kd(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=kd(i),e=Zd(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Y),H(Y,e)}function Vi(){B(Y),B(se),B(K)}function Fa(e){e.memoizedState!==null&&H($e,e);var i=Y.current,l=Zd(i,e.type);i!==l&&(H(se,e),H(Y,l))}function wn(e){se.current===e&&(B(Y),B(se)),$e.current===e&&(B($e),xn._currentValue=k)}var Pa=Object.prototype.hasOwnProperty,Wa=u.unstable_scheduleCallback,Ia=u.unstable_cancelCallback,nh=u.unstable_shouldYield,ah=u.unstable_requestPaint,Ai=u.unstable_now,sh=u.unstable_getCurrentPriorityLevel,Cu=u.unstable_ImmediatePriority,Mu=u.unstable_UserBlockingPriority,Un=u.unstable_NormalPriority,oh=u.unstable_LowPriority,zu=u.unstable_IdlePriority,uh=u.log,rh=u.unstable_setDisableYieldValue,Rt=null,ei=null;function ki(e){if(typeof uh=="function"&&rh(e),ei&&typeof ei.setStrictMode=="function")try{ei.setStrictMode(Rt,e)}catch{}}var ii=Math.clz32?Math.clz32:fh,ch=Math.log,dh=Math.LN2;function fh(e){return e>>>=0,e===0?32:31-(ch(e)/dh|0)|0}var Nn=256,Hn=4194304;function bl(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _n(e,i,l){var t=e.pendingLanes;if(t===0)return 0;var n=0,a=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=t&134217727;return o!==0?(t=o&~a,t!==0?n=bl(t):(s&=o,s!==0?n=bl(s):l||(l=o&~e,l!==0&&(n=bl(l))))):(o=t&~a,o!==0?n=bl(o):s!==0?n=bl(s):l||(l=t&~e,l!==0&&(n=bl(l)))),n===0?0:i!==0&&i!==n&&(i&a)===0&&(a=n&-n,l=i&-i,a>=l||a===32&&(l&4194048)!==0)?i:n}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function hh(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(){var e=Nn;return Nn<<=1,(Nn&4194048)===0&&(Nn=256),e}function Du(){var e=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),e}function $a(e){for(var i=[],l=0;31>l;l++)i.push(e);return i}function jt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gh(e,i,l,t,n,a){var s=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var o=e.entanglements,d=e.expirationTimes,S=e.hiddenUpdates;for(l=s&~l;0<l;){var M=31-ii(l),j=1<<M;o[M]=0,d[M]=-1;var A=S[M];if(A!==null)for(S[M]=null,M=0;M<A.length;M++){var E=A[M];E!==null&&(E.lane&=-536870913)}l&=~j}t!==0&&ju(e,t,0),a!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=a&~(s&~i))}function ju(e,i,l){e.pendingLanes|=i,e.suspendedLanes&=~i;var t=31-ii(i);e.entangledLanes|=i,e.entanglements[t]=e.entanglements[t]|1073741824|l&4194090}function Ou(e,i){var l=e.entangledLanes|=i;for(e=e.entanglements;l;){var t=31-ii(l),n=1<<t;n&i|e[t]&i&&(e[t]|=i),l&=~n}}function es(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wu(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:ff(e.type))}function mh(e,i){var l=_.p;try{return _.p=e,i()}finally{_.p=l}}var Zi=Math.random().toString(36).slice(2),Le="__reactFiber$"+Zi,Ve="__reactProps$"+Zi,Yl="__reactContainer$"+Zi,ls="__reactEvents$"+Zi,ph="__reactListeners$"+Zi,vh="__reactHandles$"+Zi,Uu="__reactResources$"+Zi,Ot="__reactMarker$"+Zi;function ts(e){delete e[Le],delete e[Ve],delete e[ls],delete e[ph],delete e[vh]}function Ql(e){var i=e[Le];if(i)return i;for(var l=e.parentNode;l;){if(i=l[Yl]||l[Le]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(e=Pd(e);e!==null;){if(l=e[Le])return l;e=Pd(e)}return i}e=l,l=e.parentNode}return null}function Xl(e){if(e=e[Le]||e[Yl]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function wt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function Vl(e){var i=e[Uu];return i||(i=e[Uu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Oe(e){e[Ot]=!0}var Nu=new Set,Hu={};function Sl(e,i){kl(e,i),kl(e+"Capture",i)}function kl(e,i){for(Hu[e]=i,e=0;e<i.length;e++)Nu.add(i[e])}var yh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_u={},Bu={};function bh(e){return Pa.call(Bu,e)?!0:Pa.call(_u,e)?!1:yh.test(e)?Bu[e]=!0:(_u[e]=!0,!1)}function Bn(e,i,l){if(bh(i))if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var t=i.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+l)}}function Gn(e,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+l)}}function Di(e,i,l,t){if(t===null)e.removeAttribute(l);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(i,l,""+t)}}var ns,Gu;function Zl(e){if(ns===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);ns=i&&i[1]||"",Gu=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ns+e+Gu}var as=!1;function ss(e,i){if(!e||as)return"";as=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(i){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(E){var A=E}Reflect.construct(e,[],j)}else{try{j.call()}catch(E){A=E}e.call(j.prototype)}}else{try{throw Error()}catch(E){A=E}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(E){if(E&&A&&typeof E.stack=="string")return[E.stack,A.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=t.DetermineComponentFrameRoot(),s=a[0],o=a[1];if(s&&o){var d=s.split(`
`),S=o.split(`
`);for(n=t=0;t<d.length&&!d[t].includes("DetermineComponentFrameRoot");)t++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(t===d.length||n===S.length)for(t=d.length-1,n=S.length-1;1<=t&&0<=n&&d[t]!==S[n];)n--;for(;1<=t&&0<=n;t--,n--)if(d[t]!==S[n]){if(t!==1||n!==1)do if(t--,n--,0>n||d[t]!==S[n]){var M=`
`+d[t].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=t&&0<=n);break}}}finally{as=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Zl(l):""}function Sh(e){switch(e.tag){case 26:case 27:case 5:return Zl(e.type);case 16:return Zl("Lazy");case 13:return Zl("Suspense");case 19:return Zl("SuspenseList");case 0:case 15:return ss(e.type,!1);case 11:return ss(e.type.render,!1);case 1:return ss(e.type,!0);case 31:return Zl("Activity");default:return""}}function qu(e){try{var i="";do i+=Sh(e),e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function ri(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lu(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xh(e){var i=Lu(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),t=""+e[i];if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,a=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return n.call(this)},set:function(s){t=""+s,a.call(this,s)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function qn(e){e._valueTracker||(e._valueTracker=xh(e))}function Yu(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var l=i.getValue(),t="";return e&&(t=Lu(e)?e.checked?"true":"false":e.value),e=t,e!==l?(i.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ah=/[\n"\\]/g;function ci(e){return e.replace(Ah,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function os(e,i,l,t,n,a,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),i!=null?s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ri(i)):e.value!==""+ri(i)&&(e.value=""+ri(i)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),i!=null?us(e,s,ri(i)):l!=null?us(e,s,ri(l)):t!=null&&e.removeAttribute("value"),n==null&&a!=null&&(e.defaultChecked=!!a),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ri(o):e.removeAttribute("name")}function Qu(e,i,l,t,n,a,s,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),i!=null||l!=null){if(!(a!=="submit"&&a!=="reset"||i!=null))return;l=l!=null?""+ri(l):"",i=i!=null?""+ri(i):l,o||i===e.value||(e.value=i),e.defaultValue=i}t=t??n,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=o?e.checked:!!t,e.defaultChecked=!!t,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function us(e,i,l){i==="number"&&Ln(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Kl(e,i,l,t){if(e=e.options,i){i={};for(var n=0;n<l.length;n++)i["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=i.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&t&&(e[l].defaultSelected=!0)}else{for(l=""+ri(l),i=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}i!==null||e[n].disabled||(i=e[n])}i!==null&&(i.selected=!0)}}function Xu(e,i,l){if(i!=null&&(i=""+ri(i),i!==e.value&&(e.value=i),l==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=l!=null?""+ri(l):""}function Vu(e,i,l,t){if(i==null){if(t!=null){if(l!=null)throw Error(r(92));if(qe(t)){if(1<t.length)throw Error(r(93));t=t[0]}l=t}l==null&&(l=""),i=l}l=ri(i),e.defaultValue=l,t=e.textContent,t===l&&t!==""&&t!==null&&(e.value=t)}function Jl(e,i){if(i){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=i;return}}e.textContent=i}var Eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ku(e,i,l){var t=i.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?t?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":t?e.setProperty(i,l):typeof l!="number"||l===0||Eh.has(i)?i==="float"?e.cssFloat=l:e[i]=(""+l).trim():e[i]=l+"px"}function Zu(e,i,l){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,l!=null){for(var t in l)!l.hasOwnProperty(t)||i!=null&&i.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var n in i)t=i[n],i.hasOwnProperty(n)&&l[n]!==t&&ku(e,n,t)}else for(var a in i)i.hasOwnProperty(a)&&ku(e,a,i[a])}function rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ch=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yn(e){return Ch.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var cs=null;function ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,Pl=null;function Ku(e){var i=Xl(e);if(i&&(e=i.stateNode)){var l=e[Ve]||null;e:switch(e=i.stateNode,i.type){case"input":if(os(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),i=l.name,l.type==="radio"&&i!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ci(""+i)+'"][type="radio"]'),i=0;i<l.length;i++){var t=l[i];if(t!==e&&t.form===e.form){var n=t[Ve]||null;if(!n)throw Error(r(90));os(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(i=0;i<l.length;i++)t=l[i],t.form===e.form&&Yu(t)}break e;case"textarea":Xu(e,l.value,l.defaultValue);break e;case"select":i=l.value,i!=null&&Kl(e,!!l.multiple,i,!1)}}}var fs=!1;function Ju(e,i,l){if(fs)return e(i,l);fs=!0;try{var t=e(i);return t}finally{if(fs=!1,(Fl!==null||Pl!==null)&&(Ma(),Fl&&(i=Fl,e=Pl,Pl=Fl=null,Ku(i),e)))for(i=0;i<e.length;i++)Ku(e[i])}}function Ut(e,i){var l=e.stateNode;if(l===null)return null;var t=l[Ve]||null;if(t===null)return null;l=t[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,i,typeof l));return l}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=!1;if(ji)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{hs=!1}var Ki=null,gs=null,Qn=null;function Fu(){if(Qn)return Qn;var e,i=gs,l=i.length,t,n="value"in Ki?Ki.value:Ki.textContent,a=n.length;for(e=0;e<l&&i[e]===n[e];e++);var s=l-e;for(t=1;t<=s&&i[l-t]===n[a-t];t++);return Qn=n.slice(e,1<t?1-t:void 0)}function Xn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Vn(){return!0}function Pu(){return!1}function ke(e){function i(l,t,n,a,s){this._reactName=l,this._targetInst=n,this.type=t,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(l=e[o],this[o]=l?l(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vn:Pu,this.isPropagationStopped=Pu,this}return w(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),i}var xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=ke(xl),Ht=w({},xl,{view:0,detail:0}),Mh=ke(Ht),ms,ps,_t,Zn=w({},Ht,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_t&&(_t&&e.type==="mousemove"?(ms=e.screenX-_t.screenX,ps=e.screenY-_t.screenY):ps=ms=0,_t=e),ms)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),Wu=ke(Zn),zh=w({},Zn,{dataTransfer:0}),Rh=ke(zh),Dh=w({},Ht,{relatedTarget:0}),vs=ke(Dh),jh=w({},xl,{animationName:0,elapsedTime:0,pseudoElement:0}),Oh=ke(jh),wh=w({},xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uh=ke(wh),Nh=w({},xl,{data:0}),Iu=ke(Nh),Hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gh(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Bh[e])?!!i[e]:!1}function ys(){return Gh}var qh=w({},Ht,{key:function(e){if(e.key){var i=Hh[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Xn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?Xn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lh=ke(qh),Yh=w({},Zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$u=ke(Yh),Qh=w({},Ht,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Xh=ke(Qh),Vh=w({},xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=ke(Vh),Zh=w({},Zn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kh=ke(Zh),Jh=w({},xl,{newState:0,oldState:0}),Fh=ke(Jh),Ph=[9,13,27,32],bs=ji&&"CompositionEvent"in window,Bt=null;ji&&"documentMode"in document&&(Bt=document.documentMode);var Wh=ji&&"TextEvent"in window&&!Bt,er=ji&&(!bs||Bt&&8<Bt&&11>=Bt),ir=" ",lr=!1;function tr(e,i){switch(e){case"keyup":return Ph.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wl=!1;function Ih(e,i){switch(e){case"compositionend":return nr(i);case"keypress":return i.which!==32?null:(lr=!0,ir);case"textInput":return e=i.data,e===ir&&lr?null:e;default:return null}}function $h(e,i){if(Wl)return e==="compositionend"||!bs&&tr(e,i)?(e=Fu(),Qn=gs=Ki=null,Wl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return er&&i.locale!=="ko"?null:i.data;default:return null}}var eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!eg[e.type]:i==="textarea"}function sr(e,i,l,t){Fl?Pl?Pl.push(t):Pl=[t]:Fl=t,i=wa(i,"onChange"),0<i.length&&(l=new kn("onChange","change",null,l,t),e.push({event:l,listeners:i}))}var Gt=null,qt=null;function ig(e){Ld(e,0)}function Kn(e){var i=wt(e);if(Yu(i))return e}function or(e,i){if(e==="change")return i}var ur=!1;if(ji){var Ss;if(ji){var xs="oninput"in document;if(!xs){var rr=document.createElement("div");rr.setAttribute("oninput","return;"),xs=typeof rr.oninput=="function"}Ss=xs}else Ss=!1;ur=Ss&&(!document.documentMode||9<document.documentMode)}function cr(){Gt&&(Gt.detachEvent("onpropertychange",dr),qt=Gt=null)}function dr(e){if(e.propertyName==="value"&&Kn(qt)){var i=[];sr(i,qt,e,ds(e)),Ju(ig,i)}}function lg(e,i,l){e==="focusin"?(cr(),Gt=i,qt=l,Gt.attachEvent("onpropertychange",dr)):e==="focusout"&&cr()}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kn(qt)}function ng(e,i){if(e==="click")return Kn(i)}function ag(e,i){if(e==="input"||e==="change")return Kn(i)}function sg(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var li=typeof Object.is=="function"?Object.is:sg;function Lt(e,i){if(li(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var l=Object.keys(e),t=Object.keys(i);if(l.length!==t.length)return!1;for(t=0;t<l.length;t++){var n=l[t];if(!Pa.call(i,n)||!li(e[n],i[n]))return!1}return!0}function fr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hr(e,i){var l=fr(e);e=0;for(var t;l;){if(l.nodeType===3){if(t=e+l.textContent.length,e<=i&&t>=i)return{node:l,offset:i-e};e=t}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=fr(l)}}function gr(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?gr(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Ln(e.document);i instanceof e.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)e=i.contentWindow;else break;i=Ln(e.document)}return i}function As(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var og=ji&&"documentMode"in document&&11>=document.documentMode,Il=null,Es=null,Yt=null,Ts=!1;function pr(e,i,l){var t=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ts||Il==null||Il!==Ln(t)||(t=Il,"selectionStart"in t&&As(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Yt&&Lt(Yt,t)||(Yt=t,t=wa(Es,"onSelect"),0<t.length&&(i=new kn("onSelect","select",null,i,l),e.push({event:i,listeners:t}),i.target=Il)))}function Al(e,i){var l={};return l[e.toLowerCase()]=i.toLowerCase(),l["Webkit"+e]="webkit"+i,l["Moz"+e]="moz"+i,l}var $l={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionrun:Al("Transition","TransitionRun"),transitionstart:Al("Transition","TransitionStart"),transitioncancel:Al("Transition","TransitionCancel"),transitionend:Al("Transition","TransitionEnd")},Cs={},vr={};ji&&(vr=document.createElement("div").style,"AnimationEvent"in window||(delete $l.animationend.animation,delete $l.animationiteration.animation,delete $l.animationstart.animation),"TransitionEvent"in window||delete $l.transitionend.transition);function El(e){if(Cs[e])return Cs[e];if(!$l[e])return e;var i=$l[e],l;for(l in i)if(i.hasOwnProperty(l)&&l in vr)return Cs[e]=i[l];return e}var yr=El("animationend"),br=El("animationiteration"),Sr=El("animationstart"),ug=El("transitionrun"),rg=El("transitionstart"),cg=El("transitioncancel"),xr=El("transitionend"),Ar=new Map,Ms="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ms.push("scrollEnd");function yi(e,i){Ar.set(e,i),Sl(i,[e])}var Er=new WeakMap;function di(e,i){if(typeof e=="object"&&e!==null){var l=Er.get(e);return l!==void 0?l:(i={value:e,source:i,stack:qu(i)},Er.set(e,i),i)}return{value:e,source:i,stack:qu(i)}}var fi=[],et=0,zs=0;function Jn(){for(var e=et,i=zs=et=0;i<e;){var l=fi[i];fi[i++]=null;var t=fi[i];fi[i++]=null;var n=fi[i];fi[i++]=null;var a=fi[i];if(fi[i++]=null,t!==null&&n!==null){var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}a!==0&&Tr(l,n,a)}}function Fn(e,i,l,t){fi[et++]=e,fi[et++]=i,fi[et++]=l,fi[et++]=t,zs|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function Rs(e,i,l,t){return Fn(e,i,l,t),Pn(e)}function it(e,i){return Fn(e,null,null,i),Pn(e)}function Tr(e,i,l){e.lanes|=l;var t=e.alternate;t!==null&&(t.lanes|=l);for(var n=!1,a=e.return;a!==null;)a.childLanes|=l,t=a.alternate,t!==null&&(t.childLanes|=l),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(n=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,n&&i!==null&&(n=31-ii(l),e=a.hiddenUpdates,t=e[n],t===null?e[n]=[i]:t.push(i),i.lane=l|536870912),a):null}function Pn(e){if(50<hn)throw hn=0,Ho=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var lt={};function dg(e,i,l,t){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,i,l,t){return new dg(e,i,l,t)}function Ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,i){var l=e.alternate;return l===null?(l=ti(e.tag,i,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=i,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,i=e.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Cr(e,i){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,i=l.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Wn(e,i,l,t,n,a){var s=0;if(t=e,typeof e=="function")Ds(e)&&(s=1);else if(typeof e=="string")s=hm(e,l,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xi:return e=ti(31,l,i,n),e.elementType=xi,e.lanes=a,e;case ie:return Tl(l.children,n,a,i);case le:s=8,n|=24;break;case X:return e=ti(12,l,i,n|2),e.elementType=X,e.lanes=a,e;case F:return e=ti(13,l,i,n),e.elementType=F,e.lanes=a,e;case Pe:return e=ti(19,l,i,n),e.elementType=Pe,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:case te:s=10;break e;case de:s=9;break e;case Ee:s=11;break e;case We:s=14;break e;case Ie:s=16,t=null;break e}s=29,l=Error(r(130,e===null?"null":typeof e,"")),t=null}return i=ti(s,l,i,n),i.elementType=e,i.type=t,i.lanes=a,i}function Tl(e,i,l,t){return e=ti(7,e,t,i),e.lanes=l,e}function js(e,i,l){return e=ti(6,e,null,i),e.lanes=l,e}function Os(e,i,l){return i=ti(4,e.children!==null?e.children:[],e.key,i),i.lanes=l,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var tt=[],nt=0,In=null,$n=0,hi=[],gi=0,Cl=null,wi=1,Ui="";function Ml(e,i){tt[nt++]=$n,tt[nt++]=In,In=e,$n=i}function Mr(e,i,l){hi[gi++]=wi,hi[gi++]=Ui,hi[gi++]=Cl,Cl=e;var t=wi;e=Ui;var n=32-ii(t)-1;t&=~(1<<n),l+=1;var a=32-ii(i)+n;if(30<a){var s=n-n%5;a=(t&(1<<s)-1).toString(32),t>>=s,n-=s,wi=1<<32-ii(i)+n|l<<n|t,Ui=a+e}else wi=1<<a|l<<n|t,Ui=e}function ws(e){e.return!==null&&(Ml(e,1),Mr(e,1,0))}function Us(e){for(;e===In;)In=tt[--nt],tt[nt]=null,$n=tt[--nt],tt[nt]=null;for(;e===Cl;)Cl=hi[--gi],hi[gi]=null,Ui=hi[--gi],hi[gi]=null,wi=hi[--gi],hi[gi]=null}var Xe=null,xe=null,ue=!1,zl=null,Ei=!1,Ns=Error(r(519));function Rl(e){var i=Error(r(418,""));throw Vt(di(i,e)),Ns}function zr(e){var i=e.stateNode,l=e.type,t=e.memoizedProps;switch(i[Le]=e,i[Ve]=t,l){case"dialog":ee("cancel",i),ee("close",i);break;case"iframe":case"object":case"embed":ee("load",i);break;case"video":case"audio":for(l=0;l<mn.length;l++)ee(mn[l],i);break;case"source":ee("error",i);break;case"img":case"image":case"link":ee("error",i),ee("load",i);break;case"details":ee("toggle",i);break;case"input":ee("invalid",i),Qu(i,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),qn(i);break;case"select":ee("invalid",i);break;case"textarea":ee("invalid",i),Vu(i,t.value,t.defaultValue,t.children),qn(i)}l=t.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||i.textContent===""+l||t.suppressHydrationWarning===!0||Vd(i.textContent,l)?(t.popover!=null&&(ee("beforetoggle",i),ee("toggle",i)),t.onScroll!=null&&ee("scroll",i),t.onScrollEnd!=null&&ee("scrollend",i),t.onClick!=null&&(i.onclick=Ua),i=!0):i=!1,i||Rl(e)}function Rr(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Xe=Xe.return}}function Qt(e){if(e!==Xe)return!1;if(!ue)return Rr(e),ue=!0,!1;var i=e.tag,l;if((l=i!==3&&i!==27)&&((l=i===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Wo(e.type,e.memoizedProps)),l=!l),l&&xe&&Rl(e),Rr(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(i===0){xe=Si(e.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++;e=e.nextSibling}xe=null}}else i===27?(i=xe,rl(e.type)?(e=iu,iu=null,xe=e):xe=i):xe=Xe?Si(e.stateNode.nextSibling):null;return!0}function Xt(){xe=Xe=null,ue=!1}function Dr(){var e=zl;return e!==null&&(Je===null?Je=e:Je.push.apply(Je,e),zl=null),e}function Vt(e){zl===null?zl=[e]:zl.push(e)}var Hs=O(null),Dl=null,Ni=null;function Ji(e,i,l){H(Hs,i._currentValue),i._currentValue=l}function Hi(e){e._currentValue=Hs.current,B(Hs)}function _s(e,i,l){for(;e!==null;){var t=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,t!==null&&(t.childLanes|=i)):t!==null&&(t.childLanes&i)!==i&&(t.childLanes|=i),e===l)break;e=e.return}}function Bs(e,i,l,t){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var a=n.dependencies;if(a!==null){var s=n.child;a=a.firstContext;e:for(;a!==null;){var o=a;a=n;for(var d=0;d<i.length;d++)if(o.context===i[d]){a.lanes|=l,o=a.alternate,o!==null&&(o.lanes|=l),_s(a.return,l,e),t||(s=null);break e}a=o.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(r(341));s.lanes|=l,a=s.alternate,a!==null&&(a.lanes|=l),_s(s,l,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function kt(e,i,l,t){e=null;for(var n=i,a=!1;n!==null;){if(!a){if((n.flags&524288)!==0)a=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var o=n.type;li(n.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(n===$e.current){if(s=n.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(xn):e=[xn])}n=n.return}e!==null&&Bs(i,e,l,t),i.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jl(e){Dl=e,Ni=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ye(e){return jr(Dl,e)}function ia(e,i){return Dl===null&&jl(e),jr(e,i)}function jr(e,i){var l=i._currentValue;if(i={context:i,memoizedValue:l,next:null},Ni===null){if(e===null)throw Error(r(308));Ni=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ni=Ni.next=i;return l}var fg=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(l,t){e.push(t)}};this.abort=function(){i.aborted=!0,e.forEach(function(l){return l()})}},hg=u.unstable_scheduleCallback,gg=u.unstable_NormalPriority,De={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gs(){return{controller:new fg,data:new Map,refCount:0}}function Zt(e){e.refCount--,e.refCount===0&&hg(gg,function(){e.controller.abort()})}var Kt=null,qs=0,at=0,st=null;function mg(e,i){if(Kt===null){var l=Kt=[];qs=0,at=Qo(),st={status:"pending",value:void 0,then:function(t){l.push(t)}}}return qs++,i.then(Or,Or),i}function Or(){if(--qs===0&&Kt!==null){st!==null&&(st.status="fulfilled");var e=Kt;Kt=null,at=0,st=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function pg(e,i){var l=[],t={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){t.status="fulfilled",t.value=i;for(var n=0;n<l.length;n++)(0,l[n])(i)},function(n){for(t.status="rejected",t.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),t}var wr=z.S;z.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&mg(e,i),wr!==null&&wr(e,i)};var Ol=O(null);function Ls(){var e=Ol.current;return e!==null?e:ve.pooledCache}function la(e,i){i===null?H(Ol,Ol.current):H(Ol,i.pool)}function Ur(){var e=Ls();return e===null?null:{parent:De._currentValue,pool:e}}var Jt=Error(r(460)),Nr=Error(r(474)),ta=Error(r(542)),Ys={then:function(){}};function Hr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function na(){}function _r(e,i,l){switch(l=e[l],l===void 0?e.push(i):l!==i&&(i.then(na,na),i=l),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Gr(e),e;default:if(typeof i.status=="string")i.then(na,na);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(t){if(i.status==="pending"){var n=i;n.status="fulfilled",n.value=t}},function(t){if(i.status==="pending"){var n=i;n.status="rejected",n.reason=t}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Gr(e),e}throw Ft=i,Jt}}var Ft=null;function Br(){if(Ft===null)throw Error(r(459));var e=Ft;return Ft=null,e}function Gr(e){if(e===Jt||e===ta)throw Error(r(483))}var Fi=!1;function Qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xs(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(e,i,l){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(re&2)!==0){var n=t.pending;return n===null?i.next=i:(i.next=n.next,n.next=i),t.pending=i,i=Pn(e),Tr(e,null,l),i}return Fn(e,t,i,l),Pn(e)}function Pt(e,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194048)!==0)){var t=i.lanes;t&=e.pendingLanes,l|=t,i.lanes=l,Ou(e,l)}}function Vs(e,i){var l=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,l===t)){var n=null,a=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};a===null?n=a=s:a=a.next=s,l=l.next}while(l!==null);a===null?n=a=i:a=a.next=i}else n=a=i;l={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:t.shared,callbacks:t.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=i:e.next=i,l.lastBaseUpdate=i}var ks=!1;function Wt(){if(ks){var e=st;if(e!==null)throw e}}function It(e,i,l,t){ks=!1;var n=e.updateQueue;Fi=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var d=o,S=d.next;d.next=null,s===null?a=S:s.next=S,s=d;var M=e.alternate;M!==null&&(M=M.updateQueue,o=M.lastBaseUpdate,o!==s&&(o===null?M.firstBaseUpdate=S:o.next=S,M.lastBaseUpdate=d))}if(a!==null){var j=n.baseState;s=0,M=S=d=null,o=a;do{var A=o.lane&-536870913,E=A!==o.lane;if(E?(ae&A)===A:(t&A)===A){A!==0&&A===at&&(ks=!0),M!==null&&(M=M.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var Z=e,Q=o;A=i;var ge=l;switch(Q.tag){case 1:if(Z=Q.payload,typeof Z=="function"){j=Z.call(ge,j,A);break e}j=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=Q.payload,A=typeof Z=="function"?Z.call(ge,j,A):Z,A==null)break e;j=w({},j,A);break e;case 2:Fi=!0}}A=o.callback,A!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[A]:E.push(A))}else E={lane:A,tag:o.tag,payload:o.payload,callback:o.callback,next:null},M===null?(S=M=E,d=j):M=M.next=E,s|=A;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;E=o,o=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);M===null&&(d=j),n.baseState=d,n.firstBaseUpdate=S,n.lastBaseUpdate=M,a===null&&(n.shared.lanes=0),al|=s,e.lanes=s,e.memoizedState=j}}function qr(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function Lr(e,i){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)qr(l[e],i)}var ot=O(null),aa=O(0);function Yr(e,i){e=Qi,H(aa,e),H(ot,i),Qi=e|i.baseLanes}function Zs(){H(aa,Qi),H(ot,ot.current)}function Ks(){Qi=aa.current,B(ot),B(aa)}var Ii=0,P=null,fe=null,Me=null,sa=!1,ut=!1,wl=!1,oa=0,$t=0,rt=null,vg=0;function Te(){throw Error(r(321))}function Js(e,i){if(i===null)return!1;for(var l=0;l<i.length&&l<e.length;l++)if(!li(e[l],i[l]))return!1;return!0}function Fs(e,i,l,t,n,a){return Ii=a,P=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?Tc:Cc,wl=!1,a=l(t,n),wl=!1,ut&&(a=Xr(i,l,t,n)),Qr(e),a}function Qr(e){z.H=ha;var i=fe!==null&&fe.next!==null;if(Ii=0,Me=fe=P=null,sa=!1,$t=0,rt=null,i)throw Error(r(300));e===null||we||(e=e.dependencies,e!==null&&ea(e)&&(we=!0))}function Xr(e,i,l,t){P=e;var n=0;do{if(ut&&(rt=null),$t=0,ut=!1,25<=n)throw Error(r(301));if(n+=1,Me=fe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}z.H=Tg,a=i(l,t)}while(ut);return a}function yg(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?en(i):i,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(P.flags|=1024),i}function Ps(){var e=oa!==0;return oa=0,e}function Ws(e,i,l){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~l}function Is(e){if(sa){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}sa=!1}Ii=0,Me=fe=P=null,ut=!1,$t=oa=0,rt=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?P.memoizedState=Me=e:Me=Me.next=e,Me}function ze(){if(fe===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var i=Me===null?P.memoizedState:Me.next;if(i!==null)Me=i,fe=e;else{if(e===null)throw P.alternate===null?Error(r(467)):Error(r(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Me===null?P.memoizedState=Me=e:Me=Me.next=e}return Me}function $s(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function en(e){var i=$t;return $t+=1,rt===null&&(rt=[]),e=_r(rt,e,i),i=P,(Me===null?i.memoizedState:Me.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?Tc:Cc),e}function ua(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return en(e);if(e.$$typeof===te)return Ye(e)}throw Error(r(438,String(e)))}function eo(e){var i=null,l=P.updateQueue;if(l!==null&&(i=l.memoCache),i==null){var t=P.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(i={data:t.data.map(function(n){return n.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),l===null&&(l=$s(),P.updateQueue=l),l.memoCache=i,l=i.data[i.index],l===void 0)for(l=i.data[i.index]=Array(e),t=0;t<e;t++)l[t]=Ll;return i.index++,l}function _i(e,i){return typeof i=="function"?i(e):i}function ra(e){var i=ze();return io(i,fe,e)}function io(e,i,l){var t=e.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=l;var n=e.baseQueue,a=t.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}i.baseQueue=n=a,t.pending=null}if(a=e.baseState,n===null)e.memoizedState=a;else{i=n.next;var o=s=null,d=null,S=i,M=!1;do{var j=S.lane&-536870913;if(j!==S.lane?(ae&j)===j:(Ii&j)===j){var A=S.revertLane;if(A===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),j===at&&(M=!0);else if((Ii&A)===A){S=S.next,A===at&&(M=!0);continue}else j={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(o=d=j,s=a):d=d.next=j,P.lanes|=A,al|=A;j=S.action,wl&&l(a,j),a=S.hasEagerState?S.eagerState:l(a,j)}else A={lane:j,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},d===null?(o=d=A,s=a):d=d.next=A,P.lanes|=j,al|=j;S=S.next}while(S!==null&&S!==i);if(d===null?s=a:d.next=o,!li(a,e.memoizedState)&&(we=!0,M&&(l=st,l!==null)))throw l;e.memoizedState=a,e.baseState=s,e.baseQueue=d,t.lastRenderedState=a}return n===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function lo(e){var i=ze(),l=i.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var t=l.dispatch,n=l.pending,a=i.memoizedState;if(n!==null){l.pending=null;var s=n=n.next;do a=e(a,s.action),s=s.next;while(s!==n);li(a,i.memoizedState)||(we=!0),i.memoizedState=a,i.baseQueue===null&&(i.baseState=a),l.lastRenderedState=a}return[a,t]}function Vr(e,i,l){var t=P,n=ze(),a=ue;if(a){if(l===void 0)throw Error(r(407));l=l()}else l=i();var s=!li((fe||n).memoizedState,l);s&&(n.memoizedState=l,we=!0),n=n.queue;var o=Kr.bind(null,t,n,e);if(ln(2048,8,o,[e]),n.getSnapshot!==i||s||Me!==null&&Me.memoizedState.tag&1){if(t.flags|=2048,ct(9,ca(),Zr.bind(null,t,n,l,i),null),ve===null)throw Error(r(349));a||(Ii&124)!==0||kr(t,i,l)}return l}function kr(e,i,l){e.flags|=16384,e={getSnapshot:i,value:l},i=P.updateQueue,i===null?(i=$s(),P.updateQueue=i,i.stores=[e]):(l=i.stores,l===null?i.stores=[e]:l.push(e))}function Zr(e,i,l,t){i.value=l,i.getSnapshot=t,Jr(i)&&Fr(e)}function Kr(e,i,l){return l(function(){Jr(i)&&Fr(e)})}function Jr(e){var i=e.getSnapshot;e=e.value;try{var l=i();return!li(e,l)}catch{return!0}}function Fr(e){var i=it(e,2);i!==null&&ui(i,e,2)}function to(e){var i=Ze();if(typeof e=="function"){var l=e;if(e=l(),wl){ki(!0);try{l()}finally{ki(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},i}function Pr(e,i,l,t){return e.baseState=l,io(e,fe,typeof t=="function"?t:_i)}function bg(e,i,l,t,n){if(fa(e))throw Error(r(485));if(e=i.action,e!==null){var a={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){a.listeners.push(s)}};z.T!==null?l(!0):a.isTransition=!1,t(a),l=i.pending,l===null?(a.next=i.pending=a,Wr(i,a)):(a.next=l.next,i.pending=l.next=a)}}function Wr(e,i){var l=i.action,t=i.payload,n=e.state;if(i.isTransition){var a=z.T,s={};z.T=s;try{var o=l(n,t),d=z.S;d!==null&&d(s,o),Ir(e,i,o)}catch(S){no(e,i,S)}finally{z.T=a}}else try{a=l(n,t),Ir(e,i,a)}catch(S){no(e,i,S)}}function Ir(e,i,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(t){$r(e,i,t)},function(t){return no(e,i,t)}):$r(e,i,l)}function $r(e,i,l){i.status="fulfilled",i.value=l,ec(i),e.state=l,i=e.pending,i!==null&&(l=i.next,l===i?e.pending=null:(l=l.next,i.next=l,Wr(e,l)))}function no(e,i,l){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do i.status="rejected",i.reason=l,ec(i),i=i.next;while(i!==t)}e.action=null}function ec(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function ic(e,i){return i}function lc(e,i){if(ue){var l=ve.formState;if(l!==null){e:{var t=P;if(ue){if(xe){i:{for(var n=xe,a=Ei;n.nodeType!==8;){if(!a){n=null;break i}if(n=Si(n.nextSibling),n===null){n=null;break i}}a=n.data,n=a==="F!"||a==="F"?n:null}if(n){xe=Si(n.nextSibling),t=n.data==="F!";break e}}Rl(t)}t=!1}t&&(i=l[0])}}return l=Ze(),l.memoizedState=l.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ic,lastRenderedState:i},l.queue=t,l=xc.bind(null,P,t),t.dispatch=l,t=to(!1),a=ro.bind(null,P,!1,t.queue),t=Ze(),n={state:i,dispatch:null,action:e,pending:null},t.queue=n,l=bg.bind(null,P,n,a,l),n.dispatch=l,t.memoizedState=e,[i,l,!1]}function tc(e){var i=ze();return nc(i,fe,e)}function nc(e,i,l){if(i=io(e,i,ic)[0],e=ra(_i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var t=en(i)}catch(s){throw s===Jt?ta:s}else t=i;i=ze();var n=i.queue,a=n.dispatch;return l!==i.memoizedState&&(P.flags|=2048,ct(9,ca(),Sg.bind(null,n,l),null)),[t,a,e]}function Sg(e,i){e.action=i}function ac(e){var i=ze(),l=fe;if(l!==null)return nc(i,l,e);ze(),i=i.memoizedState,l=ze();var t=l.queue.dispatch;return l.memoizedState=e,[i,t,!1]}function ct(e,i,l,t){return e={tag:e,create:l,deps:t,inst:i,next:null},i=P.updateQueue,i===null&&(i=$s(),P.updateQueue=i),l=i.lastEffect,l===null?i.lastEffect=e.next=e:(t=l.next,l.next=e,e.next=t,i.lastEffect=e),e}function ca(){return{destroy:void 0,resource:void 0}}function sc(){return ze().memoizedState}function da(e,i,l,t){var n=Ze();t=t===void 0?null:t,P.flags|=e,n.memoizedState=ct(1|i,ca(),l,t)}function ln(e,i,l,t){var n=ze();t=t===void 0?null:t;var a=n.memoizedState.inst;fe!==null&&t!==null&&Js(t,fe.memoizedState.deps)?n.memoizedState=ct(i,a,l,t):(P.flags|=e,n.memoizedState=ct(1|i,a,l,t))}function oc(e,i){da(8390656,8,e,i)}function uc(e,i){ln(2048,8,e,i)}function rc(e,i){return ln(4,2,e,i)}function cc(e,i){return ln(4,4,e,i)}function dc(e,i){if(typeof i=="function"){e=e();var l=i(e);return function(){typeof l=="function"?l():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function fc(e,i,l){l=l!=null?l.concat([e]):null,ln(4,4,dc.bind(null,i,e),l)}function ao(){}function hc(e,i){var l=ze();i=i===void 0?null:i;var t=l.memoizedState;return i!==null&&Js(i,t[1])?t[0]:(l.memoizedState=[e,i],e)}function gc(e,i){var l=ze();i=i===void 0?null:i;var t=l.memoizedState;if(i!==null&&Js(i,t[1]))return t[0];if(t=e(),wl){ki(!0);try{e()}finally{ki(!1)}}return l.memoizedState=[t,i],t}function so(e,i,l){return l===void 0||(Ii&1073741824)!==0?e.memoizedState=i:(e.memoizedState=l,e=vd(),P.lanes|=e,al|=e,l)}function mc(e,i,l,t){return li(l,i)?l:ot.current!==null?(e=so(e,l,t),li(e,i)||(we=!0),e):(Ii&42)===0?(we=!0,e.memoizedState=l):(e=vd(),P.lanes|=e,al|=e,i)}function pc(e,i,l,t,n){var a=_.p;_.p=a!==0&&8>a?a:8;var s=z.T,o={};z.T=o,ro(e,!1,i,l);try{var d=n(),S=z.S;if(S!==null&&S(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var M=pg(d,t);tn(e,i,M,oi(e))}else tn(e,i,t,oi(e))}catch(j){tn(e,i,{then:function(){},status:"rejected",reason:j},oi())}finally{_.p=a,z.T=s}}function xg(){}function oo(e,i,l,t){if(e.tag!==5)throw Error(r(476));var n=vc(e).queue;pc(e,n,i,k,l===null?xg:function(){return yc(e),l(t)})}function vc(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:k},next:null};var l={};return i.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:l},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function yc(e){var i=vc(e).next.queue;tn(e,i,{},oi())}function uo(){return Ye(xn)}function bc(){return ze().memoizedState}function Sc(){return ze().memoizedState}function Ag(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var l=oi();e=Pi(l);var t=Wi(i,e,l);t!==null&&(ui(t,i,l),Pt(t,i,l)),i={cache:Gs()},e.payload=i;return}i=i.return}}function Eg(e,i,l){var t=oi();l={lane:t,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},fa(e)?Ac(i,l):(l=Rs(e,i,l,t),l!==null&&(ui(l,e,t),Ec(l,i,t)))}function xc(e,i,l){var t=oi();tn(e,i,l,t)}function tn(e,i,l,t){var n={lane:t,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(fa(e))Ac(i,n);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=i.lastRenderedReducer,a!==null))try{var s=i.lastRenderedState,o=a(s,l);if(n.hasEagerState=!0,n.eagerState=o,li(o,s))return Fn(e,i,n,0),ve===null&&Jn(),!1}catch{}finally{}if(l=Rs(e,i,n,t),l!==null)return ui(l,e,t),Ec(l,i,t),!0}return!1}function ro(e,i,l,t){if(t={lane:2,revertLane:Qo(),action:t,hasEagerState:!1,eagerState:null,next:null},fa(e)){if(i)throw Error(r(479))}else i=Rs(e,l,t,2),i!==null&&ui(i,e,2)}function fa(e){var i=e.alternate;return e===P||i!==null&&i===P}function Ac(e,i){ut=sa=!0;var l=e.pending;l===null?i.next=i:(i.next=l.next,l.next=i),e.pending=i}function Ec(e,i,l){if((l&4194048)!==0){var t=i.lanes;t&=e.pendingLanes,l|=t,i.lanes=l,Ou(e,l)}}var ha={readContext:Ye,use:ua,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te},Tc={readContext:Ye,use:ua,useCallback:function(e,i){return Ze().memoizedState=[e,i===void 0?null:i],e},useContext:Ye,useEffect:oc,useImperativeHandle:function(e,i,l){l=l!=null?l.concat([e]):null,da(4194308,4,dc.bind(null,i,e),l)},useLayoutEffect:function(e,i){return da(4194308,4,e,i)},useInsertionEffect:function(e,i){da(4,2,e,i)},useMemo:function(e,i){var l=Ze();i=i===void 0?null:i;var t=e();if(wl){ki(!0);try{e()}finally{ki(!1)}}return l.memoizedState=[t,i],t},useReducer:function(e,i,l){var t=Ze();if(l!==void 0){var n=l(i);if(wl){ki(!0);try{l(i)}finally{ki(!1)}}}else n=i;return t.memoizedState=t.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=Eg.bind(null,P,e),[t.memoizedState,e]},useRef:function(e){var i=Ze();return e={current:e},i.memoizedState=e},useState:function(e){e=to(e);var i=e.queue,l=xc.bind(null,P,i);return i.dispatch=l,[e.memoizedState,l]},useDebugValue:ao,useDeferredValue:function(e,i){var l=Ze();return so(l,e,i)},useTransition:function(){var e=to(!1);return e=pc.bind(null,P,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,l){var t=P,n=Ze();if(ue){if(l===void 0)throw Error(r(407));l=l()}else{if(l=i(),ve===null)throw Error(r(349));(ae&124)!==0||kr(t,i,l)}n.memoizedState=l;var a={value:l,getSnapshot:i};return n.queue=a,oc(Kr.bind(null,t,a,e),[e]),t.flags|=2048,ct(9,ca(),Zr.bind(null,t,a,l,i),null),l},useId:function(){var e=Ze(),i=ve.identifierPrefix;if(ue){var l=Ui,t=wi;l=(t&~(1<<32-ii(t)-1)).toString(32)+l,i="«"+i+"R"+l,l=oa++,0<l&&(i+="H"+l.toString(32)),i+="»"}else l=vg++,i="«"+i+"r"+l.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:uo,useFormState:lc,useActionState:lc,useOptimistic:function(e){var i=Ze();i.memoizedState=i.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=l,i=ro.bind(null,P,!0,l),l.dispatch=i,[e,i]},useMemoCache:eo,useCacheRefresh:function(){return Ze().memoizedState=Ag.bind(null,P)}},Cc={readContext:Ye,use:ua,useCallback:hc,useContext:Ye,useEffect:uc,useImperativeHandle:fc,useInsertionEffect:rc,useLayoutEffect:cc,useMemo:gc,useReducer:ra,useRef:sc,useState:function(){return ra(_i)},useDebugValue:ao,useDeferredValue:function(e,i){var l=ze();return mc(l,fe.memoizedState,e,i)},useTransition:function(){var e=ra(_i)[0],i=ze().memoizedState;return[typeof e=="boolean"?e:en(e),i]},useSyncExternalStore:Vr,useId:bc,useHostTransitionStatus:uo,useFormState:tc,useActionState:tc,useOptimistic:function(e,i){var l=ze();return Pr(l,fe,e,i)},useMemoCache:eo,useCacheRefresh:Sc},Tg={readContext:Ye,use:ua,useCallback:hc,useContext:Ye,useEffect:uc,useImperativeHandle:fc,useInsertionEffect:rc,useLayoutEffect:cc,useMemo:gc,useReducer:lo,useRef:sc,useState:function(){return lo(_i)},useDebugValue:ao,useDeferredValue:function(e,i){var l=ze();return fe===null?so(l,e,i):mc(l,fe.memoizedState,e,i)},useTransition:function(){var e=lo(_i)[0],i=ze().memoizedState;return[typeof e=="boolean"?e:en(e),i]},useSyncExternalStore:Vr,useId:bc,useHostTransitionStatus:uo,useFormState:ac,useActionState:ac,useOptimistic:function(e,i){var l=ze();return fe!==null?Pr(l,fe,e,i):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:eo,useCacheRefresh:Sc},dt=null,nn=0;function ga(e){var i=nn;return nn+=1,dt===null&&(dt=[]),_r(dt,e,i)}function an(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ma(e,i){throw i.$$typeof===U?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Mc(e){var i=e._init;return i(e._payload)}function zc(e){function i(v,m){if(e){var b=v.deletions;b===null?(v.deletions=[m],v.flags|=16):b.push(m)}}function l(v,m){if(!e)return null;for(;m!==null;)i(v,m),m=m.sibling;return null}function t(v){for(var m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function n(v,m){return v=Oi(v,m),v.index=0,v.sibling=null,v}function a(v,m,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<m?(v.flags|=67108866,m):b):(v.flags|=67108866,m)):(v.flags|=1048576,m)}function s(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function o(v,m,b,R){return m===null||m.tag!==6?(m=js(b,v.mode,R),m.return=v,m):(m=n(m,b),m.return=v,m)}function d(v,m,b,R){var G=b.type;return G===ie?M(v,m,b.props.children,R,b.key):m!==null&&(m.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ie&&Mc(G)===m.type)?(m=n(m,b.props),an(m,b),m.return=v,m):(m=Wn(b.type,b.key,b.props,null,v.mode,R),an(m,b),m.return=v,m)}function S(v,m,b,R){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=Os(b,v.mode,R),m.return=v,m):(m=n(m,b.children||[]),m.return=v,m)}function M(v,m,b,R,G){return m===null||m.tag!==7?(m=Tl(b,v.mode,R,G),m.return=v,m):(m=n(m,b),m.return=v,m)}function j(v,m,b){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=js(""+m,v.mode,b),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case L:return b=Wn(m.type,m.key,m.props,null,v.mode,b),an(b,m),b.return=v,b;case ne:return m=Os(m,v.mode,b),m.return=v,m;case Ie:var R=m._init;return m=R(m._payload),j(v,m,b)}if(qe(m)||Ge(m))return m=Tl(m,v.mode,b,null),m.return=v,m;if(typeof m.then=="function")return j(v,ga(m),b);if(m.$$typeof===te)return j(v,ia(v,m),b);ma(v,m)}return null}function A(v,m,b,R){var G=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return G!==null?null:o(v,m,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case L:return b.key===G?d(v,m,b,R):null;case ne:return b.key===G?S(v,m,b,R):null;case Ie:return G=b._init,b=G(b._payload),A(v,m,b,R)}if(qe(b)||Ge(b))return G!==null?null:M(v,m,b,R,null);if(typeof b.then=="function")return A(v,m,ga(b),R);if(b.$$typeof===te)return A(v,m,ia(v,b),R);ma(v,b)}return null}function E(v,m,b,R,G){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return v=v.get(b)||null,o(m,v,""+R,G);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case L:return v=v.get(R.key===null?b:R.key)||null,d(m,v,R,G);case ne:return v=v.get(R.key===null?b:R.key)||null,S(m,v,R,G);case Ie:var I=R._init;return R=I(R._payload),E(v,m,b,R,G)}if(qe(R)||Ge(R))return v=v.get(b)||null,M(m,v,R,G,null);if(typeof R.then=="function")return E(v,m,b,ga(R),G);if(R.$$typeof===te)return E(v,m,b,ia(m,R),G);ma(m,R)}return null}function Z(v,m,b,R){for(var G=null,I=null,q=m,V=m=0,Ne=null;q!==null&&V<b.length;V++){q.index>V?(Ne=q,q=null):Ne=q.sibling;var oe=A(v,q,b[V],R);if(oe===null){q===null&&(q=Ne);break}e&&q&&oe.alternate===null&&i(v,q),m=a(oe,m,V),I===null?G=oe:I.sibling=oe,I=oe,q=Ne}if(V===b.length)return l(v,q),ue&&Ml(v,V),G;if(q===null){for(;V<b.length;V++)q=j(v,b[V],R),q!==null&&(m=a(q,m,V),I===null?G=q:I.sibling=q,I=q);return ue&&Ml(v,V),G}for(q=t(q);V<b.length;V++)Ne=E(q,v,V,b[V],R),Ne!==null&&(e&&Ne.alternate!==null&&q.delete(Ne.key===null?V:Ne.key),m=a(Ne,m,V),I===null?G=Ne:I.sibling=Ne,I=Ne);return e&&q.forEach(function(gl){return i(v,gl)}),ue&&Ml(v,V),G}function Q(v,m,b,R){if(b==null)throw Error(r(151));for(var G=null,I=null,q=m,V=m=0,Ne=null,oe=b.next();q!==null&&!oe.done;V++,oe=b.next()){q.index>V?(Ne=q,q=null):Ne=q.sibling;var gl=A(v,q,oe.value,R);if(gl===null){q===null&&(q=Ne);break}e&&q&&gl.alternate===null&&i(v,q),m=a(gl,m,V),I===null?G=gl:I.sibling=gl,I=gl,q=Ne}if(oe.done)return l(v,q),ue&&Ml(v,V),G;if(q===null){for(;!oe.done;V++,oe=b.next())oe=j(v,oe.value,R),oe!==null&&(m=a(oe,m,V),I===null?G=oe:I.sibling=oe,I=oe);return ue&&Ml(v,V),G}for(q=t(q);!oe.done;V++,oe=b.next())oe=E(q,v,V,oe.value,R),oe!==null&&(e&&oe.alternate!==null&&q.delete(oe.key===null?V:oe.key),m=a(oe,m,V),I===null?G=oe:I.sibling=oe,I=oe);return e&&q.forEach(function(Cm){return i(v,Cm)}),ue&&Ml(v,V),G}function ge(v,m,b,R){if(typeof b=="object"&&b!==null&&b.type===ie&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case L:e:{for(var G=b.key;m!==null;){if(m.key===G){if(G=b.type,G===ie){if(m.tag===7){l(v,m.sibling),R=n(m,b.props.children),R.return=v,v=R;break e}}else if(m.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ie&&Mc(G)===m.type){l(v,m.sibling),R=n(m,b.props),an(R,b),R.return=v,v=R;break e}l(v,m);break}else i(v,m);m=m.sibling}b.type===ie?(R=Tl(b.props.children,v.mode,R,b.key),R.return=v,v=R):(R=Wn(b.type,b.key,b.props,null,v.mode,R),an(R,b),R.return=v,v=R)}return s(v);case ne:e:{for(G=b.key;m!==null;){if(m.key===G)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){l(v,m.sibling),R=n(m,b.children||[]),R.return=v,v=R;break e}else{l(v,m);break}else i(v,m);m=m.sibling}R=Os(b,v.mode,R),R.return=v,v=R}return s(v);case Ie:return G=b._init,b=G(b._payload),ge(v,m,b,R)}if(qe(b))return Z(v,m,b,R);if(Ge(b)){if(G=Ge(b),typeof G!="function")throw Error(r(150));return b=G.call(b),Q(v,m,b,R)}if(typeof b.then=="function")return ge(v,m,ga(b),R);if(b.$$typeof===te)return ge(v,m,ia(v,b),R);ma(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,m!==null&&m.tag===6?(l(v,m.sibling),R=n(m,b),R.return=v,v=R):(l(v,m),R=js(b,v.mode,R),R.return=v,v=R),s(v)):l(v,m)}return function(v,m,b,R){try{nn=0;var G=ge(v,m,b,R);return dt=null,G}catch(q){if(q===Jt||q===ta)throw q;var I=ti(29,q,null,v.mode);return I.lanes=R,I.return=v,I}finally{}}}var ft=zc(!0),Rc=zc(!1),mi=O(null),Ti=null;function $i(e){var i=e.alternate;H(je,je.current&1),H(mi,e),Ti===null&&(i===null||ot.current!==null||i.memoizedState!==null)&&(Ti=e)}function Dc(e){if(e.tag===22){if(H(je,je.current),H(mi,e),Ti===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ti=e)}}else el()}function el(){H(je,je.current),H(mi,mi.current)}function Bi(e){B(mi),Ti===e&&(Ti=null),B(je)}var je=O(0);function pa(e){for(var i=e;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||eu(l)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function co(e,i,l,t){i=e.memoizedState,l=l(t,i),l=l==null?i:w({},i,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var fo={enqueueSetState:function(e,i,l){e=e._reactInternals;var t=oi(),n=Pi(t);n.payload=i,l!=null&&(n.callback=l),i=Wi(e,n,t),i!==null&&(ui(i,e,t),Pt(i,e,t))},enqueueReplaceState:function(e,i,l){e=e._reactInternals;var t=oi(),n=Pi(t);n.tag=1,n.payload=i,l!=null&&(n.callback=l),i=Wi(e,n,t),i!==null&&(ui(i,e,t),Pt(i,e,t))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var l=oi(),t=Pi(l);t.tag=2,i!=null&&(t.callback=i),i=Wi(e,t,l),i!==null&&(ui(i,e,l),Pt(i,e,l))}};function jc(e,i,l,t,n,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,a,s):i.prototype&&i.prototype.isPureReactComponent?!Lt(l,t)||!Lt(n,a):!0}function Oc(e,i,l,t){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,t),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,t),i.state!==e&&fo.enqueueReplaceState(i,i.state,null)}function Ul(e,i){var l=i;if("ref"in i){l={};for(var t in i)t!=="ref"&&(l[t]=i[t])}if(e=e.defaultProps){l===i&&(l=w({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}var va=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wc(e){va(e)}function Uc(e){console.error(e)}function Nc(e){va(e)}function ya(e,i){try{var l=e.onUncaughtError;l(i.value,{componentStack:i.stack})}catch(t){setTimeout(function(){throw t})}}function Hc(e,i,l){try{var t=e.onCaughtError;t(l.value,{componentStack:l.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ho(e,i,l){return l=Pi(l),l.tag=3,l.payload={element:null},l.callback=function(){ya(e,i)},l}function _c(e){return e=Pi(e),e.tag=3,e}function Bc(e,i,l,t){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;e.payload=function(){return n(a)},e.callback=function(){Hc(i,l,t)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Hc(i,l,t),typeof n!="function"&&(sl===null?sl=new Set([this]):sl.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})})}function Cg(e,i,l,t,n){if(l.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(i=l.alternate,i!==null&&kt(i,l,n,!0),l=mi.current,l!==null){switch(l.tag){case 13:return Ti===null?Bo():l.alternate===null&&Ae===0&&(Ae=3),l.flags&=-257,l.flags|=65536,l.lanes=n,t===Ys?l.flags|=16384:(i=l.updateQueue,i===null?l.updateQueue=new Set([t]):i.add(t),qo(e,t,n)),!1;case 22:return l.flags|=65536,t===Ys?l.flags|=16384:(i=l.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([t])},l.updateQueue=i):(l=i.retryQueue,l===null?i.retryQueue=new Set([t]):l.add(t)),qo(e,t,n)),!1}throw Error(r(435,l.tag))}return qo(e,t,n),Bo(),!1}if(ue)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=n,t!==Ns&&(e=Error(r(422),{cause:t}),Vt(di(e,l)))):(t!==Ns&&(i=Error(r(423),{cause:t}),Vt(di(i,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,t=di(t,l),n=ho(e.stateNode,t,n),Vs(e,n),Ae!==4&&(Ae=2)),!1;var a=Error(r(520),{cause:t});if(a=di(a,l),fn===null?fn=[a]:fn.push(a),Ae!==4&&(Ae=2),i===null)return!0;t=di(t,l),l=i;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=ho(l.stateNode,t,e),Vs(l,e),!1;case 1:if(i=l.type,a=l.stateNode,(l.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(sl===null||!sl.has(a))))return l.flags|=65536,n&=-n,l.lanes|=n,n=_c(n),Bc(n,e,l,t),Vs(l,n),!1}l=l.return}while(l!==null);return!1}var Gc=Error(r(461)),we=!1;function He(e,i,l,t){i.child=e===null?Rc(i,null,l,t):ft(i,e.child,l,t)}function qc(e,i,l,t,n){l=l.render;var a=i.ref;if("ref"in t){var s={};for(var o in t)o!=="ref"&&(s[o]=t[o])}else s=t;return jl(i),t=Fs(e,i,l,s,a,n),o=Ps(),e!==null&&!we?(Ws(e,i,n),Gi(e,i,n)):(ue&&o&&ws(i),i.flags|=1,He(e,i,t,n),i.child)}function Lc(e,i,l,t,n){if(e===null){var a=l.type;return typeof a=="function"&&!Ds(a)&&a.defaultProps===void 0&&l.compare===null?(i.tag=15,i.type=a,Yc(e,i,a,t,n)):(e=Wn(l.type,null,t,i,i.mode,n),e.ref=i.ref,e.return=i,i.child=e)}if(a=e.child,!xo(e,n)){var s=a.memoizedProps;if(l=l.compare,l=l!==null?l:Lt,l(s,t)&&e.ref===i.ref)return Gi(e,i,n)}return i.flags|=1,e=Oi(a,t),e.ref=i.ref,e.return=i,i.child=e}function Yc(e,i,l,t,n){if(e!==null){var a=e.memoizedProps;if(Lt(a,t)&&e.ref===i.ref)if(we=!1,i.pendingProps=t=a,xo(e,n))(e.flags&131072)!==0&&(we=!0);else return i.lanes=e.lanes,Gi(e,i,n)}return go(e,i,l,t,n)}function Qc(e,i,l){var t=i.pendingProps,n=t.children,a=e!==null?e.memoizedState:null;if(t.mode==="hidden"){if((i.flags&128)!==0){if(t=a!==null?a.baseLanes|l:l,e!==null){for(n=i.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;i.childLanes=a&~t}else i.childLanes=0,i.child=null;return Xc(e,i,t,l)}if((l&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&la(i,a!==null?a.cachePool:null),a!==null?Yr(i,a):Zs(),Dc(i);else return i.lanes=i.childLanes=536870912,Xc(e,i,a!==null?a.baseLanes|l:l,l)}else a!==null?(la(i,a.cachePool),Yr(i,a),el(),i.memoizedState=null):(e!==null&&la(i,null),Zs(),el());return He(e,i,n,l),i.child}function Xc(e,i,l,t){var n=Ls();return n=n===null?null:{parent:De._currentValue,pool:n},i.memoizedState={baseLanes:l,cachePool:n},e!==null&&la(i,null),Zs(),Dc(i),e!==null&&kt(e,i,t,!0),null}function ba(e,i){var l=i.ref;if(l===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(i.flags|=4194816)}}function go(e,i,l,t,n){return jl(i),l=Fs(e,i,l,t,void 0,n),t=Ps(),e!==null&&!we?(Ws(e,i,n),Gi(e,i,n)):(ue&&t&&ws(i),i.flags|=1,He(e,i,l,n),i.child)}function Vc(e,i,l,t,n,a){return jl(i),i.updateQueue=null,l=Xr(i,t,l,n),Qr(e),t=Ps(),e!==null&&!we?(Ws(e,i,a),Gi(e,i,a)):(ue&&t&&ws(i),i.flags|=1,He(e,i,l,a),i.child)}function kc(e,i,l,t,n){if(jl(i),i.stateNode===null){var a=lt,s=l.contextType;typeof s=="object"&&s!==null&&(a=Ye(s)),a=new l(t,a),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=fo,i.stateNode=a,a._reactInternals=i,a=i.stateNode,a.props=t,a.state=i.memoizedState,a.refs={},Qs(i),s=l.contextType,a.context=typeof s=="object"&&s!==null?Ye(s):lt,a.state=i.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(co(i,l,s,t),a.state=i.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&fo.enqueueReplaceState(a,a.state,null),It(i,t,a,n),Wt(),a.state=i.memoizedState),typeof a.componentDidMount=="function"&&(i.flags|=4194308),t=!0}else if(e===null){a=i.stateNode;var o=i.memoizedProps,d=Ul(l,o);a.props=d;var S=a.context,M=l.contextType;s=lt,typeof M=="object"&&M!==null&&(s=Ye(M));var j=l.getDerivedStateFromProps;M=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=i.pendingProps!==o,M||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||S!==s)&&Oc(i,a,t,s),Fi=!1;var A=i.memoizedState;a.state=A,It(i,t,a,n),Wt(),S=i.memoizedState,o||A!==S||Fi?(typeof j=="function"&&(co(i,l,j,t),S=i.memoizedState),(d=Fi||jc(i,l,d,t,A,S,s))?(M||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(i.flags|=4194308)):(typeof a.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=t,i.memoizedState=S),a.props=t,a.state=S,a.context=s,t=d):(typeof a.componentDidMount=="function"&&(i.flags|=4194308),t=!1)}else{a=i.stateNode,Xs(e,i),s=i.memoizedProps,M=Ul(l,s),a.props=M,j=i.pendingProps,A=a.context,S=l.contextType,d=lt,typeof S=="object"&&S!==null&&(d=Ye(S)),o=l.getDerivedStateFromProps,(S=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==j||A!==d)&&Oc(i,a,t,d),Fi=!1,A=i.memoizedState,a.state=A,It(i,t,a,n),Wt();var E=i.memoizedState;s!==j||A!==E||Fi||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof o=="function"&&(co(i,l,o,t),E=i.memoizedState),(M=Fi||jc(i,l,M,t,A,E,d)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(S||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,E,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,E,d)),typeof a.componentDidUpdate=="function"&&(i.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(i.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(i.flags|=1024),i.memoizedProps=t,i.memoizedState=E),a.props=t,a.state=E,a.context=d,t=M):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(i.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(i.flags|=1024),t=!1)}return a=t,ba(e,i),t=(i.flags&128)!==0,a||t?(a=i.stateNode,l=t&&typeof l.getDerivedStateFromError!="function"?null:a.render(),i.flags|=1,e!==null&&t?(i.child=ft(i,e.child,null,n),i.child=ft(i,null,l,n)):He(e,i,l,n),i.memoizedState=a.state,e=i.child):e=Gi(e,i,n),e}function Zc(e,i,l,t){return Xt(),i.flags|=256,He(e,i,l,t),i.child}var mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function po(e){return{baseLanes:e,cachePool:Ur()}}function vo(e,i,l){return e=e!==null?e.childLanes&~l:0,i&&(e|=pi),e}function Kc(e,i,l){var t=i.pendingProps,n=!1,a=(i.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),s&&(n=!0,i.flags&=-129),s=(i.flags&32)!==0,i.flags&=-33,e===null){if(ue){if(n?$i(i):el(),ue){var o=xe,d;if(d=o){e:{for(d=o,o=Ei;d.nodeType!==8;){if(!o){o=null;break e}if(d=Si(d.nextSibling),d===null){o=null;break e}}o=d}o!==null?(i.memoizedState={dehydrated:o,treeContext:Cl!==null?{id:wi,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},d=ti(18,null,null,0),d.stateNode=o,d.return=i,i.child=d,Xe=i,xe=null,d=!0):d=!1}d||Rl(i)}if(o=i.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return eu(o)?i.lanes=32:i.lanes=536870912,null;Bi(i)}return o=t.children,t=t.fallback,n?(el(),n=i.mode,o=Sa({mode:"hidden",children:o},n),t=Tl(t,n,l,null),o.return=i,t.return=i,o.sibling=t,i.child=o,n=i.child,n.memoizedState=po(l),n.childLanes=vo(e,s,l),i.memoizedState=mo,t):($i(i),yo(i,o))}if(d=e.memoizedState,d!==null&&(o=d.dehydrated,o!==null)){if(a)i.flags&256?($i(i),i.flags&=-257,i=bo(e,i,l)):i.memoizedState!==null?(el(),i.child=e.child,i.flags|=128,i=null):(el(),n=t.fallback,o=i.mode,t=Sa({mode:"visible",children:t.children},o),n=Tl(n,o,l,null),n.flags|=2,t.return=i,n.return=i,t.sibling=n,i.child=t,ft(i,e.child,null,l),t=i.child,t.memoizedState=po(l),t.childLanes=vo(e,s,l),i.memoizedState=mo,i=n);else if($i(i),eu(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var S=s.dgst;s=S,t=Error(r(419)),t.stack="",t.digest=s,Vt({value:t,source:null,stack:null}),i=bo(e,i,l)}else if(we||kt(e,i,l,!1),s=(l&e.childLanes)!==0,we||s){if(s=ve,s!==null&&(t=l&-l,t=(t&42)!==0?1:es(t),t=(t&(s.suspendedLanes|l))!==0?0:t,t!==0&&t!==d.retryLane))throw d.retryLane=t,it(e,t),ui(s,e,t),Gc;o.data==="$?"||Bo(),i=bo(e,i,l)}else o.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=d.treeContext,xe=Si(o.nextSibling),Xe=i,ue=!0,zl=null,Ei=!1,e!==null&&(hi[gi++]=wi,hi[gi++]=Ui,hi[gi++]=Cl,wi=e.id,Ui=e.overflow,Cl=i),i=yo(i,t.children),i.flags|=4096);return i}return n?(el(),n=t.fallback,o=i.mode,d=e.child,S=d.sibling,t=Oi(d,{mode:"hidden",children:t.children}),t.subtreeFlags=d.subtreeFlags&65011712,S!==null?n=Oi(S,n):(n=Tl(n,o,l,null),n.flags|=2),n.return=i,t.return=i,t.sibling=n,i.child=t,t=n,n=i.child,o=e.child.memoizedState,o===null?o=po(l):(d=o.cachePool,d!==null?(S=De._currentValue,d=d.parent!==S?{parent:S,pool:S}:d):d=Ur(),o={baseLanes:o.baseLanes|l,cachePool:d}),n.memoizedState=o,n.childLanes=vo(e,s,l),i.memoizedState=mo,t):($i(i),l=e.child,e=l.sibling,l=Oi(l,{mode:"visible",children:t.children}),l.return=i,l.sibling=null,e!==null&&(s=i.deletions,s===null?(i.deletions=[e],i.flags|=16):s.push(e)),i.child=l,i.memoizedState=null,l)}function yo(e,i){return i=Sa({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Sa(e,i){return e=ti(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function bo(e,i,l){return ft(i,e.child,null,l),e=yo(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Jc(e,i,l){e.lanes|=i;var t=e.alternate;t!==null&&(t.lanes|=i),_s(e.return,i,l)}function So(e,i,l,t,n){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:t,tail:l,tailMode:n}:(a.isBackwards=i,a.rendering=null,a.renderingStartTime=0,a.last=t,a.tail=l,a.tailMode=n)}function Fc(e,i,l){var t=i.pendingProps,n=t.revealOrder,a=t.tail;if(He(e,i,t.children,l),t=je.current,(t&2)!==0)t=t&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,l,i);else if(e.tag===19)Jc(e,l,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}switch(H(je,t),n){case"forwards":for(l=i.child,n=null;l!==null;)e=l.alternate,e!==null&&pa(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=i.child,i.child=null):(n=l.sibling,l.sibling=null),So(i,!1,n,l,a);break;case"backwards":for(l=null,n=i.child,i.child=null;n!==null;){if(e=n.alternate,e!==null&&pa(e)===null){i.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}So(i,!0,l,null,a);break;case"together":So(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Gi(e,i,l){if(e!==null&&(i.dependencies=e.dependencies),al|=i.lanes,(l&i.childLanes)===0)if(e!==null){if(kt(e,i,l,!1),(l&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,l=Oi(e,e.pendingProps),i.child=l,l.return=i;e.sibling!==null;)e=e.sibling,l=l.sibling=Oi(e,e.pendingProps),l.return=i;l.sibling=null}return i.child}function xo(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ea(e)))}function Mg(e,i,l){switch(i.tag){case 3:ye(i,i.stateNode.containerInfo),Ji(i,De,e.memoizedState.cache),Xt();break;case 27:case 5:Fa(i);break;case 4:ye(i,i.stateNode.containerInfo);break;case 10:Ji(i,i.type,i.memoizedProps.value);break;case 13:var t=i.memoizedState;if(t!==null)return t.dehydrated!==null?($i(i),i.flags|=128,null):(l&i.child.childLanes)!==0?Kc(e,i,l):($i(i),e=Gi(e,i,l),e!==null?e.sibling:null);$i(i);break;case 19:var n=(e.flags&128)!==0;if(t=(l&i.childLanes)!==0,t||(kt(e,i,l,!1),t=(l&i.childLanes)!==0),n){if(t)return Fc(e,i,l);i.flags|=128}if(n=i.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(je,je.current),t)break;return null;case 22:case 23:return i.lanes=0,Qc(e,i,l);case 24:Ji(i,De,e.memoizedState.cache)}return Gi(e,i,l)}function Pc(e,i,l){if(e!==null)if(e.memoizedProps!==i.pendingProps)we=!0;else{if(!xo(e,l)&&(i.flags&128)===0)return we=!1,Mg(e,i,l);we=(e.flags&131072)!==0}else we=!1,ue&&(i.flags&1048576)!==0&&Mr(i,$n,i.index);switch(i.lanes=0,i.tag){case 16:e:{e=i.pendingProps;var t=i.elementType,n=t._init;if(t=n(t._payload),i.type=t,typeof t=="function")Ds(t)?(e=Ul(t,e),i.tag=1,i=kc(null,i,t,e,l)):(i.tag=0,i=go(null,i,t,e,l));else{if(t!=null){if(n=t.$$typeof,n===Ee){i.tag=11,i=qc(null,i,t,e,l);break e}else if(n===We){i.tag=14,i=Lc(null,i,t,e,l);break e}}throw i=yl(t)||t,Error(r(306,i,""))}}return i;case 0:return go(e,i,i.type,i.pendingProps,l);case 1:return t=i.type,n=Ul(t,i.pendingProps),kc(e,i,t,n,l);case 3:e:{if(ye(i,i.stateNode.containerInfo),e===null)throw Error(r(387));t=i.pendingProps;var a=i.memoizedState;n=a.element,Xs(e,i),It(i,t,null,l);var s=i.memoizedState;if(t=s.cache,Ji(i,De,t),t!==a.cache&&Bs(i,[De],l,!0),Wt(),t=s.element,a.isDehydrated)if(a={element:t,isDehydrated:!1,cache:s.cache},i.updateQueue.baseState=a,i.memoizedState=a,i.flags&256){i=Zc(e,i,t,l);break e}else if(t!==n){n=di(Error(r(424)),i),Vt(n),i=Zc(e,i,t,l);break e}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(xe=Si(e.firstChild),Xe=i,ue=!0,zl=null,Ei=!0,l=Rc(i,null,t,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Xt(),t===n){i=Gi(e,i,l);break e}He(e,i,t,l)}i=i.child}return i;case 26:return ba(e,i),e===null?(l=ef(i.type,null,i.pendingProps,null))?i.memoizedState=l:ue||(l=i.type,e=i.pendingProps,t=Na(K.current).createElement(l),t[Le]=i,t[Ve]=e,Be(t,l,e),Oe(t),i.stateNode=t):i.memoizedState=ef(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Fa(i),e===null&&ue&&(t=i.stateNode=Wd(i.type,i.pendingProps,K.current),Xe=i,Ei=!0,n=xe,rl(i.type)?(iu=n,xe=Si(t.firstChild)):xe=n),He(e,i,i.pendingProps.children,l),ba(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&ue&&((n=t=xe)&&(t=em(t,i.type,i.pendingProps,Ei),t!==null?(i.stateNode=t,Xe=i,xe=Si(t.firstChild),Ei=!1,n=!0):n=!1),n||Rl(i)),Fa(i),n=i.type,a=i.pendingProps,s=e!==null?e.memoizedProps:null,t=a.children,Wo(n,a)?t=null:s!==null&&Wo(n,s)&&(i.flags|=32),i.memoizedState!==null&&(n=Fs(e,i,yg,null,null,l),xn._currentValue=n),ba(e,i),He(e,i,t,l),i.child;case 6:return e===null&&ue&&((e=l=xe)&&(l=im(l,i.pendingProps,Ei),l!==null?(i.stateNode=l,Xe=i,xe=null,e=!0):e=!1),e||Rl(i)),null;case 13:return Kc(e,i,l);case 4:return ye(i,i.stateNode.containerInfo),t=i.pendingProps,e===null?i.child=ft(i,null,t,l):He(e,i,t,l),i.child;case 11:return qc(e,i,i.type,i.pendingProps,l);case 7:return He(e,i,i.pendingProps,l),i.child;case 8:return He(e,i,i.pendingProps.children,l),i.child;case 12:return He(e,i,i.pendingProps.children,l),i.child;case 10:return t=i.pendingProps,Ji(i,i.type,t.value),He(e,i,t.children,l),i.child;case 9:return n=i.type._context,t=i.pendingProps.children,jl(i),n=Ye(n),t=t(n),i.flags|=1,He(e,i,t,l),i.child;case 14:return Lc(e,i,i.type,i.pendingProps,l);case 15:return Yc(e,i,i.type,i.pendingProps,l);case 19:return Fc(e,i,l);case 31:return t=i.pendingProps,l=i.mode,t={mode:t.mode,children:t.children},e===null?(l=Sa(t,l),l.ref=i.ref,i.child=l,l.return=i,i=l):(l=Oi(e.child,t),l.ref=i.ref,i.child=l,l.return=i,i=l),i;case 22:return Qc(e,i,l);case 24:return jl(i),t=Ye(De),e===null?(n=Ls(),n===null&&(n=ve,a=Gs(),n.pooledCache=a,a.refCount++,a!==null&&(n.pooledCacheLanes|=l),n=a),i.memoizedState={parent:t,cache:n},Qs(i),Ji(i,De,n)):((e.lanes&l)!==0&&(Xs(e,i),It(i,null,null,l),Wt()),n=e.memoizedState,a=i.memoizedState,n.parent!==t?(n={parent:t,cache:t},i.memoizedState=n,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=n),Ji(i,De,t)):(t=a.cache,Ji(i,De,t),t!==n.cache&&Bs(i,[De],l,!0))),He(e,i,i.pendingProps.children,l),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function qi(e){e.flags|=4}function Wc(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sf(i)){if(i=mi.current,i!==null&&((ae&4194048)===ae?Ti!==null:(ae&62914560)!==ae&&(ae&536870912)===0||i!==Ti))throw Ft=Ys,Nr;e.flags|=8192}}function xa(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Du():536870912,e.lanes|=i,pt|=i)}function sn(e,i){if(!ue)switch(e.tailMode){case"hidden":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var t=null;l!==null;)l.alternate!==null&&(t=l),l=l.sibling;t===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Se(e){var i=e.alternate!==null&&e.alternate.child===e.child,l=0,t=0;if(i)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,t|=n.subtreeFlags&65011712,t|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=l,i}function zg(e,i,l){var t=i.pendingProps;switch(Us(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(i),null;case 1:return Se(i),null;case 3:return l=i.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),i.memoizedState.cache!==t&&(i.flags|=2048),Hi(De),Vi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Qt(i)?qi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Dr())),Se(i),null;case 26:return l=i.memoizedState,e===null?(qi(i),l!==null?(Se(i),Wc(i,l)):(Se(i),i.flags&=-16777217)):l?l!==e.memoizedState?(qi(i),Se(i),Wc(i,l)):(Se(i),i.flags&=-16777217):(e.memoizedProps!==t&&qi(i),Se(i),i.flags&=-16777217),null;case 27:wn(i),l=K.current;var n=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==t&&qi(i);else{if(!t){if(i.stateNode===null)throw Error(r(166));return Se(i),null}e=Y.current,Qt(i)?zr(i):(e=Wd(n,t,l),i.stateNode=e,qi(i))}return Se(i),null;case 5:if(wn(i),l=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==t&&qi(i);else{if(!t){if(i.stateNode===null)throw Error(r(166));return Se(i),null}if(e=Y.current,Qt(i))zr(i);else{switch(n=Na(K.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof t.is=="string"?n.createElement("select",{is:t.is}):n.createElement("select"),t.multiple?e.multiple=!0:t.size&&(e.size=t.size);break;default:e=typeof t.is=="string"?n.createElement(l,{is:t.is}):n.createElement(l)}}e[Le]=i,e[Ve]=t;e:for(n=i.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i.stateNode=e;e:switch(Be(e,l,t),l){case"button":case"input":case"select":case"textarea":e=!!t.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&qi(i)}}return Se(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==t&&qi(i);else{if(typeof t!="string"&&i.stateNode===null)throw Error(r(166));if(e=K.current,Qt(i)){if(e=i.stateNode,l=i.memoizedProps,t=null,n=Xe,n!==null)switch(n.tag){case 27:case 5:t=n.memoizedProps}e[Le]=i,e=!!(e.nodeValue===l||t!==null&&t.suppressHydrationWarning===!0||Vd(e.nodeValue,l)),e||Rl(i)}else e=Na(e).createTextNode(t),e[Le]=i,i.stateNode=e}return Se(i),null;case 13:if(t=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Qt(i),t!==null&&t.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Le]=i}else Xt(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Se(i),n=!1}else n=Dr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return i.flags&256?(Bi(i),i):(Bi(i),null)}if(Bi(i),(i.flags&128)!==0)return i.lanes=l,i;if(l=t!==null,e=e!==null&&e.memoizedState!==null,l){t=i.child,n=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(n=t.alternate.memoizedState.cachePool.pool);var a=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048)}return l!==e&&l&&(i.child.flags|=8192),xa(i,i.updateQueue),Se(i),null;case 4:return Vi(),e===null&&Zo(i.stateNode.containerInfo),Se(i),null;case 10:return Hi(i.type),Se(i),null;case 19:if(B(je),n=i.memoizedState,n===null)return Se(i),null;if(t=(i.flags&128)!==0,a=n.rendering,a===null)if(t)sn(n,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(a=pa(e),a!==null){for(i.flags|=128,sn(n,!1),e=a.updateQueue,i.updateQueue=e,xa(i,e),i.subtreeFlags=0,e=l,l=i.child;l!==null;)Cr(l,e),l=l.sibling;return H(je,je.current&1|2),i.child}e=e.sibling}n.tail!==null&&Ai()>Ta&&(i.flags|=128,t=!0,sn(n,!1),i.lanes=4194304)}else{if(!t)if(e=pa(a),e!==null){if(i.flags|=128,t=!0,e=e.updateQueue,i.updateQueue=e,xa(i,e),sn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!a.alternate&&!ue)return Se(i),null}else 2*Ai()-n.renderingStartTime>Ta&&l!==536870912&&(i.flags|=128,t=!0,sn(n,!1),i.lanes=4194304);n.isBackwards?(a.sibling=i.child,i.child=a):(e=n.last,e!==null?e.sibling=a:i.child=a,n.last=a)}return n.tail!==null?(i=n.tail,n.rendering=i,n.tail=i.sibling,n.renderingStartTime=Ai(),i.sibling=null,e=je.current,H(je,t?e&1|2:e&1),i):(Se(i),null);case 22:case 23:return Bi(i),Ks(),t=i.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(i.flags|=8192):t&&(i.flags|=8192),t?(l&536870912)!==0&&(i.flags&128)===0&&(Se(i),i.subtreeFlags&6&&(i.flags|=8192)):Se(i),l=i.updateQueue,l!==null&&xa(i,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==l&&(i.flags|=2048),e!==null&&B(Ol),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Hi(De),Se(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Rg(e,i){switch(Us(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Hi(De),Vi(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return wn(i),null;case 13:if(Bi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Xt()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return B(je),null;case 4:return Vi(),null;case 10:return Hi(i.type),null;case 22:case 23:return Bi(i),Ks(),e!==null&&B(Ol),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Hi(De),null;case 25:return null;default:return null}}function Ic(e,i){switch(Us(i),i.tag){case 3:Hi(De),Vi();break;case 26:case 27:case 5:wn(i);break;case 4:Vi();break;case 13:Bi(i);break;case 19:B(je);break;case 10:Hi(i.type);break;case 22:case 23:Bi(i),Ks(),e!==null&&B(Ol);break;case 24:Hi(De)}}function on(e,i){try{var l=i.updateQueue,t=l!==null?l.lastEffect:null;if(t!==null){var n=t.next;l=n;do{if((l.tag&e)===e){t=void 0;var a=l.create,s=l.inst;t=a(),s.destroy=t}l=l.next}while(l!==n)}}catch(o){pe(i,i.return,o)}}function il(e,i,l){try{var t=i.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var a=n.next;t=a;do{if((t.tag&e)===e){var s=t.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,n=i;var d=l,S=o;try{S()}catch(M){pe(n,d,M)}}}t=t.next}while(t!==a)}}catch(M){pe(i,i.return,M)}}function $c(e){var i=e.updateQueue;if(i!==null){var l=e.stateNode;try{Lr(i,l)}catch(t){pe(e,e.return,t)}}}function ed(e,i,l){l.props=Ul(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(t){pe(e,i,t)}}function un(e,i){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof l=="function"?e.refCleanup=l(t):l.current=t}}catch(n){pe(e,i,n)}}function Ci(e,i){var l=e.ref,t=e.refCleanup;if(l!==null)if(typeof t=="function")try{t()}catch(n){pe(e,i,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){pe(e,i,n)}else l.current=null}function id(e){var i=e.type,l=e.memoizedProps,t=e.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break e;case"img":l.src?t.src=l.src:l.srcSet&&(t.srcset=l.srcSet)}}catch(n){pe(e,e.return,n)}}function Ao(e,i,l){try{var t=e.stateNode;Fg(t,e.type,l,i),t[Ve]=i}catch(n){pe(e,e.return,n)}}function ld(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rl(e.type)||e.tag===4}function Eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function To(e,i,l){var t=e.tag;if(t===5||t===6)e=e.stateNode,i?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,i):(i=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,i.appendChild(e),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=Ua));else if(t!==4&&(t===27&&rl(e.type)&&(l=e.stateNode,i=null),e=e.child,e!==null))for(To(e,i,l),e=e.sibling;e!==null;)To(e,i,l),e=e.sibling}function Aa(e,i,l){var t=e.tag;if(t===5||t===6)e=e.stateNode,i?l.insertBefore(e,i):l.appendChild(e);else if(t!==4&&(t===27&&rl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Aa(e,i,l),e=e.sibling;e!==null;)Aa(e,i,l),e=e.sibling}function td(e){var i=e.stateNode,l=e.memoizedProps;try{for(var t=e.type,n=i.attributes;n.length;)i.removeAttributeNode(n[0]);Be(i,t,l),i[Le]=e,i[Ve]=l}catch(a){pe(e,e.return,a)}}var Li=!1,Ce=!1,Co=!1,nd=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Dg(e,i){if(e=e.containerInfo,Fo=La,e=mr(e),As(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var t=l.getSelection&&l.getSelection();if(t&&t.rangeCount!==0){l=t.anchorNode;var n=t.anchorOffset,a=t.focusNode;t=t.focusOffset;try{l.nodeType,a.nodeType}catch{l=null;break e}var s=0,o=-1,d=-1,S=0,M=0,j=e,A=null;i:for(;;){for(var E;j!==l||n!==0&&j.nodeType!==3||(o=s+n),j!==a||t!==0&&j.nodeType!==3||(d=s+t),j.nodeType===3&&(s+=j.nodeValue.length),(E=j.firstChild)!==null;)A=j,j=E;for(;;){if(j===e)break i;if(A===l&&++S===n&&(o=s),A===a&&++M===t&&(d=s),(E=j.nextSibling)!==null)break;j=A,A=j.parentNode}j=E}l=o===-1||d===-1?null:{start:o,end:d}}else l=null}l=l||{start:0,end:0}}else l=null;for(Po={focusedElem:e,selectionRange:l},La=!1,Ue=i;Ue!==null;)if(i=Ue,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ue=e;else for(;Ue!==null;){switch(i=Ue,a=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,l=i,n=a.memoizedProps,a=a.memoizedState,t=l.stateNode;try{var Z=Ul(l.type,n,l.elementType===l.type);e=t.getSnapshotBeforeUpdate(Z,a),t.__reactInternalSnapshotBeforeUpdate=e}catch(Q){pe(l,l.return,Q)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,l=e.nodeType,l===9)$o(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$o(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Ue=e;break}Ue=i.return}}function ad(e,i,l){var t=l.flags;switch(l.tag){case 0:case 11:case 15:ll(e,l),t&4&&on(5,l);break;case 1:if(ll(e,l),t&4)if(e=l.stateNode,i===null)try{e.componentDidMount()}catch(s){pe(l,l.return,s)}else{var n=Ul(l.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(n,i,e.__reactInternalSnapshotBeforeUpdate)}catch(s){pe(l,l.return,s)}}t&64&&$c(l),t&512&&un(l,l.return);break;case 3:if(ll(e,l),t&64&&(e=l.updateQueue,e!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{Lr(e,i)}catch(s){pe(l,l.return,s)}}break;case 27:i===null&&t&4&&td(l);case 26:case 5:ll(e,l),i===null&&t&4&&id(l),t&512&&un(l,l.return);break;case 12:ll(e,l);break;case 13:ll(e,l),t&4&&ud(e,l),t&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Gg.bind(null,l),lm(e,l))));break;case 22:if(t=l.memoizedState!==null||Li,!t){i=i!==null&&i.memoizedState!==null||Ce,n=Li;var a=Ce;Li=t,(Ce=i)&&!a?tl(e,l,(l.subtreeFlags&8772)!==0):ll(e,l),Li=n,Ce=a}break;case 30:break;default:ll(e,l)}}function sd(e){var i=e.alternate;i!==null&&(e.alternate=null,sd(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ts(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Ke=!1;function Yi(e,i,l){for(l=l.child;l!==null;)od(e,i,l),l=l.sibling}function od(e,i,l){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Rt,l)}catch{}switch(l.tag){case 26:Ce||Ci(l,i),Yi(e,i,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ce||Ci(l,i);var t=be,n=Ke;rl(l.type)&&(be=l.stateNode,Ke=!1),Yi(e,i,l),vn(l.stateNode),be=t,Ke=n;break;case 5:Ce||Ci(l,i);case 6:if(t=be,n=Ke,be=null,Yi(e,i,l),be=t,Ke=n,be!==null)if(Ke)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(l.stateNode)}catch(a){pe(l,i,a)}else try{be.removeChild(l.stateNode)}catch(a){pe(l,i,a)}break;case 18:be!==null&&(Ke?(e=be,Fd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Cn(e)):Fd(be,l.stateNode));break;case 4:t=be,n=Ke,be=l.stateNode.containerInfo,Ke=!0,Yi(e,i,l),be=t,Ke=n;break;case 0:case 11:case 14:case 15:Ce||il(2,l,i),Ce||il(4,l,i),Yi(e,i,l);break;case 1:Ce||(Ci(l,i),t=l.stateNode,typeof t.componentWillUnmount=="function"&&ed(l,i,t)),Yi(e,i,l);break;case 21:Yi(e,i,l);break;case 22:Ce=(t=Ce)||l.memoizedState!==null,Yi(e,i,l),Ce=t;break;default:Yi(e,i,l)}}function ud(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cn(e)}catch(l){pe(i,i.return,l)}}function jg(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new nd),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new nd),i;default:throw Error(r(435,e.tag))}}function Mo(e,i){var l=jg(e);i.forEach(function(t){var n=qg.bind(null,e,t);l.has(t)||(l.add(t),t.then(n,n))})}function ni(e,i){var l=i.deletions;if(l!==null)for(var t=0;t<l.length;t++){var n=l[t],a=e,s=i,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(rl(o.type)){be=o.stateNode,Ke=!1;break e}break;case 5:be=o.stateNode,Ke=!1;break e;case 3:case 4:be=o.stateNode.containerInfo,Ke=!0;break e}o=o.return}if(be===null)throw Error(r(160));od(a,s,n),be=null,Ke=!1,a=n.alternate,a!==null&&(a.return=null),n.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)rd(i,e),i=i.sibling}var bi=null;function rd(e,i){var l=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(i,e),ai(e),t&4&&(il(3,e,e.return),on(3,e),il(5,e,e.return));break;case 1:ni(i,e),ai(e),t&512&&(Ce||l===null||Ci(l,l.return)),t&64&&Li&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?t:l.concat(t))));break;case 26:var n=bi;if(ni(i,e),ai(e),t&512&&(Ce||l===null||Ci(l,l.return)),t&4){var a=l!==null?l.memoizedState:null;if(t=e.memoizedState,l===null)if(t===null)if(e.stateNode===null){e:{t=e.type,l=e.memoizedProps,n=n.ownerDocument||n;i:switch(t){case"title":a=n.getElementsByTagName("title")[0],(!a||a[Ot]||a[Le]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(t),n.head.insertBefore(a,n.querySelector("head > title"))),Be(a,t,l),a[Le]=e,Oe(a),t=a;break e;case"link":var s=nf("link","href",n).get(t+(l.href||""));if(s){for(var o=0;o<s.length;o++)if(a=s[o],a.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&a.getAttribute("rel")===(l.rel==null?null:l.rel)&&a.getAttribute("title")===(l.title==null?null:l.title)&&a.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(o,1);break i}}a=n.createElement(t),Be(a,t,l),n.head.appendChild(a);break;case"meta":if(s=nf("meta","content",n).get(t+(l.content||""))){for(o=0;o<s.length;o++)if(a=s[o],a.getAttribute("content")===(l.content==null?null:""+l.content)&&a.getAttribute("name")===(l.name==null?null:l.name)&&a.getAttribute("property")===(l.property==null?null:l.property)&&a.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&a.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(o,1);break i}}a=n.createElement(t),Be(a,t,l),n.head.appendChild(a);break;default:throw Error(r(468,t))}a[Le]=e,Oe(a),t=a}e.stateNode=t}else af(n,e.type,e.stateNode);else e.stateNode=tf(n,t,e.memoizedProps);else a!==t?(a===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):a.count--,t===null?af(n,e.type,e.stateNode):tf(n,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Ao(e,e.memoizedProps,l.memoizedProps)}break;case 27:ni(i,e),ai(e),t&512&&(Ce||l===null||Ci(l,l.return)),l!==null&&t&4&&Ao(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ni(i,e),ai(e),t&512&&(Ce||l===null||Ci(l,l.return)),e.flags&32){n=e.stateNode;try{Jl(n,"")}catch(E){pe(e,e.return,E)}}t&4&&e.stateNode!=null&&(n=e.memoizedProps,Ao(e,n,l!==null?l.memoizedProps:n)),t&1024&&(Co=!0);break;case 6:if(ni(i,e),ai(e),t&4){if(e.stateNode===null)throw Error(r(162));t=e.memoizedProps,l=e.stateNode;try{l.nodeValue=t}catch(E){pe(e,e.return,E)}}break;case 3:if(Ba=null,n=bi,bi=Ha(i.containerInfo),ni(i,e),bi=n,ai(e),t&4&&l!==null&&l.memoizedState.isDehydrated)try{Cn(i.containerInfo)}catch(E){pe(e,e.return,E)}Co&&(Co=!1,cd(e));break;case 4:t=bi,bi=Ha(e.stateNode.containerInfo),ni(i,e),ai(e),bi=t;break;case 12:ni(i,e),ai(e);break;case 13:ni(i,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(wo=Ai()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Mo(e,t)));break;case 22:n=e.memoizedState!==null;var d=l!==null&&l.memoizedState!==null,S=Li,M=Ce;if(Li=S||n,Ce=M||d,ni(i,e),Ce=M,Li=S,ai(e),t&8192)e:for(i=e.stateNode,i._visibility=n?i._visibility&-2:i._visibility|1,n&&(l===null||d||Li||Ce||Nl(e)),l=null,i=e;;){if(i.tag===5||i.tag===26){if(l===null){d=l=i;try{if(a=d.stateNode,n)s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=d.stateNode;var j=d.memoizedProps.style,A=j!=null&&j.hasOwnProperty("display")?j.display:null;o.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(E){pe(d,d.return,E)}}}else if(i.tag===6){if(l===null){d=i;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(E){pe(d,d.return,E)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;l===i&&(l=null),i=i.return}l===i&&(l=null),i.sibling.return=i.return,i=i.sibling}t&4&&(t=e.updateQueue,t!==null&&(l=t.retryQueue,l!==null&&(t.retryQueue=null,Mo(e,l))));break;case 19:ni(i,e),ai(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Mo(e,t)));break;case 30:break;case 21:break;default:ni(i,e),ai(e)}}function ai(e){var i=e.flags;if(i&2){try{for(var l,t=e.return;t!==null;){if(ld(t)){l=t;break}t=t.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,a=Eo(e);Aa(e,a,n);break;case 5:var s=l.stateNode;l.flags&32&&(Jl(s,""),l.flags&=-33);var o=Eo(e);Aa(e,o,s);break;case 3:case 4:var d=l.stateNode.containerInfo,S=Eo(e);To(e,S,d);break;default:throw Error(r(161))}}catch(M){pe(e,e.return,M)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function cd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;cd(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ll(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ad(e,i.alternate,i),i=i.sibling}function Nl(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:il(4,i,i.return),Nl(i);break;case 1:Ci(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&ed(i,i.return,l),Nl(i);break;case 27:vn(i.stateNode);case 26:case 5:Ci(i,i.return),Nl(i);break;case 22:i.memoizedState===null&&Nl(i);break;case 30:Nl(i);break;default:Nl(i)}e=e.sibling}}function tl(e,i,l){for(l=l&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var t=i.alternate,n=e,a=i,s=a.flags;switch(a.tag){case 0:case 11:case 15:tl(n,a,l),on(4,a);break;case 1:if(tl(n,a,l),t=a,n=t.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){pe(t,t.return,S)}if(t=a,n=t.updateQueue,n!==null){var o=t.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)qr(d[n],o)}catch(S){pe(t,t.return,S)}}l&&s&64&&$c(a),un(a,a.return);break;case 27:td(a);case 26:case 5:tl(n,a,l),l&&t===null&&s&4&&id(a),un(a,a.return);break;case 12:tl(n,a,l);break;case 13:tl(n,a,l),l&&s&4&&ud(n,a);break;case 22:a.memoizedState===null&&tl(n,a,l),un(a,a.return);break;case 30:break;default:tl(n,a,l)}i=i.sibling}}function zo(e,i){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Zt(l))}function Ro(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zt(e))}function Mi(e,i,l,t){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)dd(e,i,l,t),i=i.sibling}function dd(e,i,l,t){var n=i.flags;switch(i.tag){case 0:case 11:case 15:Mi(e,i,l,t),n&2048&&on(9,i);break;case 1:Mi(e,i,l,t);break;case 3:Mi(e,i,l,t),n&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zt(e)));break;case 12:if(n&2048){Mi(e,i,l,t),e=i.stateNode;try{var a=i.memoizedProps,s=a.id,o=a.onPostCommit;typeof o=="function"&&o(s,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){pe(i,i.return,d)}}else Mi(e,i,l,t);break;case 13:Mi(e,i,l,t);break;case 23:break;case 22:a=i.stateNode,s=i.alternate,i.memoizedState!==null?a._visibility&2?Mi(e,i,l,t):rn(e,i):a._visibility&2?Mi(e,i,l,t):(a._visibility|=2,ht(e,i,l,t,(i.subtreeFlags&10256)!==0)),n&2048&&zo(s,i);break;case 24:Mi(e,i,l,t),n&2048&&Ro(i.alternate,i);break;default:Mi(e,i,l,t)}}function ht(e,i,l,t,n){for(n=n&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var a=e,s=i,o=l,d=t,S=s.flags;switch(s.tag){case 0:case 11:case 15:ht(a,s,o,d,n),on(8,s);break;case 23:break;case 22:var M=s.stateNode;s.memoizedState!==null?M._visibility&2?ht(a,s,o,d,n):rn(a,s):(M._visibility|=2,ht(a,s,o,d,n)),n&&S&2048&&zo(s.alternate,s);break;case 24:ht(a,s,o,d,n),n&&S&2048&&Ro(s.alternate,s);break;default:ht(a,s,o,d,n)}i=i.sibling}}function rn(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var l=e,t=i,n=t.flags;switch(t.tag){case 22:rn(l,t),n&2048&&zo(t.alternate,t);break;case 24:rn(l,t),n&2048&&Ro(t.alternate,t);break;default:rn(l,t)}i=i.sibling}}var cn=8192;function gt(e){if(e.subtreeFlags&cn)for(e=e.child;e!==null;)fd(e),e=e.sibling}function fd(e){switch(e.tag){case 26:gt(e),e.flags&cn&&e.memoizedState!==null&&mm(bi,e.memoizedState,e.memoizedProps);break;case 5:gt(e);break;case 3:case 4:var i=bi;bi=Ha(e.stateNode.containerInfo),gt(e),bi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=cn,cn=16777216,gt(e),cn=i):gt(e));break;default:gt(e)}}function hd(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function dn(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var l=0;l<i.length;l++){var t=i[l];Ue=t,md(t,e)}hd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gd(e),e=e.sibling}function gd(e){switch(e.tag){case 0:case 11:case 15:dn(e),e.flags&2048&&il(9,e,e.return);break;case 3:dn(e);break;case 12:dn(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ea(e)):dn(e);break;default:dn(e)}}function Ea(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var l=0;l<i.length;l++){var t=i[l];Ue=t,md(t,e)}hd(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:il(8,i,i.return),Ea(i);break;case 22:l=i.stateNode,l._visibility&2&&(l._visibility&=-3,Ea(i));break;default:Ea(i)}e=e.sibling}}function md(e,i){for(;Ue!==null;){var l=Ue;switch(l.tag){case 0:case 11:case 15:il(8,l,i);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var t=l.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Zt(l.memoizedState.cache)}if(t=l.child,t!==null)t.return=l,Ue=t;else e:for(l=e;Ue!==null;){t=Ue;var n=t.sibling,a=t.return;if(sd(t),t===l){Ue=null;break e}if(n!==null){n.return=a,Ue=n;break e}Ue=a}}}var Og={getCacheForType:function(e){var i=Ye(De),l=i.data.get(e);return l===void 0&&(l=e(),i.data.set(e,l)),l}},wg=typeof WeakMap=="function"?WeakMap:Map,re=0,ve=null,$=null,ae=0,ce=0,si=null,nl=!1,mt=!1,Do=!1,Qi=0,Ae=0,al=0,Hl=0,jo=0,pi=0,pt=0,fn=null,Je=null,Oo=!1,wo=0,Ta=1/0,Ca=null,sl=null,_e=0,ol=null,vt=null,yt=0,Uo=0,No=null,pd=null,hn=0,Ho=null;function oi(){if((re&2)!==0&&ae!==0)return ae&-ae;if(z.T!==null){var e=at;return e!==0?e:Qo()}return wu()}function vd(){pi===0&&(pi=(ae&536870912)===0||ue?Ru():536870912);var e=mi.current;return e!==null&&(e.flags|=32),pi}function ui(e,i,l){(e===ve&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(bt(e,0),ul(e,ae,pi,!1)),jt(e,l),((re&2)===0||e!==ve)&&(e===ve&&((re&2)===0&&(Hl|=l),Ae===4&&ul(e,ae,pi,!1)),zi(e))}function yd(e,i,l){if((re&6)!==0)throw Error(r(327));var t=!l&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),n=t?Hg(e,i):Go(e,i,!0),a=t;do{if(n===0){mt&&!t&&ul(e,i,0,!1);break}else{if(l=e.current.alternate,a&&!Ug(l)){n=Go(e,i,!1),a=!1;continue}if(n===2){if(a=i,e.errorRecoveryDisabledLanes&a)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){i=s;e:{var o=e;n=fn;var d=o.current.memoizedState.isDehydrated;if(d&&(bt(o,s).flags|=256),s=Go(o,s,!1),s!==2){if(Do&&!d){o.errorRecoveryDisabledLanes|=a,Hl|=a,n=4;break e}a=Je,Je=n,a!==null&&(Je===null?Je=a:Je.push.apply(Je,a))}n=s}if(a=!1,n!==2)continue}}if(n===1){bt(e,0),ul(e,i,0,!0);break}e:{switch(t=e,a=n,a){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ul(t,i,pi,!nl);break e;case 2:Je=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(n=wo+300-Ai(),10<n)){if(ul(t,i,pi,!nl),_n(t,0,!0)!==0)break e;t.timeoutHandle=Kd(bd.bind(null,t,l,Je,Ca,Oo,i,pi,Hl,pt,nl,a,2,-0,0),n);break e}bd(t,l,Je,Ca,Oo,i,pi,Hl,pt,nl,a,0,-0,0)}}break}while(!0);zi(e)}function bd(e,i,l,t,n,a,s,o,d,S,M,j,A,E){if(e.timeoutHandle=-1,j=i.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Sn={stylesheets:null,count:0,unsuspend:gm},fd(i),j=pm(),j!==null)){e.cancelPendingCommit=j(Md.bind(null,e,i,a,l,t,n,s,o,d,M,1,A,E)),ul(e,a,s,!S);return}Md(e,i,a,l,t,n,s,o,d)}function Ug(e){for(var i=e;;){var l=i.tag;if((l===0||l===11||l===15)&&i.flags&16384&&(l=i.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var t=0;t<l.length;t++){var n=l[t],a=n.getSnapshot;n=n.value;try{if(!li(a(),n))return!1}catch{return!1}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ul(e,i,l,t){i&=~jo,i&=~Hl,e.suspendedLanes|=i,e.pingedLanes&=~i,t&&(e.warmLanes|=i),t=e.expirationTimes;for(var n=i;0<n;){var a=31-ii(n),s=1<<a;t[a]=-1,n&=~s}l!==0&&ju(e,l,i)}function Ma(){return(re&6)===0?(gn(0),!1):!0}function _o(){if($!==null){if(ce===0)var e=$.return;else e=$,Ni=Dl=null,Is(e),dt=null,nn=0,e=$;for(;e!==null;)Ic(e.alternate,e),e=e.return;$=null}}function bt(e,i){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Wg(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),_o(),ve=e,$=l=Oi(e.current,null),ae=i,ce=0,si=null,nl=!1,mt=Dt(e,i),Do=!1,pt=pi=jo=Hl=al=Ae=0,Je=fn=null,Oo=!1,(i&8)!==0&&(i|=i&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=i;0<t;){var n=31-ii(t),a=1<<n;i|=e[n],t&=~a}return Qi=i,Jn(),l}function Sd(e,i){P=null,z.H=ha,i===Jt||i===ta?(i=Br(),ce=3):i===Nr?(i=Br(),ce=4):ce=i===Gc?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,$===null&&(Ae=1,ya(e,di(i,e.current)))}function xd(){var e=z.H;return z.H=ha,e===null?ha:e}function Ad(){var e=z.A;return z.A=Og,e}function Bo(){Ae=4,nl||(ae&4194048)!==ae&&mi.current!==null||(mt=!0),(al&134217727)===0&&(Hl&134217727)===0||ve===null||ul(ve,ae,pi,!1)}function Go(e,i,l){var t=re;re|=2;var n=xd(),a=Ad();(ve!==e||ae!==i)&&(Ca=null,bt(e,i)),i=!1;var s=Ae;e:do try{if(ce!==0&&$!==null){var o=$,d=si;switch(ce){case 8:_o(),s=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var S=ce;if(ce=0,si=null,St(e,o,d,S),l&&mt){s=0;break e}break;default:S=ce,ce=0,si=null,St(e,o,d,S)}}Ng(),s=Ae;break}catch(M){Sd(e,M)}while(!0);return i&&e.shellSuspendCounter++,Ni=Dl=null,re=t,z.H=n,z.A=a,$===null&&(ve=null,ae=0,Jn()),s}function Ng(){for(;$!==null;)Ed($)}function Hg(e,i){var l=re;re|=2;var t=xd(),n=Ad();ve!==e||ae!==i?(Ca=null,Ta=Ai()+500,bt(e,i)):mt=Dt(e,i);e:do try{if(ce!==0&&$!==null){i=$;var a=si;i:switch(ce){case 1:ce=0,si=null,St(e,i,a,1);break;case 2:case 9:if(Hr(a)){ce=0,si=null,Td(i);break}i=function(){ce!==2&&ce!==9||ve!==e||(ce=7),zi(e)},a.then(i,i);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:Hr(a)?(ce=0,si=null,Td(i)):(ce=0,si=null,St(e,i,a,7));break;case 5:var s=null;switch($.tag){case 26:s=$.memoizedState;case 5:case 27:var o=$;if(!s||sf(s)){ce=0,si=null;var d=o.sibling;if(d!==null)$=d;else{var S=o.return;S!==null?($=S,za(S)):$=null}break i}}ce=0,si=null,St(e,i,a,5);break;case 6:ce=0,si=null,St(e,i,a,6);break;case 8:_o(),Ae=6;break e;default:throw Error(r(462))}}_g();break}catch(M){Sd(e,M)}while(!0);return Ni=Dl=null,z.H=t,z.A=n,re=l,$!==null?0:(ve=null,ae=0,Jn(),Ae)}function _g(){for(;$!==null&&!nh();)Ed($)}function Ed(e){var i=Pc(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,i===null?za(e):$=i}function Td(e){var i=e,l=i.alternate;switch(i.tag){case 15:case 0:i=Vc(l,i,i.pendingProps,i.type,void 0,ae);break;case 11:i=Vc(l,i,i.pendingProps,i.type.render,i.ref,ae);break;case 5:Is(i);default:Ic(l,i),i=$=Cr(i,Qi),i=Pc(l,i,Qi)}e.memoizedProps=e.pendingProps,i===null?za(e):$=i}function St(e,i,l,t){Ni=Dl=null,Is(i),dt=null,nn=0;var n=i.return;try{if(Cg(e,n,i,l,ae)){Ae=1,ya(e,di(l,e.current)),$=null;return}}catch(a){if(n!==null)throw $=n,a;Ae=1,ya(e,di(l,e.current)),$=null;return}i.flags&32768?(ue||t===1?e=!0:mt||(ae&536870912)!==0?e=!1:(nl=e=!0,(t===2||t===9||t===3||t===6)&&(t=mi.current,t!==null&&t.tag===13&&(t.flags|=16384))),Cd(i,e)):za(i)}function za(e){var i=e;do{if((i.flags&32768)!==0){Cd(i,nl);return}e=i.return;var l=zg(i.alternate,i,Qi);if(l!==null){$=l;return}if(i=i.sibling,i!==null){$=i;return}$=i=e}while(i!==null);Ae===0&&(Ae=5)}function Cd(e,i){do{var l=Rg(e.alternate,e);if(l!==null){l.flags&=32767,$=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!i&&(e=e.sibling,e!==null)){$=e;return}$=e=l}while(e!==null);Ae=6,$=null}function Md(e,i,l,t,n,a,s,o,d){e.cancelPendingCommit=null;do Ra();while(_e!==0);if((re&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(a=i.lanes|i.childLanes,a|=zs,gh(e,l,a,s,o,d),e===ve&&($=ve=null,ae=0),vt=i,ol=e,yt=l,Uo=a,No=n,pd=t,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lg(Un,function(){return Od(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||t){t=z.T,z.T=null,n=_.p,_.p=2,s=re,re|=4;try{Dg(e,i,l)}finally{re=s,_.p=n,z.T=t}}_e=1,zd(),Rd(),Dd()}}function zd(){if(_e===1){_e=0;var e=ol,i=vt,l=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null;var t=_.p;_.p=2;var n=re;re|=4;try{rd(i,e);var a=Po,s=mr(e.containerInfo),o=a.focusedElem,d=a.selectionRange;if(s!==o&&o&&o.ownerDocument&&gr(o.ownerDocument.documentElement,o)){if(d!==null&&As(o)){var S=d.start,M=d.end;if(M===void 0&&(M=S),"selectionStart"in o)o.selectionStart=S,o.selectionEnd=Math.min(M,o.value.length);else{var j=o.ownerDocument||document,A=j&&j.defaultView||window;if(A.getSelection){var E=A.getSelection(),Z=o.textContent.length,Q=Math.min(d.start,Z),ge=d.end===void 0?Q:Math.min(d.end,Z);!E.extend&&Q>ge&&(s=ge,ge=Q,Q=s);var v=hr(o,Q),m=hr(o,ge);if(v&&m&&(E.rangeCount!==1||E.anchorNode!==v.node||E.anchorOffset!==v.offset||E.focusNode!==m.node||E.focusOffset!==m.offset)){var b=j.createRange();b.setStart(v.node,v.offset),E.removeAllRanges(),Q>ge?(E.addRange(b),E.extend(m.node,m.offset)):(b.setEnd(m.node,m.offset),E.addRange(b))}}}}for(j=[],E=o;E=E.parentNode;)E.nodeType===1&&j.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<j.length;o++){var R=j[o];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}La=!!Fo,Po=Fo=null}finally{re=n,_.p=t,z.T=l}}e.current=i,_e=2}}function Rd(){if(_e===2){_e=0;var e=ol,i=vt,l=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||l){l=z.T,z.T=null;var t=_.p;_.p=2;var n=re;re|=4;try{ad(e,i.alternate,i)}finally{re=n,_.p=t,z.T=l}}_e=3}}function Dd(){if(_e===4||_e===3){_e=0,ah();var e=ol,i=vt,l=yt,t=pd;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_e=5:(_e=0,vt=ol=null,jd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(sl=null),is(l),i=i.stateNode,ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Rt,i,void 0,(i.current.flags&128)===128)}catch{}if(t!==null){i=z.T,n=_.p,_.p=2,z.T=null;try{for(var a=e.onRecoverableError,s=0;s<t.length;s++){var o=t[s];a(o.value,{componentStack:o.stack})}}finally{z.T=i,_.p=n}}(yt&3)!==0&&Ra(),zi(e),n=e.pendingLanes,(l&4194090)!==0&&(n&42)!==0?e===Ho?hn++:(hn=0,Ho=e):hn=0,gn(0)}}function jd(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Zt(i)))}function Ra(e){return zd(),Rd(),Dd(),Od()}function Od(){if(_e!==5)return!1;var e=ol,i=Uo;Uo=0;var l=is(yt),t=z.T,n=_.p;try{_.p=32>l?32:l,z.T=null,l=No,No=null;var a=ol,s=yt;if(_e=0,vt=ol=null,yt=0,(re&6)!==0)throw Error(r(331));var o=re;if(re|=4,gd(a.current),dd(a,a.current,s,l),re=o,gn(0,!1),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Rt,a)}catch{}return!0}finally{_.p=n,z.T=t,jd(e,i)}}function wd(e,i,l){i=di(l,i),i=ho(e.stateNode,i,2),e=Wi(e,i,2),e!==null&&(jt(e,2),zi(e))}function pe(e,i,l){if(e.tag===3)wd(e,e,l);else for(;i!==null;){if(i.tag===3){wd(i,e,l);break}else if(i.tag===1){var t=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(sl===null||!sl.has(t))){e=di(l,e),l=_c(2),t=Wi(i,l,2),t!==null&&(Bc(l,t,i,e),jt(t,2),zi(t));break}}i=i.return}}function qo(e,i,l){var t=e.pingCache;if(t===null){t=e.pingCache=new wg;var n=new Set;t.set(i,n)}else n=t.get(i),n===void 0&&(n=new Set,t.set(i,n));n.has(l)||(Do=!0,n.add(l),e=Bg.bind(null,e,i,l),i.then(e,e))}function Bg(e,i,l){var t=e.pingCache;t!==null&&t.delete(i),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ve===e&&(ae&l)===l&&(Ae===4||Ae===3&&(ae&62914560)===ae&&300>Ai()-wo?(re&2)===0&&bt(e,0):jo|=l,pt===ae&&(pt=0)),zi(e)}function Ud(e,i){i===0&&(i=Du()),e=it(e,i),e!==null&&(jt(e,i),zi(e))}function Gg(e){var i=e.memoizedState,l=0;i!==null&&(l=i.retryLane),Ud(e,l)}function qg(e,i){var l=0;switch(e.tag){case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(r(314))}t!==null&&t.delete(i),Ud(e,l)}function Lg(e,i){return Wa(e,i)}var Da=null,xt=null,Lo=!1,ja=!1,Yo=!1,_l=0;function zi(e){e!==xt&&e.next===null&&(xt===null?Da=xt=e:xt=xt.next=e),ja=!0,Lo||(Lo=!0,Qg())}function gn(e,i){if(!Yo&&ja){Yo=!0;do for(var l=!1,t=Da;t!==null;){if(e!==0){var n=t.pendingLanes;if(n===0)var a=0;else{var s=t.suspendedLanes,o=t.pingedLanes;a=(1<<31-ii(42|e)+1)-1,a&=n&~(s&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(l=!0,Bd(t,a))}else a=ae,a=_n(t,t===ve?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(a&3)===0||Dt(t,a)||(l=!0,Bd(t,a));t=t.next}while(l);Yo=!1}}function Yg(){Nd()}function Nd(){ja=Lo=!1;var e=0;_l!==0&&(Pg()&&(e=_l),_l=0);for(var i=Ai(),l=null,t=Da;t!==null;){var n=t.next,a=Hd(t,i);a===0?(t.next=null,l===null?Da=n:l.next=n,n===null&&(xt=l)):(l=t,(e!==0||(a&3)!==0)&&(ja=!0)),t=n}gn(e)}function Hd(e,i){for(var l=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var s=31-ii(a),o=1<<s,d=n[s];d===-1?((o&l)===0||(o&t)!==0)&&(n[s]=hh(o,i)):d<=i&&(e.expiredLanes|=o),a&=~o}if(i=ve,l=ae,l=_n(e,e===i?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,l===0||e===i&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&Ia(t),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Dt(e,l)){if(i=l&-l,i===e.callbackPriority)return i;switch(t!==null&&Ia(t),is(l)){case 2:case 8:l=Mu;break;case 32:l=Un;break;case 268435456:l=zu;break;default:l=Un}return t=_d.bind(null,e),l=Wa(l,t),e.callbackPriority=i,e.callbackNode=l,i}return t!==null&&t!==null&&Ia(t),e.callbackPriority=2,e.callbackNode=null,2}function _d(e,i){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ra()&&e.callbackNode!==l)return null;var t=ae;return t=_n(e,e===ve?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(yd(e,t,i),Hd(e,Ai()),e.callbackNode!=null&&e.callbackNode===l?_d.bind(null,e):null)}function Bd(e,i){if(Ra())return null;yd(e,i,!0)}function Qg(){Ig(function(){(re&6)!==0?Wa(Cu,Yg):Nd()})}function Qo(){return _l===0&&(_l=Ru()),_l}function Gd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yn(""+e)}function qd(e,i){var l=i.ownerDocument.createElement("input");return l.name=i.name,l.value=i.value,e.id&&l.setAttribute("form",e.id),i.parentNode.insertBefore(l,i),e=new FormData(e),l.parentNode.removeChild(l),e}function Xg(e,i,l,t,n){if(i==="submit"&&l&&l.stateNode===n){var a=Gd((n[Ve]||null).action),s=t.submitter;s&&(i=(i=s[Ve]||null)?Gd(i.formAction):s.getAttribute("formAction"),i!==null&&(a=i,s=null));var o=new kn("action","action",null,t,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(_l!==0){var d=s?qd(n,s):new FormData(n);oo(l,{pending:!0,data:d,method:n.method,action:a},null,d)}}else typeof a=="function"&&(o.preventDefault(),d=s?qd(n,s):new FormData(n),oo(l,{pending:!0,data:d,method:n.method,action:a},a,d))},currentTarget:n}]})}}for(var Xo=0;Xo<Ms.length;Xo++){var Vo=Ms[Xo],Vg=Vo.toLowerCase(),kg=Vo[0].toUpperCase()+Vo.slice(1);yi(Vg,"on"+kg)}yi(yr,"onAnimationEnd"),yi(br,"onAnimationIteration"),yi(Sr,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(ug,"onTransitionRun"),yi(rg,"onTransitionStart"),yi(cg,"onTransitionCancel"),yi(xr,"onTransitionEnd"),kl("onMouseEnter",["mouseout","mouseover"]),kl("onMouseLeave",["mouseout","mouseover"]),kl("onPointerEnter",["pointerout","pointerover"]),kl("onPointerLeave",["pointerout","pointerover"]),Sl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Ld(e,i){i=(i&4)!==0;for(var l=0;l<e.length;l++){var t=e[l],n=t.event;t=t.listeners;e:{var a=void 0;if(i)for(var s=t.length-1;0<=s;s--){var o=t[s],d=o.instance,S=o.currentTarget;if(o=o.listener,d!==a&&n.isPropagationStopped())break e;a=o,n.currentTarget=S;try{a(n)}catch(M){va(M)}n.currentTarget=null,a=d}else for(s=0;s<t.length;s++){if(o=t[s],d=o.instance,S=o.currentTarget,o=o.listener,d!==a&&n.isPropagationStopped())break e;a=o,n.currentTarget=S;try{a(n)}catch(M){va(M)}n.currentTarget=null,a=d}}}}function ee(e,i){var l=i[ls];l===void 0&&(l=i[ls]=new Set);var t=e+"__bubble";l.has(t)||(Yd(i,e,2,!1),l.add(t))}function ko(e,i,l){var t=0;i&&(t|=4),Yd(l,e,t,i)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Zo(e){if(!e[Oa]){e[Oa]=!0,Nu.forEach(function(l){l!=="selectionchange"&&(Zg.has(l)||ko(l,!1,e),ko(l,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Oa]||(i[Oa]=!0,ko("selectionchange",!1,i))}}function Yd(e,i,l,t){switch(ff(i)){case 2:var n=bm;break;case 8:n=Sm;break;default:n=su}l=n.bind(null,i,l,e),n=void 0,!hs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(i,l,{capture:!0,passive:n}):e.addEventListener(i,l,!0):n!==void 0?e.addEventListener(i,l,{passive:n}):e.addEventListener(i,l,!1)}function Ko(e,i,l,t,n){var a=t;if((i&1)===0&&(i&2)===0&&t!==null)e:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var o=t.stateNode.containerInfo;if(o===n)break;if(s===4)for(s=t.return;s!==null;){var d=s.tag;if((d===3||d===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;o!==null;){if(s=Ql(o),s===null)return;if(d=s.tag,d===5||d===6||d===26||d===27){t=a=s;continue e}o=o.parentNode}}t=t.return}Ju(function(){var S=a,M=ds(l),j=[];e:{var A=Ar.get(e);if(A!==void 0){var E=kn,Z=e;switch(e){case"keypress":if(Xn(l)===0)break e;case"keydown":case"keyup":E=Lh;break;case"focusin":Z="focus",E=vs;break;case"focusout":Z="blur",E=vs;break;case"beforeblur":case"afterblur":E=vs;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Xh;break;case yr:case br:case Sr:E=Oh;break;case xr:E=kh;break;case"scroll":case"scrollend":E=Mh;break;case"wheel":E=Kh;break;case"copy":case"cut":case"paste":E=Uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=$u;break;case"toggle":case"beforetoggle":E=Fh}var Q=(i&4)!==0,ge=!Q&&(e==="scroll"||e==="scrollend"),v=Q?A!==null?A+"Capture":null:A;Q=[];for(var m=S,b;m!==null;){var R=m;if(b=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||b===null||v===null||(R=Ut(m,v),R!=null&&Q.push(pn(m,R,b))),ge)break;m=m.return}0<Q.length&&(A=new E(A,Z,null,l,M),j.push({event:A,listeners:Q}))}}if((i&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",A&&l!==cs&&(Z=l.relatedTarget||l.fromElement)&&(Ql(Z)||Z[Yl]))break e;if((E||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,E?(Z=l.relatedTarget||l.toElement,E=S,Z=Z?Ql(Z):null,Z!==null&&(ge=x(Z),Q=Z.tag,Z!==ge||Q!==5&&Q!==27&&Q!==6)&&(Z=null)):(E=null,Z=S),E!==Z)){if(Q=Wu,R="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(Q=$u,R="onPointerLeave",v="onPointerEnter",m="pointer"),ge=E==null?A:wt(E),b=Z==null?A:wt(Z),A=new Q(R,m+"leave",E,l,M),A.target=ge,A.relatedTarget=b,R=null,Ql(M)===S&&(Q=new Q(v,m+"enter",Z,l,M),Q.target=b,Q.relatedTarget=ge,R=Q),ge=R,E&&Z)i:{for(Q=E,v=Z,m=0,b=Q;b;b=At(b))m++;for(b=0,R=v;R;R=At(R))b++;for(;0<m-b;)Q=At(Q),m--;for(;0<b-m;)v=At(v),b--;for(;m--;){if(Q===v||v!==null&&Q===v.alternate)break i;Q=At(Q),v=At(v)}Q=null}else Q=null;E!==null&&Qd(j,A,E,Q,!1),Z!==null&&ge!==null&&Qd(j,ge,Z,Q,!0)}}e:{if(A=S?wt(S):window,E=A.nodeName&&A.nodeName.toLowerCase(),E==="select"||E==="input"&&A.type==="file")var G=or;else if(ar(A))if(ur)G=ag;else{G=tg;var I=lg}else E=A.nodeName,!E||E.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?S&&rs(S.elementType)&&(G=or):G=ng;if(G&&(G=G(e,S))){sr(j,G,l,M);break e}I&&I(e,A,S),e==="focusout"&&S&&A.type==="number"&&S.memoizedProps.value!=null&&us(A,"number",A.value)}switch(I=S?wt(S):window,e){case"focusin":(ar(I)||I.contentEditable==="true")&&(Il=I,Es=S,Yt=null);break;case"focusout":Yt=Es=Il=null;break;case"mousedown":Ts=!0;break;case"contextmenu":case"mouseup":case"dragend":Ts=!1,pr(j,l,M);break;case"selectionchange":if(og)break;case"keydown":case"keyup":pr(j,l,M)}var q;if(bs)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Wl?tr(e,l)&&(V="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(V="onCompositionStart");V&&(er&&l.locale!=="ko"&&(Wl||V!=="onCompositionStart"?V==="onCompositionEnd"&&Wl&&(q=Fu()):(Ki=M,gs="value"in Ki?Ki.value:Ki.textContent,Wl=!0)),I=wa(S,V),0<I.length&&(V=new Iu(V,e,null,l,M),j.push({event:V,listeners:I}),q?V.data=q:(q=nr(l),q!==null&&(V.data=q)))),(q=Wh?Ih(e,l):$h(e,l))&&(V=wa(S,"onBeforeInput"),0<V.length&&(I=new Iu("onBeforeInput","beforeinput",null,l,M),j.push({event:I,listeners:V}),I.data=q)),Xg(j,e,S,l,M)}Ld(j,i)})}function pn(e,i,l){return{instance:e,listener:i,currentTarget:l}}function wa(e,i){for(var l=i+"Capture",t=[];e!==null;){var n=e,a=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||a===null||(n=Ut(e,l),n!=null&&t.unshift(pn(e,n,a)),n=Ut(e,i),n!=null&&t.push(pn(e,n,a))),e.tag===3)return t;e=e.return}return[]}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qd(e,i,l,t,n){for(var a=i._reactName,s=[];l!==null&&l!==t;){var o=l,d=o.alternate,S=o.stateNode;if(o=o.tag,d!==null&&d===t)break;o!==5&&o!==26&&o!==27||S===null||(d=S,n?(S=Ut(l,a),S!=null&&s.unshift(pn(l,S,d))):n||(S=Ut(l,a),S!=null&&s.push(pn(l,S,d)))),l=l.return}s.length!==0&&e.push({event:i,listeners:s})}var Kg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function Xd(e){return(typeof e=="string"?e:""+e).replace(Kg,`
`).replace(Jg,"")}function Vd(e,i){return i=Xd(i),Xd(e)===i}function Ua(){}function he(e,i,l,t,n,a){switch(l){case"children":typeof t=="string"?i==="body"||i==="textarea"&&t===""||Jl(e,t):(typeof t=="number"||typeof t=="bigint")&&i!=="body"&&Jl(e,""+t);break;case"className":Gn(e,"class",t);break;case"tabIndex":Gn(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Gn(e,l,t);break;case"style":Zu(e,t,a);break;case"data":if(i!=="object"){Gn(e,"data",t);break}case"src":case"href":if(t===""&&(i!=="a"||l!=="href")){e.removeAttribute(l);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(l);break}t=Yn(""+t),e.setAttribute(l,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(l==="formAction"?(i!=="input"&&he(e,i,"name",n.name,n,null),he(e,i,"formEncType",n.formEncType,n,null),he(e,i,"formMethod",n.formMethod,n,null),he(e,i,"formTarget",n.formTarget,n,null)):(he(e,i,"encType",n.encType,n,null),he(e,i,"method",n.method,n,null),he(e,i,"target",n.target,n,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(l);break}t=Yn(""+t),e.setAttribute(l,t);break;case"onClick":t!=null&&(e.onclick=Ua);break;case"onScroll":t!=null&&ee("scroll",e);break;case"onScrollEnd":t!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(r(61));if(l=t.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}l=Yn(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,""+t):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":t===!0?e.setAttribute(l,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(l,t):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(l,t):e.removeAttribute(l);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(l):e.setAttribute(l,t);break;case"popover":ee("beforetoggle",e),ee("toggle",e),Bn(e,"popover",t);break;case"xlinkActuate":Di(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Di(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Di(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Di(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Di(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Di(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Di(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Di(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Di(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Bn(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Th.get(l)||l,Bn(e,l,t))}}function Jo(e,i,l,t,n,a){switch(l){case"style":Zu(e,t,a);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(r(61));if(l=t.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof t=="string"?Jl(e,t):(typeof t=="number"||typeof t=="bigint")&&Jl(e,""+t);break;case"onScroll":t!=null&&ee("scroll",e);break;case"onScrollEnd":t!=null&&ee("scrollend",e);break;case"onClick":t!=null&&(e.onclick=Ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hu.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),i=l.slice(2,n?l.length-7:void 0),a=e[Ve]||null,a=a!=null?a[l]:null,typeof a=="function"&&e.removeEventListener(i,a,n),typeof t=="function")){typeof a!="function"&&a!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(i,t,n);break e}l in e?e[l]=t:t===!0?e.setAttribute(l,""):Bn(e,l,t)}}}function Be(e,i,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var t=!1,n=!1,a;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];if(s!=null)switch(a){case"src":t=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:he(e,i,a,s,l,null)}}n&&he(e,i,"srcSet",l.srcSet,l,null),t&&he(e,i,"src",l.src,l,null);return;case"input":ee("invalid",e);var o=a=s=n=null,d=null,S=null;for(t in l)if(l.hasOwnProperty(t)){var M=l[t];if(M!=null)switch(t){case"name":n=M;break;case"type":s=M;break;case"checked":d=M;break;case"defaultChecked":S=M;break;case"value":a=M;break;case"defaultValue":o=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,i));break;default:he(e,i,t,M,l,null)}}Qu(e,a,o,d,S,s,n,!1),qn(e);return;case"select":ee("invalid",e),t=s=a=null;for(n in l)if(l.hasOwnProperty(n)&&(o=l[n],o!=null))switch(n){case"value":a=o;break;case"defaultValue":s=o;break;case"multiple":t=o;default:he(e,i,n,o,l,null)}i=a,l=s,e.multiple=!!t,i!=null?Kl(e,!!t,i,!1):l!=null&&Kl(e,!!t,l,!0);return;case"textarea":ee("invalid",e),a=n=t=null;for(s in l)if(l.hasOwnProperty(s)&&(o=l[s],o!=null))switch(s){case"value":t=o;break;case"defaultValue":n=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:he(e,i,s,o,l,null)}Vu(e,t,n,a),qn(e);return;case"option":for(d in l)if(l.hasOwnProperty(d)&&(t=l[d],t!=null))switch(d){case"selected":e.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:he(e,i,d,t,l,null)}return;case"dialog":ee("beforetoggle",e),ee("toggle",e),ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(t=0;t<mn.length;t++)ee(mn[t],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in l)if(l.hasOwnProperty(S)&&(t=l[S],t!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:he(e,i,S,t,l,null)}return;default:if(rs(i)){for(M in l)l.hasOwnProperty(M)&&(t=l[M],t!==void 0&&Jo(e,i,M,t,l,void 0));return}}for(o in l)l.hasOwnProperty(o)&&(t=l[o],t!=null&&he(e,i,o,t,l,null))}function Fg(e,i,l,t){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,a=null,s=null,o=null,d=null,S=null,M=null;for(E in l){var j=l[E];if(l.hasOwnProperty(E)&&j!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":d=j;default:t.hasOwnProperty(E)||he(e,i,E,null,t,j)}}for(var A in t){var E=t[A];if(j=l[A],t.hasOwnProperty(A)&&(E!=null||j!=null))switch(A){case"type":a=E;break;case"name":n=E;break;case"checked":S=E;break;case"defaultChecked":M=E;break;case"value":s=E;break;case"defaultValue":o=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,i));break;default:E!==j&&he(e,i,A,E,t,j)}}os(e,s,o,d,S,M,a,n);return;case"select":E=s=o=A=null;for(a in l)if(d=l[a],l.hasOwnProperty(a)&&d!=null)switch(a){case"value":break;case"multiple":E=d;default:t.hasOwnProperty(a)||he(e,i,a,null,t,d)}for(n in t)if(a=t[n],d=l[n],t.hasOwnProperty(n)&&(a!=null||d!=null))switch(n){case"value":A=a;break;case"defaultValue":o=a;break;case"multiple":s=a;default:a!==d&&he(e,i,n,a,t,d)}i=o,l=s,t=E,A!=null?Kl(e,!!l,A,!1):!!t!=!!l&&(i!=null?Kl(e,!!l,i,!0):Kl(e,!!l,l?[]:"",!1));return;case"textarea":E=A=null;for(o in l)if(n=l[o],l.hasOwnProperty(o)&&n!=null&&!t.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(e,i,o,null,t,n)}for(s in t)if(n=t[s],a=l[s],t.hasOwnProperty(s)&&(n!=null||a!=null))switch(s){case"value":A=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==a&&he(e,i,s,n,t,a)}Xu(e,A,E);return;case"option":for(var Z in l)if(A=l[Z],l.hasOwnProperty(Z)&&A!=null&&!t.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:he(e,i,Z,null,t,A)}for(d in t)if(A=t[d],E=l[d],t.hasOwnProperty(d)&&A!==E&&(A!=null||E!=null))switch(d){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:he(e,i,d,A,t,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in l)A=l[Q],l.hasOwnProperty(Q)&&A!=null&&!t.hasOwnProperty(Q)&&he(e,i,Q,null,t,A);for(S in t)if(A=t[S],E=l[S],t.hasOwnProperty(S)&&A!==E&&(A!=null||E!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,i));break;default:he(e,i,S,A,t,E)}return;default:if(rs(i)){for(var ge in l)A=l[ge],l.hasOwnProperty(ge)&&A!==void 0&&!t.hasOwnProperty(ge)&&Jo(e,i,ge,void 0,t,A);for(M in t)A=t[M],E=l[M],!t.hasOwnProperty(M)||A===E||A===void 0&&E===void 0||Jo(e,i,M,A,t,E);return}}for(var v in l)A=l[v],l.hasOwnProperty(v)&&A!=null&&!t.hasOwnProperty(v)&&he(e,i,v,null,t,A);for(j in t)A=t[j],E=l[j],!t.hasOwnProperty(j)||A===E||A==null&&E==null||he(e,i,j,A,t,E)}var Fo=null,Po=null;function Na(e){return e.nodeType===9?e:e.ownerDocument}function kd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zd(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Wo(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Io=null;function Pg(){var e=window.event;return e&&e.type==="popstate"?e===Io?!1:(Io=e,!0):(Io=null,!1)}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Wg=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,Ig=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(e){return Jd.resolve(null).then(e).catch($g)}:Kd;function $g(e){setTimeout(function(){throw e})}function rl(e){return e==="head"}function Fd(e,i){var l=i,t=0,n=0;do{var a=l.nextSibling;if(e.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(0<t&&8>t){l=t;var s=e.ownerDocument;if(l&1&&vn(s.documentElement),l&2&&vn(s.body),l&4)for(l=s.head,vn(l),s=l.firstChild;s;){var o=s.nextSibling,d=s.nodeName;s[Ot]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=o}}if(n===0){e.removeChild(a),Cn(i);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:t=l.charCodeAt(0)-48;else t=0;l=a}while(l);Cn(i)}function $o(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var l=i;switch(i=i.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":$o(l),ts(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function em(e,i,l,t){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[Ot])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var a=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function im(e,i,l){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Si(e.nextSibling),e===null))return null;return e}function eu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lm(e,i){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")i();else{var t=function(){i(),l.removeEventListener("DOMContentLoaded",t)};l.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function Si(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var iu=null;function Pd(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return e;i--}else l==="/$"&&i++}e=e.previousSibling}return null}function Wd(e,i,l){switch(i=Na(l),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vn(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ts(e)}var vi=new Map,Id=new Set;function Ha(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xi=_.d;_.d={f:tm,r:nm,D:am,C:sm,L:om,m:um,X:cm,S:rm,M:dm};function tm(){var e=Xi.f(),i=Ma();return e||i}function nm(e){var i=Xl(e);i!==null&&i.tag===5&&i.type==="form"?yc(i):Xi.r(e)}var Et=typeof document>"u"?null:document;function $d(e,i,l){var t=Et;if(t&&typeof i=="string"&&i){var n=ci(i);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Id.has(n)||(Id.add(n),e={rel:e,crossOrigin:l,href:i},t.querySelector(n)===null&&(i=t.createElement("link"),Be(i,"link",e),Oe(i),t.head.appendChild(i)))}}function am(e){Xi.D(e),$d("dns-prefetch",e,null)}function sm(e,i){Xi.C(e,i),$d("preconnect",e,i)}function om(e,i,l){Xi.L(e,i,l);var t=Et;if(t&&e&&i){var n='link[rel="preload"][as="'+ci(i)+'"]';i==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ci(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ci(l.imageSizes)+'"]')):n+='[href="'+ci(e)+'"]';var a=n;switch(i){case"style":a=Tt(e);break;case"script":a=Ct(e)}vi.has(a)||(e=w({rel:"preload",href:i==="image"&&l&&l.imageSrcSet?void 0:e,as:i},l),vi.set(a,e),t.querySelector(n)!==null||i==="style"&&t.querySelector(yn(a))||i==="script"&&t.querySelector(bn(a))||(i=t.createElement("link"),Be(i,"link",e),Oe(i),t.head.appendChild(i)))}}function um(e,i){Xi.m(e,i);var l=Et;if(l&&e){var t=i&&typeof i.as=="string"?i.as:"script",n='link[rel="modulepreload"][as="'+ci(t)+'"][href="'+ci(e)+'"]',a=n;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ct(e)}if(!vi.has(a)&&(e=w({rel:"modulepreload",href:e},i),vi.set(a,e),l.querySelector(n)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(bn(a)))return}t=l.createElement("link"),Be(t,"link",e),Oe(t),l.head.appendChild(t)}}}function rm(e,i,l){Xi.S(e,i,l);var t=Et;if(t&&e){var n=Vl(t).hoistableStyles,a=Tt(e);i=i||"default";var s=n.get(a);if(!s){var o={loading:0,preload:null};if(s=t.querySelector(yn(a)))o.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":i},l),(l=vi.get(a))&&lu(e,l);var d=s=t.createElement("link");Oe(d),Be(d,"link",e),d._p=new Promise(function(S,M){d.onload=S,d.onerror=M}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,_a(s,i,t)}s={type:"stylesheet",instance:s,count:1,state:o},n.set(a,s)}}}function cm(e,i){Xi.X(e,i);var l=Et;if(l&&e){var t=Vl(l).hoistableScripts,n=Ct(e),a=t.get(n);a||(a=l.querySelector(bn(n)),a||(e=w({src:e,async:!0},i),(i=vi.get(n))&&tu(e,i),a=l.createElement("script"),Oe(a),Be(a,"link",e),l.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},t.set(n,a))}}function dm(e,i){Xi.M(e,i);var l=Et;if(l&&e){var t=Vl(l).hoistableScripts,n=Ct(e),a=t.get(n);a||(a=l.querySelector(bn(n)),a||(e=w({src:e,async:!0,type:"module"},i),(i=vi.get(n))&&tu(e,i),a=l.createElement("script"),Oe(a),Be(a,"link",e),l.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},t.set(n,a))}}function ef(e,i,l,t){var n=(n=K.current)?Ha(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(i=Tt(l.href),l=Vl(n).hoistableStyles,t=l.get(i),t||(t={type:"style",instance:null,count:0,state:null},l.set(i,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Tt(l.href);var a=Vl(n).hoistableStyles,s=a.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,s),(a=n.querySelector(yn(e)))&&!a._p&&(s.instance=a,s.state.loading=5),vi.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vi.set(e,l),a||fm(n,e,l,s.state))),i&&t===null)throw Error(r(528,""));return s}if(i&&t!==null)throw Error(r(529,""));return null;case"script":return i=l.async,l=l.src,typeof l=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ct(l),l=Vl(n).hoistableScripts,t=l.get(i),t||(t={type:"script",instance:null,count:0,state:null},l.set(i,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Tt(e){return'href="'+ci(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function lf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function fm(e,i,l,t){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?t.loading=1:(i=e.createElement("link"),t.preload=i,i.addEventListener("load",function(){return t.loading|=1}),i.addEventListener("error",function(){return t.loading|=2}),Be(i,"link",l),Oe(i),e.head.appendChild(i))}function Ct(e){return'[src="'+ci(e)+'"]'}function bn(e){return"script[async]"+e}function tf(e,i,l){if(i.count++,i.instance===null)switch(i.type){case"style":var t=e.querySelector('style[data-href~="'+ci(l.href)+'"]');if(t)return i.instance=t,Oe(t),t;var n=w({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),Oe(t),Be(t,"style",n),_a(t,l.precedence,e),i.instance=t;case"stylesheet":n=Tt(l.href);var a=e.querySelector(yn(n));if(a)return i.state.loading|=4,i.instance=a,Oe(a),a;t=lf(l),(n=vi.get(n))&&lu(t,n),a=(e.ownerDocument||e).createElement("link"),Oe(a);var s=a;return s._p=new Promise(function(o,d){s.onload=o,s.onerror=d}),Be(a,"link",t),i.state.loading|=4,_a(a,l.precedence,e),i.instance=a;case"script":return a=Ct(l.src),(n=e.querySelector(bn(a)))?(i.instance=n,Oe(n),n):(t=l,(n=vi.get(a))&&(t=w({},l),tu(t,n)),e=e.ownerDocument||e,n=e.createElement("script"),Oe(n),Be(n,"link",t),e.head.appendChild(n),i.instance=n);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(t=i.instance,i.state.loading|=4,_a(t,l.precedence,e));return i.instance}function _a(e,i,l){for(var t=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=t.length?t[t.length-1]:null,a=n,s=0;s<t.length;s++){var o=t[s];if(o.dataset.precedence===i)a=o;else if(a!==n)break}a?a.parentNode.insertBefore(e,a.nextSibling):(i=l.nodeType===9?l.head:l,i.insertBefore(e,i.firstChild))}function lu(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function tu(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Ba=null;function nf(e,i,l){if(Ba===null){var t=new Map,n=Ba=new Map;n.set(l,t)}else n=Ba,t=n.get(l),t||(t=new Map,n.set(l,t));if(t.has(e))return t;for(t.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var a=l[n];if(!(a[Ot]||a[Le]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var s=a.getAttribute(i)||"";s=e+s;var o=t.get(s);o?o.push(a):t.set(s,[a])}}return t}function af(e,i,l){e=e.ownerDocument||e,e.head.insertBefore(l,i==="title"?e.querySelector("head > title"):null)}function hm(e,i,l){if(l===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function sf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sn=null;function gm(){}function mm(e,i,l){if(Sn===null)throw Error(r(475));var t=Sn;if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var n=Tt(l.href),a=e.querySelector(yn(n));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ga.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=a,Oe(a);return}a=e.ownerDocument||e,l=lf(l),(n=vi.get(n))&&lu(l,n),a=a.createElement("link"),Oe(a);var s=a;s._p=new Promise(function(o,d){s.onload=o,s.onerror=d}),Be(a,"link",l),i.instance=a}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Ga.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}function pm(){if(Sn===null)throw Error(r(475));var e=Sn;return e.stylesheets&&e.count===0&&nu(e,e.stylesheets),0<e.count?function(i){var l=setTimeout(function(){if(e.stylesheets&&nu(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Ga(){if(this.count--,this.count===0){if(this.stylesheets)nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qa=null;function nu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qa=new Map,i.forEach(vm,e),qa=null,Ga.call(e))}function vm(e,i){if(!(i.state.loading&4)){var l=qa.get(e);if(l)var t=l.get(null);else{l=new Map,qa.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<n.length;a++){var s=n[a];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),t=s)}t&&l.set(null,t)}n=i.instance,s=n.getAttribute("data-precedence"),a=l.get(s)||t,a===t&&l.set(null,n),l.set(s,n),this.count++,t=Ga.bind(this),n.addEventListener("load",t),n.addEventListener("error",t),a?a.parentNode.insertBefore(n,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),i.state.loading|=4}}var xn={$$typeof:te,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function ym(e,i,l,t,n,a,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$a(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.hiddenUpdates=$a(null),this.identifierPrefix=t,this.onUncaughtError=n,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function of(e,i,l,t,n,a,s,o,d,S,M,j){return e=new ym(e,i,l,s,o,d,S,j),i=1,a===!0&&(i|=24),a=ti(3,null,null,i),e.current=a,a.stateNode=e,i=Gs(),i.refCount++,e.pooledCache=i,i.refCount++,a.memoizedState={element:t,isDehydrated:l,cache:i},Qs(a),e}function uf(e){return e?(e=lt,e):lt}function rf(e,i,l,t,n,a){n=uf(n),t.context===null?t.context=n:t.pendingContext=n,t=Pi(i),t.payload={element:l},a=a===void 0?null:a,a!==null&&(t.callback=a),l=Wi(e,t,i),l!==null&&(ui(l,e,i),Pt(l,e,i))}function cf(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<i?l:i}}function au(e,i){cf(e,i),(e=e.alternate)&&cf(e,i)}function df(e){if(e.tag===13){var i=it(e,67108864);i!==null&&ui(i,e,67108864),au(e,67108864)}}var La=!0;function bm(e,i,l,t){var n=z.T;z.T=null;var a=_.p;try{_.p=2,su(e,i,l,t)}finally{_.p=a,z.T=n}}function Sm(e,i,l,t){var n=z.T;z.T=null;var a=_.p;try{_.p=8,su(e,i,l,t)}finally{_.p=a,z.T=n}}function su(e,i,l,t){if(La){var n=ou(t);if(n===null)Ko(e,i,t,Ya,l),hf(e,t);else if(Am(n,e,i,l,t))t.stopPropagation();else if(hf(e,t),i&4&&-1<xm.indexOf(e)){for(;n!==null;){var a=Xl(n);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var s=bl(a.pendingLanes);if(s!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var d=1<<31-ii(s);o.entanglements[1]|=d,s&=~d}zi(a),(re&6)===0&&(Ta=Ai()+500,gn(0))}}break;case 13:o=it(a,2),o!==null&&ui(o,a,2),Ma(),au(a,2)}if(a=ou(t),a===null&&Ko(e,i,t,Ya,l),a===n)break;n=a}n!==null&&t.stopPropagation()}else Ko(e,i,t,null,l)}}function ou(e){return e=ds(e),uu(e)}var Ya=null;function uu(e){if(Ya=null,e=Ql(e),e!==null){var i=x(e);if(i===null)e=null;else{var l=i.tag;if(l===13){if(e=C(i),e!==null)return e;e=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ya=e,null}function ff(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sh()){case Cu:return 2;case Mu:return 8;case Un:case oh:return 32;case zu:return 268435456;default:return 32}default:return 32}}var ru=!1,cl=null,dl=null,fl=null,An=new Map,En=new Map,hl=[],xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hf(e,i){switch(e){case"focusin":case"focusout":cl=null;break;case"dragenter":case"dragleave":dl=null;break;case"mouseover":case"mouseout":fl=null;break;case"pointerover":case"pointerout":An.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(i.pointerId)}}function Tn(e,i,l,t,n,a){return e===null||e.nativeEvent!==a?(e={blockedOn:i,domEventName:l,eventSystemFlags:t,nativeEvent:a,targetContainers:[n]},i!==null&&(i=Xl(i),i!==null&&df(i)),e):(e.eventSystemFlags|=t,i=e.targetContainers,n!==null&&i.indexOf(n)===-1&&i.push(n),e)}function Am(e,i,l,t,n){switch(i){case"focusin":return cl=Tn(cl,e,i,l,t,n),!0;case"dragenter":return dl=Tn(dl,e,i,l,t,n),!0;case"mouseover":return fl=Tn(fl,e,i,l,t,n),!0;case"pointerover":var a=n.pointerId;return An.set(a,Tn(An.get(a)||null,e,i,l,t,n)),!0;case"gotpointercapture":return a=n.pointerId,En.set(a,Tn(En.get(a)||null,e,i,l,t,n)),!0}return!1}function gf(e){var i=Ql(e.target);if(i!==null){var l=x(i);if(l!==null){if(i=l.tag,i===13){if(i=C(l),i!==null){e.blockedOn=i,mh(e.priority,function(){if(l.tag===13){var t=oi();t=es(t);var n=it(l,t);n!==null&&ui(n,l,t),au(l,t)}});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qa(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var l=ou(e.nativeEvent);if(l===null){l=e.nativeEvent;var t=new l.constructor(l.type,l);cs=t,l.target.dispatchEvent(t),cs=null}else return i=Xl(l),i!==null&&df(i),e.blockedOn=l,!1;i.shift()}return!0}function mf(e,i,l){Qa(e)&&l.delete(i)}function Em(){ru=!1,cl!==null&&Qa(cl)&&(cl=null),dl!==null&&Qa(dl)&&(dl=null),fl!==null&&Qa(fl)&&(fl=null),An.forEach(mf),En.forEach(mf)}function Xa(e,i){e.blockedOn===i&&(e.blockedOn=null,ru||(ru=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Em)))}var Va=null;function pf(e){Va!==e&&(Va=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Va===e&&(Va=null);for(var i=0;i<e.length;i+=3){var l=e[i],t=e[i+1],n=e[i+2];if(typeof t!="function"){if(uu(t||l)===null)continue;break}var a=Xl(l);a!==null&&(e.splice(i,3),i-=3,oo(a,{pending:!0,data:n,method:l.method,action:t},t,n))}}))}function Cn(e){function i(d){return Xa(d,e)}cl!==null&&Xa(cl,e),dl!==null&&Xa(dl,e),fl!==null&&Xa(fl,e),An.forEach(i),En.forEach(i);for(var l=0;l<hl.length;l++){var t=hl[l];t.blockedOn===e&&(t.blockedOn=null)}for(;0<hl.length&&(l=hl[0],l.blockedOn===null);)gf(l),l.blockedOn===null&&hl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(t=0;t<l.length;t+=3){var n=l[t],a=l[t+1],s=n[Ve]||null;if(typeof a=="function")s||pf(l);else if(s){var o=null;if(a&&a.hasAttribute("formAction")){if(n=a,s=a[Ve]||null)o=s.formAction;else if(uu(n)!==null)continue}else o=s.action;typeof o=="function"?l[t+1]=o:(l.splice(t,3),t-=3),pf(l)}}}function cu(e){this._internalRoot=e}ka.prototype.render=cu.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var l=i.current,t=oi();rf(l,t,e,i,null,null)},ka.prototype.unmount=cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;rf(e.current,2,null,e,null,null),Ma(),i[Yl]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var i=wu();e={blockedOn:null,target:e,priority:i};for(var l=0;l<hl.length&&i!==0&&i<hl[l].priority;l++);hl.splice(l,0,e),l===0&&gf(e)}};var vf=f.version;if(vf!=="19.1.0")throw Error(r(527,vf,"19.1.0"));_.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=T(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Tm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Rt=Za.inject(Tm),ei=Za}catch{}}return zn.createRoot=function(e,i){if(!p(e))throw Error(r(299));var l=!1,t="",n=wc,a=Uc,s=Nc,o=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(t=i.identifierPrefix),i.onUncaughtError!==void 0&&(n=i.onUncaughtError),i.onCaughtError!==void 0&&(a=i.onCaughtError),i.onRecoverableError!==void 0&&(s=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(o=i.unstable_transitionCallbacks)),i=of(e,1,!1,null,null,l,t,n,a,s,o,null),e[Yl]=i.current,Zo(e),new cu(i)},zn.hydrateRoot=function(e,i,l){if(!p(e))throw Error(r(299));var t=!1,n="",a=wc,s=Uc,o=Nc,d=null,S=null;return l!=null&&(l.unstable_strictMode===!0&&(t=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(a=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(d=l.unstable_transitionCallbacks),l.formState!==void 0&&(S=l.formState)),i=of(e,1,!0,i,l??null,t,n,a,s,o,d,S),i.context=uf(null),l=i.current,t=oi(),t=es(t),n=Pi(t),n.callback=null,Wi(l,n,t),l=t,i.current.lanes=l,jt(i,l),zi(i),e[Yl]=i.current,Zo(e),new ka(i)},zn.version="19.1.0",zn}var zf;function Hm(){if(zf)return hu.exports;zf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),hu.exports=Nm(),hu.exports}var _m=Hm();const Bm=Vf(_m);Zf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rn(){return Rn=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var h=arguments[f];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(u[r]=h[r])}return u},Rn.apply(this,arguments)}var ml;(function(u){u.Pop="POP",u.Push="PUSH",u.Replace="REPLACE"})(ml||(ml={}));const Rf="popstate";function Gm(u){u===void 0&&(u={});function f(p,x){let{pathname:C="/",search:D="",hash:T=""}=Bl(p.location.hash.substr(1));return!C.startsWith("/")&&!C.startsWith(".")&&(C="/"+C),yu("",{pathname:C,search:D,hash:T},x.state&&x.state.usr||null,x.state&&x.state.key||"default")}function h(p,x){let C=p.document.querySelector("base"),D="";if(C&&C.getAttribute("href")){let T=p.location.href,y=T.indexOf("#");D=y===-1?T:T.slice(0,y)}return D+"#"+(typeof x=="string"?x:Ka(x))}function r(p,x){Au(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(x)+")")}return Lm(f,h,r,u)}function Re(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Au(u,f){if(!u){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function qm(){return Math.random().toString(36).substr(2,8)}function Df(u,f){return{usr:u.state,key:u.key,idx:f}}function yu(u,f,h,r){return h===void 0&&(h=null),Rn({pathname:typeof u=="string"?u:u.pathname,search:"",hash:""},typeof f=="string"?Bl(f):f,{state:h,key:f&&f.key||r||qm()})}function Ka(u){let{pathname:f="/",search:h="",hash:r=""}=u;return h&&h!=="?"&&(f+=h.charAt(0)==="?"?h:"?"+h),r&&r!=="#"&&(f+=r.charAt(0)==="#"?r:"#"+r),f}function Bl(u){let f={};if(u){let h=u.indexOf("#");h>=0&&(f.hash=u.substr(h),u=u.substr(0,h));let r=u.indexOf("?");r>=0&&(f.search=u.substr(r),u=u.substr(0,r)),u&&(f.pathname=u)}return f}function Lm(u,f,h,r){r===void 0&&(r={});let{window:p=document.defaultView,v5Compat:x=!1}=r,C=p.history,D=ml.Pop,T=null,y=w();y==null&&(y=0,C.replaceState(Rn({},C.state,{idx:y}),""));function w(){return(C.state||{idx:null}).idx}function U(){D=ml.Pop;let X=w(),W=X==null?null:X-y;y=X,T&&T({action:D,location:le.location,delta:W})}function L(X,W){D=ml.Push;let de=yu(le.location,X,W);h&&h(de,X),y=w()+1;let te=Df(de,y),Ee=le.createHref(de);try{C.pushState(te,"",Ee)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;p.location.assign(Ee)}x&&T&&T({action:D,location:le.location,delta:1})}function ne(X,W){D=ml.Replace;let de=yu(le.location,X,W);h&&h(de,X),y=w();let te=Df(de,y),Ee=le.createHref(de);C.replaceState(te,"",Ee),x&&T&&T({action:D,location:le.location,delta:0})}function ie(X){let W=p.location.origin!=="null"?p.location.origin:p.location.href,de=typeof X=="string"?X:Ka(X);return de=de.replace(/ $/,"%20"),Re(W,"No window.location.(origin|href) available to create URL for href: "+de),new URL(de,W)}let le={get action(){return D},get location(){return u(p,C)},listen(X){if(T)throw new Error("A history only accepts one active listener");return p.addEventListener(Rf,U),T=X,()=>{p.removeEventListener(Rf,U),T=null}},createHref(X){return f(p,X)},createURL:ie,encodeLocation(X){let W=ie(X);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:L,replace:ne,go(X){return C.go(X)}};return le}var jf;(function(u){u.data="data",u.deferred="deferred",u.redirect="redirect",u.error="error"})(jf||(jf={}));function Ym(u,f,h){return h===void 0&&(h="/"),Qm(u,f,h)}function Qm(u,f,h,r){let p=typeof f=="string"?Bl(f):f,x=Eu(p.pathname||"/",h);if(x==null)return null;let C=Kf(u);Xm(C);let D=null;for(let T=0;D==null&&T<C.length;++T){let y=ip(x);D=Im(C[T],y)}return D}function Kf(u,f,h,r){f===void 0&&(f=[]),h===void 0&&(h=[]),r===void 0&&(r="");let p=(x,C,D)=>{let T={relativePath:D===void 0?x.path||"":D,caseSensitive:x.caseSensitive===!0,childrenIndex:C,route:x};T.relativePath.startsWith("/")&&(Re(T.relativePath.startsWith(r),'Absolute route path "'+T.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),T.relativePath=T.relativePath.slice(r.length));let y=pl([r,T.relativePath]),w=h.concat(T);x.children&&x.children.length>0&&(Re(x.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Kf(x.children,f,w,y)),!(x.path==null&&!x.index)&&f.push({path:y,score:Pm(y,x.index),routesMeta:w})};return u.forEach((x,C)=>{var D;if(x.path===""||!((D=x.path)!=null&&D.includes("?")))p(x,C);else for(let T of Jf(x.path))p(x,C,T)}),f}function Jf(u){let f=u.split("/");if(f.length===0)return[];let[h,...r]=f,p=h.endsWith("?"),x=h.replace(/\?$/,"");if(r.length===0)return p?[x,""]:[x];let C=Jf(r.join("/")),D=[];return D.push(...C.map(T=>T===""?x:[x,T].join("/"))),p&&D.push(...C),D.map(T=>u.startsWith("/")&&T===""?"/":T)}function Xm(u){u.sort((f,h)=>f.score!==h.score?h.score-f.score:Wm(f.routesMeta.map(r=>r.childrenIndex),h.routesMeta.map(r=>r.childrenIndex)))}const Vm=/^:[\w-]+$/,km=3,Zm=2,Km=1,Jm=10,Fm=-2,Of=u=>u==="*";function Pm(u,f){let h=u.split("/"),r=h.length;return h.some(Of)&&(r+=Fm),f&&(r+=Zm),h.filter(p=>!Of(p)).reduce((p,x)=>p+(Vm.test(x)?km:x===""?Km:Jm),r)}function Wm(u,f){return u.length===f.length&&u.slice(0,-1).every((r,p)=>r===f[p])?u[u.length-1]-f[f.length-1]:0}function Im(u,f,h){let{routesMeta:r}=u,p={},x="/",C=[];for(let D=0;D<r.length;++D){let T=r[D],y=D===r.length-1,w=x==="/"?f:f.slice(x.length)||"/",U=$m({path:T.relativePath,caseSensitive:T.caseSensitive,end:y},w),L=T.route;if(!U)return null;Object.assign(p,U.params),C.push({params:p,pathname:pl([x,U.pathname]),pathnameBase:ap(pl([x,U.pathnameBase])),route:L}),U.pathnameBase!=="/"&&(x=pl([x,U.pathnameBase]))}return C}function $m(u,f){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[h,r]=ep(u.path,u.caseSensitive,u.end),p=f.match(h);if(!p)return null;let x=p[0],C=x.replace(/(.)\/+$/,"$1"),D=p.slice(1);return{params:r.reduce((y,w,U)=>{let{paramName:L,isOptional:ne}=w;if(L==="*"){let le=D[U]||"";C=x.slice(0,x.length-le.length).replace(/(.)\/+$/,"$1")}const ie=D[U];return ne&&!ie?y[L]=void 0:y[L]=(ie||"").replace(/%2F/g,"/"),y},{}),pathname:x,pathnameBase:C,pattern:u}}function ep(u,f,h){f===void 0&&(f=!1),h===void 0&&(h=!0),Au(u==="*"||!u.endsWith("*")||u.endsWith("/*"),'Route path "'+u+'" will be treated as if it were '+('"'+u.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+u.replace(/\*$/,"/*")+'".'));let r=[],p="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(C,D,T)=>(r.push({paramName:D,isOptional:T!=null}),T?"/?([^\\/]+)?":"/([^\\/]+)"));return u.endsWith("*")?(r.push({paramName:"*"}),p+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):h?p+="\\/*$":u!==""&&u!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,f?void 0:"i"),r]}function ip(u){try{return u.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Au(!1,'The URL path "'+u+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+f+").")),u}}function Eu(u,f){if(f==="/")return u;if(!u.toLowerCase().startsWith(f.toLowerCase()))return null;let h=f.endsWith("/")?f.length-1:f.length,r=u.charAt(h);return r&&r!=="/"?null:u.slice(h)||"/"}function lp(u,f){f===void 0&&(f="/");let{pathname:h,search:r="",hash:p=""}=typeof u=="string"?Bl(u):u;return{pathname:h?h.startsWith("/")?h:tp(h,f):f,search:sp(r),hash:op(p)}}function tp(u,f){let h=f.replace(/\/+$/,"").split("/");return u.split("/").forEach(p=>{p===".."?h.length>1&&h.pop():p!=="."&&h.push(p)}),h.length>1?h.join("/"):"/"}function vu(u,f,h,r){return"Cannot include a '"+u+"' character in a manually specified "+("`to."+f+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+h+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function np(u){return u.filter((f,h)=>h===0||f.route.path&&f.route.path.length>0)}function Ff(u,f){let h=np(u);return f?h.map((r,p)=>p===h.length-1?r.pathname:r.pathnameBase):h.map(r=>r.pathnameBase)}function Pf(u,f,h,r){r===void 0&&(r=!1);let p;typeof u=="string"?p=Bl(u):(p=Rn({},u),Re(!p.pathname||!p.pathname.includes("?"),vu("?","pathname","search",p)),Re(!p.pathname||!p.pathname.includes("#"),vu("#","pathname","hash",p)),Re(!p.search||!p.search.includes("#"),vu("#","search","hash",p)));let x=u===""||p.pathname==="",C=x?"/":p.pathname,D;if(C==null)D=h;else{let U=f.length-1;if(!r&&C.startsWith("..")){let L=C.split("/");for(;L[0]==="..";)L.shift(),U-=1;p.pathname=L.join("/")}D=U>=0?f[U]:"/"}let T=lp(p,D),y=C&&C!=="/"&&C.endsWith("/"),w=(x||C===".")&&h.endsWith("/");return!T.pathname.endsWith("/")&&(y||w)&&(T.pathname+="/"),T}const pl=u=>u.join("/").replace(/\/\/+/g,"/"),ap=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),sp=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,op=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function up(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}const Wf=["post","put","patch","delete"];new Set(Wf);const rp=["get",...Wf];new Set(rp);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var h=arguments[f];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(u[r]=h[r])}return u},Dn.apply(this,arguments)}const Tu=N.createContext(null),cp=N.createContext(null),Gl=N.createContext(null),Ja=N.createContext(null),ql=N.createContext({outlet:null,matches:[],isDataRoute:!1}),If=N.createContext(null);function dp(u,f){let{relative:h}=f===void 0?{}:f;jn()||Re(!1);let{basename:r,navigator:p}=N.useContext(Gl),{hash:x,pathname:C,search:D}=eh(u,{relative:h}),T=C;return r!=="/"&&(T=C==="/"?r:pl([r,C])),p.createHref({pathname:T,search:D,hash:x})}function jn(){return N.useContext(Ja)!=null}function zt(){return jn()||Re(!1),N.useContext(Ja).location}function $f(u){N.useContext(Gl).static||N.useLayoutEffect(u)}function On(){let{isDataRoute:u}=N.useContext(ql);return u?Tp():fp()}function fp(){jn()||Re(!1);let u=N.useContext(Tu),{basename:f,future:h,navigator:r}=N.useContext(Gl),{matches:p}=N.useContext(ql),{pathname:x}=zt(),C=JSON.stringify(Ff(p,h.v7_relativeSplatPath)),D=N.useRef(!1);return $f(()=>{D.current=!0}),N.useCallback(function(y,w){if(w===void 0&&(w={}),!D.current)return;if(typeof y=="number"){r.go(y);return}let U=Pf(y,JSON.parse(C),x,w.relative==="path");u==null&&f!=="/"&&(U.pathname=U.pathname==="/"?f:pl([f,U.pathname])),(w.replace?r.replace:r.push)(U,w.state,w)},[f,r,C,x,u])}function eh(u,f){let{relative:h}=f===void 0?{}:f,{future:r}=N.useContext(Gl),{matches:p}=N.useContext(ql),{pathname:x}=zt(),C=JSON.stringify(Ff(p,r.v7_relativeSplatPath));return N.useMemo(()=>Pf(u,JSON.parse(C),x,h==="path"),[u,C,x,h])}function hp(u,f){return gp(u,f)}function gp(u,f,h,r){jn()||Re(!1);let{navigator:p,static:x}=N.useContext(Gl),{matches:C}=N.useContext(ql),D=C[C.length-1],T=D?D.params:{};D&&D.pathname;let y=D?D.pathnameBase:"/";D&&D.route;let w=zt(),U;if(f){var L;let W=typeof f=="string"?Bl(f):f;y==="/"||(L=W.pathname)!=null&&L.startsWith(y)||Re(!1),U=W}else U=w;let ne=U.pathname||"/",ie=ne;if(y!=="/"){let W=y.replace(/^\//,"").split("/");ie="/"+ne.replace(/^\//,"").split("/").slice(W.length).join("/")}let le=Ym(u,{pathname:ie}),X=bp(le&&le.map(W=>Object.assign({},W,{params:Object.assign({},T,W.params),pathname:pl([y,p.encodeLocation?p.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?y:pl([y,p.encodeLocation?p.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),C,h,r);return f&&X?N.createElement(Ja.Provider,{value:{location:Dn({pathname:"/",search:"",hash:"",state:null,key:"default"},U),navigationType:ml.Pop}},X):X}function mp(){let u=Ep(),f=up(u)?u.status+" "+u.statusText:u instanceof Error?u.message:JSON.stringify(u),h=u instanceof Error?u.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},f),h?N.createElement("pre",{style:p},h):null,null)}const pp=N.createElement(mp,null);class vp extends N.Component{constructor(f){super(f),this.state={location:f.location,revalidation:f.revalidation,error:f.error}}static getDerivedStateFromError(f){return{error:f}}static getDerivedStateFromProps(f,h){return h.location!==f.location||h.revalidation!=="idle"&&f.revalidation==="idle"?{error:f.error,location:f.location,revalidation:f.revalidation}:{error:f.error!==void 0?f.error:h.error,location:h.location,revalidation:f.revalidation||h.revalidation}}componentDidCatch(f,h){console.error("React Router caught the following error during render",f,h)}render(){return this.state.error!==void 0?N.createElement(ql.Provider,{value:this.props.routeContext},N.createElement(If.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yp(u){let{routeContext:f,match:h,children:r}=u,p=N.useContext(Tu);return p&&p.static&&p.staticContext&&(h.route.errorElement||h.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=h.route.id),N.createElement(ql.Provider,{value:f},r)}function bp(u,f,h,r){var p;if(f===void 0&&(f=[]),h===void 0&&(h=null),r===void 0&&(r=null),u==null){var x;if(!h)return null;if(h.errors)u=h.matches;else if((x=r)!=null&&x.v7_partialHydration&&f.length===0&&!h.initialized&&h.matches.length>0)u=h.matches;else return null}let C=u,D=(p=h)==null?void 0:p.errors;if(D!=null){let w=C.findIndex(U=>U.route.id&&(D==null?void 0:D[U.route.id])!==void 0);w>=0||Re(!1),C=C.slice(0,Math.min(C.length,w+1))}let T=!1,y=-1;if(h&&r&&r.v7_partialHydration)for(let w=0;w<C.length;w++){let U=C[w];if((U.route.HydrateFallback||U.route.hydrateFallbackElement)&&(y=w),U.route.id){let{loaderData:L,errors:ne}=h,ie=U.route.loader&&L[U.route.id]===void 0&&(!ne||ne[U.route.id]===void 0);if(U.route.lazy||ie){T=!0,y>=0?C=C.slice(0,y+1):C=[C[0]];break}}}return C.reduceRight((w,U,L)=>{let ne,ie=!1,le=null,X=null;h&&(ne=D&&U.route.id?D[U.route.id]:void 0,le=U.route.errorElement||pp,T&&(y<0&&L===0?(Cp("route-fallback"),ie=!0,X=null):y===L&&(ie=!0,X=U.route.hydrateFallbackElement||null)));let W=f.concat(C.slice(0,L+1)),de=()=>{let te;return ne?te=le:ie?te=X:U.route.Component?te=N.createElement(U.route.Component,null):U.route.element?te=U.route.element:te=w,N.createElement(yp,{match:U,routeContext:{outlet:w,matches:W,isDataRoute:h!=null},children:te})};return h&&(U.route.ErrorBoundary||U.route.errorElement||L===0)?N.createElement(vp,{location:h.location,revalidation:h.revalidation,component:le,error:ne,children:de(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):de()},null)}var ih=function(u){return u.UseBlocker="useBlocker",u.UseRevalidator="useRevalidator",u.UseNavigateStable="useNavigate",u}(ih||{}),lh=function(u){return u.UseBlocker="useBlocker",u.UseLoaderData="useLoaderData",u.UseActionData="useActionData",u.UseRouteError="useRouteError",u.UseNavigation="useNavigation",u.UseRouteLoaderData="useRouteLoaderData",u.UseMatches="useMatches",u.UseRevalidator="useRevalidator",u.UseNavigateStable="useNavigate",u.UseRouteId="useRouteId",u}(lh||{});function Sp(u){let f=N.useContext(Tu);return f||Re(!1),f}function xp(u){let f=N.useContext(cp);return f||Re(!1),f}function Ap(u){let f=N.useContext(ql);return f||Re(!1),f}function th(u){let f=Ap(),h=f.matches[f.matches.length-1];return h.route.id||Re(!1),h.route.id}function Ep(){var u;let f=N.useContext(If),h=xp(),r=th();return f!==void 0?f:(u=h.errors)==null?void 0:u[r]}function Tp(){let{router:u}=Sp(ih.UseNavigateStable),f=th(lh.UseNavigateStable),h=N.useRef(!1);return $f(()=>{h.current=!0}),N.useCallback(function(p,x){x===void 0&&(x={}),h.current&&(typeof p=="number"?u.navigate(p):u.navigate(p,Dn({fromRouteId:f},x)))},[u,f])}const wf={};function Cp(u,f,h){wf[u]||(wf[u]=!0)}function Mp(u,f){u==null||u.v7_startTransition,u==null||u.v7_relativeSplatPath}function Fe(u){Re(!1)}function zp(u){let{basename:f="/",children:h=null,location:r,navigationType:p=ml.Pop,navigator:x,static:C=!1,future:D}=u;jn()&&Re(!1);let T=f.replace(/^\/*/,"/"),y=N.useMemo(()=>({basename:T,navigator:x,static:C,future:Dn({v7_relativeSplatPath:!1},D)}),[T,D,x,C]);typeof r=="string"&&(r=Bl(r));let{pathname:w="/",search:U="",hash:L="",state:ne=null,key:ie="default"}=r,le=N.useMemo(()=>{let X=Eu(w,T);return X==null?null:{location:{pathname:X,search:U,hash:L,state:ne,key:ie},navigationType:p}},[T,w,U,L,ne,ie,p]);return le==null?null:N.createElement(Gl.Provider,{value:y},N.createElement(Ja.Provider,{children:h,value:le}))}function Rp(u){let{children:f,location:h}=u;return hp(bu(f),h)}new Promise(()=>{});function bu(u,f){f===void 0&&(f=[]);let h=[];return N.Children.forEach(u,(r,p)=>{if(!N.isValidElement(r))return;let x=[...f,p];if(r.type===N.Fragment){h.push.apply(h,bu(r.props.children,x));return}r.type!==Fe&&Re(!1),!r.props.index||!r.props.children||Re(!1);let C={id:r.props.id||x.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(C.children=bu(r.props.children,x)),h.push(C)}),h}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var h=arguments[f];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(u[r]=h[r])}return u},Su.apply(this,arguments)}function Dp(u,f){if(u==null)return{};var h={},r=Object.keys(u),p,x;for(x=0;x<r.length;x++)p=r[x],!(f.indexOf(p)>=0)&&(h[p]=u[p]);return h}function jp(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Op(u,f){return u.button===0&&(!f||f==="_self")&&!jp(u)}const wp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Up="6";try{window.__reactRouterVersion=Up}catch{}const Np="startTransition",Uf=jm[Np];function Hp(u){let{basename:f,children:h,future:r,window:p}=u,x=N.useRef();x.current==null&&(x.current=Gm({window:p,v5Compat:!0}));let C=x.current,[D,T]=N.useState({action:C.action,location:C.location}),{v7_startTransition:y}=r||{},w=N.useCallback(U=>{y&&Uf?Uf(()=>T(U)):T(U)},[T,y]);return N.useLayoutEffect(()=>C.listen(w),[C,w]),N.useEffect(()=>Mp(r),[r]),N.createElement(zp,{basename:f,children:h,location:D.location,navigationType:D.action,navigator:C,future:r})}const _p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mt=N.forwardRef(function(f,h){let{onClick:r,relative:p,reloadDocument:x,replace:C,state:D,target:T,to:y,preventScrollReset:w,viewTransition:U}=f,L=Dp(f,wp),{basename:ne}=N.useContext(Gl),ie,le=!1;if(typeof y=="string"&&Bp.test(y)&&(ie=y,_p))try{let te=new URL(window.location.href),Ee=y.startsWith("//")?new URL(te.protocol+y):new URL(y),F=Eu(Ee.pathname,ne);Ee.origin===te.origin&&F!=null?y=F+Ee.search+Ee.hash:le=!0}catch{}let X=dp(y,{relative:p}),W=Gp(y,{replace:C,state:D,target:T,preventScrollReset:w,relative:p,viewTransition:U});function de(te){r&&r(te),te.defaultPrevented||W(te)}return N.createElement("a",Su({},L,{href:ie||X,onClick:le||x?r:de,ref:h,target:T}))});var Nf;(function(u){u.UseScrollRestoration="useScrollRestoration",u.UseSubmit="useSubmit",u.UseSubmitFetcher="useSubmitFetcher",u.UseFetcher="useFetcher",u.useViewTransitionState="useViewTransitionState"})(Nf||(Nf={}));var Hf;(function(u){u.UseFetcher="useFetcher",u.UseFetchers="useFetchers",u.UseScrollRestoration="useScrollRestoration"})(Hf||(Hf={}));function Gp(u,f){let{target:h,replace:r,state:p,preventScrollReset:x,relative:C,viewTransition:D}=f===void 0?{}:f,T=On(),y=zt(),w=eh(u,{relative:C});return N.useCallback(U=>{if(Op(U,h)){U.preventDefault();let L=r!==void 0?r:Ka(y)===Ka(w);T(u,{replace:L,state:p,preventScrollReset:x,relative:C,viewTransition:D})}},[y,T,w,r,p,h,u,x,C,D])}const qp=()=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:c.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065s.919-2.064 2.063-2.064 2.064.925 2.064 2.064-.92 2.065-2.064 2.065zm1.776 13.019H3.561V9h3.552v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"})}),Lp=()=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:c.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Yp=()=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:c.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),Qp=()=>c.jsxs("nav",{style:{backgroundColor:"var(--clr-accent)",padding:"1rem 2rem",boxShadow:"var(--shadow-sm)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",gap:"2rem",alignItems:"center"},children:[c.jsx("li",{children:c.jsx(Mt,{to:"/",className:"animated-underline",style:{color:"var(--clr-text-on-dark)",textDecoration:"none",fontSize:"1.1rem",fontWeight:"bold"},children:"Home"})}),c.jsx("li",{children:c.jsx(Mt,{to:"/syllabus",className:"animated-underline",style:{color:"var(--clr-text-on-dark)",textDecoration:"none",fontSize:"1.1rem",fontWeight:"bold"},children:"Syllabus"})})]}),c.jsxs("div",{className:"social-links",style:{display:"flex",gap:"1rem"},children:[c.jsx("a",{href:"https://www.linkedin.com/in/mohamad-aoude-4aba1270/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx(qp,{})}),c.jsx("a",{href:"https://www.youtube.com/@mohamadaoude8620",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:c.jsx(Lp,{})}),c.jsx("a",{href:"https://github.com/maoude/",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:c.jsx(Yp,{})})]})]}),Xp=()=>c.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem",textAlign:"center"},children:[c.jsxs("header",{style:{marginBottom:"40px",maxWidth:"750px",margin:"0 auto 40px auto"},children:[c.jsxs("h1",{children:[" ","Higher Ed Management Course"]}),c.jsx("p",{style:{fontSize:"clamp(1.1em, 3vw, 1.4em)",maxWidth:"700px",margin:"0 auto"},children:"Navigating the Future of Education Leadership & Innovation"})]}),c.jsxs("main",{children:[c.jsxs("div",{className:"card animate-on-scroll",children:[c.jsxs("h2",{children:[" ","Welcome Aboard!"]}),c.jsx("p",{style:{textAlign:"left"},children:"This site is undergoing a fresh rebuild to provide an enriched and streamlined learning experience. Explore the course content and resources."}),c.jsx("p",{style:{textAlign:"left"},children:"Please check back soon for exciting developments, course modules, and resources!"})]}),c.jsxs("section",{className:"instructor-section card animate-on-scroll",style:{textAlign:"left",marginTop:"3rem"},children:[c.jsx("h2",{children:"Meet Your Instructor"}),c.jsx("h3",{children:"Dr. Mohamad Aoude"}),c.jsx("p",{children:"Welcome! I'm Dr. Mohamad Aoude, Associate Professor and strategic advisor with over two decades of experience in higher education leadership, academic quality assurance, and technology integration. I hold a Ph.D. in Telecommunications from Telecom ParisTech, and a Master’s in International Relations from RUDN University. My career spans roles as department chair, accreditation consultant, curriculum developer, and university professor across Lebanon, France, and the Middle East."}),c.jsx("p",{children:"I’ve led multiple institutional accreditation efforts (CTI, ABET, EVALAG), managed academic departments, and trained hundreds of professionals in leadership, innovation, and strategic planning. My passion lies in helping institutions and individuals navigate the evolving landscape of higher education with agility, foresight, and innovation."}),c.jsxs("p",{children:["I’m excited to guide you through this journey in ",c.jsx("strong",{children:"Higher Ed Management: Navigating the Future of Education Leadership & Innovation"})," — and to help you develop the skills to lead, adapt, and thrive in today’s dynamic academic world."]}),c.jsx("p",{children:"Let’s get started!"})]})]})]}),Vp=()=>c.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[c.jsx("header",{className:"page-header",children:c.jsx("h1",{children:"About This Course"})}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("h3",{children:"Course: Higher Ed Management"}),c.jsx("p",{children:c.jsx("strong",{children:"Navigating the Future of Education Leadership & Innovation"})}),c.jsx("p",{children:"This course provides a comprehensive introduction to the multifaceted world of managing institutional higher education. It is designed to equip aspiring and current academic leaders, administrators, and policy makers with a foundational understanding of the complex structures, processes, and challenges inherent in contemporary colleges and universities."}),c.jsx("p",{children:"Through a series of in-depth modules, readings, discussions, and applied case studies, participants will develop the analytical skills and strategic perspectives necessary to navigate the dynamic landscape of higher education and contribute meaningfully to institutional success."})]}),c.jsxs("div",{className:"content-section instructor-section animate-on-scroll",children:[c.jsx("h3",{children:"About the Instructor"}),c.jsx("h4",{children:"Dr. Mohamad Aoude"}),c.jsx("p",{children:"Welcome! I'm Dr. Mohamad Aoude, Associate Professor and strategic advisor with over two decades of experience in higher education leadership, academic quality assurance, and technology integration. I hold a Ph.D. in Telecommunications from Telecom ParisTech, and a Master’s in International Relations from RUDN University. My career spans roles as department chair, accreditation consultant, curriculum developer, and university professor across Lebanon, France, and the Middle East."}),c.jsx("p",{children:"I’ve led multiple institutional accreditation efforts (CTI, ABET, EVALAG), managed academic departments, and trained hundreds of professionals in leadership, innovation, and strategic planning. My passion lies in helping institutions and individuals navigate the evolving landscape of higher education with agility, foresight, and innovation."})]})]}),kp=()=>c.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[c.jsx("header",{className:"page-header",children:c.jsx("h1",{children:"Syllabus: Managing Institutional Higher Education"})}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("h3",{children:"Course Overview"}),c.jsxs("p",{children:[c.jsx("strong",{children:"Course Title:"})," Managing Institutional Higher Education"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Course Description:"}),c.jsx("br",{}),"This undergraduate course provides a comprehensive introduction to the multifaceted world of managing institutional higher education. It is designed to equip aspiring and current academic leaders, administrators, and policy makers with a foundational understanding of the complex structures, processes, and challenges inherent in contemporary colleges and universities. The curriculum delves into four critical pillars of higher education management: governance, finance, student affairs, and strategic planning. Students will explore the historical context, theoretical underpinnings, and practical applications associated with each of these areas. Emphasis will be placed on how these domains interrelate and influence institutional effectiveness, sustainability, and the overall student experience. Through a series of in-depth modules, readings, discussions, and applied case studies, participants will develop the analytical skills and strategic perspectives necessary to navigate the dynamic landscape of higher education and contribute meaningfully to institutional success. The course will examine the U.S. higher education system primarily, drawing upon established scholarship and best practices to foster a critical understanding of how institutions operate, adapt to change, and strive to fulfill their educational missions in an increasingly complex socio-economic and political environment."]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Target Audience:"}),c.jsx("br",{}),"This course is tailored for undergraduate students aspiring to careers in university administration, current department heads seeking to broaden their understanding of institutional management, and individuals interested in higher education policy. It is also suitable for professionals in related fields who wish to gain a deeper insight into the operational dynamics of colleges and universities."]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Course Level:"})," Undergraduate"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Course Format:"})," This is a 10-module online course. Each module will consist of readings, lecture materials (structured around 2 sessions per week), interactive discussions, and a case study assignment designed to apply learned concepts to real-world or simulated higher education scenarios."]})]}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("h3",{children:"Course Learning Objectives"}),c.jsx("p",{children:"Upon successful completion of this course, students will be able to:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Describe the diverse landscape of higher education institutions, including their various missions, structures, and governance models."}),c.jsx("li",{children:"Analyze the key principles and practices of strategic planning in higher education, including environmental scanning, goal setting, and implementation strategies."}),c.jsx("li",{children:"Understand the fundamentals of financial management in higher education, including revenue sources, budgeting processes, resource allocation models, and financial sustainability challenges."}),c.jsx("li",{children:"Examine the core functions and philosophies of student affairs, including student development theories, the delivery of student support services, and the management of contemporary student issues."}),c.jsx("li",{children:"Evaluate the roles and responsibilities of various stakeholders in higher education governance, including governing boards, administrators, faculty, students, and external bodies."}),c.jsx("li",{children:"Identify and analyze key legal, ethical, and policy issues confronting higher education institutions and their impact on administrative decision-making."}),c.jsx("li",{children:"Apply theoretical concepts of leadership, organizational behavior, and change management to practical challenges in higher education settings."}),c.jsx("li",{children:"Utilize data and assessment strategies to inform decision-making and promote continuous improvement within higher education institutions."}),c.jsx("li",{children:"Develop and articulate solutions to complex problems in higher education management through the analysis of case studies and real-world scenarios."}),c.jsx("li",{children:"Critically assess emerging trends and future challenges in higher education and their implications for institutional management and leadership."})]})]}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("h3",{children:"Course Modules Overview"}),c.jsx("p",{children:"This course is structured into 10 modules. Each module page will provide a detailed plan including topics for two sessions per week, learning activities, and a case study."}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsxs("a",{href:"#/module/1",className:"animated-underline",children:[c.jsx("strong",{children:"Module 1:"})," Foundations of Institutional Higher Education Management",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:"→"})]})}),c.jsx("li",{children:c.jsxs("a",{href:"#/module/2",className:"animated-underline",children:[c.jsx("strong",{children:"Module 2:"})," Governance Structures and Stakeholders in Higher Education",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:"→"})]})}),c.jsxs("li",{children:[c.jsx("strong",{children:"Module 3:"})," Strategic Planning in the Institutional Context"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Module 4:"})," Higher Education Finance and Budgeting"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Module 5:"})," Resource Allocation and Financial Decision-Making"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Module 6:"})," Understanding Student Affairs and Student Development"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Module 7:"})," Legal and Ethical Issues in Higher Education Management"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Module 8:"})," Leadership, Change Management, and Institutional Culture"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Module 9:"})," Assessment, Accreditation, and Continuous Improvement"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Module 10:"})," The Future of Higher Education Management: Trends, Challenges, and Opportunities"]})]})]})]}),Zp=()=>c.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[c.jsx("header",{className:"page-header",children:c.jsx("h1",{children:"Module 1: Foundations of Institutional Higher Education Management"})}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Duration:"})," 1 Week (2 Sessions)"]}),c.jsx("h3",{children:"Overall Module Learning Outcomes"}),c.jsx("p",{children:"Upon completing this module, students will be able to:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Trace the historical development of higher education institutions in the U.S. and globally."}),c.jsx("li",{children:"Differentiate between various types of higher education institutions and their distinct missions."}),c.jsx("li",{children:"Identify the core functions and societal responsibilities of contemporary colleges and universities."}),c.jsx("li",{children:"Explain fundamental organizational theories and how they apply to the unique context of higher education."}),c.jsx("li",{children:"Recognize the key internal and external environmental factors influencing higher education management."})]})]}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("h3",{children:"Session 1: The Landscape and Legacy of Higher Education"}),c.jsx("p",{children:c.jsx("strong",{children:"Topics Covered:"})}),c.jsxs("ul",{children:[c.jsx("li",{children:"Historical Perspectives on Higher Education (Global and U.S. focus)."}),c.jsx("li",{children:"The Evolving Role of Higher Education in Society."}),c.jsx("li",{children:"The American Higher Education System: An Overview."}),c.jsx("li",{children:"Types of Institutions and Their Missions."})]}),c.jsxs("p",{style:{marginTop:"1rem"},children:[c.jsxs("a",{href:"#/module/1/session/1/slides",className:"font-semibold animated-underline",children:["View Session 1 Slides",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📰"})]}),c.jsx("span",{style:{margin:"0 1rem"},children:"|"}),c.jsxs("a",{href:"#/module/1/session/1/lecture",className:"font-semibold animated-underline",children:["View Session 1 Lecture Notes",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📝"})]})]})]}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("h3",{children:"Session 2: Organizing for Success - Theories, Players, and Challenges"}),c.jsx("p",{children:c.jsx("strong",{children:"Topics Covered:"})}),c.jsxs("ul",{children:[c.jsx("li",{children:"Introduction to Organizational Theory and its application to Higher Education."}),c.jsx("li",{children:"The Academic Profession: Roles, responsibilities, and evolving nature of faculty."}),c.jsx("li",{children:"Key Internal and External Stakeholders."}),c.jsx("li",{children:'Introduction to Case Study 1: "Understanding Institutional Identity and Mission."'})]}),c.jsxs("p",{style:{marginTop:"1rem"},children:[c.jsxs("a",{href:"#/module/1/session/2/slides",className:"font-semibold animated-underline",children:["View Session 2 Slides",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📰"})]}),c.jsx("span",{style:{margin:"0 1rem"},children:"|"}),c.jsxs("a",{href:"#/module/1/session/2/lecture",className:"font-semibold animated-underline",children:["View Session 2 Lecture Notes",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📝"})]})]})]})]}),_f=[{id:"slide1",title:"The Landscape and Legacy of Higher Education",subtitle:"Module 1, Session 1",content:"<h3>Managing Institutional Higher Education</h3>"},{id:"slide2",title:"Session Overview",content:`
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
    `}],Kp=()=>{const[u,f]=N.useState(0),h=On(),r=_f.length,p=_f[u],x=N.useCallback(()=>{f(D=>Math.min(D+1,r-1))},[r]),C=N.useCallback(()=>{f(D=>Math.max(D-1,0))},[]);return N.useEffect(()=>{const D=T=>{T.key==="ArrowRight"?x():T.key==="ArrowLeft"?C():T.key==="Escape"&&h("/module/1")};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[x,C,h]),p?c.jsxs("div",{className:"slideshow-container",children:[c.jsxs("div",{className:"slide-content-wrapper",children:[c.jsxs("header",{className:"slide-header",children:[c.jsx("h1",{className:"slide-title",children:p.title}),p.subtitle&&c.jsx("h2",{className:"slide-subtitle",children:p.subtitle})]}),c.jsx("div",{className:"slide-actual-content",dangerouslySetInnerHTML:{__html:p.content}})]}),c.jsxs("div",{className:"slideshow-controls",children:[c.jsx("button",{onClick:C,disabled:u===0,children:"← Previous"}),c.jsxs("span",{className:"slide-indicator",children:["Slide ",u+1," of ",r]}),c.jsx("button",{onClick:x,disabled:u===r-1,children:"Next →"})]}),c.jsx("div",{style:{textAlign:"center",padding:"10px",background:"#e9ecef"},children:c.jsx(Mt,{to:"/module/1",style:{fontSize:"0.9rem"},children:"Back to Module 1 Overview"})})]}):c.jsx("div",{className:"container",children:"Slide data not found."})},Bf=[{id:"s2-slide1",title:"Organizing for Success: Theories, Players, and Challenges",subtitle:"Module 1, Session 2",content:"<h3>Managing Institutional Higher Education</h3>"},{id:"s2-slide2",title:"Session Overview",content:`
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
    `}],Jp=()=>{const[u,f]=N.useState(0),h=On(),r=Bf.length,p=Bf[u],x=N.useCallback(()=>{f(D=>Math.min(D+1,r-1))},[r]),C=N.useCallback(()=>{f(D=>Math.max(D-1,0))},[]);return N.useEffect(()=>{const D=T=>{T.key==="ArrowRight"?x():T.key==="ArrowLeft"?C():T.key==="Escape"&&h("/module/1")};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[x,C,h]),p?c.jsxs("div",{className:"slideshow-container",children:[c.jsxs("div",{className:"slide-content-wrapper",children:[c.jsxs("header",{className:"slide-header",children:[c.jsx("h1",{className:"slide-title",children:p.title}),p.subtitle&&c.jsx("h2",{className:"slide-subtitle",children:p.subtitle})]}),c.jsx("div",{className:"slide-actual-content",dangerouslySetInnerHTML:{__html:p.content}})]}),c.jsxs("div",{className:"slideshow-controls",children:[c.jsx("button",{onClick:C,disabled:u===0,children:"← Previous"}),c.jsxs("span",{className:"slide-indicator",children:["Slide ",u+1," of ",r]}),c.jsx("button",{onClick:x,disabled:u===r-1,children:"Next →"})]}),c.jsx("div",{style:{textAlign:"center",padding:"10px",background:"#e9ecef"},children:c.jsx(Mt,{to:"/module/1",style:{fontSize:"0.9rem"},children:"Back to Module 1 Overview"})})]}):c.jsx("div",{className:"container",children:"Slide data not found for Session 2."})},Gf={title:"Module 1, Session 1: The Landscape and Legacy of Higher Education",content:`
    <h2>Introduction</h2>
    <p>Welcome to the foundational session of "Managing Institutional Higher Education." This module serves as a crucial starting point for anyone aspiring to lead or manage within the complex and dynamic landscape of higher education. Our journey begins with an exploration of the historical underpinnings, the continuously evolving societal roles, and the remarkable structural diversity that characterizes higher education institutions today.</p>
    <p>This session will delve into three primary areas. First, we will trace the historical trajectory of higher education, from its global origins to the distinctive development of the American system. Second, we will analyze the multifaceted and expanding role of higher education in modern society. Finally, we will dissect the structure, scale, and inherent diversity of the American higher education system.</p>
    
    <h2>Historical Perspectives on Higher Education</h2>
    <h3>Global Origins: Seeds of Scholarly Pursuit</h3>
    <p>The concept of organized higher learning emerged independently in various parts of the world. These early centers laid the groundwork for what would eventually become the modern university.</p>
    <p><strong>Ancient Centers of Learning:</strong></p>
    <ul>
        <li><strong>Plato's Academy (387 BCE, Athens, Greece):</strong> Often cited as the earliest organized school of higher learning in the Western world, focused on philosophy and mathematics.</li>
        <li><strong>Nalanda University (5th century CE, ancient India):</strong> A renowned Buddhist monastery and a major international center for learning, attracting scholars from across Asia.</li>
        <li><strong>Al-Qarawiyyin University (859 CE, Fez, Morocco):</strong> Recognized as the oldest continuously operating higher education institution in the world.</li>
    </ul>
    <p><strong>Medieval European Universities:</strong></p>
    <p>The European university began to take shape in the High Middle Ages, establishing several enduring features:</p>
    <ul>
        <li><strong>University of Bologna (1088, Italy):</strong> Considered the oldest university in the Western world, organized as a guild of students.</li>
        <li><strong>University of Paris (c. 1150, France):</strong> A leading center for theology and arts, organized as a guild of masters (professors).</li>
        <li><strong>University of Oxford (c. 1096, England):</strong> Developed a collegiate system combining residential life with academic instruction.</li>
    </ul>

    <h3>American Higher Education Development: A Unique Trajectory</h3>
    <p>The American higher education system, while drawing from European models, developed its own distinctive characteristics.</p>
    <p><strong>Colonial Period (1636-1776):</strong> Foundations were laid with institutions like Harvard College (1636), primarily to train ministers, emphasizing classical education for an elite class.</p>
    <p><strong>19th Century Expansion:</strong> This century saw a move towards a more diverse and public system with the Morrill Land-Grant Acts (1862, 1890), the founding of Women's Colleges, and the establishment of Historically Black Colleges and Universities (HBCUs).</p>
    <p><strong>20th Century Transformation:</strong> This period marked a shift from an elite system to one of mass access, driven by the GI Bill (1944), the proliferation of Community Colleges, the Civil Rights Movement, the Higher Education Act (1965), and Title IX (1972).</p>

    <h2>The Evolving Role of Higher Education in Society</h2>
    <p>Higher education's societal role has expanded dramatically. Today's institutions serve multiple, sometimes competing functions.</p>
    <ul>
        <li><strong>Economic Contributions:</strong> Fueling growth through human capital development, research and innovation, and serving as pathways for economic mobility.</li>
        <li><strong>Social and Cultural Contributions:</strong> Shaping citizens through civic engagement, preserving and advancing culture, and promoting social justice and equity.</li>
    </ul>

    <h2>The American Higher Education System: Structure, Scale, and Diversity</h2>
    <p>The American system is unparalleled in its size, diversity, and decentralized nature. It includes approximately 4,000 degree-granting institutions enrolling over 19 million students.</p>
    <h3>Types of Institutions and Their Missions</h3>
    <ul>
        <li><strong>Public Research Universities:</strong> State-supported pillars of public good (e.g., University of Michigan).</li>
        <li><strong>Private Research Universities:</strong> Global leaders in scholarship with substantial endowments (e.g., Harvard, Stanford).</li>
        <li><strong>Liberal Arts Colleges:</strong> Small, undergraduate-focused institutions nurturing holistic development (e.g., Williams, Amherst).</li>
        <li><strong>Community Colleges:</strong> Gateways to opportunity with open access and lower costs (e.g., Miami Dade College).</li>
        <li><strong>For-Profit Institutions:</strong> Market-driven education providers focused on adult and non-traditional students (e.g., University of Phoenix).</li>
        <li><strong>Minority-Serving Institutions (MSIs):</strong> Champions of equity and access, including HBCUs, HSIs, and TCUs.</li>
    </ul>
  `},Fp=()=>c.jsx("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("header",{className:"page-header",children:c.jsx("h1",{children:Gf.title})}),c.jsx("div",{className:"lecture-content",dangerouslySetInnerHTML:{__html:Gf.content}}),c.jsx("div",{style:{textAlign:"center",padding:"20px 0",marginTop:"2rem",borderTop:"1px solid var(--border-default)"},children:c.jsx("a",{href:"#/module/1",className:"button",children:"Back to Module 1 Overview"})})]})}),qf={title:"Module 1, Session 2: Organizing for Success - Theories, Players, and Challenges",content:`
    <h2>Introduction</h2>
    <p>Welcome to our second session of "Managing Institutional Higher Education." Having explored the historical foundations and diverse landscape of higher education in our first session, we now turn our attention to the fundamental organizational principles that shape how these complex institutions function. Today, we will examine foundational organizational theories that help explain the unique characteristics of higher education institutions, explore the evolving nature of the academic profession, identify key stakeholders who influence institutional success, and introduce our first case study on institutional identity and mission.</p>
    <p>Understanding these organizational dynamics is essential for effective management in higher education. Colleges and universities are unlike most other organizations in their structures, decision-making processes, and cultural norms. By developing a theoretical framework for understanding these distinctive characteristics, you will be better equipped to navigate the complexities of higher education administration and leadership as we move into more specific governance and management topics in subsequent modules.</p>
    
    <h2>Foundational Organizational Theory and Higher Education Context</h2>
    <h3>The Unique Organizational Nature of Higher Education Institutions</h3>
    <p>Higher education institutions present a fascinating organizational paradox that has intrigued scholars and practitioners for decades. They are simultaneously among the most enduring institutions in society—with some universities having survived for nearly a millennium—yet they are also frequently described as resistant to change, difficult to manage, and challenging to lead. To understand this paradox, we must recognize several distinctive characteristics that set colleges and universities apart from other organizations.</p>
    <ul>
        <li><strong>Ambiguous and Multiple Goals:</strong> Unlike businesses with clear profit motives or government agencies with specific mandates, higher education institutions pursue multiple, sometimes competing goals simultaneously.</li>
        <li><strong>Professional Autonomy and Expertise:</strong> The core work of teaching and research is performed by highly trained professionals who expect and traditionally receive significant autonomy in their work.</li>
        <li><strong>Dual Authority Structures:</strong> Higher education institutions operate with both administrative hierarchies and professional collegial structures.</li>
        <li><strong>Loose Coupling:</strong> The various units within universities often operate with considerable independence from one another, with limited coordination and oversight.</li>
        <li><strong>Institutional Status and Prestige:</strong> Universities compete primarily on prestige and reputation rather than efficiency or profitability.</li>
        <li><strong>Long-term Orientation:</strong> Higher education operates on extended time horizons.</li>
        <li><strong>External Constraints and Influences:</strong> Particularly for public institutions, universities face numerous external constraints from state governments, federal agencies, accreditors, and other entities.</li>
    </ul>

    <h3>Foundational Organizational Theories Applied to Higher Education</h3>
    <p>Several organizational theories have proven particularly useful for understanding the distinctive nature of higher education institutions.</p>
    <h4>Bureaucratic Theory and Its Limitations</h4>
    <p>Max Weber's bureaucratic theory emphasizes formal structures, hierarchical authority, and written rules. While elements of bureaucracy are present in administration, it often clashes with academic values of autonomy.</p>
    <h4>Professional Organization Theory</h4>
    <p>Developed by scholars like Henry Mintzberg, this theory provides a more appropriate framework where authority is based on expertise rather than position.</p>
    <h4>Systems Theory and Environmental Adaptation</h4>
    <p>This theory views organizations as complex systems that must adapt to their environments to survive, emphasizing environmental scanning and adaptation.</p>
    <h4>Institutional Theory and Legitimacy</h4>
    <p>This theory focuses on how organizations gain legitimacy by conforming to external expectations and norms, explaining why universities often imitate prestigious institutions.</p>
    <h4>Resource Dependence Theory</h4>
    <p>This theory emphasizes how organizations must manage relationships with external entities that control critical resources, like governments and donors.</p>

    <h2>The Academic Profession: Foundation and Evolution</h2>
    <p>The faculty represents the core human resource of any higher education institution. The modern academic profession emerged in the late 19th and early 20th centuries, establishing principles of academic freedom and tenure. However, it has faced increasing pressures, including declining public support and the rise of contingent faculty appointments.</p>
    <h3>Contemporary Changes in the Academic Workforce</h3>
    <p>The most significant change has been the dramatic growth in non-tenure-track appointments, creating a two-tier system. This shift, along with specialized faculty roles and changing workload expectations, presents significant challenges for institutional management.</p>

    <h2>Key Stakeholders in Higher Education: Identification and Basic Understanding</h2>
    <p>A stakeholder is any individual, group, or organization that has an interest in or can affect the performance of an institution.</p>
    <ul>
        <li><strong>Internal Stakeholders:</strong> Students, Faculty, Staff, Administrators, and Governing Boards.</li>
        <li><strong>External Stakeholders:</strong> Government Entities, Accreditors, Employers and Industry, Alumni and Donors, and the Community and Public.</li>
    </ul>

    <h2>Introduction to Case Study 1: "Understanding Institutional Identity and Mission"</h2>
    <p>To apply the foundational concepts we've explored in this module, we will now introduce our first case study, which focuses on institutional identity and mission. This case will provide an opportunity to analyze how organizational theories, faculty roles, and stakeholder interests intersect in a specific institutional context, while practicing the analytical skills essential for effective higher education management.</p>
    <h3>Case Overview: Midvale State University</h3>
    <p>The case study presents "Midvale State University," a fictional institution that embodies many of the challenges facing regional comprehensive universities in contemporary American higher education. Founded in 1889 as a Normal School for teacher preparation, it has evolved significantly, adding graduate programs and research expectations, leading to several key challenges and dilemmas.</p>
    <h3>Key Challenges and Dilemmas</h3>
    <ul>
        <li><strong>Mission Clarity versus Comprehensiveness:</strong> What kind of institution should Midvale aspire to be?</li>
        <li><strong>Faculty Role Definition and Expectations:</strong> How should the institution define and reward faculty work in a transitional context?</li>
        <li><strong>Resource Allocation and Strategic Priorities:</strong> How should difficult choices about investment be made?</li>
        <li><strong>Stakeholder Alignment and Expectations:</strong> How can the institution balance diverse stakeholder expectations?</li>
        <li><strong>Organizational Identity and Culture:</strong> How can the institution develop a coherent identity that honors its history while embracing its future?</li>
    </ul>
  `},Pp=()=>c.jsx("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("header",{className:"page-header",children:c.jsx("h1",{children:qf.title})}),c.jsx("div",{className:"lecture-content",dangerouslySetInnerHTML:{__html:qf.content}}),c.jsx("div",{style:{textAlign:"center",padding:"20px 0",marginTop:"2rem",borderTop:"1px solid var(--border-default)"},children:c.jsx("a",{href:"#/module/1",className:"button",children:"Back to Module 1 Overview"})})]})}),Wp=()=>c.jsxs("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[c.jsx("header",{className:"page-header",children:c.jsx("h1",{children:"Module 2: Governance Structures and Stakeholders in Higher Education"})}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Duration:"})," 1 Week (2 Sessions)"]}),c.jsx("h3",{children:"Overall Module Learning Outcomes"}),c.jsx("p",{children:"Upon completing this module, students will be able to:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Compare and contrast different models of higher education governance (e.g., shared governance, corporate models)."}),c.jsx("li",{children:"Describe the functions and responsibilities of governing boards, institutional leaders (presidents/chancellors), and faculty senates."}),c.jsx("li",{children:"Analyze the influence of various internal and external stakeholders on institutional governance."}),c.jsx("li",{children:"Explain the principles of academic freedom and tenure and their role in governance."}),c.jsx("li",{children:"Evaluate the challenges and complexities of ensuring accountability in higher education governance."})]})]}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("h3",{children:"Session 1: Governance Models, Boards, and Leadership Roles"}),c.jsx("p",{children:c.jsx("strong",{children:"Topics Covered:"})}),c.jsxs("ul",{children:[c.jsx("li",{children:"Theories and Models of Higher Education Governance."}),c.jsx("li",{children:"Governing Boards: Role, responsibilities, and composition."}),c.jsx("li",{children:"The University Presidency: Leadership roles, powers, and challenges."}),c.jsx("li",{children:"Faculty Governance: Senates, committees, unions, and shared decision-making."}),c.jsx("li",{children:"Academic Freedom and Tenure: Foundations and contemporary issues."})]}),c.jsxs("p",{style:{marginTop:"1rem"},children:[c.jsxs("a",{href:"#/module/2/session/1/slides",className:"font-semibold animated-underline",children:["View Session 1 Slides",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📰"})]}),c.jsx("span",{style:{margin:"0 1rem"},children:"|"}),c.jsxs("a",{href:"#/module/2/session/1/lecture",className:"font-semibold animated-underline",children:["View Session 1 Lecture Notes",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📝"})]})]})]}),c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("h3",{children:"Session 2: Stakeholder Influence, Accountability, and Case Introduction"}),c.jsx("p",{children:c.jsx("strong",{children:"Topics Covered:"})}),c.jsxs("ul",{children:[c.jsx("li",{children:"Student Involvement in Governance: Roles, impact, and limitations."}),c.jsx("li",{children:"External Influences: Accreditation, government, donors, alumni."}),c.jsx("li",{children:"Accountability in Higher Education: To whom and for what?"}),c.jsx("li",{children:'Introduction to Case Study 2: "Navigating a Governance Crisis."'})]}),c.jsxs("p",{style:{marginTop:"1rem"},children:[c.jsxs("a",{href:"#/module/2/session/2/slides",className:"font-semibold animated-underline",children:["View Session 2 Slides",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📰"})]}),c.jsx("span",{style:{margin:"0 1rem"},children:"|"}),c.jsxs("a",{href:"#/module/2/session/2/lecture",className:"font-semibold animated-underline",children:["View Session 2 Lecture Notes",c.jsx("span",{className:"module-link-icon","aria-hidden":"true",children:" 📝"})]})]})]})]}),Lf=[{id:"m2s1-slide1",title:"Governance Models, Boards, and Leadership Roles",subtitle:"Module 2, Session 1",content:"<h3>Managing Institutional Higher Education</h3>"},{id:"m2s1-slide2",title:"Session Overview",content:`
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
    `}],Ip=()=>{const[u,f]=N.useState(0),h=On(),r=Lf.length,p=Lf[u],x=N.useCallback(()=>{f(D=>Math.min(D+1,r-1))},[r]),C=N.useCallback(()=>{f(D=>Math.max(D-1,0))},[]);return N.useEffect(()=>{const D=T=>{T.key==="ArrowRight"?x():T.key==="ArrowLeft"?C():T.key==="Escape"&&h("/module/2")};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[x,C,h]),p?c.jsxs("div",{className:"slideshow-container",children:[c.jsxs("div",{className:"slide-content-wrapper",children:[c.jsxs("header",{className:"slide-header",children:[c.jsx("h1",{className:"slide-title",children:p.title}),p.subtitle&&c.jsx("h2",{className:"slide-subtitle",children:p.subtitle})]}),c.jsx("div",{className:"slide-actual-content",dangerouslySetInnerHTML:{__html:p.content}})]}),c.jsxs("div",{className:"slideshow-controls",children:[c.jsx("button",{onClick:C,disabled:u===0,children:"← Previous"}),c.jsxs("span",{className:"slide-indicator",children:["Slide ",u+1," of ",r]}),c.jsx("button",{onClick:x,disabled:u===r-1,children:"Next →"})]}),c.jsx("div",{style:{textAlign:"center",padding:"10px",background:"#e9ecef"},children:c.jsx(Mt,{to:"/module/2",style:{fontSize:"0.9rem"},children:"Back to Module 2 Overview"})})]}):c.jsx("div",{className:"container",children:"Slide data not found."})},Yf=[{id:"m2s2-slide1",title:"Stakeholder Influence, Accountability, and Case Introduction",subtitle:"Module 2, Session 2",content:"<h3>Managing Institutional Higher Education</h3>"},{id:"m2s2-slide2",title:"Session Overview",content:`
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
    `}],$p=()=>{const[u,f]=N.useState(0),h=On(),r=Yf.length,p=Yf[u],x=N.useCallback(()=>{f(D=>Math.min(D+1,r-1))},[r]),C=N.useCallback(()=>{f(D=>Math.max(D-1,0))},[]);return N.useEffect(()=>{const D=T=>{T.key==="ArrowRight"?x():T.key==="ArrowLeft"?C():T.key==="Escape"&&h("/module/2")};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[x,C,h]),p?c.jsxs("div",{className:"slideshow-container",children:[c.jsxs("div",{className:"slide-content-wrapper",children:[c.jsxs("header",{className:"slide-header",children:[c.jsx("h1",{className:"slide-title",children:p.title}),p.subtitle&&c.jsx("h2",{className:"slide-subtitle",children:p.subtitle})]}),c.jsx("div",{className:"slide-actual-content",dangerouslySetInnerHTML:{__html:p.content}})]}),c.jsxs("div",{className:"slideshow-controls",children:[c.jsx("button",{onClick:C,disabled:u===0,children:"← Previous"}),c.jsxs("span",{className:"slide-indicator",children:["Slide ",u+1," of ",r]}),c.jsx("button",{onClick:x,disabled:u===r-1,children:"Next →"})]}),c.jsx("div",{style:{textAlign:"center",padding:"10px",background:"#e9ecef"},children:c.jsx(Mt,{to:"/module/2",style:{fontSize:"0.9rem"},children:"Back to Module 2 Overview"})})]}):c.jsx("div",{className:"container",children:"Slide data not found."})},Qf={title:"Module 2, Session 1: Governance Models, Boards, and Leadership Roles",content:`
    <h2>Introduction</h2>
    <p>Welcome to the first session of Module 2, where we explore the complex world of governance structures and leadership in higher education institutions. Having established a foundation in the landscape, history, and organizational theories of higher education in Module 1, we now turn our attention to how these institutions are governed and led. Understanding governance is essential for effective institutional management, as it determines how decisions are made, who has authority over what domains, and how various stakeholders participate in shaping institutional direction.</p>
    <p>Higher education governance is distinctive from governance in other sectors. Unlike corporations with clear chains of command or government agencies with defined hierarchies, colleges and universities operate with distributed authority, multiple power centers, and traditions of shared decision-making. These distinctive characteristics create both strengths and challenges for institutional leadership and management.</p>
    <p>In today's session, we will examine various models of higher education governance, explore the roles and responsibilities of governing boards, analyze the complex position of university presidents, discuss faculty governance structures, and consider the foundational principles of academic freedom and tenure that underpin the academic enterprise. This knowledge will provide essential context for our second session this week, which will focus on stakeholder influence, accountability mechanisms, and our second case study.</p>
    
    <h2>Theories and Models of Higher Education Governance</h2>
    <h3>The Evolution of Governance Models</h3>
    <p>Higher education governance has evolved significantly over time, reflecting broader societal changes, shifting expectations for higher education, and changing management philosophies. Understanding this evolution provides important context for contemporary governance challenges.</p>
    <p><strong>Historical Development:</strong></p>
    <p>The earliest American colleges operated under what might be called a <strong>"lay trustee model,"</strong> where external boards of trustees (often clergy and community leaders) held ultimate authority, with presidents serving as their agents. Faculty had limited formal authority beyond the classroom. This model reflected the religious origins of many early institutions and the limited professionalization of academic work.</p>
    <p>As institutions grew in size and complexity in the late 19th and early 20th centuries, and as the academic profession itself became more defined, the limitations of this simple model became apparent. The rise of the modern research university, with its emphasis on specialized knowledge and faculty expertise, created a need for new governance arrangements that recognized the professional authority of the faculty.</p>
    <p>This led to the development of the concept of <strong>shared governance</strong>, most famously articulated in the 1915 Declaration of Principles on Academic Freedom and Academic Tenure by the newly formed American Association of University Professors (AAUP). This document, and the subsequent 1966 Statement on Government of Colleges and Universities, laid the groundwork for a model in which the board, administration, and faculty share responsibility for institutional governance, each with primary authority in their respective areas of expertise.</p>
    <p>In recent decades, however, the traditional shared governance model has faced increasing pressure from a variety of sources. The rise of <strong>managerialism</strong> and the application of corporate management principles to higher education have led to a greater emphasis on efficiency, accountability, and centralized decision-making. This has often resulted in a more <strong>corporate model</strong> of governance, with a stronger executive president and a more oversight-focused board, sometimes at the expense of faculty influence.</p>
    <p>Simultaneously, the increasing complexity and politicization of higher education have led some scholars to propose a <strong>political model</strong> of governance, which views the university as an arena of competing interest groups vying for resources and influence. In this view, governance is not a rational process of shared deliberation but a messy process of negotiation, coalition-building, and compromise.</p>
    <p>Finally, the sheer size and complexity of modern universities have given rise to a <strong>bureaucratic model</strong> of governance, characterized by formal rules, policies, and procedures. While necessary for consistency and fairness, this model can also lead to rigidity, red tape, and a focus on process over purpose.</p>
    <p>Today, most institutions operate with a hybrid of these models, with different models being more or less prominent depending on the institutional type, culture, and the specific issue at hand.</p>

    <h3>Shared Governance Model</h3>
    <p>The shared governance model is often considered the traditional or ideal model of governance in higher education. It is based on the principle of distributed decision-making authority, with the board, administration, and faculty each having a distinct and primary role.</p>
    <ul>
        <li><strong>Faculty:</strong> The faculty has primary responsibility for the curriculum, subject matter and methods of instruction, research, and those aspects of student life which relate to the educational process. This is often referred to as the "academic domain" of governance.</li>
        <li><strong>Administration:</strong> The administration has primary responsibility for the day-to-day operations of the institution, including the implementation of policies, the management of resources, and the coordination of activities across the institution.</li>
        <li><strong>Board:</strong> The board has primary responsibility for the overall mission and direction of the institution, the selection and evaluation of the president, and the stewardship of the institution's resources.</li>
    </ul>
    <p>The strengths of the shared governance model include its ability to draw on diverse perspectives and expertise, its tendency to produce decisions that have broad ownership and support, and its alignment with the values of academic freedom and collegiality. However, the model also has significant challenges. It can be process-heavy and slow to respond to changing circumstances and can lead to gridlock when different groups have fundamentally different views on an issue.</p>

    <h3>Managerialism/Corporate Model</h3>
    <p>The managerial or corporate model of governance has gained prominence as institutions have faced increasing pressure to be more efficient and accountable. This model draws heavily on corporate management principles.</p>
    <p>Key characteristics include centralized decision-making authority, typically vested in a strong president or chancellor; clear hierarchical relationships; a focus on efficiency and results; and an emphasis on strategic planning and performance measurement.</p>
    <p>The strengths of the managerial model include its ability to make decisions quickly and implement changes efficiently. However, it can marginalize faculty, undermine collegial culture, and create resistance if perceived as being imposed without adequate consultation.</p>

    <h3>Political Model</h3>
    <p>The political model of governance views the university as an arena of competing interest groups. In this model, governance is a political process of negotiation, coalition-building, and compromise.</p>
    <p>This model provides a realistic view of how decisions are often made in complex organizations. However, it can also normalize conflict in ways that undermine trust and collaboration and may favor groups that are better organized or have more resources.</p>

    <h3>Bureaucratic Model</h3>
    <p>The bureaucratic model of governance emphasizes formal structures, rules, and procedures. It is characterized by clear hierarchies, detailed policies, and a focus on consistency and fairness.</p>
    <p>This model provides clarity and predictability, but it can also be rigid, slow to adapt, and may emphasize process over outcomes, leading to excessive red tape.</p>

    <h2>Governing Boards: Role, Responsibilities, and Composition</h2>
    <h3>Legal Authority and Fiduciary Responsibilities</h3>
    <p>Governing boards hold the ultimate legal authority for higher education institutions. All governing boards have three fundamental fiduciary responsibilities:</p>
    <ul>
        <li><strong>Duty of Care:</strong> Requires board members to exercise reasonable diligence in overseeing the institution.</li>
        <li><strong>Duty of Loyalty:</strong> Requires board members to act in the best interests of the institution rather than their own personal interests.</li>
        <li><strong>Duty of Obedience:</strong> Requires board members to ensure that the institution operates in accordance with its mission and within the bounds of applicable laws.</li>
    </ul>

    <h3>Core Board Functions</h3>
    <p>Governing boards typically have six core functions:</p>
    <ol>
        <li><strong>Policy Development and Oversight:</strong> Establishing broad institutional policies.</li>
        <li><strong>Strategic Direction:</strong> Approving the institution's mission and vision.</li>
        <li><strong>Financial Stewardship:</strong> Approving budgets and ensuring financial sustainability.</li>
        <li><strong>Presidential Selection and Evaluation:</strong> Hiring and evaluating the president.</li>
        <li><strong>Institutional Advocacy:</strong> Representing the institution externally.</li>
        <li><strong>Self-Governance:</strong> Ensuring the board itself operates effectively.</li>
    </ol>

    <h2>The University Presidency: Leadership Roles and Challenges</h2>
    <h3>The Evolving Presidential Role</h3>
    <p>The role of the university president has evolved from a scholar-leader with an internal focus to a chief executive officer with a significant external focus on fundraising, public relations, and government relations. Contemporary presidents come from diverse backgrounds, serve shorter tenures, and face immense pressure to balance competing values and constituencies.</p>

    <h3>Presidential Responsibilities</h3>
    <p>The contemporary university presidency involves a complex array of responsibilities that can be grouped into four main categories: Institutional Leadership, External Relations, Internal Management, and Academic Leadership.</p>

    <h2>Faculty Governance: Senates, Committees, and Shared Decision-Making</h2>
    <h3>Rationale for Faculty Governance</h3>
    <p>Faculty governance is based on several fundamental principles, including professional expertise, academic freedom, institutional commitment, and ensuring educational quality. Faculty members possess the specialized knowledge essential for making informed decisions about academic matters.</p>

    <h3>Faculty Governance Structures</h3>
    <p>Faculty governance operates through a variety of structures, most commonly including Faculty Senates or Councils, Standing Committees, and governance at the department, program, school, and college levels.</p>

    <h2>Academic Freedom and Tenure: Foundations and Contemporary Issues</h2>
    <h3>Academic Freedom Foundations</h3>
    <p>Academic freedom is a foundational principle of higher education, encompassing freedom of inquiry and research, freedom of teaching, and freedom of expression. Its rationale is based on the idea that the advancement of knowledge requires the freedom to pursue unpopular or controversial ideas without interference.</p>

    <h3>Tenure: Purpose and Process</h3>
    <p>Tenure is the primary mechanism for protecting academic freedom. It provides job security that allows faculty to pursue long-term or controversial research and express unpopular ideas without fear of losing their jobs. The process typically involves a multi-year probationary period followed by a rigorous review.</p>
  `},ev=()=>c.jsx("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("header",{className:"page-header",children:c.jsx("h1",{children:Qf.title})}),c.jsx("div",{className:"lecture-content",dangerouslySetInnerHTML:{__html:Qf.content}}),c.jsx("div",{style:{textAlign:"center",padding:"20px 0",marginTop:"2rem",borderTop:"1px solid var(--border-default)"},children:c.jsx("a",{href:"#/module/2",className:"button",children:"Back to Module 2 Overview"})})]})}),Xf={title:"Module 2, Session 2: Stakeholder Influence, Accountability, and Case Introduction",content:`
    <h2>Introduction</h2>
    <p>Welcome to the second session of Module 2, where we continue our exploration of governance structures and stakeholders in higher education. In our first session, we examined governance models, governing boards, presidential leadership, faculty governance, and academic freedom. Today, we build on those foundations to explore additional dimensions of higher education governance: student involvement, external influences, accountability mechanisms, and a case study on navigating governance crises.</p>
    <p>Effective governance requires balancing the interests and perspectives of multiple stakeholders, both internal and external to the institution. While faculty governance has traditionally received significant attention in discussions of shared governance, students, government entities, accreditors, donors, and other external stakeholders also play important roles in shaping institutional decisions and directions. Understanding these diverse influences is essential for navigating the complex governance landscape of contemporary higher education.</p>
    <p>Additionally, increasing demands for accountability from various constituencies have created new governance challenges. Institutions must demonstrate responsible stewardship, educational effectiveness, and ethical conduct to maintain public trust and support. This requires thoughtful approaches to transparency, assessment, and communication that balance accountability with institutional autonomy and academic freedom.</p>
    <p>In this session, we will examine student roles in governance, analyze the influence of external stakeholders, explore accountability frameworks and ethical considerations, and introduce our second case study on navigating a governance crisis. These topics will complete our overview of governance structures and stakeholders, preparing us for Module 3's focus on strategic planning.</p>
    
    <h2>Student Involvement in Governance: Roles, Impact, and Limitations</h2>
    <h3>Historical Evolution of Student Participation</h3>
    <p>Student involvement in institutional governance has evolved significantly over time, reflecting broader social movements and changing conceptions of students' roles in higher education:</p>
    <p><strong>Early American Colleges:</strong><br>In the earliest American colleges, students had virtually no formal role in governance. The in loco parentis doctrine positioned institutions as parental surrogates with nearly complete authority over student life. Students occasionally influenced institutional direction through protests or collective actions, but formal governance participation was nonexistent.</p>
    <p><strong>Early to Mid-20th Century:</strong><br>Student government associations emerged in the early 20th century, primarily focused on organizing student activities and representing student interests to administration in limited ways. These bodies had little influence on institutional policy or academic matters but provided a structured channel for student voice on campus life issues.</p>
    <p><strong>1960s-1970s Transformation:</strong><br>The civil rights movement, anti-war protests, and broader social activism of the 1960s dramatically changed student involvement in governance. Student demands for meaningful participation in university decision-making led to the creation of student positions on institutional committees, student representation on some governing boards, expansion of student government authority, and development of student rights statements and grievance procedures.</p>
    <p><strong>Contemporary Context:</strong><br>Today, student involvement in governance varies widely across institutions but generally includes formal representation in governance bodies, consultation on major institutional decisions, and structured feedback mechanisms. This evolution reflects changing conceptions of students—from passive recipients of education to active participants in the educational community with legitimate interests in institutional direction and policy.</p>

    <h3>Current Models of Student Governance Participation</h3>
    <p>Several models of student governance participation exist across different types of institutions:</p>
    <ul>
        <li><strong>Student Government Associations (SGAs):</strong> Most institutions have elected student government bodies that represent student interests, allocate student activity fees, organize campus events, and appoint student representatives to committees.</li>
        <li><strong>Board of Trustees/Regents Representation:</strong> Many public institutions and some private ones include student representatives on governing boards, who may have full voting rights or serve in an advisory capacity.</li>
        <li><strong>Committee Representation:</strong> Students commonly serve on various institutional committees, including academic policy, budget advisory, strategic planning, and search committees.</li>
        <li><strong>Consultation and Feedback Mechanisms:</strong> Beyond formal structures, institutions use town hall meetings, student advisory councils, surveys, and focus groups to gather broader student input.</li>
    </ul>

    <h2>External Influences: Accreditation Bodies, Government, Donors, Alumni, and Political Contexts</h2>
    <p>Higher education institutions operate within complex environments shaped by numerous external stakeholders and forces. Understanding these external influences is essential for effective governance and leadership.</p>
    
    <h3>Accreditation Bodies and Quality Assurance</h3>
    <p>Accreditation serves as the primary quality assurance mechanism in American higher education, with significant governance implications. Accreditors typically mandate specific governance structures, including clear delineation of authority, evidence of effective processes, and policies ensuring academic freedom.</p>
    
    <h3>State and System Governance</h3>
    <p>For public institutions, state governance structures significantly shape institutional governance through system-level policies, resource allocation processes, and legislative influence over budgets and board composition.</p>
    
    <h2>Accountability in Higher Education: To Whom and for What?</h2>
    <h3>The Evolving Accountability Landscape</h3>
    <p>Accountability expectations for higher education have evolved from a historical context of peer review and professional norms to a contemporary environment characterized by demands for transparency, quantitative metrics, and demonstrable return on investment.</p>
    
    <h3>Multiple Accountability Relationships</h3>
    <p>Higher education institutions face accountability demands from numerous stakeholders, including government, the market (students, employers, donors), professional bodies (accreditors), and the public, each with different expectations.</p>
    
    <h2>Introduction to Case Study 2: "Navigating a Governance Crisis"</h2>
    <p>To apply the concepts we've explored in this module, we will now introduce our second case study, which focuses on navigating a governance crisis at "Veridian University," a fictional mid-sized public university. The case will provide an opportunity to analyze how governance structures, stakeholder relationships, and accountability mechanisms interact in a challenging situation.</p>
  `},iv=()=>c.jsx("div",{className:"container",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:c.jsxs("div",{className:"content-section animate-on-scroll",children:[c.jsx("header",{className:"page-header",children:c.jsx("h1",{children:Xf.title})}),c.jsx("div",{className:"lecture-content",dangerouslySetInnerHTML:{__html:Xf.content}}),c.jsx("div",{style:{textAlign:"center",padding:"20px 0",marginTop:"2rem",borderTop:"1px solid var(--border-default)"},children:c.jsx("a",{href:"#/module/2",className:"button",children:"Back to Module 2 Overview"})})]})}),lv=()=>{const{pathname:u}=zt();return N.useEffect(()=>{window.scrollTo(0,0)},[u]),null},tv=()=>{const u=zt();N.useEffect(()=>{const f=setTimeout(()=>{const h=document.querySelectorAll(".animate-on-scroll:not(.is-visible)");if(h.length===0)return;const r=new IntersectionObserver(p=>{p.forEach(x=>{x.isIntersecting&&(x.target.classList.add("is-visible"),r.unobserve(x.target))})},{threshold:.1});return h.forEach(p=>r.observe(p)),()=>{h.forEach(p=>{document.body.contains(p)&&r.unobserve(p)}),r.disconnect()}},50);return()=>clearTimeout(f)},[u.pathname])},nv=()=>(tv(),c.jsxs(c.Fragment,{children:[c.jsx(lv,{}),c.jsx(Qp,{}),c.jsx("div",{style:{flexGrow:1,display:"flex",flexDirection:"column"},children:c.jsxs(Rp,{children:[c.jsx(Fe,{path:"/",element:c.jsx(Xp,{})}),c.jsx(Fe,{path:"/about",element:c.jsx(Vp,{})}),c.jsx(Fe,{path:"/syllabus",element:c.jsx(kp,{})}),c.jsx(Fe,{path:"/module/1",element:c.jsx(Zp,{})}),c.jsx(Fe,{path:"/module/1/session/1/slides",element:c.jsx(Kp,{})}),c.jsx(Fe,{path:"/module/1/session/1/lecture",element:c.jsx(Fp,{})})," ",c.jsx(Fe,{path:"/module/1/session/2/slides",element:c.jsx(Jp,{})}),c.jsx(Fe,{path:"/module/İmodule/1/session/2/lecture",element:c.jsx(Pp,{})})," ",c.jsx(Fe,{path:"/module/2",element:c.jsx(Wp,{})}),c.jsx(Fe,{path:"/module/2/session/1/slides",element:c.jsx(Ip,{})}),c.jsx(Fe,{path:"/module/2/session/1/lecture",element:c.jsx(ev,{})}),c.jsx(Fe,{path:"/module/2/session/2/slides",element:c.jsx($p,{})}),c.jsx(Fe,{path:"/module/2/session/2/lecture",element:c.jsx(iv,{})})]})}),c.jsx("footer",{style:{backgroundColor:"var(--clr-accent)",color:"var(--clr-text-on-dark)",padding:"1.5rem",textAlign:"center",marginTop:"auto"},children:c.jsx("p",{children:"© 2025 maoude. All rights reserved. Higher Ed Management Course."})})]}));Bm.createRoot(document.getElementById("root")).render(c.jsx(kf.StrictMode,{children:c.jsx(Hp,{children:c.jsx(nv,{})})}));
