<template>
  <div class="zpfe-iview-cropper" :class="className">
    <vue-cropper
        ref="cropper"
        :guides="guides"
        :view-mode="viewMode"
        :drag-mode="dragMode"
        :auto-crop-area="autoCropArea"
        :min-container-width="minContainerWidth"
        :min-container-height="minContainerHeight"
        :background="background"
        :rotatable="rotatable"
        :src="imgSrc"
        :alt="alt"
        :img-style="imgStyle"
        :auto-crop="autoCrop"
        :highlight="highlight"
        >
    </vue-cropper>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
export default {
  props: {
    // 是否显示选框虚线
    guides: { default: false },
    viewMode: { default: 2 },
    dragMode: { default: 'crop' },
    autoCropArea: { default: 0.5 },
    minContainerWidth: { default: 250 },
    minContainerHeight: { default: 180 },
    background: { default: false },
    rotatable: { default: true },
    // 显示的图片base64 或远程服务器的url地址
    imgSrc: { default: undefined },
    // 图片样式
    imgStyle: {
      default: () => { return { width: '500px', height: '500px' } }
    },
    className: { default: null },
    autoCrop: { default: true },
    alt: { default: '源图片' },
    highlight: { default: false },
    movable: { default: true }
  },
  components: {
    VueCropper
  },
  watch: {
    imgSrc (newValue) {
      if (newValue) {
        this.$refs.cropper.replace(newValue)
        this.$emit('on-img-load', this.getImgBase64())
      }
    }
  },
  methods: {
    getImgBase64 () {
      return this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    rotate (deg = 90) {
      this.$refs.cropper.rotate(deg);
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-cropper {
  .cropper-point {
    background-color: transparent;
  }
  .cropper-crop-box {
    border: 2px solid #fff;
  }
  .cropper-view-box {
    outline-color: transparent;
    outline: none;
  }
  .cropper-modal {
    background-color: #fff;
    opacity: 0.3;
  }
}
</style>
