<script setup>
import HeaderComponent from '../../components/admin/HeaderComponent.vue'
import SidebarComponent from '../../components/admin/SidebarComponent.vue'
// import LoadingAdminComponent from '../../components/admin/LoadingAdminComponent.vue'
// import HomeView from './HomeView.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-200">
    <SidebarComponent />
    <div class="flex-1 flex flex-col overflow-hidden">
      <HeaderComponent />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <router-view />
          <!-- <LoadingAdminComponent /> -->
        </div>
      </main>
    </div>
  </div>
</template>
