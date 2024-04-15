import { createApp } from "vue";
import App from "./App.vue";
//import "./assets/main.css";
import axios from "axios";
import "mdb-vue-ui-kit/css/mdb.min.css";
const app = createApp(App);
app.config.globalProperties.$http = axios;

app.mount("#app");
