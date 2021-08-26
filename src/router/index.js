import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Login from "@/views/Login";
import Signup from "@/views/Signup";
import UserHome from "@/views/UserHome";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      visibility: "ONLY_NO_LOGIN"
    }
  },
  {
    path: '/user',
    name: 'UserHome',
    component: UserHome,
    meta: {
      visibility: "ONLY_LOGIN"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      visibility: "ONLY_NO_LOGIN"
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      visibility: "ONLY_NO_LOGIN"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      visibility: "ANY"
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.visibility === "ONLY_NO_LOGIN") && store.state.auth.isLoggedIn) {
    next({name: "UserHome"})
  } else if (to.matched.some(record => record.meta.visibility === "ONLY_LOGIN") && !store.state.auth.isLoggedIn) {
    next({name: "Login"})
  } else {
    next()
  }
})

export default router
