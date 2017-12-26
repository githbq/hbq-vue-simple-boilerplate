<template> 
    <IViewInput class="zpfe-iview-input" :class="className" ref="input" 
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
  props: {
    placeholder: { default: '' },
    value: { default: undefined },
    type: { default: undefined },
    rows: { default: undefined },
    className: { default: '' },
    autofocus: { default: false },
    readonly: { default: false },
    disabled: { default: false },
    maxlength: { default: null }
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
  components: {
    IViewInput
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    onEnter() {
      this.$emit.apply(this, ['on-enter'].concat(arguments))
    },
    onClick() {
      this.$emit.apply(this, ['on-click'].concat(arguments))
    },
    onChange() {
      this.$emit.apply(this, ['on-change'].concat(arguments))
    },
    onFocus() {
      this.$emit.apply(this, ['on-focus'].concat(arguments))
    },
    onBlur() {
      this.$emit.apply(this, ['on-blur'].concat(arguments))
    },
    onKeyup() {
      this.$emit.apply(this, ['on-keyup'].concat(arguments))
    },
    onKeydown() {
      this.$emit.apply(this, ['on-keydown'].concat(arguments))
    },
    onKeypress() {
      this.$emit.apply(this, ['on-keypress'].concat(arguments))
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-input {
}
</style>
