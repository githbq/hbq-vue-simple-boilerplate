<template>
    <div class="zp-i-select">
        <div @click="showDropdown=!showDropdown" class="zp-i-select-label">
            <slot :label="self_label"> 
                <span>{{self_label}}</span>
            </slot>
        </div>
        <div class="zp-i-select-dropdown"  v-if="showDropdown" >
            <div class="zp-i-select-dropdown-option" v-for="(item,index) of options" :key="index" @click="onChange(item,index)">
            {{item[$props.labelField]}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: { default: '' },
        labelField: { default: 'label' },
        valueField: { default: 'value' },
        options: { default: () => [{ value: 'a', label: 'AAA' }, { value: 'b', label: 'BBB' }] }
    },
    data() {
        return {
            self_value: this.$props.value,
            self_label: '',
            showDropdown: false
        }
    },
    watch: {
        value(newValue) {
            console.log(`value-change`, newValue)
            this.$data.self_value = newValue
            this.resetCurrentLabel()
        },
        self_value(newValue) {
            this.$emit('input', newValue)
        }
    },
    methods: {
        onChange(item, index) {
            if (this.self_value !== item[this.valueField]) {
                this.$emit('input', item[this.valueField])
                this.$emit('on-change', item, index)
            }
            this.showDropdown = false
        },
        resetCurrentLabel() {
            if (this.value && this.options) {
                this.options.forEach(n => {
                    if (n[this.valueField] === this.value) {
                        this.self_label = n[this.labelField]
                    }
                })
            }
        },
    },
    mounted() {
        this.resetCurrentLabel()
    }
}
</script>

<style lang="scss" >
.zp-i-select {
  box-sizing: border-box;
  cursor: pointer;
  color: #495060;
  font-size: 14px;
  line-height: normal;
  display: inline-block;
  position: relative;
  &-label {
    min-width: 50px;
    padding-left: 5px;
    padding-right: 5px;
    line-height: 30px;
    border: 1px solid green;
  }
  &-dropdown {
    min-width: 50px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    line-height: normal;
    background-color: #fff;
    z-index: 99;
    position: absolute;
    top: 32px;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 400px;
  }
  &-dropdown-option {
    padding: 4px;
    &:hover {
      background: #f3f3f3;
    }
  }
}
</style>
