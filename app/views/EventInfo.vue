<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551">
   <StackLayout>
      <Image src="~/assets/images/defaultpicture.png" class="-thumb img-circle"></Image>
      <label class="h2"> Event von {{event.from}} </label>
      <label class="footnote"> {{event.title}}</label>
      <label class="body"> {{event.desc}} </label>
      <TextField v-model="msg" hint="Enter text..." />
      <Button @tap="selectFriends"   text="Leute makieren" />
      <Button @tap="sendRequest(event)"   text="Anfrage senden" />
    </StackLayout>
</Page>

</template>

<script>
import SelectFriendsModal from './SelectFriendsModal'
import store from '../store/store'

export default {
  props: ['event'],
  components:{
    SelectFriendsModal,
  },
  data(){
    return{
      msg: null,
      selectedFriends: null,
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
    }
  }
}
</script>

<style>


Image {
    width: 50;
    height: 50;

}



</style>