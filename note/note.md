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
定义_data(Observer)，代理data中的对象

可以通过`Vue.set`增加数据对象属性，但不能增加data中的根属性。