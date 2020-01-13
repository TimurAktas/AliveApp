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
      eventRequests: [],
  },
  getters:{
    userData: state => state.userData,
    events: state => state.events,
    eventRequests: state => state.eventRequests,
    countEvents: state => state.events.length,
    isLogged: state => state.isLogged
  },
  mutations: {
    clearAll:(state) => {
      state.eventRequests = []
      state.events = []
      state.userData = {}
    },
    setUserData: (state, payload) => {
      state.userData = payload
    },
    setEventData: (state, payload) => {
      state.events.unshift({
        from: payload.from,
        title: payload.title,
        desc: payload.desc,
        userrequestids: payload.userrequestids,
      })
    },
    setEventRequests: (state, payload) => {
      state.eventRequests.unshift({
        msg: payload.msg,
        selectedFriends: payload.selectedFriends,
        from: payload.from,
        time: payload.time,
        to: payload.to
      })
    }
  },
  actions: {
    consoleLog(){
      console.log(this.state.eventRequests)
    },
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
              console.log(doc.data())
              commit('setEventData', doc.data())
            })
        });
    },
    sendRequestToEvent({commit}, payload){
      console.log("--------------------- msg.event " , payload.event.from)
      const eventRequestCollection = firestore.firestore().collection("eventrequests");

      eventRequestCollection.add({
        from: this.state.userData.user_id,
        to: payload.event.from,
        msg: payload.msg,
        time: new Date(),
        selectedFriends: ['1PCJ2DEBRgUdguhGhJPBSN6vApi2', 'oX9VIJnpwZV78kcWobjpsFh1Gc33' , '3gG426PamLUUSRpmzgYbdkJ5qyI3'],
      }).then(ref => {
        console.log(`Nachricht erfolgreich gesendet: ${ref.id}`);
      }).catch(error => console.log("Nachricht konnte nicht gesendet werden :", error));
    },
    getstateuserdata(){
      console.log("Store userData -> ", this.state.userData)
      console.log("Store Events -> ", this.state.events)
      console.log("EVENTS IN STORE -> ", this.state.events.length)
    },
    getEventRequests({commit}){
      const eventRequestsCollection = firestore.firestore().collection("eventrequests").where("to", "==", this.state.userData.user_id);
      eventRequestsCollection.get().then(snapshot =>{
          snapshot.forEach(doc=>{
            console.log(doc.data())
            commit('setEventRequests', doc.data())
          })
      });

    },
    eventInfo(){
   

    },
    createNewEvent(payload){

    },
    userLogout({commit}){
      setBoolean("LoginCookie", false);
      commit('clearAll')
    },
  }
});
