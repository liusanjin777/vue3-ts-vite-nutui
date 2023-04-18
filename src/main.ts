import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import nutui from './plugins/nutui'
import "amfe-flexible/index.js";
import "./assets/style/index.scss";
import "./premisson"
const app = createApp(App);

app.use(createPinia());
app.use(router).use(nutui);

app.mount("#app");
