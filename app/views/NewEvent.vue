<template>
    <Page actionBarHidden="false" statusBarStyle="light" backgroundColor="#2A3551" >
       <ActionBar title="test">
        <StackLayout orientation="horizontal"
            ios:horizontalAlignment="center"
            android:horizontalAlignment="left">
            <Label text="<- Event erstellen" class="action-label"></Label>
        </StackLayout>
        </ActionBar>


        <StackLayout>
            <StackLayout class="test">
                <label >Titel des Events:</label>
                <TextField ref="textField" v-model="title" borderBottomWidth="1" borderBottomColor="#cec8c8" padding="0" />
                <label >Beschreibung:</label>
                <TextField ref="textField" v-model="description" borderBottomWidth="1" borderBottomColor="#cec8c8" padding="0" />
            </StackLayout>
            <ListView for="btn in btns" class="list-group" @itemTap="onItemTap">
				<v-template>
					<GridLayout class="list-group-item" rows="*" columns="auto, *">
						<Label row="0" col="1" :text="btn.text" />
					</GridLayout>
				</v-template>
            </ListView>
          
            <Button class="eventButton" text="Zeige Param" @tap="showParam" />
            <Button class="eventButton" text="Wo?" @tap="openModal" />
            <Button class="eventButton" text="Start new Event" @tap="createNewEvent(userData)" />
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
            btns: [
                { text: 'Öffentliche Veranstaltung', icon: '' },
                { text: 'Kategorie', icon: '' },
                { text: 'Personen makieren', icon: '' },
                { text: 'Ort', icon: '' },
                { text: 'Foto/Video', icon: '' },
                { text: 'Uhrzeit', icon: '' },
            ],
            title: null,
            description: null,
            lng: null,
            lat: null,
            anonym: null,
        }
    },
     components:{
         Modalone
    },
    methods:{
        createNewEvent(userData){
            const ref = firebase.firestore().collection("events");

            ref.add({
            from: userData.user_id,
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
        onItemTap(){
            console.log("clicked!")
        },
        openModal(){
            this.$showModal(Modalone, {fullscreen: true, props: { id: 14 },   transition: {
                name: "slideBottom",
            }})
            .then(data => console.log("Nachdem Modal geschlossen wurde wird das hier gemacht mit den daten die mitgegeben wurden: -> ", data));
        }
    },
    computed: {
        ...mapState(['userData'])
    }
}
</script>

<style>
.test{
    margin-bottom: 50;
}
ListView{
    border-top: 5px solid red;
    margin-bottom: -200;

}
.eventButton{
    background-color: beige;
    color: red;
}
</style>