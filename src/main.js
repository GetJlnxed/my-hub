import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.styl";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "@/components/global";
library.add(faFolder, faUpload, faFileUpload);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// breakpoints

/* window.addEventListener("resize", function () {
  Vue.prototype.$breakpoint = 400;
  Vue.prototype.$breakpoint = setWidth(this.innerWidth);
});

function setWidth(width) {
  if (width > 1600) return "xlg";
  else if (width < 1600 && width > 1366) return "lg";
  else if (width < 1366 && width > 1280) return "lg";
  else if (width < 1280 && width > 1024) return "md";
  else if (width < 1024 && width > 768) return "tab";
} */

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
