import lazyLoadComponent from '../utils/lazy-load-component';
import SkeletonBox from '../../vue/SkeletonBox.vue';

// App main
const main = async() => {
    // Async load the vue module
    const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');
    // Create our vue instance
    const vm = new Vue({
        el: "#amplitude-player",
        components: {
            'amplitude-player': lazyLoadComponent({
                componentFactory: () => import(/* webpackChunkName: "amplitudeplayer" */ '../../vue/amplitude-player.vue'),
                loading: SkeletonBox,
                loadingData: { height: `109px`, width: `100%` }
            }),
        },
        data: {
        },
        methods: {
        },
        mounted() {
        },
    });
};

// Execute async function
main().then((value) => {
});
