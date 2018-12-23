import Vue from 'vue'
import Router from 'vue-router'
/*import main from '@/components/main'
import detail from '@/components/detail'
import list from '@/components/list'
import reader from '@/components/reader'
import login from '@/components/login'
import bookcase from '@/components/bookcase'
import myinfo from '@/components/myinfo'
import mylist from '@/components/mylist'
import search from '@/components/search'*/


const main = r => require.ensure([], () => r(require('../components/main.vue')))
const detail = r => require.ensure([], () => r(require('../components/detail.vue')))
const list = r => require.ensure([], () => r(require('../components/list.vue')))
const reader = r => require.ensure([], () => r(require('../components/reader.vue')))
const login = r => require.ensure([], () => r(require('../components/login.vue')))
const bookcase = r => require.ensure([], () => r(require('../components/bookcase.vue')))
const myinfo = r => require.ensure([], () => r(require('../components/myinfo.vue')))
const mylist = r => require.ensure([], () => r(require('../components/mylist.vue')))
const search = r => require.ensure([], () => r(require('../components/search.vue')))



Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'main',
    component: main
  }, {
    path: '/main',
    name: 'main',
    component: main
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  }, {
    path: '/list/:type',
    name: 'list',
    component: list,
    /*      meta: {
            keepAlive: true 
          }*/
  }, {
    path: '/reader/:id',
    name: 'reader',
    component: reader
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/bookcase',
    name: 'bookcase',
    component: bookcase
  }, {
    path: '/myinfo',
    name: 'myinfo',
    component: myinfo
  }, {
    path: '/mylist',
    component: mylist
  }, {
    path: '/search',
    component: search
  }]
})