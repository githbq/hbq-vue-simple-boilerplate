<template>
  <div class="my-form">
    <div class="form-item"
         v-for="(n,i) in options"
         :key="i"
         :class="{valid:!n.invalid,invalid:n.invalid}">
      <!-- 表单项的头部文本 -->
      <label class="form-item-left"
             :class="n.headerClass">{{n.label}}:</label>
      <!-- 多行文本框 -->
      <div v-if="n.type==='textarea'"
           class="form-item-middle">
        <textarea :class="n.class"
                  :value="n.value"
                  @change="change($event,n)"></textarea>
      </div>
      <!-- 多选框 -->
      <div v-else-if="n.type==='checkbox'"
           class="form-item-middle">
        <label :class="n.labelItemClass"
               v-for="(item,index) in n.items"
               :key="index">
          <input type="checkbox"
                 :class="n.class"
                 :value="item.value"
                 v-model="n.value"
                 @change="change($event,n)" />
          <span class="form-item-radio-text">{{item.label}}</span>
        </label>
      </div>
      <!-- 单选框 -->
      <div v-else-if="n.type==='radio'"
           class="form-item-middle">
        <label :class="n.labelItemClass"
               v-for="(item,index) in n.items"
               :key="index">
          <input type="radio"
                 :class="n.class"
                 :value="item.value"
                 v-model="n.value"
                 @change="change($event,n)" />
          <span class="form-item-radio-text">{{item.label}}</span>
        </label>
      </div>
      <!-- 默认为普通输入框 -->
      <div v-else
           class="form-item-middle">
        <input type="text"
               :class="n.class"
               :value="n.value"
               @input="onInput($event,n)"
               @change="change($event,n)" />
      </div>
      <div class="form-item-right">
        <!-- 提示信息 -->
        <span v-if="n.tipInfo"
              class="form-item-message_tip"></span>
        <!-- 验证信息 -->
        <span v-if="n.invalidInfo"
              class="form-item-message_invalid">{{n.invalidInfo}}</span>
      </div>
    </div>
    <!-- <br/> options {{options}} -->
    <br/> 表单验证结果： {{validateResult}}
    <br/>
    <button @click="validate">执行表单验证</button>
    <br/> 表单数据结果： {{formData}}
    <br/>
    <button @click="getFormData">获取表单数据</button>
  </div>
</template>
<script>
import debounce from 'lodash.debounce'
export default {
  props: {},
  data () {
    return {
      validateResult: '',
      formData: {},
      base: {
        validate () {
          if (this.validate && !this.validate()) {
            this.invalid = true
            this.invalidInfo = '验证不通过'
          }
        }
      },
      options: [
        {
          label: '年龄', name: 'age', value: 18,
          validate () {
            return !!this.value
          },
          invalid: false,
          invalidInfo: null,
        },
        {
          label: '爱好',
          name: 'hobby',
          type: 'checkbox',
          value: [],
          items: [{ label: '唱歌', value: 'sing' }, { label: '玩', value: 'play' }],
          validate () {
            return !!this.value.length
          },
          invalid: false,
          invalidInfo: null,
        },
        {
          label: '性别',
          name: 'sex',
          type: 'radio',
          value: '1',
          items: [{ label: '男', value: '1' }, { label: '女', value: '0' }],
          validate () {
            return !!this.value
          },
          invalid: false,
          invalidInfo: null,
        }
      ]
    };
  },
  watch: {},
  methods: {
    onInput (e, option) {
      option.invalid = false
      option.invalidInfo = null
      option.value = e.target.value;
    },
    getFormData () {
      this.formData = {}
      this.options.forEach(n => {
        this.formData[n.name] = n.value
      })
    },
    validate () {
      this.validateResult = ''
      if (this.options.filter(n => {
        const validateResult = n.validate && !n.validate()
        if (validateResult) {
          n.invalid = true
          n.invalidInfo = '验证不通过'
          console.log(n)
        }
        return validateResult
      }).length > 0) {
        this.validateResult = '验证不通过'

        return false
      } else {
        this.validateResult = '验证通过'
        return true
      }
    },
    change: debounce(function (e, option) {
      option.invalid = false
      option.invalidInfo = null
      if (option.validate && !option.validate()) {
        option.invalid = true
        option.invalidInfo = '验证不通过'
      }
    }, 50)
  }
};
</script>

<style lang='scss' >
.my-form {
  button {
    padding: 10px 15px;
  }
}
.form-item {
  padding: 5px;
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  .form-item-left {
    flex: 0 0 80px;
  }
  .form-item-middle {
    flex: 1;
  }
  .form-item-right {
    flex: 0 0 100px;
  }
  .form-item-message_invalid {
    margin-left: 20px;
    color: red;
  }
  // 验证不通过
  &.invalid {
    border: 1px solid red;
  }
  // 验证通过
  &.valid {
    // border: 1px solid green;
  }
  // 用户未输入
  &.pristine {
    border: none;
  }
  // 用户已输入
  &.dirty {
  }
}
</style>
