<template>
  <GridLayout class="main" rows="40,*,*" columns="*" width="100%" height="110" backgroundColor="#252C48" >
    <GridLayout rows="*" columns="auto,*,auto" class="navStatusBar" row="0" col="0">
      <Label row="0" col="0" text="Alive" class="status-title"/>
      <Label row="0" col="1" text="Dortmund, Brackel" class="location-title" horizontalAlignment="center" verticalAlignment="center"/>
      <Image row="0" col="2" src="~/assets/images/defaultpicture.png"  class="-thumb img-circle mainImg" @tap="navigateToProfile(event.from)"></Image>
    </GridLayout>

    <StackLayout row="1">
       
    </StackLayout>

    <GridLayout rows="*" columns="*,*,*,*"  class="timebar" row="2" col="0" orientation="horizontal">

      <GridLayout @tap="showToday" class="tabview" :class="selectedTabview==0?'active':''"  row="0" col="0" width="25%" >
        <Label class="tabviewText" :class="selectedTabview==0?'active':''"  text="Heutee"  horizontalAlignment="center" verticalAlignment="center"/>    
      </GridLayout>

      <GridLayout @tap="showTomorrow" class="tabview" :class="selectedTabview==1?'active':''" row="0" col="1" width="25%" >
        <Label class="tabviewText" :class="selectedTabview==1?'active':''" text="Morgen" horizontalAlignment="center" verticalAlignment="center"/>
      </GridLayout>

      <GridLayout @tap="showWeekend" class="tabview" :class="selectedTabview==2?'active':''" row="0" col="2" width="25%" >
        <Label class="tabviewText" :class="selectedTabview==2?'active':''" text="Wochenende" horizontalAlignment="center" verticalAlignment="center"/>
      </GridLayout>

      <GridLayout @tap="showDate" class="tabview" :class="selectedTabview==3?'active':''" row="0" col="3" width="25%" >
        <Label class="tabviewText" :class="selectedTabview==3?'active':''" text="Datum"  horizontalAlignment="center" verticalAlignment="center"/>
      </GridLayout>

    </GridLayout>

  </GridLayout>
</template>




<script>
import store from '../../store/store'
import { mapGetters } from 'vuex'
import NewEvent from '../../views/NewEvent'

export default {
  data() {
		return {
			selectedTabview: 0,
		}
	},
  computed: {
    ...mapGetters(['userData', 'countEvents'])
  },
  components:{
    NewEvent
  },
  methods:{
   showToday() {
			this.selectedTabview = 0;
		},
		showTomorrow() {
			this.selectedTabview = 1;
		},
		showWeekend() {
			this.selectedTabview = 2;
    },
    showDate() {
			this.selectedTabview = 3;
		},
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
  .mainImg{
    height: 30;
    width: 30;
  }
  .main{
    border-radius: 0 0 20% 20%;
  }
  .navStatusBar{

  }

  .timebar{
  }
  .tabview.active{
    border-bottom-color: rgb(161, 47, 226);
	  border-bottom-width: 3;
  }

  .tabviewText {
    font-size: 13;
    margin-bottom: 10;
  }

  .tabviewText.active {
    margin-bottom: 0;
    font-weight: bold;
  }
  .status-title {
	color: white;
	font-size: 18;
	margin-left: 5px;
}
</style>