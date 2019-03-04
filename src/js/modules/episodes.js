// App main
const main = async() => {
    // Async load the vue module
    const VueESM = await import(/* webpackChunkName: "vue" */ 'vue');
    const VueEvents = await import(/* webpackChunkName: "vueevents" */ 'vue-events');

    VueESM.default.use(VueEvents);
// Create our vue instance
    const vm = new VueESM.default({
        el: "#episodes-table",
        components: {
            'episodes-table': () => import(/* webpackChunkName: "episodestable" */ '../../vue/EpisodesTable.vue'),
        },
        data: {},
        methods: {
            onTableRefresh(vuetable) {
                VueESM.default.nextTick(() => vuetable.refresh());
            }
        },
        mounted() {
            //this.$events.$on('refresh-table', eventData => this.onTableRefresh(eventData));
        },
    });
};

// Execute async function
main().then((value) => {
});
