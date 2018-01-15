<template> 
    <Upload 
    ref="upload"
    v-model="self_value"
    :accept="accept"
    :multiple="multiple"
    :extensions="extensions"
    :size="size"
    :timeout="timeout"
    :maximum="maximum"
    :thread="thread"
    :drop="drop"
    :dropDirectory="dropDirectory"
    :post-action="postAction"
    :data="data"
    @input-file="inputFile"
    @input-filter="inputFilter"
    >
    <slot></slot>
    </Upload>
</template>

<script>
import Upload from 'vue-upload-component'
export default {
  components: {
    Upload
  },
  props: {
    value: { default: () => [] },
    // image/png,image/gif,image/jpeg
    accept: { default: '' },
    multiple: { default: false },
    extensions: { default: undefined },
    // > IE9
    size: { default: 2 * 1024 * 1024 },
    // > IE9
    timeout: { default: 60 * 1000 },
    // 最大文件数 , 前置条件是 multiple=true
    maximum: { default: 10 },
    // 多文件上传时并发上传数
    thread: { default: 1 },
    // 拖拽上传
    drop: { default: true },
    dropDirectory: { default: false },
    // 上传地址
    postAction: { default: '' },
    // 上传文件时附带的其它数据
    data: { default: () => { } }
  },
  data() {
    return { self_value: this.$props.value }
  },
  watch: {
    value(newValue) {
      this.$data.self_value = newValue
    },
    self_value(newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    upload() {
      this.$refs.upload.active = true
    },
    stopUpload() {
      this.$refs.upload.active = false
    },
    inputFile() {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['input-file'].concat(args))
    },
    inputFilter() {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['input-filter'].concat(args))
    },
    getUploadRef() {
      return this.$refs.upload
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-input {
  .file-uploads {
    overflow: hidden;
    position: relative;
    text-align: center;
    display: inline-block;
  }
  .file-uploads.file-uploads-html4 input[type="file"] {
    opacity: 0;
    font-size: 20em;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .file-uploads.file-uploads-html5 input[type="file"] {
    overflow: hidden;
    position: fixed;
    width: 1px;
    height: 1px;
    z-index: -1;
    opacity: 0;
  }
}
</style>
