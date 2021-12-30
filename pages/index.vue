<template>
  <div />
</template>

<script>
export default {
  data () {
    return {
      title: 'Home page'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page'
        }
      ]
    }
  }
}
</script>
