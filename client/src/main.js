import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import routes from "./router";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: "active"
});

import "./registerServiceWorker";
import "@/assets/css/bootstrap.min.css";
import "@/assets/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
