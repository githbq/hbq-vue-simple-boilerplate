<template>  
    <IViewCheckboxGroup 
     class="zpfe-iview-checkbox-group"
    v-model="selfValue"  
    :size="size"  
    >
    <slot></slot>
    </IViewCheckboxGroup>
</template>

<script>
import IViewCheckboxGroup from 'iview/src/components/checkbox-grup'
export default {
    components: {
        IViewCheckboxGroup
    },
    props: {
        value: { default: null },
        size: { default: null }
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
.zpfe-iview-checkbox-group {
}
</style>
