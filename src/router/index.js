import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
// import viewName from "../views/ViewName.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  //{
  //  path: '/viewName',
  //  name: 'ViewName',
  //  component: () =>
  //    import(/* webpackChunkName: "viewName" */ '../views/ViewName.vue')
  //}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
