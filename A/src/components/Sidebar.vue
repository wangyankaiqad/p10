<template>
    <div>
        <div>
            <el-container>
                <el-header>                 
                    <Header />
                </el-header>
                <el-container>
                    <!-- 左侧 -->
                    <el-aside width="200px">
                        <Nav />
                    </el-aside>
                    <el-main>
                        <Main />

                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Nav from './Nav.vue';
import Main from './Main.vue';

export default {
    components: {
        Header,
        Nav,
        Main
    },
    data() {
        return {
            routes: [

            ],
        };
    },

    mounted() { },

    methods: {},


};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
    // background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    // background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    // background-color: #e9eef3;
    color: #333;
    text-align: left;
    // line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.el-aside {
    overflow: hidden;
}

.el-header {
    padding: 0;
}

.el-menu-demo {
    background-image: linear-gradient(to right, rgb(45, 81, 205), rgb(40, 127, 240));
    color: #b3c0d1;
    
}
</style>