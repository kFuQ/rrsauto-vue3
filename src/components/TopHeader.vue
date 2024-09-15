<template>
  <v-app-bar app>
    <v-container fluid class="intro-main">
      <v-row align="center" justify="space-between">
        <v-col cols="auto" class="logo-container">
          <LogoRaven />
        </v-col>
        <v-col cols="auto" class="nav-menu">
          <v-btn text to="/" class="nav-item">Home</v-btn>
          <v-btn text to="/contact" class="nav-item">Contact</v-btn>
          <v-btn text to="/pricing" class="nav-item">Pricing</v-btn>
        </v-col>
        <v-col cols="auto" class="theme-switch-container mt-5">
          <v-switch
            v-model="isDarkTheme"
            :label="themeLabel"
            @change="toggleTheme"
            inset
          >
            <template v-slot:label>
              <v-icon v-if="isDarkTheme">mdi-weather-night</v-icon>
              <v-icon v-else>mdi-weather-sunny</v-icon>
            </template>
          </v-switch>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import LogoRaven from '../assets/LogoRaven.vue'

export default {
  name: 'TopHeader',
  components: {
    LogoRaven
  },
  data() {
    return {
      isDarkTheme: false
    }
  },
  computed: {
    themeLabel() {
      return this.isDarkTheme ? 'Dark Mode' : 'Light Mode';
    }
  },
  methods: {
    toggleTheme() {
      const newTheme = this.isDarkTheme ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme);
    }
  },
  mounted() {
    // Set initial theme based on system preference or default to light
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.isDarkTheme = prefersDarkScheme;
    this.toggleTheme();
  }
};
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: flex-start;
  padding-left: 75px; /* Add padding to the left */
}
.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-item {
  font-weight: bold;
  margin: 0 10px; /* Ensure items are spaced out by at least 20px */
}
.theme-switch-container {
  display: flex;
  align-items: center;
}
@media (max-width: 600px) {
  .logo-container {
    padding-left: 10px;
  }
  .theme-switch-container {
    padding-right: 10px;
  }
  .nav-menu {
    display: none; /* Hide navigation menu on small screens */
  }
}
</style>