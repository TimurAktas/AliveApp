<template>
    <Page>
       <StackLayout>
           <label text="Page 1" class="page-name" />
           <Button text="Go to 2" @tap="page1BtnTap" />
       </StackLayout>
    </Page>
</template>

<script>
import Page2Page from './Page2Page'
export default {
    components:{
        Page2Page,
    },
    methods:{
        page1BtnTap(args){
            this.$navigateTo(Page2Page, { frame: "home-page"});
        }
    }
}
</script>