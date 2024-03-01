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
  
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartOutline } from '@mdi/js';


export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiCartOutline,
    }
  },
  computed: {
    cartIndicator() {
      return this.$store.state.cartItems.length;
    },
  },
  methods: {
    redirectToAdminPanel() {
      window.location.href = '/admin-access/';
    }
  }
}
</script>
  
<style>
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

