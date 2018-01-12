<template>  
  <IViewCascader 
  class="zpfe-iview-cascader"
  v-model="self_value" 
  :data="data"
  :render-format="renderFormat"
  :disabled="disabled"
  :clearable="clearable"
  :placeholder="placeholder"
  :trigger="trigger"
  :change-on-select="changeOnSelect"
  :size="size"
  :load-data="loadData"
  :filterable="filterable"
  :not-found-text="notFoundText"
  :transfer="transfer"
  :element-id="elementId"
  @on-change="onChange"
  @on-visible-change="onVisibleChange"
  >
  </IViewCascader>
</template>

<script>
import IViewCascader from 'iview/src/components/cascader'
export default {
  components: {
    IViewCascader
  },
  props: {
    data: { default: [] },
    value: { default: undefined },
    renderFormat: { default: label => label },
    disabled: { default: false },
    clearable: { default: true },
    placeholder: { placeholder: '请选择' },
    trigger: {
      // 'click' 'hover'
      default: 'click'
    },
    changeOnSelect: { default: false },
    size: {
      type: String,
      // 'large' 'small'
      default: undefined
    },
    loadData: {
      type: Function,
      default: undefined
    },
    filterable: {
      type: Boolean,
      default: false
    },
    notFoundText: { default: '无匹配数据' },
    transfer: { type: Boolean, default: false },
    elementId: { type: String, default: undefined }
  },
  data () {
    return { self_value: this.$props.value }
  },
  watch: {
    value (newValue) {
      this.$data.self_value = newValue
    },
    self_value (newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    onChange () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-change'].concat(args))
    },
    onVisibleChange () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-visible-change'].concat(args))
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-cascader {
}
</style>
