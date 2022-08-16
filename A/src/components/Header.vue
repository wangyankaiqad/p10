<template>

    <div class="div">
        <img src="../assets/13.jpg" alt="" />
        <el-menu class="el-menu-demo" mode="horizontal">

            <el-menu-item index="1"><i class="el-icon-s-custom"></i> 用户</el-menu-item>
            <el-menu-item index="2"> <i class="el-icon-s-management"></i> 教学</el-menu-item>
            <el-menu-item index="3"> <i class="el-icon-s-management"></i>题库</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-s-marketing"></i> 运营</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-menu"></i> 营销</el-menu-item>
            <el-menu-item index="6"><i class="el-icon-notebook-1"></i> 商品</el-menu-item>
            <el-menu-item index="7"><i class="el-icon-coin"></i> 财务</el-menu-item>
            <el-menu-item index="8"> <i class="el-icon-picture-outline-round"></i>统计</el-menu-item>
            <el-menu-item index="9"> <i class="el-icon-setting"></i>系统</el-menu-item>
        </el-menu>
        <div class="right"></div>
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
.div {
    display: flex;
    //  background-image: linear-gradient(to right, rgb(45, 81, 205), rgb(40, 127, 240));
    background-color: rgb(45, 81, 205);

    .el-menu-demo {
        // background-image: linear-gradient(to right, rgb(45, 81, 205), rgb(40, 127, 240));
        background-color: rgb(45, 81, 205);
        color: #b3c0d1;

    }

    .right {
        width: 50px;
        height: 50px;
        background-color: red;
        margin-left: 70px;
        border-radius: 50%;
        background: url(../assets/8.jpg);
        background-size: 100% 100%;
        margin-top: 5px;
    }


}

img {
    width: 100px;
    margin: 0 20px;
    height: 60px;

}
</style>