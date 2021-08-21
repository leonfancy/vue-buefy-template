<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container columns">
        <div class="column is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop is-4-widescreen is-offset-4-widescreen">
          <router-link to="/" class="is-block block is-flex is-align-items-center is-justify-content-center">
            <figure class="image is-32x32 mr-3">
              <img src="../assets/logo.png"/>
            </figure>
            <div class="has-text-weight-bold is-size-5 has-text-primary">Vue Template</div>
          </router-link>
          <div class="block has-text-centered is-size-5">Login to start</div>
          <login-form></login-form>
          <p>Don't have an account?
            <router-link to="/register" class="has-text-primary">Sign up</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm
  }
}
</script>

<style scoped>

</style>
