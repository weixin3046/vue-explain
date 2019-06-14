<template>
	<div class="course">
		<!-- <div>
			这是资源类容
		</div> -->
		<!-- <button @click="test">子传夫</button> -->
    <!-- <input type="text" v-model="mymessage">
    {{mymessage}} -->
    <child v-bind="$attrs" v-on="$listeners"></child> 
	</div>
</template>
<script>
import child from './child.vue'
export default {
  name: 'courseList',
  data () {
    return {
    	// childValue: '我是子组件的数据',
     //  mymessage:this.message
    }
  },
  components:{child},
  //props:['message'],//得到父组件传递过来的数据
  methods: {
    // test() {
    //   this.$emit('childByValue', this.childValue);
    // },
    // passData(val){
    //             //触发父组件中的事件
    //             this.$emit('getChildData',val)
    //             console.log(val)
    //         }
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