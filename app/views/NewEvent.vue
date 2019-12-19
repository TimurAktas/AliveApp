<template>
    <Page actionBarHidden="true" statusBarStyle="light" backgroundColor="#2A3551" >
        <StackLayout>
            <label >Titel des Events:</label>
            <TextField ref="textField" v-model="title" borderBottomWidth="3" borderBottomColor="#cec8c8" padding="0" />
            <label >Beschreibung:</label>
	        <TextField ref="textField" v-model="description" borderBottomWidth="3" borderBottomColor="#cec8c8" padding="0" />
            <label >Event anonym?</label>
            <Switch checked="false" loaded="onSwitchLoaded" /> 
            <Button text="Zeige Param" @tap="showParam" />
            <Button text="Start new Event" @tap="createNewEvent" />
        </StackLayout>
    </Page>
</template>

<script>
import * as firebase from "nativescript-plugin-firebase/app";
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

    },
    methods:{
        createNewEvent(){
            const ref = firebase.firestore().collection("events");

            ref.add({
            from: "Maikel Gonzalez",
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
            console.log(this.title + " " +  this.description + " " + this.anonym)
        }
    }
}
</script>

<style>

</style>