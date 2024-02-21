import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    cartItems: [], // Aquí se almacenarán los productos del carrito
  },
  mutations: {
    // Mutación para agregar un producto al carrito
    addToCart(state, product) {
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.cartItems.push(product);
      }
    },

    addToPurchaseHistory(state, purchase) {
      state.purchaseHistory.push(purchase);
    },
    removeFromCart(state, productId) {
      const productIndex = state.cartItems.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        state.cartItems.splice(productIndex, 1);
      }
    }, 
    
    // Mutación para actualizar la cantidad de un producto en el carrito
    updateQuantity(state, { productId, quantity }) {
      const product = state.cartItems.find(item => item.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    }
  },
  actions: {
    // Acción para cargar los productos desde la API
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    // Otras acciones para agregar, eliminar y actualizar productos en el carrito
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    updateQuantity({ commit }, { productId, quantity }) {
      commit('updateQuantity', { productId, quantity });
    },
  },
  getters: {
    // Getter para obtener los productos del carrito
    cartItems(state) {
      return state.cartItems;
    },
    // Getter para obtener el subtotal del carrito
    subtotal(state) {
      return state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
});