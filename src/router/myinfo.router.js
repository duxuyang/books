export default{
  path: '/myinfo',
  name: 'myinfo',
  component: () => import(/* webpackChunkName: "myinfo" */'@/components/myinfo')
}