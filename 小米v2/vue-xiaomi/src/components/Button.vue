<template>
    <div class="buttonOne">
        <div class="buttontwo">
            <div class="middon">
                <div class="left">
                    <img src="" alt="">
                </div>
                <span>七天无理由退换</span>
            </div>
            <div class="middon">
                <div class="left">
                    <img src="" alt="">
                </div>
                <span>满99元全场免邮</span>
            </div>
            <div class="middon">
                <div class="left">
                    <img src="" alt="">
                </div>
                <span>100%品质保证</span>
            </div>
        </div>
        <div class="buttontreen">
            <p>
                <img src="../assets/imgs/github.png" alt="" />
            </p>
            <p>
                <span>首页</span>|
                <span>全部商品</span>|
                <span>关于我们</span>
            </p>
            <p>
                商城版权所有 © 2012-2021
            </p>
        </div>
    </div>
</template>

<script>
export default {

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
.buttonOne {

    width: 100%;
    height: 400px;
    background-color: rgb(47, 47, 47);
    margin-top: 20px;

    .buttontwo {
        height: 180px;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid rgb(61, 61, 61);

        .middon {
            display: flex;
            align-items: center;

            .left {
                width: 40px;
                height: 40px;
                background: url(../assets/imgs/us-icon.png) no-repeat left 0;
            }

            span {
                font-size: 20px;
                color: aliceblue;
            }
        }
    }

    .buttontreen {
        p {
            margin-top: 20px;
            text-align: center;
            color: rgb(136, 125, 99);

            img {
                display: block;
                margin: auto;
            }

            span {
                color: rgb(136, 125, 99);
                margin: 0 20px;
            }

            span:hover {
                color: azure;
            }
        }
    }


}
</style>