<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551" >
       <StackLayout >
            <label>Profil von {{userData.firstname}}</label>
            <Image :src="`~/assets/images/`+userData.profilpicture" class="-thumb img-circle"></Image>
            <label>{{userData.lastname}}</label>
            <label>{{userData.age}}</label>
            <label>{{userData.interests}}</label>
            <Button text="UserData" @tap="currentUser" />
              <Button text="Logout" @tap="logOut" />
       </StackLayout>
    </Page>
</template>

<script>
import Login from './Login'
import store from '../store/store'
import { mapGetters } from 'vuex'
import * as firebase from "nativescript-plugin-firebase"

export default {
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