export default{
  path: '/reader/:id',
  name: 'reader',
  component: () => import(/* webpackChunkName: "reader" */'@/components/reader')
}