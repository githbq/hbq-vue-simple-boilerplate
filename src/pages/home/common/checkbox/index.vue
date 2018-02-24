<template>
  <IViewCheckbox
    onselectstart="return false"
    class="zpfe-iview-checkbox"
    v-model="self_value"
    :label="label"
    :disabled="disabled"
    :indeterminate="indeterminate"
    :size="size"
    :trueValue="trueValue"
    :falseValue="falseValue"
    @on-change="onChange"
  >
    <slot></slot>
    </IViewCheckbox>
</template>

<script>
import IViewCheckbox from 'iview/src/components/checkbox'
export default {
  components: {
    IViewCheckbox
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
    return { self_value: this.$props.value }
  },
  watch: {
    value(newValue) {
      this.$data.self_value = newValue
    },
    self_value(newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    onChange() {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-change'].concat(args))
    },
  }
}
</script>
<style lang="scss">
.zpfe-iview-checkbox {
}
</style>
