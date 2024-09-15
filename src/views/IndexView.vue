<template >
  <div class="intro-main">
    <h1 class="text-h4 text-md-h2 text-center font-weight-black contact-heading">Welcome to Raven Mobile Auto and RV</h1>
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
  width: 100%;
  min-height: 120vh; /* Ensure it covers the full viewport height */
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
  box-sizing: border-box;
}
.contact-heading {
  padding: 20px; /* Add 20px of padding */
  margin-bottom: 0; /* Remove bottom margin */
  margin-top: 80px; /* Add top margin to avoid being covered by the header */
}

@media (min-width: 601px) and (max-width: 1000px) {
  .intro-main {
    padding: 5px;
    min-height: 140vh; /* Adjust minimum height for screens between 600 and 1000 pixels wide */
  }
}

@media (min-width: 476px) and (max-width: 600px) {
  .intro-main {
    padding: 7px;
    min-height: 150vh; /* Adjust minimum height for screens between 476 and 600 pixels wide */
  }
}

@media (max-width: 475px) {
  .intro-main {
    padding: 10px;
    min-height: 170vh; /* Increase minimum height for mobile devices */
  }
}

@media (max-width: 380px) {
  .intro-main {
    padding: 5px;
    min-height: 210vh; /* Increase minimum height for mobile devices */
  }
}

@media (max-width: 290px) {
  .intro-main {
    padding: 2px;
    min-height: 260vh; /* Increase minimum height for mobile devices */
  }
}

@media (max-width: 235px) {
  .intro-main {
    padding: 2px;
    min-height: 290vh; /* Increase minimum height for mobile devices */
  }
}
</style>
