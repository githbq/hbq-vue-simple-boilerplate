<template>  
    <IViewCheckbox 
     class="zpfe-iview-checkbox"
    v-model="selfValue" 
    :label="label" 
    :disabled="disabled" 
    :indeterminate="indeterminate" 
    :size="size" 
    :trueValue="trueValue" 
    :falseValue="falseValue" 
    >
    <slot></slot>
    </IViewCheckbox>
</template>

<script>
import IViewCheckbox from 'iview/src/components/checkbox'
export default {
    components: {
        IViewCheckbox
    },
    props: {
        value: { default: null },
        label: { default: '' },
        disabled: { default: false },
        indeterminate: { default: false },
        size: { default: null },
        trueValue: { default: true },
        falseValue: { default: false }
    },
    data() {
        return { selfValue: this.$props.value }
    },
    watch: {
        value(newValue) {
            this.$data.selfValue = newValue
        },
        selfValue(newValue) {
            this.$emit('input', newValue)
        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
.zpfe-iview-checkbox {
}
</style>
