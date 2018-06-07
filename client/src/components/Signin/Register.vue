<template>
  <form>
    <small class="text-center">Register for free. No credit card required... ever</small>
    <br />
    <br />
    <div class="form-group">
      <label for="first_name">First Name</label>
      <input type="name" class="form-control" id="first_name" placeholder="First Name">
    </div>
    <div class="form-group">
      <label for="last_name">Last Name</label>
      <input type="name" class="form-control" id="last_name" placeholder="Last Name">
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="password_1">Password</label>
      <input type="password" class="form-control" id="password_1" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="password_2">Confirm Password</label>
      <input type="password" class="form-control" id="password_2" placeholder="Repeat Password">
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-success">Register</button>
    </div>
    <br />
    <div class="row justify-content-center">
      <p>Already have an account?&nbsp;</p><router-link to="login">Log in</router-link>
    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {

    }
  }
};
</script>

<style>
</style>
