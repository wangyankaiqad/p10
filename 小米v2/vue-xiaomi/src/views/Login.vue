<template>
  <div>
    <div class="bag">
      <div class="middo">


        <el-carousel height="400px">
          <el-carousel-item v-for="item in lbtlist" :key="item.carousel_id">
            <img :src="'http://101.132.181.9:3000/' + item.imgPath" class="ing">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="a">
      <p class="p">手机</p>
      <div class="a1">
        <div class="a2">
          <img src="	http://101.132.181.9:3000/public/imgs/phone/phone.png" alt="">
        </div>
        <ulli :dianshilist='shouji' />
      </div>
    </div>


    <div class="a">
      <p class="p">家电
        <span class="p3"> 电视影音</span>
        <span class="p4">热门</span>

      </p>
      <div class="a1">
        <div class="a2">
          <ul>
            <li>
              <img src="	http://101.132.181.9:3000/public/imgs/appliance/appliance-promo1.png">
            </li>
            <li>
              <img src="http://101.132.181.9:3000/public/imgs/appliance/appliance-promo2.png">
            </li>
          </ul>
        </div>
        <ulli :dianshilist='dianshilist' />
      </div>
    </div>

    <div class="a">
      <p class="p">配件</p>
      <div class="a1">
        <div class="a2">
          <ul>
            <li>
              <img src="http://101.132.181.9:3000/public/imgs/accessory/accessory-promo1.png">
            </li>
            <li>
              <img src="http://101.132.181.9:3000/public/imgs/accessory/accessory-promo2.png">
            </li>
          </ul>
        </div>
        <ulli :dianshilist='peijianlist' />
      </div>
    </div>
  </div>
</template>


<script>
import ulli from './ulli.vue'
import { carousel, login, shoppingCart, getPromoProduct } from "@/api/api.js"

export default {
  components: {
    ulli
  },
  data() {
    return {
      lbtlist: [],
      /**手机 */
      shouji: [],
      /**电视 */
      dianshilist: [],
      /**手机套  配件 */
      peijianlist: []
    }
  },
  created() {
    // 轮播图
    carousel().then(res => {
      // console.log('首页轮播数据', res);
      this.lbtlist = res.data.carousel

    })
    /**手机信息 */
    getPromoProduct({ categoryName: "手机" }).then(res => {
      // console.log(res);
      this.shouji = res.data.Product
      // console.log(this.shouji);
    })
    /**电视  家电  信息 */
    getPromoProduct({ categoryName: "电视机" }).then(res => {
      // console.log(res);
      this.dianshilist = res.data.Product

    })
    /**手机套  信息 */
    getPromoProduct({ categoryName: "保护套" }).then(res => {
      // console.log(res);
      this.peijianlist = res.data.Product

    })


    //登录演示
    login({ userName: "zhaixiankui", password: "zxk123456" }).then(res => {
      // console.log('登录成功数据', res);
      localStorage.setItem('user', JSON.stringify(res.data.user))
      // console.log('11');
      //每次需要获取登录的，获取下才能拿数据
      let user = JSON.parse(localStorage.getItem('user'))
      // console.log('22', user);
      if (user) {
        shoppingCart({ user_id: user.user_id }).then(res => {
          // console.log('获取购物车成功', res);

        })
      }
    })

  },

  methods: {
    xr() {

    }
  },

}
</script>
<style lang="scss" scoped>
.bag {
  width: 100%;

  .middo {
    flex: 1;
    padding: 0 100px;

    .el-carousel {

      //  height: 688px;
      .ing {
        width: 100%;
        height: 100%;

      }
    }


  }

}

.a {
  width: 100%;
  height: 600px;
  // border: 1px red solid;
  // margin-top: 40px;
  background-color: rgb(245, 245, 245);

  .p {
    padding-top: 20px;
    margin-left: 100px;
    font-size: 30px;

    .p3 {
      float: right;
      margin-right: 100px;
      margin-top: 20px;
    }

    .p4 {
      float: right;
      margin-right: 10px;
      margin-top: 20px;
    }

    .p4:hover {
      color: red;
      border-bottom: 1px solid red;
    }

    .p3:hover {
      color: red;
      border-bottom: 1px solid red;


    }
  }

  .a1 {
    // border: 1px rebeccapurple solid;
    margin: 0 100px;
    margin-top: 20px;
    display: flex;


    .a2 {
      width: 200px;

      img {
        width: 200px;
      }
    }


  }
}
</style>