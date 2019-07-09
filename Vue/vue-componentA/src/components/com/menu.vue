<template>
  <div class="menu">
    {{message}}
  </div>
</template>

<script>
import bus from '@/common/bus'
export default {
  data() {
    return {
      message: 'SSS'
    }
  },
  created () {
    bus.$on('todo', (val) => {
      console.log(val)
      this.message = val
    })
  }
}
</script>

<style>

</style>
