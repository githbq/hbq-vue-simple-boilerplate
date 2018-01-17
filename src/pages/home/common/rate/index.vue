<template> 
    <IViewRate class="zpfe-iview-rate"
    v-model="self_value"
     :count="count"
     :allow-half="allowHalf" 
     :disabled="disabled"
     :show-text="showText"
    @on-change="onChange"  
    >
    <slot name="prepend"></slot>
    <slot name="append"></slot>
    </IViewRate> 
</template>

<script>
import IViewRate from 'iview/src/components/rate'
export default {
  components: {
    IViewRate
  },
  props: {
    count: { default: 5 },
    value: { default: null },
    allowHalf: { default: false },
    disabled: { default: false },
    showText: { default: false }
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
.zpfe-iview-rate {
}
</style>
