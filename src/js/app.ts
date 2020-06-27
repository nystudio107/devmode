import '../css/app.pcss';

import '../fonts/fontello.eot';
import '../fonts/fontello.ttf';
import '../fonts/fontello.woff';
import '../fonts/fontello.woff2';

import '../fonts/OperatorMonoSSm-Book.eot';
import '../fonts/OperatorMonoSSm-Book.ttf';
import '../fonts/OperatorMonoSSm-Book.woff';
import '../fonts/OperatorMonoSSm-Book.woff2';

import '../fonts/OperatorMonoSSm-BookItalic.eot';
import '../fonts/OperatorMonoSSm-BookItalic.ttf';
import '../fonts/OperatorMonoSSm-BookItalic.woff';
import '../fonts/OperatorMonoSSm-BookItalic.woff2';

//import Snowf from 'vue-snowf';

// App main
const main = async() => {
    // Async load the vue module
    const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');
    // Async load the vue module
    const { mixin: VueClickaway } = await import(/* webpackChunkName: "vueclickaway" */ 'vue-clickaway');
    const { default: VueTyper } = await import(/* webpackChunkName: "vuetyper" */ 'vue-typer');
    const LazySizes = await import(/* webpackChunkName: "lazysizes" */ 'lazysizes');
    const LazySizesBgSet = await import(/* webpackChunkName: "lazysizes" */ 'lazysizes/plugins/bgset/ls.bgset.js');
    LazySizes.init();
    Vue.use(VueTyper);
    // Create our vue instance
    const vm = new Vue({
        el: '#page-header',
        mixins: [VueClickaway],
        components: {
//            Snowf,
        },
        delimiters: ['${', '}'],
        data: {
            menuOpen: false,
        },
        methods: {
            // Pre-render pages when the user mouses over a link
            // Usage: <a href="" @mouseover="prerenderLink">
            prerenderLink: function (e : Event) {
                const head = document.getElementsByTagName("head")[0];
                const refs = head.childNodes;
                const ref = refs[refs.length - 1];

                const elements = head.getElementsByTagName("link");
                Array.prototype.forEach.call(elements, function (el, i) {
                    if (("rel" in el) && (el.rel === "prerender")) {
                        el.parentNode.removeChild(el);
                    }
                });

                if (ref.parentNode && e.currentTarget) {
                    const target : HTMLAnchorElement = <HTMLAnchorElement>e.currentTarget;
                    const prerenderTag = document.createElement("link");
                    prerenderTag.rel = "prerender";
                    prerenderTag.href = target.href;
                    ref.parentNode.insertBefore(prerenderTag, ref);
                }
            },
            away: function () {
                this.menuOpen = false;
            },
            toggle: function () {
                this.menuOpen = !this.menuOpen;
            },
        },
    });
};
// Execute async function
main().then((value) => {
});
