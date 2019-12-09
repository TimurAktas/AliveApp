<template>
    <Page actionBarHidden="true" >
     <StackLayout verticalAlignment="top"  orientation="horizontal">
        <Button text="Home" @tap="navigate"  navigateItem="Home" />
        <Button text="Map" @tap="navigate" navigateItem="AMap" />
        <Button text="neuEvent" @tap="navigate"  navigateItem="NewEvent" />
        <Button text="News" @tap="navigate" navigateItem="News" />
        <Button id="test" text="Profil" @tap="navigate" navigateItem="Profil" />
     </StackLayout>
    </Page>
</template>

<script>
import Home     from './Home'
import AMap     from './AMap'
import NewEvent from './NewEvent'
import News     from './News'
import Profil   from './Profil'

export default {
    data() {
    return {
      lastPage: "Home",
      currentPage: "Home",
      nextPage: null,
    }
  },
    methods:{
        navigate(args){
            if(args.object.navigateItem != this.currentPage){
                switch(args.object.navigateItem){
                case "Home":   this.$navigateTo(Home, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:true,
                                    transition: {
                                        name:'flipLeft',
                                        duration: 380,
                                    }
                                });
                                this.currentPage = "Home";
                                console.log(this.currentPage)
                    break;
                case "AMap":   this.$navigateTo(AMap, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:true,
                                    transition: {
                                        name:'slideRight',
                                        duration: 380,
                                    }
                                });
                                this.currentPage = "AMap";
                                console.log(this.currentPage)
                    break;
                case "NewEvent":   this.$navigateTo(NewEvent, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:false,
                                    transition: {
                                        name:'flipLeft',
                                        duration: 380,
                                    }
                                });
                                this.currentPage = "NewEvent";
                                console.log(this.currentPage)
                    break;
                case "News":   this.$navigateTo(News, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:false,
                                    transition: {
                                        name:'flipLeft',
                                        duration: 380,
                                    }
                                });
                                this.currentPage = "News";
                                console.log(this.currentPage)
                    break;
                case "Profil":   this.$navigateTo(Profil, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:false,
                                    transition: {
                                        name:'flipLeft',
                                        duration: 380,
                                    }
                                });
                                this.currentPage = "Profil";
                                console.log(this.currentPage)
                    break;
            }
            }
            
          
        }
    }
}
</script>

<style>
Button{
    width: 20%;
    background-color: white;
}


</style>