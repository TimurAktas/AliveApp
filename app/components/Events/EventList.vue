<template>
    <PullToRefresh @refresh="refreshList">
        <ScrollView>
            <StackLayout class="event-list">
                <EventCard  v-for="(event,index) in events" v-bind:key=index :eventData="event" @itemTap="onItemTap"/>
            </StackLayout>
        </ScrollView>
    </PullToRefresh>
</template>

<script>
import store          from '../../store/store'
import EventInfo      from '../../views/EventInfo'
import EventCard      from '../../components/Events/EventCard'
import * as firebase  from "nativescript-plugin-firebase/app";
import { mapGetters } from 'vuex'

export default {
    components:{
        EventInfo,
        EventCard
    },
    data(){
        return{
        }
    },
    methods:{
     refreshList(args) {
        var pullRefresh = args.object;
        store.dispatch("loadEvents")
        setTimeout(function() {
            pullRefresh.refreshing = false;
        }, 1000);
     },
     onItemTap(event){
       console.log(event.item)
       this.$navigateTo(EventInfo, { 
            frame: "main-root",
            props: {
                event: event.item,
            }
        })
     }
    },
    computed: {
        ...mapGetters(['events'])
    }
    
}
</script>

<style scoped >


.event-list{
    z-index: -10;
}



</style>