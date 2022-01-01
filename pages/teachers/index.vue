<template>
  <p>Teachers</p>
</template>

<script>
import axios from 'axios'

export default {
  components: {
  },
  data () {
    return {
      title: 'Teacher page'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Teacher page'
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
      const res = await axios.get('http://localhost:9001/teachers/', config)
      console.log(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }

}
</script>

<style>

</style>
