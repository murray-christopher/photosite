<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
    <div class="form-group form-check space-between">
      <input type="checkbox" class="form-check-input" id="remember_me">
      <label class="form-check-label" for="rememeber_me">Rememeber me</label>
      <a href="./passwordreset"><small>Forgot password?</small></a>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-success">Login</button>
    </div>
    <br />
    <div class="row justify-content-center">
      <p>Don't have an account?&nbsp;</p><router-link to="register">SignUp</router-link>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      showLogin: true
    }
  },
  methods: {
    register () {

    }
  }
};
</script>

<style>
</style>
