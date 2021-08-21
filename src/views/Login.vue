<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop is-4-widescreen is-offset-4-widescreen">
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
  name: "Login",
  components: {
    LoginForm
  }
}
</script>

<style scoped>

</style>
