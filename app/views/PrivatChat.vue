<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551" >
    <StackLayout>
      <Image src="~/assets/images/defaultpicture.png" class="-thumb img-circle"></Image>
      <TextField v-model="msg" hint="Enter text..." />


    </StackLayout>
</Page>

</template>

<script>
import SelectFriendsModal from './SelectFriendsModal'
import store from '../store/store'

export default {
  props: ['chatId'],
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
    sendRequest(){

      this.$navigateBack()
    },
 
  }
}
</script>

<style>


Image {
    width: 50;
    height: 50;

}



</style>