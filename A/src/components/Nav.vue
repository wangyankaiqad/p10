<template>
  <el-menu
    default-active="/students"
    class="el-menu-vertical-demo"
    router
    unique-opened
  >
    <el-menu-item v-for="route in routes" :key="route.id" :index="route.path">
      <i :class="route.icon"></i>
      <span slot="title">{{ route.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
    };
  },

  mounted() {},

  methods: {},
  created() {
    this.$axios.get("/parameter/query/list").then((res) => {
      console.log(res);
      this.routes = res.data.data.routes;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>