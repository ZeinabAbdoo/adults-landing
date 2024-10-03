import { createRouter, createWebHistory } from 'vue-router';

import HomeEn from '../components/en/AdultsLanding.vue';
import HomeAr from '../components/ar/AdultsLanding.vue';
import IletsAr from '../components/ar/IletsCoursesPage.vue';

const englishRoutes = [
  { path: '/en', name: 'HomeEn', component: HomeEn },
];

const arabicRoutes = [
  { path: '/', name: 'HomeAr', component: HomeAr },
  { path: '/ar/ilets', name: 'IletsAr', component: IletsAr },
];

const routes = [
  ...englishRoutes,
  ...arabicRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;