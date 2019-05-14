/*!
 * @project        Example Project
 * @name           vueevents-legacy.130e11e54a98ace2f45f.js
 * @author         Andrew Welch
 * @build          Tue, May 14, 2019 3:29 AM ET
 * @release        7452b87aa60677c3e6d3bb7fca5fb7103e8de0be [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{33:function(o,t,n){"use strict";n.r(t);var e=n(0);Object.defineProperty(exports,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===Object(e.default)(Symbol.iterator)?function(o){return Object(e.default)(o)}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":Object(e.default)(o)};function f(o){if(!f.installed){var t=new o({methods:{emit:function(o){for(var t=arguments.length,n=Array(t>1?t-1:0),e=1;e<t;e++)n[e-1]=arguments[e];this.$emit.apply(this,[o].concat(n))},fire:function(o){for(var t=arguments.length,n=Array(t>1?t-1:0),e=1;e<t;e++)n[e-1]=arguments[e];this.emit.apply(this,[o].concat(n))},on:function(o,t){this.$on(o,t)},listen:function(o,t){this.on(o,t)},once:function(o,t){this.$once(o,t)},off:function(o,t){this.$off(o,t)},remove:function(o,t){this.off(o,t)}}});Object.defineProperty(o.prototype,"$events",{get:function(){return t}}),o.mixin({beforeCreate:function(){if("object"===i(this.$options.events)){var o={};for(var n in this.$options.events)o[n]=this.$options.events[n].bind(this);this.$once("hook:beforeMount",function(){for(var n in o)t.$on(n,o[n])}),this.$once("hook:beforeDestroy",function(){for(var n in o)t.$off(n,o[n]);o=null})}}})}}"undefined"!=typeof window&&window.Vue&&window.Vue.use(f),exports.default=f}}]);
//# sourceMappingURL=vueevents-legacy.130e11e54a98ace2f45f.js.map