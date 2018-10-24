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
        __t: 1540365673211,
        page: 1,
        count: 5
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
