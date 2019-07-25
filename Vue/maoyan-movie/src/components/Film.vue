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
          <el-tab-pane label="正在热映" name="first">
            <div class="movie" :style="{height: height + 'px' }">
              <div class="item" v-for="(movie, index) in movies" :key="index">
                <Movie :movie="movie"/>
              </div>
            </div>
          </el-tab-pane>
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
import Movie from '../common/Movie'
export default {
  name: 'Film',
  data() {
    return {
      activeName: 'first',
      height: 300,
      movies: [{
      "id": 1218141,
      "haspromotionTag": false,
      "img": "http://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
      "version": "",
      "nm": "扫毒2天地对决",
      "preShow": false,
      "sc": 9,
      "globalReleased": false,
      "wish": 320805,
      "star": "刘德华,古天乐,苗侨伟",
      "rt": "2019-07-05",
      "showInfo": "今天61家影院放映1116场",
      "showst": 3,
      "wishst": 0
    },{
      "id": 1218141,
      "haspromotionTag": false,
      "img": "http://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
      "version": "",
      "nm": "扫毒2天地对决",
      "preShow": false,
      "sc": 9,
      "globalReleased": true,
      "wish": 320805,
      "star": "刘德华,古天乐,苗侨伟",
      "rt": "2019-07-05",
      "showInfo": "今天61家影院放映1116场",
      "showst": 3,
      "wishst": 0
    },{
      "id": 1218141,
      "haspromotionTag": false,
      "img": "http://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
      "version": "",
      "nm": "扫毒2天地对决",
      "preShow": false,
      "sc": 9,
      "globalReleased": true,
      "wish": 320805,
      "star": "刘德华,古天乐,苗侨伟",
      "rt": "2019-07-05",
      "showInfo": "今天61家影院放映1116场",
      "showst": 3,
      "wishst": 0
    },{
      "id": 1218141,
      "haspromotionTag": false,
      "img": "http://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
      "version": "",
      "nm": "扫毒2天地对决",
      "preShow": false,
      "sc": 9,
      "globalReleased": true,
      "wish": 320805,
      "star": "刘德华,古天乐,苗侨伟",
      "rt": "2019-07-05",
      "showInfo": "今天61家影院放映1116场",
      "showst": 3,
      "wishst": 0
    },{
      "id": 1218141,
      "haspromotionTag": false,
      "img": "http://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
      "version": "",
      "nm": "扫毒2天地对决",
      "preShow": false,
      "sc": 9,
      "globalReleased": true,
      "wish": 320805,
      "star": "刘德华,古天乐,苗侨伟",
      "rt": "2019-07-05",
      "showInfo": "今天61家影院放映1116场",
      "showst": 3,
      "wishst": 0
    },{
      "id": 1218141,
      "haspromotionTag": false,
      "img": "http://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
      "version": "",
      "nm": "扫毒2天地对决",
      "preShow": false,
      "sc": 9,
      "globalReleased": true,
      "wish": 320805,
      "star": "刘德华,古天乐,苗侨伟",
      "rt": "2019-07-05",
      "showInfo": "今天61家影院放映1116场",
      "showst": 3,
      "wishst": 0
    }]
    }
  },
  components: {
    'v-header': Header,
    Movie
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
  &:hover
    color black
.is-active
  font-style 15px
  font-weight 700
  color #ef4238 !important
.el-tabs__nav-wrap::after
  height 0
.el-tabs__active-bar
  background-color #ef4238 !important
.el-tabs__header 
  margin 0
.el-tabs__content
  position fixed
  left 0
  width 100vw
.topbar
  display flex
  border-bottom 1px solid #e6e6e6
  height 44px

.movie
  padding-right 10px
  padding-left 15px
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

.item 
  position relative
</style>
