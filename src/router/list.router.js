export default{
  path: '/list',
  name: 'list',
  component: () => import(/* webpackChunkName: "list" */'@/components/list')
}