
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store';

Vue.use(MintUI)
Vue.config.productionTip = false
import './assets/css/reset.css'

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.fullPath=="/userinfo" || to.fullPath=="/bookcase") {
			if(!store.state.isLogin){
				router.push('/login')
			}
    } else {
      next()
    }
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
