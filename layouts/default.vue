<template>
  <div class="wrapper">
    <SideBar />
    <AppHeader />
    <div class="page-wrapper">
      <PageHeader />
      <div class="page-body">
        <PageBody />
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import SideBar from '../components/SideBar.vue'
import PageHeader from '../components/PageHeader.vue'
import PageBody from '../components/PageBody.vue'

export default {
  components: {
    AppHeader,
    SideBar,
    PageHeader,
    PageBody
  }
}
</script>

<style>
</style>
