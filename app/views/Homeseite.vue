<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551" >
    <GridLayout rows="200,*" columns="auto">

             <GridLayout row="0" width="100%" >
                <AbsoluteLayout>
                <label class="roundBtn" text="+"  @tap="openNewEventModal"> </label>
                <WrapLayout>
                <StackLayout class="timebar">
                    <label class="text-center h3">Herzlich Willkommen {{userData.firstname}} </label>
                    <label class="text-center h3">Heute, 12.12.19</label>
                    <label class="text-center h3">{{countEvents}} Events</label>
                </StackLayout>
                </WrapLayout>
             </AbsoluteLayout>
             </GridLayout>

              <GridLayout row="1" width="100%" >
                   <PullToRefresh @refresh="refreshList">
                    <ScrollView>
                        <StackLayout class="event-list">
                            <EventCard  v-for="(event,index) in events" v-bind:key=index :eventData="event"/>
                        </StackLayout>
                    </ScrollView>
                </PullToRefresh>
            </GridLayout>
    </GridLayout>

    </Page>
</template>

<script>
import TimeBar from '../components/Events/TimeBar'
import EventList from '../components/Events/EventList'
import store from '../store/store'
import { mapGetters } from 'vuex'
import NewEvent from '../views/NewEvent'
import EventCard from '../components/Events/EventCard'
import * as firebase  from "nativescript-plugin-firebase/app";


export default {
     computed: {  
    ...mapGetters(['userData', 'countEvents','events'])
  },
    components:{
        TimeBar,
        EventList,
        NewEvent,
        EventCard
    },
    data(){
        return{
        }
    },
    methods:{
        openNewEventModal(){
            console.log("HEllo world")
            this.$navigateTo(NewEvent, { 
                transition: {
                name:'fade'
                },
            })
        },
        refreshList(args) {
        var pullRefresh = args.object;
        store.dispatch("loadEvents")
        setTimeout(function() {
            pullRefresh.refreshing = false;
        }, 1000);
     },
    }
}
</script>

<style scoped >

  WrapLayout{
    width: 100%;
    height: 170;
    background: linear-gradient(90deg, rgba(146,126,233,1) 22%, rgba(232,117,185,1) 88%);
    border-radius: 0 0 30% 30%;
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
  .timebar{
       padding: 20;
        width: 100%;
   
  }
.event-list{
    z-index: -10;
     width: 100%;
}
</style>