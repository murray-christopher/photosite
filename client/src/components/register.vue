<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="email" name="email" placeholder="email" v-model="email"/>
    <br>
    <input type="password" name="password" placeholder="password" v-model="password" />
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authService from '@/services/authService'
export default {
  name: 'register',
  data () {
    return {
      msg: 'Register',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
