import { createRouter, createWebHistory } from 'vue-router';

import HomeEn from '../components/en/AdultsLanding.vue';
import HomeAr from '../components/ar/AdultsLanding.vue';
import CartEn from '../components/en/CartPage.vue';
import CartAr from '../components/ar/CartPage.vue';

const englishRoutes = [
  { 
    path: '/en/', 
    name: 'HomeEn', 
    component: HomeEn, 
    meta: { 
      title: 'Monglish Academy Adults Landing', 
      canonical: '/en/', 
      description: 'Welcome to the Monglish Academy Adults Landing page in English.' 
    }
  },
  { 
    path: '/en/cart/', 
    name: 'CartEn', 
    component: CartEn, 
    meta: { 
      title: 'Cart Page - Monglish Academy', 
      canonical: '/en/cart/', 
      description: 'View and manage your cart in English.' 
    }
  }
];

const arabicRoutes = [
  { 
    path: '/', 
    name: 'HomeAr', 
    component: HomeAr, 
    meta: { 
      title: 'أكاديمية مونجليش للكبار', 
      canonical: '/', 
      description: 'مرحباً بكم في الصفحة الرئيسية بالعربية.' 
    }
  },
  { 
    path: '/ar/cart/', 
    name: 'CartAr', 
    component: CartAr, 
    meta: { 
      title: 'صفحة السلة - أكاديمية مونجلش', 
      canonical: '/ar/cart/', 
      description: 'عرض وإدارة السلة بالعربية.' 
    }
  }
];

const routes = [
  ...englishRoutes,
  ...arabicRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Set title, description, and canonical tag on route change
router.beforeEach((to, from, next) => {
  // Set the title
  document.title = to.meta.title || 'Default Title'; // Use a default title if none is set

  // Set the description
  let descriptionMetaTag = document.querySelector("meta[name='description']");
  if (!descriptionMetaTag) {
    descriptionMetaTag = document.createElement('meta');
    descriptionMetaTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionMetaTag);
  }
  descriptionMetaTag.setAttribute('content', to.meta.description || 'Default description for the page.');

  // Set the canonical URL
  const link = document.querySelector("link[rel='canonical']") || document.createElement('link');
  link.setAttribute('rel', 'canonical');
  link.setAttribute('href', to.meta.canonical);
  document.head.appendChild(link);

  next();
});

export default router;
