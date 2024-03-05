<template>
  <div>
    <NavBar />
    <div class="products-container">
      <ul class="products-list">
        <li v-for="product in displayedProducts" :key="product.id" class="product-item">
          <ProductCard :product="product" />
        </li>
      </ul>
    </div>
    <v-pagination v-model="currentPage" :length="totalPages" @input="fetchProducts" />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import ProductCard from '@/components/ProductCard.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

const products = ref([]);
const currentPage = ref(1);
const itemsPerPage = 8;
onMounted(fetchProducts);

async function fetchProducts() {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/products/?page=${currentPage.value}&limit=${itemsPerPage}`);
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});
</script>

<style scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}

.product-item {
  display: flex;
  justify-content: center;
}

.products-container {
  margin-top: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

