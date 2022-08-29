vue3

本课程会带领大家认识vue3的基础,语法,以及创建项目,配置项目,并且认识vue2和vue3的区别.
   Vue3: [https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88](https://v3.cn.vuejs.org/guide/introduction.html#vue-js-是什么)
   Vite:https://vitejs.cn/guide/
  Vue-cli: https://cli.vuejs.org/zh/guide/
  Vscode:https://code.visualstudio.com/

# vue3介绍

1. 什么是 vue
   - Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
2. vue3 的优势
   - vue 最主要的特点就是响应式机制、模板、以及对象式的组件声明语法，而 3.0 对这三部分都做了更改。

# 什么是vite

Vite 是一种新型前端构建工具，能够显著提升前端开发体验 

主要有两部分组成

1.一个开发服务器  他基于**原生ES模块** 提供了丰富的内建功能  如速度快到惊人的**热模块更新（HMR）**

2.一套构建指令 它使用 Rolluo 打包你的代码 并且他是预配置的 可输出用于生产环境的高度优化过的静态资源

Vite意在提供开箱即用的配置 同时它的插件 API 和 JacaScript API 带来了高度的额可扩展性  并有完整的类型支持

**浏览器支持**

默认的构建目标浏览器是能 [在 script 标签上支持原生 ESM](https://caniuse.com/es6-module) 和 [原生 ESM 动态导入](https://caniuse.com/es6-module-dynamic-import)。传统浏览器可以通过官方插件 [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 支持



# 为什么选择vite

在浏览器支持 ES 模块之前，JavaScript 并没有提供的原生机制让开发者以模块化的方式进行开发。这也正是我们对 “打包” 这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。

时过境迁，我们见证了诸如 [webpack](https://webpack.js.org/)、[Rollup](https://rollupjs.org/) 和 [Parcel](https://parceljs.org/) 等工具的变迁，它们极大地改善了前端开发者的开发体验。

然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。我们开始遇到性能瓶颈 —— 使用 JavaScript 开发的工具通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用 HMR，文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。

Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，且越来越多 JavaScript 工具使用编译型语言编写。

# 利用vite创建项目  v3

### 使用npm 

1.

```npm
npm init vite@latest   
```

2.创建项目名

3.选择vue

4.选择vue-ts

5.cd 项目名

6. npm install     下载依赖
7. npm run dev      启动项目

# vue3

 vue3不需要根组件的包裹 可以直接使用  但是vue2不可以  

   \*   1.vue3是声明函数式调用 而不是构造函数，创建实例

   \*   2.绑定方式不一样

   \*   3.渲染没有显示的render渲染

   \*   4.vue3的语法不向下兼容  但是在vue2可以获取到setup中的数据

   \* 

   \* 

###    \* setup 

   \*    在vue3中是一个新的配置项  值为一个函数

   \*    1.setup 是所有组合APi 存放的地方

   \*    2.组件中用到的 数据 方法中 都要配置在setup中

   \*    3.setup有两种返回值    

   \*         1.若返回一个对象 这个对象中的属性 方法 在模板中可以直接使用

   \*         2.若返回一个渲染函数 则可以获得自定义渲染内容 （了解） 要求是将h的渲染函数返回回去

   \* setup 执行的时机  会在beforeCreate之前执行一次    this是undefined

###    \* 注意点：

   \*   1.尽量不要与vue2配置混用

   \*        vue2配置中（data，methods 。computed）中可以访问到setup中的属性 方法

   \*        但在setup中不能访问vue2的配置   没有this

   \*      ：如果重名的话 setup优先

   \*   2. setup不能是一个async函数 因为返回值不再是return的对象 而是promise  模板看不到return对象中的属性 

   \* 

   \*  1 ref  定义一个响应式的数据   ：

语法

```
const xxx=ref(value)
```

   \*         创建一个包含响应式数据的引用对象 

   \*          在js中操作数据需要在后面加上xxx.value   

   \*          在页面渲染的时候 则不需要添加value  会自动解析  直接接 <div>{{xxx}}</div>

   \*        ref多用于定义基本属性   只能解析.value  不能解析对象深层数据

   \* 

   \*   reactive 对象类型的数据  内部求助了vue3中的一个新的函数  reactive函数  原理是es6中的proxy

   \*        reactive  只能用于obj   可以吧数据解析成一个proxy对象

#  Vue3中的响应式原理

### vue2中的响应式

实现原理  对象类型：通过Object.defineProperty()对属性的读取 ，修改进行拦截（数据劫持）

数组类型  通过重写更新数组的一系列方法来实现拦截（对数组的变更方法进行了包裹）

```js
Object.defineProperty(data,'count',{
    get(){},
    ser(){}
})
```

存在的问题  ：

### Vue3中响应式

实现原理：

通过proxy（代理）拦截对象中任意属性的变化 包括 属性值的读写 属性的添加 属性的删除等

通过Reflect（反射） 对源对象的属性进行操作

# ref使用

- 接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象仅有一个 .value property，指向该内部值。

- ref 可以定义基本数据类型（字符串 数字 布尔值 ） 和 数组

- ```
  <template>
    <div class="home">
      <h1>使用ref定义的变量num值为:{{ num }}</h1>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  //引入 ref api
  export default {
    setup(props, ctx) {
      const num = ref(10);
      //使用ref定义基本变量num
      return { num };
    },
  };
  </script>
  ```

  - 注意：使用 ref 定义的变量在模版中用插值语句直接使用，因为 ref 方法定义的变量本质上是一个对象，所以在 setup 函数中使用的时候需要加上.value

  - 我们也可以定义一个函数来修改 num 的值：

  - 注意：不管是 ref 还是函数都需要 return 出去才能在模版中使用

  - ```
    <template>
      <div class="home">
        <h1>使用ref定义的变量num值为:{{ num }}</h1>
        <button @click="handler">num++</button>
      </div>
    </template>
    <script>
      import { ref } from "vue";
      //引入ref api
      export default {
        setup(props, ctx) {
          const num = ref(10);
          //使用ref定义基本变量num
    
          const handler = () => {
            num.value++;
          };
          //定义handler方法让num的值++
    
          return { num, handler };
        },
      };
    </script>
    
    ```

    # reactive 的使用

    reactive 返回对象的响应式副本

    reactive 的用法与 ref 的用法相似，也是将数据变成响应式数据，当数据发生变化时 UI 也会自动更新。不同的是 ref 用于基本数据类型，而 reactive 是用于复杂数据类型，比如对象。

    使用 reactive 定义一个响应式的对象 userList，代码如下

    - ```
      <script>
      import { reactive } from "vue";
      
      export default {
        setup(props, ctx) {
          const data = reactive({
            userList: [
              {
                name: "小明",
              },
              {
                name: "小丽",
              },
              {
                name: "小红",
              },
            ],
          });
          return { data };
        },
      };
      </script>
      ```

      #  toRefs 的使用

      toRefs()函数可以将 reactive()创建出来的响应式对象，转换为普通对象，只不过这个对象上的每个属性节点，都是 ref()类型的响应式数据

      我们会发现在刚刚的案例中如果想要在模版中使用 reactive 定义的变量就需要这么写 data.userList，加上 data 后变得很不方便，我们可以通过 toRefs 函数把 reactive 定义的变量转化一下在模版中就可以直接使用了：

      ```
      <template>
        <div class="">
          <ul>
            <li v-for="(item, index) in userList" :key="index">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </template>
      
      <script>
      import { reactive, toRefs } from "vue";
      
      export default {
        setup(props, ctx) {
          const data = reactive({
            userList: [
              {
                name: "小明",
              },
              {
                name: "小丽",
              },
              {
                name: "小红",
              },
            ],
          });
          return { ...toRefs(data) };
        },
      };
      </script>
      
      <style lang="scss"></style>
      ```

      

# 计算属性和监听属性

###     计算属性

computed函数  于vue2中的computed配置的功能一样

vue2中的

```js
let person = reactive({
      xing: '升',
      ming: '班',
      a: {
        b: {
          c: {
            name: '李四'
          }
        }
      }
    })

//   简写 计算属性
      let quan=computed(()=>{
       return person.xing + '-' + person.ming
      })

      //计算属性   完整代码
     let quan = computed({
       get() {

         return person.xing + '-' + person.ming
       },
      set(value) {
       console.log(value);
        let arr = value.split('-')
         person.xing = arr[0]
        person.ming = arr[1]

      }
    })
```

vue3的写法

```js
import {computed} from ‘vue’

setup(){
    //简写
    let fullName=computed(()=>{
        return   //返回的值
    })
    
    let fullName =computed(()=>{
        get(){
            return //返回的值
        },
         set(val){
                
         }
    })
}
```



### 监听属性

和vue2中的配置一样

监听reactive定义的响应式数据的话  oldValue无法正确获取 deep配置失效

​     \* 家庭reactive定义的响应式数据中的某个属性的时候 deep配置有效  

```ts
//情况一  监视ref定义的响应式数据
watch(sum,(newValue,oldValue)=>{
    console.log('sum变化了'，newValue,oldValue)
})
//情况二 监听多个ref定义的响应式数据
watch([sum,msg],(newValue,oldValue)=>{
    console.log('sum变化了'，newValue,oldValue)
})
/**
情况三 监听reactive定义的额响应式数据
    若监听的是reactive定义的数据  则oldValue无法获取  并且强制开启了深度家庭
   
*/
    watch(person,(newValue,oldValue)=>{
      console.log(newValue,"newValue");
      console.log(oldValue,"oldValue");
     }，{deep:false,immediate:true})//此处的deep配置已经失效
//情况四 监听reactive定义的额响应式数据中的某个属性
    watch(() => person.name, (newValue, oldValue) => {
      console.log(newValue, "newValue");
      console.log(oldValue, "oldValue");
    }，{deep:false,immediate:true}) 
 //情况五 监听reactive定义的额响应式数据中的某些属性     
        watch([() => person.name,() => person.age], (newValue, oldValue) => {
      console.log(newValue, "newValue");
      console.log(oldValue, "oldValue");
    }，{deep:false,immediate:true})
 //情况六  如果监听的是一个多层对象  这个时候 deep是可以生效的
           watch(() => person.Obj, (newValue, oldValue) => {
      console.log(newValue, "newValue");
      console.log(oldValue, "oldValue");
    }，{deep:false,immediate:true}) 
```

# watchEffect函数

正是因为每次监听一个数据属性的时候  都要从新写一遍  所以诞生了watchEffect函数

 watch的套路是  既要指明监视的属性  也要指明监视的回调

​     \* watchEffect的套路是  不用指明监视拿个属性 监视的回调中用到哪个属性 就监视哪个属性

​     \*  watchEffect 有点像计算属性 computed；

​     \*       但是computed注重的是计算出来的值（回调函数的返回值） 所以必须要写返回值

​     \*        watchEffect更注重的是过程（回调函数的函数体） 所以不用等返回值

```
  watchEffect(() => {
      const x1 = person.xing
      const x2 = person.ming
      console.log(x1, x2);

    })
```

# watch 和 watchEffect 的区别

1. 不需要手动传入依赖
2. 每次初始化时会执行一次回调函数来自动获取依赖
3. 无法获取到原值，只能得到变化后的值

# 声明周期

### vue2的生命周期--setup()的生命周期

```
Vue2--------------vue3
beforeCreate ===> setup()
created ===> setup()
beforeMount ===> onBeforeMount
mounted ===> onMounted
beforeUpdate ===> onBeforeUpdate
updated ===> onUpdated
beforeDestroy ===> onBeforeUnmount
destroyed ===> onUnmounted
activated ===> onActivated
deactivated ===> onDeactivated
errorCaptured ===> onErrorCaptured
```

***vue2的生命周期和vue3的生命周期基本上一样 只是卸载的声明周期变化了***  

***（beforeDestroy ====>onBeforeUnmount）***

***（destroyed ===>onUnmounted）***

> **setup()的生命周期执行速度要快于vue3的生命周期的**

# 自定义hook

- ·什么是hook ：--本质是一个函数，吧setup函数使用的Composition API进行了封装

- 类似于vue2中的mixin

- 自定义hook的优势：复用代码，让setUp中的逻辑更清楚易懂

- 创建hook的话  文件开头是要use开头的js文件

  

