<template lang="html">
    <BottomNavigation>
        <TabStrip>
            <TabStripItem>
                <Label text="Home"></Label>
            </TabStripItem>
            <TabStripItem>
                <Label text="Map"></Label>
            </TabStripItem>
            <TabStripItem>
                <Label text="newEvent"></Label>
            </TabStripItem>
             <TabStripItem>
                <Label text="News"></Label>
            </TabStripItem>
            <TabStripItem>
                <Label text="Profil"></Label>
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
                <Home />
            </Frame>
        </TabContentItem>

          <TabContentItem>
            <Frame>
                <Home />
            </Frame>
        </TabContentItem>

         <TabContentItem>
            <Frame>
                <Home />
            </Frame>
        </TabContentItem>

    </BottomNavigation>
</template>
<script>

import AMap from './views/AMap'
import Home from './views/Home'


export default {
  
  data() {
    return {
    
    }
  },
  components:{
    Home,
    AMap
  },
  methods:{
    
  }
};
</script>

<style>

</style>