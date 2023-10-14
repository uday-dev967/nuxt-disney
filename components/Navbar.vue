<template>
  <v-app-bar fixed app>
    <v-toolbar-title class="title-head">
      <nuxt-link to="/" exact class="app-title">
        <v-img class="header-logo" :src="logo" width="110"></v-img>
      </nuxt-link>
    </v-toolbar-title>
    <v-tabs class="ml-5">
      <v-tab v-for="(tabItem, index) in tabItems" :key="index" :to="tabItem.to">
        <v-icon>{{ tabItem.icon }}</v-icon>
        <v-title class="ml-2">{{ tabItem.title }}</v-title>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>
<script>
import appLogo from '~/assets/applogo.svg'
export default {
  name: 'NavBar',
  data() {
    return {
      logo: appLogo,
      tabItems: [
        { icon: 'mdi-home', to: '/', title: 'home' },
        { icon: 'mdi-magnify', to: '/search', title: 'search' },
        { icon: 'mdi-plus', to: '/watchlist', title: 'watchlist' },
        { icon: 'mdi-star', to: '/original', title: 'original' },
        { icon: 'mdi-movie', to: '/movies', title: 'movies' },
        { icon: 'mdi-television', to: '/series', title: 'series' },
      ],
    }
  },
}
</script>
