<template>
    <Page actionBarHidden="false" statusBarStyle="light">
       <ActionBar title="Alive v1.0 Login Bereich " flat="true" />
       <StackLayout>
           <label text="Hier ist Home Page" class="page-name" />
           <Button text="Login" @tap="logIn" />
       </StackLayout>
    </Page>
</template>

<script>
import App from '../App'
import store from '../store/store'
export default {
    
    components:{
        App,
    },
    methods:{
     logIn(){
        store.dispatch("login")
        console.log("Logge user ein!!!!! 888888888888888888888888888888888888")
        this.$navigateTo(App);
     }
    }
}
</script>