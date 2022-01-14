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
