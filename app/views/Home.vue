<template>
    <Page actionBarHidden="true">
       <StackLayout>
           <TimeBar />
           <label text="Hier ist Home Pageeeee" class="page-name" />
           <Button text="Logout" @tap="Logout" />
       </StackLayout>
    </Page>
</template>

<script>
import Login from './Login'
import TimeBar from '../components/Events/TimeBar'
import store from '../store/store'
export default {
     components:{
        Login,
        TimeBar
    },
    methods:{
     Logout(){
        store.dispatch("logout")
        console.log("Logge user ein!!!!! 888888888888888888888888888888888888")
        this.$navigateTo(Login);
     }
    }
}
</script>