<template>
  <div class="home">
    <input type="text" style="background-color:transparent;border:none">
    <div class="_navbar container clearfix">
      <h1 class="f-l"><router-link class="logo" to="/">ChasingDream</router-link></h1>
      <nav-bar class="f-l" :navbarValue="navbar"></nav-bar>
      <nav-bar class="f-r" :navbarValue="login"></nav-bar>
    </div>
    <!-- <swiper  :swiperValue="swiper"></swiper> -->
    <course :messagec="messagec"></course>
    <about></about>
    <book></book>
  </div>
</template>
<script>
import navBar from '../components/navbar.vue'
import swiper from '../components/swiper.vue'
import course from '../components/course.vue'
import about from './about.vue'
import book from './guestbook.vue'
import getTest from "@/global/request.js"
import bus from '../main'
export default {
  name: 'home',
  data () {
    return {
      swiper: {
        height:'400px',
        list: [{name:'这是首页', val:'1', images: './assets/images/1.jpg'},{name:'这是二页', val:'2', images: '../assets/images/3.jpg'},{name:'这是三页', val:'3', images: '../assets/images/3.jpg'}],
      },
      navbar: [{name: '首页', url: 'home'}, {name: '个人日记', url: 'about'}, {name: '个人简介', url: 'about'}, {name: '建站记录', url: 'about'}, {name: '留言板', url: 'about'}],
      login: [{name: '登录', url: 'login'}, {name: '注册', url: 'register'}],
      message:'hello',
      messagec:'hello c' //传递给c组件的数据
    }
  },
  components:{navBar, swiper, course, about, book},

  methods: {
    getdata(){ 
        getTest('get','/topics',{
          // accesstoken : '9bde836d-4216-4bff-b6b0-a056b8ecb0af'
        }).then(response => {
            console.log(response)
          //this.reponseData = response.data;
        });
    },
    funcName(childValue) {
      console.log(childValue)
    },
    getChildData(val){
                console.log('这是来自B组件的数据')
            },
    getCData(val){
                console.log("这是来自C组件的数据："+val)
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
