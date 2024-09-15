<template>
  <div class="intro-main">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>
              <span class="headline">Our Pricing</span>
            </v-card-title>
            <v-card-text>
              <p>Here you can add details about your pricing plans and services.</p>
              <!-- Add more content as needed -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
@media (max-width: 600px) {
  .intro-main {
    padding: 10px;
  }
}
</style>