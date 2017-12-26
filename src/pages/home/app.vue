<template>
<div>
<hr/>
<DatePicker v-model="abc" type="month"></DatePicker>
abc:{{abc}}
<hr/>
</div>
</template>

<script>
import { DatePicker } from './common'

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      abc: new Date('2018-06-06')
    }
  },

  methods: {
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          return
        }
        location.assign('../user/index.html')
      })
    }
  }
}
</script>

<style>
.login-card {
  width: 800px;
  margin: 100px auto;
}
.login {
  display: block;
  width: 400px;
  margin: 100px auto;
}
.logo-img {
  width: 90px;
}
.logo-text {
  margin-left: 20px;
}
</style>
