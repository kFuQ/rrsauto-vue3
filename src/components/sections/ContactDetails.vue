<template>
  <div class="contact-details">
    <v-card class="rounded-box">
      <v-card-title class="text-h5 font-weight-bold">Contact Details</v-card-title>
      <v-card-text>
        <div class="contact-item">
          <v-icon left>  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
          </v-icon>
          <span>30575 SE River Mill Rd, Estacada, OR 97023</span>
        </div>
        <div class="contact-item">
          <v-icon left>  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
          </v-icon>
          <span>(503) 779 4399</span>
        </div>
        <div class="contact-item">
          <v-icon left>  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
          </v-icon>
          <span>info@ravenauto.com</span>
        </div>
        <div class="contact-item">
          <v-icon left>  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.27 6c1.01 2.17.78 4.73-.33 6.81c-.94 1.69-2.29 3.12-3.44 4.69c-.5.7-1 1.45-1.37 2.26c-.13.27-.22.55-.32.83s-.19.56-.28.84c-.09.26-.2.57-.53.57c-.39 0-.5-.44-.58-.74c-.24-.73-.48-1.43-.85-2.1c-.42-.79-.95-1.52-1.49-2.23zM9.12 8.42l-3.3 3.92c.61 1.29 1.52 2.39 2.39 3.49c.21.25.42.51.62.78L13 11.67l-.04.01c-1.46.5-3.08-.24-3.66-1.68c-.08-.17-.14-.37-.18-.57a3 3 0 0 1 0-1zm-2.54-3.8l-.01.01c-1.62 2.05-1.9 4.9-.93 7.31L9.63 7.2l-.05-.05zm7.64-2.26L11 6.17l.04-.01c1.34-.46 2.84.12 3.52 1.34c.15.28.27.58.31.88c.06.38.08.65.01 1.02v.01l3.2-3.8a7 7 0 0 0-3.85-3.24zM9.89 6.89l3.91-4.65l-.04-.01C13.18 2.08 12.59 2 12 2c-1.97 0-3.83.85-5.15 2.31l-.02.01z"/></svg>
          </v-icon>
          <a href="https://maps.app.goo.gl/A9Bi43NpnBTUfKFt8" target="_blank" rel="noopener noreferrer">Google Maps</a>
        </div>
        <div class="contact-item">
          <v-icon left>  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"/></svg>
          </v-icon>
          <a href="https://maps.apple.com/?address=30575%20SE%20River%20Mill%20Rd,%20Estacada,%20OR%20%2097023,%20United%20States&ll=45.305247,-122.346846&q=30575%20SE%20River%20Mill%20Rd" target="_blank" rel="noopener noreferrer">Apple Maps</a>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ContactDetails'
}
</script>

<style scoped>
.contact-details {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 40vh; /* Use the entire height of the viewport */
  box-sizing: border-box;
}
.rounded-box {
  border-radius: 15px;
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.contact-item v-icon {
  margin-right: 10px; /* Add 10px spacing between the icon and the data */
}
</style>