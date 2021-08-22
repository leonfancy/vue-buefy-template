<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop is-4-widescreen is-offset-4-widescreen">
            <router-link to="/" class="block is-flex is-align-items-center is-justify-content-center">
              <figure class="image is-32x32 mr-3">
                <img src="../assets/logo.png"/>
              </figure>
              <div class="has-text-weight-bold is-size-5 has-text-primary">Vue Template</div>
            </router-link>
            <div class="block has-text-centered is-size-5">Create new account</div>
            <form @submit.prevent="signup" class="box">
              <b-notification v-if="!!errorMessage" type="is-danger is-light">
                {{ errorMessage }}
              </b-notification>
              <b-field label="Name">
                <b-input required v-model="user.name" placeholder="Name" icon="user" :use-html5-validation="false"/>
              </b-field>
              <b-field label="Email">
                <b-input required v-model="user.email" placeholder="Email" type="email" icon="envelope"
                         :use-html5-validation="false" validation-message="Not a valid email"/>
              </b-field>

              <b-field label="Password">
                <b-input required v-model="user.password" placeholder="Password" type="password" icon="key"
                         :use-html5-validation="false" password-reveal></b-input>
              </b-field>

              <b-field label="Password Confirmation">
                <b-input required v-model="user.passwordConfirm" placeholder="Repeat your password" type="password"
                         icon="key" password-reveal></b-input>
              </b-field>

              <b-button type="is-primary" native-type="submit">Sign up</b-button>
            </form>
            <p>Already have an account?
              <router-link to="/login" class="has-text-primary">Login</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Register",
  components: {},
  data() {
    return {
      errorMessage: '',
      user: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }
    }
  },
  methods: {
    signup() {
      this.errorMessage = ''

      if (this.user.passwordConfirm !== this.user.password) {
        this.errorMessage = 'Password confirmation is wrong'
        return
      }

      this.$store.dispatch('auth/signup', this.user)
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>
