<template>
  <div class="cinemas-container">
    <v-header>影院</v-header>
    <div class="topBar">
      <div class="city">
        <span class="city-name">南昌</span>
        <i class="arrow"></i>
      </div>
      <div class="search-input">
        <img src="../assets/images/searchCinema.png" alt=""/>
        <span>搜影院</span>
      </div>
    </div>
    <div class="nav-wrap filter-nav-wrap">
      <div class="tab mb-line-b">
        <div class="item">全城<span class="drop"></span></div>
        <div class="item">品牌<span class="drop"></span></div>
        <div class="item">特色<span class="drop"></span></div>
      </div>
      <div class="close-tab">
        <div class="tab-content"></div>
      </div>
    </div>
    <div class="cinema-list-wrapper">
    <Scroll>
      <div class="cinema-list-two">
        <div v-for="(cinema, index) in cinemas" :key="index">
        <Cinema :cinema="cinema"></Cinema>
        </div>
      </div>
    </Scroll>
    </div>
  </div>
</template>

<script>
import Header from '../common/Header';
import { getCinema } from '../api/axios/movies';
import Cinema from '../common/Cinema';
import Scroll from '../common/BScroll';
export default {
  name: 'Cinemas',
  data () {
    return {
      cinemas: []
    }
  },
  components: {
    "v-header": Header,
    Cinema,
    Scroll
  },
  created() {
    getCinema().then(res => {
      this.cinemas = res.data.data.cinemas
    })
  }
}
</script>

<style scoped lang="stylus">
.topBar
  display flex
  align-items center
  border-bottom 1px solid #e6e6e6
  height 44px
  background #f5f5f5
  .city
    font-size 15px
    margin auto
    text-align left
    padding-left 15px
  .arrow
    display inline-block
    width 0
    height 0
    border 4px solid #b0b0b0
    border-left-color transparent
    border-right-color transparent
    border-bottom-color transparent
    margin-left 4px
    margin-top 5px
  .search-input
    flex-grow 1
    justify-content center
    align-items center
    height 28px
    font-size 13px
    color #b2b2b2
    margin-left 18px
    border .5px solid #e6e6e6
    border-radius 5px
    margin-right 15px
    background-color #fff
    display flex
    img 
      width 14px
      height 14px
      margin-left 3px
      margin-right 4px
.nav-wrap
  width 100%
  height 40px
  z-index 10
  background-color #fff
  position relative
  &:before
    content ''
    display block
    position absolute
    top 0
    left 0
    width 200%
    height 200%
    transform scale(0.5)
    transform-origin 0 0
    box-sizing border-box
    border-top 1px solid #e6e6e6
    border-bottom 1px solid #e6e6e6
  .tab
    display flex
    :not(:first-child):before
      content ""
      position absolute
      display block
      height 20px
      top 10px
      left 0
      border-left 1px solid #e8e8e8
    .item
      -webkit-box-flex 1
      flex 1
      text-align center
      line-height 40px
      position relative
      white-space nowrap
      overflow hidden
      font-size 13px
      text-overflow ellipsis
      .drop
        display inline-block
        position absolute
        top 18px
        width 0
        height 0
        margin-left 4px
        border 4px solid transparent
        border-top-color #b0b0b0
.cinema-list-wrapper
  height 79vh
</style>
