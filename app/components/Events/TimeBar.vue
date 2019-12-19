<template>
  <WrapLayout>
    <StackLayout>
      <label class="text-center h3">Herzlich Willkommen {{userData.firstname}} </label>
      <label class="text-center h3">Heute, 12.12.19</label>
      <label class="text-center h3">{{countEvents}} Events</label>
    </StackLayout>
  </WrapLayout>
</template>

<script>
import store from '../../store/store'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userData', 'countEvents'])
  }
}
</script>

<style scoped>
  StackLayout{
    padding: 20;
    width: 100%;
  }
  WrapLayout {
    width: 100%;
    height: 150;
    border-radius: 0 0 30% 30%;
    z-index: 10;
    background: linear-gradient(90deg, rgba(146,126,233,1) 22%, rgba(232,117,185,1) 88%);
  }
</style>