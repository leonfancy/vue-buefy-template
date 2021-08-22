<template>
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
      <b-navbar-dropdown  v-if="isLoggedIn" :label="user.name" right>
        <b-navbar-item tag="router-link" :to="{path: '/setting'}">
          Setting
        </b-navbar-item>
        <b-navbar-item @click="logout">
          Logout
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item v-else tag="div">
        <div class="buttons">
          <b-button type="is-primary" tag="router-link" to="/signup"><strong>Sign up</strong></b-button>
          <b-button type="is-light" tag="router-link" to="/login">Login</b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavBar",
  computed: mapState('auth', ["user", "isLoggedIn"]),
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>
