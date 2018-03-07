const Order = () =>
  import(/* webpackChunkName: 'order' */ '@/components/order/order')
const order = [
  {
    path: 'order/order',
    component: Order,
    name: 'order',
    meta: {
      title: '任务管理'
    }
  }
]
export default order
