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
