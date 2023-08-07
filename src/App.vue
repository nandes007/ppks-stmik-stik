<script setup>
import TopBar from './components/TopBar.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <TopBar />
  <NavBar />
  
  <div>
    <router-view></router-view>
  </div>

  <Footer />
</template>


