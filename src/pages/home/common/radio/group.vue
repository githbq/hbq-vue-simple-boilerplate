<template>  
    <IViewRadioGroup 
     class="zpfe-iview-checkbox-group"
    v-model="selfValue"  
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

  }
}
</script>
<style lang="scss">
.zpfe-iview-radio-group {
}
</style>
