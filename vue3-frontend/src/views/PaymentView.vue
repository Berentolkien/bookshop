<template>
  <NavBar />
    <div class="confirmation-page">
      <h2>¡Pago exitoso!</h2>
      <p>Gracias por tu compra. Aquí están los detalles:</p>
      <!-- Mostrar detalles de la compra -->
      <div v-for="item in cartItems" :key="item.id">
        <p>{{ item.name }} - ${{ item.price }}</p>
      </div>
      <p>Total: ${{ total }}</p>
      <!-- Opciones de navegación -->
      <button @click="backToMenu">Volver al menú principal</button>
      <button @click="backToCart">Regresar al carrito</button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import NavBar from '../components/NavBar.vue';
  
  const store = useStore();
  const router = useRouter();
  
  const cartItems = store.getters.cartItems;
  const total = store.getters.subtotal;
  
  const backToMenu = () => {
    router.push({ name: 'home' }); // Reemplaza 'MainMenu' con el nombre de tu ruta para el menú principal
  };
  
  const backToCart = () => {
    router.push({ name: 'cart' }); // Reemplaza 'CartView' con el nombre de tu ruta para el carrito
  };
  </script>