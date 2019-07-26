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
            <div class="movie" ref="movieAll">
              <div class="item" v-for="(movie, index) in movies" :key="index">
                <Movie :movie="movie"/>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="即将上映" name="second">
             <div class="most-expected" ref="expect">
                <p class="title">近期最受期待</p>
                <div class="most-expected-list">
                  <div class="item-expect" v-for="(movie2, index2) in coming" :key="index2">
                    <Expected :come="movie2"/>
                  </div>
                </div>
                <div class="coming-list">
                  <p class="group-date">7月12日 周五</p>
                  <div class="item-come" v-for="(movie3, index3) in movies3" :key="index3">
                    <Movie :movie="movie3"/>
                  </div>
                </div>
              </div>
          </el-tab-pane>
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
import Expected from '../common/Expected'
import { getMovies, getMovies2, getMovies3 } from '../api/axios/movies';
import debounce from '../api/debounce/index';
export default {
  name: 'Film',
  data() {
    return {
      activeName: 'first',
      movies: [],
      coming: [],
      movies3: []
    }
  },
  created() {
    getMovies().then(res => {
      this.movies = res.data.data.movieList
    })
    getMovies2().then(res => {
      this.coming = res.data.data.coming
    })
    getMovies3().then(res => {
      this.movies3 = res.data.data.coming
    })
  },
  mounted() {
    this.$refs.movieAll.addEventListener('scroll', debounce(() => {
      // console.log(this.$refs.movieAll.scrollTop)
      let high1 = this.$refs.movieAll.scrollHeight;
      let high2 = this.$refs.movieAll.clientHeight;
      if (this.$refs.movieAll.scrollTop > high1 - high2 - 5) {
        getMovies().then(res=> {
          this.movies = this.movies.concat(res.data.data.movieList)
        })
      }
    }, 400))
    this.$refs.expect.addEventListener('scroll', debounce(() => {
      let high3 = this.$refs.expect.scrollHeight;
      let high4 = this.$refs.expect.clientHeight;
      if (this.$refs.expect.scrollTop > high3 - high4 - 5) {
        getMovies3().then(res=> {
          this.movies3 = this.movies3.concat(res.data.data.coming)
        })
      }
    }, 400))
  },
  components: {
    'v-header': Header,
    Movie,
    Expected
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<style scoped lang="stylus">
.topbar
  display flex
  border-bottom 1px solid #e6e6e6
  height 44px

.movie
  padding-right 10px
  padding-left 15px
  overflow-y scroll
  height 80vh

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
  height 80vh
  box-sizing border-box
  margin-top 5px
  padding-top 7px

.title 
  margin 0 0 12px
  font-size 14px
  color #333

.most-expected-list 
  overflow scroll
  white-space nowrap
  margin-right 3%
  .item-expect
    display inline-block

.group-date
  margin 0
  font-size 14px
  color #333
.item-come
  position relative
.item 
  position relative
</style>
<style lang="stylus">
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
</style>
