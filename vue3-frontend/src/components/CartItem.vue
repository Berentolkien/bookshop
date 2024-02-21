<template>
    <div class="cart-item">
      <img :src="product.image" alt="Product Image" class="cart-item-image">
      <div class="cart-item-details">
        <h3>{{ product.name }}</h3>
        <p>Price: ${{ product.price }}</p>
        <div class="quantity-controls">
          <button @click="decrementQuantity" :disabled="product.quantity <= 1">-</button>
          <span>{{ product.quantity }}</span>
          <button @click="incrementQuantity">+</button>
        </div>
        <p>Subtotal: ${{ product.price * product.quantity }}</p>
        <button @click="removeFromCart(product.id)">Remove</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import axios from 'axios';
  
  const props = defineProps({
    product: Object
  });
  
  const store = useStore();
  const product = ref(props.product);
  
  const updateQuantity = (quantity) => {
    if (quantity >= 1) {
      store.dispatch('updateQuantity', { productId: product.value.id, quantity });
    }
  };
  
  const decrementQuantity = () => {
    if (product.value.quantity > 1) {
      updateQuantity(product.value.quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    updateQuantity(product.value.quantity + 1);
  };
  
  const removeFromCart = (productId) => {
    store.dispatch('removeFromCart', productId);
  };
  
    onMounted(async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${product.value.id}/`);
        Object.assign(product.value, response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    });
    </script>
    
    <style scoped>
    /* Estilos del cart-item */
    .cart-item {
      display: flex;
      margin-bottom: 20px;
    }
    
    .cart-item-image {
      width: 100px;
      height: 100px;
    }
    
    .cart-item-details {
      margin-left: 20px;
    }
    
    .quantity-controls button {
      margin: 0 5px;
    }
    </style>
  