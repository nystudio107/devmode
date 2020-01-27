/*!
 * @project        Example Project
 * @name           vueevents-legacy.659c14a9b1ba0d895d3f.js
 * @author         Andrew Welch
<<<<<<< HEAD:cms/web/dist/js/vueevents-legacy.659c14a9b1ba0d895d3f.js
 * @build          Sun, Jan 26, 2020 10:51 PM ET
 * @release        c2ffbfdc0ef71ac1054bc3c5251d77802be0193a [develop]
=======
 * @build          Mon, Jan 27, 2020 5:21 AM ET
>>>>>>> feature/docker:cms/web/dist/js/vueevents.025b568e2061c5203a75.js
 * @copyright      Copyright (c) 2020 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{135:function(o,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};function i(o){if(!i.installed){var n=new o({methods:{emit:function(o){for(var n=arguments.length,t=Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];this.$emit.apply(this,[o].concat(t))},fire:function(o){for(var n=arguments.length,t=Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];this.emit.apply(this,[o].concat(t))},on:function(o,n){this.$on(o,n)},listen:function(o,n){this.on(o,n)},once:function(o,n){this.$once(o,n)},off:function(o,n){this.$off(o,n)},remove:function(o,n){this.off(o,n)}}});Object.defineProperty(o.prototype,"$events",{get:function(){return n}}),o.mixin({beforeCreate:function(){if("object"===e(this.$options.events)){var o={};for(var t in this.$options.events)o[t]=this.$options.events[t].bind(this);this.$once("hook:beforeMount",(function(){for(var t in o)n.$on(t,o[t])})),this.$once("hook:beforeDestroy",(function(){for(var t in o)n.$off(t,o[t]);o=null}))}}})}}"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),n.default=i}}]);
//# sourceMappingURL=vueevents-legacy.659c14a9b1ba0d895d3f.js.map