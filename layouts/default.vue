<template>
  <body class="theme-light">
    <div class="wrapper">
      <AppSidebar />
      <AppHeader />
      <div class="page-wrapper">
        <PageHeader />
        <div class="page-body">
          <PageBody />
        </div>
        <PageFooter />
      </div>
      <!--<Nuxt />-->
    </div>
  </body>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppSidebar from '../components/AppSidebar.vue'
import PageHeader from '../components/PageHeader.vue'
import PageBody from '../components/PageBody.vue'
import PageFooter from '../components/PageFooter.vue'

export default {
  components: {
    AppHeader,
    AppSidebar,
    PageHeader,
    PageBody,
    PageFooter
  }
}
</script>

<style>
</style>
