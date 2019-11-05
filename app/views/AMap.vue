<template>
  <GridLayout columns="*" rows="*">
        <Label class="Events" :text="msg" col="0" row="0"/>
    </GridLayout>
</template>

<script>
export default {
    data(){
        return{
            msg: 'Hier kommt die Map rein'
        }
    },
    created(){
        console.log("hello world")
    }
}
</script>

<style>

</style>