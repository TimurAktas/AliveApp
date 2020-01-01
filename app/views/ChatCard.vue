<template>
    <StackLayout class="list-group-item" @tap="onItemTap">
        <label> Event von {{eventReq.from}} </label>
        <label> Event von {{eventReq.msg}} </label>
        <label> Event von {{eventReq.time}} </label>
    </StackLayout>
</template>

<script>
import Privatchat from '../views/PrivatChat'
export default {
    props: ['eventReq'],
    components:{
        Privatchat
    },
    data(){
        return{
        }
    }, 
    methods:{
        onItemTap(){
            this.$navigateTo(Privatchat, { 
                props: {
                    eventReqData: this.eventReq,
                },
                transition: {
                    name:'fade'
                },
            })
        }
    }
}
</script>

<style scoped >

.list-group-item{
    padding: 10;
    height: 130;
    border-bottom-width: 0.4;
    border-bottom-color: black;
}


</style>