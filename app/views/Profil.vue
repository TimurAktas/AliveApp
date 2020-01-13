<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551" >
       <AbsoluteLayout width="100%" height="100%" backgroundColor="lightgray">
        <!-- Bild, follow, Backbutton -->
        <AbsoluteLayout width="100%" height="290">
            <Image :src="`~/assets/images/`+userData.profilpicture" width="100%" height="290" stretch="aspectFill"></Image>
            <DockLayout width="100%" stretchLastChild="false">
                <label dock="left">Back Button</label>
                <label dock="right">Follow</label>
            </DockLayout>
        </AbsoluteLayout>
        
        <!-- Interessen, vergangene Events, Bevorstehende Events usw. -->
        <ScrollView top="290"  width="100%" height="100%" backgroundColor="black">
            <GridLayout rows="auto, 600" columns="*" >
                <GridLayout row="0" col="0" class="profil" >
                    <StackLayout v-if="id" >
                        <label>Profil von {{userData.firstname}}</label>
                        <label>{{userData.lastname}}</label>
                        <label>{{userData.age}}</label>
                        <label>{{userData.interests}}</label>
                        <label >{{id}}</label>
                        <Button text="UserData" @tap="currentUser" />
                        <Button text="Logout" @tap="logOut" />
                    </StackLayout>
                </GridLayout>

                <GridLayout row="1" col="0" backgroundColor="gray">
                    <Button text="Logout" @tap="logOut" />
                    <label>Profil von {{userData.firstname}}</label>
                    <label>{{userData.lastname}}</label>
                    <label>{{userData.age}}</label>
                    <label>{{userData.interests}}</label>
                    <label >{{id}}</label>
                    <Button text="UserData" @tap="currentUser" />
                    <Button text="Logout" @tap="logOut" />
                </GridLayout>
            </GridLayout>
        </ScrollView>

        <!-- Follower, Followed, Events anzahl  --> 
        <GridLayout rows="50" columns="*,*,*" left="40%" top="265" width="80%" height="50" backgroundColor="green">
            <label magin="10" row="0" col="0">Follower</label>
            <label magin="10" row="0" col="1">Followed</label>
            <label magin="10" row="0" col="2">Events</label>
        </GridLayout>
  </AbsoluteLayout>
     
    </Page>
</template>

<script>
import Login from './Login'
import store from '../store/store'
import { mapGetters } from 'vuex'
import * as firebase from "nativescript-plugin-firebase"

export default {
    props: {
        id: {
            default:  store.state.userData.user_id,
        }
    },
    created(){
        console.log('STORE USER DATA: ' , store.state.userData)
    },
    components:{
        Login,
    },
    methods:{
     currentUser(){
        store.dispatch("getstateuserdata")
     },
      logOut(){
        console.log("Logged out ---")
        firebase.logout();
        this.$navigateTo(Login, {clearHistory: true})
        store.dispatch("userLogout")
     },
    },
    computed: {
        ...mapGetters(['userData'])
    }
    

}
</script>

<style scoped>
.profil{
    margin-top:50;

}
</style>



    <!-- columns= breite / rows= Höhe -->
       
        <GridLayout rows="300, 600" columns="*">   
            <GridLayout row="0" col="0" backgroundColor="#2A3551"> 
                    <!-- Hier kommt das Profilbild und User Name ect. rein -->
                    <Image :src="`~/assets/images/`+userData.profilpicture" width="100%" height="100%" stretch="fill"></Image>
            </GridLayout>

            <ScrollView row="1" col="0" backgroundColor="#2A3551">
                <GridLayout rows="250, 600" columns="*">
                    <!-- Hier kommt Interessen, Bevorstehende Events und Vergangene Events ect. rein -->

                    <GridLayout row="0" col="0" >
                        <StackLayout v-if="id" >
                            <label>Profil von {{userData.firstname}}</label>
                            <label>{{userData.lastname}}</label>
                            <label>{{userData.age}}</label>
                            <label>{{userData.interests}}</label>
                            <label >{{id}}</label>
                            <Button text="UserData" @tap="currentUser" />
                            <Button text="Logout" @tap="logOut" />
                        </StackLayout>
                    </GridLayout>

                    <GridLayout row="1" col="0" >
                    </GridLayout>
   
                </GridLayout>
            </ScrollView>
        </GridLayout>
    