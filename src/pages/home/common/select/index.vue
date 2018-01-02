<template>  
     <IViewSelect
     class="zpfe-iview-select" 
     v-model="selfValue"
     :multiple="multiple"
     :disabled="disabled"
     :filterable="filterable"
     :clearable="clearable"
     :not-found-text="notFoundText"
     :label-in-value="labelInValue"
     :transfer="transfer"
     :element-id="elementId"
     :placeholder="placeholder"
     @on-change="self_onChange"
     @on-query-change="self_onQueryChange"
     ref="select"
    >
       <IViewOption v-for="item in data" :value="item[$props.valueField]" :key="item[$props.keyField]">{{ item[$props.labelField] }}</IViewOption>
     </IViewSelect>  
</template>

<script>
import IViewSelect from 'iview/src/components/select'
import IViewOption from 'iview/src/components/option'
export default {
  components: {
    IViewSelect,
    IViewOption
  },
  props: {
    multiple: { default: false },
    value: { default: undefined },
    data: { default: () => [] },
    placeholder: { default: '' },
    valueField: { default: 'value' },
    keyField: { default: 'key' },
    labelField: { default: 'label' },
    disabled: { default: false },
    filterable: { default: false },
    clearable: { default: false },
    notFoundText: { default: '无匹配数据' },
    labelInValue: { default: false },
    transfer: { default: false },
    elementId: { default: undefined }
  },
  data() {
    return { selfValue: this.$props.value }
  },
  watch: {
    value(newValue) {
      this.$data.selfValue = newValue
    },
    selfValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    setQuery(...args) {
      return this.$refs.select.setQuery.apply(this, args)
    },
    clearSingleSelect(...args) {
      this.$refs.select.clearSingleSelect.apply(this, args)
    },
    self_onChange(value) {
      let item
      const data = this.$props.data || []
      const valueField = this.$props.valueField || 'value'
      for (let key in data) {
        const n = data[key]
        if (n[valueField] === value) {
          item = n
          break
        }
      }
      this.$emit('on-change', value, item)
    },
    self_onQueryChange(...args) {
      this.$emit.apply(this, ['on-query-change'].concat(args))
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-select {
  .ivu-select-selection {
    border-radius: 0px;
  }
}
</style>
