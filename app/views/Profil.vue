<template>
    <Page actionBarHidden="true">
       <StackLayout>
            <label>Profil von {{userData.name}}</label>
            <Button text="UserData" @tap="currentUser" />
       </StackLayout>
    </Page>
</template>

<script>
import Login from './Login'
import store from '../store/store'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
import * as firebase from "nativescript-plugin-firebase"
import * as firestore from "nativescript-plugin-firebase/app"
export default {
    created(){
        console.log('STORE USER DATA: ' , store.state.userData)
    },
    components:{
        Login,
    },
    methods:{
     logout(){
        
        store.dispatch("logout")
        this.$navigateTo(Login);
     },
     currentUser(){
        store.dispatch("getstateuserdata")
     }
    },
   computed: {
        ...mapGetters(['userData'])
    }
    

}
</script>