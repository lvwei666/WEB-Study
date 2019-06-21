<template>
  <div class="look-one">{{msg}}
    <div class="go-two" @click='goTwo'>去look2</div>
  </div>
</template>

<script>
export default {
  name: 'LookOne',
  data () {
    return {
      msg: '初见'
    }
  },
  methods: {
    goTwo () {
      // this.$router.push('Look/look-two')
      // this.$router.push({ path: '/Look/look-two' })
      this.$router.push({ name: 'LookTwo', params: { id: 1212 } })
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(from, to)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log(from, to)
    next()
  }
}
</script>