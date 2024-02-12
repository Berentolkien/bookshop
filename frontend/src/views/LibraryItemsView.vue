<template>
  <div>
    <NavBar />
    <div class="library-items-container">
      <ul class="library-items-list">
        <li v-for="item in libraryItems" :key="item.id" class="library-item">
          <img :src="item.image" alt="Item Image">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p>Price: {{ item.price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref, onMounted } from 'vue';

const libraryItems = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/products/?category=23'); // Ajusta la consulta para filtrar por la categoría 'Library Items'
    const data = await response.json();
    libraryItems.value = data;
  } catch (error) {
    console.error('Error fetching library items:', error);
  }
});

</script>

  
  
  <style scoped lang="scss">
  .library-items-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .library-items-list {
    list-style: none;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 90%;
  }
  
  .library-item {
    width: calc(33.33% - 20px);
    text-align: center;
    padding: 10px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
  }
  
  .library-item img {
    width: 50%;
    height: auto;
    border-radius: 10px;
  }
  
  .library-item h3 {
    margin-top: 10px;
  }
  
  .library-item p {
    margin-top: 5px;
  }
  </style>