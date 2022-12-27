import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView';
import BlogView from '@/views/BlogView';
import ArticleView from '@/views/ArticleView';
import TermsView from '@/views/TermsView';
import PrivacyView from '@/views/PrivacyView';
import NotFoundView from '@/views/NotFoundView';
import AboutView from '@/views/AboutView';
import ContactsView from '@/views/ContactsView';
import FavoritesView from '@/views/FavoritesView';
import CatalogView from '@/views/CatalogView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/article/:id',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  },
  routes
})

export default router;
