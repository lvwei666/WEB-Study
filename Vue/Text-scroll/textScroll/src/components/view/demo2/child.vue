<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
export default {
  name: 'demoChild1',
  data () {
    return {
      message: '嘿嘿'
    }
  },
  methods: {
    sendMsg () {
      this.$emit('wn', this.message)
    }
  }
}
</script>