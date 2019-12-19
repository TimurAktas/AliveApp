<template>
    <StackLayout class="list-group-item">
        <label> Event von {{eventData.from}} </label>
        <label> Event von {{eventData.title}} </label>
        <label> Event von {{eventData.desc}} </label>
    </StackLayout>
</template>

<script>

export default {
    props: ['eventData'],
    data(){
        return{
        }
    }, 
}
</script>

<style scoped >

.list-group-item{
    padding: 10;
    height: 130;
    margin: 10 5 0;
    border-radius: 10% 10% 10% 10%;
    background: linear-gradient(to left,#3B4568, #495676);
}
</style>