import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import detail from '@/components/detail'
import list from '@/components/list'
import reader from '@/components/reader'
import login from '@/components/login'
import bookcase from '@/components/bookcase'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/detail/:id',
      name:'detail',
      component: detail
    },
    {
      path: '/list/:type',
      name:'list',
      component:list
    },
     {
      path: '/reader/:id',
      name:'reader',
      component:reader
    },
     {
      path: '/login',
      name:'login',
      component:login
    },
     {
      path: '/bookcase',
      name:'bookcase',
      component:bookcase
    }

  ]
})
