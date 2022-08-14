<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane :label="'未读消息' + list.length">
                <el-card class="box-card">
                    <p v-for="(item, index) in list" :key="index">
                        {{ item.title }}
                        <span>
                            <el-button @click="yidu(item)">标记已读</el-button>
                        </span>
                    </p>
                    <el-button type="danger" @click="yiduAll" v-show="list.length != 0">全部标记已读</el-button>
                    <div class="p1" v-show="list.length == 0">暂无数据</div>
                </el-card>

            </el-tab-pane>
            <el-tab-pane :label="'已读消息' + ydlist.length">
                <el-card class="box-card">
                    <p v-for="(item, index) in ydlist" :key="index">
                        {{ item.title }}
                        <span>
                            <el-button @click="del(item)">删除</el-button>
                            <el-button @click="huan1(item)">还原未读</el-button>
                        </span>
                    </p>
                    <el-button type="danger" @click="delAll" v-show="ydlist.length != 0">全部删除</el-button>
                    <div class="p1" v-show="ydlist.length == 0">暂无数据</div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane :label="'回收站' + dellist.length">
                <el-card class="box-card">
                    <p v-for="(item, index) in dellist" :key="index">
                        {{ item.title }}
                        <span>
                            <el-button @click="huan(item)">还原</el-button>
                        </span>
                    </p>
                    <el-button type="danger" @click="qing" v-show="dellist.length != 0">全部清空</el-button>
                    <div class="p1" v-show="dellist.length == 0">暂无数据</div>
                </el-card>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>



<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['list', 'ydlist', 'dellist'])
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        //已读还原未读
        huan1(val) {
            this.$store.commit('huan1', val)
        },
        // 清空
        qing() {
            this.$store.commit('qing')
        },
        // 还原
        huan(val) {
            this.$store.commit('huan', val)
        },
        // 删除全部
        delAll() {
            this.$store.commit('delAll')
        },
        // 点击删除
        del(val) {
            this.$store.commit('del', val)
        },
        // 全部标为已读
        yiduAll() {
            this.$store.commit('yiduAll')
        },
        // 已读
        yidu(val) {
            this.$store.commit('yidu', val)
        }
    },
};
</script>

<style  scoped>
p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #000;
}

.p1 {
    width: 100%;
    text-align: center;
}
</style>