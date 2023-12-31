import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
// svg icons
import 'virtual:svg-icons-register'
// normalize.css
import 'normalize.css'
// element-plus css
import 'element-plus/dist/index.css'
// router
import router from './router'
// permission
import './permission'
// store
import pinia from './store'
import './styles/index.scss'
import './rem'
import 'animate.css'

const app = createApp(App)

app.use(router).use(pinia)
app.mount('#app')
