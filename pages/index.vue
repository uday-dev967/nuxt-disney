<template>
  <div class="home">
    <carousel-component></carousel-component>
    <categories-component></categories-component>
    <div class="home__categorey-slider-container">
      <slider-component
        v-for="(videoByCategory, index) in getVideosByCategory"
        :key="index"
        :video-by-category="videoByCategory"
        class="disney-slider"
      ></slider-component>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Carousel from '~/components/Carousel.vue'
import Categories from '~/components/Categories.vue'
import Slider from '~/components/Slider.vue'
export default {
  name: 'IndexPage',
  components: {
    'carousel-component': Carousel,
    'categories-component': Categories,
    'slider-component': Slider,
  },
  computed: {
    ...mapGetters('video', ['getVideosByCategory']),
  },
  created() {
    this.fetchVidoes()
  },

  methods: {
    ...mapActions('video', ['fetchVidoes']),
    ...mapActions('user', ['fetchUsers']),
  },
}
</script>
