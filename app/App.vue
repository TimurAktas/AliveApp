<template lang="html">
    <BottomNavigation>
        <TabStrip>
            <TabStripItem>
                <Label text="Home"></Label>
                <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Map"></Label>
                <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="newEvent"></Label>
                <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
            </TabStripItem>
             <TabStripItem>
                <Label text="News"></Label>
                <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Profil"></Label>
                <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
            </TabStripItem>
        </TabStrip>

        <TabContentItem>
            <Frame>
                <Home />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
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
                <Profil />
            </Frame>
        </TabContentItem>

         <TabContentItem>
            <Frame>
                <Login />
            </Frame>
        </TabContentItem>

    </BottomNavigation>
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
  methods:{
    
  }
};
</script>


<style>

</style>