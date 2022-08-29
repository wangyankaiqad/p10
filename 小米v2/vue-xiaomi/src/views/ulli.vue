<template>

    <!-- 封装的ulli组件 用来渲染 -->

    <div class="a3">
        <ul>
            <li v-for="item in dianshilist" :key="item.product_id" @click="$router.push('/xqy?id=' + item.product_id)">
                <img :src="'http://101.132.181.9:3000/' + item.product_picture" alt="">
                <p class="p1">{{ item.product_name }}</p>
                <p class="p2">{{ item.product_title }}</p>
                <p class="p3">
                    <span class="span1">{{ item.product_selling_price }}</span>
                    <span class="span2" v-if="item.product_price != '2599'">{{ item.product_price }}</span>
                </p>
            </li>
            <li class="li">
                <span class="span">
                    浏览更多》
                </span>
            </li>
        </ul>
    </div>


</template>

<script>
export default {
    props: ['dianshilist'],
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

<style lang="scss" scoped>
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

        .a3 {
            ul {
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-content: space-around;

                .li {
                    line-height: 250px;

                    .span {
                        font-size: 20px;
                    }
                }

                :hover.span {
                    color: red;

                }

                li:hover {
                    transform: translate(1px, 1px);
                    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.1);
                }

                li {
                    width: 23%;
                    height: 250px;
                    background-color: rgb(255, 255, 255);
                    text-align: center;
                    margin-top: 10px;

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
}
</style>