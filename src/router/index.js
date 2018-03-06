import Vue from 'vue'
import Router from 'vue-router'
import home from './home/home'
const defaultRouter = [{
  path: '/',
  redirect: 'home'
}]
Vue.use(Router)

let router = new Router({
  routes: [...defaultRouter, ...home],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta.title || to.params.message) {
    document.title = to.meta.title || to.params.message.title
  } else {
    document.title = 'PC项目'
  }
  next()
})
export default router
