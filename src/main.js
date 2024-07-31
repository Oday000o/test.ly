import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import 'bootstrap/dist/css/bootstrap.css' 
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
const app=createApp(App)
app.use(bootstrap)
app.use(MotionPlugin)
app.mount('#app')
