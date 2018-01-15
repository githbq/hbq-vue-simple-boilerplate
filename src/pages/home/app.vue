<template>
<div>
<fieldset>
  <legend>page</legend>
  <Page :page-size="20" :total="1000" :showSizer="true"/>
</fieldset>
<hr/>
<DatePicker v-model="abc" type="month"></DatePicker>
abc:{{abc}}
<hr/>
<ZPInput v-model="inputValue" class="fffffffffff"/>
inputValue:{{inputValue}}
<hr/>
<ZPSelect :multiple="false" key-field="value" v-model="selectValue" :data="items" />
<hr/>
<Cascader size="large" v-model="cascaderValue" :data="cascaderData"></Cascader> 
<hr/>
<button @click="showMessage">show message</button>
<hr/>
<Dropdown style="border:2px solid red;margin-left:50px;" :visible="dropdownVisible" :data="dropdownData" trigger="custom">
  <div @click="dropdownVisible=true">你好111111111111111</div> 
  <div slot="content">
    <div style="border:2px solid red;width:500px;height:500px;"> how are you  </div>
    <button @click="closeDropdown"> dropdownVisible:{{dropdownVisible}} </button>
  </div> 
</Dropdown>

<hr/>
<fieldset >
  <legend>
  SelectCascader
  </legend>
  <SelectCascader :config="selectCascaderConfig"/> 
</fieldset> 
<hr/>
<AutoComplete v-model="inputValue" />
<hr/>
<button @click="testNotice">testNotice</button>
<hr/>
<fieldset >
  <legend>
  Upload
  </legend>
   <upload>文件上传</upload>
</fieldset> 
<fieldset >
  <legend>
  Circle
  </legend>
  <zpCircle :percent="80">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </zpCircle>
</fieldset> 
<fieldset >
  <legend>
  AutoComplete
  </legend>
 <AutoComplete
        v-model="value2"
        @on-search="handleSearch2"
        placeholder="input here"
        style="width:200px">
        <span>sfdsfsfsdfdsdf</span>
        <zpOption v-for="item in data2" :value="item" :key="item">{{ item }}</zpOption>
    </AutoComplete>
    data2:{{data2}}
</fieldset> 

</div>
</template>

<script>
import { Circle as zpCircle, Upload, Page, AutoComplete, SelectCascader, Cascader, Select as ZPSelect, DatePicker, Input as ZPInput, Dropdown } from './common'
import Dropdown2 from 'iview/src/components/dropdown'
import { Option as zpOption } from './common/auto-complete'
export default {
  components: {
    zpOption,
    zpCircle,
    Upload,
    Page,
    AutoComplete,
    SelectCascader,
    DropdownMenu: Dropdown2.Menu,
    Dropdown,
    Cascader,
    DatePicker,
    ZPInput,
    ZPSelect
  },
  data() {
    return {
      value2: '',
      data2: [],
      abc: null,
      selectCascaderConfig: [
        {
          value: 'a1v_0',
          label: '省111',
          placeholder: '请选择省',
          data: [
            // { label: 'a' + Math.random(), value: 'a1v_' + 0 }
          ]

        },
        {
          value: 'a1v_1',
          placeholder: '请选择市',
          label: '市22',
          data: []
        },
        {
          value: 'a1v_2',
          placeholder: '请选择区',
          label: '区33',
          data: []
        },
        {
          value: 'a1v_3',
          placeholder: '请选择村',
          label: '村44',
          data: []
        }
      ],
      dropdownData: [{ name: '111', label: 'AAA' }],
      dropdownVisible: false,
      abc: 1441036800000,
      cascaderValue: [],
      inputValue: 'inputValue',
      selectValue: 'New York',
      cascaderData: [
        {
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
        }
      ],
      items: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
    }
  },
  methods: {
    handleSearch2(value) {
      this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
        value + '@qq.com',
        value + '@sina.com',
        value + '@163.com'
      ];
    },
    testNotice() {
      this.$Notice.success({
        title: 'Notification title',
        desc: 'This notification does not automatically close, and you need to click the close button to close.',
        duration: 0
      });
    },
    closeDropdown() {
      this.dropdownVisible = !this.dropdownVisible
    },
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          return
        }
        location.assign('../user/index.html')
      })
    },
    showMessage() {
      this.$Message.info('This is a info tip')
    }
  }
}
</script>

<style>
.login-card {
  width: 800px;
  margin: 100px auto;
}
.login {
  display: block;
  width: 400px;
  margin: 100px auto;
}
.logo-img {
  width: 90px;
}
.logo-text {
  margin-left: 20px;
}
</style>
