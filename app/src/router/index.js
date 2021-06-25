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
  },
  {
    path: '/guia/diabetes/:id',
    name: 'Diretorio',
    component: () => import('../pages/Diretorio.vue'),
    meta: {
      breadcrumbs: [
        {
          text: 'Home',
          route: '/',
        },
        {
          text: 'Guia de Diabetes Mellitus',
          route: '/guia/diabetes',
        },
        {
          text: 'Publicações',
        },
      ],
    },
  },
  {
    path: '/guia/hipertensao/:id',
    name: 'Diretorio',
    component: () => import('../pages/Diretorio.vue'),
    meta: {
      breadcrumbs: [
        {
          text: 'Home',
          route: '/',
        },
        {
          text: 'Guia de Hipertensão Arterial',
          route: '/guia/hipertensao',
        },
        {
          text: 'Publicações',
        },
      ],
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/nova-publicacao',
    name: 'NewDirectory',
    component: () => import('../pages/NewDirectory.vue'),
    meta: {
      breadcrumbs: [
        {
          text: 'Home',
          route: '/',
        },
        {
          text: 'Nova Publicação',
        },
      ],
    },
  },

  {
    path: '/editar-publicacao/:guia/:id',
    name: 'EditDirectory',
    component: () => import('../pages/EditDirectory.vue'),
    meta: {
      breadcrumbs: [
        {
          text: 'Home',
          route: '/',
        },
        {
          text: 'Editar Publicação',
        },
      ],
    },
  },
];

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});
