import { createApp } from 'vue'
import store from '@/store'
import App from '@/App.vue'

import '@arco-design/web-vue/es/message/style/css'
import 'virtual:windi.css'

import router from './router'

createApp(App).use(store).use(router).mount('#app')
