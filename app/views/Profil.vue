<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551" >
       <AbsoluteLayout width="100%" height="100%" v-if="userData">
            <!-- Bild, follow, Backbutton -->
            <AbsoluteLayout width="100%" height="330">
                <Image :src="`~/assets/images/`+userData.profilpicture" width="100%" height="100%" stretch="aspectFill"></Image>
                <DockLayout width="100%" stretchLastChild="false">
                    <label class="backBtn" dock="left" @tap="close">Back Button</label>
                    <StackLayout class="followBtn" dock="right" BorderColor="white" @tap="subscribeTerminateUser(userData.user_id)">
                      <label >Follow</label>
                    </StackLayout>
                </DockLayout>
                <GridLayout rows="*" columns="*,auto,*" width="100%" top="220">
                    <GridLayout row="0" col="1" rows="*" columns="*,*,*,*">
                        <label class="nameAge" row="0" col="0">{{userData.firstname}}</label>
                        <label class="nameAge" row="0" col="1">{{userData.lastname}}</label>
                        <label class="nameAge" row="0" col="2">{{userData.age}}</label>
                    </GridLayout>
                </GridLayout>
            </AbsoluteLayout>
            
            <!-- Interessen, vergangene Events, Bevorstehende Events usw. -->
            <GridLayout top="290" width="100%" height="100%" class="profilScrollView" backgroundColor="#2A3551">
                <ScrollView>
                    <GridLayout rows="auto, auto, auto, 800" columns="*" >

                        <GridLayout row="0" col="0" rows="auto,auto,auto" columns="*" class="profil" >
                            <Label class="heading" row="0" col="0" text="Interests" textWrap="true"/>
                            
                            <GridLayout class="interestList" row="2" col="0" rows="auto" columns="auto,auto,auto" >
                                <Label  row="0" col="0" class="interestLabel" text="Partys" />
                                <Label  row="0" col="1" class="interestLabel" text="Spaziergänge" textWrap="true"/>
                                <Label  row="0" col="2" class="interestLabel" text="Lesen" textWrap="true"/>
                            </GridLayout>
                        </GridLayout>

                        <GridLayout row="1" col="0" rows="auto,auto,150" columns="*" class="profil" >
                            <Label class="heading" row="0" col="0" text="Recent Events" textWrap="true"/>
                            
                            <GridLayout row="2" rows="*" columns="*" >
                                <ScrollView row="0" col="0"  orientation="horizontal">
                                    <StackLayout  orientation="horizontal" >
                                        <SmallEventCard  v-for="(interest,index) in userData.interests" v-bind:key=index :eventdata="interest"/>
                                    </StackLayout>
                                </ScrollView>
                            </GridLayout>
                        </GridLayout>

                        <GridLayout row="2" col="0" rows="auto,auto,150" columns="*" class="profil" >
                            <Label class="heading" row="0" col="0" text="Upcoming Events" textWrap="true"/>
                            
                            <GridLayout row="2" rows="*" columns="*" >
                                <ScrollView row="0" col="0"  orientation="horizontal">
                                    <StackLayout  orientation="horizontal" >
                                        <SmallEventCard  v-for="(interest,index) in userData.interests" v-bind:key=index :interest="interest"/>
                                    </StackLayout>
                                </ScrollView>
                            </GridLayout>
                        </GridLayout>

                        <GridLayout class="lasChild" row="3" col="0" >
                            
                        </GridLayout>
                    </GridLayout>
                </ScrollView>
            </GridLayout>

            <!-- Follower, Followed, Events anzahl  --> 
            <GridLayout class="middleInfo" rows="50" columns="*,*,*" left="40%" top="265" width="80%" height="50" backgroundColor="#414C6C">
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
import * as firestore from "nativescript-plugin-firebase/app"
import SmallEventCard from '../components/Events/SmallEventCard'
import { Frame } from 'tns-core-modules/ui/frame';

export default {
    props: {
        id: {
            default:  store.state.userData.user_id,
        }
    },
    data(){
        return{
            userData: null,
        }
    }, 
    created(){
        console.log("------------------------------------- Profil wurde geladen ---------------------------------")
        console.log("Profil -> Id: ", this.id)
    },
    mounted(){
        const userReq = firestore.firestore().collection("users").where("user_id", "==",  this.id);
            userReq.get().then(snapshot =>{
                snapshot.forEach(doc=>{
                console.log("Profil -> User gefunden: ", doc.data())
                this.userData = doc.data()
            })
        });
    },
    components:{
        Login,
        SmallEventCard
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
     subscribeTerminateUser(id){
        console.log("subscribe -> ", id)
        const userReq = firestore.firestore().collection("users").where("user_id", "==", id);
            userReq.get().then(snapshot =>{
                snapshot.forEach(doc=>{
                   doc.data().subscriber.forEach(sub =>{
                       console.log(sub)
                   })
            })
        });
     },
    close(){
        Frame.topmost().goBack();
    },
    },
}
</script>

<style scoped>
    .backBtn{
        margin:10;
    }
    .followBtn{
        width: 100;
        height: 30;      
        border-radius: 5% 5% 5% 5%;
        border-width: 1;
        border-color: white;
        margin: 10;
    }
    .nameAge{
        font-size: 25;
        margin-right: 5;
        font-weight: bold;
    }
    .interestList{
        margin: 15;
    }
    .profilScrollView{
        border-radius: 20% 20% 20% 20%;
    }
    .content{
        margin: 15;

    }
    .profil{
        margin-top: 30;
    }

    .middleInfo{
        border-radius: 10% 10% 10% 10%;
    }

    .lasChild{
        margin-bottom: 100;
    }
    
    .heading{
        margin-left: 10;
        padding: 5;
        font-size: 18;
    }
    
    .lineBreak{
        height: 0.5;
        border: none;
        color: #e0e0e0;
        background-color: #e0e0e0;
    }
    .interestLabel{
        border-radius: 5% 5% 5% 5%;
        background-color: #5e0dc7;
        padding: 5 30 5 30;
        margin-right: 5;
        font-size: 13;
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
    