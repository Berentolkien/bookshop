<template>
  <NavBar />
  <div class="cart-container">
    <h2>Shopping Cart</h2>
    <div v-if="cartItems.length === 0">Your cart is empty</div>
    <div v-else>
      <CartItem v-for="item in cartItems" :key="item.id" :product="item" />
      <div class="cart-total">
        <p>Total: ${{ total }}</p>
      </div>
    </div>
    <!-- Botón para abrir el modal de pago -->
    <button @click="openPaymentModal">Pagar</button>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import CartItem from '@/components/CartItem.vue';
import Swal from 'sweetalert2';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const { cartItems } = store.state;
const subtotal = computed(() => {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
});
const total = computed(() => {
  return subtotal.value;
});

// Función para abrir el modal de pago
const openPaymentModal = () => {
  const totalToPay = computed(() => {
    // Calcular el total a pagar sumando el precio de todos los productos en el carrito
    return store.getters.subtotal;
  });

  Swal.fire({
    title: 'Ingrese los datos de pago',
    html: `
      <p>Total a pagar: $${totalToPay.value}</p>
      <input id="cardNumber" type="text" placeholder="Número de tarjeta">
      <input id="cardName" type="text" placeholder="Nombre/Apellido en la tarjeta">
    `,
    showCancelButton: true,
    confirmButtonText: 'Pagar',
    cancelButtonText: 'Cancelar',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const cardNumber = document.getElementById('cardNumber').value;
      const cardName = document.getElementById('cardName').value;

      // Validar los datos de la tarjeta y procesar el pago
      if (!cardNumber || !cardName) {
        Swal.showValidationMessage('Por favor, complete todos los campos');
      } else {
        // Simular procesamiento del pago (puedes agregar la lógica real aquí)
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      }
    },
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      router.push({ name: 'PaymentView' });
      Swal.fire({
        title: 'Pago exitoso',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
};
</script>



<style scoped>
.cart-container {
  margin: 20px;
}

.cart-total {
  margin-top: 20px;
  font-weight: bold;
}
</style>
