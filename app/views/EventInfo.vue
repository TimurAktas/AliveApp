<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551">
   <StackLayout>
     <label @tap="close" > close </label>
      <Image src="~/assets/images/defaultpicture.png" class="-thumb img-circle" @tap="navigateToProfile(event.from)"></Image>
      <label class="h2" @tap="navigateToProfile(event.from)"> Event von {{event.from}} </label>
      <label class="footnote"> {{event.title}}</label>
      <label class="body"> {{event.desc}} </label>
      <TextField v-model="msg" hint="Enter text..." />
      <Button @tap="selectFriends"   text="Leute makieren" />
      <Button v-if="!reqSent" class="my-button"  @tap="sendRequest(event)"   text="Anfrage senden" />
      <Button v-if="reqSent" class="my-button" text="gesendet" />
    </StackLayout>
</Page>

</template>

<script>
import SelectFriendsModal from './SelectFriendsModal'
import store from '../store/store'
import * as firebase from "nativescript-plugin-firebase"
import { Frame } from 'tns-core-modules/ui/frame';
import Profil from './Profil'
export default {
  props: ['event'],
  components:{
    SelectFriendsModal,
    Profil
  },
  created() {
    this.userRequested();
  },
  data(){
    return{
      msg: null,
      selectedFriends: null,
      reqSent: false,
    }
  },
  methods:{
    sendRequest(event){
      console.log("Nachricht senden...")
      console.log("EVENTINFO EVENT: ", event)
      console.log("EVENTINFO MSG: ", this.msg)
      store.dispatch('sendRequestToEvent', {msg: this.msg, selectedFriends: this.msg, event: this.event})
      this.$navigateBack()
    },
    selectFriends(){
      this.$showModal(SelectFriendsModal, {fullscreen: true, props: { id: 14 }})
      .then(data => console.log("Nachdem Modal geschlossen wurde wird das hier gemacht mit den daten die mitgegeben wurden: -> ", data));
    },
    userRequested(){
          if(!this.event.userrequestids){
            console.log("keine anfragen")
          }else{
            console.log("Geht hier rein!")
            var self = this;
            this.event.userrequestids.forEach(doc => {
            firebase.getCurrentUser().then(user =>{
              if(user.uid == doc){
                self.reqSent = true;
              }
            })
          })
          } 
      },
      close(){
          Frame.topmost().goBack();
      },
      navigateToProfile(userId){
           this.$navigateTo(Profil, { 
                props: {
                    id: userId,
                },
                transition: {
                    name:'fade'
                },
            })
      }
  }
}
</script>

<style>
Image {
  width: 50;
  height: 50;
}

.my-button{
  background-color: white !important;
  color: black !important;
}
</style>