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
  },
  getters:{
    userData: state => state.userData,
    events: state => state.events,
    isLogged: state => state.isLogged
  },
  mutations: {
    setUserData: (state, payload) => {
      state.userData = payload
    },
    setEventData: (state, payload) => {
      state.events.unshift({
        from: payload.from,
        title: payload.title,
        desc: payload.desc,
    })
    }
  },
  actions: {
    initUserData({commit}){
      firebase.getCurrentUser()
        .then(user => {
          firestore.firestore().collection("users").where("user_id", "==", user.uid)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
               commit('setUserData', doc.data())
            });
          });

      }) 
      .catch(error => console.log("Trouble in paradise: " + error));
    },
    loadEvents({commit}){
      const events = firestore.firestore().collection("events");
        events.get().then(snapshot =>{
            snapshot.forEach(doc=>{
              commit('setEventData', doc.data())
            })
        });
    },
    getstateuserdata(){
      console.log("Store userData -> ", this.state.userData)
      console.log("Store Events -> ", this.state.events)
      console.log("EVENTS IN STORE -> ", this.state.events.length)
    },
    eventInfo(){
   

    }
  }
});
