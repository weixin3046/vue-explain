<template>
	<div>
		我是guestbook
		<p>brother1传递过来的数据：{{brothermessage}}</p>
	</div>
	
</template>
<script>
import bus from '../main'
export default {
	data() {
		return {
				mymessage:'hello brother2',

                brothermessage:''

		}
	},
	mounted() {
		bus.$on('globalEvent', content => { 
          console.log(content)
          this.brothermessage=content;
        });  
	}
}
	
</script>
<style scoped>
	
</style>
