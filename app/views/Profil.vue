<template>
    <Page actionBarHidden="true">
       <StackLayout>
           <label text="Hier ist Profillllllllllllllllllllll Page" class="page-name" />
           <Button text="Logout" @tap="logout" />
       </StackLayout>
    </Page>
</template>

<script>
import Login from './Login'
import store from '../store/store'

export default {
    
    components:{
        Login,
    },
    methods:{
     logout(){
        
        store.dispatch("logout")
        this.$navigateTo(Login);
     }
    }
}
</script>