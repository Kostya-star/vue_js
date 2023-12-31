import Main from '@/pages/Main.vue';
import About from '@/pages/About.vue';
import PostPage from '@/pages/PostPage.vue';
import PostDetailsPage from '@/pages/PostDetailsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/posts/:id',
    component: PostDetailsPage,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
