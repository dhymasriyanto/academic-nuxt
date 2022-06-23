<template>
  <p>Students</p>
</template>

<script>
import axios from 'axios'

export default {
  components: {
  },
  data () {
    return {
      title: 'Student page',
      students: []
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
      this.students = res.data.data
    } catch (err) {
      console.log(err)
    }
  }
}

</script>

<style>
</style>
