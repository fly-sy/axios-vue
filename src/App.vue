<template>
  <div id="app">
    {{obj}}
  </div>
</template>

<script>
import { getInfo } from "./api";

export default {
  data: () => ({
    obj: null
  }),
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      let params = {};
      getInfo(params).then(res => {
        // console.log(res);
        this.obj = res;
      });
    }
  }
};
</script>

<style>
#app {
}
</style>
