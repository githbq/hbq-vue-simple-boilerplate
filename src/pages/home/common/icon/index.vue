<template>
  <IViewIcon class="zpfe-iview-icon"
             :type="type"
             :size="size"
             :color="color"></IViewIcon>
</template>

<script>
import IViewIcon from 'iview/src/components/icon'
export default {
  components: {
    IViewIcon
  },
  props: {
    type: { type: String },
    size: { type: [Number, String] },
    color: { type: String }
  }
}
</script>
<style lang="scss">
.zpfe-iview-icon {
}
</style>
