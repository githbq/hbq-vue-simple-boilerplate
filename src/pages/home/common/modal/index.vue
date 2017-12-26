<template>
  <div class="zpfe-iview-modal" :class="className">
    <Modal v-model="visible" :title="title" :closable="closable" :maskClosable="maskClosable" :scrollable="scrollable" :okText="okText" :cancelText="cancelText" :width="width" :styles="styles" class-name="zpfe" :transitionNames="transitionNames" :loading="loading" @on-ok="ok" @on-cancel="cancel" @on-visible-change="visibleChange">
      <slot></slot>
      <slot name="header"></slot>
      <slot name="footer"></slot>
      <slot name="close"></slot>
    </Modal>
  </div>
</template>

<script>
  // import Modal from 'iview/src/components/modal'
  export default {
    props: {
      value: { default: false },
      title: { default: '标题参数名:title' },
      closable: { default: true },
      maskClosable: { default: true },
      loading: { default: false },
      scrollable: { default: false },
      okText: { default: '确定' },
      cancelText: { default: '取消' },
      width: { default: 520 },
      styles: { default: () => { } },
      className: { default: 'zpfe' },
      transitionNames: { default: () => [] },
      transfer: { default: true }
    },
    data () {
      return {
        visible: this.$props.value
      }
    },
    watch: {
      value (newValue) {
        this.$data.visible = newValue
      },
      visible (newValue) {
        this.$emit('input', newValue)
      }
    },
    components: {
      // Modal
    },
    methods: {
      ok (...args) {
        this.$emit.apply(this, ['on-ok'].concat(args))
      },
      cancel (...args) {
        this.$emit.apply(this, ['on-cancel'].concat(args))
      },
      visibleChange (...args) {
        this.$emit.apply(this, ['on-visible-change'].concat(args))
      }
    }
  }
</script>
<style lang="scss">
  .zpfe-iview-modal {
    .ivu-modal-wrap {
      .ivu-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
