<template>
<div class="my-form">  
    <MyForm></MyForm>
</div>
</template>

<script>
import MyForm from './components/form'
export default {
  components: {
    MyForm
  },
  data() {
    return {}
  },
  methods: {}
};
</script>

<style lang="less">
.my-form {
  * {
    box-sizing: border-box;
  }
  & {
    border: 1px solid red;
  }
}
</style>
