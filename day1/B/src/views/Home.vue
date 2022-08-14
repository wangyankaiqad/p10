<template>
  <div>
    <el-container>
      <el-header>
        <span class="el-icon-s-unfold header" @click="dian"> 后台管理系统</span>
      </el-header>
      <el-container>
        <el-aside :width="this.flag ? '50px' : '200px'">
          <el-menu class="el-menu-vertical-demo" router>

            <el-menu-item index="1">
              <i class="el-icon-notebook-2"></i>
              <span slot="title">图书管理</span>
            </el-menu-item>

            <el-menu-item index="2">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">后台管理</span>
            </el-menu-item>

            <el-menu-item index="3">
              <i class="el-icon-s-flag"></i>
              <span slot="title">国际化</span>
            </el-menu-item>

            <el-menu-item index="/biaoge">
              <i class="el-icon-s-grid"></i>
              <span slot="title">基础表格</span>
            </el-menu-item>

            <el-menu-item index="/tab">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">tab选项卡</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>

          <!-- <el-tag v-for="item, index in arr" :key="index">
            {{ item }} &nbsp; &nbsp;
            <span class="span" @click="del(index)">X</span>
          </el-tag> -->


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
      flag: false,
      arr: [],
      arr1: []

    };
  },

  mounted() {

  },

  methods: {
    dian() {
      this.flag = !this.flag
    },
    // aa() {
    //   this.arr = this.arr1.push('基础表格')
    //   this.arr = new Set(this.arr1)
    // },
    // bb() {
    //   this.arr = this.arr1.push('tab选项卡')
    //   this.arr = new Set(this.arr1)
    // },
  },
};
</script>

<style  scoped>
.el-header {
  background-color: rgb(44, 5, 5);
  line-height: 60px;
}

.header {
  font-size: 25px;
  color: #fff;
}

.el-menu {
  overflow: hidden;
}

.span {
  cursor: pointer;
}
</style>