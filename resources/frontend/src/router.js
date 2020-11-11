import Vue from "vue";
import Router from "vue-router";
import Dashboard from '@/view/pages/Dashboard';
import Layout from '@/view/layout/Layout';
import Error from '@/view/pages/error/Error-6.vue';
import Login from '@/view/pages/auth/login_pages/Login-1';
import Blank from '@/view/pages/Blank.vue';
Vue.use(Router);

export default new Router({
  mode : 'history',
  base : process.env.VUE_APP_ROUTE_BASE,
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: Layout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "/blank",
          name: "blank",
          component: Blank
        },
      ]
    },
    {
      path: "/",
      component: Login,
      children: [
        {
          name: "login",
          path: "/login",
          component: Login
        },
        {
          name: "register",
          path: "/register",
          component: Login
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: Error
    }
  ]
});
