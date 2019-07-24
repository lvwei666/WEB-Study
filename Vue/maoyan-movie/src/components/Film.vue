<template>
  <div class="wrapper">
    <v-header>猫眼电影</v-header>
    <div class="topbar">
      <div class="left">
        <span class="city-name">南昌</span>
        <i class="arrow"></i>
      </div>
      <div class="mid">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="正在热映" name="first">正在热映</el-tab-pane>
          <el-tab-pane label="即将上映" name="second">即将上映</el-tab-pane>
        </el-tabs>
      </div>
      <div class="right">
        <router-link to="/search">
          <div class="search-icon"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../common/Header'
export default {
  name: 'Film',
  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
    'v-header': Header
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<style scope lang="stylus">
.el-tabs__nav
  height 44px
.el-tabs__item
  font-size 15px
  font-weight 700
.is-active
  font-style 15px
  font-weight 700
  color #ef4238 !important
.el-tabs__nav-wrap::after
  height 0
.el-tabs__active-bar
  height 1px
  background-color #ef4238 !important
.el-tabs__header 
  margin 0
.topbar
  display flex
  border-bottom 1px solid #e6e6e6
  height 44px

.movie
  position fixed
  left 15px
  width 98vw
  padding-right 15px
  overflow-y scroll

.left, .mid, .right
  flex 1

.left
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

.right
  position relative
  padding-right 15px

.search-icon
  width 60px
  height 44px
  background url("../assets/images/search.png") 40px 12px no-repeat
  background-size 20px
  right 15px
  position absolute

.most-expected 
  padding 12px 0px
  background-color #fff
  margin-bottom 10px
  text-align left
  position fixed
  left 15px
  width 98vw
  padding-right 5%
  overflow-y scroll

.title 
  margin 0 0 12px
  font-size 14px
  color #333

.most-expected-list 
  overflow scroll
  white-space nowrap
  margin-right 3%

.group-date
  margin 0
  font-size 14px
  color #333
</style>
