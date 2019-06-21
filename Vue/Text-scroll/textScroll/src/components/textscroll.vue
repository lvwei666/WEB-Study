<template>
  <section>
    <div class="textscroll">
      <transition-group tag="ul" :name="scrolltype">
        <li v-for="(item, index) in dataList" :key="index" v-show="index === count">
          <p>{{item.text}}</p>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      // dataList: [{ text: "坚持" }, { text: "不要脸" }, { text: "坚持不要脸" }]
    };
  },

  props: ['scrolltype', 'dataList'],

  created() {
    setInterval(() => {
      this.getText();
    },2000);
  },
  methods: {
    getText() {
      let len = this.dataList.length;
      if (len === 0) {
        return;
      }
      if (this.count === len - 1) {
        this.count = 0;
      } else {
          this.count++;
      }
    }
  }
};
</script>

<style scoped>
ul {
  margin: 5px 0;
  padding: 0;
  background-color: #fff;
  overflow: hidden;
  height: 40px;
}
li {
  height: 40px;
  list-style: none;
  line-height: 1;
  overflow: hidden;
}
.scroll-up-enter-active {
  transition: all 1s ease;
}
.scroll-up-leave-active {
  transition: all 1s ease;
}
.scroll-up-enter {
  transform: translate3d(0, 100%, 0);
}
.scroll-up-leave-to {
  transform: translate3d(0, -100%, 0);
}

.scroll-left-enter-active {
  transition: all 1s ease;
}
.scroll-left-leave-active {
  transition: all 1s ease;
}
.scroll-left-enter {
  transform: translate3d(100%, 0, 0);
}
.scroll-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
