<template>
	<div class="course">
		<div>
			这是资源类容
		</div>
		<button @click="test">子传夫</button>
	</div>
</template>
<script>
export default {
  name: 'courseList',
  data () {
    return {
    	childValue: '我是子组件的数据'
    }
  },
  methods: {
    test() {
      this.$emit('childByValue', this.childValue);
    }
  }
}
</script>
<style scoped>
.course {
	background: #f5f5f5;
	width: 100%;
	height: 600px;
}
</style>