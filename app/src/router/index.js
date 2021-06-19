import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/guia/diabetes',
    name: 'Diabetes',
    component: () => import('../pages/Guia.vue'),
    meta: {
      breadcrumbs: [
        {
          text: 'Home',
          route: '/',
        },
        {
          text: 'Guia de Diabetes Mellitus',
        },
      ],
    },
    props: true,
  },
  {
    path: '/guia/hipertensao',
    name: 'Hipertensao',
    component: () => import('../pages/Guia.vue'),
    meta: {
      breadcrumbs: [
        {
          text: 'Home',
          route: '/',
        },
        {
          text: 'Guia de Hipertensão Arterial',
        },
      ],
    },
    props: true,
  },
];

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});
