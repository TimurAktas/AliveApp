<template>
    <Page actionBarHidden="true" statusBarStyle="light" backgroundColor="#2A3551" >
        <StackLayout>
            <label >Titel des Events:</label>
            <TextField ref="textField" v-model="title" borderBottomWidth="3" borderBottomColor="#cec8c8" padding="0" />
            <label >Beschreibung:</label>
	        <TextField ref="textField" v-model="description" borderBottomWidth="3" borderBottomColor="#cec8c8" padding="0" />
            <label >Event anonym?</label>

            <label>a{{userData.lastname}}</label>
            <label>b{{userData.age}}</label>
            <label>c{{userData.interests}}</label>
            <Switch checked="false" loaded="onSwitchLoaded" /> 
            <Button text="Zeige Param" @tap="showParam" />
            <Button text="Start new Event" @tap="createNewEvent" />
            <Button text="Wo?" @tap="openModal" />
            
        </StackLayout>
    </Page>
</template>

<script>
import * as firebase from "nativescript-plugin-firebase/app";
import { mapState } from 'vuex'
import store from '../store/store'
import Modalone from './Modalone'

export default {
     created(){
        
    },
    data(){
        return{
            title: null,
            description: null,
            lng: null,
            lat: null,
            anonym: null,
            lng: null,
            lat: null,
        }
    },
     components:{
         Modalone
    },
    methods:{
        createNewEvent(){
            const ref = firebase.firestore().collection("events");

            ref.add({
            from: "Timur Aktas",
            title: this.title,
            desc: this.description,
            time: Date.now(),
            lat: 51.514244,
            lng: 7.468429
          
            // location: firebase.firestore().GeoPoint(4.34, 5.67)
            }).then(docRef => {
                console.log(`Document added auto-generated ID: ${docRef.id}`)
            });
        },
        showParam(){
            console.log('STORE USER DATA: ' , userData)
        },
        openModal(){
            this.$showModal(Modalone, {fullscreen: true, props: { id: 14 }})
            .then(data => console.log("Nachdem Modal geschlossen wurde wird das hier gemacht mit den daten die mitgegeben wurden: -> ", data));
        }
    },
    computed: {
        ...mapState(['userData'])
    }
}
</script>

<style>

</style>