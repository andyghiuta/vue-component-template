<template>
  <div id="app">
    <ComponentOne />
  </div>
</template>

<script>
import ComponentOne from './components/ComponentOne.vue';

export default {
  name: 'app',
  components: {
    ComponentOne,
  },
};
</script>

<style lang="less">
@import '~bootstrap/less/bootstrap';
@import '~font-awesome/css/font-awesome.min.css';
</style>
