<template>
  <div>
    <nav-bar></nav-bar>
    <slot></slot>
    <v-footer></v-footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import VFooter from "@/components/VFooter";

export default {
  name: "Container",
  components: {
    NavBar,
    VFooter
  },
}
</script>

<style scoped>

</style>
