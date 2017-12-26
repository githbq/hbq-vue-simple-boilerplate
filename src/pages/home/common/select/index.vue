<template>
  <div class="zpfe-iview-select" :class="className">
     <IViewSelect
     v-model="selfValue"
     @on-change="onChange"
     @on-query-change="onQueryChange"
     :placeholder="placeholder">
       <Option v-for="item in data" :value="item[$props.valueField]" :key="item[$props.keyField]">{{ item[$props.labelField] }}</Option>
     </IViewSelect>
  </div>
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
    className: { default: '' },
    onChange: { default: null },
    onQueryChange: { default: () => function () { } },
    onChange: { default: () => function () { } }
  },
  data () {
    return { selfValue: '' }
  },
  watch: {
    value (newValue) {
      this.$data.selfValue = newValue
    },
    selfValue (newValue) {
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
