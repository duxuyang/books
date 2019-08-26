import './assets/css/reset.css'
import './assets/icon/iconfont.css'
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http.js';
Vue.use(MintUI)
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')