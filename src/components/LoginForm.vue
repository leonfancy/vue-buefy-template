<template>
  <form @submit.prevent="login" class="box">
    <b-field label="Email">
      <b-input required v-model="credential.email" placeholder="Email" type="email" icon="envelope"
               :use-html5-validation="false" validation-message="Not a valid email"/>
    </b-field>

    <b-field label="Password">
      <b-input required v-model="credential.password" placeholder="Password" type="password" icon="key"
               :use-html5-validation="false" password-reveal></b-input>
    </b-field>

    <b-button type="is-primary" native-type="submit">Login</b-button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      credential: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', this.credential)
      this.$router.push({name: "UserHome"})
    }
  }
}
</script>

<style scoped>

</style>
