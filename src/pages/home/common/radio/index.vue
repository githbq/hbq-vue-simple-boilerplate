<template>  
    <IViewRadio
     class="zpfe-iview-radio"
    v-model="selfValue" 
    :label="label" 
    :disabled="disabled" 
    :indeterminate="indeterminate" 
    :size="size" 
    :trueValue="trueValue" 
    :falseValue="falseValue"
    @on-change="onChange" 
    >
    <slot></slot>
    </IViewRadio>
</template>

<script>
import IViewRadio from 'iview/src/components/radio'
export default {
  components: {
    IViewRadio
  },
  props: {
    value: { default: null },
    label: { default: '' },
    disabled: { default: false },
    indeterminate: { default: false },
    size: { default: null },
    trueValue: { default: true },
    falseValue: { default: false }
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
    onChange(...args) {
      this.$emit.apply(this, ['on-change'].concat(args))
    },
  }
}
</script>
<style lang="scss">
.zpfe-iview-radio {
}
</style>
