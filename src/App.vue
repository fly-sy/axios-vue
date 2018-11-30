<template>
  <div id="app">

  </div>
</template>

<script>
import { getInfo, getList } from "./api";

export default {
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      let params = {
      };
      getInfo(params).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
#app {
}
</style>
