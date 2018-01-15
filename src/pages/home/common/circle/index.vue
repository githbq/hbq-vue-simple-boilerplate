<template> 
    <iviewCircle class="zpfe-iview-circle"
    :percent="percent"
    :size="size"
    :stroke-linecap="strokeLinecap"
    :stroke-width="strokeWidth"
    :stroke-color="strokeColor"
    :trail-width="trailWidth"
    :trail-color="trailColor"
    >
    <slot></slot> 
    </iviewCircle> 
</template>

<script>
import iviewCircle from 'iview/src/components/circle'
export default {
  components: {
    iviewCircle
  },
  props: {
    percent: { default: 0 },
    size: { default: 120 },
    strokeLinecap: { default: 'round' },
    strokeWidth: { default: 6 },
    strokeColor: { default: '#2db7f5' },
    trailWidth: { default: 5 },
    trailColor: { default: '#eaeef2' }
  },
  data () {
    return {}
  },
  watch: {
  },
  methods: {

  }
}
</script>
<style lang="scss">
.zpfe-iview-circle {
}
</style>
