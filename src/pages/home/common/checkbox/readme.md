# zpfe 多选组件 powered by iview.checkbox

官方API
<https://www.iviewui.com/components/checkbox>
```js
import page from 'components/common/checkbox'
// .
// .
// .
methods:{
  myPageChange() {
      console.log('myPageChange', arguments)
  },
}
// .
// .
// .
```
```html
  <Page @on-change="myPageChange" :total="100">
  </Page>
```