# zpfe 下拉弹层组件 powered by iview.dropdown
<https://www.iviewui.com/components/dropdown>

> 去掉了 <slot name="list">
> 直接使用 <slot name="content"> 作浮层的内容
> 如果需要使用 dropdownItem 直接传 :data 数组参数即可
```html
<Dropdown :visible="dropdownVisible">
  <div>你好</div> 
    <div slot="content">
        <div style="border:2px solid red;width:500px;height:500px;"> how are you  </div>
        <button @click="closeDropdown"> dropdownVisible:{{dropdownVisible}} </button>
    </div> 
</Dropdown>

```

```js
import {Dropdown} from 'components/common'
//.....vue
{
    data:{
        return {dropdownVisible:false}
    },
    methods:{
        closeDropdown(){
            this.dropdownVisible=!this.dropdownVisible
        }
    }
}
```