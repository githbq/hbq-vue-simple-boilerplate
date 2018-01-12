<template>  
    <IViewRadioGroup 
     class="zpfe-iview-checkbox-group"
    v-model="self_value"  
    :size="size"  
    >
    <slot></slot>
    </IViewRadioGroup>
</template>

<script>
import IViewRadioGroup from 'iview/src/components/radio-group'
export default {
  components: {
    IViewRadioGroup
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
.zpfe-iview-radio-group {
}
</style>
