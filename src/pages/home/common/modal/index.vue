<template> 
    <Modal class="zpfe-iview-modal" 
     v-model="visible" :title="title" :closable="closable" :maskClosable="maskClosable" :scrollable="scrollable" :okText="okText" :cancelText="cancelText" :width="width" :styles="styles" class-name="zpfe" :transitionNames="transitionNames" :loading="loading" @on-ok="ok" @on-cancel="cancel" @on-visible-change="visibleChange">
      <slot></slot>
      <slot name="header"></slot>
      <slot name="footer"></slot>
      <slot name="close"></slot>
    </Modal> 
</template>

<script>
import Modal from 'iview/src/components/modal'
export default {
  components: {
    Modal
  },
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
  methods: {
    ok () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-ok'].concat(args))
    },
    cancel () {
      const args = [].slice.call(arguments)
      this.$emit.apply(this, ['on-cancel'].concat(args))
    },
    visibleChange () {
      const args = [].slice.call(arguments)
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
    .ivu-modal-content{
      border-radius: 0;
      padding: 20px 30px;
    }
    .ivu-modal-close{
      top: 20px;
      right: 40px;
    }
    .ivu-modal-header{
      border:none;
      .ivu-modal-header-inner{
        font-size: 16px;
        color: #333333;
      }
    }
    .ivu-modal-body{
      font-size: 16px;
      color: #666666;
    }
    .ivu-modal-footer{
      text-align: center;
      border:none;
      .ivu-btn-large{
        width: 75px;
        line-height: 19px;
        height: 32px;
        border-radius: 100px;
        &:nth-child(1){
          border: 1px solid #DCDCDC;
          color: #999999;
          margin-right: 10px;
          &:hover{
            border: 1px solid #cdcdcd;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
