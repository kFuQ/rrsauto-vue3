<template>
  <div class="intro-main">
    <h1 class="text-h1 text-md-h4 text-center font-weight-black contact-heading">Contact Us</h1>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/sections/contactForm.vue'

export default {
  name: 'ContactPage',
  components: {
    ContactForm
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
  padding: 20px; /* Add 20px of padding */
  margin-bottom: 0; /* Remove bottom margin */
  margin-top: 80px; /* Add top margin to avoid being covered by the header */
}
@media (max-width: 600px) {
  .intro-main {
    padding: 10px;
  }
}
</style>