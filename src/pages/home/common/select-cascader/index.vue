<template>
    <div class="zpfe-select-cascader"> 
        <div class="cascader-select-wrapper" v-for="(item,index) in config" :key="index">
            <span v-if="item.label" class="cascader-select-label">{{item.label}}</span> 
            <ZPSelect  
            v-model="item.value"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            class="cascader-select"
            :clearable="clearable"
            @on-change="item.onChange"
            :labelField="item.labelField"
            :valueField="item.valueField"
            :data="item.data"
            >
            </ZPSelect >
            <div v-if="debug">
                item.value:{{JSON.stringify(item.value)}}
            </div>
        </div>  
    </div>
</template>

<script>
import ZPSelect from '../select'

export default {
    components: { ZPSelect },
    props: {
        loadingText: { default: '加载中...' },
        debug: { default: true },
        clearable: { default: true },
        getData: {
            default: () => {
                return (parentValue, n, level) => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            const result = [{ label: 'a' + Math.random(), value: 'a1v_' + level }].concat(n.data)
                            resolve(result)
                        }, 1000)
                    })
                }
            }
        },
        config: {
            default: () => [
                {
                    value: 'a1v_0',
                    label: '省',
                    placeholder: '请选择省',
                    data: [
                        // { label: 'a' + Math.random(), value: 'a1v_' + 0 }
                    ],

                },
                {
                    value: 'a1v_1', placeholder: '请选择市', model: null, label: '市',
                    data: []
                },
                {
                    value: 'a1v_2', placeholder: '请选择区', model: null, label: '区',
                    data: []
                },
            ]
        }
    },
    mounted() {
        if (this.config.length > 0) {
            const firstConfig = this.config[0]
            firstConfig.onChange(firstConfig.value)
        }
    },
    beforeMount() {
        const config = this.config || []
        config.forEach((n, i) => {
            n._index = i
            n.disabled = !!n.disabled
            n.data = n.data || []
            n._placeholder = n.placeholder
            if (i < config.length - 1) {
                n._next = config[i + 1]
            } else if (i === config.length - 1) {
                n._isLast = true
            }
            const selectChange = this.selectChange || this.noop
            const that = this
            function setData(value, item, level, trigger = false) {
                that.self_getData(value, item, level).then((data) => {
                    item.data = data
                    item.placeholder = item._placeholder
                    if (item._isLast && !that.$data.inited) {
                        that.$data.inited = true
                    }
                })
                trigger && item.onChange(item.value)
            }
            n.onChange = (value) => {
                selectChange.call(n, value, n)
                if (n._next) {
                    n._next.data = []
                    if (that.$data.inited) {
                        n._next.value = ''
                    } else if (!n._inited) {
                        setData('', n, i)
                        n._inited = true
                    }
                    if (value !== '') {
                        n._next.placeholder = that.$props.loadingText
                        setData(value, n._next, i + 1, true)
                    } else {
                        n._next.placeholder = n._next._placeholder
                        !n._isLast && n._next.onChange(value)
                    }
                }
            }

        })
    },
    data() {
        return {
            inited: false
        }
    },
    methods: {
        noop() {
        },
        selectChange(value, item) {
            this.$emit('select-change', value, item)
        },
        self_getData(parentValue, n, level) {
            let result = this.$props.getData(parentValue, n, level)
            if (!(result instanceof Promise)) {
                result = Promise.resolve(result)
            }
            return result
        },
    }
}
</script>

<style lang="scss">
.zpfe-select-cascader {
  .cascader-select-wrapper {
    display: inline-block;
    width: 400px;
  }
  .cascader-select {
    width: 300px;
  }
  .cascader-select-label {
    font-weight: bold;
    &:after {
      content: ":";
    }
  }
}
</style>
