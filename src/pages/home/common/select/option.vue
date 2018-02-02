<template>  
     <IViewOption class="zpfe-iview-option"
     :value="value"
     :label="label"
     :disabled="disabled"
      onselectstart="return false"
     >
        <slot></slot>
     </IViewOption>
</template>

<script>
import IViewOption from 'iview/src/components/option'
export default {
  components: {
    IViewOption
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },

  methods: {

  }
}
</script>
<style lang="scss">
.zpfe-iview-option {
}
</style>
