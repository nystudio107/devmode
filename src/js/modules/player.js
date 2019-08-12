import lazyLoadComponent from '../utils/lazy-load-component';
import PlayerSkeletonBox from '../../vue/PlayerSkeletonBox.vue';

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
                loading: PlayerSkeletonBox,
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
