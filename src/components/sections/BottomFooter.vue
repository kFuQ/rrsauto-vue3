<template>
  <v-footer app class="footer">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <p>&copy; {{ currentYear }} Raven Mobile Auto and RV.</p>
          <p>All rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'BottomFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
  .text-center {
    text-align: center;
  }
  .footer {
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 20px;
    text-align: center;
    padding-bottom: 50px; /* Add padding at the bottom */
  }
</style>
