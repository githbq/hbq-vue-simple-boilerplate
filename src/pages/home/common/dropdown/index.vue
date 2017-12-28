<template> 
    <Dropdown class="zpfe-iview-dropdown" 
    :trigger="trigger"
    :visible="visible"
    :placement="placement"
    :transfer="transfer"
    @on-click="onClick"
    @on-visible-change="onVisibleChange"
    > 
    <slot>
    </slot>
    <slot name="list"></slot>
    </Dropdown> 
</template>

<script>
import Dropdown from 'iview/src/components/dropdown'
export default {
  components: {
    Dropdown
  },
  props: {
    trigger: {
      // 'hover' 'click' 'custom'
      default: 'click'
    },
    visible: { default: true },
    placement: { default: 'bottom' },
    transfer: { default: false }
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
    onClick(...args) {
      this.$emit.apply(this, ['on-click'].concat(args))
    },
    onVisibleChange(...args) {
      this.$emit.apply(this, ['on-visible-change'].concat(args))
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-dropdown {
}
</style>
