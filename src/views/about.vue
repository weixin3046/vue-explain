<template>
	<div>
		<router-link class="logo" to="/">ChasingDream</router-link>
    <input type="text" v-model="message" @input="passdata(message)">
	</div>
</template>
<script>
import bus from '../main'
export default {
  name: 'about',
  data () {
    return {
      forget: false,
      login: true,
      message: 123
    }
  },
  methods: {
    passdata(val) {
      bus.$emit('globalEvent', val);
    }
  },
  computed: {

  }
}
</script>
<style scoped>

</style>
