<template>
    <div>
      <NavBar />
      <v-container>
        <v-row>
          <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  import NavBar from '../components/NavBar.vue';
  import ProductCard from '../components/ProductCard.vue';
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  
  const products = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/products/?category=23');
      response.data.forEach(product => {
        product.quantity = ref(1);
      });
      products.value = response.data;
    } catch (error) {
      console.error('Error fetching library items:', error);
    }
  });
</script>
  
  