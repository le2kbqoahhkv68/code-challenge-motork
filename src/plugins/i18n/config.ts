import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "./messages";
import numberFormats from "./numberFormats";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en",
  fallbackLocale: "es", // for currency purposes
  messages,
  numberFormats,
});
