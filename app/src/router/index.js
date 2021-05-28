import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
];

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});
