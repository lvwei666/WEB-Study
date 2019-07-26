<template>
  <div class="cinema-item">
    <div class="title-block">
      <div class="title line-ellipsis">
        <span>{{cinema.nm}}</span>
        <span class="price-block">
          <span class="price">{{cinema.sellPrice}}</span>
          <span class="q">元起</span>
        </span>
      </div>
      <div class="location-block">
        <div class="flex line-ellipsis">{{cinema.addr}}</div>
        <div class="distance">{{cinema.distance}}</div>
      </div>
      <div class="flex"></div>
      <div class="label-block">
        <div class="endorse">改签</div>
        <div class="snack">小吃</div>
        <div class="vipTag">折扣卡</div>
      </div>
      <div class="discount-block">
        <div>
          <div class="discount-label">
            <img src="../assets/images/card.png" alt=""/>
          </div>
          <div class="discount-label-text">{{cinema.promotion.cardPromotionTag}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cinema: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped lang="stylus">
.cinema-item
  padding 13px 15px 13px 0
  margin-left 15px
  background-color #fff
  position relative
  overflow hidden
  .title-block
    display block
    line-height 1.5
    .title
      height 23px
      line-height 23px
      font-size 16px
      color #000
      .price-block
        padding-top 9px
        padding-left 3px
        .price
          color #f03d37
          font-size 18px
        .q
          margin-left 3px
          font-size 11px
          color #f03d37
    .location-block
      margin-top 6px
      font-size 13px
      color #666
      display flex
      .flex
        flex 1
      .distance
        margin-left 5px
    .label-block
      height 17px
      line-height 17px
      margin-top 4px
      margin-bottom 4px
      overflow hidden
      font-size 0
      div
        position relative
        display inline-block
        padding 0 3px
        height 15px
        line-height 15px
        border-radius 2px
        font-size .6rem
      div+div
        margin-left 5px
      .endorse
        color #589daf
        border 1px solid #589daf
      .snack
        color #f90
        border 1px solid #f90
      .vipTag
        color #f90
        border 1px solid #f90
    .discount-block
      color #999
      font-size 14px
      div
        .discount-label
          width 15px
          height 14px
          position relative
          top 3px
          display inline-block
          img 
            width 100%
            display block
        .discount-label-text
          display inline-block
          font-size 11px
          margin-left 4px
</style>
