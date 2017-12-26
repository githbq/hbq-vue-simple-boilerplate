<template>
<div>
<hr/>
<DatePicker  type="month"></DatePicker>
abc:{{abc}}
<hr/>
<ZPInput v-model="inputValue" class="fffffffffff"/>
inputValue:{{inputValue}}
<hr/>
<ZPSelect :multiple="true" key-field="value" v-model="selectValue" :data="items" />
<hr/>
</div>
</template>

<script>
import { Select as ZPSelect, DatePicker, Input as ZPInput } from './common'

export default {
  components: {
    DatePicker,
    ZPInput,
    ZPSelect
  },
  data() {
    return {
      abc: new Date('2018-06-06'),
      inputValue: 'inputValue',
      selectValue: [],
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
