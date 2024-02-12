<template>
  <NavBar />
  <div class="home">
    <h1 class="logo-title">PHOENIX BOOKSTORE</h1>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<style scoped lang="scss"> 
@import '../assets/variables/variables.scss';

.home {
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff; 
  background: $background-gradiant;
}
</style>
