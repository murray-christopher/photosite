<template>
  <div>
    <form>
      <small class="text-center">Please enter your email below to reset your password.</small>
      <br />
      <br />
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="name" class="form-control" id="email" placeholder="Email">
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-success">Reset Password</button>
      </div>
      <br />
      <div class="row justify-content-center">
        <p>Remember your password?&nbsp;</p><router-link to="login">Log in</router-link>
      </div>
    </form>

  </div>
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
