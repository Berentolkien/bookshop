<template>
    <div>
      <NavBar />
      <div class="books-container">
        <ul class="books-list">
          <li v-for="book in books" :key="book.id" class="book-item">
            <img :src="book.image" alt="Book Image">
            <h3>{{ book.name }}</h3>
            <p>{{ book.description }}</p>
            <p>Price: {{ book.price }}</p>
            <div class="quantity-controls">
              <button class="btn" @click="decrementQuantity(book)">-</button>
              <span>{{ book.quantity }}</span>
              <button class="btn" @click="incrementQuantity(book)">+</button>
            </div>
            <button class="btn" @click="addToCart(book)">Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import NavBar from '@/components/NavBar.vue';
  import { ref, onMounted } from 'vue';
  
  const books = ref([]);
  
  onMounted(async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products/?category=22'); // Ajustamos la consulta para filtrar por la categoría 'Books'
      const data = await response.json();
      data.forEach(book => {
      book.quantity = ref(1);
    });
      books.value = data;
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  });

  // Función para incrementar la cantidad del producto
const incrementQuantity = (book) => {
  book.quantity++;
};

// Función para decrementar la cantidad del producto
const decrementQuantity = (book) => {
  if (book.quantity > 1) {
    book.quantity--;
  }
};

// Función para agregar el producto al carrito
const addToCart = (book) => {
  console.log('Added to cart' + book);
};
</script>
  
  
  
<style scoped lang="scss">
.books-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.books-list {
  list-style: none;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 80%;
}

.book-item {
  width: calc(33.33% - 20px);
  min-height: 300px; /* Altura mínima para las tarjetas */
  text-align: center;
  padding: 10px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
}

.book-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.book-item .card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ocupa todo el espacio dentro de la tarjeta */
}

.book-item h3 {
  margin-top: 10px;
}

.book-item p {
  margin-top: 5px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-controls button {
  margin: 0 2px;
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease, box-shadow 0.3s ease;
  font-size: 14px;
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

.btn:hover {
  background-color: #f03406;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
  