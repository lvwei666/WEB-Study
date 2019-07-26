<template>
  <div class="scroll-view" ref="scrollView">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  data () {
    return {

    }
  },
  updated() {
    if (this.bscroll) {
      this.bscroll.refresh()
    }
  },
  mounted() {
    if (!this.bscroll) {
      this.bscroll = new BScroll(this.$refs.scrollView, {
        probeType: 3,
        click: () => {}
      })
      // console.log(this.bscroll)
    }
  },
  destroyed() {
    this.bscroll = null;
  },
}
</script>

<style lang="stylus" scoped>
.scroll-view
  width 100%
  height 100%
  overflow hidden
</style>
