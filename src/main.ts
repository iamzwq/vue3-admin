import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/index.css";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";

import App from "./App.vue";
import { router } from "./router";

createApp(App).use(createPinia().use(piniaPluginPersistedstate)).use(router).mount("#app");
