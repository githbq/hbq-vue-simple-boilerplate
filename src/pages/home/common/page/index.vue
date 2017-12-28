<template>
  <div class="zpfe-iview-page">
    <Page
      class-name="zpfe"
      :total="total"
      :current.sync="selfCurrent"
      :pageSize="pageSize"
      :pageSizeOpts="pageSizeOpts"
      :placement="placement"
      :size="size"
      :simple="simple"
      :showTotal="showTotal"
      :showSizer="showSizer"
      :styles="styles"
      @on-change="onChange"
      @on-page-size-change="onPageSizeChange"
    >
    </Page>
    <div class="ivu-page-options-elevator">
      <span class="text-go">到</span>
      <input type="text" v-model.number="inputCurrent">
      <button class="ivu-page-options-goto" @click="changePage">确定</button>
    </div>
  </div>
</template>

<script>
import Page from 'iview/src/components/page'
export default {
  components: {
    Page
  },
  props: {
    current: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    pageSizeOpts: { default: () => [10, 20, 30, 40] },
    placement: { default: 'bottom' },
    size: { default: undefined },
    simple: { default: false },
    showTotal: { default: false },
    // 此属性不能使用
    showElevator: { default: false },
    showSizer: { default: false },
    styles: { default: () => { } }
  },
  data () {
    return {
      selfCurrent: this.$props.current,
      inputCurrent: this.$props.current
    }
  },
  watch: {
    current (value) {
      this.$data.selfCurrent = value
      this.$data.inputCurrent = value
    }
  },
  created () {
  },
  methods: {
    onPageSizeChange (...args) {
      this.$emit.apply(this, ['on-page-size-change'].concat(args))
    },
    onChange (page) {
      this.$data.selfCurrent = page
      this.$data.inputCurrent = page
      this.$emit('on-change', page)
    },
    changePage () {
      this.selfCurrent = this.$data.inputCurrent
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-page {
  display: inline-block;
  vertical-align: middle;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
  &.right {
    float: right;
  }
  // &.left {
  // }
  .ivu-page {
    float: left;
  }
  .ivu-page-options-elevator {
    padding-left: 10px;
    input {
      border-radius: 0px;
    }
  }
  .ivu-page-options-goto {
    background-color: #1787fb;
    color: #fff;
    border: none;
    padding: 0px 15px;
    cursor: pointer;
    &:hover {
      background-color: #1479e1;
    }
  }
}
.zpfe.ivu-page {
  .ivu-icon.ivu-icon-ios-arrow-left {
    border-radius: 0px;
    &:before {
      content: "上一页";
    }
  }
  .ivu-icon.ivu-icon-ios-arrow-right {
    &:before {
      content: "下一页";
    }
  }
  .ivu-page-item-jump-next,
  .ivu-page-prev,
  .ivu-page-next,
  .ivu-page-options-elevator input {
    border-radius: 0px;
  }
  .ivu-page-options-goto {
    background-color: #1787fb;
  }
  .ivu-page-prev,
  .ivu-page-next {
    width: 64px;
  }
  .ivu-page-item {
    border-radius: 0px;
  }
}
</style>
