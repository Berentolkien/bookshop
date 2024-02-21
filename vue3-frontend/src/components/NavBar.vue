<template>
    <nav class="navbar">
      <div class="container-navbar">
        <router-link aria-current="page" to="/" class="navbar-logo">
            <h1>Fenix Bookshop</h1>
        </router-link>
        <ul class="navbar-list">
          <li class="navbar-item">
            <router-link aria-current="page" to="/">Home</router-link>
          </li>
          <li class="navbar-item">
            <router-link aria-current="page" to="/categories">Categories</router-link>
          </li>
          <li class="navbar-item">
            <router-link aria-current="page" to="/products">Products</router-link>
          </li>
        </ul>
        <router-link to="/cart" class="cart-link">
            <font-awesome-icon :icon="['fas', 'cart-arrow-down']" class="cart-icon" />
        </router-link>
      </div>
    </nav>
    </template>
    
    <script setup>
    
    </script>
    
    <style scoped lang="scss">
    @import '../assets/variables/variables.scss';
    
    .navbar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background: $background-gradiant-navbar;
      align-items: center;
    
      .container-navbar {
        display: flex;
        flex-direction: row;
        width: 80%;
        justify-content: space-between;
        align-items: center;
        
    
        .navbar-logo {
          text-decoration: none;
    
          h1 {
            margin-left: 50%;
            color: #fff;
          }
        }
    
        .navbar-list {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin-left: 10%;
          width: 100%;
          .navbar-item {
            margin: 0 10px;
    
            a {
              text-decoration: none;
              color: #fff;
              transition: color 0.3s ease;
              border-radius: 10px;
              padding: 10px 20px;
              box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
              transition: color 0.3s ease, box-shadow 0.3s ease;
              background-color: linear-gradient(#ff7437, #f03406);
            }
    
            &:hover {
              a {
                background-color: #f03406;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              }
            }
          }
        }
      }
    }
    
    .cart-icon {
      margin-left: 600%;
      font-size: 30px;
      cursor: pointer;
      color: #fff;
      transition: color 0.3s ease;
      
    
      &:hover {
        color: #f03406;
      }
    }
    
    .cart-link {
      margin-left: auto; // Posiciona en el margen derecho
    }
    </style>