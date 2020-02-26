import styles from '../css/app.pcss';

import FontelloEot from '../fonts/fontello.eot';
import FontelloTtf from '../fonts/fontello.ttf';
import FontelloWoff from '../fonts/fontello.woff';
import FontelloWoff2 from '../fonts/fontello.woff2';

import OperatorMonoSSmBookEot from '../fonts/OperatorMonoSSm-Book.eot';
import OperatorMonoSSmBookTtf from '../fonts/OperatorMonoSSm-Book.ttf';
import OperatorMonoSSmBookWoff from '../fonts/OperatorMonoSSm-Book.woff';
import OperatorMonoSSmBookWoff2 from '../fonts/OperatorMonoSSm-Book.woff2';

import OperatorMonoSSmBookItalicEot from '../fonts/OperatorMonoSSm-BookItalic.eot';
import OperatorMonoSSmBookItalicTtf from '../fonts/OperatorMonoSSm-BookItalic.ttf';
import OperatorMonoSSmBookItalicWoff from '../fonts/OperatorMonoSSm-BookItalic.woff';
import OperatorMonoSSmBookItalicWoff2 from '../fonts/OperatorMonoSSm-BookItalic.woff2';

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
            prerenderLink: function (e) {
                const head = document.getElementsByTagName("head")[0];
                const refs = head.childNodes;
                const ref = refs[refs.length - 1];

                const elements = head.getElementsByTagName("link");
                Array.prototype.forEach.call(elements, function (el, i) {
                    if (("rel" in el) && (el.rel === "prerender")) {
                        el.parentNode.removeChild(el);
                    }
                });

                const prerenderTag = document.createElement("link");
                prerenderTag.rel = "prerender";
                prerenderTag.href = e.currentTarget.href;
                ref.parentNode.insertBefore(prerenderTag, ref);
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
