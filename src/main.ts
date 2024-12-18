import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";

Vue.config.productionTip = false;

// config
import i18n from "@/plugins/i18n/config";

// plugins
Vue.use(VueI18n);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
