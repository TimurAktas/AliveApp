<template>
    <Page actionBarHidden="false" backgroundColor="#2A3551" >
        <NewsOne />
    </Page>
</template>

<script>
import NewsOne from '../views/NewsOne'

export default {
    components:{
        NewsOne
    },
    created(){

    },
    data(){
        return{
         
        }
    },
    methods:{
        indexChange: function(args) {
            let newIndex = args.value
            console.log('Current tab index: ' + newIndex)
        },
    },


}
</script>

<style>
ListView{
    height: 500;
}
</style>