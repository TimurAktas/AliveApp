<template>
    <StackLayout class="smallEventCard" @tap="onItemTap">     
        <label> {{interest}}</label>      
    </StackLayout>
</template>


<script>

export default {
    props: ['interest'],
    components:{
     
    },
    data(){
        return{
        }
    }, 
    methods:{
        onItemTap(){
            console.log("Small Event Tapped!")
        }
    }
}
</script>

<style scoped >
    .smallEventCard{
        margin-left: 10;
        margin-right: 10;
        height: 130;
        width: 230;
        border-radius: 20% 20% 20% 20%;
        padding: 10;
        border-width: 1;
        border-color: #414C6C;
        background-color: #414C6C;
    }
</style>