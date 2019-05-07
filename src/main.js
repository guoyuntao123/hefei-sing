// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/scss/font-awesome.scss'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
import Swiper from 'swiper'

Vue.config.productionTip = false
/*使用VueResource插件*/
Vue.use(VueResource,Swiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
