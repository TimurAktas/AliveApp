<template>
  <Page androidStatusBarBackground="#474747">
    <ActionBar title="Realtime Location NSVUE"/>
    <StackLayout>
    <WrapLayout horizontalAlignment="center">
        <Button @tap="getDirections">Get Directions</Button>
        <Button @tap="clearRoute">Clear Route</Button>
        <Button @tap="startJourney">Start Journey</Button>
        <button @tap="endJourney">End Journey</button>
      </WrapLayout>

      <DockLayout>
        <MapView
          width="100%"
          height="85%"
          dock="top"
          :zoom="zoom"
          :latitude="origin.latitude"
          :longitude="origin.longitude"
          v-if="allowExecution"
          @mapReady="mapReady"
          @coordinateLongPress="locationSelected"
        />
        <TextView dock="bottom" :text="journeyDetails" editable="false"/>
      </DockLayout>
    </StackLayout>
  </Page>
</template>


<script>

/* necessary imports */
export default {
  data() {
    return {
      origin: { latitude: 0, longitude: 0 },
      destination: { latitude: 0, longitude: 0 },
      journeyDetails: "Journey: Not started yet!!!!!!",
      allowExecution: false,
      journeyStarted: false,
      mapView: null,
      zoom: 17,
      APIKEY: "AIzaSyDbupTcSkxibSUqEau8khAybJ_C2LShrO8"
    }
  }
};
</script>


<style>
Button {
  font-size: 9;
  background-color: #474747;
  color:white;
  width:25%;
}
ActionBar {
  background-color: #474747;
  color:white;
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