<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "App",
  computed: mapState('auth', ["isLoggedIn"]),
  mounted() {
    if (this.isLoggedIn) {
      this.$store.dispatch('auth/loadUser')
    }
  }
}
</script>

<style>
</style>
