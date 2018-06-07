<template>
  <div class="container-fluid">
    <div class="banner nav-link">
      <h1><router-link to="/">{{ SiteName }}</router-link></h1>
    </div>

    <div class="row justify-content-md-center">
      <div class="loginForm">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      SiteName: 'PhotoPro'
    }
  }
};
</script>

<style>
</style>
