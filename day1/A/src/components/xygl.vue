<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>学员管理</span>
            </div>
            <div class="aa">

                学生状态：<el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="启用" value="0"></el-option>
                    <el-option label="禁用" value="1"></el-option>
                </el-select>
                学生名称：<el-input class="a1 " v-model="val2"></el-input>
                手机号：<el-input class="a1" v-model="val3"></el-input>
                <el-button @click="sou" class="a2" icon="el-icon-search">搜索</el-button>
                <el-button @click="dian" icon="el-icon-refresh">重置</el-button>
            </div>
            <template>
                <el-table :data="datalist" style="width: 100%">
                    <el-table-column prop="date">
                        <el-checkbox></el-checkbox>
                    </el-table-column>
                    <el-table-column prop="nickname" label="学生名称">
                        <template slot-scope="scope">
                            <el-image :src="scope.row.avatar"></el-image>
                            <span>{{ scope.row.nickname }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="mobile" label="手机号">
                    </el-table-column>
                    <el-table-column prop="status" label="状态">
                        <template slot-scope="scope">
                            <el-tag type="info" v-if="scope.row.status == 0">启用</el-tag>
                            <el-tag type="info" v-if="scope.row.status == 1">禁用</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="created_at" label="创建时间">

                        <template slot-scope="scope">
                            <!-- 没写Number  导致时间没格式化 -->
                            {{ Number(scope.row.created_at) | dateFormat }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="操作" width="230px">
                        <template>
                            <div class="aaa">
                                详情-编辑-禁用-删除-重置密码
                            </div>

                        </template>
                    </el-table-column>
                </el-table>
            </template>

            <!-- 分页 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="fllist.pagenum" :page-sizes="[19, 14, 6, 4]" :page-size="fllist.pagesize"
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>


        </el-card>
    </div>
</template>

<script>

import datalist from '../assets/list.json'
export default {


    data() {
        return {
            a: 0,
            datalist: datalist,
            hahalist: datalist,
            val2: '',
            val3: '',
            fllist: {
                pagesize: 5,
                pagenum: 1
            },
            total: datalist.length,
            select: '',
            // 当前数据
            num: 0,
            c: [],
            a: [],
            b: []
        };
    },

    mounted() {

    },
    watch: {

    },


    methods: {
        // // 分页
        handleSizeChange(val) {
            this.fllist.pagesize = val;
            console.log(`每页 ${val} 条`);
            this.datalist = this.hahalist.slice(0, val)
            this.num = val
        },
        handleCurrentChange(val) {
            this.fllist.pagenum = val;
            console.log(`当前页: ${val}`);
            this.datalist = this.hahalist.slice(this.num * (val - 1), this.num * val)
        },
        // 点击重置
        dian() {
            this.datalist = this.hahalist
        },

        sou() {

            if (this.select != '') {
                //  搜索状态
                let c =
                    this.hahalist.filter(item => {
                        return item.status == this.select
                    })
                this.datalist = c
            }

            if (this.val3.trim() != '') {
                //   搜索手机
                let a = this.datalist.filter(item => {
                    return item.mobile.includes(this.val3)
                })
                this.datalist = a
            }
            if (this.val2.trim() != '') {
                //  搜索名字
                let b = this.datalist.filter(item => {
                    return item.nickname.includes(this.val2)
                })
                this.datalist = b
            }
        }

    },
};
</script>

<style  scoped>
.aa {
    display: flex;
    align-items: center;

}

.a1 {
    width: 15%
}

.a2 {
    margin-left: 20px;
}

.el-image {
    height: 20px;
}

.aaa {
    color: blue;
}
</style>