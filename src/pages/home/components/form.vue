<template>
  <div class="my-form">
    <div class="form-item" v-for="(n,i) in options" :key="i">
      <!-- 表单项的头部文本 -->
      <label class="form-item-header" :class="n.headerClass">{{n.label}}</label>
      <!-- 多行文本框 -->
      <textarea  :class="n.class" v-if="n.type==='textarea'" :value="n.value"></textarea>
      <!-- 多选框 -->
      <label :class="n.labelItemClass"  v-else-if="n.type==='checkbox'" v-for="(item,index) in n.items" :key="index"> 
        {{item.label}}
        <input type="checkbox" :class="n.class"  :value="item.value" v-model="n.value"/>
      </label>
      <!-- 单选框 -->
       <label :class="n.labelItemClass" v-else-if="n.type==='radio'" v-for="(item,index) in n.items" :key="index"> 
        {{item.label}}
        <input type="radio" :class="n.class"  :value="item.value" v-model="n.value"/>
      </label>
      <!-- 默认为普通输入框 -->
      <input v-else type="text" :class="n.class"  :value="n.value" @input="onInput($event,n)" />
      <!-- 提示信息 -->
      <span v-if="n.tipInfo" class="form-item-message-tip"></span>
      <!-- 验证信息 -->
      <span v-if="n.validateInfo" class="form-item-message-validate" :class="{valid:!n.invalid,invalid:n.invalid}"></span>
    </div>  
    <br/>
    {{options}}
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      options: [
        { label: "年龄", name: "age", value: 18 },
        {
          label: "爱好",
          name: "hobby",
          type:'checkbox',
          value: ["play"],
          items: [{ label: "唱歌", value: "sing" },{ label: "玩", value: "play" }]
        },
        {
          label: "性别",
          name: "sex",
          type:'radio',
          value: "1",
          items: [{ label: "男", value: "1" },{ label: "女", value: "0" }]
        }
      ]
    };
  },
  watch: {},
  methods: {
    onInput(e, option) {
      option.value = e.target.value;
    }
  }
};
</script>

<style lang="scss" >
.zp-i-select {
  box-sizing: border-box;
  cursor: pointer;
  color: #495060;
  font-size: 14px;
  line-height: normal;
  display: inline-block;
  position: relative;
  &-label {
    min-width: 50px;
    padding-left: 5px;
    padding-right: 5px;
    line-height: 30px;
    border: 1px solid green;
  }
  &-dropdown {
    min-width: 50px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    line-height: normal;
    background-color: #fff;
    z-index: 99;
    position: absolute;
    top: 32px;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 400px;
  }
  &-dropdown-option {
    padding: 4px;
    &:hover {
      background: #f3f3f3;
    }
  }
}
</style>
