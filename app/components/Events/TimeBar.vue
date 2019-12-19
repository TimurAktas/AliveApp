<template>
  <WrapLayout horizontalAlignment="center">
    <StackLayout>
      <label>Herzlich Willkommen {{userData.firstname}} </label>
      <label>Heute, 12.12.19</label>
      <label>20 Events</label>
    </StackLayout>
  </WrapLayout>
</template>

<script>
import store from '../../store/store'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userData'])
  }
}
</script>

<style>
  WrapLayout {
    width: 100%;
    height: 150;
    border-radius: 0 0 30% 30%;
    z-index: 10;
    background: linear-gradient(90deg, rgba(146,126,233,1) 22%, rgba(232,117,185,1) 88%);
  }
</style>