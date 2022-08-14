<template>
  <div>
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">用户</el-menu-item>
          <el-menu-item index="2">教学</el-menu-item>
          <el-menu-item index="3">题库</el-menu-item>
          <el-menu-item index="4">运营</el-menu-item>
          <el-menu-item index="5">营销</el-menu-item>
          <el-menu-item index="6">商品</el-menu-item>
          <el-menu-item index="7">财务</el-menu-item>
          <el-menu-item index="8">统计</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px" router>
          <el-menu default-active="2" class="el-menu-vertical-demo" router>

            <el-menu-item index="/xygl">
              <i class="el-icon-menu"></i>
              <span slot="title">学员管理</span>
            </el-menu-item>
            <el-menu-item index="/jsgl">
              <i class="el-icon-menu"></i>
              <span slot="title">讲师管理</span>
            </el-menu-item>
            <el-menu-item >
              <i class="el-icon-menu"></i>
              <span slot="title">助教管理</span>
            </el-menu-item>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {


  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style  scoped>
.el-header {
  padding: 0;
}
.el-aside{
  overflow: hidden;
}

</style>