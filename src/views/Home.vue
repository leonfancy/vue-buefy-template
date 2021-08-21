<template>
  <div>
    <b-navbar wrapper-class="container is-max-desktop">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/logo.png">
          <div class="ml-2 has-text-weight-bold is-size-5 has-text-primary">Vue Template</div>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
        <b-navbar-item href="#">
          Documentation
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container is-max-desktop">
          <div class="columns is-vcentered is-variable  is-6">
            <div class="column">
              <p class="title">
                Vue Template Built with Buefy.js
              </p>
              <p class="subtitle">
                A Vue template project that help to quickly create web application. Powered by Buefy.js and Bulma.
              </p>
              <p>
                <b-button type="is-primary is-light" native-type="submit"><strong>Sign up</strong></b-button>
              </p>
            </div>
            <div class="column">
              <form @submit.prevent="login" class="box">
                <b-field label="Email">
                  <b-input required v-model="email" placeholder="Email" type="email" icon="envelope"
                           :use-html5-validation="enableValidation"
                           validation-message="Not a valid email"/>
                </b-field>

                <b-field label="Password">
                  <b-input required v-model="password" placeholder="Password" type="password" icon="key"
                           :use-html5-validation="enableValidation"
                           password-reveal></b-input>
                </b-field>

                <b-button type="is-primary" native-type="submit">Login</b-button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: '',
      enableValidation: false
    }
  },
  methods: {
    login () {
      // this.enableValidation = true
      console.log("login")
    }
  }
}
</script>
