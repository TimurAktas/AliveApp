<template>
    <Page actionBarHidden="false" statusBarStyle="light" backgroundColor="#2A3551" >
       <ActionBar title="test">
            <StackLayout orientation="horizontal"
                ios:horizontalAlignment="center"
                android:horizontalAlignment="left">
                <Label text="<- Event erstellen" class="action-label" @tap="close"></Label>
            </StackLayout>
        </ActionBar>

        <GridLayout>
            <ScrollView>
                <StackLayout>
                    <StackLayout class="test">
                        <label >Titel des Events:</label>
                        <TextField ref="textField" v-model="title" borderBottomWidth="1" borderBottomColor="#cec8c8" padding="0" />
                        <label >Beschreibung:</label>
                        <TextField ref="textField" v-model="description" borderBottomWidth="1" borderBottomColor="#cec8c8" padding="0" />
                    </StackLayout>


                    <GridLayout columns="*,*" rows="*,*,*" width="auto" height="400" >
                            <Label class="newEventMenue" text="Öffentliche Veranstaltung" col="0" row="0" />
                            <Label class="newEventMenue" text="Kategorie" col="1" row="0" />

                            <Label class="newEventMenue" @tap="openSelectFriendsModal" text="Personen makieren" col="0" row="1" />
                            <Label class="newEventMenue" @tap="placeModal" text="Ort" col="1" row="1" />

                            <Label class="newEventMenue" text="Foto/Video" col="0" row="2" />
                            <Label class="newEventMenue" @tap="openModal" text="Uhrzeit" col="1" row="2" />
                    </GridLayout>

                    <Button class="eventBtn" text="Start new Event" @tap="createNewEvent(userData)" />
         
                    </StackLayout>
             </ScrollView>
        </GridLayout>
    </Page>
</template>

<script>
import * as firebase from "nativescript-plugin-firebase/app";
import { mapState } from 'vuex'
import store from '../store/store'
import Modalone from './Modalone'
import SelectFriendsModal from '../views/SelectFriendsModal'
import PlacesAutocomplete from '../views/PlacesAutocomplete'

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
            ort: null,
        }
    },
     components:{
         Modalone,
         SelectFriendsModal,
         PlacesAutocomplete
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
        },
        openSelectFriendsModal(){
            this.$showModal(SelectFriendsModal, {fullscreen: true, props: { city: 'Dortmund' },   transition: {
                name: "slideBottom",
            }})
            .then(data => console.log("Nachdem Modal geschlossen wurde wird das hier gemacht mit den daten die mitgegeben wurden: -> ", data));
        },
        placeModal(){
            this.$showModal(PlacesAutocomplete, {fullscreen: true, props: { city: 'Dortmund' },   transition: {
                name: "slideBottom",
            }})
            .then(data => {
                if(data){
                    this.ort = data
                }
                console.log("Nachdem Modal geschlossen wurde wird das hier gemacht mit den daten die mitgegeben wurden: -> ", data)
            });
        },
        close(){
            this.$navigateBack();
        } 
    },
    computed: {
        ...mapState(['userData'])
    }
}
</script>

<style scoped>
.eventBtn{
    background-color: gray;
    width: 200;
}
.test{
    margin-bottom: 50;
}
ListView{
    border-top: 5px solid red;
    margin-bottom: -200;

}

.newEventMenue{
    border-color: gray;
    border-style: solid;
    border-width: 1px;
    padding: 10;
    margin: 10 5 0;
    border-radius: 10% 10% 10% 10%;
    background: linear-gradient(to left,#3B4568, #495676);
    box-shadow: 10px 5px 5px rgb(184, 181, 181);
}
</style>