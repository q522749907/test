import Vue from 'vue'
import VueRouter from 'vue-router'
const  Cart = () => import("../views/cart/Cart")
const  Home = () => import("../views/home/Home")
const  Category = () => import("../views/category/Category")
const  Detail = () => import("../views/detail/Detail")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
