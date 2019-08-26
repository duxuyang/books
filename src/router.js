import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const main= () => import('@/components/main')

const routerList=[];
function importAll(msg){
  msg.keys().forEach((key)=>
    routerList.push(msg(key).default)
  )
}
importAll(require.context('./router',true,/\.router\.js/));

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'main',
      component: main
    },
    ...routerList
  ]
})