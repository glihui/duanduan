import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Carousel,CarouselItem } from 'element-ui';

Vue.config.productionTip = false

Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
