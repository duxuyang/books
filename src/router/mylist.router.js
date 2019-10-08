export default{
  path: '/mylist',
  name: 'mylist',
  component: () => import(/* webpackChunkName: "mylist" */'@/components/mylist')
}