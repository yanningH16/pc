const Money = () =>
  import(/* webpackChunkName: 'money' */ '@/components/money/money')
const money = [
  {
    path: 'money/money',
    component: Money,
    name: 'money',
    meta: {
      title: '资金流水'
    }
  }
]
export default money
