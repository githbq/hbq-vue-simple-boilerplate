<template>  
    <IViewCheckboxGroup 
     class="zpfe-iview-checkbox-group"
    v-model="self_value"  
    :size="size"  
    >
    <slot></slot>
    </IViewCheckboxGroup>
</template>

<script>
import IViewCheckboxGroup from 'iview/src/components/checkbox-group'
export default {
  components: {
    IViewCheckboxGroup
  },
  props: {
    value: { default: null },
    size: { default: null }
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

  }
}
</script>
<style lang="scss">
.zpfe-iview-checkbox-group {
}
</style>
