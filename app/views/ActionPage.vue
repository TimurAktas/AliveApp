<template>
    <Page actionBarHidden="true" backgroundColor="#42b883" >
     <StackLayout class="NavigationBottomCss" height="60" verticalAlignment="top"  orientation="horizontal">
        <Button text="Home" @tap="goTo"  sup="Page2Page" />
        <Button text="Events" @tap="goTo" sup="Events" />
        <Button text="newEvent" @tap="naviTo"  sup="newEvent" />
        <Button text="News" @tap="naviTo" sup="News" />
        <Button text="Profil" @tap="naviTo" sup="Profill" />
     </StackLayout>
    </Page>
</template>

<script>
import Page2Page from './Page2Page'
import Events from './Events'

export default {
    methods:{
        goTo(args){
            switch(args.object.sup){
                case "Page2Page": this.$navigateTo(Page2Page, {frame: "home-page"});
                    break;
                case "Events":   this.$navigateTo(Events, { frame: "home-page"});
                    break;
            }
          
        },
        naviTo(args){
            const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
            const frame = getFrameById("home-page");
            const navigationEntry = {
                    moduleName: "Events",
                    backstackVisible: false
                };
                frame.navigate(navigationEntry);
        }
     
    }
}
</script>

<style scoped>
Button{
    height: 100%;
    width: 20%;
    margin: 0 0 10 0;
}
</style>