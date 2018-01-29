<template> 
    <Carousel class="zpfe-iview-carousel"
    v-model="self_value" 
    :height="height" 
    :loop="loop" 
    :autoplay="autoplay"
    :autoplay-speed="autoplaySpeed"
    :dots="dots"
    :radius-dot="radiusDot"
    :trigger="trigger"
    :arrow="arrow"
    :easing="easing"
    @on-change="onChange" 
    > 
    <slot></slot>
    </Carousel> 
</template>

<script>
import Carousel from 'iview/src/components/carousel'
import CarouselItem from './item'
export default {
  components: {
    Carousel,
    CarouselItem
  },
  props: {
    height: { default: 'auto' },
    value: { default: undefined },
    loop: { default: false },
    autoplay: { default: false },
    autoplaySpeed: { default: 2000 },
    dots: { default: 'inside' },
    radiusDot: { default: false },
    trigger: { default: 'click' },
    arrow: { default: 'hover' },
    easing: { default: 'ease' }
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
    onChange () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-change'].concat(args))
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-carousel {
}
</style>
