<template>
  <div>
    <!-- 总得大的父组件 -->
    <div class="herade">
      <div class="left" @click="gwc">
        <i class="el-icon-shopping-cart-2"></i>
        购物车(0)
      </div>
      <span>我的收藏</span>
      <span @click="order">我的订单</span>
      <span v-if="!user" @click="registers">注册</span>|
      <span @click="dialogFormVisible = true" v-if="!user">登录</span>



      <el-popover placement="bottom-end" width="160" v-model="visible">
        <p>你确定要退出么</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          <el-button type="primary" size="mini" @click="sign_out">确定</el-button>
        </div>
        <span v-if="user" slot="reference">欢迎 zhaixiankun</span>
      </el-popover>


    </div>
    <div class="nav">
      <div class="navleft"></div>
      <div class="navleft1">
        <div class="a1">
          <div class="aa1">
            <img src="../assets/imgs/logo.png" alt="">
          </div>
          <div class="aa2">
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">全部商品</el-menu-item>
              <el-menu-item index="3">关于我们</el-menu-item>
            </el-menu>
          </div>
          <div class="aa3">
            <el-input placeholder="请输入搜索内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
      </div>
      <div class="navleft"></div>
    </div>
    <!-- 弹窗 登录 -->
    <el-dialog title="登录" :visible.sync="dialogFormVisible" width="240px">
      <el-form :model="form" :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>

        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sign_in">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 注册 -->
    <el-dialog title="注册" :visible.sync="dialogFormVisible1" width="240px">
      <el-form :model="data" :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item prop="passwords">
          <el-input v-model="form.passwords" placeholder="请再输入密码" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="registerAdd">确 定</el-button>
      </div>
    </el-dialog>
    <div>

      <router-view></router-view>

    </div>

    <div>
      <!-- 底部组件 -->
      <dibu></dibu>
    </div>

  </div>
</template>

<script>
import { logins, shoppingCart, register } from "@/api/api.js"
import dibu from '../components/Button.vue'
export default {
  components: {
    dibu
  },
  data() {
    /**自定义校验 */
    var checkName = (rule, value, callback) => {
      const re = /^[a-zA-Z]\w{5,17}$/
      if (re.test(value)) {
        callback()
      } else {
        callback(new Error('字母开头,长度5-16之间,允许字母数字下划线'))
      }
    };
    return {
      data: {
        userName: '',
        password: '',
      },
      // 确认密码
      passwords: '',
      /**购物车的数据 */
      cartList: [],
      form: {
        userName: '',
        password: ''
      },
      visible: false,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      rules: {
        userName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { validator: checkName, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: checkName, trigger: 'blur' }
        ],
        passwords: [
          {
            validator: (val) => val === this.data.password,
            message: "两次密码不一致",
          },
        ]
      },
      user: JSON.parse(localStorage.getItem('user'))

    };
  },

  mounted() {

  },

  methods: {
    // 点击注册的确定按钮
    registerAdd() {
      register(this.data).then(res => {
        console.log(res);

      })
    },
    // 点击注册
    registers() {
      this.dialogFormVisible1 = true
      // register
    },

    // 点击我的订单
    order() {
      // if (this.uese) {
      //   this.$router.push('/order')
      // } else {
      //   this.dialogFormVisible = true
      // }
      this.$router.push('/order')
    },
    // 点击退出
    sign_out() {
      localStorage.clear()
      this.visible = false
      this.user = JSON.parse(localStorage.getItem('user'))
    },
    // 点击购物车
    gwc() {
      this.$router.push('/gwc')
    },
    // 点击登录
    sign_in() {
      // { userName: "zhaixiankui", password: "zxk123456" }
      logins(this.form).then(res => {
        // console.log('登录成功数据', res);
        localStorage.setItem('user', JSON.stringify(res.data.user))

        //  获取到本地存储的user
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
        if (user) {
          const h = this.$createElement;
          this.$notify({
            message: h('i', { style: 'color: teal' }, '登录成功')
          });
          this.dialogFormVisible = false
        }
      })

    },
    // 点击上面的切换栏
    handleSelect(val) {
      if (val == 1) {
        this.$router.push('/Login')
      } else if (val == 2) {
        this.$router.push('/commodity')
      } else {
        this.$router.push('/about')
      }
    },

  },
  created() {

  },

};
</script>

<style lang="scss" scoped>
.el-dialog {
  .el-form-item {
    width: 200px;
  }
}

.herade {
  width: 100%;
  height: 50px;
  background-color: rgb(61, 61, 61);
  display: flex;
  flex-direction: row-reverse;
  line-height: 50px;

  span {
    box-sizing: border-box;
    padding: 0 20px;
    cursor: pointer;
    color: gray;

  }

  span:hover {
    color: #fff;
  }

  .left {
    margin-right: 200px;
    padding: 0 20px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 103, 0);
  }
}

.nav {
  width: 100%;
  height: 100px;
  display: flex;

  .navleft {
    width: 100px;
  }

  .navleft1 {
    flex: 1;

    border-bottom: 1px solid gray;

    .a1 {
      display: flex;
      justify-content: space-between;

      .aa1 {
        margin-top: 30px;
        height: 60px;

        img {
          height: 100%;
        }
      }

      .aa2 {
        margin-top: 38px;
        margin-right: 130px;
      }

      .aa3 {
        margin-top: 38px;

        .input-with-select {
          float: right;
        }

      }
    }
  }
}

.inputName {
  width: 200px;
}
</style>