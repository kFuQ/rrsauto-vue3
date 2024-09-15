<template>
  <v-app>
    <TopHeader />
    <router-view></router-view>
    <BottomFooter />
  </v-app>
</template>

<script>
import TopHeader from './components/TopHeader.vue'
import BottomFooter from './components/sections/BottomFooter.vue'
import '@mdi/font/css/materialdesignicons.css'

export default {
  name: 'app',
  components: {
    BottomFooter,
    TopHeader
  }
}
</script>

<style>
/* No inline styles here, global styles will be applied */
</style>