<template>
    <Page actionBarHidden="true">
       <StackLayout>
           <TimeBar />
           	<GridLayout row="3" width="100%" backgroundColor="white">
                <PullToRefresh @refresh="refreshList">
                    <ListView for="item in listOfItems" @itemTap="onItemTap">
                        <v-template >
                                <StackLayout class="list-group-item">
                                    <Label :text="item.from" />
                                    <Label :text="item.title" />
                                    <Label :text="item.desc" />
                                    <button>Anfrage senden</button>
                                </StackLayout>
                        </v-template>
                    </ListView>
                </PullToRefresh>
            </GridLayout>
       </StackLayout>
    </Page>
</template>

<script>
import Login from './Login'
import TimeBar from '../components/Events/TimeBar'
import store from '../store/store'
import * as firebase from "nativescript-plugin-firebase/app";

export default {
    created(){
        
    },
    data(){
        return{
            listOfItems: [],
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
         console.log("Wurde geklickt!")
     },
     refreshList(args) {
        console.log("Refresht!!")
        var pullRefresh = args.object;
        const messages = firebase.firestore().collection("events");
        this.listOfItems = [];
        messages.get().then(snapshot =>{
            snapshot.forEach(doc=>{
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                console.log(doc.data().from)
                console.log(doc.data().desc)
                this.listOfItems.unshift({
                    from: doc.data().from,
                    title: doc.data().title,
                    desc: doc.data().desc,
                })
            })
        });
        setTimeout(function() {
            pullRefresh.refreshing = false;
        }, 1000);
     }
    }
}
</script>

<style >
.list-group-item{
    height: 200;
    background-color: lightblue;
}
.my-button {
    android-elevation: 4;
    background-color: lightseagreen;
    border-color: darkolivegreen;
    border-radius: 20;
    border-width: 1;
    color: whitesmoke;
    font-size: 18;
    font-weight: bold;
}

.my-button:active {
    android-elevation: 8;
    background-color: whitesmoke;
    border-color: darkolivegreen;
    border-radius: 20;
    border-width: 1;
    color: lightseagreen;
    font-size: 18;
    font-weight: bold;
}

</style>