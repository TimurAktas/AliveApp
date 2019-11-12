<template>
    <Page actionBarHidden="true" backgroundColor="#42b883" >
     <StackLayout class="NavigationBottomCss" height="60" verticalAlignment="top"  orientation="horizontal">
        <Button text="Home" @tap="navigate"  navigateItem="Home" />
        <Button text="Map" @tap="navigate" navigateItem="AMap" />
        <Button text="neuEvent" @tap="navigate"  navigateItem="NewEvent" />
        <Button text="News" @tap="navigate" navigateItem="News" />
        <Button text="Profil" @tap="navigate" navigateItem="Profil" />
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
    methods:{
        navigate(args){
            switch(args.object.navigateItem){
                case "Home":   this.$navigateTo(Home, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:true,
                                    transition: {
                                        name:'slideLeft',
                                    }
                                });
                    break;
                case "AMap":   this.$navigateTo(AMap, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:true,
                                    transition: {
                                        name:'slideRight',
                                    }
                                });
                    break;
                case "NewEvent":   this.$navigateTo(NewEvent, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:false,
                                    transition: {
                                        name:'fade',
                                    }
                                });
                    break;
                case "News":   this.$navigateTo(News, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:false,
                                    transition: {
                                        name:'fade',
                                    }
                                });
                    break;
                case "Profil":   this.$navigateTo(Profil, { frame: "app-root", 
                                    clearHistory: true,
                                    backstackVisible:false,
                                    transition: {
                                        name:'fade',
                                    }
                                });
                    break;
            }
          
        }
    }
}
</script>

<style scoped>
Button{
    height: 100%;
    width: 20%;
    margin: 0 0 10 0;
    background-color:red;
}
</style>