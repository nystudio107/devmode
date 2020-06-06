/*!
 * @project        Example Project
 * @name           vueclickaway-legacy.daa18b861252be22cc83.js
 * @author         Andrew Welch
 * @build          Sat, Jun 6, 2020 4:18 PM ET
 * @copyright      Copyright (c) 2020 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{129:function(e,n,t){"use strict";var i=t(95);i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+i.version);var o="_vue_clickaway_handler";function a(e,n,t){c(e);var i=t.context,a=n.value;if("function"==typeof a){var u=!1;setTimeout((function(){u=!0}),0),e[o]=function(n){var t=n.path||(n.composedPath?n.composedPath():void 0);if(u&&(t?t.indexOf(e)<0:!e.contains(n.target)))return a.call(i,n)},document.documentElement.addEventListener("click",e[o],!1)}}function c(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var u={bind:a,update:function(e,n){n.value!==n.oldValue&&a(e,n)},unbind:c},d={directives:{onClickaway:u}};n.version="2.2.2",n.directive=u,n.mixin=d}}]);
//# sourceMappingURL=vueclickaway-legacy.daa18b861252be22cc83.js.map