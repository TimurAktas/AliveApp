<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551" >
       <StackLayout >
            <label>Profil von {{userData.firstname}}</label>
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
     },
      logOut(){
        console.log("Logged out ---")
        firebase.logout();
        setBoolean("LoginCookie", false);
     },
    },
    computed: {
        ...mapGetters(['userData'])
    }
    

}
</script>