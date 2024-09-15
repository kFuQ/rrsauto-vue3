<template>
  <div class="intro-main">
    <h1 class="text-h4 text-md-h2 text-center font-weight-black contact-heading">Contact Us</h1>
    <h2 class="text-h6 text-md-h5 text-center font-weight-black contact-heading">If you have any questions on the services we offer or if you need a custom quote on services, please contact us using the info below.</h2>
    <ContactDetails />
  </div>
</template>

<script>
import ContactDetails from '@/components/sections/ContactDetails.vue'

export default {
  name: 'ContactPage',
  components: {
    ContactDetails
  }
}
</script>

<style scoped>
.intro-main {
  width: 100%;
  min-height: 100vh; /* Ensure it covers the full viewport height */
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
  box-sizing: border-box;
}
.contact-heading {
  padding: 10px; /* Add 20px of padding */
  margin-bottom: 0; /* Remove bottom margin */
  margin-top: 80px; /* Add top margin to avoid being covered by the header */
}
.contact-form {
  margin-bottom: 20px; /* Adjust the margin to reduce spacing */
}
@media (max-width: 600px) {
  .intro-main {
    padding: 10px;
  }
}
@media (min-width: 476px) and (max-width: 600px) {
  .intro-main {
    padding: 7px;
    min-height: 150vh; /* Adjust minimum height for screens between 476 and 600 pixels wide */
  }
}
</style>