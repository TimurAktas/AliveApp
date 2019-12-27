<template>
    <Page actionBarHidden="false" statusBarStyle="light" backgroundColor="#2A3551" >
       <ActionBar title="Alive v1.0 Login Bereich " flat="true" />
       <StackLayout>
            <label >Email:</label>
            <TextField ref="textField" v-model="email" borderBottomWidth="3" borderBottomColor="#cec8c8" padding="0" />
            <label >Password:</label>
	        <TextField ref="textField" v-model="password" borderBottomWidth="3" borderBottomColor="#cec8c8" padding="0" />
           <Button text="Login" @tap="userLoginWithEmailandPassword" />
           <Button text="Logout" @tap="logOut" />
           <Button text="Register now" @tap="registerWithEmailandPassword" />
       </StackLayout>
    </Page>
</template>

<script>
import App from '../App'
import store from '../store/store'
import firebase from "nativescript-plugin-firebase"
import News from '../views/News'
import {getBoolean,setBoolean} from "tns-core-modules/application-settings";

export default {
    data(){
        return{
            email: null,
            password: null,
            feedback: null,
        }
    },
    components:{
        App,
        News
    },
    methods:{
     userLoginWithEmailandPassword(args){
         const frames = require("ui/frame");
        console.log(this.email, this.password)
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
            email: `${this.email}`,
            password: `${this.password}`
            }
        })
        .then(result => {JSON.stringify(result)
            setBoolean("LoginCookie", true);
            console.log("Erfolgreich eingeloggt!")
            frames.topmost().navigate(() => { return App});


        })
        .catch(error => console.log(error));
     },
     logOut(){
        console.log("Logged out ---")
        firebase.logout();
        setBoolean("LoginCookie", false);
     },
     registerWithEmailandPassword(){

     }
    }
}
</script>