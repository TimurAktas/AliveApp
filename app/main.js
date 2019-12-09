import Vue from 'nativescript-vue'
import App from './App'
import store from './store/store'
// import {getBoolean,setBoolean,getNumber,setNumber,getString,setString,hasKey,remove,clear} from "tns-core-modules/application-settings";

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false

Vue.registerElement('MapView', ()=> require('nativescript-google-maps-sdk').MapView)

var firebase = require("nativescript-plugin-firebase");
 
firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
    function () {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);

new Vue({
  store,
  render: h => h(App)
}).$start()



