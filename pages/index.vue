<template>
  <div>
    <carousel-component></carousel-component>
  </div>
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
