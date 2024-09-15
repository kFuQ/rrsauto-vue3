<template>
  <v-app-bar app>
    <v-container fluid class="intro-main">
      <v-row align="center" justify="space-between">
        <v-col cols="auto" class="logo-container ">
          <LogoRaven />
        </v-col>
        <v-spacer></v-spacer>
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
  padding-top: 10px;
  padding-bottom: 10px;
}
.theme-switch-container {
  display: flex;
  align-items: center;
}
</style>