<template>
    <div class="intro-main">
        <h1 class="text-h4 text-md-h1 text-center font-weight-black contact-heading">Our Pricing</h1>
        <!-- Add your pricing content here -->
    </div>
</template>

<script>
export default {
  name: 'OurPricing'
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
@media (min-width: 476px) and (max-width: 600px) {
  .intro-main {
    padding: 7px;
    min-height: 150vh; /* Adjust minimum height for screens between 476 and 600 pixels wide */
  }
}
</style>