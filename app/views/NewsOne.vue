<template>
    <ScrollView>
        <StackLayout>
            <ChatCard  v-for="(eventReq,index) in eventRequests" v-bind:key=index :eventReq="eventReq"/>
             <Button class="btn" text="LoadMessages" @tap="ConsoleEvent(eventRequests)" />
        </StackLayout>
    </ScrollView>
</template>

<script>
import store from '../store/store'
import ChatCard      from '../views/ChatCard'
import PrivatChat from '../views/PrivatChat'
import * as firebase  from "nativescript-plugin-firebase/app";
import { mapGetters } from 'vuex'

export default {
    components:{
        ChatCard,
        PrivatChat
    },
    data(){
        return{
        }
    },
    methods:{
        ConsoleEvent(x){
            console.log(x)
            store.dispatch("getEventRequests");
        },
        onItemTap(){
            this.$navigateTo(PrivatChat, {
                transition: {name:'flipLeft'},
                transitioniOS: {},
                transitionAndroid: {},
            }).catch(error => console.log(error));
        }
    },
    computed: {
        ...mapGetters(['eventRequests'])
    }
    
}
</script>

<style scoped >
/* StackLayout .list-group-item{
    background-color: red;
} */
.btn{
    background-color: gray;
    width: 200;
}
</style>