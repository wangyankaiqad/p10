<template>
    <div style="background: rgb(248,248,248);">
        <div class="header">
            <i class="el-icon-s-order"></i><span>我的订单</span>
        </div>

        <div class="nav" v-for="item, index in ordet" :key="index">
            <div class="top">
                <span class="TopLeft">订单编号：</span>
                <span class="TopRight">订单时间：</span>
            </div>
            <div class="middle">
                <template>
                    <el-table :data="item" style="width: 100%">
                        <el-table-column prop="product_name" label="商品名称" header-align="center">
                            <template slot-scope="scope">
                                <img :src="'http://101.132.181.9:3000/' + scope.row.product_picture" class="img">
                                <span>{{ scope.row.product_name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="product_price" label="单价" align="center">
                            <template slot-scope="scope">
                                {{ scope.row.product_price }}元
                            </template>
                        </el-table-column>
                        <el-table-column prop="product_num" label="数量" align="center">
                        </el-table-column>
                        <el-table-column prop="address" label="小计" align="center">
                            <template slot-scope="scope">
                                {{ scope.row.product_price * scope.row.product_num }} 元
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <div class="bottom">
                <span class="spanLeft">共 <span>{{ item.length }}</span>件商品 </span>
                <span class="spanRight">合计：<span></span></span>
            </div>
        </div>

    </div>
</template>

<script>
import { getOrder } from "@/api/api.js"
export default {


    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            ordet: [],
            shu: []
        };
    },

    mounted() {

    },
    watch: {


    },

    methods: {

    },
    created() {

        /**获取到数据 */
        getOrder({ user_id: this.user.user_id }).then(res => {
            console.log(res);
            this.ordet = res.data.orders
            console.log(this.ordet);
        })

    }
};
</script>

<style lang="scss" scoped>
.header {
    padding: 0 100px;
    height: 60px;
    border-bottom: 2px solid rgb(255, 103, 0);
    display: flex;
    align-items: center;

    i {
        font-size: 30px;
        color: rgb(255, 103, 0);
    }

    span {
        font-size: 30px;

    }
}

.nav {
    padding: 0 100px;
    margin: 30px;

    .top,
    .bottom {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(255, 103, 0);
        background-color: #fff;

        .TopLeft {
            color: rgb(255, 103, 0);
            font-size: 20px;
        }

        .TopRight {
            font-size: 20px;
        }

        .spanLeft {
            span {
                color: rgb(255, 103, 0);

            }
        }

        .spanRight {
            color: rgb(255, 103, 0);

            span {
                font-size: 30px;
            }
        }
    }

}

.img {
    height: 50px;
    vertical-align: middle
}
</style>