/*!
 * @project        Example Project
 * @name           vueclickaway-legacy.a422b9c6f31ba4bb6343.js
 * @author         Andrew Welch
 * @build          Sat, Aug 17, 2019 4:24 AM ET
 * @release        2dc981ed430c93ccacb0ee4a366cda2969b3ea9d [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{124:function(e,n,t){"use strict";var i=t(89);i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+i.version);var o="_vue_clickaway_handler";function a(e,n,t){c(e);var i=t.context,a=n.value;if("function"==typeof a){var u=!1;setTimeout(function(){u=!0},0),e[o]=function(n){var t=n.path||(n.composedPath?n.composedPath():void 0);if(u&&(t?t.indexOf(e)<0:!e.contains(n.target)))return a.call(i,n)},document.documentElement.addEventListener("click",e[o],!1)}}function c(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var u={bind:a,update:function(e,n){n.value!==n.oldValue&&a(e,n)},unbind:c},d={directives:{onClickaway:u}};n.version="2.2.2",n.directive=u,n.mixin=d}}]);
//# sourceMappingURL=vueclickaway-legacy.a422b9c6f31ba4bb6343.js.map