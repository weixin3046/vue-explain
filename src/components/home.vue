<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#000" active-text-color="blue">
          <el-menu-item index="1"><i class="el-icon-view"></i>发现</el-menu-item>
          <el-menu-item index="2">我的工作台</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
      </el-header>
      <el-aside>
        我是侧边内容
      </el-aside>

    </el-container>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>
<style scoped>
p {
  text-align: center;
}

a {
  text-decoration: none;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border: 0;
}

.el-menu.el-menu--horizontal {
  border: 0;
}

</style>
