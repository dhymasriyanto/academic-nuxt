<template>
  <div class="container-xl">
    <div class="row row-deck row-cards">
      <CardInfo />
    </div>
  </div>
</template>

<script>
import CardInfo from './CardInfo.vue'

export default {
  name: 'PageBody',
  components: {
    CardInfo
  }
}
</script>

<style>

</style>
