# zpfe 下拉级联组件 powered by iview.cascader
<https://www.iviewui.com/components/cascader>

```html
<Cascader v-model="cascaderValue" :data="cascaderData"></Cascader> 
```

```js
 data () {
   return {
        cascaderValue:[],
        cascaderData: [{
        value: 'zhejiang',
        label: '浙江',
        children: [{
          value: 'hangzhou',
          label: '杭州',
          children: [{
            value: 'xihu',
            label: '西湖'
          }]
        }]
      }, {
        value: 'jiangsu',
        label: '江苏',
        disabled: true,
        children: [{
          value: 'nanjing',
          label: '南京',
          children: [{
            value: 'zhonghuamen',
            label: '中华门'
          }]
        }]
      }],
            }
        }
```