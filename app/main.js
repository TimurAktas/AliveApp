import Vue from 'nativescript-vue'
import App from './App'
import store from './store/store'
// import {getBoolean,setBoolean,getNumber,setNumber,getString,setString,hasKey,remove,clear} from "tns-core-modules/application-settings";

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false


//Plugins implementierung
Vue.registerElement('MapView', ()=> require('nativescript-google-maps-sdk').MapView)
Vue.registerElement('PullToRefresh',() => require('@nstudio/nativescript-pulltorefresh').PullToRefresh);

var firebase = require("nativescript-plugin-firebase");
const application = require("tns-core-modules/application");

application.on(application.launchEvent, (args) => {
  firebase.init()
    .then(
      instance => {
        console.log("firebase.init done");
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );
  });



new Vue({
  store,
  render: h => h(App)
}).$start()



