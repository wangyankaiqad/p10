<template>
    <div>
        <el-card class="box-card">
            <div>
                <el-button type="primary">选中删除</el-button>
                &nbsp; &nbsp;
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="福建省" value="福建省"></el-option>
                    <el-option label="湖南省" value="湖南省"></el-option>
                    <el-option label="广东省" value="广东省"></el-option>
                </el-select>
                &nbsp; &nbsp;
                <el-input v-model="input" placeholder="请输入用户名" style="width: 300px" @change="serch"></el-input>
            </div>

            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
                <el-table-column type="selection"> </el-table-column>
                <el-table-column prop="id" label="ID"> </el-table-column>

                <el-table-column prop="name" label="用户名"> </el-table-column>
                <el-table-column prop="money" label="账户余额"> </el-table-column>
                <el-table-column prop="thumb" label="头像">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.thumb" alt="" />
                    </template>
                </el-table-column>
                <el-table-column label="日期">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column prop="address" label="地址" show-overflow-tooltip>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="bj(scope.row)" type="text" size="small"><i class="el-icon-edit"></i> 编辑
                        </el-button>
                        <el-button type="text" size="small" @click="del(scope.$index, tableData)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page.sync="pagenum" :page-size="5" layout="prev, pager, next, jumper" :total="total">
            </el-pagination>

        </el-card>
        <!-- 模态框 -->

        <el-dialog title="编辑" :visible.sync="dialogFormVisible">
            <el-form :model="bjlist">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="bjlist.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="bjlist.address" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add('bjlist')">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import tables from '../assets/json数据/table.json'
export default {

    data() {
        return {
            formLabelWidth: "100px",
            dialogFormVisible: false,
            tableData: [],
            // 获取的json的原数据
            datalist: tables.list,
            // 数组长度
            total: tables.pageTotal,
            // 每页数据
            pagenum: 5,
            // 省份
            select: '',
            // 名字
            input: '',
            // 定义一个空数组备用
            kong: [],
            bjlist: []


        };
    },

    mounted() {

    },
    created() {
        // 直接渲染第一页
        this.handleCurrentChange(1)
    },

    methods: {
        // 删除
       del(index, rows) {
        rows.splice(index, 1);
      },
        // 点击确定按钮
        add() {
            this.dialogFormVisible = false
        },

        // 打开模态框
        bj(val) {
            this.dialogFormVisible = true
            this.bjlist = val
        },
        // element 默认方法
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            let aa = (val - 1) * 5; //每一组数据的第一个索引
            this.tableData = this.datalist.slice(aa, aa + 5); //从总数据中取出每页的数据
        },
        serch() {
            if (this.input.trim().length && this.select != "") {
                // 过滤出省份数据
                this.kong = this.datalist.filter((item) =>
                    item.address.includes(this.select)
                );
                // 过滤好的数据中过滤人名
                this.tableData = this.kong.filter((item) =>
                    item.name.includes(this.input)
                );
            } else if (this.input == '') {
                this.tableData = this.datalist.slice(0, 5);
            }
        }
    },
};
</script>

<style  scoped>
.el-image {
    width: 30px;
    height: 30px;
}

.el-icon-star-off {
    cursor: pointer;
}

.el-icon-delete {
    cursor: pointer;
}
</style>