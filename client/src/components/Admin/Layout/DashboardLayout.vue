<template>
  <div>
    <top-navbar></top-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "./TopNav.vue"
export default {
  components: {
    'top-navbar': TopNav
  },
  data () {
    return {
    }
  }
};
</script>

<style>
</style>
