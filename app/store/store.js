import Vue from 'vue';
import Vuex from 'vuex';

import {getBoolean,setBoolean,getNumber,setNumber,getString,setString,hasKey,remove,clear} from "tns-core-modules/application-settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user: {},
      events: [],
  },
  getters:{
    user: state => {
      return state.user;
    },
    events: state => {
      return state.events;
    },
    isLogged: state => {
      return state.isLogged;
    }
  },
  mutations: {

  },
  actions: {
    login(){
      console.log("LOOOOOOOOGEEED IN!!!!!!!!!!!!!!")
      setBoolean("LoginCookie", true);
    },
    logout(){
      console.log("Logout!!!!!!!!!!!!!!!!!!!!!!!!")
      setBoolean("LoginCookie", false);
    },
  }
});
