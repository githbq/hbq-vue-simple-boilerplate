# zpfe 日期组件 powerd by iview.datePicker
<https://www.iviewui.com/components/date-picker>

```html
<DatePicker v-model="yourValue" type="month"></DatePicker>
<DatePicker v-model="yourValue"  type="year"></DatePicker>
// 年与月一起选 使用type='month' 同时添加参数 month-only=false
```

```js
{
    data(){
        return {yourValue: new Date('2018-06-06')}
    }
}
```