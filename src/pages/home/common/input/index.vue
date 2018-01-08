<template> 
    <IViewInput class="zpfe-iview-input"
     ref="input" 
    v-model="selfValue" 
    :type="type" 
    :rows="rows" 
    :placeholder="placeholder"
    :autofocus="autofocus"
    :readonly="readonly"
    :disabled="disabled"
    :maxlength="maxlength"
    @on-enter="onEnter"
    @on-click="onClick"
    @on-change="onChange"
    @on-focus="onFocus"
    @on-blur="onBlur"
    @on-keyup="onKeyup"
    @on-keydown="onKeydown"
    @on-keypress="onKeypress"
    >
    <slot name="prepend"></slot>
    <slot name="append"></slot>
    </IViewInput> 
</template>

<script>
import IViewInput from 'iview/src/components/input'
export default {
  components: {
    IViewInput
  },
  props: {
    placeholder: { default: '' },
    value: { default: undefined },
    type: { default: undefined },
    rows: { default: undefined },
    autofocus: { default: false },
    readonly: { default: false },
    disabled: { default: false },
    maxlength: { default: null }
  },
  data () {
    return { selfValue: this.$props.value }
  },
  watch: {
    value (newValue) {
      this.$data.selfValue = newValue
    },
    selfValue (newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    },
    onEnter () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-enter'].concat(args))
    },
    onClick () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-click'].concat(args))
    },
    onChange () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-change'].concat(args))
    },
    onFocus () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-focus'].concat(args))
    },
    onBlur () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-blur'].concat(args))
    },
    onKeyup () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-keyup'].concat(args))
    },
    onKeydown () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-keydown'].concat(args))
    },
    onKeypress () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-keypress'].concat(args))
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-input {
}
</style>
