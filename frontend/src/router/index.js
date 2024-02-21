import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import BooksView from '../views/BooksView.vue'
import LibraryItemsView from '../views/LibraryItemsView.vue'
import CartView from '../views/CartView.vue'
import PaymentView from '../views/PaymentView.vue'

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
    component: ProductsView
  },
  {
    path:'/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/categories/books',
    name: 'Books',
    component: BooksView
  },
  {
    path: '/categories/Library-Items',
    name: 'LibraryItems',
    component: LibraryItemsView
  },
  {
    path: '/payment',
    name: 'PaymentView',
    component: PaymentView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

