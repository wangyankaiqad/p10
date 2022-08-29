<template>
  <div>
    <el-container>
      <el-header>
        <div class="aaa">
          <span class="aaa1">梦雪谷会员管理系统</span>
          <el-dropdown>
            <el-button type="primary">
              王彦凯<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="xiu">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="tui">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="15%">
          <el-menu router default-active="2" class="el-menu-vertical-demo"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/shouye">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="huiyuna">
              <i class="el-icon-menu"></i>
              <span slot="title">会员管理</span>
            </el-menu-item>
            <el-menu-item index="/gys">
              <i class="el-icon-menu"></i>
              <span slot="title">供应商管理</span>
            </el-menu-item>
            <el-menu-item index="/spgl">
              <i class="el-icon-menu"></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="/yggl">
              <i class="el-icon-menu"></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() { },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tui() {
      this.$router.push("/");
      console.log(123);
    },
    xiu() {
      alert("暂不支持修改密码");
    },
  },
};
</script>

<style  scoped>
.el-header{
  padding: 0;
}

* {
  padding: 0;
  margin: 0;
}

.aaa {
  width: 100%;
  height: 60px;
  background-color: gray;
}

.aaa1 {
  font-size: 20px;
  color: aliceblue;
  line-height: 60px;
  margin-left: 50px;
}

.a1 {
  width: 100%;
  height: 50px;
  background-color: gray;
  font-size: 20px;
  color: aliceblue;
}

.el-dropdown {
  float: right;
  margin-right: 100px;
}

.el-menu-item {
  overflow: hidden;
}
.el-menu {
    height: 1000px;
    border-right: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
}
</style>