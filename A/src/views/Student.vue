<template>
  <div class="students">
    <div class="headers">{{ this.$route.name }}</div>
    <!-- 学生 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="学员状态">
        <el-select v-model="formInline.status" placeholder="请选择学员状态">
          <el-option label="启用" :value="1"></el-option>
          <el-option label="禁用" :value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学员名称">
        <el-input v-model="formInline.name" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.mobile" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          <i class="el-icon-search fontsize"></i>
          搜索
        </el-button>
        <el-button type="primary" @click="reset">
          <i class="el-icon-loading fontsize"></i>
          重置
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">新增学员</el-button>
        <el-button type="primary">批量导入</el-button>
        <el-button type="primary">批量导出</el-button>
        <el-button type="primary">查看报表</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark" style="width: 100%" border>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="学生名称" prop="nickname" header-align="center">
        <template slot-scope="scope">
          <el-image :src="scope.row.avatar"></el-image>
          {{ scope.row.nickname }}
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == 1">启用</el-tag>
          <el-tag type="info" v-if="scope.row.status == 0">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center">
        <template slot-scope="{ row: { created_at } }">
          {{ new Date(Number(created_at)).toLocaleString() }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300px" align="center">
        <el-button type="text">详情</el-button>-
        <el-button type="text">编辑</el-button>-
        <!-- <el-button type="text">
                    <template slot-scope="scope">
                        {{ scope.row.status == 1 ? '禁用' : '启用' }}
                    </template>
                </el-button>- -->
        <el-button type="text">删除</el-button>-
        <el-button type="text">重置密码</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[1, 5, 8, 10]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="tableListCopy.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        /**学员状态 */
        status: "",
        /**学员名称 */
        name: "",
        /**手机号*/
        mobile: "",
      },
      // 表格信息
      // tableList: [],
      tableListCopy: [],
      //   第几页
      currentPage: 1,
      //   每页多少条数据
      pageSize: 10,
      data: [],
    };
  },
  created() {
    this.$axios.get("/parameter/query").then((res) => {
      this.data = res.data.data.data;
      this.tableList = this.data;
      this.tableListCopy = this.data;
    });
  },

  computed: {
    // 通过监听来实现分页
    tableList: {
      get() {
        let tableLists = [];
        if (this.currentPage == 1) {
          tableLists = this.tableListCopy.slice(0, this.pageSize);
        } else {
          tableLists = this.tableListCopy.slice(
            (this.currentPage - 1) * this.pageSize,
            this.currentPage * this.pageSize
          );
        }
        return tableLists;
      },
      set() { },
    },
  },

  mounted() { },

  methods: {
    // 搜索
    onSubmit() {
      // let status = this.formInline.status
      // let name = this.formInline.name
      // let phone = this.formInline.mobile

      // if (status || (status === 0 && name && phone)) {
      //     this.searchThree()
      // } else if (status || (status === 0 && name && !phone)) {
      //     this.searchStatusAndName()
      // } else if (status || (status === 0 && !name && phone)) {
      //     this.searchStatusAndMobile()
      // } else if (!status && name && phone && status !== 0) {
      //     this.searchNameAndMobile()
      // } else if (!status && !name && phone && status !== 0) {
      //     this.searchPhone()
      // } else if (!status && name && !phone && status !== 0) {
      //     this.searchName()
      // } else if (status || (status === 0 && !name && !phone)) {
      //     this.searchStatus()
      // }

      /**如果判断内容不为空的话 */
      if (this.formInline.status !== "") {
        let a = this.data.filter((item) => {
          return item.status == this.formInline.status;
        });
        this.tableListCopy = a;
      }

      if (this.formInline.name.trim() != "") {
        let b = this.tableListCopy.filter((item) => {
          return item.nickname.includes(this.formInline.name);
        });
        this.tableListCopy = b;
      }

      if (this.formInline.mobile.trim() != "") {
        let c = this.tableListCopy.filter((item) => {
          return item.mobile.includes(this.formInline.mobile);
        });
        this.tableListCopy = c;
      }
    },
    /** 只有启动*/
    searchStatus() {
      this.tableListCopy = this.data.filter(
        (item) => item.status === this.formInline.status
      );
    },
    /**只有查询姓名 */
    searchName() {
      this.tableListCopy = this.data.filter(
        (item) => item.nickname.indexOf(this.formInline.name) > -1
      );
    },
    /**只查询手机号 */
    searchPhone() {
      this.tableListCopy = this.data.filter(
        (item) => item.mobile.indexOf(this.formInline.mobile) > -1
      );
    },
    /**启用 姓名 */
    searchStatusAndName() {
      let result1 = this.data.filter(
        (item) => item.status === this.formInline.status
      );

      this.tableListCopy = result1.filter(
        (item) => item.nickname.indexOf(this.formInline.name) > -1
      );
    },
    /**启用 手机 */
    searchStatusAndMobile() {
      let result1 = this.data.filter(
        (item) => item.status === this.formInline.status
      );

      this.tableListCopy = result1.filter(
        (item) => item.nickname.indexOf(this.formInline.mobile) > -1
      );
    },
    /**姓名+手机号 */
    searchNameAndMobile() {
      this.result1 = this.data.filter(
        (item) => item.nickname.indexOf(this.formInline.name) > -1
      );

      this.tableListCopy = result1.filter(
        (item) => item.mobile.indexOf(this.formInline.mobile) > -1
      );
    },
    /**启用 手机号 姓名 */
    searchThree() {
      let result1 = this.data.filter(
        (item) => item.status === this.formInline.status
      );

      let result2 = result1.filter(
        (item) => item.nickname.indexOf(this.formInline.name) > -1
      );

      this.tableListCopy = result2.filter(
        (item) => item.mobile.indexOf(this.formInline.mobile) > -1
      );
    },

    // 重置
    reset() {
      // 清空表单的东西
      this.formInline = {};
      // 将数据还原
      this.tableListCopy = data;
    },
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 当前第几页
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.students {
  .headers {
    padding: 0 0 20px 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid gray;
  }
}

.fontsize {
  font-size: 13px;
  margin-right: 5px;
}

.el-image {
  width: 30px;
  vertical-align: middle;
}
</style>