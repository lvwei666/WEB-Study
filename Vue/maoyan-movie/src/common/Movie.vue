<template>
  <div>
    <routerLink :to="{name: 'Which', params: {id: movie.id}}">
    <div class="main-block">
      <div class="avatar">
        <img v-lazy="movie.img" width="64" height="90" alt />
      </div>
      <div class="content-wrapper">
        <div class="content">
          <div class="movie-title">{{movie.nm}}</div>
          <div class="detail">
            <div class="score">
              <span v-if="movie.globalReleased" class="score-suffix">
                观众评
                <span class="grade">{{movie.sc}}</span>
              </span>
              <span v-else class="person">
                {{movie.wish}}
                <span class="p-suffix">人想看</span>
              </span>
            </div>
            <div class="actor">主演: {{movie.star}}</div>

            <div v-if="movie.globalReleased" class="show-info">{{movie.showInfo}}</div>
            <div v-else class="show-info">{{movie.rt}}上映</div>
          </div>
        </div>
      </div>

      <div v-if="movie.globalReleased" class="button">
        <span class="fix">购票</span>
      </div>
      <div v-else class="button btn">
        <span class="fix">预售</span>
      </div>
    </div>
    </routerLink>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped lang="stylus">
.main-block
  display flex
  align-items center
  padding 12px 14px 12px 0
  border-bottom 0.5px solid #e6e6e6

.content-wrapper
  padding-left 10px
  text-align left
  width 57vw

.movie-title
  max-height 24px
  margin-bottom 7px
  line-height 24px
  overflow hidden
  font-size 17px
  color #333
  font-weight 700
  text-overflow ellipsis
  overflow hidden
  white-space nowrap

.score, .actor, .show-info
  font-size 13px
  color #666
  text-overflow ellipsis
  overflow hidden
  white-space nowrap

.grade
  font-weight 700
  color #faaf00
  font-size 15px

.person
  color #faaf00
  font-size 15px
  font-weight 600

.p-suffix
  font-size 13px
  display inline-block
  color #666
  font-weight normal

.button
  width 47px
  height 27px
  line-height 28px
  box-sizing border-box
  background-color #f03d37
  color #fff
  border-radius 4px
  white-space nowrap
  font-size 12px
  cursor pointer
  position absolute
  right 15px
  text-align center

.btn
  background-color #3c9fe6

.fix
  color #fff
</style>

