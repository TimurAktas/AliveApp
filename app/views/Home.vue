<template>
    <Page actionBarHidden="true">
       <StackLayout>
           <TimeBar />
           	<GridLayout row="3" width="100%" backgroundColor="white">
                <ListView for="item in listOfItems" @itemTap="onItemTap">
                    <v-template >
                            <StackLayout class="list-group-item">
                                <Label :text="item.name" />
                                <Label :text="item.nachname" />
                            </StackLayout>
                    </v-template>
                </ListView>
            </GridLayout>
       </StackLayout>
    </Page>
</template>

<script>
import Login from './Login'
import TimeBar from '../components/Events/TimeBar'
import store from '../store/store'
export default {
    data(){
        return{
            listOfItems:[
                {
                    name: "Event name",
                    nachname: "Event Inhalt"
                },
                {
                    name: "Event name",
                    nachname: "Event Inhalt"
                },
                {
                    name: "Event name",
                    nachname: "Event Inhalt"
                },
                {
                    name: "Event name",
                    nachname: "Event Inhalt"
                },
                {
                    name: "Event name",
                    nachname: "Event Inhalt"
                }
            ]
        }
    },
     components:{
        Login,
        TimeBar
    },
    methods:{
     Logout(){
        store.dispatch("logout")
        console.log("Logge user ein!!!!! 888888888888888888888888888888888888")
        this.$navigateTo(Login);
     },
     onItemTap(){
         console.log("wurde geklickt")
     }
    }
}
</script>

<style >
.list-group-item{
    height: 200;
    background-color: lightblue;
}
</style>