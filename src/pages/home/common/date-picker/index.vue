<template> 
    <DatePicker 
    class="zpfe-iview-date-picker" 
    v-model="self_value"
    :confirm="confirm"
    :disabled="disabled"
    :type="type"
    :placeholder="placeholder" 
    :placement="placement"
    :format="format"
    @on-change="onChange"
    @on-open-change="onOpenChange"
    @on-ok="onOk"
    @on-clear="onClear" 
    >
    <slot></slot>
    </DatePicker>  
</template>

<script>
  import DatePicker from 'iview/src/components/date-picker'
  export default {
    components: {
      DatePicker
    },
    props: {
      monthOnly: { default: true },
      confirm: { default: false },
      disabled: { default: false },
      value: { default: null },
      type: { default: 'year' },
      placeholder: {
        default () {
          let value = ''
          switch (this.$props.type) {
            case 'year': { value = '选择年份' } break
            case 'month': { value = '选择月份' } break
          }
          return value
        }
      },
      placement: { default: 'bottom-start' },
      format: {
        default () {
          let value = null
          switch (this.$props.type) {
            case 'month': {
              if (this.$props.monthOnly) {
                value = 'M'
              }
            } break
          }
          return value
        }
      }
    },
    data () {
      let self_value = this.$props.value
      if (typeof self_value === 'number') {
        self_value = new Date(self_value)
      }
      return {
        self_value: self_value
      }
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
      onChange (newValue) {
        this.$emit('input', newValue)
        this.$emit.apply(this, ['on-change'].concat([].slice.call(arguments)))
      },
      onOpenChange () {
        const args = [].slice.call(arguments)
        this.$emit.apply(this, ['on-open-change'].concat(args))
      },
      onOk () {
        const args = [].slice.call(arguments)
        this.$emit.apply(this, ['on-ok'].concat(args))
      },
      onClear () {
        const args = [].slice.call(arguments)
        this.$emit.apply(this, ['on-clear'].concat(args))
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
    .ivu-icon-ios-calendar-outline:before {
      content: "\F123";
    }
  }
</style>
