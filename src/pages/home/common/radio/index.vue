<template>
  <IViewRadio onselectstart="return false"
              class="zpfe-iview-radio"
              v-model="self_value"
              :label="label"
              :disabled="disabled"
              :indeterminate="indeterminate"
              :size="size"
              :trueValue="trueValue"
              :falseValue="falseValue"
              @on-change="onChange">
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
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-radio {
}
</style>
