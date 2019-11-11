<template>
  <Page actionBarHidden="true" androidStatusBarBackground="#474747">
    <GridLayout>
        <Frame id="home-page">
            <HomePage />
        </Frame>

        <Frame @loaded="actionFrameLoaded">
          <ActionPage />
        </Frame>
    </GridLayout>
  </Page>
</template>

<script>
import HomePage from './views/HomePage'
import ActionPage from './views/ActionPage'
import { screen } from 'tns-core-modules/platform'
export default {
  data() {
    return {
    
    }
  },
  components:{
    HomePage,
    ActionPage
  },
  methods:{
    actionFrameLoaded(args){
      const frame = args.object;

      frame.translateY = screen.mainScreen.heightDIPs -120
    }
  }
};
</script>
