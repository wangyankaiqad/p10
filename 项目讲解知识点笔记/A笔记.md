# 时间格式化的方法

### 1  new Date(Number(时间)).toLocaleString()

### 2  原生js

   <template slot-scope="{row:{created_at}}">
       {{formatDateTime(created_at)}}
   </template>
  <script>
        methods:(){
            formatDateTime(unixtimestamp){
            console.log(unixtimestamp);
            if(unixtimestamp.length<13){
                unixtimestamp=unixtimestamp*1000
            }
            var unixtimestamp = new Date(unixtimestamp);
            var year = 1900 + unixtimestamp.getYear();
            var month="0"+(unixtimestamp.getMonth()+1);
            var date="0"+unixtimestamp.getDate()
            var hour = "0" + unixtimestamp.getHours();
            var minute = "0" + unixtimestamp.getMinutes();
            var second = "0" + unixtimestamp.getSeconds();
            return(
                year+"_"+
                month.substring(month.length-2,month.length)+"_"+
                data.substring(date.length-2,date.length)+"_"+
                hour.substring(hour.length-2,hour.length)+":"+
                minute.substring(minute.length-2,minute.length)+":"+
                second.substring(second.length-2,second.length)
            )
         },
      }
   <script/>   

### 3  第三方插件

   1.npm i moment
   2.在组件内部引入moment      (import moment from 'moment')
   3.行内标签-插槽

<template slot-scope="{row:{created_at}}">
    {{formatDateTime(created_at)}}
</template>

<script>
      methods:(){
          formatDateTime(unixtimestamp) {
            console.log(unixtimestamp);
            if (unixtimestamp.length < 13) {
                unixtimestamp = unixtimestamp * 1000
            }
            return moment(unixtimestamp).format('YYYY-MM-DD HH:mm:ss')
          },
      }
 <script/>



###   4   插件 moment  全局

​     下载  npm i moment

      在main.js 引入  
      import moment from 'moment'
      
       Vue.filter('dateFormat',function(date){
        return moment(date*1000).format('YYYY-MM-DD HH:mm:ss')
        })


        <template slot-scope="{row:{created_at}}">
            {{Number（created_at|dateFormat） }}
        </template>

###    5     组件注册

   组件引入   import moment from 'moment'

   <script>
   filters:{
    dateFormat:(val)=>{
        return moment(val*1000).format('YYYY-MM-DD HH:mm:ss')
    }
   }
   <script/>


       <template slot-scope="{row:{created_at}}">
           {{created_at|dateFormat(created_at*1000)}}
        </template>

### 6  下载插件

​    下载 import moment from 'moment'
​      main.js 里面
​       Vue.prototype.$moment=moment  直接绑定在继承上
​      行内标签-插槽

      <template slot-scope="{row:{created_at}}">
        {{$moment(created_at*1000)}}
      </template>

# mock假数据

mock数据官网  http://mockjs.com/

下载mockjs

```
npm i mockjs
```

在根目录下建立一个mock文件夹  里面建一个index.js

```
// 首先引入mock
const Mock = require("mockjs");
//  设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
})
let configArray = []

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/)
files.keys().forEach(key => {
    if (key === './index.js') return;
    configArray = configArray.concat(files(key).default)
});

//注册所有的mock服务
configArray.forEach((item) => {
    for (let [path, target] of Object.entries(item)) {
        let protocol = path.split('|')
        Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
    }
})
```

然后再main.js中  用require引入这个index文件

```
require('../mock/index')
```

然后在mock创建别的js文件   相当于假的数据 例：

> 1. ```js
>   let demoList = {
>   status: 200,
>   message: 'success',
>   routes: [
>    {
>        id: 1,
>        path: "/students",
>        title: "学生管理",
>        icon: "el-icon-menu",
>        name: "学生管理",
>    },
>    {
>        id: 2,
>        path: "/teacher",
>        title: "教师管理",
>        icon: "el-icon-document",
>        name: "教师管理",
>    },
>    {
>        id: 3,
>        path: "/assistant",
>        title: "助教管理",
>        icon: "el-icon-document",
>        name: "助教管理",
>    }
>   ],
>   }
>   export default {
>   'get|/parameter/query/list': (option) => {
>       return {
>           status: 200,
>           message: 'success',
>           data: demoList
>       }
>   }
>   }
>   ```
> ```
> 
> 
> ```

# 分页

然后就可以用axios直接请求这个/parameter/query/list 这个地址就可以获取到这个文件信息

使用假数据的时候  分页可以使用computed计算属性使用

```
computed: {
    // 通过监听来实现分页
    tableList: {
      get() {
        let tableLists = [];
        //判断当前页是不是第一页  如果是第一页
        if (this.currentPage == 1) {
        //就从数据中用slice（0，当前每页多少条数）
          tableLists = this.tableListCopy.slice(0, this.pageSize);
        } else {
        //如果不是的话 就让当前页数减一*每页的条数   截取到当前页数*每页条数的位置
          tableLists = this.tableListCopy.slice(
            (this.currentPage - 1) * this.pageSize,
            this.currentPage * this.pageSize
          );
        }
        return tableLists;
      },
      set() {},
    },
  },
```

element ui中 分页    每页多少条  和当前第几页  正常给它们赋值即可

# 搜索

联合搜索的话  需要注意的很多

如：禁用 启用搜索  名字搜索  手机号搜索   

搜索分好几种情况   所有要考虑好每一种情况的发生

1.禁用 启用

2.名字

3.手机号

4.启用+名字

5.启用+手机号

6.名字+手机号

7.启用+名字+手机号

  例：

```vue
<template>
    <div>
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
      </el-form-item>
     
    </el-form>
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
      }
    };

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
      set() {},
    },
  },


  methods: {
    // 搜索   进行判断条件  符合那一种就调用那一种的条件
    onSubmit() {
     let status = this.formInline.status
     let name = this.formInline.name
      let phone = this.formInline.mobile
       
     if (status || (status === 0 && name && phone)) {
         this.searchThree()
     } else if (status || (status === 0 && name && !phone)) {
          this.searchStatusAndName()
     } else if (status || (status === 0 && !name && phone)) {
        this.searchStatusAndMobile()
     } else if (!status && name && phone && status !== 0) {
         this.searchNameAndMobile()
     } else if (!status && !name && phone && status !== 0) {
      this.searchPhone()
     } else if (!status && name && !phone && status !== 0) {
        this.searchName()
     } else if (status || (status === 0 && !name && !phone)) {
      this.searchStatus()
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
  },
};
    },
</script>


```

# [H5的pushState与replaceState的用法](https://www.cnblogs.com/cangqinglang/p/11014585.html)



**1.pushState**

**说明**

浏览器不会向服务端请求数据，直接改变url地址，可以理解为变相版的hash；但是不像hash一样，浏览器还是会记录pushState的历史记录，可以使用浏览器的前进，后退的功能。

**使用方法**

pushState（state，title，url）

**参数说明**

state：state对象，可以存放一些数据表示当前状态，可以通过history.state读取

title：可选从参数，目前被忽略了，未来可能有用，建议传递一个空的字符串

url：改变过后的url地址，不允许跨域。

**2.replaceState**

**说明**

不同于pushState，replaceState仅仅只是修改了对应的历史记录，不会再history中留下记录，而pushState会在浏览器上创建一条新的历史记录