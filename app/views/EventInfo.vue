<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551">
   <StackLayout>
      <label class="h2"> Event von {{event.from}} </label>
      <label class="footnote"> {{event.title}}</label>
      <label class="body"> {{event.desc}} </label>
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