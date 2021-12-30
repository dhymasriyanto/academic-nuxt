<template>
  <div />
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: 'Student page'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Student page'
        }
      ]
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }

    try {
      const res = await axios.get('http://localhost:9001/students/', config)
      console.log(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
}

</script>

<style>
</style>
