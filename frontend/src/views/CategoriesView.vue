<template>
  <div>
    <NavBar />
    <div class="categories-container">
      <ul class="categories-list">
        <router-link
          v-for="category in categories"
          :key="category.id"
          :to="getCategoryRoute(category)"
          class="category-link"
        >
          <li class="category-item">
            <div class="category-content">
              <span class="category-name">{{ category.name }}</span>
              <img class="category-image" :src="'http://127.0.0.1:8000' + category.image_url">
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref, onMounted } from 'vue';

const categories = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/categories/');
    const data = await response.json();
    categories.value = data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
});

const getCategoryRoute = (category) => {
  if (category.name === 'Library Items') {
    return '/categories/library-items';
  } else {
    return `/categories/${category.name}`;
  }
};
</script>




<style scoped lang="scss">
.categories-container {
  display: flex;
  justify-content: center;
}

.categories-list {
  list-style: none;
  padding: 10px;
  display: flex;
  flex-wrap: wrap; /* Permitir que los elementos se envuelvan en múltiples líneas */
  gap: 20px;
  justify-content: center; /* Centrar los elementos horizontalmente */
}

.category-link {
  text-decoration: none; 
  flex: 1 0 calc(33.33% - 20px); /* Establecer el ancho para mostrar tres elementos por fila */
  max-width: calc(33.33% - 20px); /* Evitar que los elementos se estiren más allá del ancho de tres elementos por fila */
}

.category-item {
  color: black;
  transition: color 0.3s ease;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease, box-shadow 0.3s ease;
  background: linear-gradient(#ff7437, #ffe7d4);
}

.category-item:hover {
  background-color: #f03406;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.category-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-image {
  width: 100%; 
  height: auto; 
  border-radius: 10px;
}

.category-name {
  text-decoration: none;
  color: #fff;
  padding: 10px;
  font-size: 30px; 
}

@media (max-width: 900px) {
  .category-link {
    flex-basis: calc(50% - 20px); /* Cambiar a dos elementos por fila */
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 600px) {
  .category-link {
    flex-basis: 100%; /* Cambiar a un elemento por fila */
    max-width: 100%;
  }
}
</style>

