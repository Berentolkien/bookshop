<template>
    <div class="product-card">
      <img :src="product.image" alt="Product Image">
      <div class="product-details">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
      </div>
      <div class="quantity-controls">
        <button class="btn" @click="decrementQuantity">-</button>
        <span>{{ product.quantity }}</span>
        <button class="btn" @click="incrementQuantity">+</button>
      </div>
      <button class="btn" @click="addToCart(product.id, product.quantity)">Add to Cart</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const props = defineProps({
    product: Object
  });
  
  const product = ref(props.product);
  
  const incrementQuantity = () => {
    product.value.quantity++;
  };
  
  const decrementQuantity = () => {
    if (product.value.quantity > 1) {
      product.value.quantity--;
    }
  };
  
  const addToCart = (productId, quantity) => {
    console.log('Adding to cart:', productId, quantity); // Verifica si se está llamando correctamente
    store.dispatch('addToCart', { id: productId, quantity });
  };
  </script>
  
  <style scoped>
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 10px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
    gap: 20px;
  }
  
  .product-details {
    text-align: center;
    margin-bottom: auto; /* Alinea los detalles del producto arriba */
  }
  
  .quantity-controls {
    display: flex;
    align-items: center;
    margin-top: auto; /* Alinea los controles de cantidad abajo */
  }
  
  .quantity-controls button {
    margin: 0 2px;
  }
  
  .btn {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease, box-shadow 0.3s ease;
    background-image: linear-gradient(#ff7437, #f03406);
  }
  
  .quantity-controls span {
    font-weight: bold;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }
  
  
  .btn:hover {
    background-color: #f03406;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  </style>
  