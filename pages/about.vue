<template>
  <div />
</template>

<script>
export default {
  data () {
    return {
      title: 'About page'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About page'
        }
      ]
    }
  }
}
</script>

<style>

</style>
