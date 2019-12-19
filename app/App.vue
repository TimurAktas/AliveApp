<template lang="html" >
    <Frame id="main-root">
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
                        <Label text="newEvent"></Label>
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
                        <NewEvent />
                    </Frame>
                </TabContentItem>

                <TabContentItem>
                    <Frame>
                        <Login />
                    </Frame>
                </TabContentItem>

                <TabContentItem>
                    <Frame>
                    <Profil />
                    </Frame>
                </TabContentItem>

            </BottomNavigation>
        </Page>
    </Frame>
</template>

<script>

import AMap from './views/AMap'
import Home from './views/Home'
import NewEvent from './views/NewEvent'
import News from './views/News'
import Profil from './views/Profil'
import Login from './views/Login'


export default {
  data() {
    return {
    }
  },
  components:{
    Home,
    AMap,
    NewEvent,
    News,
    Profil,
    Login
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