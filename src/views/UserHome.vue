<template>
  <div>
    <nav-bar></nav-bar>
    <user-box></user-box>
    <v-footer></v-footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import VFooter from "@/components/VFooter";
import UserBox from "@/components/UserBox";

import {mapState} from "vuex";

export default {
  name: 'UserHome',
  components: {
    UserBox,
    NavBar,
    VFooter
  },
  computed: mapState('auth', ['isLoggedIn'])
}
</script>
