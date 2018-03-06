const userManger = () =>
  import(/* webpackChunkName: 'account' */ '@/components/account/account')
const account = [
  {
    path: 'account/account',
    component: userManger,
    name: 'account',
    meta: {
      title: '首页'
    }
  }
]
export default account
