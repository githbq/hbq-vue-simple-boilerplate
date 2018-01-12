<template> 
  <Dropdown 
    class="zpfe-iview-dropdown"
    :trigger="trigger"
    :visible="visible"
    :placement="placement"
    :transfer="transfer"
    @on-click="onClick"
    @on-visible-change="onVisibleChange"
    >
        <slot></slot>
        <DropdownMenu slot="list" class="zpfe-iview-dropdown-menu" v-if="self_visible">
            <slot  v-if="self_visible" name="content"></slot>
            <DropdownItem v-if="self_visible" class="zpfe-iview-dropdown-item" v-for="(item,index) in data" :key="index" :name="item[$props.nameField]">
            <slot name="item" :item="item">
            {{item[$props.labelField]}} 
            </slot>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template> 
<script>
  import Dropdown from 'iview/src/components/dropdown'
  export default {
    components: {
      Dropdown,
      DropdownMenu: Dropdown.Menu,
      DropdownItem: Dropdown.Item
    },
    props: {
      data: { default: () => [] },
      labelField: { default: 'label' },
      nameField: { default: 'name' },
      trigger: {
        // 'hover' 'click' 'custom'
        default: 'click'
      },
      visible: { default: false },
      placement: { default: 'bottom-start' },
      transfer: { default: false }
    },
    data () {
      return {
        selfValue: this.$props.value,
        self_visible: this.$props.visible
      }
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
      onClick () {
        const args = [].slice.call(arguments)
        this.$emit.apply(this, ['on-click'].concat(args))
      },
      onVisibleChange (visible) {
        if (visible) {
          this.self_visible = visible
        } else {
          setTimeout(() => this.self_visible = visible, 200)
        }
        const args = [].slice.call(arguments)
        this.$emit.apply(this, ['on-visible-change'].concat(args))
      }
    }
  }
</script>
<style lang="scss">
  .zpfe-iview-dropdown {
  }
</style>
