<template>
  <v-app dark>
    <nav-bar />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    'nav-bar': Navbar,
  },
  data() {
    return {}
  },
}
</script>
