<template>  
     <IViewSelect
     class="zpfe-iview-select" 
     v-model="selfValue"
     :multiple="multiple"
     @on-change="self_onChange"
     @on-query-change="self_onQueryChange"
     :placeholder="placeholder">
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
}
</style>
