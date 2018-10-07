import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import detail from '@/components/detail'
import list from '@/components/list'
import reader from '@/components/reader'
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
      component: detail
    },
    {
      path: '/list/:type',
      component:list
    },
     {
      path: '/reader/:id',
      component:reader
    }   
  ]
})
