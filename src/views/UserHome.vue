<template>
  <container>
    <user-box></user-box>
  </container>
</template>

<script>
import Container from "@/components/Container";
import UserBox from "@/components/UserBox";

import {mapState} from "vuex";

export default {
  name: 'UserHome',
  components: {
    UserBox,
    Container
  },
  computed: mapState('auth', ['isLoggedIn'])
}
</script>
