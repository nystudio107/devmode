import styles from '../css/app.pcss';

// App main
const main = async() => {
    // Async load the vue module
    const VueESM = await import(/* webpackChunkName: "vue" */ 'vue');
    // Async load the vue module
    const VueClickaway = await import(/* webpackChunkName: "vueclickaway" */ 'vue-clickaway');
    const VueTyper = await import(/* webpackChunkName: "vuetyper" */ 'vue-typer');
    VueESM.default.use(VueTyper.default);
    // Create our vue instance
    const vm = new VueESM.default({
        el: '#page-header',
        mixins: [VueClickaway.mixin],
        components: {
        },
        delimiters: ['${', '}'],
        data: {
            menuOpen: false,
        },
        methods: {
            // Pre-render pages when the user mouses over a link
            // Usage: <a href="" @mouseover="prerenderLink">
            prerenderLink: function (e) {
                var head = document.getElementsByTagName("head")[0];
                var refs = head.childNodes;
                ref = refs[refs.length - 1];

                var elements = head.getElementsByTagName("link");
                Array.prototype.forEach.call(elements, function (el, i) {
                    if (("rel" in el) && (el.rel === "prerender")) {
                        el.parentNode.removeChild(el);
                    }
                });

                var prerenderTag = document.createElement("link");
                prerenderTag.rel = "prerender";
                prerenderTag.href = e.currentTarget.href;
                ref.parentNode.insertBefore(prerenderTag, ref);
            },
            away: function () {
                this.menuOpen = false;
                console.log("away");
            },
            toggle: function () {
                this.menuOpen = !this.menuOpen;
                console.log("toggle");
            },
        },
    });
};
// Execute async function
main().then((value) => {
});
