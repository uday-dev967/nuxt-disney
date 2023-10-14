<!-- components/CarouselComponent.vue -->
<template>
  <div class="carousel-container">
    <div
      class="carousel-slide"
      :style="{ transform: `translateX(${translateX}%)` }"
    >
      <div v-for="(item, index) in carouselItems" :key="index" class="slide">
        <img class="carousel-slide-img" :src="item.src" alt="Image" />
      </div>
    </div>
    <div class="carousel-indicators">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="carousel-indicator"
        :class="{ active: currentIndex === index }"
        @click="changeSlide(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import deadpool from '../assets/deadpool.jpg'
import avengers from '../assets/avengers.jpg'
import joker from '../assets/joker.jpg'

export default {
  name: 'CarouselComponent',
  data() {
    return {
      currentIndex: 0,
      translateX: 0,
      image: avengers,
      carouselItems: [{ src: avengers }, { src: joker }, { src: deadpool }],
    }
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index
      this.translateX = -index * 100
    },
  },
}
</script>
<style scoped></style>
