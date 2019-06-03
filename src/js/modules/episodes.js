// App main
const main = async() => {
    // Async load the vue module
    const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');
    const { default: VueEvents } = await import(/* webpackChunkName: "vueevents" */ 'vue-events');

    Vue.use(VueEvents);
// Create our vue instance
    const vm = new Vue({
        el: "#episodes-table",
        components: {
            'episodes-table': () => import(/* webpackChunkName: "episodestable" */ '../../vue/EpisodesTable.vue'),
        },
        data: {},
        methods: {
            onTableRefresh(vuetable) {
                Vue.nextTick(() => vuetable.refresh());
            }
        },
        mounted() {
            this.$events.$on('refresh-table', eventData => this.onTableRefresh(eventData));
        },
    });
};

// Execute async function
main().then((value) => {
});
