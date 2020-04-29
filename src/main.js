import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/css/swiper.css'  //引入样式

Vue.config.productionTip = false
Vue.use(vueSwiper)  //使用插件
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
