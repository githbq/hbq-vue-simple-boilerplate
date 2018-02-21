<template>
    <div class="my-form">
         form
    </div>
</template>
<script>
export default {
    props: {
    },
    data() {
        return {
        }
    },
    watch: { 
    },
    methods: {
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
