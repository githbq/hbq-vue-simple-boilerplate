<template> 
     <IViewSelect
     class="zpfe-iview-select" 
     v-model="selfValue"
     @on-change="onChange"
     @on-query-change="onQueryChange"
     :placeholder="placeholder">
       <Option v-for="item in data" :value="item[$props.valueField]" :key="item[$props.keyField]">{{ item[$props.labelField] }}</Option>
     </IViewSelect> 
</template>

<script>
import IViewSelect from 'iview/src/components/select'
import IViewOption from 'iview/src/components/option'
export default {
  props: {
    value: { default: undefined },
    data: { default: () => [] },
    placeholder: { default: '' },
    valueField: { default: 'value' },
    keyField: { default: 'key' },
    labelField: { default: 'label' }, 
    onChange: { default: null },
    onQueryChange: { default: () => function () { } },
    onChange: { default: () => function () { } }
  },
  data() {
    return { selfValue: '' }
  },
  watch: {
    value(newValue) {
      this.$data.selfValue = newValue
    },
    selfValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  components: {
    IViewSelect,
    IViewOption
  },
  methods: {

  }
}
</script>
<style lang="scss">
.zpfe-iview-select {
}
</style>
