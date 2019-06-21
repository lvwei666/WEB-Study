<template>
  <div class="container">
    {{msg}}
    <child @wn="getWn"></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  name: "demo1",
  data() {
    return {
      msg: '传说'
    };
  },
  components: {
    child
  },
  methods: {
    getWn (data) {
      this.msg = data;
    }
  }
};
</script>