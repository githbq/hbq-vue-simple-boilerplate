# zpfe 分页组件 powered by iview.page

官方API
<https://www.iviewui.com/components/page>
```js
import page from 'components/common/page.vue'
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