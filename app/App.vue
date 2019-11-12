<template>
  <Page actionBarHidden="false" >
    <ActionBar title="Alive v1.0 " flat="true" />
    <GridLayout>
        <Frame id="app-root">
            <News />
        </Frame>

        <Frame @loaded="actionFrameLoaded">
          <BottomNavbar />
        </Frame>
    </GridLayout>
  </Page>
</template>

<script>

import BottomNavbar from './views/BottomNavbar'
import News from './views/News'
import { screen } from 'tns-core-modules/platform'

export default {
  data() {
    return {
    
    }
  },
  components:{
    BottomNavbar,
    News
  },
  methods:{
    actionFrameLoaded(args){
      const frame = args.object;

      frame.translateY = screen.mainScreen.heightDIPs -190

    }
  }
};
</script>
