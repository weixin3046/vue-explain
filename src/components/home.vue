<template>
  <div class="home">
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from './navbar.vue'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components:{navbar},
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
</style>
