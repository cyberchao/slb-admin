<template>
  <el-container>
    <el-aside width="200px">
      <el-row style="height: 100%;">
        <el-col :span="24" style="height: 100%;">
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
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">设置</span>
            </el-menu-item>
            <el-menu-item index="3">
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
<style>
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

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body .el-container {
  margin-bottom: 40px;
  height: 100%;
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
</style>
