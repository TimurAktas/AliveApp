<template>
  <Page actionBarHidden="true">
      <AbsoluteLayout>
        <TimeBar />
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
      </AbsoluteLayout>
  </Page>
</template>

<script>
import * as http from "http";
import * as platform from "platform";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe at what accuracy the location should be get
import * as decodePolyline from "decode-google-map-polyline";
import { Position, Marker, Polyline, Bounds } from "nativescript-google-maps-sdk";
import TimeBar from '../components/Events/TimeBar'
import * as firebase from "nativescript-plugin-firebase/app";
import GMapStyle from '../map-style.json';
import EventInfo      from '../views/EventInfo'

export default {
  components:{
    TimeBar,
    EventInfo
  },
  data() {
    return {
      origin: { latitude: 51.52606121615919 , longitude:  7.551778592169285 }, //Das ist der Punkt wo der Map Mittelpunkt sein soll.
      destination: { latitude: 0, longitude: 0 },
      journeyDetails: "Journey: Not started yet!!",
      allowExecution: false,
      journeyStarted: false,
      mapView: 2,
      zoom: 17,
      APIKEY: "AIzaSyDbupTcSkxibSUqEau8khAybJ_C2LShrO8",
      marker: null,
    }
  },
  created() {
    this.allowExecution = true;
  },
  mounted(){

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
      console.log("Map ist geladen!!")
      const ref = firebase.firestore().collection("events");
      this.mapView = args.object;
      this.mapView.setStyle(GMapStyle)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          // neuen Marker erstellen
          var marker = new Marker();
          marker.position = Position.positionFromLatLng(doc.data().lat, doc.data().lng)
          marker.title = doc.data().title
          marker.snippet = doc.data().desc
          // Marker Object übergeben
          this.mapView.addMarker(marker);
          console.log(`${doc.data().title} => ${JSON.stringify(doc.data())}`);
        });
      });     
    },
    markerInfoWindowTapped(args){
      console.log(args.marker)
      this.$navigateTo(EventInfo, { 
        props: {
          event: args.marker,
        },
        transition: {
          name:'fade'
        },
      })
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


<style scoped>
MapView{
  z-index: -10;
}

</style>