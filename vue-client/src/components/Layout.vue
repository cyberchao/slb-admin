<template>
  <el-container>
    <el-aside width="200px">
      <el-row style="height: 100%;">
        <el-col :span="24" style="height: 100%;"  class="sideBar">
          <div
            style="height: 60px;line-height: 60px;background: gold;
    font-size: x-large;"
          >
            <a @click="func">SLB运维平台</a>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#333"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="dashboard">
              <i class="el-icon-s-home"></i>
              <span slot="title">Dashboard</span>
            </el-menu-item>
            <el-menu-item index="upstream">
              <i class="el-icon-s-home"></i>
              <span slot="title">upstream管理</span>
            </el-menu-item>
            <el-menu-item index="vhost">
              <i class="el-icon-s-home"></i>
              <span slot="title">vhost管理</span>
            </el-menu-item>
            <el-menu-item index="ca">
              <i class="el-icon-s-home"></i>
              <span slot="title">证书管理</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>集群管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">nginx-ssl</el-menu-item>
                <el-menu-item index="1-2">nginx-bc</el-menu-item>
                <el-menu-item index="1-2">nginx-fs</el-menu-item>
                <el-menu-item index="1-2">nginx-webii</el-menu-item>
                <el-menu-item index="1-2">nginx-ca</el-menu-item>
                <el-menu-item index="1-2">nginx-proxy</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="settings">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
            <el-menu-item index="logging">
              <i class="el-icon-setting"></i>
              <span slot="title">操作日志</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable */
import Header from "./Header";
export default {
  components: { Header },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    func() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  padding: 0;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}


body .el-container {
  height: 100%;
  overflow-y: hidden;
}

.el-container .el-aside {
  line-height: 320px;
}
.el-menu-vertical-demo.el-menu {
  height: 100%;
}
.el-menu-vertical-demo.el-menu i {
  position: absolute;
  top: 20px;
  left: 20px;
}
.el-menu-vertical-demo.el-menu span {
  position: absolute;
  top: 3px;
  left: 55px;
}
.el-submenu__icon-arrow.el-icon-arrow-down {
  top: 30px;
  left: 60px;
}
.sideBar {
  display: flex;
  flex-direction: column;
}
.sideBar ul{
  flex: 1;
}

</style>
