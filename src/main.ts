import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Carousel,CarouselItem, Dialog } from 'element-ui';

Vue.config.productionTip = false

Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Dialog.name, Dialog);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
