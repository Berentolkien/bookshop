<template>
  <div class="search-results">
    <v-container>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <ProductCard :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
<script>
import ProductCard from '@/components/ProductCard.vue';
  
export default {
  name: 'SearchItemView',
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
  
  <style scoped>
  .search-results {
    margin-top: 20px;
  }
  </style>
  