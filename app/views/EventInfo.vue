<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551">
   <StackLayout>
      <label> Event von {{event.from}} </label>
      <label> {{event.title}}</label>
      <label> {{event.desc}} </label>
    </StackLayout>
</Page>

</template>

<script>


export default {
  props: ['event'],
}
</script>

<style>




</style>