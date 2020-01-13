<template>
    <Page actionBarHidden="true" backgroundColor="#2A3551" >
        <StackLayout>
            <Label :text="value" col="1" row="1" v-model="value" />
            <TextField ref="value" v-model="value" borderBottomWidth="1" borderBottomColor="#cec8c8" padding="0" @textChange="googleAutocomplete" />
      
            <Button @tap="$modal.close(ort)" text="Auswählen" />
            <Button @tap="message" text="Value" />
        </StackLayout>
</Page>

</template>

<script>
import store from '../store/store'

export default {
  components:{
    
  },
  textChange(){

  },
  mounted(){
  
  },
  data(){
    return{
        ort: "Deutschland",
        value: null,
        mySearch: null,
        test: null
    }
  },
  methods:{
    sendRequest(){

    
    },
    message(){
        console.log("Value", this.value)
    },
    googleAutocomplete(){
        const httpModule = require("tns-core-modules/http");
        httpModule.getJSON("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=dortmund&types=geocode&language=de&key=AIzaSyDbupTcSkxibSUqEau8khAybJ_C2LShrO8")
        .then(result => { console.log(result)})
        .catch(e => {
            console.log("Places Api Key funktionierte nicht: ", e);
        });
        clearTimeout(this.mySearch);
        this.mySearch = setTimeout(function(){console.log("HEllo world") }, 3000);
    }
  }
}
</script>

<style>


Image {
    width: 50;
    height: 50;

}



</style>