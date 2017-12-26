<template>
  <div class="zpfe-iview-date-picker" :class="className">
    <DatePicker 
    :value="selfValue"
    :confirm="confirm"
    :type="type"
    :placeholder="placeholder"
    :style="style"
    :placement="placement"
    :format="format"
    @on-change="onChange"
    @on-open-change="onOpenChange"
    @on-ok="onOk"
    @on-clear="onClear" 
    >
    <slot></slot>
    </DatePicker>
  </div>
</template>

<script>
import DatePicker from 'iview/src/components/date-picker'
export default {
  props: {
    confirm: { default: false },
    className: { default: '' },
    value: { default: Date.now() },
    type: { default: 'year' },
    placeholder: { default: '选择年份' },
    style: { default: '' },
    placement: { default: 'bottom-start' },
    format: { default: null }
  },
  data() {
    return {
      selfValue: this.$props.value
    }
  },
  watch: {
    value(newValue) {
      this.$data.selfValue = newValue
    },
    selfValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  components: {
    DatePicker
  },
  methods: {
    onChange(newValue) {
      this.$emit('input', newValue)
      this.$emit.apply(this, ['on-change'].concat(arguments))
    },
    onOpenChange() {
      this.$emit.apply(this, ['on-open-change'].concat(arguments))
    },
    onOk() {
      this.$emit.apply(this, ['on-ok'].concat(arguments))
    },
    onClear() {
      this.$emit.apply(this, ['on-clear'].concat(arguments))
    }
  }
}
</script>
<style lang="scss">
.zpfe-iview-date-picker {
  .ivu-date-picker-prev-btn-arrow-double,
  .ivu-date-picker-next-btn-arrow-double {
    i {
      font-weight: bold;
    }
  }
  .ivu-date-picker-prev-btn-arrow-double i:before {
    content: "";
  }
  .ivu-date-picker-prev-btn-arrow-double i:after {
    content: "<";
  }
  .ivu-date-picker-next-btn-arrow-double i:before {
    content: "";
  }
  .ivu-date-picker-next-btn-arrow-double i:after {
    content: ">";
  }
  .ivu-input-icon-normal + .ivu-input {
    border-radius: 0px;
    // border-bottom: none;
  }
  .ivu-date-picker-rel {
    z-index: 20;
  }
  .ivu-date-picker .ivu-select-dropdown {
    z-index: 10;
    top: 70px;
  }
  .ivu-input {
    border-radius: 0px;
  }
}
</style>
