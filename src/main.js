import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import * as echarts from 'echarts'
import moment from 'moment'
// import G6 from '@antv/g6'
import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:89'
// axios.defaults.baseURL =  'http://113.54.15.60:89'

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
// console.log(echarts)
app.mount('#app')

app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$moment = moment
app.config.globalProperties.$http = axios;
