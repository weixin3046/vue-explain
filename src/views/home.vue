<template>
  <div class="home">
    <div class="_navbar container clearfix">
      <h1 class="f-l"><router-link class="logo" to="/">ChasingDream</router-link></h1>
      <nav-bar class="f-l" :navbarValue="navbar"></nav-bar>
      <nav-bar class="f-r" :navbarValue="login"></nav-bar>
      <button @click="getdata()">请求</button>
    </div>
    <swiper  :swiperValue="swiper"></swiper>
  </div>
</template>
<script>
import navBar from '../components/navbar.vue'
import swiper from '../components/swiper.vue'
import getTest from "@/global/request.js";
export default {
  name: 'home',
  data () {
    return {
      swiper: {
        height:'400px',
        list: [{name:'这是首页',val:'1'},{name:'这是二页',val:'2'},{name:'这是三页',val:'3'}],
      },
      navbar: ['首页', '技术杂谈', '个人日记', '个人简介', '建站记录', '留言板'],
      login: ['登录', '注册']
    }
  },
  components:{navBar, swiper},
  methods: {
    getdata(){ 
        getTest('get','/topics',{
          // accesstoken : '9bde836d-4216-4bff-b6b0-a056b8ecb0af'
        }).then(response => {
            console.log(response)
          // this.reponseData = response.data; 
        });
    }
  }
}
</script>
<style scoped>
.home a{
  text-decoration: none;
}
._navbar{
  padding: 2em 0;
  background: #fff;
}
._navbar h1 .logo {
  color: #992252;
  padding: 10px;
  display: inline-block;
  letter-spacing: 1px; /* h1 和 h6 元素的字母间距：*/
  text-transform: capitalize;/*文本中的每个单词以大写字母开头。*/
  background: #fff;
  font-family: 'Playball', cursive;
}
</style>
