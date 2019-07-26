<template>
  <div>
  <v-header>
    <div class="navbar">
      <div class="nav-wrap-left">
        <a href="#" class="back" @click="back">
          <i class="icon-back"></i>
        </a>
      </div>
      <h1 class="nav-header">{{detail.nm}}</h1>
    </div>
  </v-header>
  <div class="movie-detail">
    <div class="movie-filter"></div>
    <div class="poster-bg" :style="{backgroundImage: `url(${detail.img})`}"></div>
    <div class="detail box-flex">
      <div class="poster-two">
        <img :src="detail.img" alt=""/>
      </div>
      <div class="content flex">
        <div class="title-two middle line-ellipsis">{{detail.nm}}</div>
        <div class="title-en-name line-ellipsis">{{detail.enm}}</div>
        <div class="score line-ellipsis">{{detail.sc}} <span class="snum">{{snum}}</span></div>
        <div class="type line-ellipsis">
          <span>{{detail.cat}}</span>
        </div>
        <div class="src line-ellipsis">{{detail.src}}/{{detail.dur}}分钟</div>
        <div class="pubDesc line-ellipsis">{{detail.pubDesc}}</div>
      </div>
    </div>
    <div class="arrow-g">
      <img src="../assets/images/arrow.png" alt=""/>
    </div>
  </div>
  <div id="showDays">
    <ul id="timeline" class="mb-line-b">
      <li :class="index === '0' ? 'showDay chosen' : 'showDay'" data-day="0" @click="handleActive">今天07月16日</li>
      <li :class="index === '1' ? 'showDay chosen' : 'showDay'" data-day="1" @click="handleActive">明天07月17日</li>
      <li :class="index === '2' ? 'showDay chosen' : 'showDay'" data-day="2" @click="handleActive">后天07月18日</li>
      <li :class="index === '3' ? 'showDay chosen' : 'showDay'" data-day="3" @click="handleActive">周五07月19日</li>
      <li :class="index === '4' ? 'showDay chosen' : 'showDay'" data-day="4" @click="handleActive">周六07月20日</li>
      <li :class="index === '5' ? 'showDay chosen' : 'showDay'" data-day="5" @click="handleActive">周日07月21日</li>
    </ul>
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
  <div class="cinema-wrapper">
    <Scroll>
    <div class="cinema-list">
      <div v-for="(cinema, index) in cinemas" :key="index">
      <Cinema :cinema="cinema"></Cinema>
      </div>
    </div>
    </Scroll>
  </div>
  </div>
</template>

<script>
import Header from '../common/Header'
import { movieDetail, getCinema } from '../api/axios/movies';
import Scroll from '../common/BScroll';
import Cinema from '../common/Cinema';
export default {
  name: 'Which',
  data () {
    return {
      detail: {},
      index: "0",
      cinemas: []
    }
  },
  components: {
    'v-header': Header,
    Scroll,
    Cinema
  },
  created() {
    movieDetail().then(res => {
      this.detail = res.data.data.detailMovie.filter(item => item.id == this.$route.params.id)[0]
    })
    getCinema().then(res => {
        this.cinemas = res.data.data.cinemas
    })
  },
  computed: {
    snum () {
      if (this.detail.snum >= 10000) {
        return (this.detail.snum / 10000).toFixed(1) + '万人评分'
      }
      return this.detail.snum + '人评分'
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    handleActive (e) {
      this.index = e.target.dataset.day
    }
  }
}
</script>

<style scoped lang="stylus">
.navbar 
  height 50.5px
  border-bottom 1px solid #e54847
  display -webkit-box
  position relative
  .nav-wrap-left
    height 50.5px
    line-height 50.5px
    .back
      height 50px
      width 22.5px
      line-height 50px
      padding 0 15px
      .icon-back
        display inline-block
        width 22.5px
        height 22.5px
        vertical-align middle
        position relative
        &:before
          content ""
          display block
          position absolute
          top 0
          width 16px
          height 16px
          border-bottom 2px solid #fff
          border-left 2px solid #fff
          -webkit-transform rotate(45deg)
          transform rotate(45deg)
  .nav-header
    display block
    font-size 18px
    font-weight 400
    -webkit-box-flex 1
    color #fff
    text-align center
    line-height 50px
    margin 0 52.5px 0 0
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
.movie-detail
  height 188px
  position relative
  cursor pointer
  .movie-filter
    position absolute
    z-index -1
    width 100%
    height 100%
    background-color #333
  .poster-bg
    width 100%
    height 100%
    z-index -1
    overflow hidden
    position absolute
    -webkit-filter blur(1.2rem)
    filter blur(1.2rem)
    background-size cover
    background-repeat no-repeat
    opacity .55
  .detail
    height 150px
    padding 19px 30px 19px 15px
    display flex
    box-sizing content-box
    .poster-two
      img 
        width 110px
        height 150px
        box-sizing border-box
    .content
      margin-left 12.5px
      line-height 1
      color #fff
      flex 1
      overflow hidden
      .title-two
        font-size 20px
        margin-top 2px
        font-weight 700
        overflow hidden
      .title-en-name
        margin-top 10px
        font-size 12px
        color #fff
        opacity .8
      .score
        font-size 18px
        font-weight 700
        color #fc0
        margin-top 11px
        .snum
          margin-top 10px
          font-size 12px
          color #fff
          opacity .8
      .type
        margin-top 10px
        font-size 12px
        color #fff
        opacity .8
      .src
        margin-top 10px
        font-size 12px
        color #fff
        opacity .8
      .pubDesc
        margin-top 10px
        font-size 12px
        color #fff
        opacity .8
  .arrow-g
    position absolute
    width 10px
    right 15px
    top 50%
    -webkit-transform translateY(-50%)
    transform translateY(-50%)
    img 
      width 100%
      display block
#showDays
  width 100%
  background-color #fff
  height 45px
  overflow-x scroll
  #timeline
    white-space nowrap
    padding 0
    margin 0
    .showDay
      position relative
      display inline-block
      width 115px
      line-height 43px
      margin-left 4.5px
      font-size 14px
      text-align center
      list-style none

.chosen
  border-bottom 2px solid #f03d37
  color #f03d37

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
.cinema-wrapper
  height 87.5vh
</style>
