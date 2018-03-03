<template>
  <div>
    <MyForm></MyForm>
  </div>
</template>

<script>
import MyForm from './components/form'
export default {
  components: {
    MyForm
  },
  data () {
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
    border: 2px solid gray;
    padding: 5px;
  }
}
</style>
