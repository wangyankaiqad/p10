<template>
    <div class="shopping">
        <div class="top">
            <div class="left">
                <i class="el-icon-shopping-cart-full"></i>
                我的购物车
            </div>
            <div class="right">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
        </div>
        <div v-if="cartList.length != 0">
            <div class="cart">
                <el-table ref="multipleTable" :data="cartList" tooltip-effect="dark" style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" label="全选" width="55" align="center">
                    </el-table-column>
                    <el-table-column prop="productName" label="商品名称" show-overflow-tooltip header-align="center">
                        <template slot-scope="scope">
                            <img :src="'http://101.132.181.9:3000/' + scope.row.productImg" class="img">
                            <span>{{ scope.row.productName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="单价" show-overflow-tooltip align="center">
                    </el-table-column>
                    <el-table-column prop="num" label="数量" show-overflow-tooltip align="center">
                        <template slot-scope="scope">
                            <van-stepper max="5" v-model="scope.row.num" @change="jia(scope.row)" />
                        </template>

                    </el-table-column>
                    <el-table-column prop="address" label="小计" show-overflow-tooltip align="center">
                        <template slot-scope="scope">
                            {{ scope.row.num * scope.row.price }}元
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="操作" show-overflow-tooltip align="center">
                        <template slot-scope="scope">
                            <i class="el-icon-error" @click="del(scope.row)"></i>

                        </template>
                    </el-table-column>

                </el-table>
            </div>

            <div class="bottom">
                <span class="span1" @click="$router.push('/commodity')">继续购物</span>|<span class="span2">共
                    <span>{{ cartList.length }}</span> 件商品，已选择 <span>{{ select.length }}</span> 件</span>
                <el-button type="warning" :disabled="select.length ? false : true" class="button">去结算</el-button>
                <span class="span3">合计：<span class="span33"> {{ zongjia }}元</span></span>

            </div>
        </div>
        <van-empty description="购物车还没东西 赶紧去购买吧" v-else />
        <div style="height:20px"></div>

    </div>
</template>

<script>

import { shoppingCart, deleteShoppingCart, updateShoppingCart } from "@/api/api.js"

export default {


    data() {
        return {
            /**数组 */
            cartList: [],
            user: JSON.parse(localStorage.getItem('user')),
            /**选中 */
            select: []
        };
    },
    mounted() {

    },
    computed: {
        // 购物车中总价
        zongjia() {
            return this.select.reduce((num, item) => num + item.num * item.price, 0)
        }
    },

    methods: {
        // 点击复选框  获取到当前点击数据的信息
        handleSelectionChange(val) {
            this.select = val
        },
        /**删除购物车的数据 */
        del(val) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                console.log(val.productID);
                deleteShoppingCart({ user_id: this.user.user_id, product_id: val.productID }).then(res => {
                    console.log(res, "123123123");
                    this.xr()
                })
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        /**获取到购物车的数据 */
        xr() {
            if (this.user) {
                shoppingCart({ user_id: this.user.user_id }).then(res => {
                    this.cartList = res.data.shoppingCartData
                })
            }
        },
        // 修改商品数量
        jia(value) {
            updateShoppingCart({ user_id: this.user.user_id, product_id: value.productID, num: value.num }).then(res => {
                console.log(res);
            })
        }
    },
    created() {
        if (this.user) {
            this.xr()
        }
    }
};
</script>

<style lang="scss" scoped>
.shopping {
    background-color: rgb(245, 245, 245);
}

.top {
    height: 70px;
    border-bottom: 2px solid red;


    .left {
        margin-left: 100px;
        font-size: 30px;
        line-height: 70px;
        float: left;

        i {
            color: red;
            font-size: 35px;
        }
    }

    .right {
        padding-top: 35px;
        margin-left: 320px;
        color: gray;
    }

}

.cart {
    margin: 0 100px;
}

.img {
    height: 50px;
    vertical-align: middle
}

.bottom {
    // width: 100%;
    height: 50px;
    margin: 0 100px;
    background-color: white;
    margin-top: 20px;
    line-height: 50px;
    font-size: 18px;
    color: rgb(198, 195, 195);

    .span1,
    .span2 {
        font-size: 18px;
        margin: 0 30px;
        color: rgb(198, 195, 195);

        span {
            color: red;
            font-size: 18px;
        }
    }

    .span1:hover {
        color: red;
        cursor: pointer;
    }

    .button {
        float: right;
        height: 100%;
        width: 100px;
    }

    .span3 {
        float: right;
        color: rgb(235, 55, 55);
        margin-right: 50px;

        .span33 {
            font-size: 25px;
        }
    }

}
</style>