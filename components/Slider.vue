<template>
  <div class="common-slider">
    <h2 class="category-title">{{ videoByCategory.name }}</h2>
    <div class="category-carousel">
      <div
        v-for="(video, index) in videoByCategory.thumbnails"
        :key="index"
        class="category-carousel-card"
      >
        <router-link
          :to="{
            name: 'video-show',
            params: {
              id: video.id,
              cat: videoByCategory.cat,
              catId: videoByCategory.id,
            },
          }"
          class="category-carousel-img__container"
        >
          <img
            :src="video.thumnail"
            :alt="video.title"
            class="category-carousel-card-img"
          />
        </router-link>
      </div>
    </div>

    <button class="btn-prev" @click="scrollCarousel(-1)">
      <v-icon dark large class="slider-arrow">mdi-chevron-left</v-icon>
    </button>

    <button class="btn-next" @click="scrollCarousel(1)">
      <v-icon dark large class="slider-arrow">mdi-chevron-right</v-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  props: {
    videoByCategory: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      firstCardWidth: 0,
    }
  },
  methods: {
    scrollCarousel(direction) {
      const carousel = this.$el.querySelector('.category-carousel')
      this.firstCardWidth = this.$el.querySelector(
        '.category-carousel-card'
      ).offsetWidth

      if (direction === 1) {
        carousel.scrollLeft += this.firstCardWidth
      } else if (direction === -1) {
        carousel.scrollLeft -= this.firstCardWidth
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.common-slider {
  position: relative;
  max-width: 90%;
  .category-carousel {
    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .category-carousel-card {
      display: flex;
      justify-content: center;
      align-items: center;
      scroll-snap-align: start;
      cursor: pointer;
      flex-direction: column;
    }
  }
}
</style>
