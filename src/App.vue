<template>
  <div id="app">
    <PageOne v-if="5 > 3"/>
    <PageTwo v-else/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const PageOne = import('./pages/PageOne.vue');
const PageTwo = import('./pages/PageTwo.vue');

export default Vue.extend({
  name: 'App',
  components: {
    PageOne,PageTwo
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
