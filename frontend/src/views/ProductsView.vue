<template>
  <div>
    <NavBar />
    <div class="products-container">
      <ul class="products-list">
        <li v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image" alt="Product Image">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>Price: {{ product.price }}</p>
          <div class="quantity-controls">
            <button class="btn" @click="decrementQuantity(product)">-</button>
            <span>{{ product.quantity }}</span>
            <button class="btn" @click="incrementQuantity(product)">+</button>
          </div>
          <button class="btn" @click="addToCart(product)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/products/');
    const data = await response.json();
    data.forEach(product => {
      product.quantity = ref(1);
    });
    products.value = data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});

// Función para incrementar la cantidad del producto
const incrementQuantity = (product) => {
  product.quantity++;
};

// Función para decrementar la cantidad del producto
const decrementQuantity = (product) => {
  if (product.quantity > 0) {
    product.quantity--;
  }
};

// Función para agregar el producto al carrito
const addToCart = (product) => {
  console.log('Added to cart' + product);
};

</script>

<style scoped lang="scss">
.products-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.products-list {
  list-style: none;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-item {
  width: calc(33.33% - 20px);
  text-align: center;
  padding: 10px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
}

.product-item img {
  width: 80%;
  height: auto;
  border-radius: 10px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;

}

.quantity-controls button {
  margin: 0 5px;
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
  border-radius: 10px;
  padding: 5px 20px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease, box-shadow 0.3s ease;
  
}

.quantity-controls span {
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
  margin-left: 10px;
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

.btn:hover{
  background-color: #f03406;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>