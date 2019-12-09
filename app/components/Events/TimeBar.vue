<template>
  <WrapLayout horizontalAlignment="center">
          <Button class="datePicker">Heute</Button>
          <Button class="datePicker">Morgen</Button>
          <Button class="datePicker">Datum</Button>
    </WrapLayout>
</template>

<script>
export default {

}
</script>

<style>
.datePicker {
  /* background-color: rgb(53, 51, 51);
  color:white; */
  background-color: white;
  color: black;
}

WrapLayout {
  width: 100%;
  z-index: 10;
}
WrapLayout Button {
  font-size: 10;

  color:black;
  width: 33.33333%;
  height: 80;
}
</style>