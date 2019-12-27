<template>
<Page backgroundColor="#2A3551" > 
      <ActionBar title="Detail"/>
      <StackLayout>
          <DatePicker v-model="selectedDate" />
          <TimePicker v-model="selectedTime" />
        <label class="footnote"> {{id}}</label>
        <Button @tap="$modal.close" text="Close" />
        <Button @tap="$modal.close(selectedDate)" text="Close" />
      </StackLayout>
    </Page>
</template>

<script>


export default {
    props: ['id'],
    data(){
        return{
            selectedDate: '',
        }
    }
}
</script>

<style>





</style>