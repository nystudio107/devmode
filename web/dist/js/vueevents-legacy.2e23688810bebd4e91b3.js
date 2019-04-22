/*!
 * @project        Example Project
 * @name           vueevents-legacy.2e23688810bebd4e91b3.js
 * @author         Andrew Welch
 * @build          Mon, Apr 22, 2019 2:00 AM ET
 * @release        cf9bfb3a588d360fcfda6c02931919eadbc8c08c [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{34:function(o,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};function i(o){if(!i.installed){var n=new o({methods:{emit:function(o){for(var n=arguments.length,t=Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];this.$emit.apply(this,[o].concat(t))},fire:function(o){for(var n=arguments.length,t=Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];this.emit.apply(this,[o].concat(t))},on:function(o,n){this.$on(o,n)},listen:function(o,n){this.on(o,n)},once:function(o,n){this.$once(o,n)},off:function(o,n){this.$off(o,n)},remove:function(o,n){this.off(o,n)}}});Object.defineProperty(o.prototype,"$events",{get:function(){return n}}),o.mixin({beforeCreate:function(){if("object"===e(this.$options.events)){var o={};for(var t in this.$options.events)o[t]=this.$options.events[t].bind(this);this.$once("hook:beforeMount",function(){for(var t in o)n.$on(t,o[t])}),this.$once("hook:beforeDestroy",function(){for(var t in o)n.$off(t,o[t]);o=null})}}})}}"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),n.default=i}}]);
//# sourceMappingURL=vueevents-legacy.2e23688810bebd4e91b3.js.map