<template>
  <div class="bb">
    <div class="aa">
      <div class="a1">梦学谷会员管理系统</div>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="add">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  mounted() { },

  methods: {
    //   登录
    add() {
      this.$refs.form.validate((aa) => {
        if (!aa) return;
        // 请求不到数据
        this.$http
          .post("http://vue.mengxuegu.com/pro-api/user/logout", this.form)
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
              this.$router.push("/login");
            }
          });
      });
    },
  },
};
</script>

<style  scoped>
.el-input{
  width: 80%;
 
}


.aa {
  width: 500px;
  height: 300px;
  margin: auto;
  margin-top: 300px;
  background-color: rgba(250,250,250,0.5);
  border-radius: 20px;
  padding-top: 50px;

}

.bb {
  overflow: hidden;
  width: 100%;
  height: 1030px;
  background-image: url('../../public/12.jpg');
  background-repeat:no-repeat;
  background-size: 100% 100%;
  
}
.a1{
 text-align: center;
 font-size: 30px;
 padding-bottom: 30px;
}
.el-button{
  margin-left: 130px;
}
</style>