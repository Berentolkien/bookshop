import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import BooksView from '../views/BooksView.vue'
import LibraryItemsView from '../views/LibraryItemsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/categories/books',
    name: 'Books',
    component: BooksView
  },
  {
    path: '/categories/Library Items',
    name: 'LibraryItems',
    component: LibraryItemsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

