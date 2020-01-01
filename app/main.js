import Vue from 'nativescript-vue'
import App from './App'
import Login from './views/Login'
import store from './store/store'
import {getBoolean,setBoolean,getNumber,setNumber,getString,setString,hasKey,remove,clear} from "tns-core-modules/application-settings";
import RadAutoComplete from "nativescript-ui-autocomplete/vue";
Vue.use(RadAutoComplete);
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false


//Plugins implementierung
Vue.registerElement('MapView', ()=> require('nativescript-google-maps-sdk').MapView)
Vue.registerElement('PullToRefresh',() => require('@nstudio/nativescript-pulltorefresh').PullToRefresh);

var firebase = require("nativescript-plugin-firebase");
const application = require("tns-core-modules/application");




application.on(application.launchEvent, (args) => {
  firebase.init({
    onAuthStateChanged: data => { // optional but useful to immediately re-logon the user when they re-visit your app
      console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
      if(data.loggedIn){
        store.dispatch("initUserData")
        store.dispatch("loadEvents")
        store.dispatch("getEventRequests");
      }
    }
  })
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
  render: h => h('frame', [h(getBoolean("LoginCookie")? App : Login)])
}).$start()



