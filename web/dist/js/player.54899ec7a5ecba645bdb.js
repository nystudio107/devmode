/*!
 * @project        Example Project
 * @name           player.54899ec7a5ecba645bdb.js
 * @author         Andrew Welch
 * @build          Wed, Sep 11, 2019 5:24 PM ET
 * @release        4735cf3d00aa67f7003527369b2eb243c739bc48 [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */!function(t){function n(n){for(var e,o,i=n[0],c=n[1],u=0,f=[];u<i.length;u++)o=i[u],r[o]&&f.push(r[o][0]),r[o]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);for(a&&a(n);f.length;)f.shift()()}var e={},r={7:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise(function(n,o){e=r[t]=[n,o]});n.push(e[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+"js/"+({0:"vendors~vue~vueclickaway",1:"amplitudeplayer"}[t]||t)+"."+{0:"8a6736c6fce2cabe9c28",1:"d08394e1bc3ad11205c6"}[t]+".js"}(t);var a=new Error;c=function(n){u.onerror=u.onload=null,clearTimeout(f);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,e[1](a)}r[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(n)},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/dist/",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var a=c;o(o.s=89)}([function(t,n,e){(function(n){var e="object",r=function(t){return t&&t.Math==Math&&t};t.exports=r(typeof globalThis==e&&globalThis)||r(typeof window==e&&window)||r(typeof self==e&&self)||r(typeof n==e&&n)||Function("return this")()}).call(this,e(39))},function(t,n,e){var r=e(0),o=e(10),i=e(27),c=e(56),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(2);t.exports=!r(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(7),o=e(9),i=e(20);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(7),o=e(22),i=e(3),c=e(21),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(15),i=e(24),c=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(29),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(7),o=e(42),i=e(20),c=e(14),u=e(21),a=e(5),f=e(22),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(43),o=e(37);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(0),o=e(10),i=e(8),c=e(5),u=e(15),a=e(25),f=e(26),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",function(t){return a.call(t)}),(t.exports=function(t,n,e,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=e:i(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,"toString",function(){return"function"==typeof this&&s(this).source||a.call(this)})},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(7),o=e(2),i=e(23);t.exports=!r&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(0),o=e(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r=e(10);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r,o,i,c=e(44),u=e(0),a=e(4),f=e(8),s=e(5),l=e(45),p=e(28),v=u.WeakMap;if(c){var d=new v,h=d.get,y=d.has,m=d.set;r=function(t,n){return m.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var g=l("state");p[g]=!0,r=function(t,n){return f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n){t.exports={}},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r,o,i,c=e(0),u=e(2),a=e(6),f=e(32),s=e(65),l=e(23),p=c.location,v=c.setImmediate,d=c.clearImmediate,h=c.process,y=c.MessageChannel,m=c.Dispatch,g=0,x={},b=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},w=function(t){return function(){b(t)}},j=function(t){b(t.data)},O=function(t){c.postMessage(t+"",p.protocol+"//"+p.host)};v&&d||(v=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return x[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(g),g},d=function(t){delete x[t]},"process"==a(h)?r=function(t){h.nextTick(w(t))}:m&&m.now?r=function(t){m.now(w(t))}:y?(i=(o=new y).port2,o.port1.onmessage=j,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(O)?r="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),b(t)}}:function(t){setTimeout(w(t),0)}:(r=O,c.addEventListener("message",j,!1))),t.exports={set:v,clear:d}},function(t,n,e){var r=e(11);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(12),o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";var r,o,i,c=e(40),u=e(24),a=e(0),f=e(29),s=e(54),l=e(55),p=e(57),v=e(4),d=e(12),h=e(58),y=e(6),m=e(59),g=e(64),x=e(41),b=e(33).set,w=e(66),j=e(67),O=e(68),S=e(35),_=e(69),E=e(34),P=e(26),T=e(30),M=e(1)("species"),k="Promise",C=P.get,I=P.set,F=P.getterFor(k),N=a.Promise,W=a.TypeError,A=a.document,L=a.process,R=a.fetch,$=L&&L.versions,D=$&&$.v8||"",B=S.f,U=B,q="process"==y(L),z=!!(A&&A.createEvent&&a.dispatchEvent),V=T(k,function(){var t=N.resolve(1),n=function(){},e=(t.constructor={})[M]=function(t){t(n,n)};return!((q||"function"==typeof PromiseRejectionEvent)&&(!u||t.finally)&&t.then(n)instanceof e&&0!==D.indexOf("6.6")&&-1===E.indexOf("Chrome/66"))}),G=V||!g(function(t){N.all(t).catch(function(){})}),J=function(t){var n;return!(!v(t)||"function"!=typeof(n=t.then))&&n},K=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;w(function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,d=s.domain;try{l?(i||(2===n.rejection&&Q(t,n),n.rejection=1),!0===l?u=o:(d&&d.enter(),u=l(o),d&&(d.exit(),f=!0)),u===s.promise?v(W("Promise-chain cycle")):(a=J(u))?a.call(u,p,v):p(u)):v(o)}catch(t){d&&!f&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&H(t,n)})}},X=function(t,n,e){var r,o;z?((r=A.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),a.dispatchEvent(r)):r={promise:n,reason:e},(o=a["on"+t])?o(r):"unhandledrejection"===t&&O("Unhandled promise rejection",e)},H=function(t,n){b.call(a,function(){var e,r=n.value;if(Y(n)&&(e=_(function(){q?L.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)}),n.rejection=q||Y(n)?2:1,e.error))throw e.value})},Y=function(t){return 1!==t.rejection&&!t.parent},Q=function(t,n){b.call(a,function(){q?L.emit("rejectionHandled",t):X("rejectionhandled",t,n.value)})},Z=function(t,n,e,r){return function(o){t(n,e,o,r)}},tt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,K(t,n,!0))},nt=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw W("Promise can't be resolved itself");var o=J(e);o?w(function(){var r={done:!1};try{o.call(e,Z(nt,t,r,n),Z(tt,t,r,n))}catch(e){tt(t,r,e,n)}}):(n.value=e,n.state=1,K(t,n,!1))}catch(e){tt(t,{done:!1},e,n)}}};V&&(N=function(t){h(this,N,k),d(t),r.call(this);var n=C(this);try{t(Z(nt,this,n),Z(tt,this,n))}catch(t){tt(this,n,t)}},(r=function(t){I(this,{type:k,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=s(N.prototype,{then:function(t,n){var e=F(this),r=B(x(this,N));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=q?L.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&K(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=C(t);this.promise=t,this.resolve=Z(nt,t,n),this.reject=Z(tt,t,n)},S.f=B=function(t){return t===N||t===i?new o(t):U(t)},u||"function"!=typeof R||c({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return j(N,R.apply(a,arguments))}})),c({global:!0,wrap:!0,forced:V},{Promise:N}),l(N,k,!1,!0),p(k),i=f.Promise,c({target:k,stat:!0,forced:V},{reject:function(t){var n=B(this);return n.reject.call(void 0,t),n.promise}}),c({target:k,stat:!0,forced:u||V},{resolve:function(t){return j(u&&this===i?N:this,t)}}),c({target:k,stat:!0,forced:G},{all:function(t){var n=this,e=B(n),r=e.resolve,o=e.reject,i=_(function(){var e=d(n.resolve),i=[],c=0,u=1;m(t,function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(n,t).then(function(t){f||(f=!0,i[a]=t,--u||r(i))},o)}),--u||r(i)});return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=B(n),r=e.reject,o=_(function(){var o=d(n.resolve);m(t,function(t){o.call(n,t).then(e.resolve,r)})});return o.error&&r(o.value),e.promise}})},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){"use strict";function r(t,n,e,r,o,i,c,u){var a,f="function"==typeof t?t.options:t;if(n&&(f.render=n,f.staticRenderFns=e,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(t,n){return a.call(n),s(t,n)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:f}}e.d(n,"a",function(){return r})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(13).f,i=e(8),c=e(19),u=e(15),a=e(46),f=e(30);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(3),o=e(12),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(2),o=e(6),i="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(0),o=e(25),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(10),o=e(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(5),o=e(47),i=e(13),c=e(9);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(11),o=e(48),i=e(53),c=e(3);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(49),o=e(52).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(5),o=e(14),i=e(50).indexOf,c=e(28);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(14),o=e(18),i=e(51),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(17),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(19);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){var r=e(9).f,o=e(5),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},function(t,n,e){"use strict";var r=e(11),o=e(9),i=e(1),c=e(7),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(3),o=e(60),i=e(18),c=e(32),u=e(61),a=e(63),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,d,h,y,m,g=c(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((y=s?g(r(m=t[d])[0],m[1]):g(t[d]))&&y instanceof f)return y;return new f(!1)}p=v.call(t)}for(;!(m=p.next()).done;)if((y=a(p,g,m.value,s))&&y instanceof f)return y;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,e){var r=e(1),o=e(31),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(62),o=e(31),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(6),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(11);t.exports=r("document","documentElement")},function(t,n,e){var r,o,i,c,u,a,f,s=e(0),l=e(13).f,p=e(6),v=e(33).set,d=e(34),h=s.MutationObserver||s.WebKitMutationObserver,y=s.process,m=s.Promise,g="process"==p(y),x=l(s,"queueMicrotask"),b=x&&x.value;b||(r=function(){var t,n;for(g&&(t=y.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},g?c=function(){y.nextTick(r)}:h&&!/(iphone|ipod|ipad).*applewebkit/i.test(d)?(u=!0,a=document.createTextNode(""),new h(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(f=m.resolve(void 0),c=function(){f.then(r)}):c=function(){v.call(s,r)}),t.exports=b||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(3),o=e(4),i=e(35);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});e(36);function r(t){let n,{componentFactory:e,loading:r,loadingData:o}=t;return()=>({component:new Promise(t=>{n=t}),loading:{mounted(){if(!("IntersectionObserver"in window))return void e().then(n);const t=new IntersectionObserver(r=>{r[0].intersectionRatio<=0||(t.unobserve(this.$el),e().then(n))});t.observe(this.$el)},render:t=>t(r,o)}})}},function(t,n,e){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"SkeletonBox",style:{height:this.height,width:this.computedWidth}})};r._withStripped=!0;var o={name:"SkeletonBox",props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}},i=(e(72),e(38)),c=Object(i.a)(o,r,[],!1,null,null,null);c.options.__file="src/vue/SkeletonBox.vue";n.a=c.exports},function(t,n,e){"use strict";var r=e(16);e.n(r).a},,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(36);var r=e(70),o=e(71);(async()=>{const{default:t}=await e.e(0).then(e.bind(null,73));new t({el:"#amplitude-player",components:{"amplitude-player":Object(r.a)({componentFactory:()=>e.e(1).then(e.bind(null,96)),loading:o.a,loadingData:{height:"109px",width:"100%"}})},data:{},methods:{},mounted(){}})})().then(t=>{})}]);
//# sourceMappingURL=player.54899ec7a5ecba645bdb.js.map