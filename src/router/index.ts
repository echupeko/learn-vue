import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
