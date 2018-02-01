<template>
  <AutoComplete class="zpfe-iview-auto_complete"
                :data="data"
                v-model="self_value"
                :clearable="clearable"
                :isabled="isabled"
                :size="size"
                :icon="icon"
                :filter-method="filterMethod"
                :transfer="transfer"
                :element-id="elementId"
                :placeholder="placeholder"
                @on-select="onSelect"
                @on-search="onSearch">
    <slot name="input"></slot>
    <div>
      <slot></slot>
    </div>
  </AutoComplete>
</template>

<script>
import AutoComplete from 'iview/src/components/auto-complete'
import debounce from 'lodash.debounce'
export default {
  components: {
    AutoComplete
  },
  props: {
    placeholder: { default: '' },
    value: { default: undefined },
    data: { default: () => [] },
    clearable: { default: false },
    isabled: { default: false },
    size: { default: null },
    icon: { default: null },
    filterMethod: {
      // Function || Boolean
      default: false
    },
    transfer: { default: false },
    elementId: { default: null }
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
    onSelect() {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-select'].concat(args))
    },
    onSearch: debounce(function () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-search'].concat(args))
    }, 250)
  }
}
</script>
<style lang="scss">
.zpfe-iview-auto_complete {
  .ivu-input:focus {
    border: 1px solid #3888ff;
    caret-color: #3888ff;
  }
  .ivu-input {
    border-radius: 0px;
  }
}
</style>
