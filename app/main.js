import Vue from 'nativescript-vue'
import App from './App'
import store from './store'

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.paths = {
  'fa': 'fontawesome.css',
  'ion': 'ionicons.css'
};
TNSFontIcon.loadCss();

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('MapView', ()=> require('nativescript-google-maps-sdk').MapView)


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()


