<template>
  <div>
    <v-header>
    <div class="navbar">
      <div class="nav-wrap-left">
        <a href="#" class="back" @click="back">
          <i class="icon-back"></i>
        </a>
      </div>
      <h1 class="nav-header">猫眼电影</h1>
    </div>
    </v-header>
    <div class="search-body">
      <div class="search-wrapper">
        <div class="search-header">
          <div class="input-wrapper">
            <img src="../assets/images/searchCinema.png" alt="" class="search-icon-in"/>
            <input type="text" class="search-input" placeholder="搜电影" v-model="content"/>
          </div>
          <div class="cancel" @click="back">取消</div>
        </div>
      </div>
      <div class="search-result">
        <div v-for="(movie, index) in searchMovie" :key="index">
        <Movies :movie="movie"></Movies>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../common/Header';
import Movies from '../common/Movie';
import { getMovies } from '../api/axios/movies';
import debounce from '../api/debounce/index';
export default {
  data () {
    return {
      allMovies: [],
      searchMovie: [],
      content: ''
    }
  },
  components: {
    'v-header': Header,
    Movies
  },
  methods: {
    back () {
      window.history.back()
    }
  },
  watch: {
    content(newVal, oldVal) {
      if (newVal != '') {
        this.searchMovie = this.allMovies.slice(0).filter((item) => {
          return item.nm.includes(newVal)
        })
      }
    }
  },
  created() {
    getMovies().then(res => {
      this.allMovies = res.data.data.movieList
    })
  },
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
.search-wrapper
  background-color #f5f5f5
  height 100%
  .search-header
    display flex
    align-items center
    padding 8px 0 8px 10px
    background-color #f5f5f5
    border-bottom 1px solid #e5e5e5
    z-index 1
    .input-wrapper
      padding 0 10px
      border 1px solid #e6e6e6
      border-radius 5px
      background-color #fff
      flex-grow 1
      .search-icon-in
        width 15px
        height 15px
        margin-right 6px
        float left
        position relative
        top 6px
      .search-input
        flex 1
        border none
        font-size 13px
        color #333
        line-height 20px
        padding 4px 0
        width calc(100% - 40px)
        outline none
    .cancel
      height 30px
      line-height 30px
      padding 0 10px
      font-size 16px
      color #f03d37
.search-result
  padding-left 15px
</style>
