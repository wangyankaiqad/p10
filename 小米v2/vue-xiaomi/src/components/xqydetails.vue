<template>
    <div>
        <!-- 详情 -->
        <header>
            <div class="title" v-for="item in Product" :key="item.product_id">{{ item.product_name }}</div>
            <ul class="titleUl">
                <li>用户评价</li>
                <li>参数</li>
                <li>概述</li>
            </ul>
        </header>
        <nav>

            <el-carousel class="my-swipe" height="560px">
                <el-carousel-item v-for="item in ProductPicture" :key="item.id">
                    <img :src="'http://101.132.181.9:3000/' + item.product_picture" class="img">
                </el-carousel-item>
            </el-carousel>

            <div class="content" v-for="item in Product" :key="item.product_id">
                <h1 class="name">{{ item.product_name }}</h1>
                <div class="intro">{{ item.product_intro }}</div>
                <div class="xiaomi">{{ item.product_title }}</div>
                <div class="pin">
                    <div class="price">{{ item.product_selling_price }}</div>
                    <div class="product_price">{{ item.product_price }}元</div>
                </div>
                <div class="hezi">
                    <div class="list">
                        <div class="pin1">
                            <span class="mi">{{ item.product_name }}</span>
                            <div>
                                <span class="price">{{ item.product_selling_price }}</span>
                                <span class="product_price">{{ item.product_price }}元</span>
                            </div>
                        </div>
                        <div class="sum">总计:{{ item.product_selling_price }}元</div>
                    </div>
                </div>
                <el-button class="AddCart" @click="AddCart(item)">加入购物车</el-button>
                <el-button class="like">喜欢</el-button>
                <div class="footer">
                    <span class="el-icon-circle-check">小米自营</span>
                    <span class="el-icon-circle-check">小米发货</span>
                    <span class="el-icon-circle-check">7天无理由退货</span>
                    <span class="el-icon-circle-check">7天价格保护</span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { getDetails, getDetailsPicture, getShoppingCart } from "@/api/api.js"
export default {

    data() {
        return {
            /**轮播图 */
            ProductPicture: [],
            /**数据 */
            Product: [],
            /**商品id */
            id: this.$route.query.id,
          


        };
    },

    created() {
        // 获取到id
        const id = this.$route.query.id
        // 获取到详细信息
        getDetails({ productID: id }).then(res => {
            // console.log(res);
            this.Product = res.data.Product
        })
        //  获取到详细轮播图的信息
        getDetailsPicture({ productID: id }).then(res => {
            // console.log(res);
            this.ProductPicture = res.data.ProductPicture
        })
    },

    methods: {
        AddCart() {
            // 获取到user值
            let user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                getShoppingCart({ user_id: user.user_id, product_id: this.id }).then(res => {
                    const h = this.$createElement;
                    this.$notify({
                        message: h('i', { style: 'color: teal' }, '添加购物车成功')
                    });

                })
            } else {
                const h = this.$createElement;
                this.$notify({
                    message: h('i', { style: 'color: teal' }, '添加购物车失败')
                });
            }

        }
    },
};
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-shadow: 0px 1px 2px gray;

    .title {
        font-size: 20px;
        color: #212121;
        line-height: 50px;
        margin-left: 10px;
        float: left;
        margin-left: 100px;
    }

    ul {
        list-style: none;
        margin-right: 100px;

        li {
            float: right;
            padding: 10px;
            line-height: 30px;
        }

        li:hover {
            color: #ff6700;
        }
    }
}



nav {
    display: flex;
    justify-content: space-between;

}

.content {
    flex: 1;

    .name {
        font-size: 24px;
        margin-top: 25px;
    }

    .intro {
        font-size: 16px;
        margin-top: 10px;
        color: #B0B0B0;
    }

    .xiaomi {
        margin-top: 10px;
        color: #ff6700;
        font-size: 16px;
    }

    .pin {
        display: flex;
        padding: 25px 0;
        border-bottom: 1px solid #B0B0B0;

        .price {
            font-size: 18px;
            color: #ff6700;
        }

        .product_price {
            font-size: 14px;
            color: #B0B0B0;
            text-decoration: line-through;
            margin-left: 8px;
        }
    }

    .hezi {
        padding: 20px 0;

        .list {
            margin: 50px 0 50px;
            padding: 30px 60px;
            background: #f9f9fa;

            .mi {
                font-size: 16px;
            }

            .pin1 {
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                color: #616161;

                .product_price {
                    text-decoration: line-through;
                    margin-left: 8px;
                }
            }
        }

        .sum {
            padding: 20px 0px 0px;
            font-size: 24px;
            color: #ff6700;
        }
    }

    .AddCart {
        background-color: #ff6700;
        color: #fff;
        width: 330px;
        height: 55px;
    }

    .like {
        width: 260px;
        height: 55px;
        background-color: #B0B0B0;
        color: #fff;
    }

    .footer {
        font-style: 16px;
        color: #B0B0B0;
        margin-top: 15px;

        span {
            padding: 10px;
        }
    }
}

.my-swipe {
    width: 560px;
}

.img {
    margin-top: 20px;
    width: 560px;
    height: 100%;
}
</style>