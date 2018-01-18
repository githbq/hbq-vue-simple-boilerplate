# zpfe 弹窗组件 powered by iview.modal

官方API
<https://www.iviewui.com/components/modal>
```js
import { Modal } from 'components/common'
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