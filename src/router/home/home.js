import account from '../account/account'
import order from '../order/order'
import money from '../money/money'
import other from '../other/other'
const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}
const defaultHome = [{
  path: '/home',
  redirect: {
    name: 'account'
  }
}]
const home = [{
  path: '/',
  component: Home,
  name: 'home',
  children: [...defaultHome, ...account, ...order, ...money, ...other]
}]
export default home
