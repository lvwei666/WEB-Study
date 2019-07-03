<template>
  <div class="home">
    123
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Action } from 'vuex-class';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  private cate: string = 'in_theaters';
  private active: number = 0;
  private loading: boolean = true;
  private movieListData = null;
  @Action private movieList!: (cate: string) => any;

  private created() {
    // console.log('333')
    this.movieList(this.cate)
      .then((res: any) => {
        this.movieListData = res.subjects;
        this.loading = false;
        console.log(res.subjects);
      })
  }
}
</script>
