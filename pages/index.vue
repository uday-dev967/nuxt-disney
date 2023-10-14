<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <carousel-component></carousel-component>
    </v-col>
  </v-row>
</template>

<script>
import Carousel from '~/components/Carousel.vue'
export default {
  name: 'IndexPage',
  components: {
    'carousel-component': Carousel,
  },
}
</script>
