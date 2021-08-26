<template>
  <container>
    <landing-home></landing-home>
  </container>
</template>

<script>
import Container from "@/components/Container";
import LandingHome from "@/components/LandingHome";

import {mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    LandingHome,
    Container
  },
  computed: mapState('auth', ['isLoggedIn'])
}
</script>
