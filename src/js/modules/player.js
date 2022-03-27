// App main
const main = async () => {
  // Async load the vue module
  const {default: Vue} = await import(/* webpackChunkName: "vue" */ 'vue');
  // Create our vue instance
  new Vue({
    el: "#devmode-player",
    components: {
      'devmode-player': () => import(/* webpackChunkName: "devmodeplayer" */ '@/vue/DevmodePlayer.vue'),
    },
    data: function () {
      return {};
    },
  });
};

// Execute async function
main().then(() => {
  console.log();
});

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}
