import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/bq/Cart.vue'
import Order from '@/components/bq/Order.vue'
import Index from '@/components/bq/index.vue'
import Details from '@/components/bq/details.vue'
import Home from '@/components/home.vue'
import Public from '@/components/bq/public.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Public',
      component: Public
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Cart',
      component: Cart
    },
    {
      path: '/Order',
      component: Order
    },
    {
      path: '/Details',
      component: Details
    },
  ]
})
