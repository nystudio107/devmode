/*!
 * @project        Example Project
 * @name           amplitudeplayer.432bbeb252199dda941f.js
 * @author         Andrew Welch
 * @build          Mon, Apr 22, 2019 1:21 AM ET
 * @release        6d23a4d35c497aaa5644c89bb43949d730923e20 [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{23:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"single-song-player"}},[s("div",{staticClass:"bottom-container flex items-center"},[s("div",{staticClass:"control-container flex-shrink"},[s("div",{staticClass:"amplitude-play-pause",attrs:{"data-amplitude-main-play-pause":"true",id:"play-pause"}},[s("div",{staticClass:"text-devmode-pink text-4xl cursor-pointer"},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.paused,expression:"paused"}],staticClass:"icon-play"}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:!t.paused,expression:"!paused"}],staticClass:"icon-pause"})])])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"flex-grow px-1 pt-0"},[s("progress",{staticClass:"amplitude-song-played-progress w-full h-3 rounded",attrs:{"data-amplitude-main-song-played-progress":"true",id:"song-played-progress"},domProps:{value:t.progress},on:{click:t.seek}})]),t._v(" "),t._m(1)])])};e._withStripped=!0;var i=s(37),n=s.n(i);window.Amplitude=n.a;var r={components:{},props:{title:String,artist:String,url:String,autoPlay:Boolean},data:function(){return{progress:0,paused:!0}},computed:{},methods:{isPaused:function(){return n.a.audio().paused},seek:function(t){const a=t.target.getBoundingClientRect(),s=t.pageX-a.left,e=parseFloat(s)/parseFloat(t.target.offsetWidth)*100;n.a.setSongPlayedPercentage(e)}},mounted:function(){const t=this;n.a.init({preload:"auto",songs:[{name:this.title,artist:this.artist,url:this.url}],start_song:0,callbacks:{initialized:function(){const a=n.a.getAudio();a.addEventListener("play",function(){t.paused=a.paused}),a.addEventListener("pause",function(){t.paused=a.paused}),t.autoPlay&&a.setAttribute("autoplay","")}}})}},u=s(25),o=Object(u.a)(r,e,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hidden sm:block time-container flex-shrink pr-3 pl-1"},[a("span",{staticClass:"current-time text-devmode-pink font-mono text-xs text-left"},[a("span",{staticClass:"amplitude-current-hours",attrs:{"data-amplitude-main-current-hours":"true"}}),this._v(":"),a("span",{staticClass:"amplitude-current-minutes",attrs:{"data-amplitude-main-current-minutes":"true"}}),this._v(":"),a("span",{staticClass:"amplitude-current-seconds",attrs:{"data-amplitude-main-current-seconds":"true"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"time-container flex-shrink pl-3 pr-1"},[a("span",{staticClass:"duration text-devmode-pink font-mono text-xs text-left"},[a("span",{staticClass:"amplitude-duration-hours",attrs:{"data-amplitude-main-duration-hours":"true"}}),this._v(":"),a("span",{staticClass:"amplitude-duration-minutes",attrs:{"data-amplitude-main-duration-minutes":"true"}}),this._v(":"),a("span",{staticClass:"amplitude-duration-seconds",attrs:{"data-amplitude-main-duration-seconds":"true"}})])])}],!1,null,null,null);o.options.__file="src/vue/amplitude-player.vue";a.default=o.exports}}]);
//# sourceMappingURL=amplitudeplayer.432bbeb252199dda941f.js.map