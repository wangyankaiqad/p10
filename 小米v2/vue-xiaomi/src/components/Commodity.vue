<template>
    <div>
        <div class="bb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>全部商品</el-breadcrumb-item>
                <el-breadcrumb-item>分类</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="cc">
            <template>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="全部">
                    </el-tab-pane>
                    <el-tab-pane v-for="item in shujulist" :key="item.category_id" :label="item.category_name">
                    </el-tab-pane>
                </el-tabs>
            </template>


        </div>
        <div class="a">
            <div class="a1">
                <ul>
                    <li v-for="item in splist" :key="item.product_id"  @click="$router.push('/xqy?id=' + item.product_id)">
                        <img :src="'http://101.132.181.9:3000/' + item.product_picture" alt="">
                        <p class="p1">{{ item.product_name }}</p>
                        <p class="p2">{{ item.product_title }}</p>
                        <p class="p3">
                            <span class="span1">{{ item.product_selling_price }}</span>
                            <span class="span2" v-if="item.product_price != '2599'">{{ item.product_price }}</span>
                        </p>
                    </li>

                </ul>
            </div>
            <div class="dd">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="form.currentPage" :page-sizes="[1, 5, 10, 15]" :page-size="form.pageSize"
                    layout="total, sizes, prev, pager, next, jumper" :total="total">
                </el-pagination>

            </div>
        </div>
    </div>
</template>

<script>
import { getCategory, getAllProduct } from "@/api/api.js"
export default {
    data() {
        return {
            activeName: '',
            // 上面分类的数组
            shujulist: [],
            // 全部商品
            splist: [],
            splistCopy: [],
            /**分页请求的数据 */
            form: {
                currentPage: 1,
                pageSize: 15
            },
            total: 0
        };
    },

    mounted() {

    },

    methods: {
        //   分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.form.pageSize = val
            this.xr()
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.form.currentPage = val
            this.xr()
        },
        //   点击全部商品的分类
        handleClick(tab) {
            this.splist = this.splistCopy.filter(item => {
                return item.category_id == tab.index
            })
            // console.log(this.splist);
            this.total = this.splist.total
            if (tab.index == 0) {
                this.splist = this.splistCopy
            }
        },
        xr() {
            // 数据 
            getAllProduct(this.form).then(res => {
                console.log(res);
                this.splist = res.data.Product
                this.total = res.data.total
            })
        },
        xr1() {
            getAllProduct().then(res => {
                this.splistCopy = res.data.Product
            })
        }
    },
    created() {
        // 分类
        getCategory().then(res => {
            // console.log(res.data.category);
            this.shujulist = res.data.category
        })

        this.xr()
        this.xr1()
    }
};
</script>

<style lang="scss" scoped>
.bb {
    padding: 0 100px;
    margin-top: 20px;

    .el-breadcrumb-item {
        font-size: 40px !important;
    }

}

.cc,
.dd {
    padding: 0 100px;
    margin-top: 20px;

}

.a {
    background-color: rgb(245, 245, 245);

    .a1 {
        margin: 0 100px;

        ul {
            display: flex;
            flex-wrap: wrap;
            

            li:hover {
                transform: translate(1px, 1px);
                box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.1);
            }


            li {
                width: 19%;
                height: 300px;
                margin-top: 20px;
                background-color: #fff;
                margin-left: 10px;
                text-align: center;


                img {

                    height: 180px;
                }

                .p2 {
                    color: gray;
                    margin: 10px 0;
                    font-size: 8px;
                }

                .p3 {
                    
                    .span1 {
                        color: red;
                        font-size: 18px;

                    }

                    .span2 {
                        color: gray;
                        font-size: 18px;
                        margin-left: 10px;
                        text-decoration: line-through
                    }
                }
            }
        }
    }
}
</style>