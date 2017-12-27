# zpfe 弹窗组件 powerd by iview.modal

官方API
<https://www.iviewui.com/components/modal>
```js
import page from 'components/common/modal.vue'
// .
// .
// . 
 data() {
    return {
      showModal: false
} 
// .
// .
// .
```
```html
  <Modal v-model="showModal">
    <span>hello modal</span>
  </Modal>
```