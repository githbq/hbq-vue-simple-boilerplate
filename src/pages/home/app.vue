<template>
<div>
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
</div>
</template>

<script>
import { Cascader, Select as ZPSelect, DatePicker, Input as ZPInput } from './common'
export default {
  components: {
    Cascader,
    DatePicker,
    ZPInput,
    ZPSelect
  },
  data() {
    return {
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
