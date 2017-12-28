<template>  
     <IViewSelect
     class="zpfe-iview-select" 
     v-model="selfValue"
     :multiple="multiple"
     @on-change="onChange"
     @on-query-change="onQueryChange"
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
    onChange: { default: null },
    onQueryChange: { default: () => function () { } },
    onChange: { default: () => function () { } }
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

  }
}
</script>
<style lang="scss">
.zpfe-iview-select {
}
</style>
