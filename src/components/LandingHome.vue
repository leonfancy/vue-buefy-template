<template>
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
              <b-button type="is-primary is-light" tag="router-link" to="/signup"><strong>Sign up</strong></b-button>
            </p>
          </div>
          <div class="column">
            <login-form></login-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "LandingHome",
  components: {
    LoginForm,
  }
}
</script>

<style scoped>

</style>
