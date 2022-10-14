<template>
  <div>
    <HeaderDiv/>

    <router-view></router-view>
  </div>
</template>

<script>
import HeaderDiv from './components/HeaderDiv.vue'

export default {
  name: 'App',
  components: {
    HeaderDiv
  }
}
</script>

<style>
/* add a font  */
</style>
