<template>
  <header class="header-nav">
    <slot></slot>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
.header-nav
  background-color #ef4238
  color white
  width 100%
  font-size 18px
  font-weight 400
  text-align center
  line-height 50px
  margin 0 52.5px 0 0
  text-overflow ellipsis
  white-space nowrap
  overflow hidden
</style>
