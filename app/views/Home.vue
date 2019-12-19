<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551" >
       <StackLayout>
           <TimeBar />
           <EventList /> 
           <!-- Bei EventList wird noch ein Prop mit gegeben damit man Datum auswählen kann -->
       </StackLayout>
    </Page>
</template>

<script>
import TimeBar from '../components/Events/TimeBar'
import EventList from '../components/Events/EventList'

export default {
    components:{
        TimeBar,
        EventList
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped >

</style>