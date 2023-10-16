<template>
  <section class="home__content-category-container">
    <div
      v-for="(category, index) in categoryList"
      :key="index"
      class="home__content-category"
    >
      <img
        class="home__content-category-img"
        :src="category.src"
        :alt="category.src"
      />
    </div>
  </section>
</template>

<script>
import disney from "../assets/disney.png";
import pixar from "../assets/pixar.png";
import marvel from "../assets/marvel.png";
import starwars from "../assets/starwars.png";
import nationalgeo from "../assets/nationalgeo.png";

export default {
  name: "HomeCategories",
  data() {
    return {
      categoryList: [
        { src: disney, alt: "diney" },
        { src: pixar, alt: "diney" },
        { src: marvel, alt: "diney" },
        { src: starwars, alt: "diney" },
        { src: nationalgeo, alt: "diney" },
      ],
    };
  },
};
</script>

<style></style>
