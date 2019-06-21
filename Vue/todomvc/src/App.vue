<template>
  <div>
    <p>
      clicked {{$store.state.count}} times: count is {{evenOrOdd}}
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">Increment async</button>
    </p>
    <p><counter /></p>
  </div>
</template>
<script>
// 两个兄弟组件， 共享count 数据  
// count 不应该属于Counter组件私有， data(){} , props 
import Counter from './components/Counter';
// 借
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      
    }
  },
  computed: 
    // 如果有多处要用到奇偶判断怎么办？
    mapGetters([
      'evenOrOdd'
    ]),
  // methods: mapActions([
  //   'decrement',
  //   'incrementIfOdd',
  //   'incrementAsync'
  // ]),
    methods: {
      ...mapActions(['decrement','incrementIfOdd','incrementAsync'])
    },
  components: {
    'counter': Counter
  }
}
</script>
<style>
  
</style>
