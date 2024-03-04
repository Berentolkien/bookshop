<template>
  <v-app-bar flat class="navbar">
    <template v-slot:prepend>
      <router-link aria-current="page" to="/" class="nav-link">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </router-link>
    </template>  
    <router-link aria-current="page" to="/" class="nav-link">
      <v-app-bar-title>Phoenix BookShop</v-app-bar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="searchQuery"
      @keyup.enter="performSearch"
      density="compact"
      variant="solo"
      label="Search products"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      flat
    ></v-text-field>
    <v-spacer></v-spacer>  
    <router-link aria-current="page" to="/categories" class="nav-link">
      <v-btn class="nav-button">Categories</v-btn>
    </router-link> 
    <router-link aria-current="page" to="/products" class="nav-link">
      <v-btn class="nav-button">Products</v-btn>
    </router-link>
    <router-link to="/cart" class="cart-link">
      <svg-icon type="mdi" :path="path" class="carticon"></svg-icon>
      <span class="cart-indicator">{{ cartIndicator }}</span>
    </router-link>
    <a href="http://127.0.0.1:8000/admin/login/?next=/admin/" target="_blank" class="nav-link admin-link">
        Admin Access
    </a>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios from 'axios';

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartOutline } from '@mdi/js';

const router = useRouter();
const store = useStore();

const path = mdiCartOutline;

let searchQuery = '';

const cartIndicator = computed(() => store.state.cartItems.length);

const performSearch = async () => {
  try {
    if (!searchQuery.trim()) {
      // No realizar la búsqueda si la consulta está vacía
      return;
    }

    const response = await axios.get(`http://127.0.0.1:8000/api/products/search/?q=${searchQuery}`);
    console.log('API Response:', response.data);
    const searchResults = response.data;
    
    // Actualizar los resultados de búsqueda en Vuex
    store.dispatch('updateSearchResults', searchResults);

    // Navegar a la vista de resultados de búsqueda
    router.push({ name: 'search-results' });
  } catch (error) {
    console.log('Error performing search:', error);
  }
}
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: #333;
}

.nav-button,
.cart-link {
  margin-right: 10px;
}

.carticon {
  color: #333;
  margin-right: 10px;
}

.cart-indicator {
  background-color: #333;
  color: white;
  border-radius: 30%;
  padding: 8px 8px;
  font-size: 12px;
  position: absolute;
  top: 5px;
  right: 120px;
}

.admin-link {
  margin-right: 10px;
  margin-left: 10px;
}
</style>

