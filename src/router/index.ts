import { createRouter, createWebHashHistory, Router } from "vue-router";
import HomePage from '@/views/HomePage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage'),
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
