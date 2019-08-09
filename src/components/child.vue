<template>
	<div>
		<p>我是c组件</p>
		<input type="text" v-model="$attrs.messagec" @input="passCData($attrs.messagec)"> </div>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	methods:{
		passCData(val){
      //触发父组件A中的事件
      this.$emit('getCData',val)
      console.log(this)
	  }
	}
}
</script>
<style scoped>

</style>