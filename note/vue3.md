
## 安装
- `npm install -g @vue/cli`

### 使用vue-cli
- `vue create <proj_name>`
- `npm run serve`

### 使用vite

> - 新一代前端构建工具
> - 开发环境无需打包，冷启动
> - 轻量快速的热重载
> - 按需编译，不需要等待整个应用编译完成

1. `npm init vite-app <proj_name>`
2. `npm install`
3. `npm run dev`

> 组件可以没有根标签
## Composition API
### setup
1. 组件中用到的数据、方法，均配置在setup中。
2. 两种返回值：
   - 若返回一个对象，对象中的属性、方法在模板中均可以直接使用
   - 若返回一个渲染函数，则可以自定义渲染内容。`()=>{ return h('h1', 'content') }`

> setup不能是async函数

### ref函数
```vue
<script>
   import {ref} from 'vue'
   export default {
      name: 'App',
      setup() {
         let age = ref(18) // 引用对象
         let job = ref({
            type: 'engineer',
            salary: '100k'
         })
         function changeInfo() {
            age.value = 28
            job.value.salary = '200k'
         }
      }
   }
</script>
```

### reactive函数
- 定义一个对象类型的响应式数据。（基于Proxy。 基本类型只能使用ref）

```vue
<script>
   import {ref, reactive} from 'vue'
   export default {
      name: 'App',
      setup() {
         let age = ref(18) // 引用对象
         let job = reactive({
            type: 'engineer',
            salary: '100k'
         })
         function changeInfo() {
            age.value = 28
            job.salary = '200k'
         }
      }
   }
</script>
```

