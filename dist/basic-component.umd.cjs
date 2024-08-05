(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".storybook-button{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.storybook-button--primary{color:#fff;background-color:#1ea7fd}.storybook-button--secondary{color:#333;background-color:transparent;box-shadow:#00000026 0 0 0 1px inset}.storybook-button--small{font-size:12px;padding:10px 16px}.storybook-button--medium{font-size:14px;padding:11px 20px}.storybook-button--large{font-size:16px;padding:12px 24px}")),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(E,S){typeof exports=="object"&&typeof module<"u"?S(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],S):(E=typeof globalThis<"u"?globalThis:E||self,S(E.BasicComponent={},E.React))})(this,function(E,S){"use strict";var J={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function we(){if(re)return D;re=1;var A=S,R=Symbol.for("react.element"),I=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,C=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function W(m,c,w){var p,g={},_=null,M=null;w!==void 0&&(_=""+w),c.key!==void 0&&(_=""+c.key),c.ref!==void 0&&(M=c.ref);for(p in c)h.call(c,p)&&!P.hasOwnProperty(p)&&(g[p]=c[p]);if(m&&m.defaultProps)for(p in c=m.defaultProps,c)g[p]===void 0&&(g[p]=c[p]);return{$$typeof:R,type:m,key:_,ref:M,props:g,_owner:C.current}}return D.Fragment=I,D.jsx=W,D.jsxs=W,D}var F={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function je(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var A=S,R=Symbol.for("react.element"),I=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),m=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),ne=Symbol.iterator,De="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[De];return typeof r=="function"?r:null}var j=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function l(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ae("error",e,t)}}function Ae(e,r,t){{var n=j.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ie=!1,We=!1,Ye=!1,$e=!1,Le=!1,ae;ae=Symbol.for("react.module.reference");function Me(e){return!!(typeof e=="string"||typeof e=="function"||e===h||e===P||Le||e===C||e===w||e===p||$e||e===M||Ie||We||Ye||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===g||e.$$typeof===W||e.$$typeof===m||e.$$typeof===c||e.$$typeof===ae||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function oe(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case I:return"Portal";case P:return"Profiler";case C:return"StrictMode";case w:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return oe(r)+".Consumer";case W:var t=e;return oe(t._context)+".Provider";case c:return Ve(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case _:{var i=e,u=i._payload,o=i._init;try{return b(o(u))}catch{return null}}}return null}var T=Object.assign,Y=0,ie,ue,se,fe,le,ce,de;function ve(){}ve.__reactDisabledLog=!0;function Ue(){{if(Y===0){ie=console.log,ue=console.info,se=console.warn,fe=console.error,le=console.group,ce=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function Ne(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:ie}),info:T({},e,{value:ue}),warn:T({},e,{value:se}),error:T({},e,{value:fe}),group:T({},e,{value:le}),groupCollapsed:T({},e,{value:ce}),groupEnd:T({},e,{value:de})})}Y<0&&l("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var K=j.ReactCurrentDispatcher,q;function V(e,r,t){{if(q===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);q=n&&n[1]||""}return`
`+q+e}}var G=!1,U;{var Be=typeof WeakMap=="function"?WeakMap:Map;U=new Be}function pe(e,r){if(!e||G)return"";{var t=U.get(e);if(t!==void 0)return t}var n;G=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=K.current,K.current=null,Ue();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(v){n=v}Reflect.construct(e,[],o)}else{try{o.call()}catch(v){n=v}e.call(o.prototype)}}else{try{throw Error()}catch(v){n=v}e()}}catch(v){if(v&&n&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var y=`
`+a[s].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),typeof e=="function"&&U.set(e,y),y}while(s>=1&&f>=0);break}}}finally{G=!1,K.current=u,Ne(),Error.prepareStackTrace=i}var k=e?e.displayName||e.name:"",O=k?V(k):"";return typeof e=="function"&&U.set(e,O),O}function Je(e,r,t){return pe(e,!1)}function Ke(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,Ke(e));if(typeof e=="string")return V(e);switch(e){case w:return V("Suspense");case p:return V("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Je(e.render);case g:return N(e.type,r,t);case _:{var n=e,i=n._payload,u=n._init;try{return N(u(i),r,t)}catch{}}}return""}var $=Object.prototype.hasOwnProperty,ye={},be=j.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}function qe(e,r,t,n,i){{var u=Function.call.bind($);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(B(i),l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),B(null)),a instanceof Error&&!(a.message in ye)&&(ye[a.message]=!0,B(i),l("Failed %s type: %s",t,a.message),B(null))}}}var Ge=Array.isArray;function z(e){return Ge(e)}function ze(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function he(e){if(Xe(e))return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ze(e)),ge(e)}var L=j.ReactCurrentOwner,He={key:!0,ref:!0,__self:!0,__source:!0},Ee,Re,X;X={};function Ze(e){if($.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Qe(e){if($.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function er(e,r){if(typeof e.ref=="string"&&L.current&&r&&L.current.stateNode!==r){var t=b(L.current.type);X[t]||(l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(L.current.type),e.ref),X[t]=!0)}}function rr(e,r){{var t=function(){Ee||(Ee=!0,l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function tr(e,r){{var t=function(){Re||(Re=!0,l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var nr=function(e,r,t,n,i,u,o){var a={$$typeof:R,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ar(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(he(t),a=""+t),Qe(r)&&(he(r.key),a=""+r.key),Ze(r)&&(d=r.ref,er(r,i));for(u in r)$.call(r,u)&&!He.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&rr(o,f),d&&tr(o,f)}return nr(e,a,d,i,n,L.current,o)}}var H=j.ReactCurrentOwner,me=j.ReactDebugCurrentFrame;function x(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===R}function _e(){{if(H.current){var e=b(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){return""}var Te={};function ir(e){{var r=_e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Oe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ir(r);if(Te[t])return;Te[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),x(e),l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),x(null)}}function Se(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Oe(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Q(o.value)&&Oe(o.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=b(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=b(r);l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function sr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){x(e),l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),x(null);break}}e.ref!==null&&(x(e),l("Invalid attribute `ref` supplied to `React.Fragment`."),x(null))}}var Ce={};function Pe(e,r,t,n,i,u){{var o=Me(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=or();d?a+=d:a+=_e();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===R?(s="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=ar(e,r,t,i,u);if(f==null)return f;if(o){var y=r.children;if(y!==void 0)if(n)if(z(y)){for(var k=0;k<y.length;k++)Se(y[k],e);Object.freeze&&Object.freeze(y)}else l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Se(y,e)}if($.call(r,"key")){var O=b(e),v=Object.keys(r).filter(function(pr){return pr!=="key"}),ee=v.length>0?"{key: someKey, "+v.join(": ..., ")+": ...}":"{key: someKey}";if(!Ce[O+ee]){var vr=v.length>0?"{"+v.join(": ..., ")+": ...}":"{}";l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ee,O,vr,O),Ce[O+ee]=!0}}return e===h?sr(f):ur(f),f}}function fr(e,r,t){return Pe(e,r,t,!0)}function lr(e,r,t){return Pe(e,r,t,!1)}var cr=lr,dr=fr;F.Fragment=h,F.jsx=cr,F.jsxs=dr}()),F}process.env.NODE_ENV==="production"?J.exports=we():J.exports=je();var xe=J.exports;const ke=({primary:A=!1,size:R="medium",backgroundColor:I,label:h,...C})=>{const P=A?"storybook-button--primary":"storybook-button--secondary";return xe.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${R}`,P].join(" "),style:{backgroundColor:I},...C,children:h})};E.Button=ke,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
