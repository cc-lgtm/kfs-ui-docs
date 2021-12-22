import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import KfsUi from 'kfs-ui'
import 'kfs-ui/lib/index.css'

createApp(App).use(router).use(KfsUi).mount('#app')
