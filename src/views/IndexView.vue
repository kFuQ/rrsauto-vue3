<template >
  <div class="intro-main"><br />
    
    <IntroMain />
  </div>
</template>

<script>
import IntroMain from '@/components/sections/IntroMain.vue'

export default {
  name: 'HomePage',
  components: {
    IntroMain
  }
}
</script>

<style scoped>
/* Add any styles for your home page here */
.intro-main {
  padding: 0 20px;
}
@media (max-width: 600px) {
  .intro-main {
    padding: 0 10px;
  }
}
</style>
