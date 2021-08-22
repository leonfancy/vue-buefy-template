<template>
  <div>
    <nav-bar></nav-bar>
    <user-home v-if="isLoggedIn"></user-home>
    <landing-home v-else></landing-home>
    <v-footer></v-footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import VFooter from "@/components/VFooter";
import LandingHome from "@/components/LandingHome";
import UserHome from "@/components/UserHome";

import {mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    LandingHome,
    UserHome,
    NavBar,
    VFooter
  },
  computed: mapState('auth', ['isLoggedIn'])
}
</script>
