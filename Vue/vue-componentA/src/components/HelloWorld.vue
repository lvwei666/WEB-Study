<template>
  <div class="hello">
    <!-- <button @click="submit">登录</button> -->
    <i-button size="small">按钮</i-button>
    <i-menu></i-menu>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'i-button': button,
    'i-menu': menu
  },
  methods: {
    submit() {
      this.$toast('登录成功', 'top')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
