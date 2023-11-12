import { createApp } from "vue";
import "./assets/scss/style.scss";
import { router } from "./router.js";
import * as bootstrap from "bootstrap";
import App from "./App.vue";

const newApp = createApp(App);
newApp.use(router);
newApp.mount("#app");
