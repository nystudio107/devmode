/*!
 * @project        Example Project
 * @name           vueclickaway-legacy.57e5efdc3cbed76c7172.js
 * @author         Andrew Welch
 * @build          Mon, Nov 4, 2019 4:38 PM ET
 * @release        5e1f99ee14b15cd41c2a766be0a951c73dd63d3e [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{123:function(e,n,t){"use strict";var i=t(88);i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+i.version);var o="_vue_clickaway_handler";function a(e,n,t){c(e);var i=t.context,a=n.value;if("function"==typeof a){var u=!1;setTimeout(function(){u=!0},0),e[o]=function(n){var t=n.path||(n.composedPath?n.composedPath():void 0);if(u&&(t?t.indexOf(e)<0:!e.contains(n.target)))return a.call(i,n)},document.documentElement.addEventListener("click",e[o],!1)}}function c(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var u={bind:a,update:function(e,n){n.value!==n.oldValue&&a(e,n)},unbind:c},d={directives:{onClickaway:u}};n.version="2.2.2",n.directive=u,n.mixin=d}}]);
//# sourceMappingURL=vueclickaway-legacy.57e5efdc3cbed76c7172.js.map