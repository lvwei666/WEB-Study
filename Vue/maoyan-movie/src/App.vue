<template>
  <div id="app">
    <div class="bottom-nav-bar">
      <router-link to="/film">
        <div class="nav-icon-wrapper" data-index="0" @click="changeActive">
          <img :src="index == '0' ? require('./assets/images/film-active.png') : require('./assets/images/film.png')" alt="" class="nav-icons">
          <span :class="index == '0' ? 'nav-text active' : 'nav-text'">电影</span>
        </div>
      </router-link>
      <router-link to="/cinema">
        <div class="nav-icon-wrapper" data-index="1" @click="changeActive">
          <img :src="index == '1' ? require('./assets/images/cinema-active.png') : require('./assets/images/cinema.png')" alt="" class="nav-icons">
          <span :class="index == '1' ? 'nav-text active' : 'nav-text'">影院</span>
        </div>
      </router-link>
      <router-link to="/mine">
        <div class="nav-icon-wrapper" data-index="2" @click="changeActive">
          <img :src="index == '2' ? require('./assets/images/mine-active.png') : require('./assets/images/mine.png')" alt="" class="nav-icons">
          <span :class="index == '2' ? 'nav-text active' : 'nav-text'">我的</span>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'index'
    ])
  },
  methods: {
    ...mapActions([
      'changeIndex'
    ]),
    changeActive(e) {
      // this.$store.dispatch('changeIndex', e.currentTarget.getAttribute('data-index'))
      // this.$store.commit('change', e.currentTarget.getAttribute('data-index'))
      this.changeIndex(e.currentTarget.getAttribute('data-index'))
    }
  }
}
</script>

<style lang="stylus">
body
  margin 0
a
  text-decoration none
.line-ellipsis
  text-overflow ellipsis
  white-space nowrap
  overflow hidden
.bottom-nav-bar
  position fixed
  bottom 0
  width 100%
  background #fff
  border-top .5px solid #d8d8d8
  display flex
  justify-content space-around
  padding-top 4px
  z-index 2

.nav-icons
  width 25px
  height 25px
  display block

.nav-text
  font-size 12px
  color #aaaaaa

.active
  color red
</style>
