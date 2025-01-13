import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Domov',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/o-linuxe',
      name: 'O Linuxe',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/distribucie',
      name: 'Distribúcie',
      component: () => import('@/views/DistributionsView.vue'),
    },
    {
      path: '/distribucia/:slug',
      name: 'Distribúcia',
      component: () => import('@/views/DistributionView.vue'),
      props: true
    },
    {
      path: '/prispiet',
      name: 'Prispieť',
      component: () => import('@/views/DonateView.vue'),
    },
    {
      path: '/komunita',
      name: 'Komunita',
      component: () => import('@/views/CommunityView.vue'),
    },
    {
      path: '/dakujeme',
      name: 'Ďakujeme',
      component: () => import('@/views/ThankView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Nenašlo sa',
      component: () => import('@/views/NotFoundView.vue'),
    }
  ],
})

export default router
