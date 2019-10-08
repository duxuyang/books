export default{
  path: '/class',
  name: 'class',
  component: () => import(/* webpackChunkName: "class" */'@/components/class')
}