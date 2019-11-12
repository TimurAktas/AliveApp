<template>
  <Page actionBarHidden="true" androidStatusBarBackground="#474747">
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

      frame.translateY = screen.mainScreen.heightDIPs -120
    }
  }
};
</script>
