<template>
    <div class="zpfe-select-cascader"> 
    <div class="cascader-select-wrapper" v-for="(item,index) in config" :key="index">
    <span class="cascader-select-label">{{item.label}}</span> 
    <ZPSelect  
    v-model="item.model"
    class="cascader-select"
    @on-change="item.onChange"
    :labelField="item.labelField"
    :valueField="item.valueField"
    :data="item.data"
    >
    </ZPSelect >
    item.model:{{JSON.stringify(item.model)}}
    </div>  
    </div>
</template>

<script>
import ZPSelect from '../select'
export default {
    components: { ZPSelect },
    props: [],
    beforeMount() {
        const data = this.$data.config || []
        data.forEach(n => {
            if (!n.onChange) {
                n.onChange = this.noop
            } else {
                const oldMethod = n.onChange
                n.onChange = (...args) => {
                    debugger
                    oldMethod.apply(n, args)
                    debugger
                }
            }
        })
    },
    data() {
        return {
            config: [
                {
                    model: null, label: '省',
                    data: [{ label: 'a1', value: 'a1v' }, { label: 'a2', value: 'a2v' }],
                    onChange(value, item) {
                        debugger
                    }
                },
                { model: null, label: '市', data: [{ label: 'b1', value: 'b1v' }] },
                { model: null, label: '区', data: [{ label: 'c1', value: 'c1v' }] },
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
