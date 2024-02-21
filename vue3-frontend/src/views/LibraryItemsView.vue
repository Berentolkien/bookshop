<template>
    <div>
      <NavBar />
      <div class="products-container">
        <ul class="products-list">
          <li v-for="product in products" :key="product.id" class="product-item">
            <ProductCard :product="product" />
          </li>
        </ul>
      </div>
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
      const response = await axios.get('http://127.0.0.1:8000/api/products/?category=23'); // Ajusta la consulta para filtrar por la categoría 'Library Items'
      response.data.forEach(product => {
        product.quantity = ref(1);
      });
      products.value = response.data;
    }catch (error) {
      console.error('Error fetching library items:', error);
    }
  });
  
  </script>
    
  <style scoped lang="scss">
  .products-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 25fr));
    gap: 20px;
    padding: 50px;
  }
  
  .product-item {
    display: flex;
    justify-content: center;
  }
  </style>