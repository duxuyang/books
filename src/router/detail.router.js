export default{
  path: '/detail/:id',
  name: 'detail',
  component: () => import(/* webpackChunkName: "detail" */'@/components/detail')
}