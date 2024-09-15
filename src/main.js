import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import router from './router'
import './global.css'  // Import the global CSS file
import '@fortawesome/fontawesome-free/css/all.css'  // Import Font Awesome CSS


createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
