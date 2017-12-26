# zpfe 选择器组件 powerd by iview.select
<https://www.iviewui.com/components/select>

```html
<hr/>
<ZPSelect :multiple="true" value-field="value" label-field="label" key-field="value" v-model="selectValue" :data="items" />
<hr/>
```
```js
{
    data(){
        return {
          selectValue: [],
          items: [
          {
            value: 'New York',
            label: 'New York'
          },
        }
    }
}
```