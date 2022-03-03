import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import plugins from "./plugins";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(plugins);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
