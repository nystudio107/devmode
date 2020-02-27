/*!
 * @project        Example Project
 * @name           vuetablepaginationinfo.ea57928f67de34750f5e.js
 * @author         Andrew Welch
 * @build          Thu, Feb 27, 2020 4:18 PM ET
 * @copyright      Copyright (c) 2020 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{161:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};e._withStripped=!0;i(29);var n={props:{css:{type:Object,default:()=>({infoClass:"float-left py-5 devmode-header-text"})},infoTemplate:{type:String,default:()=>"Displaying {from} to {to} of {total} items"},noDataTemplate:{type:String,default:()=>""}},data:function(){return{tablePagination:null}},computed:{paginationInfo(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData(t){this.tablePagination=t},resetData(){this.tablePagination=null}}},o=i(1),l=Object(o.a)(n,void 0,void 0,!1,null,null,null);l.options.__file="src/vue/VuetablePaginationInfoMixin.vue";var s={mixins:[l.exports]},r=Object(o.a)(s,e,[],!1,null,null,null);r.options.__file="src/vue/VuetablePaginationInfo.vue";a.default=r.exports}}]);
//# sourceMappingURL=vuetablepaginationinfo.ea57928f67de34750f5e.js.map