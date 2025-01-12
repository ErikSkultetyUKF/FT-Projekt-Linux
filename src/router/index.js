import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/distribucie',
      name: 'Distribúcie',
      component: () => import('@/views/DistributionsView.vue'),
    },
    {
      path: '/distribucia/:slug',
      name: 'distribution',
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
      path: '/olinuxe',
      name: 'O Linuxe',
      component: () => import('@/views/AboutView.vue'),
    },
  ],
})

export default router
