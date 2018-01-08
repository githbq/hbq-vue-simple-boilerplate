<template> 
     <AutoComplete class="zpfe-iview-auto_complete"
     :data="data"
     :clearable="clearable"
     :isabled="isabled"
     :size="size"
     :icon="icon"
     :filter-method="filterMethod"
     :transfer="transfer"
     :element-id="elementId"
     @on-select="onSelect"
     @on-search="onSearch"
     > 
     </AutoComplete>
</template>

<script>
import AutoComplete from 'iview/src/components/auto-complete'
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
    onSelect () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-select'].concat(args))
    },
    onSearch () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-search'].concat(args))
    }
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
