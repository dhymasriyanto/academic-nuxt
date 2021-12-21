<template>
  <div class="container">
    <AppHeader />
    <Sidebar />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    AppHeader,
    Sidebar
  }
}
</script>

<style>
</style>
