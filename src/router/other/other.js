const Other = () =>
  import(/* webpackChunkName: 'other' */ '@/components/other/other')
const other = [
  {
    path: 'other/other',
    component: Other,
    name: 'other',
    meta: {
      title: '资金流水'
    }
  }
]
export default other
