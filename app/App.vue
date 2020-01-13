<template lang="html" >
    <Page actionBarHidden="true" backgroundColor="#2A3551">
        <BottomNavigation>
            <TabStrip>
                <TabStripItem class="tabstripitem">
                    <Label text="Home"></Label>
                    <Image src="font://&#xf015;" class="fas t-36"></Image>
                </TabStripItem>
                <TabStripItem class="tabstripitem">
                    <Label text="Account"></Label>
                    <Image src="font://&#xf007;" class="fas t-36"></Image>
                </TabStripItem>
                <TabStripItem class="tabstripitem">
                    <Label text="Eventanfragen"></Label>
                    <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
                </TabStripItem>
                <TabStripItem class="tabstripitem">
                    <Label text="News"></Label>
                    <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
                </TabStripItem>
                <TabStripItem class="tabstripitem">
                    <Label text="Profil"></Label>
                    <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
                </TabStripItem>
            </TabStrip>

            <TabContentItem>
                <Frame id="home-root"> 
                    <Home />
                </Frame>
            </TabContentItem>

            <TabContentItem >
                <Frame id="map-root">
                    <AMap />
                </Frame>
            </TabContentItem>

            <TabContentItem>
                <Frame>
                    <News />
                </Frame>
            </TabContentItem>

            <TabContentItem>
                <Frame id="news-root">
                    <News />
                </Frame>
            </TabContentItem>

            <TabContentItem>
                <Frame>
                    <Profil />
                </Frame>
            </TabContentItem>

        </BottomNavigation>
    </Page>
</template>

<script>

import AMap from './views/AMap'
import Home from './views/Home'
import HomeSeite from './views/Homeseite'
import NewEvent from './views/NewEvent'
import News from './views/News'
import Profil from './views/Profil'


export default {
    created(){
        console.log("Ich werde Created!!!!!")
    },
  data() {
    return {
    }
  },
  components:{
    HomeSeite,
    Home,
    AMap,
    NewEvent,
    News,
    Profil
  },
};
</script>


<style>


Tabs TabStripItem,
BottomNavigation TabStripItem {
    background-color: #414B6E;
    color: white;
}

Tabs TabStripItem:active,
BottomNavigation TabStripItem:active {
    background-color: #5F6A9A;
    color: gray;
}


</style>