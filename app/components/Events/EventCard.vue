<template>
    <GridLayout>
        <StackLayout class="list-group-item" @tap="onItemTap">
            <label> Event von {{eventData.from}} </label>
            <label> Event von {{eventData.title}} </label>
            <label> Event von {{eventData.desc}} </label>
        </StackLayout>
    </GridLayout>
</template>

<script>
import EventInfo    from '../../views/EventInfo'

export default {
    props: ['eventData'],
    components:{
        EventInfo
    },
    data(){
        return{
        }
    }, 
    methods:{
        onItemTap(){
            this.$navigateTo(EventInfo, { 
                props: {
                    event: this.eventData,
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
    margin: 10 5 0;
    border-radius: 10% 10% 10% 10%;
    background: linear-gradient(to left,#3B4568, #495676);
    box-shadow: 10px 5px 5px rgb(184, 181, 181);
}
</style>