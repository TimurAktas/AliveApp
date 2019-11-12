<template>
<Page>
<GridLayout columns="*" rows="*">
    <StackLayout>
      

      <AbsoluteLayout>
        <WrapLayout horizontalAlignment="center">
          <Button class="heute" >Heute</Button>
          <Button  class="morgen"  >Morgen</Button>
          <Button  class="datum" >Datum</Button>
        </WrapLayout>
        <MapView
          width="100%"
          height="100%"
          dock="top"
          :zoom="zoom"
          :latitude="origin.latitude"
          :longitude="origin.longitude"
          v-if="allowExecution"
          @mapReady="mapReady"
          @coordinateLongPress="locationSelected"
          @markerInfoWindowTapped="markerInfoWindowTapped"
          @onCameraMove="onCameraMove"
        />
         <Button  class="testtext" >Event starten</Button>
      </AbsoluteLayout>
    
    </StackLayout>
</GridLayout>
</Page>
</template>

<script>
import * as http from "http";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
import * as platform from "platform";
import * as decodePolyline from "decode-google-map-polyline";
import { Position, Marker, Polyline, Bounds } from "nativescript-google-maps-sdk";


export default {
  data() {
    return {
      origin: { latitude: 51.52606121615919 , longitude:  7.551778592169285 },
      destination: { latitude: 0, longitude: 0 },
      journeyDetails: "Journey: Not started yet!!",
      allowExecution: true,
      journeyStarted: false,
      mapView: 2,
      zoom: 17,
      APIKEY: "AIzaSyDbupTcSkxibSUqEau8khAybJ_C2LShrO8",
      marker: null,
    }
  },
  created: function() {
    console.log("App wurde gebaut!")
  },
  methods: {
    locationSelected(args){
      console.log("----------------------------Neuer Marker ------------------------")
      
      var marker = new Marker();
      marker.position = Position.positionFromLatLng(args.position.latitude, args.position.longitude);
      marker.title = `${args.position.latitude},${args.position.longitude}`
      marker.snippet = "Hier entsteht alive!"
      marker.userData = { name : "Timur", name2: "Ugur"}
      this.mapView.addMarker(marker);
      
    },
    mapReady(args){
     
      
      this.mapView = args.object;

      // neuen Marker erstellen
      var marker = new Marker();
      marker.position = Position.positionFromLatLng(this.origin.latitude, this.origin.longitude)
      marker.title = "Wir haben bock auf eine fette Hausparty!"
      marker.snippet = "Wer bock hat einfach mal Anfrage schicken. Für Alkohol ist gesorgt (y)"
      marker.userData = { name : "Timur", name2: "Ugur"}

      // Marker Object übergeben
      this.mapView.addMarker(marker);

      console.log("Map ist geladen!!")
     
    },
    markerInfoWindowTapped(args){
      console.log("Hallo Ugur es geht")
    },
    onCameraMove(args) {
    console.log("Camera moving: "+JSON.stringify(args.camera));
},
    coordinateTapped(args){
      console.log(args)
    }
  }
};
</script>


<style>
Button{
  color:white;
}
.testtext{
  background-color: gray;
  color: white;
  top: 560;
  margin-left: 125;
  border-radius: 25;
  
}
.heute {
  background-color: rgb(206, 63, 63);
  color:white;
}
.morgen {
  background-color: rgb(70, 70, 204);
  color:white;

}
.datum {
  background-color: rgb(70, 194, 70);
  color:white;

}
MapView{
  margin-top: -50;
  z-index: -10;
}
WrapLayout {
  width: 98%;
  z-index: 10;
}
WrapLayout Button {
  font-size: 10;
  background-color: white;
  color:black;
  width: 33.33333%;
  height: 80;
}

Page {
  background-color: #474747;
}
TextView {
  border-bottom-color: transparent;
  color:white;
  border-bottom-width: 1;
  padding: 15;
}
</style>