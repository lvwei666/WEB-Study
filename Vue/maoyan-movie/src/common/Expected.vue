<template>
  <div class="expected-item">
    <div class="poster default-img-bg">
      <img :src="come.img" alt="" />
      <span class="whis-bg"></span>
      <span class="wish">
        <span class="wish-num">{{come.wish}}</span> 人想看
      </span>
      <div class="toggle-wish">
        <span></span>
      </div>
    </div>
    <h5 class="name">{{come.nm}}</h5>
    <p class="date">{{come.comingTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'Expected',
  props: {
    come: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.expected-item 
  display inline-block
  width 85px
  overflow hidden
  margin-right 10px
  .date
    font-size 12px

.poster 
  width 85px
  height 115px
  position relative
  margin-bottom 6px

.default-img-bg 
  background-color #e1e1e1
  background-size 100% 100%

.name
  margin 0 0 3px
  font-size 13px
  color #222
  font-weight 700
  text-overflow ellipsis
  overflow hidden
  white-space nowrap

.expected-item .poster img 
  height 100%
  width 100%

.wish-bg 
  display inline-block
  width 100%
  height 35px
  position absolute
  bottom 0
  background-image -webkit-linear-gradient(top,rgba(77,77,77,0),#000)
  background-image linear-gradient(-180deg,rgba(77,77,77,0),#000)

.expected-item .poster .wish 
  position absolute
  left 4px
  bottom 2px
  color #faaf00
  font-size 11px
  font-weight 600

.toggle-wish 
  width 28px
  line-height 28px
  background rgba(61,63,71,.6)
  text-align center
  border-bottom-right-radius 10px
  position absolute
  top 0
  left 0
</style>
