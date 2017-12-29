<template>
    <div>
    <ZPSelect></ZPSelect> 
    {{a}}
    </div>
</template>

<script>
import ZPSelect from '../select'
export default {
    components: { ZPSelect },
    props: [],
    data() {
        return { a: 'aaa11aa22' }
    }
}
</script>

<style lang="scss">

</style>
