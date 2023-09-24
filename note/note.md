## 数据绑定
### `v-bind`和`v-model`
- 数据代理使用Object.defineProperty()实现。

```javascript
Object.defineProperty(person, 'age', {
    value: 18,
    enumerable: true, //控制属性是否可以枚举，默认值是false
    writable:true, //控制属性是否可以被修改，默认值是false
    configurable:true //控制属性是否可以被删除，默认值是false
})
```

Vue对象中的`_data`使用数据劫持Vue中的`data`

[2_data_proxy.html](../vue2/02-数据代理/2_data_proxy.html)

## 遍历列表时key的作用
![img.png](images/img.png)

![img_1.png](images/img_1.png)

## 监视数据变更原理
### 检测对象及属性改变的原理
定义_data(Observer)，代理data中的对象

可以通过`Vue.set`增加数据对象属性，但不能增加data中的根属性。

向响应式对象中增加一个property，并确保新的对象同样是响应式的，且触发视图更新。

### 检测数组改变的原理
- 监测了数组自带的七个方法：push/pop/slice/shift/unshift/sort/reverse.
- `vm.$set(vm._data.array_data, 1, '1')`, `Vue.set(vm.array_data,1,'1')`这种方法也可以修改数组，触发监控

使用包装进行监测。`vm._data.data1.push === Array.prototype.push`这个表达式是false。

## 内置指令
1. `v-text`:更新元素的textContent
2. `v-html`:更新元素的innerHTML
3. `v-if`:如果为true,当前标签才会输出到页面
4. `v-else`:如果为false,当前标签才会输出到页面
5. `v-show`:通过控制display样式来控制显示/隐藏
6. `v-for`:遍历数组/对象
7. `v-on`:绑定事件监听,一般简写为@
8. `v-bind`:绑定解析表达式,可以省略v-bind
9. `v-model`:双向数据绑定
10. `v-cloak`:防止闪现,与css配合:`[v-cloak]{display:none}`

## 生命周期
![img.png](images/img2.png)

## 组件
### 组件名称
1、一个单词：
- School 首字母大写
- school 全小写
2、多个单词：
- `my-school` kebab-case命名
- MySchool CamelCase需要Vue脚手架支持

### 组件标签
- `<school></school>`
- `<school/>` 没有脚手架时，会导致后续组件无法渲染

### 简写方式
`const school = Vue.extend(options)`可以简写为`const school = options`

## VueComponent

## 脚手架
- `npm install -g @vue/cli`
- `vue create <proj_name>`

- `vue inspect > out.js`将vue隐藏的配置输出到out.js

### ref
标签的ref属性可以通过`this.$ref.<ref_value>`访问dom元素或组件实例对象（VueComponent）

### props
```json lines
{
  props: [
    'name',
    'age'
  ]
}

{
  props: {
    name: String
  }
}
{
  props: {
    name: {
      type: String,
      default: "123",
      required: true
    }
  }
}
```
- 使用`<School name="name" />` 如果使用`<School :name="name" />`是动态绑定
- props中的数据比data中的数据先加载，所以data中可以使用props中的数据
- props中的数据是只读的，不能修改。如果需要修改，复制到data中修改。

### mixin
用于组件共享配置
```javascript
//mixin.js
export const me = {
    data() {
      return {
          name: 'xx'
      }  
    },
    methods: {
        showName() {
            console.log("name")
        }
    },
    mounted() {
        console.log("mounted")
    }
}

// app.vue
import {me} from 'mixin.js'
export default {
    mixins: [me]
}

//全局混入
//main.js
Vue.mixin(me)
```

mixins中的先加载，但是会覆盖。
- 普通函数覆盖
- 生命周期钩子会同时调用

### 插件
```javascript
// plugins.js
const obj = {
    install(Vue) {
        console.log('@@@install')
        Vue.mixin({
            data() {
                return {
                    name: 'xx'
                }
            },
        })
        Vue.filter('mySlice', function (){})
        Vue.directive('fbind', {})
        // 给Vue原型上增加一个方法
        Vue.prototype.hello = () => {}
    }
}

export default obj


// main.js
import plugins from 'plugins.js'
Vue.use(plugins)
```

## storage
- localStorage存储的内容需要手动清除
- sessionStorage会随着浏览器的关闭清除
- xxxStorage.getItem(xx)如果value找不到会返回null
- Json.parse(null)结果依然是null
