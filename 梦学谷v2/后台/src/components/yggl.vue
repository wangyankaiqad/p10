<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb>
      <div class="aaa"></div>
      <el-breadcrumb-item>员工管理</el-breadcrumb-item>
    </el-breadcrumb><br>
    <el-input placeholder="账号" class="a2" v-model="form1.username"></el-input>
    <el-input placeholder="姓名" class="a2" v-model="form1.name"></el-input>
    <el-button type="primary" @click="dialogFormVisible = true" id="aa">新增</el-button>
    <el-button type="primary" @click="sou">查询</el-button>
    <el-button type="primary" @click="chong">重置</el-button>
    <br>
    <br>
    <el-card class="box-card">
      <template>
        <el-table :data="datalist" style="width: 100%">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="username" label="账号"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="age" label="年龄"> </el-table-column>
          <el-table-column prop="mobile" label="电话"> </el-table-column>
          <el-table-column prop="salary" label="薪酬"> </el-table-column>
          <el-table-column prop="entryDate" label="入职时间"> </el-table-column>
          <el-table-column label="操作" width="150px">
            <template scope="scope">
              <el-button size="mini" @click="bj(scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[1, , 10, 20, 30]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
      <!-- 添加 -->
      <el-dialog title="供应商添加" :visible.sync="dialogFormVisible">
        <el-form :model="form" ref="form" :rules="rules">
          <el-form-item label="账号" prop="username">
            <el-input v-model="form.username" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age" autocomplete="off" ></el-input>
          </el-form-item>

          <el-form-item label="电话">
            <el-input v-model="form.mobile" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="薪酬">
            <el-input v-model="form.salary" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="入职时间">
            <el-input v-model="form.entryDate" autocomplete="off" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 编辑 -->
      <el-dialog title="供应商添加" :visible.sync="dialogFormVisible1">
        <el-form :model="bjlist" ref="form" :rules="rules">
          <el-form-item label="账号" prop="username">
            <el-input v-model="bjlist.username" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="bjlist.name" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="bjlist.age" autocomplete="off" ></el-input>
          </el-form-item>

          <el-form-item label="电话">
            <el-input v-model="bjlist.mobile" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="薪酬">
            <el-input v-model="bjlist.salary" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="入职时间">
            <el-input v-model="bjlist.entryDate" autocomplete="off" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="add1">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      datalist: [],
      bjlist: [],
      form1: {
        username: '',
        name: ''
      },
      form: {
        username: "",
        name: "",
        age: "",
        mobile: "",
        salary: "",
        entryDate: "",
        val1: '',
        val2: ''
      },
      rules: {
        username: [{ required: true, message: "账号能为空", trigger: "blur" }],
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
      },
      // 分页用的数据
      currentPage: 1, //当前页码
      pagesize: 10, //每页显示多少条
      total: 0,
    };
  },

  mounted() {
    // http://vue.mengxuegu.com/pro-api/staff/list/search/1/10
  },

  methods: {
    sou() {
      this.$http.post('http://vue.mengxuegu.com/pro-api/staff/list/search/1/10', this.form1).then(res => {
        console.log(res);
        this.datalist = res.data.data.rows
        if (res.data.code == 2000) {
          this.$message.success(res.data.message);
          this.xr();

        }
      })
    },
    // 重置
    chong() {
      this.val1 = ''
      this.val2 = ''
    },
    //   分页
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
      this.xr();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
      this.xr();
    },
    // 删除
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$http
            .delete("http://vue.mengxuegu.com/pro-api/staff/10", id)
            .then((res) => {
              console.log(res);
              if (res.data.code == 2000) {
                this.$message.success(res.data.message);
              }
              this.xr();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 点击编辑确定
    add1() {
      this.$refs.form.validate((aa) => {
        if (!aa) return;

        this.$http
          .put("http://vue.mengxuegu.com/pro-api/staff/10", this.bjlist)
          .then((res) => {
            console.log(res);
            if (res.data.code == 2000) {
              this.$message.success(res.data.message);
              this.xr();
              this.dialogFormVisible1 = false;
            }
          });
      });
    },
    // 编辑
    bj(val) {
      this.dialogFormVisible1 = true;
      this.bjlist = val;
    },
    // 添加
    add() {
      this.$refs.form.validate((aa) => {
        if (!aa) return;
        this.$http
          .post("http://vue.mengxuegu.com/pro-api/staff", this.form)
          .then((res) => {
            console.log(res);
            if (res.data.code == 2000) {
              this.$message.success(res.data.message + "初始密码为 123456");
              this.xr();
              this.dialogFormVisible = false;
            }
          });
      });
    },
    // 获取数据
    xr() {
      this.$http
        .post("http://vue.mengxuegu.com/pro-api/staff/list/search/1/10")
        .then((res) => {
          console.log(res);
          this.datalist = res.data.data.rows;
          this.total = res.data.data.total;
        });
    },
  },
  created() {
    this.xr();
  },
};
</script>

<style  scoped>
.a2 {
  width: 300px;
  border-radius: 3px;
  margin-left: 10px;
}

#aa {
  margin-left: 20px;
}

.el-breadcrumb {
  display: flex;
  box-shadow: -3px 3px 3px 3px rgb(128, 128, 128, .1);
  height: 30px;
  line-height: 30px;
}

.aaa {
  width: 5px;
  height: 16px;
  background-color: rgb(83, 40, 225);
  margin-right: 5px;
  margin-top: 7px;
}
</style>