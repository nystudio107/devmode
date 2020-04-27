// App main
const main = async() => {
    // Async load the vue module
    const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');
    // Create our vue instance
    const vm = new Vue({
        el: "#amplitude-player",
        components: {
            'amplitude-player': () => import(/* webpackChunkName: "amplitudeplayer" */ '../../vue/amplitude-player.vue'),
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
