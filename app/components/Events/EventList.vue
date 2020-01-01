<template>
    <PullToRefresh @refresh="refreshList">
        <ScrollView>
            <StackLayout class="event-list">
                <EventCard  v-for="(event,index) in events" v-bind:key=index :eventData="event"/>
            </StackLayout>
        </ScrollView>
    </PullToRefresh>
</template>

<script>
import store          from '../../store/store'
import EventCard      from '../../components/Events/EventCard'
import * as firebase  from "nativescript-plugin-firebase/app";
import { mapGetters } from 'vuex'

export default {
    components:{
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