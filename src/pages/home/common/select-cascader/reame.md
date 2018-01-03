# 多级下拉列表级联组件 power by biqing.hu

### `props`
1. getData[Function]
```js
  function getData (parentValue, n, level) => {
      //返回一个  Promise 或者 同步返回一个数组 [{key:'',value}] 
        return new Promise(resolve => {
            setTimeout(() => {
                const result = [{ label: 'a' + Math.random(), value: 'a1v_' + level }].concat(n.data)
                resolve(result)
            }, 1000)
        })
   } 
```
2. config[Array]
```js
 {
    value: 'a1v_1', placeholder: '请选择市', label: '市',
    data: []
 }
```

```html
<fieldset >
  <legend>
  SelectCascader
  </legend>
  <SelectCascader/> 
</fieldset> 
```

```js 
import { SelectCascader } from './common'
```