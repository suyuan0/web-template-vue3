import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// svg icons
import 'virtual:svg-icons-register'
// normalize.css
import 'normalize.css'
// element-plus css
import 'element-plus/dist/index.css'
import router from './router'
import './permission'

const app = createApp(App)

app.use(router)
app.mount('#app')
