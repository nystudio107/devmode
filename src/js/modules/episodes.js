import lazyLoadComponent from '../utils/lazy-load-component';
import SkeletonBox from '../../vue/SkeletonBox.vue';

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
            'episodes-table': lazyLoadComponent({
                componentFactory: () => import(/* webpackChunkName: "episodestable" */ '../../vue/EpisodesTable.vue'),
                loading: SkeletonBox,
                loadingData: { height: `100vh`, width: `100%` },
            }),
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
main().then(() => {
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
