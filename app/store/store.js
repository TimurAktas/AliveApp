import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from "nativescript-plugin-firebase"
import * as firestore from "nativescript-plugin-firebase/app"

import {getBoolean,setBoolean,getNumber,setNumber,getString,setString,hasKey,remove,clear} from "tns-core-modules/application-settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      userData: {},
      events: [],
      benutzerDaten: [
        {
          name: "timur",
          nachname: "aktas",
          alter: 12
        },
        {
          name: "hans",
          nachname: "peter",
          alter: 24
        }
      ]
  },
  getters:{
    userData: state => state.userData,
    events: state => state.events,
    isLogged: state => state.isLogged
  },
  mutations: {
    setUserData: (state, payload) => {
      state.userData = payload
    }
  },
  actions: {
    initUserData({commit}){
      firebase.getCurrentUser()
        .then(user => {
          firestore.firestore().collection("users").where("user_id", "==", user.uid)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
               console.log("Current user is: ", doc.data())
               commit('setUserData', doc.data())
            });
          });

      }) 
      .catch(error => console.log("Trouble in paradise: " + error));
    },
    getstateuserdata(){
      console.log("Store userData -> ", this.state.userData)
      console.log("Store userData -> ", this.state.benutzerDaten)
    },
  }
});
