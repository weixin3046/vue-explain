<template>
  <div class="navbar">
  	<ul class="f-l ">
      <li v-for="item in navbarValue"><router-link :to="{name:item.url}">{{item.name}}</router-link></li>
    </ul> 
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  props: {
    navbarValue: Array,
    required: true //字段是否必须
  },
  methods: {
    fun (key, keyPath) {
    }
  }
}
</script>
<style scoped>
.navbar ul li {
	float: left;
	list-style: none;
}

.navbar ul li a {
	font-size: 18px;
	display: block;
	text-decoration: none;
	padding: 20px 20px;
	color: #000;
}

.navbar ul li a:hover {
	color: rgb(238, 173, 49);
}
</style>
