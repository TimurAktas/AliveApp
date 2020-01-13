<template>
  <AbsoluteLayout>
      <label class="roundBtn" text="+"  @tap="openNewEventModal"> </label>
    <WrapLayout>
      <StackLayout>
        <label class="text-center h3">Herzlich Willkommen {{userData.firstname}} </label>
        <label class="text-center h3">Heute, 12.12.19</label>
        <label class="text-center h3">{{countEvents}} Events</label>
      </StackLayout>
    </WrapLayout>
  </AbsoluteLayout>
</template>

<script>
import store from '../../store/store'
import { mapGetters } from 'vuex'
import NewEvent from '../../views/NewEvent'

export default {
  computed: {
    ...mapGetters(['userData', 'countEvents'])
  },
  components:{
    NewEvent
  },
  methods:{
    openNewEventModal(){
      console.log("HEllo world")
      this.$navigateTo(NewEvent, { 
        transition: {
          name:'fade'
        },
      })
    }
  }
}
</script>

<style scoped>
  StackLayout{
    padding: 20;
    width: 100%;
  }
  WrapLayout{
    width: 100%;
    height: 170;
    background: linear-gradient(90deg, rgba(146,126,233,1) 22%, rgba(232,117,185,1) 88%);
    border-radius: 0 0 15% 15%;
    z-index: 10;
  }
  AbsoluteLayout {
    height: 200;
    width: 100%;
  }
  .roundBtn{
    left: 320;
    top: 135;
    background-color: #5a6c99;
    border-radius: 90;
    width: 60;
    height: 60;
    padding: -1;
    z-index: 11;
    color:white;
    font-size: 30;
  }
</style>