# vue-components-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
### vue组件

------

> 组件通信

- 父组件向子组件传值

  - props

    **单向传值**

  - provide/inject

    **provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。**

  - \$root/$parent

    **子组件中调用`this.$root/this.$parent`的方式响应父组件的值**

  - \$boardCast

    **广播子元素 父组件向所有子组件传值**

- 子组件向父组件传值

  - $on/\$emit

    **\$on监听当前实例上的自定义事件，可以通过\$emit触发。回调函数会接收所有传入事件触发函数的额外参数。**

  - ref/$children

    **父组件调用`this.$refs.xxx`响应子组件的值**

  - \$dispatch

    **后代向祖代传值**

- 全局响应

  - $bus

    **创建一个Bus类，负责事件派发,监听及回调管理**

  - Vue.observable(object)

    **Version: >2.6**

    **让一个对象可响应。Vue 内部会用它来处理 `data` 函数返回的对象。**

  - vuex

- mixins/extend 侵入式的拓展组件

  - (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

    当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。

    比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先

    同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子**之前**调用。

    - `mixins` 带来了隐式依赖
    - `mixins` 与 `mixins` 之间，`mixins` 与组件之间容易导致命名冲突
    - 由于 `mixins` 是侵入式的，它改变了原组件，所以修改 `mixins` 等于修改原组件，随着需求的增长 `mixins` 将变得复杂，导致滚雪球的复杂性。

  - 允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)

- hoc.js 非侵入式的拓展组件

  **接收一个组件作为参数，返回一个新的组件**

  **接收一个纯对象，并返回一个新的纯对象**



> class写法
>
> ```js
> npm ``install` `vue-class-component vue-property-decorator --save-dev
> ```

**undefined**不会被响应 **null**可以被响应



> Vue-typescript

```js
npm install typescript ts-loader --save-dev
npm install vue-property-decorator --save-dev
npm install vuex-class --save-dev
```

- Vue-cli3

```
vue add typescript
```

> 装饰器用法
>
> https://blog.csdn.net/weixin_42659625/article/details/81002985



## 参考文献

https://zhuanlan.zhihu.com/p/60250686

https://github.com/vuejs/vue-class-component

https://github.com/kaorun343/vue-property-decorator

[http://hcysun.me/2018/01/05/%E6%8E%A2%E7%B4%A2Vue%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6/](

