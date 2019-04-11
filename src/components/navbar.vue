<template>
  <div class="navbar">
  	<div class="container clearfix">
  		<div class="navbar-logo f-l">
				<h1><router-link to="/">ChasingDream</router-link></h1>
			</div>
  		<ul class="f-l ">
	      <li><router-link to="/">首页</router-link></li>
	      <li><router-link to="/">技术杂谈</router-link></li>
	      <li><router-link to="/">个人日记</router-link></li>
	      <li><router-link to="/">个人简介</router-link></li>
	      <li><router-link to="/">建站记录</router-link></li>
	      <li><router-link to="/">留言板</router-link></li>
	    </ul>
	    <ul class="f-r">
	      <li><router-link to="/login">登录</router-link></li>
	      <li><router-link to="/register">注册</router-link></li>
	    </ul>
  	</div>  
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  methods: {
    fun (key, keyPath) {
    }
  }
}
</script>
<style scoped>
.navbar {
  background: #fff;
}

.navbar-logo h1 a {
  color: #992252;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  letter-spacing: 1px; /* h1 和 h6 元素的字母间距：*/
  text-transform: capitalize;/*文本中的每个单词以大写字母开头。*/
  background: #fff;
  font-family: 'Playball', cursive;
}

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
