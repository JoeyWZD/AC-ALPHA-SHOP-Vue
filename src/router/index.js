import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../views/Checkout.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'checkout',
    component: Checkout
  },


  {
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
