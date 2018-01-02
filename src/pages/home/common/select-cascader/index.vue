<template>
    <div class="zpfe-select-cascader"> 
    <div class="cascader-select-wrapper" v-for="(item,index) in config" :key="index">
    <span class="cascader-select-label">{{item.label}}</span> 
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
    <br/>item.value:{{JSON.stringify(item.value)}}
    </div>  
    </div>
</template>

<script>
import ZPSelect from '../select'

export default {
    components: { ZPSelect },
    props: {
        clearable: { default: true }
    },
    mounted() {
        debugger
        // const { config } = this.$data
        // if (config.length > 0) {
        //     this.getData('', config[0], 0)
        // }
    },
    beforeMount() {
        const config = this.$data.config || []
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
            const loadingText = '加载中...'
            n.onChange = (value) => {
                selectChange.call(n, value, n)
                if (n._next) {
                    if (!value) {
                        n._next.placeholder = n._next._placeholder
                    }
                    n._next.data = []
                    if (!this.inited) {
                        n._next.value = ''
                    }
                    if (value !== '') {
                        n._next.placeholder = loadingText
                        let result = this.getData(value, n._next, i + 1)
                        if (!(result instanceof Promise)) {
                            result = Promise.resolve(result)
                        } else {
                            result.then((data) => {
                                n._next.data = data
                                n._next.placeholder = n._next._placeholder
                                if (n._next._isLast && !this.inited) {
                                    this.inited = true
                                }
                            })
                        }
                    }
                    n._next.onChange('')
                }
            }

        })
    },
    data() {
        return {
            inited: false,
            getData(parentValue, n, level) {
                return new Promise(resolve => {
                    if (parentValue !== 0 && !parentValue) {
                        n.data = []
                    } else {
                        setTimeout(() => {
                            const result = [{ label: 'a' + Math.random(), value: 'a1v_' + level }].concat(n.data)
                            resolve(result)
                        }, 1000)
                    }
                })
            },
            selectChange(value, item) {
                debugger
            },
            config: [
                {
                    value: 'a1v_0',
                    label: '省',
                    placeholder: '请选择省',
                    data: [
                        { label: 'a' + Math.random(), value: 'a1v_' + 1 },
                        { label: 'a' + Math.random(), value: 'a1v_' + 2 }
                    ],

                },
                {
                    value: 'a1v_1', placeholder: '请选择市', model: null, label: '市',
                    data: [
                    ]
                },
                {
                    value: 'a1v_2', placeholder: '请选择区', model: null, label: '区',
                    data: [
                    ]
                },
            ]
        }
    },
    methods: {
        noop() {
        }
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
