import Vue from 'nativescript-vue'
import App from './App'
import store from './store'


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('MapView', ()=> require('nativescript-google-maps-sdk').MapView)


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()


