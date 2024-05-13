import "virtual:svg-icons-register";
import { createApp } from "vue/dist/vue.esm-bundler";
import { createPinia } from "pinia";
import App from "./App.vue";
import SvgIcon from "./components/SvgIcon.vue";
import BodyScrollLock from "./plugins/BodyScrollLock";

import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import "./assets/styles/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(VueSplide);
app.component("SvgIcon", SvgIcon);
app.use(BodyScrollLock);
app.mount("#app");
