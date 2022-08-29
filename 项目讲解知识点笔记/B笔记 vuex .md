# Vuex 是什么？

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

# vuex5大核心

### state

 存储数据的地方

### getters

Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

### mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

### action

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

需要通过commit调用mutation的方法来实现修改state中的数据

### module

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

```js
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

# 命名空间  namespaced: true

默认情况下，模块内部的 action、mutation 和 getter 是注册在**全局命名空间**的——这样使得多个模块能够对同一 mutation 或 action 作出响应

如果希望你的模块具有更高的封装度和复用性，你可以通过添加 `namespaced: true` 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名

# vuex的写法

1：基本写法

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

```

2：代码抽离写法  第一种 两者分开查询

```js
/**存放数据*/
const state={
    
},
/**定义异步方法*/
const actions={
    
},
/**定义直接修改数据的方法*/
const mutations={
    
},
      
export defoult{
   namespaced: true,
   state,
   actions,
    mutations
  }
```

3.写成模块抽离

```js
const tabList={
 state: {
  },
  getters: {
  },
  mutations: {
  },
}


export defoult tabList
```

# 在组件中调用五大核心的属性和方法

1.挂载在原型上

```js
1. state   --this.$store.state.属性名
2. mutations --this.$store.commit("方法名",参数)
3. actions   this.$store.dispatch("方法名",参数)
4. getters    this.$store.$getters.方法名
5. modules    this.$store.state.模块名
```

2.映射函数

​    在组件中通过import 导入映射函数  挂载

```js
例：import {mapState,mapMutations,mapactions,mapGetters} from 'vuex'

state --mapStates  挂载computed上
    computed:{
          ...mapState(['data'])
    }

mutations --mapMutations 挂载到methods中
      methods：{
          ...mapMutations(['方法名'])
      }

actions --mapActions 挂载到methods中

getters --mapGetters 挂载到computed中

```

# vuex中的数据刷新丢失怎么办 （数据持久化）

实现数据的持久化可以在每次操作数据的时候保存到本地存储也可以使用插件

```
   cnpm  i    vuex-persistedstate  --save
```

 导入插件 store

```
  import persistedstateState  from ‘vuex-persistedstate’
  
  //默认使用localStorage
  plugins:[
       persistedstateState()
  ]
  //还可以配置成sessionStorage
  plugins:[
       persistedstateState({
           storage:window.sessionStorage
        })
  ]
  
```

# 应用场景

Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。