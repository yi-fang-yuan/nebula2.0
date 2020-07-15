import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "bulma/css/bulma.css"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import fullscreen from 'vue-fullscreen';
Vue.use(ElementUI);
Vue.use(fullscreen)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
