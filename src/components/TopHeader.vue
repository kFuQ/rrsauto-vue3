<template>
  <v-app-bar app>
    <v-container fluid class="intro-main">
      <v-row align="center" justify="space-between">
        <v-col cols="auto" class="logo-container">
          <LogoRaven />
        </v-col>
        <v-col cols="auto" class="nav-menu">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/contact" class="nav-item">Contact</router-link>
          <router-link to="/pricing" class="nav-item">Pricing</router-link>
        </v-col>
        <v-col cols="auto" class="theme-switch-container mt-5">
          <v-switch
            v-model="isDarkTheme"
            :label="themeLabel"
            @change="toggleTheme"
            inset
          >
            <template v-slot:label>
              <v-icon v-if="isDarkTheme">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3zm3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95zm-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31"/></svg>
              </v-icon>
              <v-icon v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0-7l2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm.02 10l1.76-3.77a7.13 7.13 0 0 0 2.38 4.14zM20.65 7l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15zm-.01 10l-4.14.36c.59-.51 1.12-1.14 1.54-1.86c.42-.73.69-1.5.83-2.29zM12 22l-2.41-3.44c.74.27 1.55.44 2.41.44c.82 0 1.63-.17 2.37-.44z"/></svg>
              </v-icon>
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
  text-decoration: none;
  color: var(--text-color);
}
.nav-item:hover {
  color: var(--primary-color);
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